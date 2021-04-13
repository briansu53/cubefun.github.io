/*16 種判斷情況
點擊 判斷狀況組合*/

//初始空白
//x4y1 角         top x4y2   bottom 0      left x3y1   right 0
$('.x4y1').click(function(){
  var datavalue1 = $('.x4y2').attr('data');
  var datavalue2 = $('.x3y1').attr('data');
  var txt = $('.x4y1').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x4y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y2').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x3y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y1').append(txt);
    $(this).empty();
  }
});
//x1y4 角         top 0      bottom x1y3   left 0      right x2y4
$('.x1y4').click(function(){
  var datavalue1 = $('.x2y4').attr('data');
  var datavalue2 = $('.x1y3').attr('data');
  var txt = $('.x1y4').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x2y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y4').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x1y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y3').append(txt);
    $(this).empty();
  }
});

//x1y1 角         top x1y2   bottom 0      left 0      right x2y1 
$('.x1y1').click(function(){
  var datavalue1 = $('.x1y2').attr('data');
  var datavalue2 = $('.x2y1').attr('data');
  var txt = $('.x1y1').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x1y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y2').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x2y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y1').append(txt);
    $(this).empty();
  }
});

//x4y4 角         top 0      bottom x4y3   left x3y4   right 0
$('.x4y4').click(function(){
  var datavalue1 = $('.x4y3').attr('data');
  var datavalue2 = $('.x3y4').attr('data');
  var txt = $('.x4y4').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x4y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y3').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x3y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y4').append(txt);
    $(this).empty();
  }
});


//x2y2 中         top x2y3   bottom x2y1   left x1y2   right x3y2
$('.x2y2').click(function(){
  var datavalue1 = $('.x2y3').attr('data');
  var datavalue2 = $('.x2y1').attr('data');
  var datavalue3 = $('.x1y2').attr('data');
  var datavalue4 = $('.x3y2').attr('data');
  var txt = $('.x2y2').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x2y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y3').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x2y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y1').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x1y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y2').append(txt);
    $(this).empty();
  }else if( datavalue4 == '0' ){
    $('.x3y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y2').append(txt);
    $(this).empty();
  }
});


//x3y2 中         top x3y3   bottom x3y1   left x2y2   right x4y2
$('.x3y2').click(function(){
  var datavalue1 = $('.x3y3').attr('data');
  var datavalue2 = $('.x3y1').attr('data');
  var datavalue3 = $('.x2y2').attr('data');
  var datavalue4 = $('.x4y2').attr('data');
  var txt = $('.x3y2').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x3y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y3').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x3y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y1').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x2y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y2').append(txt);
    $(this).empty();
  }else if( datavalue4 == '0' ){
    $('.x4y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y2').append(txt);
    $(this).empty();
  }
});

//x2y3 中         top x2y4   bottom x2y2   left x1y3   right x4y3
$('.x2y3').click(function(){
  var datavalue1 = $('.x2y4').attr('data');
  var datavalue2 = $('.x2y2').attr('data');
  var datavalue3 = $('.x1y3').attr('data');
  var datavalue4 = $('.x3y3').attr('data');
  var txt = $('.x2y3').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x2y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y4').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x2y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y2').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x1y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y3').append(txt);
    $(this).empty();
  }else if( datavalue4 == '0' ){
    $('.x3y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y3').append(txt);
    $(this).empty();
  }
});
//x3y3 中         top x3y4   bottom x3y2   left x2y3   right x4y3
$('.x3y3').click(function(){
  var datavalue1 = $('.x3y4').attr('data');
  var datavalue2 = $('.x3y2').attr('data');
  var datavalue3 = $('.x2y3').attr('data');
  var datavalue4 = $('.x4y3').attr('data');
  var txt = $('.x3y3').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x3y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y4').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x3y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y2').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x2y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y3').append(txt);
    $(this).empty();
  }else if( datavalue4 == '0' ){
    $('.x4y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y3').append(txt);
    $(this).empty();
  }
});

//x1y3 邊         top x1y4   bottom x1y2   left 0      right x2y3
$('.x1y3').click(function(){
  var datavalue1 = $('.x1y4').attr('data');
  var datavalue2 = $('.x1y2').attr('data');
  var datavalue3 = $('.x2y3').attr('data');
  var txt = $('.x1y3').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x1y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y4').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x1y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y2').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x2y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y3').append(txt);
    $(this).empty();
  }
});

