$(function () {
// define the application
var Library = {};
var pgtransition = 'slide';
(function (app) {
// variable definitions go here

app.init = function () {
// hide the address bar when the window is ready
window.addEventListener("load",function() {
setTimeout(function(){ window.scrollTo(0, 1) }, 0);
});
//eliminate the 300 ms delay in click events

//window.addEventListener('load', function () {new FastClick.attach(document.body)}, false);//add an icon to the homescreen for lauch
//addToHomescreen();
var addToHomeConfig = {returningVisitor: true, expire: 720, autostart: false};
app.BookBindings();
$('#msgboxyes').on('click', function (e) {
e.preventDefault();
e.stopImmediatePropagation();
var yesmethod = $('#msgboxyes').data('method');
var yesid = $('#msgboxyes').data('id');
app[yesmethod](yesid);
});
$('#msgboxno').on('click', function (e) {
e.preventDefault();
e.stopImmediatePropagation();
var nomethod = $('#msgboxno').data('method');
var noid = $('#msgboxno').data('id');
var toPage = $('#msgboxno').data('topage');
// show the page to display after a record is deleted
$.mobile.changePage('#' + toPage, {transition: pgtransition});
app[nomethod](noid);
});
$('#alertboxok').on('click', function (e) {
e.preventDefault();
e.stopImmediatePropagation();
var toPage = $('#alertboxok').data('topage');
// show the page to display after ok is clicked
$.mobile.changePage('#' + toPage, {transition: pgtransition});
});
};
// define events to be fired during app execution.
app.BookBindings = function () {
// code to run before showing the page that lists the records.
//run before the page is shown

//upload a file to server once onchange is detected
$('#pgAddBookBookImage').on('change', function () {
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});
//check to see if we have a file
var fName = document.getElementById('pgAddBookBookImage').files[0];
if (typeof (fName) === 'undefined') fName = '';
if (Len(fName) > 0) {
//get the file name
var ofName = fName.name;
//get the file extension
var ofExt = Mid(ofName, InStrRev(ofName, '.'));
// open a file reader to upload the file to the server
var reader = new FileReader();
// once the file reader has loaded the file contents
reader.onload = function() {
// get the dataURL of the file, a base 64 decoded string
var dataURL = reader.result;
//save the file to the server
var req = Ajax("http://fourthforce.in/verify/savepng.php", "POST", "file=" + ofName + "&content=" + dataURL);
if (req.status == 200) {
// return the full path of the saved file
fName = req.responseText;
$('#pgAddBookImagePreview').attr('src', dataURL);
//show a toast message that the file has been uploaded
toastr.success(ofName + ' file uploaded.', 'Library');
} else {
// return a blank file name
fName = '';
//show a toast message that the file has not been uploaded
toastr.error(ofName + ' file NOT uploaded.', 'Library');
}
//set the file name to store later
$('#pgAddBookBookImage').data('file', fName);
};
// start reading the file contents
reader.readAsDataURL(fName);
} else {
}
$.mobile.loading("hide");
});
//upload a file to server once onchange is detected
$('#pgEditBookBookImage').on('change', function () {
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});
//check to see if we have a file
var fName = document.getElementById('pgEditBookBookImage').files[0];
if (typeof (fName) === 'undefined') fName = '';
if (Len(fName) > 0) {
//get the file name
var ofName = fName.name;
//get the file extension
var ofExt = Mid(ofName, InStrRev(ofName, '.'));
// open a file reader to upload the file to the server
var reader = new FileReader();
// once the file reader has loaded the file contents
reader.onload = function() {
// get the dataURL of the file, a base 64 decoded string
var dataURL = reader.result;
//save the file to the server
var req = Ajax("http://fourthforce.in/verify/savepng.php", "POST", "file=" + ofName + "&content=" + dataURL);
if (req.status == 200) {
// return the full path of the saved file
fName = req.responseText;
$('#pgEditBookImagePreview').attr('src', dataURL);
//show a toast message that the file has been uploaded
toastr.success(ofName + ' file uploaded.', 'Library');
} else {
// return a blank file name
fName = '';
//show a toast message that the file has not been uploaded
toastr.error(ofName + ' file NOT uploaded.', 'Library');
}
//set the file name to store later
$('#pgEditBookBookImage').data('file', fName);
};
// start reading the file contents
reader.readAsDataURL(fName);
} else {
}
$.mobile.loading("hide");
});
//***** Add Page *****
// code to run when back button is clicked on the add record page.
// Back click event from Add Page





//Our events are now fully defined.
};
// this defines methods/procedures accessed by our events.
// get existing records from JSON



// get the contents of the add screen controls and store them in an object.
//get the record to be saved and put it in a record array
//read contents of each form input
function pgAddBookGetRec() {
//define the new record
var BookRec = {};
BookRec.Title = $('#pgAddBookTitle').val().trim();
BookRec.Author = $('#pgAddBookAuthor').val().trim();
BookRec.ISBN = $('#pgAddBookISBN').val().trim();
BookRec.Condition = $('input:radio[name=pgAddBookCondition]:checked').val();
BookRec.Price = $('#pgAddBookPrice').val().trim();
BookRec.BookImage = $('#pgAddBookBookImage').data('file');
BookRec.ImagePreview = $('#pgAddBookImagePreview').attr('src');
return BookRec;
}
// clear the contents of the Add page controls
//clear the form controls for data entry
function pgAddBookClear() {
$('#pgAddBookTitle').val('');
$('#pgAddBookAuthor').val('');
$('#pgAddBookISBN').val('');
$('input[name=pgAddBookCondition]').prop('checked',false).checkboxradio('refresh');
$('#pgAddBookPrice').val('');
$('#pgAddBookBookImage').val('');
$('#pgAddBookImagePreview').attr('src', '');
$('#pgAddBookImagePreview').removeAttr('src');
}
//get all existing Book-BookImage
app.getBookBookImage = function () {
// get Book records
var BookObj = app.getBook();
// loop through each record and get the fields we want
// make sure your iterators are properly scoped
var n;
var dsFields = [];
for (n in BookObj) {
//get the record details
var BookRec = BookObj[n];
var dsField = BookRec.BookImage;
dsFields.push(dsField);
}
return dsFields;
};

app.init();
})(Library);
});
