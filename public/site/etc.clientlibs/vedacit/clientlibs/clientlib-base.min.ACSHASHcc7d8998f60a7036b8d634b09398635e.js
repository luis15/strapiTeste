$(document).ready(function () {
  if (!$(".search-where-to-buy").length) {
    return;
  }

  var url = $(".search-where-to-buy").data("resource-path") + ".search.json";
  var whereToBuyCardWrapper = $(".where-to-buy-card-wrapper");
  var whereToBuyShowMoreBtnPages = $(".where-to-buy-show-more-btn-pages");
  var whereToBuyShowDetails = $(".search-where-to-buy-show-details");
  var resultNotFoundSearchWhereToBuy = $(
    ".result-not-found-search-where-to-buy"
  );
  var amoutResults = $(".amount-results");

  var pagination = 0;
  var totalStores = 0; //totalStartups = 0;
  var countPagination = 0;
  var getPage = 0;
  var nResults = 6;
  var countTotalStores = 0; //countTotalStartups
  var resultIds = 0;
  var listResults = [];

  function WhereToBuyTemplate(data) {
    var nomeFantasia = data.nomeFantasia;

    if (nomeFantasia == "(vazio)" || data.nomeFantasia == null) {
      nomeFantasia = data.nomeConta;
    }
    $(whereToBuyCardWrapper).append(
      $(`<div class="col-12 col-md-6">

			<div class="result">
				<div class="result-logo">
					<div class="result-logo-img">
						<img src="/content/dam/vedacit/static-files/empresas-revendedoras/aqui-tem-vedacit.png" alt="Aqui tem vedacit">
					</div>
				</div>
				<div class="result-info">
					<span class="estab-name"> ${nomeFantasia}
						<small>(${data.distancia.toFixed(2)}, Km)</small>
						<hr>
						<div class="card-contact">
							<img src="/content/dam/vedacit/static-files/buttons/icons/default/map-pointer.svg" alt="Ponto no mapa">
							<span>
								${data.endereco} 
								${data.numero === "null" ? "" : data.numero}, 
								${data.bairro === "null" ? "" : data.bairro},
								<span class="cep">${data.cep === "null" ? "" : data.cep}</span> 
								${data.cidade}, ${data.estado} 
							</span>
						</div>
					</span>
		
					<div class="card-contact align-items-center 
					${data.email === "null" ? "d-none" : ""}">
						<img src="./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/envelope-black.svg" alt="e-mail para contato">
						<span class="font-weight-bold phone_with_ddd ">${data.email}</span>
					</div>
					<div class="card-contact align-items-center 
					${data.telefone === "null" ? "d-none" : ""}">
						<img src="./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/phone-call-black.svg" alt="telefone para contato">
						<span class="font-weight-bold phone_with_ddd">
						${data.ddd} ${data.telefone}</span>
					</div>
				</div>
			</div>
		</div>`)
    );
  }

  function destroyWhereBuyResults() {
    pagination = 0;
    totalStores = 0;
    countPagination = 0;
    getPage = 0;
    countTotalStores = 0;
    resultIds = 0;
    listResults = [];
    $(whereToBuyCardWrapper).children().remove();

    $(whereToBuyShowMoreBtnPages).removeClass("d-block");
  }

  function showWhereToBuySearch(storeList) {
    storeList.forEach(function (item) {
      item.id = resultIds;
      listResults.push(item);
      WhereToBuyTemplate(item);
      resultIds += 1;
    });
  }

  function initSearch(lat, lng, pagination) {
    var page = pagination;
    var data = {
      lat,
      lng,
      page,
    };

    searchByWhereBuy(data);
  }

  function showMoreBtnWhereBuy() {
    pagination = totalStores / nResults;
    pagination = Math.floor(pagination);

    if (countPagination < pagination) {
      countPagination++;
      getPage = countPagination;
      if (!$(whereToBuyShowMoreBtnPages).hasClass("d-block")) {
        $(whereToBuyShowMoreBtnPages).addClass("d-block");
      }
    } else {
      $(whereToBuyShowMoreBtnPages).removeClass("d-block");
    }
  }

  function showDetailsTotal(name, total) {
    $(whereToBuyShowDetails)
      .find(".search-where-to-buy-numbers")
      .text(countTotalStores);
    $(whereToBuyShowDetails)
      .find(".search-where-to-buy-total-number")
      .text(total);
  }

  function showDetails(data) {
    if (!$(whereToBuyShowDetails).hasClass("d-block")) {
      $(whereToBuyShowDetails).removeClass("d-none");
      $(whereToBuyShowDetails).addClass("d-block");
    }
    showDetailsTotal("", data.total);
  }

  function showNotFoundWhereBuy(total) {
    if (total == 0) {
      $(resultNotFoundSearchWhereToBuy).removeClass("d-none");
      $(amoutResults).addClass("d-none");
    } else {
      if (!$(resultNotFoundSearchWhereToBuy).hasClass("d-none")) {
        $(resultNotFoundSearchWhereToBuy).addClass("d-none");
      }
      $(amoutResults).removeClass("d-none");
    }
  }

  function searchByWhereBuy(data) {
    $.ajax({
      dataType: "json",
      url: url,
      data: data,
      success: function (res) {
        if (res.total > 0) {
          $(".progress-search").addClass("d-none");
          totalStores = res.total;
          showWhereToBuySearch(res.results);
          showMoreBtnWhereBuy(res.total);
          countTotalStores += res.results.length;
          showDetails(res);
        }

        showNotFoundWhereBuy(res.total);
      },
    });
  }

  if ($(".submit-button-wheretobuy")) {
    $(".submit-button-wheretobuy").on("click", function () {
      if (lat == undefined || lng == undefined) {
        return;
      }

      $(".progress-search").removeClass("d-none");

      destroyWhereBuyResults();

      initSearch(lat, lng, 0);
    });
  }

  if ($(".show-more-button")) {
    $(".show-more-button").on("click", function () {
      $(".progress-search").removeClass("d-none");
      initSearch(lat, lng, getPage);
    });
  }
});

