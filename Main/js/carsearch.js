$(function(){
  $(".radio-button li a").click(function(){
    event.preventDefault();
    $(".radio-button li a.selected").removeClass("selected");
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

  $("#search-button").click(function(){
    event.preventDefault();
    window.location.href = generateSearchString();
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
  return escape("(" + getCarMakes().join("|") + ")")
};

var customEncoding = function(param){
  return param.replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\|/g, "%7C").replace(/\ /g, "%20");
}

var getURLBase = function() {
  var sellerType = $(".radio-button li a.selected").attr('data-id');
  // var region = $("#region").val(); TODO
  var region = "sfbay"

  return "http://" + region + ".craigslist.org/search/" + sellerType + "?query="
} 

var generateSearchString = function(){
  var carMakes = formatCarMakes();
  var addtlParams = $("#adtl-params").val();
  
  var queryString = customEncoding(carMakes + addtlParams);

  searchParams = {
    zoomToPosting : "", 
    minAsk : $("#min-price").val(), 
    maxAsk : $("#max-price").val(), 
    autoMinYear : $("#min-year").val(), 
    autoMaxYear : $("#max-year").val(), 
  };

  if ($("#pic-required").hasClass("selected")) {
    searchParams.hasPic = 1;
  }

  return getURLBase() + queryString + "&" + $.param(searchParams);
};

