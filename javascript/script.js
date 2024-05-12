// JavaScript Document

$(function(){ 
	
	// ハンバーガーメニュー
	$('#hamburger').on('click',function() {
		if ($('#header').hasClass('open')) {
			$('#header').removeClass('open');
		} else {
			$('#header').addClass('open');
		}
	});
	
	$('#mask').on('click',function() {
		$('#header').removeClass('open');
	});
	
	$('nav a').on('click',function() {
		$('#header').removeClass('open');
	});
	
	// topボタン
	let pagetop = $('#to-top');
	pagetop.hide();

	$(window).scroll(function() {
		if($(this).scrollTop() > 700) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	
	pagetop.click(function() {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});
	
	//fedeIn
	$(".fadeIn").on("inview",function() {
		$(this).addClass("inview");
	});
	
	
});