$(document).on('pageshow', '#pagedesign_completed', function(){  
  //alert("refresh 1");
/*$( document ).delegate("#pagedesign_completed", "pageinit", function() {*/
  $('.iGallery').imageflip()

  //alert("refresh");
/*});
$(document).on('pageinit', '#pagedesign_completed', function(){  

$('.iGallery').imageflip()
*/

$('.s22').empty();
$('#sda_newvericom').empty();
$('#lii_newvericom').empty();
$('.proof').show();

$('.document_imag_inproone_veria_c').empty();
$('.document_imag_inproone_verib_c').empty();
$('.document_imag_inproone_veric_c').empty();
$('.document_imag_inproone_verid_c').empty();
$('.document_imag_inproone_verie_c').empty();
$('.document_imag_inproone_verif_c').empty();

$(document).off('click', '#dashinvnccc').on('click', '#dashinvnccc', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressinvnccc').on('click', '#inprogressinvnccc', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#before_verified_inc').on('click', '#before_verified_inc', function() {

$.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifiedinvnccc').on('click', '#verifiedinvnccc', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedinvnccc').on('click', '#not_verifiedinvnccc', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedinvnccc').on('click', '#completedinvnccc', function() {

  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinvnccc').on('click', '#signoutinvnccc', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});
/*end*/


//alert("success");
$('.document_imag_veri').empty();
$('#percent_veri').empty();
//$('#name').empty();
assignValues();

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

supervisor_view_verified_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_array"));




function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_veri"));

  currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_veri"));


currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_records_veri"));
// alert( currentobj_educational_records.user_id+'education');
currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobja_emnployment_veri"));

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

supervisor_final_commanda =  JSON.parse(sessionStorage.getItem("supervisor_final_commanda"));

coordinator_final_commanda = JSON.parse(sessionStorage.getItem("coordinator_final_commanda"));


bank_inpro =  JSON.parse(sessionStorage.getItem("bank_inproa"));
assest_inpro =  JSON.parse(sessionStorage.getItem("assest_inpro"));
address_veriia =  JSON.parse(sessionStorage.getItem("address_veriia"));
referencea =  JSON.parse(sessionStorage.getItem("referencea"));

distr_residentiala =  JSON.parse(sessionStorage.getItem("distr_residentiala"));
dist_detailsa =  JSON.parse(sessionStorage.getItem("dist_detailsa"));

web_veria =  JSON.parse(sessionStorage.getItem("web_veria"));
supplier_venda =  JSON.parse(sessionStorage.getItem("supplier_venda"));
ware_housa =  JSON.parse(sessionStorage.getItem("ware_housa"));
common_addressa =  JSON.parse(sessionStorage.getItem("common_addressa"));

driving_lica = JSON.parse(sessionStorage.getItem("driving_lica"));
credential_deta = JSON.parse(sessionStorage.getItem("credential_deta"));
identity_deta = JSON.parse(sessionStorage.getItem("identity_deta"));
professional_deta = JSON.parse(sessionStorage.getItem("professional_deta"));
bankruptcy_deta = JSON.parse(sessionStorage.getItem("bankruptcy_deta"));


servant_veria = JSON.parse(sessionStorage.getItem("servant_veria"));
criminal_veria = JSON.parse(sessionStorage.getItem("criminal_veria"));
employgap_veria = JSON.parse(sessionStorage.getItem("employgap_veria"));
integrity_lifestylea = JSON.parse(sessionStorage.getItem("integrity_lifestylea"));
delinquent_veria = JSON.parse(sessionStorage.getItem("delinquent_veria"));
edusalary_offa = JSON.parse(sessionStorage.getItem("edusalary_offa"));
edusalary_edua = JSON.parse(sessionStorage.getItem("edusalary_edua"));
integrity_lifestyle_pera = JSON.parse(sessionStorage.getItem("integrity_lifestyle_pera"));
servant_educa = JSON.parse(sessionStorage.getItem("servant_educa"));

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));

//alert(regionArray_array);

if(regionArray_array == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

var qualification_id = user_obja.type;
//alert(qualification_id+'qqqqqqqqqq');
//alert(user_obja.type+'type');
var verification_user_id = user_obja.verification_user_id;
//alert(verification_user_id +'verification_user_id');
var city = user_obja.city_name;
//alert(city);
var state = user_obja.state;
//alert(state);

var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

var superfin =supervisor_final_commanda;
if (superfin !== null){
$("#supp").text(supervisor_final_commanda.final_Command);
}
var cofin =coordinator_final_commanda;
if( cofin !== null){
$("#co").text(coordinator_final_commanda.comment);
}
regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
//alert(username);
$("#userlistinvnfg").text(username);

if(qualification_id == '85' ){
 // alert('76 education salary inside');
  //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.father+'</p><span class="pri_span">Father Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.mother+'</p><span class="pri_span">Mother Name</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.country+'</p></li>'

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+integrity_lifestyle_pera.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+integrity_lifestyle_pera.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestyle_pera.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestyle_pera.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestyle_pera.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestyle_pera.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestyle_pera.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestyle_pera.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestyle_pera.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '80' ){
 // alert('76 education salary inside');
   //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.edu_name+'</p><span class="pri_span">Institution Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.degree+'</p><span class="pri_span">Qualification</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.year+'</p><span class="pri_span">Year Of Passing</span></div>'
$('#sda_newvericom').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_educa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+servant_educa.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+servant_educa.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_educa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_educa.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_educa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_educa.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+servant_educa.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+servant_educa.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_educa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_educa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_educa.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '76' ){
 // alert('76 education salary inside');
  // var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.university+'</p><span class="pri_span">College/University</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.year_passing+'</p><span class="pri_span">Year of Passing</span></div>'
$('#sda_newvericom').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_edua.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+edusalary_edua.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+edusalary_edua.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_edua.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_edua.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_edua.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_edua.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">College/University: '+edusalary_edua.university+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_edua.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_edua.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_edua.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '75' ){
   //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.designation+'</p><span class="pri_span">Designation</span></div>'

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newvericom').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_offa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+edusalary_offa.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+edusalary_offa.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_offa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_offa.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_offa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_offa.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_offa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_offa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_offa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_offa.state+'</p></li>'
$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id'+empidempl+'empidempl'+verification_user_id+'verification_user_id');

if(empidempl == verification_user_id){
  if(empimgempl == qualification_id  ){


//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93'){
//   var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.bk_mode+'</p><span class="pri_span"> Bank Mode </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.account_type+'</p><span class="pri_span">Type of Account</span></div>'
$('#sda_newvericom').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+delinquent_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+delinquent_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+delinquent_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+delinquent_veria.state+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+delinquent_veria.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+delinquent_veria.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+delinquent_veria.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+delinquent_veria.pan_no+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+delinquent_veria.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+delinquent_veria.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+delinquent_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+delinquent_veria.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
 }

if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
//  var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.employeeid+'</p><span class="pri_span">City</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.designation+'</p><span class="pri_span">Designation</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.country+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestylea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestylea.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestylea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestylea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestylea.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
 }

if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){
// var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.designation+'</p><span class="pri_span">Designation</span></div>'

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.employee_id+'</p><span class="pri_span">Employee Id</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newvericom').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+servant_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+servant_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_veria.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address1:'+servant_veria.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Land Mark:'+servant_veria.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+servant_veria.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_veria.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}


 }

