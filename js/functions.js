// JavaScript Document

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

