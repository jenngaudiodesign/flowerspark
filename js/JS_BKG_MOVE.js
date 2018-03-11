var movementStrength = 25;
var w = $(window).width();
var h = $(window).height();

$(window).mousemove(function(e){          
          var pageX = (e.pageX - w / 2) / w / 2;
          var pageY = (e.pageY - h / 2) / h / 2;
          var newvalueX = pageX * movementStrength;
          var newvalueY = pageY * movementStrength;          
          $('.top-image-left').css({ left: newvalueX + 'px', top: newvalueY + 'px'});
          $('.top-image-right').css({ right: newvalueX + 'px', top: newvalueY + 'px'});
          $('.top-image-left2').css({ left: newvalueX + 'px', top: newvalueY + 'px'});
          $('.top-image-right2').css({ right: newvalueX + 'px', top: newvalueY + 'px'});
          $('.top-image-topleft').css({ left: newvalueX + 'px', top: newvalueY + 'px'});
          $('.top-image-topright').css({ right: newvalueX + 'px', top: newvalueY + 'px'});
});






//$(document).ready(function() {
//var movementStrength = 25;
//var height = movementStrength / $(window).height();
//var width = movementStrength / $(window).width();
//$("body").mousemove(function(e){
//          var pageX = e.pageX - ($(window).width() / 2);
//          var pageY = e.pageY - ($(window).height() / 2);
//          var newvalueX = width * pageX * -1 - 25;
//          var newvalueY = height * pageY * -1 - 50;
//          $('.top-image').css("background-position", newvalueX+"px  "+newvalueY+"px");
//});
//});