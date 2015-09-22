$(document).ready(function() {
	$('.fancybox').fancybox();

	$('.gallery .fancybox').each(function(){
		var currentItem = $(this).find('img').attr('src');
		$(this).find('img').hide();
		$(this).find('.pseudo_img').css({'background-image': 'url(../' + currentItem + ')' });
	});

	$('.production .fancybox').each(function(){
		var currentItem = $(this).find('img').attr('src');
		$(this).find('img').hide();
		$(this).find('.pseudo_img').css({'background-image': 'url(../' + currentItem + ')' });
	});
});
