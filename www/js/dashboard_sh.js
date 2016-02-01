		$(document).on('pageshow', '#dashboard_sh', function(){  
      
//alert("dashboard shh");

  sh_regionarray =  JSON.parse(sessionStorage.getItem("sh_regionarray"));
/*
		co_new_veri_list_count_array = 	JSON.parse(sessionStorage.getItem("co_new_veri_list_count_array"));*/
  
   sh_new_veri_list =  JSON.parse(sessionStorage.getItem("sh_new_veri_list"));
    sh_new_veri_list_count =  JSON.parse(sessionStorage.getItem("sh_new_veri_list_count"));
    sh_inprogress_list_count =  JSON.parse(sessionStorage.getItem("sh_inprogress_list_count"));
    sh_waiting_count =  JSON.parse(sessionStorage.getItem("sh_waiting_count"));
    to_approved_sh =  JSON.parse(sessionStorage.getItem("to_approved_sh"));
    completed_sh_count =  JSON.parse(sessionStorage.getItem("completed_sh_count"));
    sh_reject_list =  JSON.parse(sessionStorage.getItem("sh_reject_list"));
    sh_reject_list_countrt =  JSON.parse(sessionStorage.getItem("sh_reject_list_count"));
    sh_verified_false_count =  JSON.parse(sessionStorage.getItem("sh_verified_false_count"));

//alert(sh_regionarray);


if(sh_regionarray == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}


//alert(regionArray_array.region);
var region=sh_regionarray.co_region;

 //alert(region+'region');
var username=sh_regionarray.username;

var regionsection=sh_regionarray.regionsection;

var state=sh_regionarray.state;
 
 $('#state_name').text(sh_regionarray.username);
   
/* $(document).off('click', '#sh_new_verification').on('click', '#sh_new_verification', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

    $(document).off('click', '#reject_shsh').on('click', '#reject_shsh', function() {
            //alert('reject_shsh');

  $.mobile.changePage($('#sh_reject_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#dashlogoutlg').on('click', '#dashlogoutlg', function() {
  sessionStorage.clear(); 
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

//alert('sd');

for(a=0;a<sh_new_veri_list_count.length;a++){
      new_count = sh_new_veri_list_count[a];
//alert(new_count.sh_new_veri_Count);
//alert(new_count.sh_new_veri_list_count);
     $("#sh_new_veri_list_count").html(new_count.sh_new_veri_Count);
}


  for(a=0;a<sh_inprogress_list_count.length;a++){
      inprogress_count = sh_inprogress_list_count[a];
     //alert(inprogress_count.supervisor_inprogress_count+'supervisor_inprogress_count');
     $("#sh_inprogress_list_count").html(inprogress_count.sh_inprogress_list_count);

}

  for(a=0;a<sh_reject_list.length;a++){
      verified_count = sh_reject_list[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#sh_reject_list").html(verified_count.sh_reject_list);

}

  for(a=0;a<to_approved_sh.length;a++){
      verified_count = to_approved_sh[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#to_approved_sh").html(verified_count.to_approved_sh);

}

  for(a=0;a<completed_sh_count.length;a++){
      verified_count = completed_sh_count[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#completed_sh_count").html(verified_count.completed_sh_count);

}

 for(a=0;a<sh_waiting_count.length;a++){
      verified_count = sh_waiting_count[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#waiting_count_sh").html(verified_count.waiting_count_sh);

}

 for(a=0;a<sh_reject_list_countrt.length;a++){
      verified_counttt = sh_reject_list_countrt[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#rej").html(verified_counttt.reject_count);

}

for(a=0;a<sh_verified_false_count.length;a++){
      verified_countttr = sh_verified_false_count[a];
      //alert(verified_countttr.sh_verified_false_counta);
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#false-verif").html(verified_countttr.sh_verified_false_counta);

}


$(document).off('click', '#sh_new_verification').on('click', '#sh_new_verification', function() { 

//alert(region+'region new sh');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash_sh_new.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#e').serialize(),
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
        sessionStorage.setItem("sh_new_veri_list_count",JSON.stringify(result[0]));
        sessionStorage.setItem("sh_new_veri_list",JSON.stringify(result[1]));
        sessionStorage.setItem("insertassign_employment_array",JSON.stringify(result[2]));
        sessionStorage.setItem("insertassign_education_array",JSON.stringify(result[3]));
        sessionStorage.setItem("insertassign_address_array",JSON.stringify(result[4]));
         sessionStorage.setItem("assests_verification_array",JSON.stringify(result[5]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[6]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[7]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[8]));

        sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[9]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[10]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[12]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[13]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[14]));

        sessionStorage.setItem("driving_details_array",JSON.stringify(result[15]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[17]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[18]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[19]));

        sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[21]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[22]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[23]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[24]));
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[25]));
        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[26]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[27]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[28]));



        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
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

});


$(document).off('click', '#inprogress_sh').on('click', '#inprogress_sh', function() { 

//alert(region+'region inprogress_sh');
//alert(regionsection+'region inprogress_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash_sh_inprogress.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#e').serialize(),
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
        sessionStorage.setItem("Inprogress_sh",JSON.stringify(result[1]));
         sessionStorage.setItem("assests_verification_array",JSON.stringify(result[2]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[3]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[4]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[5]));

         sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[6]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[7]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[8]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[9]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[10]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[11]));
       
          sessionStorage.setItem("driving_details_array",JSON.stringify(result[12]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[13]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[14]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[15]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[16]));

        sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[17]));

        sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[18]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[19]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[21]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[22]));
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[23]));
        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[24]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[25]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[26]));


        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
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

});



    $(document).off('click', '#tobeapproved').on('click', '#tobeapproved', function() { 
//alert('tobeapproved');
//alert(region+'region tobeapproved');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash_tobeapproved_sh.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#ee').serialize(),
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
         sessionStorage.setItem("to_approved_sh",JSON.stringify(result[0]));
         sessionStorage.setItem("tobe_approved_sh",JSON.stringify(result[1]));
        sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[2]));
         sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[3]));
          sessionStorage.setItem("assests_verification_array",JSON.stringify(result[4]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[5]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[6]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[7]));

        sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[8]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[9]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[10]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[11]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[12]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[13]));

   sessionStorage.setItem("driving_details_array",JSON.stringify(result[14]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[15]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[17]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[18]));


        sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[19]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[21]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[22]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[23]));
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[24]));
        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[25]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[26]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[27]));


        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
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

});
    
      $(document).off('click', '#completed_sh').on('click', '#completed_sh', function() { 
//alert('completed');
//alert(region+'region completed_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash_completed_sh.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#ee').serialize(),
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
         sessionStorage.setItem("completed_sh_count",JSON.stringify(result[0]));
         sessionStorage.setItem("completed_sh",JSON.stringify(result[1]));
        sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[2]));
         sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[3]));
        sessionStorage.setItem("assests_verification_array",JSON.stringify(result[4]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[5]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[6]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[7]));
 
        sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[8]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[9]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[10]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[11]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[12]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[13]));

         sessionStorage.setItem("driving_details_array",JSON.stringify(result[14]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[15]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[17]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[18]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
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

});


      $(document).off('click', '#reject_shsh').on('click', '#reject_shsh', function() { 
//alert('completed');
//alert(region+'region completed_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash_reject_sh.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#ee').serialize(),
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
        sessionStorage.setItem("sh_reject_list_count",JSON.stringify(result[0]));
        sessionStorage.setItem("sh_reject_list",JSON.stringify(result[1]));
        sessionStorage.setItem("insertassign_employment_array",JSON.stringify(result[2]));
        sessionStorage.setItem("insertassign_education_array",JSON.stringify(result[3]));
        sessionStorage.setItem("insertassign_address_array",JSON.stringify(result[4]));
        sessionStorage.setItem("assests_verification_array",JSON.stringify(result[5]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[6]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[7]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[8]));

                sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[9]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[10]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[12]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[13]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[14]));


         sessionStorage.setItem("driving_details_array",JSON.stringify(result[15]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[17]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[18]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[19]));

      sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[21]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[22]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[23]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[24]));
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[25]));
        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[26]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[27]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[28]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_reject_listio'), { transition: "none", changeHash: true, reverse: false });
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

});

     $(document).off('click', '#waiting_sh').on('click', '#waiting_sh', function() { 
//alert('waiting');
//alert(region+'region waiting_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash_waiting_sh.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#ee').serialize(),
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
         sessionStorage.setItem("sh_waiting_count",JSON.stringify(result[0]));
         sessionStorage.setItem("waiting_sh",JSON.stringify(result[1]));
        sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[2]));
        sessionStorage.setItem("assests_verification_array",JSON.stringify(result[3]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[4]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[5]));
         sessionStorage.setItem("reference_verification_array",JSON.stringify(result[6]));
     
        sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[7]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[8]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[9]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[10]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[11]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[12]));

         sessionStorage.setItem("driving_details_array",JSON.stringify(result[13]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[14]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[15]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[17]));


        sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[18]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[19]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[21]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[22]));
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[23]));
        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[24]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[25]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[26]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
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

});

      $(document).off('click', '#veri-false-sh').on('click', '#veri-false-sh', function() { 
//alert('completed');
//alert(region+'region completed_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash-verified-false.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#ee').serialize(),
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
        sessionStorage.setItem("sh_verified_false_count",JSON.stringify(result[0]));
         sessionStorage.setItem("sh_verified_false",JSON.stringify(result[1]));
        sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[2]));
         sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[3]));
        sessionStorage.setItem("assests_verification_array",JSON.stringify(result[4]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[5]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[6]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[7]));

        sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[8]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[9]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[10]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[11]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[12]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[13]));

         sessionStorage.setItem("driving_details_array",JSON.stringify(result[14]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[15]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[17]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[18]));

        sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[19]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[21]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[22]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[23]));
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[24]));
        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[25]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[26]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[27]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_Verified_false'), { transition: "none", changeHash: true, reverse: false });
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

});

$(document).off('click', '#veri-false-sh-new-new').on('click', '#veri-false-sh-new-new', function() { 

//alert(region+'region new sh');

$.ajax({url: "http://staging.eimpressive.com/slim-four/dash_sh_new_verified_false.php?region="+region+"&regionsection="+regionsection+"&state="+state,
    data:$('#e').serialize(),
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
        sessionStorage.setItem("sh_new_veri_list_count",JSON.stringify(result[0]));
        sessionStorage.setItem("sh_new_veri_list",JSON.stringify(result[1]));
        sessionStorage.setItem("insertassign_employment_array",JSON.stringify(result[2]));
        sessionStorage.setItem("insertassign_education_array",JSON.stringify(result[3]));
        sessionStorage.setItem("insertassign_address_array",JSON.stringify(result[4]));
         sessionStorage.setItem("assests_verification_array",JSON.stringify(result[5]));
        sessionStorage.setItem("bankguarantee_verification_array",JSON.stringify(result[6]));
        sessionStorage.setItem("address_verification_array",JSON.stringify(result[7]));
        sessionStorage.setItem("reference_verification_array",JSON.stringify(result[8]));

        sessionStorage.setItem("distributor_verification_array",JSON.stringify(result[9]));
        sessionStorage.setItem("distributor_details_array",JSON.stringify(result[10]));
        sessionStorage.setItem("web_verification_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supplier_details_array",JSON.stringify(result[12]));
        sessionStorage.setItem("warehouse_verification_array",JSON.stringify(result[13]));
        sessionStorage.setItem("verification_master_array",JSON.stringify(result[14]));

        sessionStorage.setItem("driving_details_array",JSON.stringify(result[15]));
        sessionStorage.setItem("credential_verification_array",JSON.stringify(result[16]));
        sessionStorage.setItem("identity_verification_array",JSON.stringify(result[17]));
        sessionStorage.setItem("bankruptcy_verification_array",JSON.stringify(result[18]));
        sessionStorage.setItem("professional_details_array",JSON.stringify(result[19]));

        sessionStorage.setItem("employmentgap_verification_array",JSON.stringify(result[20]));
        sessionStorage.setItem("delinquent_verification_array",JSON.stringify(result[21]));
        sessionStorage.setItem("servant_verification_array",JSON.stringify(result[22]));
        sessionStorage.setItem("integrity_lifestyle_verification_array",JSON.stringify(result[23]));
        sessionStorage.setItem("edusalary_office_array",JSON.stringify(result[24]));
        sessionStorage.setItem("criminal_verification_array",JSON.stringify(result[25]));
        sessionStorage.setItem("edusalary_education_array",JSON.stringify(result[26]));
        sessionStorage.setItem("integrity_lifestyle_permanent_array",JSON.stringify(result[27]));
        sessionStorage.setItem("servant_education_array",JSON.stringify(result[27]));



        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_Verified_false_new_list'), { transition: "none", changeHash: true, reverse: false });
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

});
 

        $(document).off('click', '#not_verified').on('click', '#not_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});
  

 
  });
