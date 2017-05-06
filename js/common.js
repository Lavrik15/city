$(document).ready(function(){
	if (  /MSIE 10|MSIE 9| MSIE 11/i.test(navigator.userAgent)) {
	  alert("MSIE");
	  console.log("123");
	}
	// popup
	var promoItem = $(".promo-item");
	var popup = $(".popup");
	var backdor = $(".backdor-popup");
	
	promoItem.on("click", popupOpen);

	$(".popup-close").on("click", close);
	$(".btn-link").on("click", close);


	// form 
	// email validation
	var success = {
		"border" : "1px solid #4488bb",
		"color" : "#4488bb"
	}
	var error = {
		"border" : "1px solid #bb4444",
		"color" : "#bb4444"
	}
	var emailInput = $("input[type='email']");
	var emailInputValidate = false;

	emailInput.on("change", function(){
		var $this = $(this);
		var inputVal = $this.val();

		if (validateEmail(inputVal)) {
			emailInput.css(success);
			$this.siblings(".input-label").css({
				"color" : "#4488bb"
			});
			$this.siblings(".form-tooltip").hide();
			emailInputValidate = true;
		} else {
			emailInput.css(error);
			$this.siblings(".input-label").css({
				"color" : "#bb4444"
			});
			$this.siblings(".form-tooltip").show();
		}
	});

	// Name validation
	var nameInput = $("input[name='name']");
	var nameInputValidate = false;

	nameInput.on("change", function(){
		var $this = $(this);
		var inputVal = $this.val();

		if (validateName(inputVal)) {
			nameInput.css(success);
			$this.siblings(".input-label").css({
				"color" : "#4488bb"
			});
			$this.siblings(".form-tooltip").hide();
			nameInputValidate = true;
		} else {
			nameInput.css(error);
			$this.siblings(".input-label").css({
				"color" : "#bb4444"
			});
			$this.siblings(".form-tooltip").show();

		}
	});

	// send form
	var selectCountry = $(".country");
	var agreeCheckbox = $("#agree");
	$(".btn-js").on("click", function(e){
		var $this = $(this);
		var optionReq = $(".country option"), resultOption, resultCheckbox;
		
		for(i = 1; i < optionReq.length; i++) {
		    if(optionReq[i].selected) {
		        resultOption = true;
		        break;
		    }
		}
		if ( (agreeCheckbox).is(':checked') ) {
			resultCheckbox = true;
			console.log('ghbdtn');
		} 
		if( !resultOption || !resultCheckbox || !nameInputValidate || !emailInputValidate) {
			e.preventDefault();
			if (!resultOption) {
				console.log(optionReq);
				$(".country").css(error);
			}
		    if (!resultCheckbox) {
		    	$(".agree-label").css({
		    		"color" : "#bb4444"
		    	});
		    }
		    if (!nameInputValidate) {
		    	nameInput.css(error);
		    }
		    if (!emailInputValidate) {
		    	emailInput.css(error);
		    }
		   	// selectCountry.siblings(".form-tooltip").show();
		}
	});
	selectCountry.on("change", function(){
		$(this).css(success);
	});
	$(".agree-label").on("click", function(){
		$(this).attr("style", "");
	});

	function popupOpen() {
		popup.show();
		backdor.show();
	}
	function close() {
		backdor.hide();
		popup.hide();
	}

	// function validateEmail(email) {
	// 	// check IE11
	// 	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
	// 	  var re = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
	// 	  return re.test(email);
	// 	  console.log("ie");
	// 	} else {
	// 		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 		return re.test(email);
	// 	}
	// }
	// function validateName(name) {
	// 	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
	// 	{
	// 	  var re = "/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u";
	// 	  return re.test(name);
	// 	  console.log("ie");
	// 	} else {
	// 		var re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
	// 		return re.test(name);
	// 	}
	// }

});
