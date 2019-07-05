


//Putting first field into 'focus' state

$("#name").focus();





//Add an "Other" option to the Job Role section

$('#other-title').hide();

//Hide the 'select theme 'option' element in the 'design' menu
//Update the color field to read "Please Select a T-Shirt"
$("option:contains('Select Theme')").hide();
//creating the new option value
//$('#color').prepend('<option value="getashirt">Please Select a T-Shirt</option>').val('option:first');
$('#color').prepend('<option value="getashirt">Please Select a T-Shirt</option>');
$('#color')[0].selectedIndex =0;

$('#design').on('change',function(){
  if($('#design').val() === "heart js"){
    $("option:contains('Cornflower Blue (JS Puns shirt only)')").hide();
    $("option:contains('Dark Slate Grey (JS Puns shirt only)')").hide();
    $("option:contains('Gold (JS Puns shirt only)')").hide();
    $("option:contains('Tomato (I &#9829; JS shirt only)')").show();
    $("option:contains('Steel Blue (I &#9829; JS shirt only)')").show();
    $("option:contains('Dim Grey (I &#9829; JS shirt only)')").show();

  }
  else if($('#design').val() === "js puns"){
    $("option:contains('Tomato (I &#9829; JS shirt only)')").hide();
    $("option:contains('Steel Blue (I &#9829; JS shirt only)')").hide();
    $("option:contains('Dim Grey (I &#9829; JS shirt only)')").hide();
    $("option:contains('Cornflower Blue (JS Puns shirt only)')").show();
    $("option:contains('Dark Slate Grey (JS Puns shirt only)')").show();
    $("option:contains('Gold (JS Puns shirt only)')").show();
}



});
