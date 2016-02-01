$(document).on('pageshow', '#pageone', function(){ 
  //  alert("hidash");
/*    if(sessionStorage.getItem("logged_in")=="1"){
           $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false }); 
    }*/

/*$(document).on("pageload",function(){
  alert("pageload event fired - the external page has been successfully loaded and inserted into the DOM!");
});*/

/*$(document).on("pagebeforeshow","#dashboard",function(){

  });*/
if(sessionStorage.getItem("logged_in")=="1"){

//alert('hari login');
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
  return false;
}
if(sessionStorage.getItem("logged_in")=="2"){

//alert('sudeep login');
  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
  return false;
}


$(document).off('click', '#submit').on('click', '#submit', function() { 
    if($('#username').val().length > 0 && $('#password').val().length > 0){
        console.log($('#check-watchuser').serialize());
        $.ajax({url: 'http://staging.eimpressive.com/slim-four/index.php',
            data:$('#check-watchuser').serialize(),
            type: 'post',                   
            async: 'true',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function() {
$('body').addClass('ui-loading');
},
complete: function() {
},
success: function (result) {
    console.log(result);
    var pas=result[0];
     var pass=result[16];
   // alert(pas+'pas'); 
       //alert(pass+'pass');
          if(pas == '' &&  pass == ''){
    alert('username or password entered is invalid');
    $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
    return false; 
}
    if(pas != ''){
      //alert(pas+'sup');
        sessionStorage.setItem("logged_in","1");
        sessionStorage.setItem("regionArray",JSON.stringify(result[0]));
        //sessionStorage.setItem("usernamearray",JSON.stringify(result[0]));
        sessionStorage.setItem("supervisor_new_array",JSON.stringify(result[1]));
        sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[2]));
        sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[3]));
        sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[4]));
        sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[5]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[6]));
        sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[7]));
        sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[8]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[9]));
        sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[10]));
        sessionStorage.setItem("multiple_documents_array",JSON.stringify(result[11]));
        sessionStorage.setItem("addressid_records_array",JSON.stringify(result[12]));
        sessionStorage.setItem("educational_records_array",JSON.stringify(result[13]));
        sessionStorage.setItem("employment_records_array",JSON.stringify(result[14]));
        sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[15]));

        $.mobile.loading().hide();
        $(".ui-icon-loading").hide();
         $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false }); 


    }
    if( pass != ''){
      //alert(pass+'co');
         sessionStorage.setItem("logged_in","2");
       
            sessionStorage.setItem("sh_regionarray",JSON.stringify(result[16]));
            sessionStorage.setItem("sh_new_veri_list",JSON.stringify(result[17]));
            sessionStorage.setItem("sh_addressid_records_array",JSON.stringify(result[18]));
             sessionStorage.setItem("sh_educational_records_array",JSON.stringify(result[19]));
            sessionStorage.setItem("sh_multiple_documents_array",JSON.stringify(result[20]));
             sessionStorage.setItem("sh_basic_profile_records_array",JSON.stringify(result[21]));
             sessionStorage.setItem("sh_employment_records_array",JSON.stringify(result[22]));
              sessionStorage.setItem("supervisor_roleid_array",JSON.stringify(result[23]));
              sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[24]));
              sessionStorage.setItem("sh_new_veri_list_count",JSON.stringify(result[25]));
              sessionStorage.setItem("sh_inprogress_list_count",JSON.stringify(result[26]));
              sessionStorage.setItem("sh_reject_list",JSON.stringify(result[27]));
               sessionStorage.setItem("sh_waiting_count",JSON.stringify(result[28]));
                sessionStorage.setItem("to_approved_sh",JSON.stringify(result[29]));
                 sessionStorage.setItem("completed_sh_count",JSON.stringify(result[30]));
                   sessionStorage.setItem("Inprogress_sh",JSON.stringify(result[31]));
                     sessionStorage.setItem("tobe_approved_sh",JSON.stringify(result[32]));
                       sessionStorage.setItem("completed_sh",JSON.stringify(result[33]));
                       sessionStorage.setItem("waiting_sh",JSON.stringify(result[34]));
                        sessionStorage.setItem("sh_reject_list_count",JSON.stringify(result[35]));
                        sessionStorage.setItem("sh_verified_false",JSON.stringify(result[36]));
                         sessionStorage.setItem("sh_verified_false_count",JSON.stringify(result[37]));

 		$.mobile.loading().hide();
        $(".ui-icon-loading").hide();
         $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false }); 
   return false;

    }
    
},
error: function (request,error) {
    console.log(error);
    console.log(request);              
alert('Network error has occurred please try again!');
}
}); 
 
  
}
});
});

