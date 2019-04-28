(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    	$(".header-menu ul li a").hover(function(){

    		$(".header-menu ul li").removeClass("active");

    		$(".header-menu ul li a").click(function(){
    			$(".header-menu ul li").addClass("active").removeClass("active");
    		});

    	});


    });


}(jQuery));	