$(document).ready(function () {
  if (!$(".search-startups").length) {
    return;
  }

  var url = $(".search-startups").data("path") + ".search.json";
  var pathSelect = $(".path-select-startup");
  var startupCardWrapper = $(".startup-card-wrapper");
  var fullTextInput = $(".full-text-input");
  var showMoreBtnPages = $(".show-more-btn-pages");
  var startupShowDetails = $(".startup-show-details");
  var resultNotFoundstartup = $(".result-not-found-startup");
  var amoutResults = $(".amount-results");
  var modalCity = $("body").find(".modal-city");
  var pagination = 0;
  var totalStartups = 0;
  var countPagination = 0;
  var getPage = 0;
  var nResults = 9;
  var countTotalStartups = 0;
  var resultIds = 0;
  var listResults = [];

  function startupCardTemplate(data) {
    $(startupCardWrapper).append(
      '<a href="' +
        data.ctaLink +
        '" data-id="' +
        data.id +
        '" class="col-12 col-md-4 startup-link-card">' +
        '<div class="startup-card">' +
        '<div class="startup-card-header">' +
        '<img src="' +
        data.imagem +
        '" alt="' +
        data.nome +
        '" class="img-fluid">' +
        "</div>" +
        '<div class="startup-card-body">' +
        '<span class="startup-year">' +
        data.ano +
        "</span>" +
        '<h4 class="startup-title">' +
        data.nome +
        "</h4>" +
        '<div class="startup-description">' +
        data.descricao +
        "</div>" +
        '<div class="startup-link link-cta">' +
        data.ctaText +
        '<img src="' +
        data.ctaIcon +
        '" class="button-img" alt="">' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</a>"
    );
  }

  function getPathSelect() {
    return $(pathSelect).find("option:selected").data("path");
  }

  function getFullText() {
    return $(fullTextInput).val();
  }

  function openModalCity(action) {
    action.removeClass("closed");
  }

  function setDataModalCity(id) {
    var dataModal = listResults.find((item) => {
      return item.id === id;
    });
    $(modalCity).find(".logo img").attr("src", dataModal.imagem);
    $(modalCity).find(".details-title").text(dataModal.nome);
    $(modalCity).find(".details-date .text").text(dataModal.ano);
    $(modalCity).find(".details-about .text").html(dataModal.descricao);
  }

  function setOpenModal() {
    $(".startup-link-card").each(function () {
      $(this).off();
      $(this).on("click", function () {
        openModalCity(modalCity);
        setDataModalCity($(this).data("id"));
      });
    });
    setFocusModal(modalCity);
  }

  const setFocusModal = (modalCity) => {
    $(".menu-close").on("click", (e) => {
      modalCity.find(".modal-awards-body").scrollTop(0);
    });
  };

  function destroystartupSearchResults() {
    pagination = 0;
    totalStartups = 0;
    countPagination = 0;
    getPage = 0;
    countTotalStartups = 0;
    resultIds = 0;
    listResults = [];
    $(startupCardWrapper).children().remove();
    $(showMoreBtnPages).removeClass("d-block");
  }

  function showStartupSearch(startupList) {
    startupList.forEach(function (item) {
      item.id = resultIds;
      listResults.push(item);
      startupCardTemplate(item);
      resultIds += 1;
    });

    if (modalCity.length == 1) {
      setOpenModal();
    }
  }

  function initSearch(pagination) {
    var path = getPathSelect();
    var fulltext = getFullText();
    var offset = pagination;
    var data = {
      path,
      fulltext,
      offset,
    };
    searchBystartups(data);
  }

  if ($(".submit-button-startup")) {
    $(".submit-button-startup").on("click", function () {
      $(".progress-search").removeClass("d-none");
      destroystartupSearchResults();
      initSearch(0);
    });

    $(".form-control").keypress((e) => {
      e.which == 13 ? $(".submit-button-startup").click() : "";
    });
  }

  if ($(".path-select-startup")) {
    $(".path-select-startup").on("change", function () {
      $(".progress-search").removeClass("d-none");
      destroystartupSearchResults();
      initSearch(0);
    });
  }

  if ($(".show-more-button-startup")) {
    $(".show-more-button-startup").on("click", function () {
      $(".progress-search").removeClass("d-none");
      initSearch(getPage);
    });
  }

  if ($(".filter-button-startup")) {
    $(".filter-button-startup").on("click", function () {
      pathSelect = $(".path-select-startup-mobile");
    });
  }

  function showMoreBtn() {
    pagination = totalStartups / nResults;
    pagination = Math.floor(pagination);

    if (countPagination < pagination) {
      countPagination++;
      getPage += nResults;
      if (!$(showMoreBtnPages).hasClass("d-block")) {
        $(showMoreBtnPages).addClass("d-block");
      }
    } else {
      $(showMoreBtnPages).removeClass("d-block");
    }
  }

  function showDetailsTotal(name, total) {
    $(startupShowDetails).find(".startup-numbers").text(countTotalStartups);
    $(startupShowDetails).find(".startup-total-number").text(total);
  }

  function showDetails(data) {
    if (!$(startupShowDetails).hasClass("d-block")) {
      $(startupShowDetails).removeClass("d-none");
      $(startupShowDetails).addClass("d-block");
    }
    showDetailsTotal("", data.total);
  }

  function showNotFound(total) {
    if (total == 0) {
      $(resultNotFoundstartup).removeClass("d-none");
      $(amoutResults).addClass("d-none");
    } else {
      if (!$(resultNotFoundstartup).hasClass("d-none")) {
        $(resultNotFoundstartup).addClass("d-none");
      }
      $(amoutResults).removeClass("d-none");
    }
  }

  function searchBystartups(data) {
    $.ajax({
      dataType: "json",
      url: url,
      data: data,
      success: function (res) {
        if (res.total > 0) {
          totalStartups = res.total;
          showStartupSearch(res.results);
          showMoreBtn(res.total);
          $(".progress-search").addClass("d-none");
          countTotalStartups += res.results.length;
          showDetails(res);
        }

        showNotFound(res.total);
      },
    });
  }

  initSearch(0);
});
$(document).ready(function () {
  if (!$(".result-search").length) {
    return;
  }

  var url = $("#pagePath").val() + ".search.json";

  var rootPathPages = "/content/vedacit/pt-br/para-voce";

  if ($("body").is("#vedacit-pro")) {
    rootPathPages = "/content/vedacit/pt-br/vedacit-pro";
  }

  function buscarTodos(rootPathPages, offset) {
    var fulltext = getParam();
    var lengthallresults = 0;
    var lengthProducts = 0;
    var lengthPages = 0;
    var lengthVedablog = 0;

    if (!fulltext) {
      $(".result-search .lds-ellipsis").hide();
      $(".semresultado").show();
      $(".result-search .resultado").hide();
      return;
    }
    $(".result-search .text-search").text(fulltext);
    $.ajax({
      dataType: "json",
      url: url,
      data: { rootPathPages: rootPathPages, fulltext: fulltext },
      success: function (data) {
        $(".result-search .lds-ellipsis").hide();

        produtos(data.products);

        pages(data.pages);

        vedablog(data.vedablog);

        lengthProducts = data.products.length;

        lengthPages = data.pages.length;

        lengthVedablog = data.vedablog.length;

        lengthallresults = lengthProducts + lengthPages + lengthVedablog;

        if (lengthallresults == 0) {
          $(".result-search .lds-ellipsis").hide();
          $(".semresultado").show();
          $(".result-search .resultado").hide();
        } else {
          $(".semresultado").hide();
          $(".result-search .result-title").show();
          $(".result-search .resultado").show();
        }

        $(".result-search .all-results").text(lengthallresults);

        $(".result-search .nav-item .length-tabitem-1").text(lengthallresults);
        $(".result-search .nav-item .length-tabitem-2").text(lengthPages);
        $(".result-search .nav-item .length-tabitem-3").text(lengthProducts);
        $(".result-search .nav-item .length-tabitem-4").text(lengthVedablog);

        $(".result-search .tab-content .length-tabitem-2").text(lengthPages);
        $(".result-search .tab-content .length-tabitem-3").text(lengthProducts);
        $(".result-search .tab-content .length-tabitem-4").text(lengthVedablog);

        $(".result-search .tab-content .length-tab-pane-2").text(lengthPages);
        $(".result-search .tab-content .length-tab-pane-3").text(
          lengthProducts
        );
        $(".result-search .tab-content .length-tab-pane-4").text(
          lengthVedablog
        );
      },
    });
  }

  $(".result-search #buscainput").keypress(function (e) {
    if (e.which == 13) {
      var value = $("#buscainput").val();
      $("#search-input").val(value);
      $("form.nav-input button").click();
    }
  });

  $(".result-search #buscabutton").click(function () {
    var value = $("#buscainput").val();
    $("#search-input").val(value);
    $("form.nav-input button").click();
  });

  function getParam() {
    var url = window.location.search;
    return $.parseParams(url)["fulltext"];
  }

  $(".result-search").on(
    "click",
    ".show-more-products .show-more .button",
    function () {
      $(".result-search .productResultContainer .card").show();
      $(".result-search .show-more-products .show-more").hide();
    }
  );

  $(".result-search").on(
    "click",
    ".show-more-vedablog .show-more .button",
    function () {
      $(".result-search .vedablogResultContainer .card").show();
      $(".result-search .show-more-vedablog .show-more").hide();
    }
  );

  $(".result-search").on(
    "click",
    ".show-more-pages .show-more .button",
    function () {
      $(".result-search .pageResultContainer .page").show();
      $(".result-search .show-more-pages .show-more").hide();
    }
  );

  function produtos(produtos) {
    var productResultContainer = $(".result-search  .productResultContainer");

    productResultContainer.html("");

    var maxShow = 8;

    $.each(produtos, function (index, produto) {
      var cardCol = $("<div></div>");
      cardCol.addClass("col-12 col-md-4 col-lg-3");

      var card = $("<a></a>");
      card.addClass("card single-line");
      card.attr("href", produto.path);

      var imgContainer = $("<div class='thumb-img'></div>");
      var img = $("<img class='thumb'/>");
      img.attr(
        "src",
        produto.thumb + "/jcr:content/renditions/cq5dam.thumbnail.319.319.png"
      );

      var cardContent = $("<div></div>");
      cardContent.addClass("card-content");

      var cardTitle = $("<h3></h3>");
      cardTitle.addClass("single-card-title");
      cardTitle.text(produto.title);

      var cardDescription = $("<span></span>");
      cardDescription.addClass("single-card-description");

      imgContainer.append(img);
      card.append(imgContainer);

      cardContent.append(cardTitle);
      cardContent.append(cardDescription);

      if (
        produto.oldProducts &&
        produto.oldProducts.length &&
        !produto.newPackage
      ) {
        var cardOldName = $("<div></div>");

        if (window.innerWidth > 768) {
          var oldTitlesName = getOldTitles(produto.oldProducts, false);
          cardOldName.addClass("old-name");
          cardOldName.text(oldTitlesName);
        }

        var imgOldName = $("<img class='thumb-information'/>");
        imgOldName.attr(
          "src",
          "./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/information.png"
        );
        cardOldName.append(imgOldName);

        var cardOldNameTooltip = $("<div></div>");
        cardOldNameTooltip.addClass("old-name-tooltip");

        var cardTooltipTitle = $("<p></p>");
        cardTooltipTitle.addClass("mb-4");
        var cardTooltipOldTitle = $("<p></p>");
        cardTooltipOldTitle.addClass(
          "mt-4 mb-0 font-weight-bold text-uppercase"
        );

        var prefix =
          produto.oldProducts.length > 1 ? "Os produtos" : "O produto";

        var oldTitlesTooltip = getOldTitles(produto.oldProducts, true);

        cardTooltipTitle.text(
          prefix + " " + oldTitlesTooltip + " " + "mudou de nome para:"
        );
        cardTooltipOldTitle.text(produto.title);

        cardOldNameTooltip.append(cardTooltipTitle);
        cardOldNameTooltip.append(cardTooltipOldTitle);

        cardOldName.append(cardOldNameTooltip);

        cardContent.append(cardOldName);
        card.append('<p class="new-flag">Novo!</p>');
      }

      card.append(cardContent);
      cardCol.append(card);

      if (index >= maxShow) {
        card.hide();
        $(".result-search .show-more-products .show-more").show();
      }

      productResultContainer.append(cardCol);
    });
  }

  function getOldTitles(oldProducts, isTooltip) {
    var oldTitles = "";
    var initialSeparator = oldProducts.length > 1 ? " " : "";
    oldProducts.forEach(function (oldProduct, index) {
      if (index === 0) {
        oldTitles += initialSeparator + oldProduct.oldTitle;
      } else if (index === oldProducts.length - 1) {
        oldTitles += " e " + oldProduct.oldTitle;
      } else {
        oldTitles += ", " + oldProduct.oldTitle;
      }
    });
    if (isTooltip) return oldTitles;
    return oldTitles.length > 30 ? oldTitles.substr(0, 30) + "..." : oldTitles;
  }

  function pages(pages) {
    var pageResultContainer = $(".result-search  .pageResultContainer");
    pageResultContainer.html("");
    var maxShow = 8;

    $.each(pages, function (index, page) {
      var cardCol = $("<div></div>");
      cardCol.addClass("col-12 col-md-6");

      var card = $("<a></a>");
      card.addClass("page inline-page");
      card.attr("href", page.path);

      //var imgContainer = $("<div class='thumb-img'></div>");
      //var img = $("<img class='thumb'/>");
      //img.attr("src",page.thumb+'/jcr:content/renditions/cq5dam.thumbnail.319.319.png');

      var cardContent = $("<div></div>");
      cardContent.addClass("inline-page-content");

      var cardTitle = $("<h3></h3>");
      cardTitle.addClass("inline-page-title");
      cardTitle.text(page.title);

      var cardDescription = $("<span></span>");
      cardDescription.addClass("inline-page-description");
      cardDescription.text(page.description);

      //imgContainer.append(img);
      //card.append(imgContainer);

      cardContent.append(cardTitle);
      cardContent.append(cardDescription);

      card.append(cardContent);
      cardCol.append(card);

      if (index >= maxShow) {
        card.hide();
        $(".result-search .show-more-pages .show-more").show();
      }

      pageResultContainer.append(cardCol);
    });
  }

  function vedablog(pages) {
    var vedablogResultContainer = $(".result-search  .vedablogResultContainer");
    vedablogResultContainer.html("");
    var maxShow = 8;

    $.each(pages, function (index, page) {
      var cardCol = $("<div></div>");
      cardCol.addClass("col-12 col-md-6");

      var card = $("<a></a>");
      card.addClass("page inline-page");
      card.attr("href", page.path);

      //var imgContainer = $("<div class='thumb-img'></div>");
      //var img = $("<img class='thumb'/>");
      //img.attr("src",page.thumb+'/jcr:content/renditions/cq5dam.thumbnail.319.319.png');

      var cardContent = $("<div></div>");
      cardContent.addClass("inline-page-content");

      var cardTitle = $("<h3></h3>");
      cardTitle.addClass("inline-page-title");
      cardTitle.text(page.title);

      var cardDescription = $("<span></span>");
      cardDescription.addClass("inline-page-description");
      cardDescription.text(page.description);

      //imgContainer.append(img);
      //card.append(imgContainer);

      cardContent.append(cardTitle);
      cardContent.append(cardDescription);

      card.append(cardContent);
      cardCol.append(card);

      if (index >= maxShow) {
        card.hide();
        $(".result-search .show-more-vedablog .show-more").show();
      }

      vedablogResultContainer.append(cardCol);
    });
  }

  buscarTodos(rootPathPages, 0);
});

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};
(function ($) {
  var re = /([^&=]+)=?([^&]*)/g;
  var decode = function (str) {
    return decodeURIComponent(str.replace(/\+/g, " "));
  };
  $.parseParams = function (query) {
    var params = {},
      e;
    if (query) {
      if (query.substr(0, 1) == "?") {
        query = query.substr(1);
      }

      while ((e = re.exec(query))) {
        var k = decode(e[1]);
        var v = decode(e[2]);
        if (params[k] !== undefined) {
          if (!$.isArray(params[k])) {
            params[k] = [params[k]];
          }
          params[k].push(v);
        } else {
          params[k] = v;
        }
      }
    }
    return params;
  };
})(jQuery);
$(document).ready(function () {
  if (!$(".search-prizes").length) {
    return;
  }
  var url = $(".search-prizes").data("path") + ".search.json";
  var entityPathSelect = $(".entity-path-select");
  var prizeCardWrapper = $(".prizer-card-wrapper");
  var pathSelect = $(".path-select");
  var fullTextInput = $(".full-text-input");
  var showMoreBtnPages = $(".show-more-btn-pages");
  var prizeShowDetails = $(".prize-show-details");
  var resultNotFoundPrize = $(".result-not-found-prize");
  var amoutResults = $(".amount-results");
  var modalAwards = $(".awards");
  var pagination = 0;
  var totalPrize = 0;
  var countPagination = 0;
  var getPage = 0;
  var nResults = 9;
  var countTotalPrizes = 0;
  var resultIds = 0;
  var listResults = [];

  function modalProductListTemplate(element, data) {
    $(element).append(
      '<div class="details-product">' +
        '<div class="details-product-text">' +
        '<div class="title">Produto:</div>' +
        '<div class="text">' +
        data.nome +
        "</div>" +
        "</div>" +
        '<a class="link-text" href="' +
        data.pagina +
        '" target="_self">' +
        "Veja o produto" +
        '<img src="/content/dam/vedacit/static-files/buttons/icons/default/plus.svg" alt="">' +
        "</a>" +
        "</div>"
    );
  }

  function modalCategorytListTemplate(element, data) {
    $(element).append(
      '<div class="details-category">' +
        '<div class="title">Categoria:</div>' +
        '<div class="text">' +
        data +
        "</div>" +
        "</div>"
    );
  }

  function prizeCardTemplate(data) {
    var thisCategories = "";
    if (data.categorias.length > 0) {
      data.categorias.forEach(function (item, index) {
        if (index == 0) {
          thisCategories += "<p><b>Categoria:</b> " + item + "</p>";
        }
      });
    } else {
      thisCategories = "";
    }

    $(prizeCardWrapper).append(
      '<div class="col-12 col-md-4">' +
        '<a class="prize-card" data-id="' +
        data.id +
        '">' +
        '<div class="prize-card-header">' +
        '<img src="' +
        data.prizeEntity.imagem +
        '" alt="">' +
        "</div>" +
        '<div class="prize-card-body">' +
        '<span class="prize-year">' +
        data.ano +
        "</span>" +
        '<h4 class="prize-title">' +
        data.titulo +
        '<div class="prize-description">' +
        thisCategories +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>"
    );
  }

  function getEntityPath() {
    return $(entityPathSelect).find("option:selected").data("entitypath");
  }

  function getEntityValue() {
    return $(entityPathSelect).val();
  }

  function getPathSelect() {
    return $(pathSelect).find("option:selected").data("path");
  }

  function getFullText() {
    return $(fullTextInput).val();
  }

  function openModalAward(action) {
    $("body").find(action).toggleClass("closed");
    $(action).find(".details-products").children().remove();
    $(action).find(".details-categories").children().remove();
  }

  function setDataModal(id) {
    var dataModal = listResults.find((item) => {
      return item.id === id;
    });

    $(modalAwards)
      .find(".logo-store img")
      .attr("src", dataModal.prizeEntity.imagem);
    $(modalAwards).find(".details-title").text(dataModal.titulo);
    $(modalAwards).find(".details-date .text").text(dataModal.ano);

    dataModal.produtos.forEach(function (item) {
      modalProductListTemplate($(modalAwards).find(".details-products"), item);
    });

    dataModal.categorias.forEach(function (item) {
      modalCategorytListTemplate(
        $(modalAwards).find(".details-categories"),
        item
      );
    });

    $(modalAwards)
      .find(".details-about .title-full")
      .text("Sobre " + dataModal.prizeEntity.nome);
    $(modalAwards)
      .find(".details-about .text")
      .html(dataModal.prizeEntity.descricao);
  }

  function setOpenModal() {
    $(".prize-card").each(function () {
      $(this).off();
      $(this).on("click", function () {
        openModalAward(".awards");
        setDataModal($(this).data("id"));
      });
    });
  }

  function destroyPrizeSearchResults() {
    pagination = 0;
    totalPrize = 0;
    countPagination = 0;
    getPage = 0;
    countTotalPrizes = 0;
    resultIds = 0;
    listResults = [];

    $(prizeCardWrapper).children().remove();
    $(showMoreBtnPages).removeClass("d-block");
  }

  function showPrizeSearch(prizeList) {
    prizeList.forEach(function (item) {
      item.id = resultIds;
      listResults.push(item);
      prizeCardTemplate(item);
      resultIds += 1;
    });
    setOpenModal();
  }

  function initSearch(pagination) {
    var entitypath = getEntityPath();
    var path = getPathSelect();
    var fulltext = getFullText();
    var offset = pagination;
    var data = {
      entitypath,
      path,
      fulltext,
      offset,
    };
    searchByPrizes(data);
  }

  if ($(".submit-button-prize")) {
    $(".submit-button-prize").on("click", function () {
      $(".progress-search").removeClass("d-none");
      destroyPrizeSearchResults();
      initSearch(0);
    });
  }

  if ($(entityPathSelect)) {
    $(entityPathSelect).on("change", function () {
      $(".progress-search").removeClass("d-none");
      destroyPrizeSearchResults();
      initSearch(0);
    });
  }

  if ($(".entity-path-select-mobile")) {
    $(".entity-path-select-mobile").on("change", function () {
      $(".progress-search").removeClass("d-none");
      destroyPrizeSearchResults();
      initSearch(0);
    });
  }

  if ($(pathSelect)) {
    $(pathSelect).on("change", function () {
      $(".progress-search").removeClass("d-none");
      destroyPrizeSearchResults();
      initSearch(0);
    });
  }

  if ($(".path-select-mobile")) {
    $(".path-select-mobile").on("change", function () {
      $(".progress-search").removeClass("d-none");
      destroyPrizeSearchResults();
      initSearch(0);
    });
  }

  if ($(".show-more-button")) {
    $(".show-more-button").on("click", function () {
      $(".progress-search").removeClass("d-none");
      initSearch(getPage);
    });
  }

  if ($(".filter-button")) {
    $(".filter-button").on("click", function () {
      entityPathSelect = $(".entity-path-select-mobile");
      pathSelect = $(".path-select-mobile");
    });
  }

  function showMoreBtn() {
    pagination = totalPrize / nResults;
    pagination = Math.floor(pagination);

    if (countPagination < pagination) {
      countPagination++;
      getPage += nResults;
      if (!$(showMoreBtnPages).hasClass("d-block")) {
        $(showMoreBtnPages).addClass("d-block");
      }
    } else {
      $(showMoreBtnPages).removeClass("d-block");
    }
  }

  function showDetailsTotal(name, total) {
    $(prizeShowDetails).find(".prize-numbers").text(countTotalPrizes);
    $(prizeShowDetails).find(".prize-total-number").text(total);
    $(prizeShowDetails).find(".prize-entity").text(name);
  }

  function showDetails(data) {
    if (!$(prizeShowDetails).hasClass("d-block")) {
      $(prizeShowDetails).removeClass("d-none");
      $(prizeShowDetails).addClass("d-block");
    }

    if (getEntityValue() == "Todas as entidades") {
      showDetailsTotal("", data.total);
    } else {
      showDetailsTotal(data.results[0].prizeEntity.nome, data.total);
    }
  }

  function showNotFound(total) {
    if (total == 0) {
      $(resultNotFoundPrize).removeClass("d-none");
      $(amoutResults).addClass("d-none");
    } else {
      if (!$(resultNotFoundPrize).hasClass("d-none")) {
        $(resultNotFoundPrize).addClass("d-none");
      }
      $(amoutResults).removeClass("d-none");
    }
  }

  function searchByPrizes(data) {
    $.ajax({
      dataType: "json",
      url: url,
      data: data,
      success: function (res) {
        if (res.total > 0) {
          totalPrize = res.total;
          showPrizeSearch(res.results);
          showMoreBtn(res.total);
          $(".progress-search").addClass("d-none");
          countTotalPrizes += res.results.length;
          showDetails(res);
        }

        showNotFound(res.total);
      },
    });
  }

  initSearch(0);
});
$(document).ready(function () {
  if (!$(".search-glossary").length) {
    return;
  }
  var url = $(".search-glossary").data("path") + ".search.json";
  var termoHtmlTemplate =
    '<div class="col-12 col-lg-6 item-result"><h3><b>{{TERMO}}</b></h3>{{DESCRICAO}}</div>';
  var letraHtmlTemplate =
    '<div class="col-12" id="{{ID}}"><h4 class="letter-title">{{LETRA}}</h4></div>';
  var numberOfItemPerRequest = 6;

  function searchByPath(path) {
    $.ajax({
      dataType: "json",
      url: url,
      data: { path: path },
      success: function (data) {
        $(".searchglossary  .progress-search").hide();
        $(data.results).each(function (i, item) {
          var html = termoHtmlTemplate + "";
          html = html.replace("{{TERMO}}", item.termo);
          html = html.replace("{{DESCRICAO}}", item.descricao);
          $(".searchglossary  .result-found .result-items").append($(html));
        });
        if (data.total > numberOfItemPerRequest) {
          $(".searchglossary .glossary-show-more").show();
        }
      },
    });
  }

  function searchByPathAndTerm(path, fulltext) {
    $.ajax({
      dataType: "json",
      url: url,
      data: { path: path, fulltext: fulltext },
      success: function (data) {
        $(".searchglossary  .progress-search").hide();
        if (data.total > 0) {
          $(".searchglossary .result-found .result-term").show();
          $(".searchglossary .result-found .result-term .result-number").html(
            data.total
          );
          $(".searchglossary .result-found .result-term .term").html(fulltext);

          $(data.results).each(function (i, item) {
            var html = termoHtmlTemplate + "";
            html = html.replace("{{TERMO}}", item.termo);
            html = html.replace("{{DESCRICAO}}", item.descricao);
            var id = "termo-" + item.letra;
            if ($(".result-found #" + id).length < 1) {
              var letra = letraHtmlTemplate + "";
              letra = letra.replace("{{ID}}", id);
              letra = letra.replace("{{LETRA}}", item.letra);
              $(".searchglossary  .result-found .result-items").append(
                $(letra)
              );
            }
            $(".searchglossary  .result-found .result-items").append($(html));
          });
          if (data.total > numberOfItemPerRequest) {
            $(".searchglossary .glossary-show-more").show();
          }
        } else {
          $(".searchglossary .result-not-found").show();
          $(".searchglossary .result-not-found .termo").html(fulltext);
        }
      },
    });
  }

  function searchByPathAndTermLoadMore(path, fulltext, offset) {
    $.ajax({
      dataType: "json",
      url: url,
      data: { path: path, fulltext: fulltext, offset },
      success: function (data) {
        $(".searchglossary  .progress-search").hide();
        $(data.results).each(function (i, item) {
          var html = termoHtmlTemplate + "";
          html = html.replace("{{TERMO}}", item.termo);
          html = html.replace("{{DESCRICAO}}", item.descricao);
          if (fulltext) {
            var id = "termo-" + item.letra;
            if ($(".result-found #" + id).length < 1) {
              var letra = letraHtmlTemplate + "";
              letra = letra.replace("{{ID}}", id);
              letra = letra.replace("{{LETRA}}", item.letra);
              $(".searchglossary  .result-found .result-items").append(
                $(letra)
              );
            }
          }
          $(".searchglossary  .result-found .result-items").append($(html));
        });

        if (data.total > offset + data.results.length) {
          $(".searchglossary .glossary-show-more").show();
        } else {
          $(".searchglossary .glossary-show-more").hide();
        }
      },
    });
  }

  $(".searchglossary .base-letter-glossary .link-glossary").click(function (
    event
  ) {
    event.preventDefault();
    clean();
    $("#glossary-search-input").val("");
    $(
      ".searchglossary .base-letter-glossary .link-glossary.active"
    ).removeClass("active");
    $(this).addClass("active");

    var linkActive = $(".link-glossary.active");
    searchByPath(linkActive.data("path"));
  });

  function clean() {
    $(".searchglossary  .result-found .result-items").html("");
    $(".searchglossary  .progress-search").show();
    $(".searchglossary .result-found .result-term").hide();
    $(".searchglossary .result-not-found").hide();
    $(".searchglossary .glossary-show-more").hide();
  }

  $(".link-glossary.active").click();

  $("form.search-input-glossary").submit(function (event) {
    event.preventDefault();
    var fulltext = $("#glossary-search-input").val();
    if (fulltext.length < 1) {
      return;
    }

    clean();
    $(
      ".searchglossary .base-letter-glossary .link-glossary.active"
    ).removeClass("active");
    var linkActive = $(this);
    searchByPathAndTerm(linkActive.data("search-path"), fulltext);
  });

  $(".searchglossary .js-show-more-glossary").click(function () {
    var offset = $(
      ".searchglossary .result-found .result-items .item-result"
    ).length;
    var path;
    var fulltext;

    if ($(".link-glossary.active").length) {
      path = $(".link-glossary.active").data("path");
    } else {
      path = $("form.search-input-glossary").data("search-path");
      fulltext = $("#glossary-search-input").val();
    }

    searchByPathAndTermLoadMore(path, fulltext, offset);
  });
});
$(document).ready(function () {
  if (!$(".search-discard").length) {
    return;
  }
  getDataIbge();

  var url = $(".search-discard").data("path") + ".search.json";
  var selectState = $(".select-state");
  var selectCity = $(".select-city");
  var selectEcoType = $(".select-eco-type");
  var discardCardWrapper = $(".amount-results .discard-card-wrapper");
  var showMoreBtnPages = $(".show-more-btn-pages");
  var discardShowDetails = $(".discard-show-details");
  var resultNotFoundSearchDiscard = $(".result-not-found-discard");
  var amoutResults = $(".amount-results");
  //numeros
  var pagination = 0;
  var totalDiscards = 0;
  var countPagination = 0;
  var getPage = 0;
  var nResults = 9;
  var countTotalDiscards = 0;
  var resultIds = 0;
  var listResults = [];

  function getSelectPath() {
    return selectState.find("option:selected").data("path-state");
  }

  function getSelectCity() {
    return selectCity.find("option:selected").val();
  }

  function getSelectEcoType() {
    return selectEcoType.find("option:selected").val();
  }

  if ($(".submit-search-discards")) {
    $(".submit-search-discards").on("click", function () {
      $(".progress-search").removeClass("d-none");
      destroyDiscardSearchResults();
      initSearch(0);
    });
  }

  if ($(".show-more-button")) {
    $(".show-more-button").on("click", function () {
      $(".progress-search").removeClass("d-none");
      initSearch(getPage);
    });
  }

  function showMoreBtn() {
    pagination = totalDiscards / nResults;
    pagination = Math.floor(pagination);

    if (countPagination < pagination) {
      countPagination++;
      getPage += nResults;
      if (!$(showMoreBtnPages).hasClass("d-block")) {
        $(showMoreBtnPages).addClass("d-block");
      }
    } else {
      $(showMoreBtnPages).removeClass("d-block");
    }
  }

  function showDetailsTotal(total) {
    $(discardShowDetails).find(".discard-numbers").text(countTotalDiscards);
    $(discardShowDetails).find(".discard-total-number").text(total);
  }

  function showDetails(data) {
    if (!$(discardShowDetails).hasClass("d-block")) {
      $(discardShowDetails).removeClass("d-none");
      $(discardShowDetails).addClass("d-block");
    }
    showDetailsTotal(data.total);
  }

  function capitalizeCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function discardCardTemplate(data) {
    var classeDDD = data.ddd === null || data.ddd === 0 ? "d-none" : "";
    var classeContato = data.horario.length === 0 ? "" : "d-none";
    var classeHorario = data.horario.length === 0 ? "d-none" : "";

    $(discardCardWrapper).append(
      '<div class="col-12 col-lg-4 results-discards">' +
        '<p class="title-results-discards">' +
        data.nomeConta.toUpperCase() +
        "</p>" +
        '<div class="results-discards__items">' +
        '<div class="results-discards__item">' +
        '<img src="./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/phone-call-black.svg"/>' +
        '<p class="results-discards__item results-discards__item--phone"><span class="' +
        classeDDD +
        '">(' +
        data.ddd +
        ")</span> " +
        "  " +
        data.telefone +
        "</p>" +
        "</div>" +
        '<div class="results-discards__item">' +
        '<img src="/content/dam/vedacit/static-files/buttons/icons/default/map-pointer.svg"/>' +
        data.endereco +
        ", " +
        data.numero +
        "<br>" +
        capitalizeCase(data.bairro) +
        " - " +
        data.cidade +
        "/" +
        data.estado +
        "<br>" +
        data.cep +
        '<p class="results-discards__item results-discards__item--address">' +
        "" +
        "" +
        "</p>" +
        "</div>" +
        '<div class="results-discards__item">' +
        '<img src="/content/dam/vedacit/static-files/buttons/icons/default/icone-horario.svg"/>' +
        '<p class="results-discards__item results-discards__item--attendance ' +
        classeContato +
        '">Entre em contato com o ponto para orientações sobre o horário de funcionamento</p>' +
        '<p class="results-discards__item results-discards__item--attendance ' +
        classeHorario +
        '"> Aberto das ' +
        data.horario +
        "<br> de " +
        data.diasAbertos +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
  }

  function destroyDiscardSearchResults() {
    pagination = 0;
    totalDiscards = 0;
    countPagination = 0;
    getPage = 0;
    countTotalDiscards = 0;
    resultIds = 0;
    listResults = [];
    $(discardShowDetails).removeClass("d-block");
    $(discardCardWrapper).children().remove();
    $(showMoreBtnPages).removeClass("d-block");
  }

  function showDiscardSearch(discardList) {
    discardList.forEach(function (item) {
      item.id = resultIds;
      listResults.push(item);
      discardCardTemplate(item);
      resultIds += 1;
    });
  }

  function initSearch(pagination) {
    var path = getSelectPath();
    var city = getSelectCity();
    var type = getSelectEcoType();
    var offset = pagination;

    var data = {
      path,
      city,
      type,
      offset,
    };

    searchByDiscards(data);
  }

  function showNotFoundDiscard(total) {
    if (total == 0) {
      $(resultNotFoundSearchDiscard).removeClass("d-none");
      $(amoutResults).addClass("d-none");
    } else {
      if (!$(resultNotFoundSearchDiscard).hasClass("d-none")) {
        $(resultNotFoundSearchDiscard).addClass("d-none");
      }
      $(amoutResults).removeClass("d-none");
    }
  }

  function searchByDiscards(data) {
    $.ajax({
      dataType: "json",
      url: url,
      data: data,
      success: function (res) {
        if (res.total > 0) {
          totalDiscards = res.total;
          showDiscardSearch(res.results);
          showMoreBtn(res.total);
          $(".progress-search").addClass("d-none");
          countTotalDiscards += res.results.length;
          showDetails(res);
        }

        showNotFoundDiscard(res.total);
      },
    });
  }

  function compareState(a, b) {
    const stateA = a.sigla.toUpperCase();
    const stateB = b.sigla.toUpperCase();

    let comparison = 0;

    if (stateA > stateB) {
      comparison = 1;
    } else if (stateA < stateB) {
      comparison = -1;
    }
    return comparison;
  }

  function clearDataIbge() {
    $(selectState).change(() => {
      $(".select-city__option").detach();
    });
  }

  function getDataIbge() {
    let pathStateAll = $(".select-state").data("path-state-all");

    let listCities = [];

    $.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
      (results) => {
        results.sort(compareState);
        results.forEach(function (item) {
          $(".select-state").append(
            `<option class="select-city__state" data-path-state=${pathStateAll}/${item.sigla.toLowerCase()} value=${
              item.id
            }>${item.nome}</option>`
          );
        });
      }
    );

    $(".select-state").change(function () {
      const estado_id = parseInt($(".select-state option:selected").val());
      $.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/municipios`,
        (data) => {
          data.forEach(function (item) {
            listCities.push(item.nome);
            clearDataIbge();
            $(".select-city").append(
              `<option class="select-city__option" value="${item.nome}">${item.nome}</option>`
            );
          });
        }
      );
    });
  }
});
$(document).ready(function () {
  if (!$(".searchconsult").length) {
    return;
  }

  var url =
    $(".searchconsult .search-where-to-buy").data("resource-path") +
    ".consult-search.json";
  var consultCardWrapper = $(".where-to-buy-card-wrapper");
  var consultShowMoreBtnPages = $(".where-to-buy-show-more-btn-pages");
  var consultShowDetails = $(".search-where-to-buy-show-details");
  var resultNotFoundSearchConsult = $(".result-not-found-search-where-to-buy");
  var amoutResults = $(".amount-results");

  var pagination = 0;
  var totalStores = 0; // totalStartups = 0;
  var countPagination = 0;
  var getPage = 0;
  var nResults = 6;
  var countTotalStores = 0; // countTotalStartups
  var resultIds = 0;
  var listResults = [];

  function ConsultTemplate(data) {
    var nome = data.nome;
    $(consultCardWrapper).append(
      $(`<div class="col-12 col-md-4">

			<div class="result">
				<div class="result-info">
					<span class="estab-name"> ${nome}
					</span>
		
					<div class="card-contact align-items-center 
					${data.email === "null" ? "d-none" : ""}">
						<img src="./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/envelope-black.svg" alt="e-mail para contato">
						<span class="phone_with_ddd ">${data.email}</span>
					</div>
					<div class="card-contact align-items-center 
					${data.telefone === "null" ? "d-none" : ""}">
						<img src="./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/phone-call-black.svg" alt="telefone para contato">
						<span class="phone_with_ddd ${data.email === "null" ? "d-none" : ""}"">
						${data.telefone}</span>
					</div>
					<hr>
				</div>
			</div>
		</div>`)
    );
  }

  function destroyWhereBuyResults() {
    pagination = 0;
    totalStores = 0;
    countPagination = 0;
    getPage = 0;
    countTotalStores = 0;
    resultIds = 0;
    listResults = [];
    $(consultCardWrapper).children().remove();

    $(consultShowMoreBtnPages).removeClass("d-block");
  }

  function showConsultSearch(storeList) {
    storeList.forEach(function (item) {
      item.id = resultIds;
      listResults.push(item);
      ConsultTemplate(item);
      resultIds += 1;
    });
  }

  function initSearch(estado) {
    var data = {
      estado,
    };

    searchConsult(data);
  }

  function showMoreBtnWhereBuy() {
    pagination = totalStores / nResults;
    pagination = Math.floor(pagination);

    if (countPagination < pagination) {
      countPagination++;
      getPage = countPagination;
      if (!$(consultShowMoreBtnPages).hasClass("d-block")) {
        $(consultShowMoreBtnPages).addClass("d-block");
      }
    } else {
      $(consultShowMoreBtnPages).removeClass("d-block");
    }
  }

  function showDetailsTotal(name, total) {
    $(consultShowDetails)
      .find(".search-where-to-buy-numbers")
      .text(countTotalStores);
    $(consultShowDetails)
      .find(".search-where-to-buy-total-number")
      .text("")
      .text($("#searchconsult-input").val());
  }

  function showDetails(data) {
    if (!$(consultShowDetails).hasClass("d-block")) {
      $(consultShowDetails).removeClass("d-none");
      $(consultShowDetails).addClass("d-block");
    }
    showDetailsTotal("", data.total);
  }

  function showNotFoundWhereBuy(total) {
    if (total == 0) {
      $(resultNotFoundSearchConsult).removeClass("d-none");
      $(amoutResults).addClass("d-none");

      $(resultNotFoundSearchConsult)
        .find(".term")
        .text("")
        .text($("#searchconsult-input").val());
    } else {
      if (!$(resultNotFoundSearchConsult).hasClass("d-none")) {
        $(resultNotFoundSearchConsult).addClass("d-none");
      }
      $(amoutResults).removeClass("d-none");
    }
  }

  function searchConsult(data) {
    $.ajax({
      dataType: "json",
      url: url,
      data: data,
      success: function (res) {
        if (res.total > 0) {
          $(".progress-search").addClass("d-none");
          totalStores = res.total;
          showConsultSearch(res.results);
          showMoreBtnWhereBuy(res.total);
          countTotalStores += res.results.length;
          showDetails(res);
        }

        showNotFoundWhereBuy(res.total);
      },
    });
  }

  if ($(".submit-button-wheretobuy")) {
    $(".submit-button-wheretobuy").on("click", function () {
      if (lat == undefined || lng == undefined) {
        return;
      }

      $(".progress-search").removeClass("d-none");

      destroyWhereBuyResults();

      initSearch(sigla);
    });
  }

  if ($(".show-more-button")) {
    $(".show-more-button").on("click", function () {
      $(".progress-search").removeClass("d-none");
      initSearch(lat, lng, getPage);
    });
  }
});

$(document).ready(function () {
  if (!$(".resultsbuildingworks__amount-results").length) {
    return;
  }

  var url =
    $(".resultsbuildingworks__amount-results").data("path") + ".search.json";
  var path = "/content/dam/vedacit/mercado-tecnico/contents-fragments/obras";
  var buildingWorksWrapper = $(".building-works-card-wrapper");
  var showMoreBtnPages = $(".resultsbuildingworks__show-more-btn-pages");
  var buildingWorksShowDetails = $(".building-works-show-details");
  var resultNotBuildingWorks = $(".resultsbuildingworks__not-found");
  var amoutResults = $(".resultsbuildingworks__amount-results");
  var modalBuilding = $(".building");
  var pagination = 0;
  var totalBuildingWorks = 0;
  var countPagination = 0;
  var getPage = 0;
  var nResults = 9;
  var countTotalBuildingWorks = 0;
  var resultIds = 0;
  var listResults = [];

  function modalProductListTemplate(element, data) {
    $(element).append(
      '<div class="details-product">' +
        '<div class="details-product-text">' +
        '<div class="title">Produto:</div>' +
        '<div class="text">' +
        data.nome +
        "</div>" +
        "</div>" +
        '<a class="link-text" href="' +
        data.pagina +
        '" target="_self">' +
        "Veja o produto" +
        '<img src="/content/dam/vedacit/static-files/buttons/icons/default/plus.svg" alt="">' +
        "</a>" +
        "</div>"
    );
  }

  function setDataModal(id) {
    var dataModal = listResults.find((item) => {
      return item.id === id;
    });

    $(modalBuilding)
      .find(".modal-building-body__img")
      .attr("src", dataModal.image);
    $(modalBuilding).find(".details-title").text(dataModal.title);
    $(modalBuilding).find(".details-date .text").text(dataModal.endDate);
    $(modalBuilding).find(".details-locality .text").text(dataModal.locality);
    $(modalBuilding).find(".details-about .text").html(dataModal.description);

    dataModal.produtos.forEach(function (item) {
      modalProductListTemplate(
        $(modalBuilding).find(".details-products"),
        item
      );
    });
  }

  function openModalBuilding(action) {
    $("body").find(action).toggleClass("closed");
    $(action).find(".details-products").children().remove();
    $(action).find(".details-categories").children().remove();
  }

  function setOpenModal() {
    $(".card-wrapper__card").each(function () {
      $(this).off();
      $(this).on("click", function () {
        openModalBuilding(".building");
        setDataModal($(this).data("id"));
      });
    });
  }

  function showNotFound(total) {
    if (total == 0) {
      $(resultNotBuildingWorks).removeClass("d-none");
      $(amoutResults).addClass("d-none");
    } else {
      if (!$(resultNotBuildingWorks).hasClass("d-none")) {
        $(resultNotBuildingWorks).addClass("d-none");
      }
      $(amoutResults).removeClass("d-none");
    }
  }

  function showDetailsTotal(name, total) {
    $(buildingWorksShowDetails)
      .find(".show-details__numbers")
      .text(countTotalBuildingWorks);
    $(buildingWorksShowDetails).find(".show-details__total-number").text(total);
  }

  function showDetails(data) {
    if (!$(buildingWorksShowDetails).hasClass("d-block")) {
      $(buildingWorksShowDetails).removeClass("d-none");
      $(buildingWorksShowDetails).addClass("d-block");
    }
    showDetailsTotal("", data.total);
  }

  function showMoreBtn() {
    pagination = totalBuildingWorks / nResults;
    pagination = Math.floor(pagination);

    if (countPagination < pagination) {
      countPagination++;
      getPage += nResults;
      if (!$(showMoreBtnPages).hasClass("d-block")) {
        $(showMoreBtnPages).addClass("d-block");
      }
    } else {
      $(showMoreBtnPages).removeClass("d-block");
    }
  }

  function buildingWorksCardTemplate(data) {
    buildingWorksWrapper.append(
      $(`<div class="col-12 col-md-4">
			<a class="card-wrapper__card" data-id="${data.id}">
				<div class="card-header">
						<img src="${data.image}" alt="" class="${
        data.image === "null" ? "d-none" : ""
      }">
				</div>
				<div class="card-body">
					<h4 class="card-body__title ${data.title === "null" ? "d-none" : ""}"> 
						${data.title}
					</h4>
					<div class="card-body__description">
						<p class="card-body__description--location ${
              data.locality === "null" ? "d-none" : ""
            }"><b>Localização:</b> ${data.locality}</p>
						<p class="card-body__description--year ${
              data.endDate === "null" ? "d-none" : ""
            }"><b>Inauguração:</b> ${data.endDate}</p>
					</div>
				</div>
			</a>
		</div>`)
    );
  }

  function destroyBuildingWorksResult() {
    pagination = 0;
    totalBuildingWorks = 0;
    countPagination = 0;
    getPage = 0;
    countTotalBuildingWorks = 0;
    resultIds = 0;
    listResults = [];

    $(buildingWorksWrapper).children().remove();
    $(showMoreBtnPages).removeClass("d-block");
  }

  function showBuildingWorksResult(buildingWorksList) {
    buildingWorksList.forEach(function (item) {
      item.id = resultIds;
      listResults.push(item);
      buildingWorksCardTemplate(item);
      resultIds += 1;
    });

    setOpenModal();
  }

  function initSearch(pagination) {
    var offset = pagination;
    var data = {
      path,
      offset,
    };
    searchByBuildingWorks(data);
  }

  function searchByBuildingWorks(data) {
    $.ajax({
      dataType: "json",
      url: url,
      data: data,
      success: function (res) {
        if (res.total > 0) {
          totalBuildingWorks = res.total;
          showBuildingWorksResult(res.results);
          showMoreBtn(res.total);
          $(".progress-search").addClass("d-none");
          countTotalBuildingWorks += res.results.length;
          showDetails(res);
        }
        showNotFound(res.total);
      },
    });
  }

  initSearch(0);
});

$(document).ready(function () {
  if (!$(".list-products").length) {
    return;
  }

  var urlPath = $("#pagePath").val() + ".filter.product.json";
  var tags = [];
  var catalogo = "";
  var produtosData = [];
  var xhr;
  var rootPathProducts = "/var/commerce/products/vedacit/b2c";

  if ($("body").is("#vedacit-pro")) {
    rootPathProducts = "/var/commerce/products/vedacit/b2b";
  }

  function buscaProdutos(rootPathProducts, tags, offset) {
    if (xhr) xhr.abort();

    $(".list-products-content .lds-ellipsis").show();
    $(".list-products .show-more").hide();

    xhr = $.ajax({
      dataType: "json",
      url: urlPath,
      data: {
        rootPathProducts: rootPathProducts,
        maxResult: 8,
        offset: offset,
        catalogo: catalogo,
        tags: tags,
        tagOperation: "AND",
      },
      success: function (data) {
        $(".list-products-content .lds-ellipsis").hide();
        var results = data.results;
        results.sort(function (a, b) {
          var textA = a.title.toUpperCase();
          var textB = b.title.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        if (!data.total) {
          $(".list-products-content .not-found").show();
          return;
        } else {
          $(".list-products-content .not-found").hide();
        }
        produtosData = results.slice(0, results.length);
        counter(results);
        $(".list-products .totalProdutos").text(data.total);
        loadprodutos(produtosData);
        if (data.total > offset + data.results.length) {
          $(".list-products .show-more").show();
        } else {
          $(".list-products .show-more").hide();
        }
      },
    });
  }

  function counter(produtos) {
    $("[data-tag-id]").each(function (index, element) {
      var tag = $(element).data("tag-id");
      var count = 0;
      $(produtos).each(function (index, element) {
        element.tags.find(function (el) {
          if (el == tag) count++;
        });
      });
      $("[data-tag='" + tag + "'] .count").text(count);
    });
  }

  function loadParameters() {
    var urlTags = window.location.search;
    var param = $.parseParams(urlTags)["tags"];
    catalogo = $.parseParams(urlTags)["catalogo"];
    if (typeof param == "string") {
      param = param.split("&");
    }
    $.each(param, function (index, element) {
      $("[data-tag-id='" + element + "']").attr("checked", true);
      var text = $("label[for='" + element + "']")
        .first()
        .text();
      if (!tags.includes(element)) {
        tags.push(element);
        addFiltros(text, element);
      }
    });
    buscaProdutos(rootPathProducts, tags, 0);
  }

  $(".list-products input[type=checkbox]").change(function (event) {
    var selected = event.target;
    var text = $("label[for='" + selected.id + "']")
      .first()
      .text();

    if (selected.checked) {
      tags.push($(selected).val());
      addFiltros(text, $(selected).data("tag-id"));
    } else {
      tags.remove($(selected).val());
      removeFilter($(selected).data("tag-id"));
    }
    cleanProdutcts();
    buscaProdutos(rootPathProducts, tags, 0);
  });

  function filterProdutos(tags) {
    $(".list-products-content .lds-ellipsis").hide();
  }

  function cleanProdutcts() {
    var resultContainer = $(".list-products  .resultContainer");
    resultContainer.html("");
  }

  $(".list-products").on("click", ".filter-item-close", function () {
    var id = $(this).parent().data("input-id");
    $("[data-tag-id='" + id + "']")
      .attr("checked", false)
      .first()
      .trigger("change");
  });

  $(".list-products").on("click", ".show-more .button", function () {
    event.preventDefault();
    var offset = $(".list-products .resultContainer .card-wrapper").length;
    buscaProdutos(rootPathProducts, tags, offset);
  });

  $(".list-products").on("click", ".clean-filter img", function () {
    tags = [];
    $(".filter-item").remove();
    $("[data-tag-id]").attr("checked", false);
    $("[data-tag-id]").first().trigger("change");
  });

  function loadprodutos(produtos) {
    var resultContainer = $(".list-products  .resultContainer");
    var list = $("<div></div>");
    list.addClass("row list");
    var listClone = list.clone();
    var maxShow = 8;
    $.each(produtos, function (index, produto) {
      var cardCol = $("<div></div>");
      cardCol.addClass("col-lg-6 card-wrapper");

      var card = $("<a></a>");
      card.addClass("card single-line");
      card.attr("href", produto.path);

      var imgContainer = $("<div class='thumb-img'></div>");
      var img = $("<img class='thumb'/>");
      img.attr("src", produto.thumb);

      var cardContent = $("<div></di>");
      cardContent.addClass("card-content");

      var cardTitle = $("<h3></h3>");
      cardTitle.addClass("single-card-title");
      cardTitle.text(produto.title);

      var cardDescription = $("<span></span>");
      cardDescription.addClass("single-card-description");
      cardDescription.text(produto.description);

      imgContainer.append(img);
      card.append(imgContainer);

      cardContent.append(cardTitle);
      cardContent.append(cardDescription);

      card.append(cardContent);
      cardCol.append(card);

      listClone.append(cardCol);
      if ((index + 1) % 2 == 0 || index + 1 == produtos.length) {
        if (index + 1 > maxShow) {
          listClone.hide();
        }
        resultContainer.append(listClone);
        listClone = list.clone();
      }
    });
  }

  function addFiltros(texto, id) {
    var filtro = $("<div class='filter-item'></div>");
    filtro.attr("data-input-id", id);
    filtro.append(texto);
    var img = $(
      "<img class='filter-item-close' src='/etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/closed.svg' />"
    );
    filtro.append(img);
    $(".list-products  .filters").append(filtro);
  }

  function removeFilter(texto) {
    $(".list-products  .filters")
      .find("[data-input-id='" + texto + "']")
      .remove();
  }
  loadParameters();
});

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

(function ($) {
  var re = /([^&=]+)=?([^&]*)/g;
  var decode = function (str) {
    return decodeURIComponent(str.replace(/\+/g, " "));
  };
  $.parseParams = function (query) {
    var params = {},
      e;
    if (query) {
      if (query.substr(0, 1) == "?") {
        query = query.substr(1);
      }

      while ((e = re.exec(query))) {
        var k = decode(e[1]);
        var v = decode(e[2]);
        if (params[k] !== undefined) {
          if (!$.isArray(params[k])) {
            params[k] = [params[k]];
          }
          params[k].push(v);
        } else {
          params[k] = v;
        }
      }
    }
    return params;
  };
})(jQuery);
$(document).ready(function () {
  var vid = document.getElementById("audioPodcast");

  if (vid !== null) {
    vid.ontimeupdate = function () {
      executePlayer();
    };

    function executePlayer() {
      document.getElementById("bar-completed-player").style.width =
        (vid.currentTime / vid.duration) * 100 + "%";
      document.getElementById("currentTime").innerHTML = moment
        .utc(
          moment
            .duration(Math.round(vid.currentTime), "seconds")
            .asMilliseconds()
        )
        .format("HH:mm:ss");
      document.getElementById("totalTime").innerHTML = moment
        .utc(
          moment.duration(Math.round(vid.duration), "seconds").asMilliseconds()
        )
        .format("HH:mm:ss");
    }

    $(".play-player").on("click", function () {
      vid.play();
      $(".pause-player").show();
      $(".play-player").hide();
    });

    $(".pause-player").on("click", function () {
      vid.pause();
      $(".pause-player").hide();
      $(".play-player").show();
    });

    $(".advance-time").on("click", function () {
      vid.currentTime += 10;
    });

    $(".back-time").on("click", function () {
      vid.currentTime -= 10;
    });

    $(".mute-on-player").on("click", function () {
      vid.muted = true;
      $(".mute-on-player").hide();
      $(".mute-off-player").show();
    });

    $(".mute-off-player").on("click", function () {
      vid.muted = false;
      $(".mute-off-player").hide();
      $(".mute-on-player").show();
    });
  }
});
$(document).ready(function () {
  var lastSearch = "";

  $("#search-input, #search-input-mobile").keyup(function () {
    var searchTerm = $(this).val();
    $("#searchsuggestions").html("");
    $("#searchproducts").html("");

    $("#searchsuggestions-mobile").html("");
    $("#searchproducts-mobile").html("");
    if (searchTerm.length < 3 && searchTerm != lastSearch) {
      $(".fade-nav-search").click();
      return;
    }

    lastSearch = searchTerm;
    var urlPath = $("#pagePath").val() + ".suggest.json";
    var rootPath = "/content/vedacit/pt-br/para-voce";

    if ($("body").is("#vedacit-pro")) {
      rootPath = "/content/vedacit/pt-br/vedacit-pro";
    }

    var data = {
      rootPath: rootPath,
      fulltext: searchTerm,
    };

    $.ajax({
      dataType: "json",
      url: urlPath,
      data: data,
      success: function (data) {
        if (data.suggestion.length === 0 && data.products.length > 0) {
          produtos(data.products);

          $.each(data.products, function (index) {
            data.suggestion.push(data.products[index].title.toLowerCase());
          });

          suggestion(data.suggestion);

          suggestionMobile(data.suggestion);
          produtosMobile(data.products);
        } else {
          suggestion(data.suggestion);
          produtos(data.products);

          suggestionMobile(data.suggestion);
          produtosMobile(data.products);
        }
      },
    });

    $("#btnBuscaMobile").on("click", function () {
      var value = $("#search-input-mobile").val();
      $("#search-input").val(value);
      $("form.nav-input button").click();
    });

    var openBusca = function (event) {
      event.preventDefault();
      var value = $(event.target).text();
      $("#search-input").val(value);
      $("form.nav-input button").click();
    };

    function suggestion(suggest) {
      $("#searchsuggestions").html("");
      $.each(suggest, function (index, element) {
        var link = $("<a href='' class='options'>" + element + "</a>");
        $("#searchsuggestions").append(link);
        link.on("click", openBusca);
      });
      if (suggest.length) {
        expandSearchInput();
      } else {
        $(".fade-nav-search").click();
      }
    }
    function suggestionMobile(suggest) {
      $("#searchsuggestions-mobile").html("");
      $.each(suggest, function (index, element) {
        var p = $("<p class='products-item'></p>");
        var link = "<a href=''>" + element + "</a>";
        p.append(link);
        $("#searchsuggestions-mobile").append(p);
        $(link).on("click", openBusca);
      });
      if (suggest.length > 0) {
        expandSearchMobile(true);
      } else {
        expandSearchMobile(false);
      }
    }

    function produtos(produtos) {
      $("#searchproducts").html("");
      $.each(produtos, function (index, element) {
        var link = $("<a></a>");
        link.attr("href", element.path);
        link.addClass("suggested-product");

        var img = $("<img/>");
        img.attr(
          "src",
          element.thumb + "/jcr:content/renditions/cq5dam.thumbnail.140.100.png"
        );
        link.append(img);

        var title = $("<span></span>");
        title.text(element.title);

        link.append(title);

        if (
          element.oldProducts &&
          element.oldProducts.length &&
          !element.newPackage
        ) {
          var prefix =
            element.oldProducts.length > 1
              ? "Nomes antigos: "
              : "Nome antigo: ";
          var oldTitle = $("<p></p>");

          if (element.title.length > 50) {
            oldTitle.css("margin-top", "10%");
            link.css("height", "100px");
          } else {
            oldTitle.css("margin-top", "45px");
          }

          oldTitle.append($("<br>"));
          var oldTitles = getOldTitles(element.oldProducts);
          oldTitle.append(prefix + oldTitles);
          link.append(oldTitle);
        }

        $("#searchproducts").append(link);
      });
    }

    function getOldTitles(oldProducts) {
      var oldTitles = "";
      var initialSeparator = oldProducts.length > 1 ? " " : "";
      oldProducts.forEach(function (oldProduct, index) {
        if (index === 0) {
          oldTitles += initialSeparator + oldProduct.oldTitle;
        } else if (index === oldProducts.length - 1) {
          oldTitles += " e " + oldProduct.oldTitle;
        } else {
          oldTitles += ", " + oldProduct.oldTitle;
        }
      });
      return oldTitles;
    }

    function produtosMobile(produtos) {
      $("#searchproducts-mobile").html("");
      $.each(produtos, function (index, element) {
        var link = $("<a></a>");
        link.attr("href", element.path);
        var div = $("<div></div>");
        div.addClass("suggested-product");

        var img = $("<img style='max-width:48px'/>");
        img.attr(
          "src",
          element.thumb + "/jcr:content/renditions/cq5dam.thumbnail.140.100.png"
        );

        div.append(img);

        var title = $("<span></span>");
        title.text(element.title);

        div.append(title);
        link.append(div);
        $("#searchproducts-mobile").append(link);
      });
    }
  });
});
$(document).ready(() => {
  setTargetPage();
});

const setTargetPage = () => {
  // Verifica se é linha Vedacit, removendo link Lojistas e abertura em nova página
  if ($("body").is("#vedacit-pro")) return;

  $(".item-menu").children().last().find("a").attr({
    target: "_blank",
    "aria-label": "abre em nova aba",
  });

  $(".mobile-menu-opened")
    .children()
    .last()
    .prev()
    .find("a")
    .attr("target", "_blank");
};

$(document).ready(function () {
  var btnCloseModal = $(".modalnewpackage .menu-close");
  var btnModalFromto = $(".btn-modal-fromto");

  $(btnCloseModal).on("click", function () {
    $("body").find(".modalnewpackage .modal-from-to").toggleClass("closed");
  });

  $(btnModalFromto).on("click", function () {
    $("body").find(".modalnewpackage .modal-from-to").toggleClass("closed");
  });

  $("body").find(".modalnewpackage .modal-from-to").toggleClass("closed");
});
$(document).ready(function () {
  var btnCloseModal = $(".modalfromtob2b .menu-close");
  var btnModalFromto = $(".btn-modal-fromto");

  $(btnCloseModal).on("click", function () {
    $("body").find(".modalfromtob2b .modal-from-to").toggleClass("closed");
  });

  $(btnModalFromto).on("click", function (event) {
    event.preventDefault();
    $("body").find(".modalfromtob2b .modal-from-to").toggleClass("closed");
  });
  $("body").find(".modalfromtob2b .modal-from-to").toggleClass("closed");
});

$(document).ready(function () {
  var btnCloseModal = $(".modalfromto .menu-close");
  var btnModalFromto = $(".btn-modal-fromto");

  $(btnCloseModal).on("click", function () {
    $("body").find(".modalfromto .modal-from-to").toggleClass("closed");
  });

  $(btnModalFromto).on("click", function (event) {
    event.preventDefault();
    $("body").find(".modalfromto .modal-from-to").toggleClass("closed");
  });
  $("body").find(".modalfromto .modal-from-to").toggleClass("closed");
});

$(document).ready(() => {
  $(function () {
    $(".modalcookiesright .hide").click(function () {
      e1 = $(".modalcookiesright .modal-cookies-right");
      e1.addClass("hidden");
    });
  });

  for (let idx = 1; idx <= 4; idx++) {
    //ativar/desativar
    $(function () {
      $(".modalcookiesright .modal-cookies-content .info-" + idx).click(
        function () {
          e1 = $(".modalcookiesright .modal-cookies-content .info-" + idx);

          if (e1.attr("class").includes("not-activated")) {
            e1.removeClass("not-activated");
            e1.addClass("activated");
          } else {
            e1.addClass("not-activated");
            e1.removeClass("activated");
          }
        }
      );
    });

    //abrir informações
    $(function () {
      $(".modalcookiesright .modal-cookies-config-" + idx).click(function () {
        e1 = $(".modalcookiesright .modal-cookies-right .show-info-" + idx);
        e2 = $(
          ".modalcookiesright .modal-cookies-right .modal-cookies-content .modal-cookies-config-" +
            idx
        );

        if (e1.attr("class").replace("show-info", "").includes("show")) {
          e1.removeClass("show");
          e2.removeClass("up");
        } else {
          e1.addClass("show");
          e2.addClass("up");
        }
      });
    });
  }

  //cancelar
  $(function () {
    $(".modalcookiesright .modal-cookies-content .cancel").click(function () {
      e1 = $(".modalcookiesright .modal-cookies-right");
      e1.addClass("hidden");
    });
  });

  //salvar
  $(function () {
    $(".modalcookiesright .modal-cookies-content .save").click(function () {
      e1 = $(".modalcookiesright .modal-cookies-right");
      e1.addClass("hidden");
    });
  });
});
$(document).ready(function () {
  var unity, amountArea, heightCalculate, widthCalculate, resultCalculated;

  var btnCloseModal = $(".menu-close");
  var btnModalCalculate = $(".btn-modal-calculate");
  var inputModalCalculateHeight = $("#js-height-calculate");
  var inputModalCalculateWidth = $("#js-width-calculate");
  var btnModalOpen = $(".js-modal-calculator");
  var heightValueCalculator = $("#heightValueCalculator");
  var widthValueCalculator = $("#widthValueCalculator");
  var modalResult = $("#js-result-amount");
  var modalProductName = $("#js-result-product");
  var modalProductImg = $("#js-result-img");
  var btnModalNewCalc = $(".btn-new-calc");

  // const DEFAULT_UNIT_VALUES = {
  // 	'centimentros': 100,
  // 	'metros': 1000,
  // 	'gramas': 1000,
  // 	undefined: 0
  // }

  // /**
  //  * Receive the unity value (cm, kg, g)
  //  * and the amount m² needed
  //  * @param {String} uni - Units of measure
  //  * @param {Number} amount - Amount m²
  //  */

  function openModalCalculatorResult() {
    var heightCalculate = $(inputModalCalculateHeight).val();
    var widthCalculate = $(inputModalCalculateWidth).val();
    var unityCalc = $(btnModalOpen).data("unidademedida");
    var qtdCalc = $(btnModalOpen).data("qtdarea");
    var nameProduct = $(btnModalOpen).data("nome-produto");
    var imgProduct = $(btnModalOpen).data("img-produto");

    var unityValue = unityCalc == "gramas" ? 1000 : 100;

    resultCalculated =
      (Number(widthCalculate) * Number(heightCalculate) * Number(qtdCalc)) /
      unityValue;

    var BigUnity = unityCalc == "gramas" ? "Kg" : "M²";

    $("body").find(".modal-calculate").addClass("closed");
    $("body").find(".modal-result").toggleClass("closed");

    $(heightValueCalculator).text(heightCalculate + " M");
    $(widthValueCalculator).text(widthCalculate + " M");
    $(modalResult).text(resultCalculated + " " + BigUnity);
    $(modalProductName).text(nameProduct);
    $(modalProductImg).attr("src", imgProduct);
  }

  $(btnModalNewCalc).on("click", function () {
    $("body").find(".modal-result").toggleClass("closed");
    $("body").find(".modal-calculate").toggleClass("closed");
  });

  $(btnCloseModal).on("click", function () {
    $("body")
      .find("." + $(this).data("modal"))
      .addClass("closed");
  });

  $(btnModalOpen).on("click", function () {
    $("body").find(".modal-calculate").removeClass("closed");
  });

  $(btnModalCalculate).on("click", function () {
    openModalCalculatorResult();
  });
});

$(document).ready(function () {
  var modelRepresentantes = $(".modal-representative .representative");
  if (!modelRepresentantes.length) {
    return;
  }
  var url = modelRepresentantes.data("path") + ".onde-encontrar.json";
  var termoHtmlTemplate =
    '<div class="item-representative mb-40"><h5 class="mb-3">{{NAME}}</h5><p class="mb-2 font-weight-bold"><img src="./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/envelope-black.svg"alt="" class="mr-3">{{EMAIL}}</p><p class="font-weight-bold">		<img src="./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/phone-call-black.svg" alt="" class="mr-3">{{PHONE}} </p> </div>';

  modelRepresentantes.find("#estado-select").on("change", function () {
    var estado = this.value;
    var estadoName = $(this).find("option:selected").html();
    if (!estado) return;
    $.ajax({
      dataType: "json",
      url: url,
      data: {
        estado: estado,
      },
      success: function (data) {
        modelRepresentantes.find(".count").html(data.total);
        modelRepresentantes.find(".state").html('"' + estadoName + '"');
        modelRepresentantes.find(".list-item-representative").html("");
        if (data && data.total > 0) {
          modelRepresentantes.find(".result-found").show();
          modelRepresentantes.find(".result-not-found").hide();
        } else {
          modelRepresentantes.find(".result-found").hide();
          modelRepresentantes.find(".result-not-found").show();
        }

        $(data.results).each(function (i, item) {
          var html = termoHtmlTemplate + "";
          html = html.replace("{{NAME}}", item.nome);
          html = html.replace("{{EMAIL}}", item.email);
          html = html.replace("{{PHONE}}", item.telefone);
          modelRepresentantes.find(".list-item-representative").append($(html));
        });
      },
    });
  });
});
$(document).ready(function () {
  $(".slick-blog").each(function () {
    $(this).slick({
      variableWidth: true,
      infinite: false,
      slidesToShow: 1,
      centerMode: true,
      appendArrows: $(".blog-arrows-slick"),
      speed: 200,
      slideOffset: 15,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg'>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dots: true,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        $(slider.$slider)
          .closest(".slick-blog-carousel")
          .find(".js-total-blog")
          .text(Math.ceil(slider.slideCount));
        return;
      },
    });
  });

  $(".slick-blog").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(event.target)
        .closest(".slick-blog-carousel")
        .find(".js-current-blog")
        .text(nextSlide + 1);
    }
  );
});
$(document).ready(function () {
  if (!$(".question-result").length || !$(".questions-search").length) {
    return;
  }
  var url = $(".questions-search").data("path") + ".question.json";
  var searchPath = $(".questions-search").data("search");

  function searchQuestion() {
    clean();
    var fulltext = $(".questions-search #wherebuy").val();
    $.ajax({
      dataType: "json",
      url: url,
      data: { fulltext: fulltext, path: searchPath },
      success: function (data) {
        $(".question-result .lds-ellipsis").hide();
        var result = Object.entries(data);
        if (result.length > 0) {
          $(".question-result-container .count").text(result.length);
          $(".question-result-container .term").text(fulltext);
          var count = 0;
          for (var [question, answer] of result) {
            addQuestion(question, answer, count++);
          }
          $(".question-result-container").show();
        } else {
          $(".verticaltab .help-not-found .term").text(fulltext);
          $(".verticaltab .help-not-found").show();
        }
      },
    });
  }

  $(".questions-search #whereFindButton").click(function () {
    searchQuestion();
    $(".question-result .lds-ellipsis").show();
    $(".main-result").hide();
    $(".verticaltab .help-not-found").hide();
    $(".question-result-container").hide();
  });

  $(".questions-search #wherebuy").keypress(function (e) {
    var key = e.which;
    if (key == 13) {
      // the enter key code
      $("#whereFindButton").click();
      return false;
    }
  });

  function clean() {
    var resultContainer = $(".question-result-container .tab-content");
    resultContainer.html("");
  }

  function addQuestion(question, answer, id) {
    var tabPanel = $(
      '<div class="tab-pane fade show active" id="v-pills-caixa"role="tabpanel" aria-labelledby="v-pills-caixa-tab"></div>'
    );
    var doubt = $('<div class="doubts-items pr-0"></div>');
    var link = $(
      '<a href="" data-toggle="collapse" data-target="#cnpj" class="doubt-link"></a>'
    );
    var img = $(
      '<img src="http://vedacitotto-stage.adobemsbasic.com/etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/arrow-down.svg" class="rotate-collapsed">'
    );
    var collapse = $('<div id="cnpj" class="collapse doubt-text"></div>');
    var id = "colaps-question-" + id;
    collapse.attr("id", id);
    link.attr("data-target", "#" + id);
    collapse.html(answer);
    link.html(question).append(img);
    doubt.append(link).append(collapse).append($("<hr/>"));
    tabPanel.append(doubt);
    $(".question-result-container .tab-content").append(tabPanel);
  }

  const setFocusAccordion = () => {
    $(".pr-0").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: $(this).offset().top,
          behavior: "smooth",
        },
        200
      );
    });
  };
  setFocusAccordion();
});
$(document).ready(function () {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    $(".js_banner-background-desktop").css("display", "none");
    $(".js_banner-background-full-desktop").css("display", "none");
  } else if (windowWidth > 768 && windowWidth < 1600) {
    $(".js_banner-background-full-desktop").css("display", "none");
    $(".js_banner-background-mobile").css("display", "none");
  } else if (windowWidth > 1600) {
    $(".js_banner-background-desktop").css("display", "none");
    $(".js_banner-background-mobile").css("display", "none");
  }
});
$(document).ready(function () {
  if (!$(".article-list-results").length) {
    return;
  }
  var url = $(".article-list-results").data("path") + ".search.json";
  var limit = 6;

  function modalArticleListTemplate(element, data) {
    $(element).append(
      '<div class="col-12 col-md-4 article-item">' +
        '<a href="' +
        data.url +
        '" class="card-vertical">' +
        '<img class="thumb" src="' +
        data.bannerThumb +
        '">' +
        '<div class="description-card-post">' +
        '<p class="categoria">' +
        data.subcategory +
        "</p>" +
        '<h3 class="font-bigger">' +
        data.title +
        "</h3>" +
        "<p>" +
        data.subtitle +
        "</p>" +
        "</div>" +
        "</a>" +
        "</div>"
    );
  }

  function loadArticles(offset, limit) {
    $(".article-list-results .progress-search").show();
    $.ajax({
      dataType: "json",
      url: url,
      data: { offset: offset, limit: limit },
      success: function (data) {
        $(data.results).each(function (i, item) {
          modalArticleListTemplate(
            $(".article-list-results .results-items"),
            item
          );
        });

        if (data.total > offset + data.results.length) {
          $(".article-list-results .list-show-more").show();
        } else {
          $(".article-list-results .list-show-more").hide();
        }
      },
      complete: function () {
        $(".article-list-results .progress-search").hide();
      },
    });
  }

  $(".article-list-results .js-showmore").click(function (event) {
    event.preventDefault();
    debugger;
    var offset = $(".article-list-results .results-items .article-item").length;
    loadArticles(offset, limit);
  });

  loadArticles(0);
});
var DEV = "${URL_PATH}";
var AEM = "";
var URL_PATH = DEV;
var clickedPoint = 0;
var clickedTab = "";

// -- Carousel control -- //
$(document).ready(function () {
  $(".dropmenu").mouseout(function () {
    $(".fade-nav").removeClass("in");
  });

  $(".header-counter").each(function (index, element) {
    $(element).find(".js-current-header").text(1);
  });

  $(".products-counter").each(function (index, element) {
    $(element).find(".js-current-products").text(1);
  });

  $(".products-counter").each(function (index, element) {
    $(element).find(".js-contrast-products").text(1);
  });
  $(".contrast-carousel").each((index, element) => {
    $(element).slick({
      appendArrows: $(element).closest(".row").find(".products-slick")[0],
      slidesPerRow: 3,
      infinite: false,
      autoplay: false,
      speed: 200,
      fade: true,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg'>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dots: true,
      windowTimer: true,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        $(slider.$slider)
          .siblings(".products-counter")
          .find(".js-total-contrast")
          .text(slider.slideCount);

        return;
      },
    });

    $(element).on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(event.target)
          .siblings(".products-counter")
          .find(".js-contrast-products")
          .text(nextSlide + 1);
      }
    );
  });

  //escoped Carousel
  $(".carousel").each((index, element) => {
    $(element).slick({
      appendArrows: $(element).closest(".row").find(".most-arrows-slick")[0],
      slidesPerRow: getSlidesPerRow(),
      rows: window.innerWidth >= 1025 ? 2 : 1,
      infinite: false,
      dots: true,
      speed: 200,
      fade: true,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg'>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        $(".js-total-products").text(slider.slideCount);
        return;
      },
    });

    $(element).on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".js-current-products").text(nextSlide + 1);
      }
    );
  });

  $(".photo-productcarousel").each((index, element) => {
    $(element).slick({
      appendArrows: $(element)
        .closest(".row")
        .find(".photo-product-arrows-slick")[0],
      slidesPerRow: getSlidesPerRow(),
      rows: window.innerWidth >= 768 ? 2 : 1,
      infinite: false,
      dots: true,
      speed: 200,
      fade: true,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        $(slider.$slider)
          .closest(".photo-product-carousel")
          .find(".js-total-products")
          .text(slider.slideCount);
        return;
      },
    });

    $(element).on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(event.target)
          .closest(".photo-product-carousel")
          .find(".js-current-products")
          .text(nextSlide + 1);
      }
    );
  });

  $(".header").each((index, element) => {
    $(element).slick({
      appendArrows: $(element).closest(".row").find(".header-arrows-slick")[0],
      infinite: false,
      autoplay: false,
      speed: 200,
      fade: true,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg'>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dots: true,
      windowTimer: true,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        $(slider.$slider)
          .closest(".js-header")
          .find(".js-total-header")
          .text(slider.slideCount);
        return;
      },
    });

    $(element).on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(event.target)
          .closest(".js-header")
          .find(".js-current-header")
          .text(nextSlide + 1);
        const title = document.querySelector(".header-title");
        const subtitle = document.querySelector(".header-subtitle");
        title.classList.add("animated", "bounceInLeft");
      }
    );
  });

  var numbSlides = window.innerWidth <= 768 ? 1 : 2;

  if (window.location.href.includes("produtos-e-solucoes")) {
    numbSlides =
      window.innerWidth <= 991 ? 1 : window.innerWidth <= 1919 ? 2 : 3;
  }
  if (window.location.href.includes("resultado")) {
    numbSlides =
      window.innerWidth <= 768
        ? 1
        : window.innerWidth <= 1024
        ? 2
        : window.innerWidth <= 1280
        ? 3
        : 4;
  }

  $(".products-solution").each((index, element) => {
    $(element).slick({
      infinite: false,
      slidesToShow: numbSlides,
      // rows: 1,
      appendArrows: $(element)
        .closest(".row")
        .find(".products-arrows-slick")[0],
      speed: 200,
      slideOffset: 15,
      slidesToScroll: numbSlides,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg'>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dots: true,
      windowTimer: true,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        const amountPerPage = numbSlides;
        $(slider.$slider)
          .closest(".products-slick")
          .find(".js-total-contrast")
          .text(Math.ceil(slider.slideCount / amountPerPage));
        return;
      },
    });

    $(element).on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        const amountPerPage = numbSlides;
        $(event.target)
          .closest(".products-slick")
          .find(".js-contrast-products")
          .text(nextSlide / amountPerPage + 1);
      }
    );
  });

  $(".slick-history").each(function () {
    $(this).slick({
      infinite: false,
      slidesToShow: 1,
      centerMode: false,
      appendArrows: $(this).siblings(".history-arrows-slick"),
      speed: 200,
      slideOffset: 15,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg'>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dots: true,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        $(slider.$slider)
          .closest(".slick-history-carousel")
          .find(".js-total-history")
          .text(Math.ceil(slider.slideCount));
        return;
      },
    });

    $(this).on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(event.target)
          .closest(".slick-history-carousel")
          .find(".js-current-history")
          .text(nextSlide + 1);
      }
    );
  });

  $(".slick-depoiments").each((index, element) => {
    $(element).slick({
      infinite: false,
      slidesToShow: 1,
      centerMode: false,
      appendArrows: $(element)
        .closest(".row")
        .find(".depoiments-arrows-slick")[0],
      speed: 500,
      slideOffset: 15,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: "linear",
      prevArrow: `<img class='previous-arrow slick-prev' src='${URL_PATH}arrow-previous.svg'>`,
      nextArrow: `<img class='next-arrow slick-next' src='${URL_PATH}next-arrow.svg'>`,
      dots: true,
      dotsClass: "custom_paging",
      customPaging: (slider) => {
        $(".js-total-depoiments").text(slider.slideCount);
        return;
      },
    });

    $(element).on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".depoiments-arrows-slick .js-current-depoiments").text(
          nextSlide + 1
        );
      }
    );
  });

  function getSlidesPerRow() {
    if (window.innerWidth <= 768) return "1";
    else if (window.innerWidth > 768 && window.innerWidth <= 1919) return "2";
    else return "3";
  }
});
// -- Carousel control -- //

// -- Resumo descrição -- //

var read_more_limit = 150;

$(".read-more").each(function () {
  var html = $(this).html();
  if (html.length > read_more_limit)
    $(this).html(
      html.substring(0, read_more_limit) +
        '... <a href="#description" class="read-more-btn">[leia mais]</a>'
    );
});

$(".summary-text").each(function () {
  var html = $(this).html();
  var data = $(this).data("limitCaracter");
  if (html.length > data) $(this).html(html.substring(0, data) + "...");
});

$(".contrast-products .single-card-description").each(function () {
  var html = $(this).html();
  var data = "40";
  if (html.length > data) $(this).html(html.substring(0, data) + "...");
});

$(".most-carousel .carousel-content span").each(function () {
  var html = $(this).html();
  var data = "40";
  if (html.length > data) $(this).html(html.substring(0, data) + "...");
});

// -- Menu control -- //
function openMenu() {
  $("body").find(".menu-content").toggleClass("closed");
}

function openSearchMobile() {
  $("body").find(".mobile-menu-search").toggleClass("closed");
}

function openFilterhMobile() {
  $("body").find(".mobile-menu-filter").toggleClass("closed");
}

function expandSearchInput() {
  $("body").find(".search-suggestion").addClass("show");
  $(".fade-nav-search").addClass("in");
}

function expandSearchMobile(action) {
  if (action == true) {
    $("body").find(".box-mobile-search").addClass("show");
  } else {
    $("body").find(".box-mobile-search").removeClass("show");
  }
}

function openMoreSizesMenu() {
  $("body").find(".modal-show-sizes").toggleClass("closed");
}

function openModal(action) {
  $("body").find(action).toggleClass("closed");
}

$(".fade-nav-search").each((index, element) => {
  element.addEventListener("click", function () {
    $("body").find(".search-suggestion").removeClass("show");
    $(".fade-nav-search").removeClass("in");
  });
});
// -- mobile menu control -- //

// -- Accordion control -- //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(".menu-item-desktop").hover(function () {
  $(this).children().toggleClass("rotate").next().toggleClass("show");
  $(".fade-nav").addClass("in");
  const openedItems = document.getElementsByClassName(
    "dropdown-content show"
  ).length;
  if (!openedItems) {
    $(".fade-nav").removeClass("in");
  }
});

$(".menu-item-mobile").click(function () {
  $(this).children().toggleClass("show").next().toggleClass("show");
});

$(".fade-nav").click(function () {
  $(".dropdown").find(".rotate").removeClass("rotate");
  $(".dropdown").find(".show").removeClass("show");
  $(".fade-nav").removeClass("in");
});

$(".footer-drop").click(function () {
  $(this).toggleClass("rotate").next().toggleClass("show");
  const openedItems = document.getElementsByClassName(
    "dropdown-content show"
  ).length;
});
// -- Accordion control -- //

// Show more HOME
$(".js-show-more").click(function () {
  $(this).siblings(".products-more").toggleClass("show");
  $(this).toggleClass("less");
});

// Show more Products
$(".js-show-more").click(function () {
  $(this).siblings(".category-products-more").toggleClass("show");
  if ($(this).hasClass("less")) {
    const tag = `<img class="show-less-visible"	src="${URL_PATH}less-icone.svg" alt=""> <span class="show-less-visible">Mostrar menos categorias</span>`;
    $(this).html(tag);
  } else {
    const tag = `<img class="show-more-visible"	src="${URL_PATH}plus-icon.svg" alt=""> <span class="show-more-visible">Mostrar mais categorias</span>`;
    $(this).html(tag);
  }
});

// Newsletter
(function () {
  if (window.location.hash === "#thanks") {
    $("body").find(".cta-error").addClass("hidden");
    $("body").find(".message-confirmation-title").text("Dados enviados");
    $("body")
      .find(".message-content-title")
      .text("E-mail cadastrado com sucesso!");
    $("body").find(".message-content-body").text("Obrigado por se cadastrar!");
    $("body").find(".message-confirmation").removeClass("closed");
    setTimeout(function () {
      $("body").find(".message-confirmation").addClass("closed");
    }, 6000);
  }
})();

function sendEmail() {
  $("body").find(".message-confirmation").addClass("closed");
  const email = document.getElementById("mce-EMAIL");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "apikey 83bb1576ccda6c95f4f2b9f2848de783-us4"
  );

  var raw = JSON.stringify({
    email_address: email.value,
    status: "subscribed",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    mode: "no-cors",
  };

  fetch(
    "https://us4.api.mailchimp.com/3.0/lists/000cd7992c/members/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function moveTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openAlertContact(nameclass, protocol) {
  if (protocol) {
    $("body")
      .find(nameclass + " .protocol")
      .text(protocol);
  }

  $("body").find(nameclass).toggleClass("closed");
}

function modalOpen(nameclass) {
  $("body").find(nameclass).toggleClass("closed");
}

function closeMessageAlertSucess() {
  $("body").find(".modal-contact.contact-mensage-sent").addClass("closed");
}

function closeMessageAlertError() {
  $("body")
    .find(".modal-contact.contact-unsent-mensage-send")
    .addClass("closed");
}

$(".title-sidebar").click(function () {
  $(this).children().next().toggleClass("rotate");
});

jQuery(".doubt-link").click(function () {
  jQuery(".collapse").collapse("hide");
});

$(".nav .nav-item .nav-link").on("click", function () {
  if (window.innerWidth <= 768) {
    if (clickedTab === event.currentTarget.text) return;

    if (event.clientX > clickedPoint) {
      element = document
        .getElementsByClassName("scroll-col")[0]
        .scroll(clickedPoint + 120, 0);
    } else {
      element = document
        .getElementsByClassName("scroll-col")[0]
        .scroll(clickedPoint + -180, 0);
    }
    clickedTab = event.currentTarget.text;
    clickedPoint = event.clientX;
  }
});

$(".summary-text").each(function () {
  var html = $(this).html();
  var data = $(this).data("limitCaracter");
  if (html.length > data) $(this).html(html.substring(0, data) + "...");
});

$(".contrast-products .single-card-description").each(function () {
  var html = $(this).html();
  var data = "40";
  if (html.length > data) $(this).html(html.substring(0, data) + "...");
});

$(".most-carousel .carousel-content span").each(function () {
  var html = $(this).html();
  var data = "40";
  if (html.length > data) $(this).html(html.substring(0, data) + "...");
});

$(".xf-content-height").each(function () {
  let html = $(this)
    .removeClass("xf-content-height")
    .addClass("xf-content-height--override");
});
AEM = "./etc.clientlibs/vedacit/clientlibs/clientlib-site/resources/img/";
URL_PATH = AEM;
$(document).ready(function () {
  var slideleft = $("#slide-btn-left");
  var slideright = $("#slide-btn-right");
  var numberslide = 1;
  var prevBtn = $("#slide-btn-left");
  var nextBtn = $("#slide-btn-right");
  var totalslides = $(".slide-item").length;

  $("#numberslide").text(numberslide);
  $("#totalslides").text(totalslides);

  var titleslide = $("#title-slide-1").attr("title");
  $("#title-slide").text(titleslide);

  $(slideleft).on("click", function () {
    if ($(".slide-item.active").prev().hasClass("slide-item")) {
      nextBtn.removeClass("blocked");
    }

    if (
      $(".slide-item.active").prev().length == 1 &&
      $(".slide-item.active").prev().hasClass("slide-item")
    ) {
      numberslide = numberslide - 1;
      $("#numberslide").text(numberslide);

      var titleslide = $("#title-slide-" + numberslide).attr("title");
      $("#title-slide").text(titleslide);

      var id = "#" + $(".slide-item.active").attr("id");
      $(".slide-item.active").prev().addClass("active");
      $(id).removeClass("active");

      if (numberslide == 1) {
        prevBtn.addClass("blocked");
      }
    } else {
      prevBtn.addClass("blocked");
    }
    slideTimer();
  });

  $(slideright).on("click", function () {
    if ($(".slide-item.active").next().hasClass("slide-item")) {
      prevBtn.removeClass("blocked");
    }

    if (
      $(".slide-item.active").next().length == 1 &&
      $(".slide-item.active").next().hasClass("slide-item")
    ) {
      numberslide = numberslide + 1;
      $("#numberslide").text(numberslide);

      var titleslide = $("#title-slide-" + numberslide).attr("title");
      $("#title-slide").text(titleslide);

      var id = "#" + $(".slide-item.active").attr("id");
      $(".slide-item.active").next().addClass("active");
      $(id).removeClass("active");

      if (totalslides == numberslide) {
        nextBtn.addClass("blocked");
      }
    } else {
      nextBtn.addClass("blocked");
    }
    slideTimer();
  });

  function resetSlide() {
    numberslide = 1;
    $("#numberslide").text(numberslide);

    var titleslide = $("#title-slide-" + numberslide).attr("title");
    $("#title-slide").text(titleslide);

    var id = "#" + $(".slide-item.active").attr("id");
    $(".slide-item").first().addClass("active");
    $(id).removeClass("active");

    if (totalslides == numberslide) {
      nextBtn.addClass("blocked");
    } else {
      nextBtn.removeClass("blocked");
    }

    if (numberslide == 1) {
      prevBtn.addClass("blocked");
    } else {
      prevBtn.removeClass("blocked");
    }
    slideTimer();
  }

  var timer;
  var interval = $(".slide .slide-items").data("timer") || 7;
  function slideTimer() {
    if (totalslides > 1) {
      clearInterval(timer);
      progressBar();
      timer = window.setInterval(function () {
        if (numberslide >= totalslides) {
          resetSlide();
        } else {
          $(slideright).trigger("click");
        }
      }, interval * 1000);
    }
  }

  var progress;
  function progressBar() {
    var bar = $(".slide-item .progress .bar");
    width = 0;
    clearInterval(progress);
    progress = setInterval(frame, interval);
    function frame() {
      if (width >= 99.7) {
        clearInterval(progress);
        i = 0;
      } else {
        width += 1 / interval;
        bar.css("width", width + "%");
      }
    }
  }

  slideTimer();
});
$(document).ready(function () {
  var form = $(".bim-form .form-validation");

  form.submit(function (event) {
    var form = $(event.target);
    sendData(form);
    event.preventDefault();
  });

  function sendData(form) {
    $.ajax({
      type: "post",
      url: form.attr("action"),
      data: form.serialize(),
      encode: true,
      success: function (response) {
        form.trigger("reset");
        openAlertContact(".modal-contact.contact-mensage-sent", response);
      },
    }).fail(function (data) {
      form.trigger("reset");
      openAlertContact(".modal-contact.contact-unsent-mensage-send");
    });
  }
});

$(document).ready(function () {
  var form = $(".contact-form .form-validation");

  form.submit(function (event) {
    var form = $(event.target);
    sendData(form);
    event.preventDefault();
  });

  function sendData(form) {
    $.ajax({
      type: "post",
      url: form.attr("action"),
      data: form.serialize(),
      encode: true,
      success: function (response) {
        form.trigger("reset");
        openAlertContact(".modal-contact.contact-mensage-sent", response);
      },
    }).fail(function (data) {
      form.trigger("reset");
      openAlertContact(".modal-contact.contact-unsent-mensage-send");
    });
  }
});
$(document).ready(function () {
  var pageBody = $("body")[0];

  /**
   * OPEN/CLOSE ACCESSIBILITY MOBILE TOOLS
   */

  var accessibilityToolButton = $(".accessibility-tool-button");
  var accessibilityMobile = $(".accessibility-mobile");
  var accessibilityMobileClose = $(".accessibility-mobile-close");

  /**
   * ACCESSIBILITY BUTTONS
   */

  var accessibilityContrastOn = $(".accessibility-contrast-on");
  var accessibilityContrastOff = $(".accessibility-contrast-off");
  var accessibilityBrightnessOn = $(".accessibility-brightness-on");
  var accessibilityBrightnessOff = $(".accessibility-brightness-off");
  var accessibilityFontLess = $(".accessibility-font-less");
  var accessibilityFontMore = $(".accessibility-font-more");
  var head = $("head");
  var goToContent = $("#goToContent");
  var goToMenu = $("#goToMenu");
  var goToContentMobile = $("#goToContentMobile");
  var fontsizeCount = 0;

  function closeAccessibility() {
    $(accessibilityMobile).toggleClass("active");
    var textButton =
      $(accessibilityToolButton).find("span").text() == "Fechar menu"
        ? "Menu de acessibilidade"
        : "Fechar menu";
    $(accessibilityToolButton)
      .find("img")
      .toggleClass("accessibility-chevron-flip");
    $(accessibilityToolButton).find("span").text(textButton);
  }
  $(accessibilityToolButton).on("click", function () {
    closeAccessibility();
  });
  $(accessibilityMobileClose).on("click", function () {
    closeAccessibility();
  });

  $(accessibilityContrastOn).each(function () {
    $(this).on("click", function () {
      localStorage.setItem("contrast", true);
      if (!$(pageBody).hasClass("bg-black")) {
        $(pageBody).addClass("contrast");
      }
    });
  });

  $(accessibilityContrastOff).each(function () {
    $(this).on("click", function () {
      localStorage.removeItem("contrast");
      $(pageBody).removeClass("contrast");
    });
  });

  $(accessibilityBrightnessOn).each(function () {
    $(this).on("click", function () {
      localStorage.setItem("brightness", true);
      $(pageBody).addClass("brightness");
    });
  });

  $(accessibilityBrightnessOff).each(function () {
    $(this).on("click", function () {
      localStorage.removeItem("brightness");
      $(pageBody).removeClass("brightness");
    });
  });

  $(accessibilityFontMore).each(function () {
    $(this).on("click", function () {
      if (fontsizeCount < 3) {
        fontsizeCount++;
        localStorage.setItem("fontsizeCount", fontsizeCount);
        setLocalStorageFontSize();
      }
    });
  });

  $(accessibilityFontLess).each(function () {
    $(this).on("click", function () {
      if (fontsizeCount > 0) {
        fontsizeCount--;
        localStorage.setItem("fontsizeCount", fontsizeCount);
        setLocalStorageFontSize();
      }
    });
  });

  function setLocalStorageBrightness() {
    if (localStorage.getItem("brightness") != null) {
      $(pageBody).addClass("brightness");
    }
  }

  function setLocalStorageContrast() {
    if (localStorage.getItem("contrast") != null) {
      if (!$(pageBody).hasClass("bg-black")) {
        $(pageBody).addClass("contrast");
      }
    }
  }

  function setLocalStorageFontSize() {
    var getFontSize =
      localStorage.getItem("fontsizeCount") == null
        ? 0
        : parseInt(localStorage.getItem("fontsizeCount"));
    fontsizeCount = getFontSize;

    if (localStorage.getItem("fontsizeCount") == null) {
      localStorage.setItem("fontsizeCount", 0);
    }
    $(head).append(
      "<style> *{font-size: " +
        (16 + parseInt(localStorage.getItem("fontsizeCount"))) +
        "px}</style>"
    );
  }

  setLocalStorageFontSize();
  setLocalStorageBrightness();
  setLocalStorageContrast();

  $(goToMenu).on("click", function () {
    var link = $($(".menu-item-desktop")[0]).find("a");
    link.focus(function () {
      $(link).on("blur", function () {
        link.removeClass("focus");
      });
    });
    link.trigger("focus");
    link.addClass("focus");
  });

  $(".btn-libras").on("click", function () {
    $($("div[vw]")).find("img.access-button").trigger("click");
  });
});
//lateral menu
function openQualityReport() {
  $("body").find(".lateral-menu.report-menu").toggleClass("closed");
}

function openSeller() {
  $("body").find(".lateral-menu.seller-menu").toggleClass("closed");
}

function openNF() {
  $("body").find(".lateral-menu.nf-modal").toggleClass("closed");
}

const segmentMenu = $(".segmentmenu");

$(document).ready(() => {
  if (!segmentMenu) return;
  segmentMenuActive();
});

const segmentMenuActive = () => {
  JSON.stringify(window.location.href).includes("vedacit-pro")
    ? $("nav li:eq(1)").addClass("active")
    : $("nav li").first().addClass("active");
  $("nav li a").click(() => {
    $("nav li.active").removeClass("active");
    let $parent = $(this).parent();
    $parent.addClass("active");
  });
};

$(document).ready(() => {
  var vedacitpro = $("#vedacit-pro");
  if (!vedacitpro.length) return;
  vedacitpro.find(".cardpostblog a").prop({ target: "_blank" });
});
var lat,
  lng = undefined,
  sigla = "",
  estado = "";

function initMap() {
  var input =
    document.getElementById("searchconsult-input") ||
    document.getElementById("searchwheretobuy-input");

  if (!input) {
    return;
  }

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
  autocomplete.addListener("place_changed", function () {
    var place = autocomplete.getPlace();
    lat = place.geometry.location.lat();
    lng = place.geometry.location.lng();
    for (var i in place.address_components) {
      var address = place.address_components[i];
      try {
        if (address.types.includes("administrative_area_level_1")) {
          sigla = address.short_name;
          estado = address.long_name;
        }
      } catch (e) {}
    }
  });
}

var onloadCallback = function () {
  var captchars = $(".form-validation div[data-sitekey]");
  captchars.each(function (i, capcharContainer) {
    var $capcharContainer = $(capcharContainer);

    var sitekey = $capcharContainer.data("sitekey");
    var id = $capcharContainer.attr("id");
    grecaptcha.render(id, {
      sitekey: sitekey,
      callback: function (data) {
        $capcharContainer.siblings(".hiddenRecaptcha").val(data).valid();
      },
    });
  });
};

$(document).ready(function () {
  if ($(".form-validation .g-recaptcha").length > 0) {
    var script = $("<script async defer></script>");
    script.attr(
      "src",
      "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    );

    $(".form-validation .g-recaptcha").each(function (i, capcharContainer) {
      $(capcharContainer).closest("form").append(script);
    });
  }
});
const normalizeStoraged = (s) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function saveProductDataLayer() {
  var product = {
    name: normalizeStoraged($(".detail-products h1").text()),
    sku: $(".detail-products").data("sku"),
    category: normalizeStoraged($(".detail-products").data("category")),
  };
  if (product.name) {
    dataLayer.page.type = "product";
    dataLayer.product = product;
  }
}

function saveSearchDataLayer() {
  $("#searchproducts .suggested-product").on("click", function (event) {
    var search = {};
    search.search = 1;
    search.productClick = 1;
    search.term = $("#search-input").val();
    search.type = "header";
    search.returns = $("#searchproducts .suggested-product").length;
    localStorage.setItem("searchResults", JSON.stringify(search));
  });
}

const saveSearchMobileDataLayer = () => {
  $(".box-mobile-search > #searchproducts-mobile").on("click", () => {
    let search = {};
    search.search = 1;
    search.productClick = 1;
    search.term = $("#search-input-mobile").val();
    search.type = "header";
    search.returns = $("#searchproducts-mobile")[0].children.length;
    localStorage.setItem("searchResults", JSON.stringify(search));
  });
};

const saveSearchDefaultDataLayer = () => {
  let resultPage = dataLayer.page.name === "resultado";
  let hasResults = $(".resultado").css("display", "none")
    ? $(".semresultado")
    : $(".resultado");
  $(window).load(() => {
    let searchTerm = hasResults.find(".result-title > span:first-child").text();
    let search = {};
    search.search = 1;
    search.term = searchTerm !== "" ? searchTerm : "busca em branco";
    search.type = "padrao";
    search.returns = $(".result-title .all-results").text();
    localStorage.setItem("searchResults", JSON.stringify(search));
  });
  return resultPage ? search : null;
};

function saveClickHeaderDataLayer(event) {
  var click = {};
  click.click = 1;
  click.area = "header";
  click.target = normalizeStoraged($(event.target).text());
  localStorage.setItem("clickDataLayer", JSON.stringify(click));
}

function saveClickFooterDataLayer(event) {
  var click = {};
  click.click = 1;
  click.area = "footer";
  click.target = normalizeStoraged($(event.target).text());
  localStorage.setItem("clickDataLayer", JSON.stringify(click));
}

function saveFilterDataLayer() {
  var urlTags = window.location.search;
  var filter = {};
  filter.click = 1;
  filter.selected = $.parseParams(urlTags)["tags"];

  if (filter.selected) {
    dataLayer.filter = filter;
  }
}

function saveNewLetterFormDataLayer() {
  $(".footer-contact button").on("click", function (event) {
    var form = {
      form: 1,
      name: "newsletter",
      status: "sucesso",
    };

    localStorage.setItem("formDataLayer", JSON.stringify(form));
  });
}

function saveFormDataLayer() {
  $(".modal-contact.contact-unsent-mensage-send .menu-close").on(
    "click",
    function (event) {
      var form = {
        form: 1,
        name: document.title,
        status: "fail",
      };
      dataLayer.form = form;
    }
  );

  $(".modal-contact.contact-mensage-sent .protocol").on(
    "DOMSubtreeModified",
    function (event) {
      var form = {
        form: 1,
        name: document.title,
        status: "sucesso",
      };
      dataLayer.form = form;
    }
  );
}

const persistTermsVedablog = () => {
  if (
    dataLayer.page.type === "artigo-vedablog" ||
    dataLayer.page.type === "subcategorias-vedablog"
  ) {
    let articleName = $(".title-header")
      .text()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    let sectionState = [
      $(".veda-breadcrumb > li:nth-child(3)")
        .text()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-"),
      $(".veda-breadcrumb > li:nth-child(4)")
        .text()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-"),
    ];

    dataLayer.vedablog.section = sectionState.map((sectionName) =>
      normalizeStoraged(sectionName)
    );
    dataLayer.vedablog.article !== articleName
      ? (dataLayer.vedablog.article = normalizeStoraged(articleName))
      : null;
  }
};

$("#searchproducts").on("DOMSubtreeModified", function (event) {
  saveSearchDataLayer();
});
$(".navbar-desktop, .navbar-mobile").on("click", function (event) {
  saveClickHeaderDataLayer(event);
});
$(".footer-link-row a, .footer-mobile a").on("click", function (event) {
  saveClickFooterDataLayer(event);
});
$(".btn-libras").on("click", function (e) {
  if (e.target) {
    sessionStorage.setItem("libras", true);
  }
});

try {
  saveFormDataLayer();
} catch (e) {}
try {
  saveProductDataLayer();
} catch (e) {}
try {
  saveNewLetterFormDataLayer();
} catch (e) {}
try {
  saveFilterDataLayer();
} catch (e) {}
try {
  persistTermsVedablog();
} catch (e) {}
try {
  saveSearchMobileDataLayer();
} catch (e) {}
try {
  saveSearchDefaultDataLayer();
} catch (e) {}
