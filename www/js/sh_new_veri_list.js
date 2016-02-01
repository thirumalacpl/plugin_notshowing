$(document).on('pageshow', '#sh_new_veri_list', function(){  
//alert("sh_new_veri_list one");
$('#lis_sh').empty();

//alert("supervisor_list_view");

 $(document).off('click', '#dashcooiwer').on('click', '#dashcooiwer', function() {
  
  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/* $(document).off('click', '#newsher').on('click', '#newlistin', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

 $(document).off('click', '#newlistin').on('click', '#newlistin', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#shapprovedinuo').on('click', '#shapprovedinuo', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
   
 $(document).off('click', '#shapprovedzone').on('click', '#shapprovedzone', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#completedshioo').on('click', '#completedshioo', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

                  $(document).off('click', '#rejectieiop').on('click', '#rejectieiop', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_reject_listio'), { transition: "none", changeHash: true, reverse: false });
return false;
});

                        $(document).off('click', '#verifalyui').on('click', '#verifalyui', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_Verified_false'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcooier').on('click', '#signoutcooier', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});


  
   sh_new_veri_list =  JSON.parse(sessionStorage.getItem("sh_new_veri_list"));

   //employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
    sh_addressid_records_array =  JSON.parse(sessionStorage.getItem("sh_addressid_records_array"));
    sh_educational_records_array =  JSON.parse(sessionStorage.getItem("sh_educational_records_array"));
     sh_basic_profile_records_array =  JSON.parse(sessionStorage.getItem("sh_basic_profile_records_array"));

     sh_employment_records_array =  JSON.parse(sessionStorage.getItem("sh_employment_records_array"));

insertassign_employment_array =  JSON.parse(sessionStorage.getItem("insertassign_employment_array"));
insertassign_education_array =  JSON.parse(sessionStorage.getItem("insertassign_education_array"));
insertassign_address_array =  JSON.parse(sessionStorage.getItem("insertassign_address_array"));

assests_verification_array =  JSON.parse(sessionStorage.getItem("assests_verification_array"));
bankguarantee_verification_array =  JSON.parse(sessionStorage.getItem("bankguarantee_verification_array"));
address_verification_array =  JSON.parse(sessionStorage.getItem("address_verification_array"));
reference_verification_array =  JSON.parse(sessionStorage.getItem("reference_verification_array"));

distributor_verification_array =  JSON.parse(sessionStorage.getItem("distributor_verification_array"));
distributor_details_array =  JSON.parse(sessionStorage.getItem("distributor_details_array"));

web_verification_array =  JSON.parse(sessionStorage.getItem("web_verification_array"));
supplier_details_array =  JSON.parse(sessionStorage.getItem("supplier_details_array"));
warehouse_verification_array =  JSON.parse(sessionStorage.getItem("warehouse_verification_array"));
verification_master_array =  JSON.parse(sessionStorage.getItem("verification_master_array"));

driving_details_array =  JSON.parse(sessionStorage.getItem("driving_details_array"));
credential_verification_array =  JSON.parse(sessionStorage.getItem("credential_verification_array"));
identity_verification_array =  JSON.parse(sessionStorage.getItem("identity_verification_array"));
bankruptcy_verification_array =  JSON.parse(sessionStorage.getItem("bankruptcy_verification_array"));
professional_details_array =  JSON.parse(sessionStorage.getItem("professional_details_array"));

employmentgap_verification_array =  JSON.parse(sessionStorage.getItem("employmentgap_verification_array"));
delinquent_verification_array =  JSON.parse(sessionStorage.getItem("delinquent_verification_array"));
servant_verification_array =  JSON.parse(sessionStorage.getItem("servant_verification_array"));
integrity_lifestyle_verification_array =  JSON.parse(sessionStorage.getItem("integrity_lifestyle_verification_array"));
edusalary_office_array =  JSON.parse(sessionStorage.getItem("edusalary_office_array"));
criminal_verification_array =  JSON.parse(sessionStorage.getItem("criminal_verification_array"));
edusalary_education_array =  JSON.parse(sessionStorage.getItem("edusalary_education_array"));
integrity_lifestyle_permanent_array =  JSON.parse(sessionStorage.getItem("integrity_lifestyle_permanent_array"));
servant_education_array =  JSON.parse(sessionStorage.getItem("servant_education_array"));



//alert(sh_employment_records_array);
sh_regionarray =  JSON.parse(sessionStorage.getItem("sh_regionarray"));

 //alert(sh_regionarray);

if(sh_regionarray == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

var superempty=sh_new_veri_list;

if(superempty == ""){
  alert('No record Found');
  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
}

for(a=0;a<sh_new_veri_list.length;a++){
  super_obj = sh_new_veri_list[a];
 //alert(super_obj.verification_user_id+'superArray'+super_obj.qualification_id);

qualification_id=super_obj.edutype;
//alert(super_obj.qualification_id +'for');

var sup=super_obj.First_Name;
var date_new=super_obj.start_date;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);



//alert(date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear());

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();


if( typeof sup !== 'undefined'){

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+date+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/company-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'
$('#lis_sh').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);
}

/*assest*/
if(qualification_id == '63' ){
  
  var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);
}



/*address*/
if(qualification_id == '29' || qualification_id == '31' ){
  //alert('address');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*reference*/
if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35' ){
  //alert('referencre');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/REFFERENCE-ICON.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);
}

/*distributor residential address verification*/
/*if(qualification_id == '40' ){
  //alert('distributor residentisl address');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}*/

/*distributor details*/
if(qualification_id == '41' ){
  //alert('distributor details');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Distributor-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*address details*/
if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84'){
 //alert('common web ware supplier');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*web verification of antecedents*/
if(qualification_id == '43' ){
 // alert('web verification');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/web-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/*supplier vendor details*/
if(qualification_id == '47' ){
 // alert('supplier vendor');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/supplier-verification-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/*ware house leasing*/
if(qualification_id == '45' ){
  //alert('ware housing');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Warehouseverification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*bank*/
if(qualification_id == '64' ){
 // alert('bank 64');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*driving licence*/
if(qualification_id == '56' ){
  //alert('driving licence 56');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/DrivingLicence-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*identity */
if(qualification_id == '65' ){
  //alert('identity 65');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/identity-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/*credential */
if(qualification_id == '39' ){
  //alert('credential  39');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Credential-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/*bankrupcy */
if(qualification_id == '66' ){
  //alert('bankrupcy 66');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/bankkruptcy-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*professional licence*/
if(qualification_id == '69' ){
  //alert('professional licence 69');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/* 6verifi */
/* servant  */
if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/servant.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* servant education qualification 2*/
if(qualification_id == '80' ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/servant.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* education salary 1*/
if(qualification_id == '75' ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-&-salary.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* education salary 2*/
if(qualification_id == '76' ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-&-salary.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* criminal 1*/
if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/criminal.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* employmnet gap 1 and criminal 2-->74*/
if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-gap.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* delinquent 1*/
if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93'){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/delinquent.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* integrity & lifestyle 1*/
if(qualification_id == '85' ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* integrity & life style 2*/
if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}
/* security*/
if(qualification_id == '94'  ){
 
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}



}



}


});



function shnewlist(index){



  super_obj = sh_new_veri_list[index];
  qualification_id =super_obj.edutype;
  user_ida=super_obj.Verification_Master_Id;



if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<sh_addressid_records_array.length;a++){
  address_obj = sh_addressid_records_array[a];

  super_obj = sh_new_veri_list[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =super_obj.Verification_Master_Id;

  if( h == g && hadd == qualification_id){
    address_objag = sh_addressid_records_array[a];
//alert(address_objag.user_id+'addressid_records_array');
}

}

for(a=0;a<insertassign_address_array.length;a++){

  inser_a = insertassign_address_array[a];

  super_obj = sh_new_veri_list[index];
  huu =inser_a.Verification_Master_Id;
  huemployy=inser_a.id;
  guu =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( huu == guu && huemployy == qualification_id ){
//alert(huu+'iiiiiiiiiiin'+guu);
//alert(huemployy+'iihu qualiiin'+qualification_id);
insert_add = insertassign_address_array[a];
//alert('employ');
//alert(insert_add.Verification_Master_Id+"emp----o"+insert_add.id)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}

}


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
//alert('function eduction id 1 to 5');
for(a=0;a<sh_educational_records_array.length;a++){
  eductional_obj = sh_educational_records_array[a];

  super_obj = sh_new_veri_list[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(hedu+'hdeducompare'+qualification_id); 
g =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( h == g && hedu == qualification_id){

  eductional_objaa = sh_educational_records_array[a];
  //alert(eductional_objaa+'edutype');

}

}

for(a=0;a<insertassign_education_array.length;a++){

  inser_e = insertassign_education_array[a];

  super_obj = sh_new_veri_list[index];
  huu =inser_e.Verification_Master_Id;
  huemployy=inser_e.edutype;
  guu =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( huu == guu && huemployy == qualification_id ){
//alert(huu+'iiiiiiiiiiin'+guu);
//alert(huemployy+'iihu qualiiin'+qualification_id);
insert_edu = insertassign_education_array[a];
//alert('employ');
//alert(insert_edu.Verification_Master_Id+"emp----o"+insert_edu.edu_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}

}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<sh_employment_records_array.length;a++){
  employment_obj = sh_employment_records_array[a];

  super_obj = sh_new_veri_list[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =super_obj.Verification_Master_Id;
//alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
//alert(hu+'iiiiiiiiiiin');
employment_objad = sh_employment_records_array[a];
//alert('employ');
//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}

for(a=0;a<insertassign_employment_array.length;a++){

  inser_o = insertassign_employment_array[a];

  super_obj = sh_new_veri_list[index];
  huu =inser_o.Verification_Master_Id;
  huemployy=inser_o.edutype;
  guu =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( huu == guu && huemployy == qualification_id ){
//alert(huu+'iiiiiiiiiiin'+guu);
//alert(huemployy+'iihu qualiiin'+qualification_id);
insert_emp = insertassign_employment_array[a];
//alert('employ');
//alert(insert_emp.Verification_Master_Id+"emp----o"+insert_emp.edu_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}
}

/*servant education 80 75*/
if(qualification_id == '80' ){
  //alert('80 for');
 for(a=0;a<servant_education_array.length;a++){
servant_educ = servant_education_array[a];

  super_obj = sh_new_veri_list[index];
  hj =servant_educ.user_id;
  huemploy=servant_educ.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  servant_educa = servant_education_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
  }

/*edusalary_office 75*/
if(qualification_id == '85' ){
 // alert('85 ');
 for(a=0;a<integrity_lifestyle_permanent_array.length;a++){
integrity_lifestyle_per = integrity_lifestyle_permanent_array[a];

  super_obj = sh_new_veri_list[index];
  hj =integrity_lifestyle_per.user_id;
  huemploy=integrity_lifestyle_per.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  integrity_lifestyle_pera = integrity_lifestyle_permanent_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

  }

/*edusalary_office 75*/
if(qualification_id == '76' ){
  //alert('76 ');
 for(a=0;a<edusalary_education_array.length;a++){
edusalary_edu = edusalary_education_array[a];

  super_obj = sh_new_veri_list[index];
  hj =edusalary_edu.user_id;
  huemploy=edusalary_edu.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  edusalary_edua = edusalary_education_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

/*edusalary_office 75*/
if(qualification_id == '75' ){
  //alert('75 ');
 for(a=0;a<edusalary_office_array.length;a++){
edusalary_off = edusalary_office_array[a];

  super_obj = sh_new_veri_list[index];
  hj =edusalary_off.user_id;
  huemploy=edusalary_off.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  edusalary_offa = edusalary_office_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

  }

if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93' ){
 for(a=0;a<delinquent_verification_array.length;a++){
delinquent_veri = delinquent_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =delinquent_veri.user_id;
  huemploy=delinquent_veri.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  delinquent_veria = delinquent_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}


if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
 for(a=0;a<integrity_lifestyle_verification_array.length;a++){
integrity_lifestyle = integrity_lifestyle_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =integrity_lifestyle.user_id;
  huemploy=integrity_lifestyle.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  integrity_lifestylea = integrity_lifestyle_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}


if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
 for(a=0;a<employmentgap_verification_array.length;a++){
  employgap_veri = employmentgap_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =employgap_veri.user_id;
  huemploy=employgap_veri.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  employgap_veria = employmentgap_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){
 for(a=0;a<criminal_verification_array.length;a++){
  criminal_veri = criminal_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =criminal_veri.user_id;
  huemploy=criminal_veri.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  criminal_veria = criminal_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
 }

if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){

for(a=0;a<servant_verification_array.length;a++){
  servant_veri = servant_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =servant_veri.user_id;
  huemploy=servant_veri.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  servant_veria = servant_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}


if(qualification_id == '63' ){
//alert('function assest id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  assest_inproa = assests_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '64' ){
//alert('function bank guarantee id 27 to 28');
for(a=0;a<bankguarantee_verification_array.length;a++){
  bank_guar = bankguarantee_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  bank_inproa = bankguarantee_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '29'  || qualification_id == '31'){
//alert('function address id 29 to 31');
for(a=0;a<address_verification_array.length;a++){
  address_verii = address_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =address_verii.user_id;
  huemploy=address_verii.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  address_veriia = address_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
//alert('function reference id 32 to 35');
for(a=0;a<reference_verification_array.length;a++){
  reference = reference_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =reference.user_id;
  huemploy=reference.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  referencea = reference_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}


if(qualification_id == '40' ){
//alert('function distributor residential id 40');
for(a=0;a<distributor_verification_array.length;a++){
  distr_residential = distributor_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =distr_residential.user_id;
  huemploy=distr_residential.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  distr_residentiala = distributor_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '41' ){
//alert('function distributor residential id 41');
for(a=0;a<distributor_details_array.length;a++){
  dist_details = distributor_details_array[a];

  super_obj = sh_new_veri_list[index];
  hj =dist_details.user_id;
  huemploy=dist_details.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  dist_detailsa = distributor_details_array[a];
//alert(dist_detailsa.user_id+'dist_detailsa'+gj);
}
}

}

if(qualification_id == '43' ){
//alert('function web verifi  id 43');
for(a=0;a<web_verification_array.length;a++){
  web_veri = web_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =web_veri.user_id;
  huemploy=web_veri.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  web_veria = web_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '47' ){
//alert('function supplier details id 47');
for(a=0;a<supplier_details_array.length;a++){
  supplier_vend = supplier_details_array[a];

  super_obj = sh_new_veri_list[index];
  hj =supplier_vend.user_id;
  huemploy=supplier_vend.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  supplier_venda = supplier_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '45' ){
//alert('function ware housing 45');
for(a=0;a<warehouse_verification_array.length;a++){
  ware_hous = warehouse_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =ware_hous.user_id;
  huemploy=ware_hous.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  ware_housa = warehouse_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84' || qualification_id == '94'){
//alert('function distributor residential id 40');
for(a=0;a<verification_master_array.length;a++){
  common_address = verification_master_array[a];

  super_obj = sh_new_veri_list[index];
  hj =common_address.Verification_Master_Id;
  huemploy=common_address.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  common_addressa = verification_master_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '56' ){
//alert('function driving id 56');
for(a=0;a<driving_details_array.length;a++){
  driving_lic = driving_details_array[a];

  super_obj = sh_new_veri_list[index];
  hj =driving_lic.user_id;
  huemploy=driving_lic.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  driving_lica = driving_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}


if(qualification_id == '39' ){
//alert('function driving id 39');
for(a=0;a<credential_verification_array.length;a++){
  credential_det = credential_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =credential_det.user_id;
  huemploy=credential_det.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  credential_deta = credential_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}



if(qualification_id == '65' ){
//alert('function driving id 56');
for(a=0;a<identity_verification_array.length;a++){
  identity_det = identity_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =identity_det.user_id;
  huemploy=identity_det.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  identity_deta = identity_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '66' ){
//alert('function driving id 56');
for(a=0;a<bankruptcy_verification_array.length;a++){
  bankruptcy_det = bankruptcy_verification_array[a];

  super_obj = sh_new_veri_list[index];
  hj =bankruptcy_det.user_id;
  huemploy=bankruptcy_det.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bankruptcy_deta = bankruptcy_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '69' ){
//alert('function driving id 56');
for(a=0;a<professional_details_array.length;a++){
  professional_det = professional_details_array[a];

  super_obj = sh_new_veri_list[index];
  hj =professional_det.user_id;
  huemploy=professional_det.address_group;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  professional_deta = professional_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

var delinquent_veria=delinquent_veria;
var integrity_lifestyle_pera=integrity_lifestyle_pera;
var integrity_lifestylea=integrity_lifestylea;
var servant_veria=servant_veria;
var servant_educa=servant_educa;
var edusalary_edua=edusalary_edua;
var edusalary_offa=edusalary_offa;
var employgap_veria=employgap_veria;
var criminal_veria=criminal_veria;



var bankruptcy_deta=bankruptcy_deta;
var identity_deta=identity_deta;
var professional_deta=professional_deta;
var credential_deta=credential_deta;
var driving_lic=driving_lic;


var bank_inproa=bank_inproa;
var assest_inproa=assest_inproa;
var address_veriia=address_veriia;
var referencea=referencea;

var insert_emp=insert_emp;
var insert_edu=insert_edu;
var insert_add=insert_add;

var distr_residentiala=distr_residentiala;
var dist_detailsa=dist_detailsa;

var web_veria=web_veria;
var supplier_venda=supplier_venda;
var ware_housa=ware_housa;
var common_addressa=common_addressa;

var eductional_objaa=eductional_objaa;
var employment_objad=employment_objad;
var address_objag=address_objag;



if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
//alert('currentob education succes'); 
if(eductional_objaa !== undefined){
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
sessionStorage.setItem("insert_edu",JSON.stringify(insert_edu));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
//sessionStorage.setItem("insert_address",JSON.stringify(insert_address));
if(address_objag !== undefined){
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("insert_add",JSON.stringify(insert_add));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
if(employment_objad !== undefined){
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
sessionStorage.setItem("insert_emp",JSON.stringify(insert_emp));

$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });

return false;
}
}
if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
//alert('currentob reference succes');
if(referencea !== undefined){
sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '29' ||  qualification_id == '31'){
//alert('currentob address succes');
if(address_veriia !== undefined){
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '64'){
//alert('currentob bank succes');
if(bank_inproa !== undefined){
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '63' ){
//alert('currentob assest succes');
if(assest_inproa !== undefined){
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));


sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));

$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '40' ){
  if(distr_residentiala !== undefined){
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}


if(qualification_id == '41' ){
  if(dist_detailsa !== undefined){
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}



if(qualification_id == '43' ){
  if(web_veria !== undefined){
sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}


if(qualification_id == '47' ){
    if(supplier_venda !== undefined){
sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}


if(qualification_id == '45' ){
  if(ware_housa !== undefined){
sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84' || qualification_id == '94'){
  if(common_addressa !== undefined){
sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '56' ){
  if(driving_lica !== undefined){
sessionStorage.setItem("driving_lica",JSON.stringify(driving_lica));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '39' ){
  if(credential_deta !== undefined){
sessionStorage.setItem("credential_deta",JSON.stringify(credential_deta));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '65' ){
  if(identity_deta !== undefined){
sessionStorage.setItem("identity_deta",JSON.stringify(identity_deta));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '69' ){
  if(professional_deta !== undefined){
sessionStorage.setItem("professional_deta",JSON.stringify(professional_deta));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '66' ){
  if(bankruptcy_deta !== undefined){
sessionStorage.setItem("bankruptcy_deta",JSON.stringify(bankruptcy_deta));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){
      if(servant_veria !== undefined){
sessionStorage.setItem("servant_veria",JSON.stringify(servant_veria));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){
      if(criminal_veria !== undefined){
sessionStorage.setItem("criminal_veria",JSON.stringify(criminal_veria));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
      if(employgap_veria !== undefined){
sessionStorage.setItem("employgap_veria",JSON.stringify(employgap_veria));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
      if(integrity_lifestylea !== undefined){
sessionStorage.setItem("integrity_lifestylea",JSON.stringify(integrity_lifestylea));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93' ){
      if(delinquent_veria !== undefined){
sessionStorage.setItem("delinquent_veria",JSON.stringify(delinquent_veria));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
if(qualification_id == '75' ){
      if(edusalary_offa !== undefined){
sessionStorage.setItem("edusalary_offa",JSON.stringify(edusalary_offa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
if(qualification_id == '76' ){
      if(edusalary_edua !== undefined){
sessionStorage.setItem("edusalary_edua",JSON.stringify(edusalary_edua));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
if(qualification_id == '85' ){
      if(integrity_lifestyle_pera !== undefined){
sessionStorage.setItem("integrity_lifestyle_pera",JSON.stringify(integrity_lifestyle_pera));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}
if(qualification_id == '80' ){
 // alert('80 sessionStorage');
      if(servant_educa !== undefined){
          //alert('80 2sessionStorage');
sessionStorage.setItem("servant_educa",JSON.stringify(servant_educa));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

}