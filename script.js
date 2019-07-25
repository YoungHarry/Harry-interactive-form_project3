
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
let $cvvCode = /^[0-9]{3,4}$/;
let $zipCode = /^\d{5}(-\d{4})?$/;
let $creditCardValid = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/;
let $emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let $namevalid = /^[a-zA-Z]+[a-zA-Z]+$/;
let $anotherNewOne = $('[type="checkbox"]');
//Setting up validation and span errors in case the user tries to submit incorrectly
$('form[method="post"]').submit(function(e){
  e.preventDefault();
  $('.error').remove();
// testing Name
  if($namevalid.test($("#name").val())){

  }else{
    $('#name').after('<span class="error">This field is required, First and Last Name </span>');

  };
  // testing Email
  if($emailValid.test($('#mail').val())){

  } else{
    $('#mail').after('<span class="error">This field is required, Email Address </span>');

};

// Testing to see if Main Conference was checked or clicked
      if($anotherNewOne.prop("checked")== true){

        }
        else{
                $('.activities').after('<span class="error">This field is required, Select Main Conference before choosing the others. </span>');
            };
//if credit card payment option is selected
if($('#payment').val()=== 'credit card'){

        if($creditCardValid.test($('#cc-num').val())){

        } else {
          $('#cc-num').after('<span class="error">This field is required, Fill out Credit Card number. </span>');
        };

        if($zipCode.test($('#zip').val())){


        } else {
          $('#zip').after('<span class="error">This field is required, Fill out Zip Code number. </span>');


        };
        if($cvvCode.test($('#cvv').val())){

        } else{
          $('#cvv').after('<span class="error">This field is required, Fill out Cvv number. </span>');


        };

};


});
