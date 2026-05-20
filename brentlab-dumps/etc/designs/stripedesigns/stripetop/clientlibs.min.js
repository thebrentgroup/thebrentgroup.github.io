jQuery(document).ready(function(){var a=jQuery(window).height();
var c=100;
var b=jQuery("#footer").position().top+c;
jQuery("#footer").css("margin-top","0px");
if(b<a){jQuery("#footer").css("margin-top",15+(a-b)+"px")
}});