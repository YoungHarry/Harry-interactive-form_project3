
//Putting first field into 'focus' state

$("#name").focus();





//Add an "Other" option to the Job Role section
$('#other-title').hide();


$('#title').on('change',function(){
$('#other-title').hide();
if($('#title').val() === 'other'){
  $('#other-title').show();
}else {
$('#other-title').hide();
};

});
//Hide the 'select theme 'option' element in the 'design' menu
//Update the color field to read "Please Select a T-Shirt"
$("option:contains('Select Theme')").hide().disabled;
$("option:contains('Cornflower Blue (JS Puns shirt only)')").hide().disabled;
$("option:contains('Dark Slate Grey (JS Puns shirt only)')").hide().disabled;
$("option:contains('Gold (JS Puns shirt only)')").hide().disabled;
    $("option:contains('Tomato')").hide().disabled;
    $("option:contains('Steel Blue ')").hide().disabled;
    $("option:contains('Dim Grey')").hide().disabled;



//creating the new option value
//$('#color').prepend('<option value="getashirt">Please Select a T-Shirt</option>').val('option:first');
$('#color').prepend('<option value="getashirt">Please Select a T-Shirt</option>');
$('#color')[0].selectedIndex =0;



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
$('#payment')[0].selectedIndex =1;
$('p:contains("If you selected the PayPal option")').hide();
$('p:contains("If you selected the Bitcoin option")').hide();


//setting which options appear according to the payment you selected
$('#payment').on('change',function(){

    if($('#payment').val()=== 'paypal'){
      $('#credit-card').hide();
      $('p:contains("If you selected the Bitcoin option")').hide();
      $('p:contains("If you selected the PayPal option")').show();
    }

    if($('#payment').val()=== 'bitcoin'){
      $('#credit-card').hide();
      $('p:contains("If you selected the PayPal option")').hide();
      $('p:contains("If you selected the Bitcoin option")').show();


    }

    if($('#payment').val()=== 'credit card'){
        $('#credit-card').show();
        $('p:contains("If you selected the PayPal option")').hide();
        $('p:contains("If you selected the Bitcoin option")').hide();

    }

});



// regular expressions for name , email and credit card if selected
let $cvvCode = /^[0-9]{3}$/;
let $zipCode = /^\d{5}(-\d{4})?$/;
let $creditCardValid = /^\d{13,16}$/;
let $emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let $namevalid = /^[a-z ,.'-]+$/i;
const $anotherNewOne = $('input[type="checkbox"]:checked');
//Setting up validation and span errors in case the user tries to submit incorrectly
$('form[method="post"]').submit(function(e){

  $('.error').remove();
// testing Name
  if($namevalid.test($("#name").val())){

  }else{
    $('#name').after('<span class="error">This field is required, First and Last Name </span>');
    e.preventDefault();
  };
  // testing Email
  if($emailValid.test($('#mail').val())){

  } else{
    $('#mail').after('<span class="error">This field is required, Email Address </span>');
    e.preventDefault();
};

// Testing to see if Main Conference was checked or clicked
function checkboxValidation() {

if ($anotherNewOne.length < 1) {
$(".activities").after(
  '<span class="error">At least one checkbox must be selected'
);
$(".error").addClass("error-text");
return false;
} else {
$(".error").remove();
return true;
}
}

//if credit card payment option is selected
if($('#payment').val()=== 'credit card'){

        if($creditCardValid.test($('#cc-num').val())){

        } else {
          $('#cc-num').after('<span class="error">This field is required, Fill out Credit Card number. </span>');
          e.preventDefault();
        };

        if($zipCode.test($('#zip').val())){


        } else {
          $('#zip').after('<span class="error">This field is required, Fill out Zip Code number. </span>');
          e.preventDefault();


        };
        if($cvvCode.test($('#cvv').val())){

        } else{
          $('#cvv').after('<span class="error">This field is required, Fill out Cvv number. </span>');
          e.preventDefault();


        };

};


});
