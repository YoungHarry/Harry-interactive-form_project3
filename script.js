
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
   if($('#design').val() === "js puns"){
     $("option:contains('Cornflower Blue (JS Puns shirt only)')").show();
     $("option:contains('Dark Slate Grey (JS Puns shirt only)')").show();
     $("option:contains('Gold (JS Puns shirt only)')").show();

    $("option:contains('Tomato')").hide();
    $("option:contains('Steel Blue ')").hide();
    $("option:contains('Dim Grey')").hide();

}



});

let costOfActivity = 0;
let anotherDollarSign = "$";

let displayActivity = document.createElement('label');
displayActivity.class = "activityCost";
displayActivity.textContent = anotherDollarSign + costOfActivity;
$('.activities').append(displayActivity);

$('.activities').on('change',function(e){
   let clickedActivities = $(e.target);
    let clicked = clickedActivities.parent().text();
    let $newLet = clicked.indexOf('$');
  let newTotal =  clicked.slice($newLet + 1, $newLet.length);

  newTotal = parseInt(newTotal);

  if(clickedActivities.prop("checked")){
    costOfActivity = costOfActivity + newTotal;
  }

  else{
    costOfActivity = costOfActivity - newTotal;
  }
  //displaying the total
displayActivity.textContent = anotherDollarSign + costOfActivity;
  //varaibles that you declare I think//
  let dashDate = clicked.indexOf('—');
  let comma = clicked.indexOf(',');
// extracting the time and date from clickedActivities
  let lastTotal = clicked.slice(dashDate, comma);

  console.log(lastTotal);

//Grabbing the checkboxes from input
  let $newOne = $('[type="checkbox"]');

// a for loop for each ofthe activity selected so that you can disable them
  for(let i=0; i < $newOne.length; i++ ){
    let $activityinteration = $newOne[i];
    console.log("It works")

     if(e.target !== $activityinteration && $activityinteration.parentNode.textContent.includes(lastTotal)){
     if(clickedActivities.prop("checked")){
       $activityinteration.disabled=true;
} else {
  $activityinteration.disabled = false;

}

     /*else{
        $activityinteration.eq(i).attr("disabled",false);

     }*/
   };
};
});

//hiding the select payment method
$('option:contains("Select Payment Method")').hide();
console.log("It Functions!");


$('#payment').on('change',function(){

    if($('#payment').val()=== 'paypal'){
      $('#credit-card').hide();
      $('div:contains("If you selected the Bitcoin option")').hide();
      $('div:contains("If you selected the PayPal option")').show();
    }

    if($('#payment').val()=== 'bitcoin'){
      $('#credit-card').hide();
      $('div:contains("If you selected the PayPal option")').hide();
      $('div:contains("If you selected the Bitcoin option")').show();


    }

    if($('#payment').val()=== 'credit card'){
        $('#credit-card').show();
        $('p:contains("If you selected the PayPal option")').hide();
        $('p:contains("If you selected the Bitcoin option")').hide();

    }

});





let $namevalid = /^[a-zA-Z]+ [a-zA-Z]+$/;


$('form[method="post"]').submit(function(e){
  e.preventDefault();
  $('.error').remove();


  if($("#name") == $namevalid){
    console.log("I dunno");
    $('#name').after('<span class="error">This is correct! </span>');

  } else {
    $('#name').after('<span class="error">This field is required, First and Last Name </span>');


}










});
