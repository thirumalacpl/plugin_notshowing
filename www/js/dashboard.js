$(document).on('pageshow', '#dashboard', function(){  

//alert("dashboard");

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
//usernamearray =  JSON.parse(sessionStorage.getItem("usernamearray"));
//alert(regionArray_array.region);
//alert(regionArray_array.username); 
new_verification_count_array =  JSON.parse(sessionStorage.getItem("new_verification_count_array"));
superArray =  JSON.parse(sessionStorage.getItem("new_verification_count_array"));
supervisor_new_array= JSON.parse(sessionStorage.getItem("supervisor_new_array"));

new_verification_count_array =  JSON.parse(sessionStorage.getItem("new_verification_count_array"));
supervisor_inprogress_count_array =  JSON.parse(sessionStorage.getItem("supervisor_inprogress_count_array"));
supervisor_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_count_array"));
supervisor_not_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_not_verified_count_array"));
supervisor_completed_count_array =  JSON.parse(sessionStorage.getItem("supervisor_completed_count_array"));


//alert(supervisor_not_verified_count_array.not_verified_count); 

/*supervisor_inprogress_count_array =  JSON.parse(sessionStorage.getItem("supervisor_inprogress_count_array"));
supervisor_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_count_array"));*/
not_veri_count_array =  JSON.parse(sessionStorage.getItem("not_veri_count_array"));

//alert(regionArray_array);

if(regionArray_array == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}


//alert(user_id);

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
$("#user").html(username);
region=regionArray_array.region;
user_id=regionArray_array.user_id;
//alert(region+'region');
//alert(user_id+'user_id');

for(a=0;a<new_verification_count_array.length;a++){
  new_count = new_verification_count_array[a];
// alert(new_count.new_verification_count+'new_verification_count');
$("#new_veri_count").html(new_count.new_verification_count);
}


for(a=0;a<supervisor_inprogress_count_array.length;a++){
  inprogress_count = supervisor_inprogress_count_array[a];
//alert(inprogress_count.supervisor_inprogress_count+'supervisor_inprogress_count');
$("#inprogress_count").html(inprogress_count.inprogress_count);
//alert(inprogress_count.inprogress_count);

}

for(a=0;a<supervisor_verified_count_array.length;a++){
  verified_count = supervisor_verified_count_array[a];

 //alert(verified_count.super_verified_count+'new_verification_count');
$("#verified_count").html(verified_count.super_verified_count);
//alert(verified_count.super_verified_count);

}

for(a=0;a<supervisor_not_verified_count_array.length;a++){
  not_verified_count = supervisor_not_verified_count_array[a];
// alert(not_verified_count.not_verified_count+'new_verification_count');
$("#not_verified_count").html(not_verified_count.supervisor_not_verified_count_array);
//alert(not_verified_count.supervisor_not_verified_count_array);
}

for(a=0;a<supervisor_completed_count_array.length;a++){
  not_verified_counta = supervisor_completed_count_array[a];
 //alert(not_verified_counta.completed_count+'new_verification_count');
$("#completed_count").html(not_verified_counta.completed_count);
//alert(not_verified_counta.completed_count);

}



$(document).off('click', '#new_verification').on('click', '#new_verification', function() {
//alert(region+'refresh');
$.ajax({url: 'http://staging.eimpressive.com/slim-four/dashnewveri.php?region='+region,
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
//alert('Data available for the search made');
sessionStorage.setItem("supervisor_new_array",JSON.stringify(result[0]));
// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});


$(document).off('click', '#inprogress').on('click', '#inprogress', function() {
//alert(region+'inprogress');
$.ajax({url: 'http://staging.eimpressive.com/slim-four/dashinprogress.php?region='+region+"&user_id="+user_id,
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
//alert('Data available for the search made');
sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[0]));
sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[1]));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[2]));
sessionStorage.setItem("image_log_array",JSON.stringify(result[3]));
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
sessionStorage.setItem("emp_verification_cumulative_array",JSON.stringify(result[14]));

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

sessionStorage.setItem("educational_records_array",JSON.stringify(result[29]));
sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[30]));

// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});


$(document).off('click', '#verified').on('click', '#verified', function() {
//alert(region+'verified');
$.ajax({url: 'http://staging.eimpressive.com/slim-four/dashverified.php?region='+region+"&user_id="+user_id,
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
//alert('Data available for the search made');
sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[0]));
sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[1]));
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
sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));

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
sessionStorage.setItem("emp_verification_cumulative_array",JSON.stringify(result[27]));        

sessionStorage.setItem("educational_records_array",JSON.stringify(result[28]));                            

// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});



$(document).off('click', '#not_verified').on('click', '#not_verified', function() {
//alert(region+'verified');
$.ajax({url: 'http://staging.eimpressive.com/slim-four/dash_not_verified.php?region='+region+"&user_id="+user_id,
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
//alert('Data available for the search made');
sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[0]));
sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[1]));
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
sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[12]));

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
sessionStorage.setItem("emp_verification_cumulative_array",JSON.stringify(result[27]));   

sessionStorage.setItem("educational_records_array",JSON.stringify(result[28]));

// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});


$(document).off('click', '#completed').on('click', '#completed', function() {
//alert(region+'verified');
$.ajax({url: 'http://staging.eimpressive.com/slim-four/completed.php?region='+region+"&user_id="+user_id,
  data:$('#newt').serialize(),
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
//alert('Data available for the search made');
sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[0]));
sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[1]));
sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[2]));
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
sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));

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
sessionStorage.setItem("emp_verification_cumulative_array",JSON.stringify(result[28]));   

sessionStorage.setItem("educational_records_array",JSON.stringify(result[29]));

// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});


$(document).off('click', '#dashlogout').on('click', '#dashlogout', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

/*$(document).on("pagebeforeshow","#dashboard",function(){

  alert("pagebeforeshow event fired - pagetwo is about to be shown");
alert(sessionStorage.length);
if (sessionStorage.length == 0) {
alert('sessionStorage zero go out');
  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
  }else
  {
    alert('no empty');
  }
});*/



});
