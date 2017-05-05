$(document).ready(function(){
	var promoItem = $(".promo-item");
	var popup = $(".popup");
	var backdor = $(".backdor-popup");

	
	promoItem.on("click", popupOpen);

	$(".popup-close").on("click", close);
	$(".btn-link").on("click", close);

	function popupOpen() {
		popup.show();
		backdor.show();
	}
	function close() {
		backdor.hide();
		popup.hide();
	}
});


