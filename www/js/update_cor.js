$(document).on('pageshow', '#update_cor', function(){  
//alert('update_cor 222');

$('#chatqc').empty();
 $(document).off('click', '#dashcooinee').on('click', '#dashcooinee', function() {

  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#newshee').on('click', '#newshee', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

 $(document).off('click', '#before_new_listupaa').on('click', '#before_new_listupaa', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#waitingnee').on('click', '#waitingnee', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
   
 $(document).off('click', '#shapprovednee').on('click', '#shapprovednee', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#completedshnee').on('click', '#completedshnee', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*                  $(document).off('click', '#shnotverin').on('click', '#shnotverin', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

  /*          $(document).off('click', '#rejectii').on('click', '#rejectii', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_reject_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

   $(document).off('click', '#signoutcooinee').on('click', '#signoutcooinee', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});
  

$(document).off('click', '#inprobj').on('click', '#inprobj', function() {
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

 user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
  supervisor_activity_log_array = JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));

  //var coordinator_id = user_obja.coordinator_id;
//alert(coordinator_id+'coordinator_id');
  var verification_user_id = user_obja.verification_user_id;
//alert(verification_user_id+'verification_user_id');
  var qualification_id=user_obja.type;
//  alert(qualification_id+'qualification_id');



  for(a=0;a<supervisor_activity_log_array.length;a++){

  activity_lok_obj = supervisor_activity_log_array[a];

  idf=activity_lok_obj.verification_id;
  text=activity_lok_obj.activity_log;
  image=activity_lok_obj.document;
  status=activity_lok_obj.status;
  type=activity_lok_obj.type;
  date_new=activity_lok_obj.log_date;


//alert(idf +'idf verificati '+verification_user_id);
//alert(type +'type quakli'+qualification_id);
  var s = date_new;
  var bits = s.split(/\D/);
  var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();


if(idf == verification_user_id && type == qualification_id ){

//alert(idf +'idf verificati '+verification_user_id+'inside');
//alert(type +'type quakli'+qualification_id+'inside');


//alert(date+'2');
if(status == 'supervisor' && text !==''){

//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class="msg_img_new" ><p style="" class="">TVO</p></div></div>'
var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '

$('#chatqc').append(chatr);


}
if(status == 'doc' && image !==''){
//alert('doc');


//var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class=""><p class="">TVO</p></div></div>'
var chatr='<div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#"  class=""><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/use.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '

$('#chatqc').append(chatr);

}

if(status == 'cor'){
//var chatr='<div class="ui-grid-b" style="padding-top:4%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+' </p><br> </div><div class="ui-block-c msg_grid_5 msg_grid_sudeep"> <span class="msg_span_3 ">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_sudeep">'+time+'</span></div></div>'
var chatr='<div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon-state.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatqc').append(chatr);


}


}

}



function onSuccess(data, status)
{
//alert(data);
 // var sdocument=$('input[type=file]').val('');
  //alert(sdocument);
  sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(data));

  currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));

 //alert(currentobj_log_inpro);

 $('#chatqc').empty();

  for(a=0;a<currentobj_log_inpro.length;a++){

    activity_lok_obj = currentobj_log_inpro[a];

    text=activity_lok_obj.activity_log;
    image=activity_lok_obj.document;
    status=activity_lok_obj.status;
    date_new=activity_lok_obj.log_date;

    var s = date_new;
    var bits = s.split(/\D/);
    var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();
//alert(date+'2');
if(status == 'supervisor' && text !==''){
//alert('supervisor');

//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div> '
//$('#chatqc').append(chatr);

var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class="msg_img_new" ><p style="" class="">TVO</p></div></div>'
$('#chatqc').append(chatr);



}
if(status == 'doc' && image !==''){
//alert('doc');

/*var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div>  '
$('#chatqc').append(chatr);
*/
var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://fourthforce.in/verify/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class=""><p class="">TVO</p></div></div>'
$('#chatqc').append(chatr);

}

if(status == 'cor'){
//alert(activity_lok_obj.activity_log);
  //var chatr='<div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+' </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'
/*var chatr='<div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">sudeep</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'  </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'
$('#chatqc').append(chatr);
*/
var chatr='<div class="ui-grid-b" style="padding-top:4%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+' </p><br> </div><div class="ui-block-c msg_grid_5 msg_grid_sudeep"> <span class="msg_span_3 ">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_sudeep">'+time+'</span></div></div>'
$('#chatqc').append(chatr);

}



}


}

function onError(data, status)
{
// handle an error
}        

$(document).off('click', '#chatSendButtoncor').on('click', '#chatSendButtoncor', function() { 
//alert("but pressed");

//var remarkg=document.getElementById('remarkg').value;

var loginistant=document.getElementById('messageTextcor').value;

//alert(loginistant);
//alert(verification_user_id);
//alert(qualification_id);
document.getElementById('messageTextcor').value = "";
//var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();

//var sdocument=$('input[type=file]').val().split('\\').pop();
//alert(sdocument+' submit');


$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});



var formData = $("#callAjaxFormcor").serialize();

$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim-four/chat_cor.php?loginistant="+loginistant+"&verification_user_id="+verification_user_id+"&qualification_id="+qualification_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
return false;
});




});
