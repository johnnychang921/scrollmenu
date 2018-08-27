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
})(jQuery);