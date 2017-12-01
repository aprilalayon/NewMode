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

//Accessibility

function handleBtnClick(event) {
  toggleButton(event.target);
}

function toggleButton(element) {

  var pressed = (element.getAttribute("aria-pressed") === "true");

  element.setAttribute("aria-pressed", !pressed);

}


//Accordion panels expand when press enter when using tab and keyboard only
$(".pane01").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#tab-1").click();
    }
});

$(".pane02").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#tab-2").click();
    }
});

$(".pane03").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#tab-3").click();
    }
});

$(".pane04").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#tab-4").click();
    }
});

$(".pane05").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#tab-5").click();
    }
});
