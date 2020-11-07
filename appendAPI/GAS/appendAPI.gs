function doPost(e) { 
//  var ui = SpreadsheetApp.getUi();
//ブックID
  var ss = SpreadsheetApp.openById('1TR7hy86hQOUEjuUlV3R5UUvkgBlxosp-PKbJIMgbr8A');
//シート名
  var sheet = ss.getSheetByName('InputTest');
//現在の項目数(A列参照)
  var last_row = sheet.getRange("A:A").getValues().filter(String).length;

//(検証中)変数を動的にしてみる
  var fLine = 'firstLine'
  
  try{
//書き込み処理
//    sheet.getRange(last_row + 1,1).setValue('test');
    sheet.getRange(last_row + 1,1).setValue(e.parameter.firstLine);
    sheet.getRange(last_row + 1,2).setValue(e.parameter.secondLine);

//(検証中)変数を動的にしてみる
    sheet.getRange(last_row + 1,3).setValue(eval('e.parameter.' + fLine));
    sheet.getRange(last_row + 1,4).setValue(e.parameter[1]);
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
