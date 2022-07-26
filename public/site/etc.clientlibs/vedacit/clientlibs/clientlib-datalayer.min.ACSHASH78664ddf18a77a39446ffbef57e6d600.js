const normalizeStorage = s => s.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function getSearchDataLayer() {
	var search = JSON.parse(localStorage.getItem('searchResults'));
	localStorage.removeItem("searchResults");
	return search;
}

function getClickDataLayer() {
	var click = JSON.parse(localStorage.getItem('clickDataLayer'));
	return click;
}

function getFormDataLayer() {
	var form = JSON.parse(localStorage.getItem('formDataLayer'));
	localStorage.removeItem("formDataLayer");
	if (form && location.hash == "#thanks") {
		return form;
	}
	return null;
}

function getReferrer() {
	var referrer = JSON.parse(localStorage.getItem('vedacitReferrer'));
	localStorage.setItem('vedacitReferrer', JSON.stringify(window.location.href));
	return referrer;
}

const getAccessibility = () => {
	let accessibilityTools = ['contrast', 'brightness', 'fontsizeCount', 'libras'];
	for (let tool of accessibilityTools) {
		JSON.parse(localStorage.getItem(tool.toString())) || sessionStorage.getItem(tool.toString()) ? typeOfAccess.push(tool.toString()) : '';
	}
	return typeOfAccess.length > 0 ? 'visita-com-acessibilidade' : 'visita-sem-acessibilidade';
}

const getAccessibilityType = () => {
	return typeOfAccess.length > 0 ? typeOfAccess : null;

}

let typeOfAccess = []

var hostname = window.location.hostname

var title = normalizeStorage(document.getElementsByTagName("title")[0].innerHTML);

var type = document.querySelector('meta[name="template"]').content;

var url = window.location.href;

var referrer = document.referrer || getReferrer();

var site = { hostname: hostname, accessibility: getAccessibility(), accessibilityType: getAccessibilityType() };

var page = { name: title, type: type, url: url, referringURL: referrer };

var search = getSearchDataLayer();

var form = getFormDataLayer();

var click = getClickDataLayer();

const getSectionVedablog = () => {
	let getClick = JSON.parse(localStorage.getItem('clickDataLayer'));
	let secitionSelected = getClick ? getClick.target : null;
	page.type === "vedablog-categoria" || page.type === "subcategorias-vedablog" ? 
	localStorage.setItem('sectionView', 1) : localStorage.removeItem('sectionView');
	return page.type === "vedablog-categoria" ?  secitionSelected : null
}

const getArticleVedablog = () => {
	let articlePage = page.type === "artigo-vedablog" ;
	articlePage ? localStorage.setItem('articleView', 1) : localStorage.removeItem('articleView');
	return articlePage ? normalizeStorage(page.name) : null;
}

let vedablog = { section: getSectionVedablog(), sectionView: localStorage.getItem('sectionView'), article: getArticleVedablog(),  articleView: localStorage.getItem('articleView') };

$(document).bind("user_cookie_consent_changed", function(event, object) {
	
	const userConsentGiven = $(object).attr('consent');

  	if (userConsentGiven) {
		dataLayer = {
			site: site,
			page: page,
			search: search,
			form: form,
			click: click,
			vedablog: vedablog,
		};
	}
});