if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.designation+'</p><span class="pri_span">Designation</span></div>'

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.company_name+'</p><span class="pri_span">Company/Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.reason+'</p><span class="pri_span">Reason</span></div>'

$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+employgap_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+employgap_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+employgap_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+employgap_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+employgap_veria.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From-To:'+employgap_veria.gap_from+'-'+employgap_veria.gap_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+employgap_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+employgap_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+employgap_veria.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}
if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.designation+'</p><span class="pri_span">Designation</span></div>'

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.first_name+''+criminal_veria.last_name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.city_name+'</p><span class="pri_span">City</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.state+'</p><span class="pri_span">State</span></div>'

$('#sda_newvericom').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+criminal_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+criminal_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+criminal_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+criminal_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+criminal_veria.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+criminal_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+criminal_veria.state+'</p></li>'
$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '69' ){
  //alert('identity verification');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_prof+'</p><span class="pri_span">Name of the Istitution</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+professional_deta.address+'&nbsp;To &nbsp;'+professional_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+professional_deta.name_prof+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Institution:'+professional_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+professional_deta.doi+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence Type:'+professional_deta.licence_type+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence No:'+professional_deta.licence_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+professional_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+professional_deta.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '64' ){
  //alert('bank');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inproa.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inproa.pan_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inproa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inproa.country+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inproa.pincode+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bank_inpro.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code: '+bank_inpro.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bank_inpro.pan_no+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bank_inpro.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+bank_inpro.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">PinCode:'+bank_inpro.pincode+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+bank_inpro.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+bank_inpro.state+'</p></li>'

$('#lii_newvericom').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '63 ' ){
//alert('assest');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.property_type+'</p><span class="pri_span">Property Type</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">Document Number</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.property_type+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.property_type+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.pincode+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Property-type-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Property-Type: '+assest_inpro.property_type+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Survey Number:'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Patta Number:'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Sq feet:'+assest_inpro.appx_sq+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">sub-register office:'+assest_inpro.sub_off+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

  var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


}

}

}

