// This is where it all goes :)
$('.center-content').fadeTo('slow', 0.3, function()
{
  
  $(this).css('background-image', 'url(' + $img + ')');
}).delay(1000).fadeTo('slow', 1);
