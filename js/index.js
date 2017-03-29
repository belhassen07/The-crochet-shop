$(".discover").click(function() {
    $("html, body").animate({
        scrollTop: ( $(".categories").offset().top -25)
    }, 600);
});

$(".comment").click(function() {
    $("html, body").animate({
        scrollTop: ( $(".steps").offset().top +85)
    }, 800);
});

$(".contacter").click(function() {
    $("html, body").animate({
        scrollTop: ( $("footer").offset().top +500)
    }, 800);
    if($(".ctn").hasClass("animate-border")){
    	$(".ctn").removeClass('animate-border');
    	setInterval(function(){
    		$(".ctn").addClass('animate-border');
    	},1)
    	
    }
    else {
    	$(".ctn").addClass('animate-border');
    }
    
   
});
$(".categories .container .row div").hover(function() {
	$(this).find("h3").css({
		color: "#23DE3D"
	})
}, function() {
	$(this).find("h3").css({
		color: "#000"
	})
});