if(qualification_id == '65' ){
  //alert('identity');



var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idname+'</p><span class="pri_span">ID Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idnumber+'</p><span class="pri_span">ID Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.idnumber+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.doi+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.doi+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.doi+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.doi+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Party Name:'+identity_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Name:'+identity_deta.idname+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Number:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">issued office:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru:'+identity_deta.valid+'<br></p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}
if(qualification_id == '66' ){
  //alert('bankrupcy verification');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.country+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.pincode+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Part Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+bankruptcy_deta.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bankruptcy_deta.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+bankruptcy_deta.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Dealing:'+bankruptcy_deta.dof+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/turn-over.png" alt="" class="li_img_pri"><p class="li_p_pri">Turn-Over:'+bankruptcy_deta.trovr+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Bankruptcy:'+bankruptcy_deta.dobr+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-code.png" alt="" class="li_img_pri"><p class="li_p_pri">Case-Code:'+bankruptcy_deta.ccode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-type.png" alt="" class="li_img_pri"><p class="li_p_pri">case-type:'+bankruptcy_deta.ctype+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">case-Number:'+bankruptcy_deta.cano+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bankruptcy_deta.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+bankruptcy_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+bankruptcy_deta.state+'</p></li>'


$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '39' ){
  //alert('credential verification');



var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential_name+'</p><span class="pri_span">Credential Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential+'</p><span class="pri_span">Vaild Upto</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.valid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.pincode+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+credential_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials Name:'+credential_deta.credential_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials:'+credential_deta.credential+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thur:'+credential_deta.valid+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+credential_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+credential_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+credential_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+credential_deta.state+'</p></li>'

$('#lii_newvericom').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '56' ){
  //alert('distributor residential address verification');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.issuename+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.licenceno+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.valid+'</p><span class="pri_span">Valid Upto</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+driving_lica.fname+'&nbsp;To &nbsp;'+driving_lica.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.country+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Issued Name: '+driving_lica.issuename+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of issue: '+driving_lica.dateofissue+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru: '+driving_lica.valid+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Father-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri"> Address: '+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+driving_lica.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"> City: '+driving_lica.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+driving_lica.state+'</p></li>'


$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '43' ){
 // alert('web verifi details 43');



var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.designation+'</p><span class="pri_span">Designation</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+web_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+web_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+web_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+web_veria.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+web_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+web_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+web_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+web_veria.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '47' ){
 // alert('supplier details 47');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.supplier_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.registration_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.license_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.district+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Commercial Reg Number:' +supplier_venda.registration_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence: '+supplier_venda.license_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">TIN:'+supplier_venda.tin_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street: '+supplier_venda.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+supplier_venda.landmark+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+supplier_venda.district+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+supplier_venda.street+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+supplier_venda.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+supplier_venda.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+supplier_venda.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State: '+supplier_venda.state+'</p></li>'


$('#lii_newvericom').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '45' ){
  //alert('ware house details 45');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/warehousename-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.warehouse_name+'</p><span class="pri_span">Ware House Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Permiter-use.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.permit+'</p><span class="pri_span">Permitted Use</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/suit-unit-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.sunit+'</p><span class="pri_span">Suit/Unit</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.warehouse_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.country+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Warehouse.png" alt="" class="li_img_pri"><p class="li_p_pri">WareHouse: '+ware_housa.warehouse_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Suit-unit.png" alt="" class="li_img_pri"><p class="li_p_pri">Suit/unit: '+ware_housa.sunit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease Start: '+ware_housa.lease_start+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease End: '+ware_housa.lease_end+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Land-lord-type.png" alt="" class="li_img_pri"><p class="li_p_pri">Land loard type: '+ware_housa.landlord_type+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Lease-type-icon-2.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease type: '+ware_housa.lease_type+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Payable.png" alt="" class="li_img_pri"><p class="li_p_pri">Payable: '+ware_housa.payable+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Pernit.png" alt="" class="li_img_pri"><p class="li_p_pri">Permitted-use: '+ware_housa.permit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address: '+ware_housa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+ware_housa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+ware_housa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+ware_housa.state+'</p></li>'

$('#lii_newvericom').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert('oneemploy');
var oneemp=employimg_obj.document;
//alert('oneemp');
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84' || qualification_id == '94'){
  //alert('common details 42 44 46');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address1+'</p><span class="pri_span">Address1</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address2+'</p><span class="pri_span">Address2</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Taluk+'</p><span class="pri_span">Taluk</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+common_addressa.registration_no+'&nbsp;To &nbsp;'+common_addressa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Zipcode+'</p></li>'
//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+common_addressa.Phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+common_addressa.Mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+common_addressa.permanent_regionsection+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+common_addressa.Permanent_City+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+common_addressa.Permanent_State+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+common_addressa.Phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+common_addressa.Mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+common_addressa.permanent_regionsection+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+common_addressa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+common_addressa.state+'</p></li>'


$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


/*if(qualification_id == '40' ){
  //alert('bank');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+distr_residentiala.qname+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+distr_residentiala.task_name+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+distr_residentiala.account_type+'</p><span class="pri_span">City</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+distr_residentiala.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+distr_residentiala.bank_name+'&nbsp;To &nbsp;'+distr_residentiala.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+distr_residentiala.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+distr_residentiala.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+distr_residentiala.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}*/

if(qualification_id == '41' ){
  //alert('distr');



var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
$('#sda_newvericom').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.license_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.district+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_Name: '+dist_detailsa.company_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Number: '+dist_detailsa.registration_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Date: '+dist_detailsa.registration_date+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Commer-reg.png" alt="" class="li_img_pri"><p class="li_p_pri">Commercial Registration:'+dist_detailsa.cr_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Tin Number:'+dist_detailsa.tin_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+dist_detailsa.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+dist_detailsa.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark'+dist_detailsa.street+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+dist_detailsa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+dist_detailsa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+dist_detailsa.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
  //alert('reference');



var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.street+'</p><span class="pri_span">Street</span></div>'
$('#sda_newvericom').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_name:'+referencea.company_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Employee Id:'+referencea.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Salary:'+referencea.salary+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+referencea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+referencea.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+referencea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '29' || qualification_id == '31'){
  //alert('address verrrrrr');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.address+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.street+'</p><span class="pri_span">Street</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+address_veriia.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+address_veriia.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+address_veriia.city_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+address_veriia.state+'</p></li>'

$('#lii_newvericom').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}







if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+user_obja.city_name+'</p><span class="pri_span">City</span></div>'
$('#sda_newvericom').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newvericom').append(liii);
*/

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employer_name+'</p><span class="pri_span">Employer Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_id+'</p><span class="pri_span">Employer ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/saller_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Sallery</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.state+'</p></li>'
$('#lii_newvericom').append(liii);


  var oneemploy = new Array(10);
  k = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];

    var empimgempl=employimg_obj.verification_type_id;
    var empidempl=employimg_obj.verification_master_id;


    if(empimgempl == qualification_id && empidempl == verification_user_id ){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

      k++;
      oneemploy[k]=employimg_obj.document;

      if (k == 0 ){
        var one=oneemploy[k];
       // alert(one+'oneempeeeducation');
     $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+one+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+one+'" style="height: 100%;width:100%" ></a></li>');


      }
      if (k == 1 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
     $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

      }
      if (k == 2 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        //$('.document_imag_inproone_verib_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

      }
      if (k == 3 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
       // $('.document_imag_inproone_veria_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

      }
      if (k == 4 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
       // $('.document_imag_inproone_verie_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

      }
      if (k == 5 ){
        var oneo=oneemploy[k];
       // alert(oneo+'two');
      //  $('.document_imag_inproone_verif_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

      }

$('#from_qwe').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_employment_records.working_from+'</p><p class="sdap">'+currentobj_employment_records.working_to+'</p>');
$('#designation_qwe').html('<h1 class="sdah1">Company</h1><p class="sdap">'+currentobj_employment_records.employer_name+'</p>');
$('#percentage_qwe').html('<h1 class="sdah1">Salary</h1><p class="sdap">'+currentobj_employment_records.employee_final_salary+'</p>');
$('#year_of_passing_veriiio_qwe').html('<h1 class="sdah1">location</h1><p class="sdap">'+currentobj_employment_records.employer_addressone+'</p>');
$('#institute_inproo_qwe').text(user_obja.qualification_name);
$('#address_inproo_qwe').text(currentobj_employment_records.employer_addressone);
$('#pincode_inproo_qwe').text(currentobj_employment_records.employer_zipcode);


    }

  }

}


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
/*    var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Degree</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newvericom').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li>'
$('#lii_newvericom').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png"  class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newvericom').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.state+'</p></li>'
$('#lii_newvericom').append(liii);

  var oneemp = new Array(10);
  j = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == qualification_id && empid == verification_user_id ){
//alert(a);
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


j++;
oneemp[j]=employimg_obj.document;

if (j == 0 ){
  var one=oneemp[j];
  //alert(one+'education');
  $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+one+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+one+'" style="height: 100%;width:100%" ></a></li>');


}
if (j == 1 ){
  var oneo=oneemp[j];
 // alert(oneo+'two');
   $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

}
if (j == 2 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  //$('.document_imag_inproone_veria_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

}
if (j == 3 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  //$('.document_imag_inproone_verid_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

}
if (j == 4 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  //$('.document_imag_inproone_verie_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

}

if (j == 5 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  //$('.document_imag_inproone_verif_c').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');
 $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'" style="height: 100%;width:100%" ></a></li>');

}

//alert(currentobj_educational_records.from);
//alert(currentobj_educational_records.to);
//alert(user_obja.qualification_name);



$('#from_verii').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_educational_records.from+'</p><p class="sdap">'+currentobj_educational_records.to+'</p>');
$('#designation_verii').html('<h1 class="sdah1">Qualification</h1><p class="sdap">'+user_obja.qualification_name+'</p>');
$('#percentage_verii').html('<h1 class="sdah1">Percentage</h1><p class="sdap">'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_verii').html('<h1 class="sdah1">year_of_passing</h1><p class="sdap">'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_verii').text(currentobj_educational_records.institute_name);
$('#address_inproo_verii').text(currentobj_educational_records.address);
$('#pincode_inproo_verii').text(currentobj_educational_records.pincode);




$('#pincode_veri').text(currentobj_educational_records.pincode);



}

}

}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
/*var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Tam</p></li>'
$('#lii_newvericom').append(liii);
*/
$('.proof').hide();

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newvericom').append(liii);


  var oneaddress = new Array(10);
  j = -1;
  for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;
