(function($){
	$.fn.scrollmenu = function(){
		this.click(function(){
			var target = jQuery(this)[0].hash;
			console.log(target);
			if(target != null && target != ''){
				jQuery('html,body').animate({
					scrollTop: jQuery(target).offset().top -80}, 1000);
					return false;
			}
		});
	};

	$.fn.gototop = function(){
		var gototop = this;
		$(window).scroll(function(){
			var bodyheight = $(window).scrollTop();
			if(bodyheight >= 300){
				gototop.css('opacity', '1');
			}else{
				gototop.css('opacity', '0');
			}
		});
		this.click(function(){
			jQuery('html,body').animate({ scrollTop: 0 }, 1000);
			return false;
		});
	};
})(jQuery);
