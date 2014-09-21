jQuery(document).ready(function () {
  // Superfish Menu
  $('#navigation').superfish({
    animation:     {opacity:'show',height:'show'},   
    animationOut:  {opacity:'hide'},   
    speed:         'normal',
    speedOut:      'normal',
    delay:         0, 
    autoArrows:    false          
  }); 
 
  // Load Vegas Plugin
  $.vegas('slideshow', {
    delay:15000,
    backgrounds:[
      { src:'images/beach2.png', fade:1000},
      { src:'images/beach3.png', fade:1000}
    ]
  })('overlay', {
    src:'assets/img/overlay.png'
  }); 
 
});