$(function(){
  $(".radio-button li a").click(function(){
    event.preventDefault();
    $(".radio-button li addClass.selected").removeClass("selected");
    $(event.target).addClass("selected");
  });

  $(".checkbox li a").click(function(){
    event.preventDefault();
    $(this).toggleClass("selected");
  });

  $(".country-selector li a").click(function(){
    event.preventDefault();
    var country = $(this).attr('data-id');
     $("#" + country + " li a").toggleClass("selected");
  });
});

var getCarMakes = function(){
    arr = [];
    $(".car-make-list li a.selected").each(function(idx, el) { 
      arr.push($(el).attr('data-id')); 
    });
    return arr;
};

var formatCarMakes = function(){
  return "(" + getCarMakes().join("|") + ")"
};