//alert(qualification_id+"oneimg");

if(oneimg == qualification_id && oneid == verification_user_id ){
//alert("if address proof");
//var oneproof=addressimg_obj.document_name;

var oneemp=addressimg_obj.document_name;
//alert(oneemp);
  $('.s22').append('<li><a href="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


j++;
oneaddress[j]=addressimg_obj.document_name;

if (j == 0 ){
  var one=oneaddress[j];
  //alert(one+'aaaaaaadddddressss');
  //$('.document_imag_inproone_veric_c').append('<img src="http://staging.eimpressive.com/documents/addressid/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
  
  $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+one+'"><img src="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+one+'"  style="height: 100%;width:100%"></a></li>');


}
if (j == 1 ){
  var oneo=oneaddress[j];
  //alert(oneo+'two');
  $('.s2').append('<li><a href="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneo+'"  style="height: 100%;width:100%"></a></li>');

}
if (j == 2 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verib_c').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

if (j == 3 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_veria_c').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

if (j == 4 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verie_c').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 5 ){
  var oneo=oneaddress[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verie_c').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}


$('#institute_inproo_veriii').text(user_obja.qualification_name);
//$('#address_inproo').text(currentobj_educational_records.address);
//  $('#pincode_inproo').text(currentobj_educational_records.pincode);


//alert(oneproof+"oneimg after if proof"+oneimg);
//alert(user_obja.name+'name name name oneimg after if proo');
$('#name_veri').text(user_obja.name);
$('#qualification_name_veri').text(user_obja.qualification_name);
// $('#address').text(currentobj_educational_records.address);
// $('#percent').text(currentobj_educational_records.percentage);
// $('#institute').text(currentobj_educational_records.institute_name);
//$('#degree').text(currentobj_educational_records.degree_name);
$('#location_veri').text(user_obja.city_name);
// $('#year').text(currentobj_educational_records.year_of_passing);

//$('.document_imag_veri').append('<img class="profile-thumbnail" src="http://staging.eimpressive.com/documents/addressid/'+oneproof+'" style="width:150px;height:150px">&nbsp');


//$('#pincode').text(currentobj_educational_records.pincode);



}

}


}

}




/*});
*/
});









