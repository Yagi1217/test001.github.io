function doPost(e) { 
//  var ui = SpreadsheetApp.getUi();
  
//ブックID
  var ss = SpreadsheetApp.openById('1TR7hy86hQOUEjuUlV3R5UUvkgBlxosp-PKbJIMgbr8A');
//シート名
  var sheet = ss.getSheetByName('InputTest');
//現在の項目数(A列参照)
  var last_row = sheet.getRange("A:A").getValues().filter(String).length;

//パラメータの総数
  var count = e.parameter.count;
  
  try{
//書き込み処理
//    sheet.getRange(last_row + 1, rowInt++).setValue(e.parameter); //postパラメータの中身全て
    for (let i = 1; i <= count; i++) {
      sheet.getRange(last_row + 1, i).setValue(eval('e.parameter.input' + i));
    }
  }

  catch(e) {
//書き込み処理エラー
    return HtmlService.createHtmlOutput('<h2>登録に失敗しました。</h2>');

  }
//処理後に行う
//  ui.alert('title', '完了', ui.ButtonSet.YES_NO);
//  ui.alert('完了');
//  location.href='https://google.com';
  return HtmlService.createHtmlOutput('<a href="https://yagi1217.github.io/test001.github.io/appendAPI/index.html">移動</a>');
}
