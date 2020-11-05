function getData(id, sheetName) {
  var sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  var rows = sheet.getDataRange().getValues();
  var keys = rows.splice(0, 1)[0];
  return rows.map(function(row) {
    var obj = {}
    row.map(function(item, index) {
      obj[keys[index]] = item;
    });
    return obj;
  });
}

function doGet(...args) {
//引数で返す内容を切り替えようとしたが、これは上手くいかず
  var sheetName = '';
  
  switch (args.length) {
    case 1:
      sheetName = args[0];
    default:
      //基本はここで処理をすることになると思う
      BookListSheetName = 'BookList';
      ProjectListSheetName = 'ProjectList';
  }
  
  var data = getData('1vR51cCY3aHBjE8A2BZxB3ddxrwLAH3BrGDctsa2JTc8', BookListSheetName);
  var data2 = getData('1vR51cCY3aHBjE8A2BZxB3ddxrwLAH3BrGDctsa2JTc8', ProjectListSheetName);
  return ContentService.createTextOutput('{\n  "' + BookListSheetName + '": ' + JSON.stringify(data, null, 2) + 
    ',\n  "' + ProjectListSheetName + '": ' + JSON.stringify(data2, null, 2) + '\n}')
  .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
function doPost(...args) {
  doGet(arguments);
}
