(function($){

// for ie9 doesn't support debug console >>>
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };
// ^^^

$.fn.vedacitCookieModal = (function() {
		var _self = this;
		
		// Parametros
		_self.params = {
			cookiePolicyUrl : '/?cookie-policy',
			agreementExpiresInDays : 30,
			autoAcceptCookiePolicy : false,
			htmlMarkup : null
		};
	
		// Variaveis usadas nessa funcao 
		_self.vars = {
			INITIALISED : false,
			HTML_MARKUP : null,
			COOKIE_NAME : 'VEDACIT_COOKIE_CONSENT',
			SESSION_STORE_NAME: 'VEDACIT_SESSION_STORE_RECUSED'
		};

        // Armazenar o consentimento em um cookie        
		var setUserAcceptsCookies = function(consent) {
			if(consent){
				var d = new Date();
				var expiresInDays = _self.params.agreementExpiresInDays * 24 * 60 * 60 * 1000;
				d.setTime( d.getTime() + expiresInDays );
				var expires = "expires=" + d.toGMTString();
				document.cookie = _self.vars.COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";
			} else{
				sessionStorage.setItem(_self.vars.SESSION_STORE_NAME, 'true');
			}
	
			$(document).trigger("user_cookie_consent_changed", {'consent' : consent});
		};

        // Vamos ver se já temos um cookie de consentimento		
		var userAlreadyValuedCookies = function() {
			var userAcceptedCookies = false;
			var cookies = document.cookie.split(";");
			for (var i = 0; i < cookies.length; i++) {
				var c = cookies[i].trim();
				if (c.indexOf(_self.vars.COOKIE_NAME) !== -1) {
					userAcceptedCookies = c.substring(_self.vars.COOKIE_NAME.length + 1, c.length);
				}
			}
			return userAcceptedCookies;
		};
		
		// Vamos ver se já temos um cookie de consentimento		
		var userAlreadyValuedSessionStores = function() {
			var userAcceptedSession = sessionStorage.getItem(_self.vars.SESSION_STORE_NAME);
			return userAcceptedSession;
		};

        var hideModalCookie = function() {
			$('.modalcookies').removeClass('d-block');
		}; 
		
		var showModalCookie = function(){
			$('.modalcookies').addClass('d-block');
		}
		
		//Funcao publica
		var publicfunc = {
			
			init : function() {
				//Caso não tenha o cookie devemos exibir a modal
				var userAlreadyValuedCookie = userAlreadyValuedCookies();
				var userAlreadyValuedSessionStore = userAlreadyValuedSessionStores();
				
				if (!userAlreadyValuedCookie && userAlreadyValuedSessionStore == null) {
					$(document).trigger("user_cookie_consent_changed", {'consent' : false});
					showModalCookie();
				}
				
				if (userAlreadyValuedCookie && userAlreadyValuedSessionStore == null) {
					$(document).trigger("user_cookie_consent_changed", {'consent': true});
					hideModalCookie();
					return;
			    }
                
                
                // inicializamos apenas uma vez
				if (_self.vars.INITIALISED) {
					return;
				}
				_self.vars.INITIALISED = true;
				
				//Se clicar no botão aceitar 
				$('.modalcookies .cookies-modal-buttons .accept').click(function() {
					setUserAcceptsCookies(true);
					hideModalCookie();
					return false;
				});
				
				//Se clicar no botão recursar
				$('.modalcookies .cookies-modal-buttons .recuse').click(function() {
					$(document).trigger("user_cookie_consent_changed", {'consent' : false});
					setUserAcceptsCookies(false);
					hideModalCookie();
					return false;
				});
				
		  }
	    }
        return publicfunc;	
	});
	
	//verifica se o componente esta na página e inicializa
	$(document).ready( function() {
		if ($(".modalcookies").length > 0) {
			$(document).vedacitCookieModal().init();
		}
	});
	
}(jQuery));


$('.modalcookies').vedacitCookieModal().init({
  agreementExpiresInDays : 30,
  autoAcceptCookiePolicy : false,
  htmlMarkup : null
});

function addDataUnion(){
	var script = $('<script src="https://www.dataunion.com.br/002624c2-1818-48b1-a266-7f668fb524c1" type="text/javascript" async></script>');
    $("head").append(script);
}

function addreclameaqui(){
	var script = $('<script id="trackRA" src="https://trk.reclameaqui.com.br/assets/trk.min.js?trackIdRA=17663"></script>');
    $("head").append(script);
}

function addLauch(){
	var origin   = window.location.origin;
	var script = $('<script src="//assets.adobedtm.com/90e47f884c65/12359513d06f/launch-26af5501dadd-staging.min.js" async></script>')
	if(origin.includes('vedacit.com.br')){
	 script = $('<script src="//assets.adobedtm.com/90e47f884c65/12359513d06f/launch-92e46f307533.min.js" async></script>');;
	}	
	$("head").append(script);
}

$(document).bind("user_cookie_consent_changed", function(event, object) {
    
   const userConsentGiven = $(object).attr('consent');
   
   if (userConsentGiven ) {
	 addLauch();
     addreclameaqui();
     addDataUnion();
   }
});