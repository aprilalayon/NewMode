// JavaScript Document

// Accordion panels

const $theProfile = $('.profile');

$theProfile.hide();

const $tabs = $('.tab');

$tabs.click(function() {
    
  const $oneProfile = $(this).next();
  
  if($oneProfile.is(':visible')){
	  $oneProfile.slideUp();	
  }else{
	  $oneProfile.slideUp();	
	  $oneProfile.slideDown();
  };
  
});


// Thanks for voting 

const $thankYou = $('#thankyou');
const $vote = $('.button');
const $close = $('.fa-times');

//Hides the dialog box
$thankYou.hide();

//Shows the dialog box on click
$vote.click(function(){
    
    $thankYou.show();
    
});

//Closes the dialog box on click of 'x'
$close.click(function(){
    
    $thankYou.hide();
});



