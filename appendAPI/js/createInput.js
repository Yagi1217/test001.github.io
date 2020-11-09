  var num = 1;
  function createInput(){
    num++;
    
//    var inputName = "num"+num;
    var myli = document.createElement("li");
    var myp = document.createElement("p");
    var input = document.createElement("input");
    
    input.setAttribute("type","text");
    input.setAttribute("name",num);
    
    myp.appendChild(input)
    myli.appendChild(myp)
    
    document.getElementById("input").appendChild(myli);
    $(function(){
    //hidenタイプの値を増加させる(送信するpostの情報量を指定する)
      //var value = $('form[name="1"]').attr('name', 'num');
      //var name = $('input[type="hidden"]').attr('name', num);
      var value = $('input[type="hidden"]').attr('value', num);
    });
    /* 
    // 10個以上になったらそれ以上増やさない場合
    var limit = 10;
    if(num > limit){
    
    return false;
    }
    */
  }
