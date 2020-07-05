<template lang="pug">
  div
    v-btn( block @click="dialog = true")
           v-icon(left) extension
           | Экспорт в Excel
    v-dialog(v-model='dialog', max-width='340')
      v-card
        v-card-title.headline Экспорт в .xslx формат
        v-card-text
          | Для сохранения прогноза введите навзания файла. Созданый файл появится в вашей директории, куда  по умолчанию произходит сохранение 
        v-text-field.mt-2.mx-6(label='Введти название файла', v-model='fileName' placeholder='Пронгоз №23 // Google ads')
        v-checkbox.ml-6(v-model='checkbox', :label='`Сохранить на сервере`')

        v-card-actions
          v-spacer
          v-btn(color='green darken-1', text='', @click='dialog = false')
            | Отмена
          v-btn(color='green darken-1', text='', @click=' saveFile')
            | Сохранить


    <!-- <el-button @click="getCoordRange('B7:L13')">GetRange</el-button> -->
</template>
<script>
import Excel from "exceljs";
import { svgAsPngUri } from "save-svg-as-png";
import { saveAs } from "file-saver";
export default {
  props: {
    exportedData: {
      type: Object
    },
    summaryStatistic: {
      type: Object
    },
    ruNames: {
      type: Object
    }
  },
  data() {
    return {
      fileName: "",
      dialog: false,
      checkbox: false,
      pictures: {},
      kek: "asdasd",
      workbook: new Excel.Workbook()
    };
  },
  mounted() {},
  computed: {
    validArray() {
      return this.$store.state.validArray;
    },
    mainArr() {
      return this.$store.state.mainArr;
    }
  },
  methods: {
    findMaxLength(tableRows) {
      let lengthArr = [];
      for (let row of tableRows) {
        lengthArr.push(row[0].length);
      }
      console.log(Math.max(...lengthArr));
      return Math.max(...lengthArr);
    },
    styled(obj) {
      obj.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "77777777" }
      };
      obj.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };
      obj.font = {
        color: { argb: "ffffffff" },
        size: 13
      };
      obj.alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true
      };
    },
    getEnglishName(ruName) {
      return Object.keys(this.$store.state.dictionary).find(
        key => this.$store.state.dictionary[key] === ruName
      );
    },
    getCoordRange(range) {
      let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
      range = range.split(":");
      let letterStartIndex = range[0][0];
      let numberStartIndex = parseInt(range[0].substr(1, range[0].length));
      let letterEndIndex = range[1][0];
      let numberEndIndex = parseInt(range[1].substr(1, range[1].length));
      const rangeArray = new Array();
      for (let j = numberStartIndex; j <= numberEndIndex; j++) {
        let row = new Array();
        for (
          let i = alphabet.indexOf(letterStartIndex);
          i <= alphabet.indexOf(letterEndIndex);
          i++
        ) {
          row.push(`${alphabet[i]}${j}`);
        }
        rangeArray.push(row);
      }
      return rangeArray;
    },
    coloringBackgroundOfSheet(worksheet) {
      let page = this.getCoordRange("A1:Z99");
      page.map(row => {
        row.map(cell => {
          const CurrentCell = worksheet.getCell(cell);
          CurrentCell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "ffffffff" }
          };
        });
      });
    },
    getIndex(array, name) {
      let index;
      array.map(item => {
        if (item[0].name == name) {
          index = array.indexOf(item);
        }
      });
      return index;
    },
    createDefaultSheet(worksheet) {
      let worksheetColumns = [];
      let tableRows = [];
      let audienceTablesColumns = [];
      let audienceTables = [];

      tableRows = [];
      worksheetColumns = [];
      for (const key in this.mainArr[0]) {
        worksheetColumns.push({ name: key, filterButton: false });
      }
      for (const rowIndex in this.mainArr) {
        let rowElems = [];
        for (let prop in this.mainArr[rowIndex]) {
          const element = this.mainArr[rowIndex][prop];
          rowElems.push(element);
        }
        tableRows.push(rowElems);
      }
      audienceTables.push(tableRows);
      audienceTablesColumns.push(worksheetColumns);

      worksheet.getCell("B1").value = "Исходные данные";
      worksheet.addTable({
        name: "segment",
        ref: "B2",
        headerRow: true,
        totalsRow: false,
        style: {
          theme: false,
          showRowStripes: true,
          showFirstColumn: true,
          showColumnStripes: true,
          showLastColumn: true
        },
        columns: audienceTablesColumns[0],
        rows: audienceTables[0]
      });
      console.log("aaaaaa", audienceTablesColumns, audienceTables);

      worksheet.getColumn(2).width = 25;
      worksheet.getColumn(3).width = 15;
      worksheet.getColumn(6).width = 47;
      worksheet.getColumn(10).width = 27;
      let arrayOfTable = ["segment"];

      let MaxLength = [];
      for (let table of audienceTables) {
        MaxLength.push(this.findMaxLength(table));
      }
      for (let index = 0; index < arrayOfTable.length; index++) {
        const table = worksheet.getTable(arrayOfTable[index]);
        const rowsArray = this.getCoordRange(table.table.tableRef);
        worksheet.getRow(
          worksheet.getCell(table.table.ref)._row._number
        ).height = 55;
        rowsArray[0].map(cell => {
          let firstCol = worksheet.getCell(rowsArray[0][0]);
          console.log("firstCol", firstCol);
          const CurrentCell = worksheet.getCell(cell);
          this.styled(CurrentCell);
          const ColumnLength =
            CurrentCell._value.value.length < 10
              ? 15
              : CurrentCell._value.value.length;
          worksheet.getColumn(CurrentCell._column._number).width = ColumnLength;
          worksheet.getColumn(firstCol._column._number).width =
            Math.max(...MaxLength) + 5; // Ширина первой колонки
        });
        //  rowsArray[rowsArray.length-1].map(cell => {
        //   this.styled(worksheet.getCell(cell))
        // })
        let contentRows = new Array();
        for (const rowIndex in rowsArray) {
          if (rowIndex != 0) {
            contentRows.push(rowsArray[rowIndex]);
          }
        }
        contentRows.map(row => {
          row.map(cell => {
            const CurrentCell = worksheet.getCell(cell);
            CurrentCell.border = {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" }
            };
            CurrentCell.alignment = {
              horizontal: "center",
              vertical: "middle"
            };
          });
        });
      }
    },
    createAudienceSheet(worksheet) {
      worksheet.addImage(this.pictures.real, {
        tl: { col: 9, row: 6 },
        br: { col: 18, row: 22 }, // j
        editAs: "undefined"
      });
      worksheet.addImage(this.pictures.forecast, {
        tl: { col: 9, row: 20 },
        br: { col: 18, row: 36 }, // j
        editAs: "undefined"
      });
      let worksheetColumns = [];
      let tableRows = [];
      let audienceTablesColumns = [];
      let audienceTables = [];

      tableRows = [];
      worksheetColumns = [];
      for (const key in this.validArray[0]) {
        // const element = this.validArray[0][key];
        worksheetColumns.push({ name: key, filterButton: false });
      }
      for (const rowIndex in this.validArray) {
        let rowElems = [];
        for (let prop in this.validArray[rowIndex]) {
          const element = this.validArray[rowIndex][prop];
          rowElems.push(element);
        }
        tableRows.push(rowElems);
      }
      audienceTables.push(tableRows);
      audienceTablesColumns.push(worksheetColumns);
      console.log("aaaaaa");

      worksheet.getCell("B1").value = "Отчет";
      worksheet.addTable({
        name: "segment",
        ref: "B2",
        headerRow: true,
        totalsRow: false,
        style: {
          theme: false,
          showRowStripes: true,
          showFirstColumn: true,
          showColumnStripes: true,
          showLastColumn: true
        },
        columns: audienceTablesColumns[0],
        rows: audienceTables[0]
      });
      console.log("aaaaaa", audienceTablesColumns, audienceTables);

      worksheet.getColumn(2).width = 25;
      worksheet.getColumn(3).width = 15;
      worksheet.getColumn(6).width = 47;
      worksheet.getColumn(10).width = 27;
      let arrayOfTable = ["segment"];

      let MaxLength = [];
      for (let table of audienceTables) {
        MaxLength.push(this.findMaxLength(table));
      }
      for (let index = 0; index < arrayOfTable.length; index++) {
        const table = worksheet.getTable(arrayOfTable[index]);
        const rowsArray = this.getCoordRange(table.table.tableRef);
        worksheet.getRow(
          worksheet.getCell(table.table.ref)._row._number
        ).height = 55;
        rowsArray[0].map(cell => {
          let firstCol = worksheet.getCell(rowsArray[0][0]);
          console.log("firstCol", firstCol);
          const CurrentCell = worksheet.getCell(cell);
          this.styled(CurrentCell);
          const ColumnLength =
            CurrentCell._value.value.length < 10
              ? 15
              : CurrentCell._value.value.length;
          worksheet.getColumn(CurrentCell._column._number).width = ColumnLength;
          worksheet.getColumn(firstCol._column._number).width =
            Math.max(...MaxLength) + 5; // Ширина первой колонки
        });
        //  rowsArray[rowsArray.length-1].map(cell => {
        //   this.styled(worksheet.getCell(cell))
        // })
        let contentRows = new Array();
        for (const rowIndex in rowsArray) {
          if (rowIndex != 0) {
            contentRows.push(rowsArray[rowIndex]);
          }
        }
        contentRows.map(row => {
          row.map(cell => {
            const CurrentCell = worksheet.getCell(cell);
            CurrentCell.border = {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" }
            };
            CurrentCell.alignment = {
              horizontal: "center",
              vertical: "middle"
            };
          });
        });
      }
    },
    createSheet(sheetName, num) {
      let worksheet;

      worksheet = this.workbook.addWorksheet(sheetName, {});
      worksheet.getColumn(1).width = 3;

      this.coloringBackgroundOfSheet(worksheet);
      if (num == 1) {
        this.createAudienceSheet(worksheet);
      } else if (num === 2) {
        this.createDefaultSheet(worksheet);
      }
    },
    saveFile() {
      console.log("save File");
      this.workbook = new Excel.Workbook();
      let png = svgAsPngUri(
        document.querySelector("#real").children[0].children[0]
      );
      let png2 = svgAsPngUri(
        document.querySelector("#forecast").children[0].children[0]
      );
      let arrayOfPromises = [png, png2];
      // let png2 =  svgAsPngUri(document.querySelector('#dailyFirst').children[0].children[0])
      Promise.all(arrayOfPromises).then(
        value => {
          this.pictures.real = this.workbook.addImage({
            base64: value[0],
            extension: "jpg"
          });
          if (window.innerWidth >= 500) {
            this.pictures.forecast = this.workbook.addImage({
              base64: value[1],
              extension: "png"
            });
          }
          this.createSheet("Прогноз", 1);
          this.createSheet("Исходные данные", 2);
          window.workbook = this.workbook;
          let that = this;
          this.workbook.xlsx.writeBuffer().then(function(data) {
            var blob = new Blob([data], {
              type:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            saveAs(blob, that.fileName + ".xlsx");
            this.dialog = false;
          });
        },
        reason => {
          console.log(reason);
        }
      );
    }
  }
};
</script>
<style>
</style>