// x1y2 邊         top x1y3   bottom x1y1   left 0      right x2y2
$('.x1y2').click(function(){
  var datavalue1 = $('.x1y3').attr('data');
  var datavalue2 = $('.x1y1').attr('data');
  var datavalue3 = $('.x2y2').attr('data');
  var txt = $('.x1y2').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x1y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y3').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x1y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y1').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x2y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y2').append(txt);
    $(this).empty();
  }
});

//x2y1 邊         top x2y2   bottom 0      left x1y1   right x3y1
$('.x2y1').click(function(){
  var datavalue1 = $('.x2y2').attr('data');
  var datavalue2 = $('.x1y1').attr('data');
  var datavalue3 = $('.x3y1').attr('data');
  var txt = $('.x2y1').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x2y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y2').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x1y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y1').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x3y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y1').append(txt);
    $(this).empty();
  }
});


// x3y1 邊         top x3y2   bottom 0      left x2y1   right x4y1
$('.x3y1').click(function(){
  var datavalue1 = $('.x3y2').attr('data');
  var datavalue2 = $('.x2y1').attr('data');
  var datavalue3 = $('.x4y1').attr('data');
  var txt = $('.x3y1').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x3y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y2').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x2y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y1').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x4y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y1').append(txt);
    $(this).empty();
  }
});

// x4y3 邊         top x4y4   bottom x4y2   left x3y3   right 0
$('.x4y3').click(function(){
  var datavalue1 = $('.x4y4').attr('data');
  var datavalue2 = $('.x4y2').attr('data');
  var datavalue3 = $('.x3y3').attr('data');
  var txt = $('.x4y3').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x4y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y4').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x4y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y2').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x3y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y3').append(txt);
    $(this).empty();
  }
});

// x4y2 邊         top x4y3   bottom x4y1   left x3y2   right 0
$('.x4y2').click(function(){
  var datavalue1 = $('.x4y3').attr('data');
  var datavalue2 = $('.x4y1').attr('data');
  var datavalue3 = $('.x3y2').attr('data');
  var txt = $('.x4y2').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x4y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y3').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x4y1').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y1').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x3y2').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y2').append(txt);
    $(this).empty();
  }
});

// x2y4 邊         top 0      bottom x2y3   left x1y4   right x3y4
$('.x2y4').click(function(){
  var datavalue1 = $('.x2y3').attr('data');
  var datavalue2 = $('.x1y4').attr('data');
  var datavalue3 = $('.x3y4').attr('data');
  var txt = $('.x2y4').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x2y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y3').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x1y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x1y4').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x3y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y4').append(txt);
    $(this).empty();
  }
});

// x3y4 邊         top 0      bottom x3y3   left x2y4   right x4y4
$('.x3y4').click(function(){
  var datavalue1 = $('.x3y3').attr('data');
  var datavalue2 = $('.x2y4').attr('data');
  var datavalue3 = $('.x4y4').attr('data');
  var txt = $('.x3y4').html();
  console.log(txt);
  if( datavalue1 == '0' ){
    $('.x3y3').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x3y3').append(txt);
    $(this).empty();
  }else if( datavalue2 == '0' ){
    $('.x2y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x2y4').append(txt);
    $(this).empty();
  }else if( datavalue3 == '0' ){
    $('.x4y4').attr({'data':'1'});
    $(this).attr({'data':'0'});
    $('.x4y4').append(txt);
    $(this).empty();
  }
});

