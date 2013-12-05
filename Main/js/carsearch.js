$(function(){
  $(".radio-button li a").click(function(){
    $(".selected").removeClass("selected");
    $(event.target).addClass("selected");
  });

  $(".checkbox li a").click(function(){
    $(this).toggleClass("selected");
  });

  $(".country-selection li a").click(function(){
    $(this).toggleClass("selected");
    
  });
});