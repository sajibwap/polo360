(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    
    		$(".header-menu ul li a").click(function(){
    			
    			$(".header-menu ul li").removeClass("active");

    			$(this).parent(".header-menu ul li").addClass("active");

    		});


    });


}(jQuery));	