//亂數設計
/* 
以click事件觸發
以getNumSet取得隨機組合，共兩個組合隨機抽樣。
以getMovebox隨機選取arr陣列中的陣列組合，共15個)
*/
$('.btn_start').click(function(){
  $('.btn_start, .btn_easy').addClass('btn_clear');
  function getNumSet(q){
    return Math.floor(Math.random()* q )+1;
  }
  var numSet = getNumSet(2); // 1~2 兩個亂數組合 
  console.log(numSet);  
  if ( numSet == 1 ){
    console.log("this is numSet == 1")
    function getMovebox(w){
      return Math.floor(Math.random()* w )+1;
    }
    var b =getMovebox(15);
    console.log(b);
    var arr = [
      [1,2,3,4,5,6,7,8,9,10,15,11,13,14,12],
      [1,9,3,10,5,6,14,8,2,15,12,13,4,7,11],
      [2,10,15,9,3,14,7,11,5,8,12,4,13,6,1],
      [3,5,12,4,11,6,10,2,7,13,9,1,8,14,15],
      [4,11,6,12,9,10,1,13,5,15,7,14,2,8,3],
      [5,1,10,6,9,3,11,15,2,13,7,8,12,4,14],
      [6,14,7,5,13,10,9,1,4,3,15,2,8,11,12],
      [7,15,9,10,6,8,2,1,11,14,12,4,5,3,13],
      [8,14,7,1,9,15,10,2,13,11,3,4,12,5,6],
      [9,5,15,11,14,10,12,13,2,3,7,8,1,6,4],
      [10,14,7,4,3,8,15,6,9,13,11,12,2,1,5],
      [11,14,2,6,15,4,7,8,5,1,12,3,13,10,9],
      [12,15,6,14,5,7,4,13,8,11,1,10,9,3,2],
      [13,1,2,11,10,4,12,5,9,3,14,15,6,8,7],
      [14,3,1,2,4,13,15,12,5,6,11,7,9,10,8],
      [15,13,5,4,12,11,6,3,1,14,2,9,8,7,10],
    ]
  }else if( numSet == 2 ){
    console.log("this is numSet == 2")
    function getMovebox(w){
      return Math.floor(Math.random()* w )+1;
    }
    var b =getMovebox(15);
    console.log(b);
    var arr = [
      [1,2,3,4,10,6,7,8,9,5,15,11,13,14,12],
      [6,3,9,10,5,1,14,8,2,15,12,13,4,7,11],
      [12,10,15,9,3,14,7,1,5,8,2,4,13,6,11],
      [13,15,12,4,11,6,10,2,7,3,9,1,8,14,5],
      [4,11,6,2,9,10,1,3,5,15,7,14,12,8,13],
      [5,11,10,6,9,13,1,15,2,3,7,8,12,14,4],
      [6,4,7,15,3,10,9,1,14,13,5,2,8,11,12],
      [7,5,9,10,6,8,12,11,1,4,2,14,15,3,13],
      [8,4,7,1,9,5,10,2,3,11,13,14,12,15,6],
      [9,5,15,11,4,10,2,3,12,13,7,8,1,6,14],
      [10,14,7,4,13,8,15,6,9,3,11,12,2,1,5],
      [11,4,2,6,5,14,7,8,15,1,12,13,3,10,9],
      [12,15,6,4,5,7,14,13,8,1,11,10,9,3,2],
      [15,1,2,11,10,14,12,5,9,13,4,3,6,8,7],
      [4,3,1,2,5,13,15,12,14,6,11,7,9,10,8],
      [5,13,15,4,12,11,6,3,1,14,2,9,8,7,10],
    ]
  }
  $('.x1y4').append("<div class=" +"'"+"movebox1"+" colorbox"+"'"+">" + arr[b][0] + "</div>");
  $('.x2y4').append("<div class=" +"'"+"movebox2"+" colorbox"+"'" +">" + arr[b][1] + "</div>");
  $('.x3y4').append("<div class=" +"'"+"movebox3"+" colorbox"+"'" +">" + arr[b][2] + "</div>");
  $('.x4y4').append("<div class=" +"'"+"movebox4"+" colorbox"+"'" +">" + arr[b][3] + "</div>");
  $('.x1y3').append("<div class=" +"'"+"movebox5"+" colorbox"+"'" +">" + arr[b][4] + "</div>");
  $('.x2y3').append("<div class=" +"'"+"movebox6"+" colorbox"+"'" +">" + arr[b][5] + "</div>");
  $('.x3y3').append("<div class=" +"'"+"movebox7"+" colorbox"+"'" +">" + arr[b][6] + "</div>");
  $('.x4y3').append("<div class=" +"'"+"movebox8"+" colorbox"+"'" +">" + arr[b][7] + "</div>");
  $('.x1y2').append("<div class=" +"'"+"movebox9"+" colorbox"+"'" +">" + arr[b][8] + "</div>");
  $('.x2y2').append("<div class=" +"'"+"movebox10"+" colorbox"+"'" +">" + arr[b][9] + "</div>");
  $('.x3y2').append("<div class=" +"'"+"movebox11"+" colorbox"+"'" +">" + arr[b][10] + "</div>");
  $('.x4y2').append("<div class=" +"'"+"movebox12"+" colorbox"+"'" +">" + arr[b][11] + "</div>");
  $('.x1y1').append("<div class=" +"'"+"movebox13"+" colorbox"+"'" +">" + arr[b][12] + "</div>");
  $('.x2y1').append("<div class=" +"'"+"movebox14"+" colorbox"+"'" +">" + arr[b][13] + "</div>");
  $('.x3y1').append("<div class=" +"'"+"movebox15"+" colorbox"+"'" +">" + arr[b][14] + "</div>");
})
$('.btn_easy').click(function(){
  //Easy Version
  $('.btn_start, .btn_easy').addClass('btn_clear');
  $('.x1y4').append("<div class=" +"'"+"movebox1"+" colorbox"+"'" +">" + "1" + "</div>");
  $('.x2y4').append("<div class=" +"'"+"movebox2"+" colorbox"+"'" +">" + "2" + "</div>");
  $('.x3y4').append("<div class=" +"'"+"movebox3"+" colorbox"+"'" +">" + "3" + "</div>");
  $('.x4y4').append("<div class=" +"'"+"movebox4"+" colorbox"+"'" +">" + "4" + "</div>");
  $('.x1y3').append("<div class=" +"'"+"movebox5"+" colorbox"+"'" +">" + "5" + "</div>");
  $('.x2y3').append("<div class=" +"'"+"movebox6"+" colorbox"+"'" +">" + "6" + "</div>");
  $('.x3y3').append("<div class=" +"'"+"movebox7"+" colorbox"+"'" +">" + "7" + "</div>");
  $('.x4y3').append("<div class=" +"'"+"movebox8"+" colorbox"+"'" +">" + "8" + "</div>");
  $('.x1y2').append("<div class=" +"'"+"movebox9"+" colorbox"+"'" +">" + "9" + "</div>");
  $('.x2y2').append("<div class=" +"'"+"movebox10"+" colorbox"+"'" +">" + "10" + "</div>");
  $('.x3y2').append("<div class=" +"'"+"movebox11"+" colorbox"+"'" +">" + "15" + "</div>");
  $('.x4y2').append("<div class=" +"'"+"movebox12"+" colorbox"+"'" +">" + "11" + "</div>");
  $('.x1y1').append("<div class=" +"'"+"movebox13"+" colorbox"+"'" +">" + "13" + "</div>");
  $('.x2y1').append("<div class=" +"'"+"movebox14"+" colorbox"+"'" +">" + "14" + "</div>");
  $('.x3y1').append("<div class=" +"'"+"movebox15"+" colorbox"+"'" +">" + "12" + "</div>");
});


