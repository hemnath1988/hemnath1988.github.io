$(document).ready(function(){
	$("#main").onepage_scroll({
   sectionContainer: "section", 
   easing: "ease",                  

   animationTime: 500,       
   pagination: true,               
   updateURL: false,                
   beforeMove: function(index) {
	    
	 //$(".active").children(".pgbdyall").addClass("fadeintop");
	 
	 $(".active").children(".pgbdyall").toggleClass("pganime");
	 $(".active").find(".introtxt1").toggleClass("txtsleffon1");
	 $(".active").find(".introtxt2").toggleClass("txtsleffon2");
	 $(".active").find(".introquote").toggleClass("txtsleffon3");
	 
	 
	 $(".active.secpage").parent().prev().toggleClass("disnone");
	 
	 
	 	   
   },  
   afterMove: function(index) {
	   //setTimeout(function(){$(".pgbdyall").removeClass("fadeintop");},500)
	   
	   },   
   loop: false,                     
   keyboard: true,                  
   responsiveFallback: false,        
   direction: "vertical"            
});

		
 });