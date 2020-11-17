// フォームからカレンダーへ登録を行う
function addTaskEvents() {

  var myCal = CalendarApp.getCalendarById('xxx@group.calendar.google.com'); //カレンダーIDでカレンダーを取得
  var mySheet = SpreadsheetApp.getActiveSheet(); //シートを取得
  var dat = mySheet.getDataRange().getValues(); //シートデータを取得

  for(var i=1; i<dat.length; i++){
    if(dat[i][3] == ""){
      //利用日時をセット
      var evtDate = new Date(dat[i][1]);
      var evtEndTime = new Date(dat[i][1]);
      var evtTime = new Date(dat[i][2]);
      evtDate.setHours(evtTime.getHours());
      evtDate.setMinutes(evtTime.getMinutes());     
      
      //利用時間を1時間で想定
      evtEndTime.setHours(evtTime.getHours() + 1 );
      evtEndTime.setMinutes(evtTime.getMinutes());     

      //利用情報をカレンダーへ登録
      var myEvt = myCal.createEvent('PC利用日',evtDate,evtEndTime); //カレンダーにタスクをイベントとして追加

//      dat[1][3]='未完'; //←これだとうまくいかない
      mySheet.getRange(i + 1, 4).setValue('登録済み');
    }
  }
}
