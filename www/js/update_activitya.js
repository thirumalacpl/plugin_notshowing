$(document).on('pageshow', '#primarymessage', function(){  
//alert('updateactivitya 222');
$('#chatr').empty();

var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//alert(status_val_inpro);
if(status_val_inpro == 'Inprogress'){
$('.verinot').hide();
}
if(status_val_inpro == 'Verified' || status_val_inpro == 'Notverified' ){
$('.verinot').show();
}

/*$(document).off('click', '#veriu').on('click', '#veriu', function() {
  alert('1');
$('.verinot').show();
});

$(document).off('click', '#veriunot').on('click', '#veriunot', function() {
$('.verinot').show();
});*/
$( '#radio-choice-ab' ).click(function() {
$('.verinot').hide();
});

$( '#radio-choice-bb' ).click(function() {
$('.verinot').show();
});

$( '#radio-choice-cb' ).click(function() {
$('.verinot').show();
});

/*var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
alert(status_val_inpro);

if(status_val_inpro == 'Verified'){

$("#radio-choice-ab").attr('checked', 'checked');
}*/


assignValues();


$(document).off('click', '#dashinsy').on('click', '#dashinsy', function() {

  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprogressinsy').on('click', '#inprogressinsy', function() {

  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#verifiedinsy').on('click', '#verifiedinsy', function() {

  $.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#not_verifiedinsy').on('click', '#not_verifiedinsy', function() {

  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
  return false;
});


$(document).off('click', '#completedinsy').on('click', '#completedinsy', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinsy').on('click', '#signoutinsy', function() {
  sessionStorage.clear(); 
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprobj').on('click', '#inprobj', function() {
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});



});






function assignValues(){

  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
  supervisor_activity_log_array = JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));

  var coordinator_id = user_obja.coordinator_id;

  var verification_user_id = user_obja.verification_user_id;

  var qualification_id=user_obja.qualification_id;



  regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
  var region_num=regionArray_array.region;
//alert(region_num);
username=regionArray_array.username;
//alert(username);
$("#userlistinsohh").text(username);

$('#named').text(user_obja.First_Name+user_obja.Last_Name );
$('#locv').text(user_obja.state);

//alert(supervisor_activity_log_array+'super log');

//alert(qualification_id+'qualification_id');
//alert(verification_user_id+'verification_user_id');

for(a=0;a<supervisor_activity_log_array.length;a++){

  activity_lok_obj = supervisor_activity_log_array[a];

  idf=activity_lok_obj.verification_id;
  text=activity_lok_obj.activity_log;
  image=activity_lok_obj.document;
  status=activity_lok_obj.status;
  type=activity_lok_obj.type;
  date_new=activity_lok_obj.log_date;

  var s = date_new;
  var bits = s.split(/\D/);
  var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();


if(idf == verification_user_id && type == qualification_id ){
/*
alert(qualification_id+'qualification_id iiiiiiiiiiiiinnnnnnnnn'+type+'type');
alert(verification_user_id+'verification_user_id iiiiiinnnn'+idf+'idf');*/

//alert(date+'2');
if(status == 'supervisor' && text !==''){
//alert('supervisor');

//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div> '
//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class="msg_img_new" ><p style="" class="">TVO</p></div></div>'
var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '

$('#chatr').append(chatr);
}
if(status == 'doc' && image !==''){
//alert('doc');

//var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div>  '
//var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class=""><p class="">TVO</p></div></div>'
var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#"  class=""><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'cor'){
//alert(activity_lok_obj.activity_log);
//var chatr='<div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">sudeep</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'  </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'

//var chatr='<div class="ui-grid-b" style="padding-top:4%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">STATE HEAD</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+' </p><br> </div><div class="ui-block-c msg_grid_5 msg_grid_sudeep"> <span class="msg_span_3 ">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_sudeep">'+time+'</span></div></div>'
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

}


}


$(document).off('click', '#before_new_listupa').on('click', '#before_new_listupa', function() {
//alert(region_num+'refresh');
//$.ajax({url: 'http://staging.eimpressive.com/slim-four/dashinprogress.php?region='+region+"&user_id="+user_id,
//alert(region);
//alert(user_id);
$.ajax({url: 'http://staging.eimpressive.com/slim-four/count.php?region='+region+"&user_id="+user_id,
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");

sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[0]));
      sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[1]));
       sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[2]));
 sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[3]));


$.mobile.loading().hide();
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
   
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});


function onSuccess(data, status)
{
  //alert(data);

  var sdocument=$('input[type=file]').val('');
  //alert(sdocument);
  sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(data));

  currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));

  $('#chatr').empty();

  for(a=0;a<currentobj_log_inpro.length;a++){

    activity_lok_obj = currentobj_log_inpro[a];

    text=activity_lok_obj.activity_log;
    image=activity_lok_obj.document;
    status=activity_lok_obj.status;
    date_new=activity_lok_obj.log_date;

      type=activity_lok_obj.type;
  idf=activity_lok_obj.verification_id;

    var s = date_new;
    var bits = s.split(/\D/);
    var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();
//alert(date+'2');
//alert(verification_user_id+'verification_user_id'+'qualification_id'+qualification_id);
if(idf == verification_user_id && type == qualification_id ){
if(status == 'supervisor' && text !==''){
//alert('supervisor');

//var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '
var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'doc' && image !==''){
//alert('doc');

//var chatr='<div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#"  class=""><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/use.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '
var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#"  class=""><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'cor'){
//alert(activity_lok_obj.activity_log);
//var chatr='<div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon-state.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

}
}


}

function onError(data, status)
{
// handle an error
}        

$(document).off('click', '#chatSendButton').on('click', '#chatSendButton', function() { 
//alert("but pressed");

var remarkg=document.getElementById('remarkg').value;

var loginistant=document.getElementById('messageText').value;

var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//var status_val_inpro='Inprogress';
//alert(status_val_inpro);
var sdocument=$('input[type=file]').val().split('\\').pop();
//alert(sdocument+' submit');


$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});



var formData = $("#callAjaxForm").serialize();

$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim-four/chat.php?loginistant="+loginistant+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&status_val_inpro="+status_val_inpro+"&sdocument="+sdocument+"&remarkg="+remarkg+"&qualification_id="+qualification_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
if(status_val_inpro == 'Inprogress'){
  document.getElementById('messageText').value = "";
document.getElementById('remarkg').value = "";
 $.mobile.changePage($('#primarymessage'), { transition: "none", changeHash: true, reverse: false });
return false;

}else{

  document.getElementById('messageText').value = "";
document.getElementById('remarkg').value = "";
  //alert(region_num);
  //$("input[type='radio']:first").attr("checked", "checked");
//alert(region);
//alert(user_id);
$.ajax({url: 'http://staging.eimpressive.com/slim-four/count.php?region='+region+"&user_id="+user_id,
  data:$('#update_to_inprogressw').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
		sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[0]));
     	sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[1]));
       	sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[2]));
 		sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[3]));
 

      $.mobile.loading().hide();
      $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
//$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {    
  console.log(request);
  console.log(error);  
  $("#Network").popup("open");         
  alert('Network error has occurred please try again!');
}
});
/*   $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;*/
}
});



}