// 判斷玩家是否成功完成
/* 
若右下角座標為 x4y1 的空值為0
判斷玩家是否成功贏得遊戲，
blankbox的屬性finish 是否等於 movebox的文字字串值
*/

$('.btn2').click(function(){
  var tb=$('.x4y1').text();
  if( tb == ""){
    var t1=$('.x1y1').text();
    var tt1=$('.x1y1').attr('finish');
    var t2=$('.x1y2').text();
    var tt2=$('.x1y2').attr('finish');
    var t3=$('.x1y3').text();
    var tt3=$('.x1y3').attr('finish');
    var t4=$('.x1y4').text();
    var tt4=$('.x1y4').attr('finish');
    var t5=$('.x2y1').text();
    var tt5=$('.x2y1').attr('finish');
    var t6=$('.x2y2').text();
    var tt6=$('.x2y2').attr('finish');
    var t7=$('.x2y3').text();
    var tt7=$('.x2y3').attr('finish');
    var t8=$('.x2y4').text();
    var tt8=$('.x2y4').attr('finish');
    var t9=$('.x3y1').text();
    var tt9=$('.x3y1').attr('finish');
    var t10=$('.x3y2').text();
    var tt10=$('.x3y2').attr('finish');
    var t11=$('.x3y3').text();
    var tt11=$('.x3y3').attr('finish');
    var t12=$('.x3y4').text();
    var tt12=$('.x3y4').attr('finish');
    var t13=$('.x4y2').text();
    var tt13=$('.x4y2').attr('finish');
    var t14=$('.x4y3').text();
    var tt14=$('.x4y3').attr('finish');
    var t15=$('.x4y4').text();
    var tt15=$('.x4y4').attr('finish');    
    if( 
      t1 == tt1 && 
      t2 == tt2 && 
      t3 == tt3 && 
      t4 == tt4 && 
      t5 == tt5 && 
      t6 == tt6 && 
      t7 == tt7 && 
      t8 == tt8 && 
      t9 == tt9 && 
      t10 == tt10 && 
      t11 == tt11 && 
      t12 == tt12 && 
      t13 == tt13 && 
      t14 == tt14 && 
      t15 == tt15){
      $('.colorbox').addClass('colorbox_finish');
      $('.layer1').addClass('layer1_finish');
      $('.layer2').addClass('layer2_finish');
      $('h1, .noshow').addClass('h1_finish');
      $('.noshow').removeClass('.noshow');
      $('.yellowBox , .pinkBox').addClass('box_finish');
      $('.left-section').addClass('change_finish');
    }  
  }else{
    alert('You Lose this game! Try again!');
  }
})