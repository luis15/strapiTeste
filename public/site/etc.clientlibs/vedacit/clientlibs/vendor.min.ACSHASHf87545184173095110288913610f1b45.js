/*
 Bootstrap v4.4.0 (https://getbootstrap.com/)
 Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
 Moment Duration Format v2.2.2
  https://github.com/jsmreese/moment-duration-format
  Date: 2018-02-16

  Duration format plugin function for the Moment.js library
  http://momentjs.com/

  Copyright 2018 John Madhavan-Reese
  Released under the MIT license
*/
(function (e, b) {
  "object" === typeof exports && "undefined" !== typeof module
    ? b(exports, require("jquery"), require("popper.js"))
    : "function" === typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], b)
    : ((e = e || self), b((e.bootstrap = {}), e.jQuery, e.Popper));
})(this, function (e, b, c) {
  function d(b, c) {
    for (var g = 0; g < c.length; g++) {
      var p = c[g];
      p.enumerable = p.enumerable || !1;
      p.configurable = !0;
      "value" in p && (p.writable = !0);
      Object.defineProperty(b, p.key, p);
    }
  }
  function r(b, c, g) {
    c && d(b.prototype, c);
    g && d(b, g);
    return b;
  }
  function l(b, c) {
    var g = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(b);
      c &&
        (p = p.filter(function (f) {
          return Object.getOwnPropertyDescriptor(b, f).enumerable;
        }));
      g.push.apply(g, p);
    }
    return g;
  }
  function k(b) {
    for (var c = 1; c < arguments.length; c++) {
      var g = null != arguments[c] ? arguments[c] : {};
      c % 2
        ? l(Object(g), !0).forEach(function (p) {
            var f = g[p];
            p in b
              ? Object.defineProperty(b, p, {
                  value: f,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (b[p] = f);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(g))
        : l(Object(g)).forEach(function (p) {
            Object.defineProperty(b, p, Object.getOwnPropertyDescriptor(g, p));
          });
    }
    return b;
  }
  function q(b, c) {
    b.prototype = Object.create(c.prototype);
    b.prototype.constructor = b;
    b.__proto__ = c;
  }
  function t(b, c) {
    var g = b.nodeName.toLowerCase();
    if (-1 !== c.indexOf(g))
      return -1 !== C.indexOf(g)
        ? !(!b.nodeValue.match(I) && !b.nodeValue.match(u))
        : !0;
    b = c.filter(function (f) {
      return f instanceof RegExp;
    });
    c = 0;
    for (var p = b.length; c < p; c++) if (g.match(b[c])) return !0;
    return !1;
  }
  function y(b, c, g) {
    if (0 === b.length) return b;
    if (g && "function" === typeof g) return g(b);
    b = new window.DOMParser().parseFromString(b, "text/html");
    var p = Object.keys(c),
      f = [].slice.call(b.body.querySelectorAll("*"));
    g = function (g, b) {
      var J = f[g];
      g = J.nodeName.toLowerCase();
      if (-1 === p.indexOf(J.nodeName.toLowerCase()))
        return J.parentNode.removeChild(J), "continue";
      b = [].slice.call(J.attributes);
      var d = [].concat(c["*"] || [], c[g] || []);
      b.forEach(function (f) {
        t(f, d) || J.removeAttribute(f.nodeName);
      });
    };
    for (var J = 0, d = f.length; J < d; J++) g(J);
    return b.body.innerHTML;
  }
  b = b && b.hasOwnProperty("default") ? b["default"] : b;
  c = c && c.hasOwnProperty("default") ? c["default"] : c;
  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (b) {
      do b += ~~(1e6 * Math.random());
      while (document.getElementById(b));
      return b;
    },
    getSelectorFromElement: function (b) {
      var c = b.getAttribute("data-target");
      (c && "#" !== c) ||
        (c = (b = b.getAttribute("href")) && "#" !== b ? b.trim() : "");
      try {
        return document.querySelector(c) ? c : null;
      } catch (g) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (c) {
      if (!c) return 0;
      var d = b(c).css("transition-duration");
      c = b(c).css("transition-delay");
      var g = parseFloat(d),
        p = parseFloat(c);
      if (!g && !p) return 0;
      d = d.split(",")[0];
      c = c.split(",")[0];
      return 1e3 * (parseFloat(d) + parseFloat(c));
    },
    reflow: function (b) {
      return b.offsetHeight;
    },
    triggerTransitionEnd: function (c) {
      b(c).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return !0;
    },
    isElement: function (b) {
      return (b[0] || b).nodeType;
    },
    typeCheckConfig: function (b, c, g) {
      for (var p in g)
        if (Object.prototype.hasOwnProperty.call(g, p)) {
          var f = g[p],
            J = c[p];
          J =
            J && m.isElement(J)
              ? "element"
              : {}.toString
                  .call(J)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(f).test(J))
            throw Error(
              b.toUpperCase() +
                ": " +
                ('Option "' + p + '" provided type "' + J + '" ') +
                ('but expected type "' + f + '".')
            );
        }
    },
    findShadowRoot: function (b) {
      return document.documentElement.attachShadow
        ? "function" === typeof b.getRootNode
          ? ((b = b.getRootNode()), b instanceof ShadowRoot ? b : null)
          : b instanceof ShadowRoot
          ? b
          : b.parentNode
          ? m.findShadowRoot(b.parentNode)
          : null
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" === typeof b)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var c = b.fn.jquery.split(" ")[0].split(".");
      if (
        (2 > c[0] && 9 > c[1]) ||
        (1 === c[0] && 9 === c[1] && 1 > c[2]) ||
        4 <= c[0]
      )
        throw Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  m.jQueryDetection();
  b.fn.emulateTransitionEnd = function (c) {
    var d = this,
      g = !1;
    b(this).one(m.TRANSITION_END, function () {
      g = !0;
    });
    setTimeout(function () {
      g || m.triggerTransitionEnd(d);
    }, c);
    return this;
  };
  b.event.special[m.TRANSITION_END] = (function () {
    return {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (c) {
        if (b(c.target).is(this))
          return c.handleObj.handler.apply(this, arguments);
      },
    };
  })();
  var v = b.fn.alert,
    O = (function () {
      function c(b) {
        this._element = b;
      }
      var d = c.prototype;
      d.close = function (b) {
        var g = this._element;
        b && (g = this._getRootElement(b));
        this._triggerCloseEvent(g).isDefaultPrevented() ||
          this._removeElement(g);
      };
      d.dispose = function () {
        b.removeData(this._element, "bs.alert");
        this._element = null;
      };
      d._getRootElement = function (g) {
        var p = m.getSelectorFromElement(g),
          f = !1;
        p && (f = document.querySelector(p));
        f || (f = b(g).closest(".alert")[0]);
        return f;
      };
      d._triggerCloseEvent = function (g) {
        var p = b.Event("close.bs.alert");
        b(g).trigger(p);
        return p;
      };
      d._removeElement = function (g) {
        var p = this;
        b(g).removeClass("show");
        if (b(g).hasClass("fade")) {
          var f = m.getTransitionDurationFromElement(g);
          b(g)
            .one(m.TRANSITION_END, function (f) {
              return p._destroyElement(g, f);
            })
            .emulateTransitionEnd(f);
        } else this._destroyElement(g);
      };
      d._destroyElement = function (g) {
        b(g).detach().trigger("closed.bs.alert").remove();
      };
      c._jQueryInterface = function (g) {
        return this.each(function () {
          var p = b(this),
            f = p.data("bs.alert");
          f || ((f = new c(this)), p.data("bs.alert", f));
          if ("close" === g) f[g](this);
        });
      };
      c._handleDismiss = function (b) {
        return function (g) {
          g && g.preventDefault();
          b.close(this);
        };
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
      ]);
      return c;
    })();
  b(document).on(
    "click.bs.alert.data-api",
    { DISMISS: '[data-dismiss\x3d"alert"]' }.DISMISS,
    O._handleDismiss(new O())
  );
  b.fn.alert = O._jQueryInterface;
  b.fn.alert.Constructor = O;
  b.fn.alert.noConflict = function () {
    b.fn.alert = v;
    return O._jQueryInterface;
  };
  var da = b.fn.button,
    S = (function () {
      function c(b) {
        this._element = b;
      }
      var d = c.prototype;
      d.toggle = function () {
        var g = !0,
          p = !0,
          f = b(this._element).closest('[data-toggle\x3d"buttons"]')[0];
        if (f) {
          var c = this._element.querySelector('input:not([type\x3d"hidden"])');
          c &&
            ("radio" === c.type
              ? c.checked && this._element.classList.contains("active")
                ? (g = !1)
                : (p = f.querySelector(".active")) && b(p).removeClass("active")
              : "checkbox" === c.type
              ? "LABEL" === this._element.tagName &&
                c.checked === this._element.classList.contains("active") &&
                (g = !1)
              : (g = !1),
            g &&
              ((c.checked = !this._element.classList.contains("active")),
              b(c).trigger("change")),
            c.focus(),
            (p = !1));
        }
        this._element.hasAttribute("disabled") ||
          this._element.classList.contains("disabled") ||
          (p &&
            this._element.setAttribute(
              "aria-pressed",
              !this._element.classList.contains("active")
            ),
          g && b(this._element).toggleClass("active"));
      };
      d.dispose = function () {
        b.removeData(this._element, "bs.button");
        this._element = null;
      };
      c._jQueryInterface = function (g) {
        return this.each(function () {
          var p = b(this).data("bs.button");
          p || ((p = new c(this)), b(this).data("bs.button", p));
          if ("toggle" === g) p[g]();
        });
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
      ]);
      return c;
    })();
  b(document)
    .on("click.bs.button.data-api", '[data-toggle^\x3d"button"]', function (c) {
      var d = c.target;
      b(d).hasClass("btn") || (d = b(d).closest(".btn")[0]);
      if (!d || d.hasAttribute("disabled") || d.classList.contains("disabled"))
        c.preventDefault();
      else {
        var g = d.querySelector('input:not([type\x3d"hidden"])');
        g && (g.hasAttribute("disabled") || g.classList.contains("disabled"))
          ? c.preventDefault()
          : S._jQueryInterface.call(b(d), "toggle");
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^\x3d"button"]',
      function (c) {
        var d = b(c.target).closest(".btn")[0];
        b(d).toggleClass("focus", /^focus(in)?$/.test(c.type));
      }
    );
  b(window).on("load.bs.button.data-api", function () {
    for (
      var b = [].slice.call(
          document.querySelectorAll('[data-toggle\x3d"buttons"] .btn')
        ),
        c = 0,
        g = b.length;
      c < g;
      c++
    ) {
      var p = b[c],
        f = p.querySelector('input:not([type\x3d"hidden"])');
      f.checked || f.hasAttribute("checked")
        ? p.classList.add("active")
        : p.classList.remove("active");
    }
    b = [].slice.call(document.querySelectorAll('[data-toggle\x3d"button"]'));
    c = 0;
    for (g = b.length; c < g; c++)
      (p = b[c]),
        "true" === p.getAttribute("aria-pressed")
          ? p.classList.add("active")
          : p.classList.remove("active");
  });
  b.fn.button = S._jQueryInterface;
  b.fn.button.Constructor = S;
  b.fn.button.noConflict = function () {
    b.fn.button = da;
    return S._jQueryInterface;
  };
  var ja = b.fn.carousel,
    K = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    oa = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    L = { TOUCH: "touch", PEN: "pen" },
    U = (function () {
      function c(b, c) {
        this._activeElement = this._interval = this._items = null;
        this._isSliding = this._isPaused = !1;
        this.touchTimeout = null;
        this.touchDeltaX = this.touchStartX = 0;
        this._config = this._getConfig(c);
        this._element = b;
        this._indicatorsElement = this._element.querySelector(
          ".carousel-indicators"
        );
        this._touchSupported =
          "ontouchstart" in document.documentElement ||
          0 < navigator.maxTouchPoints;
        this._pointerEvent = !(!window.PointerEvent && !window.MSPointerEvent);
        this._addEventListeners();
      }
      var d = c.prototype;
      d.next = function () {
        this._isSliding || this._slide("next");
      };
      d.nextWhenVisible = function () {
        !document.hidden &&
          b(this._element).is(":visible") &&
          "hidden" !== b(this._element).css("visibility") &&
          this.next();
      };
      d.prev = function () {
        this._isSliding || this._slide("prev");
      };
      d.pause = function (b) {
        b || (this._isPaused = !0);
        this._element.querySelector(
          ".carousel-item-next, .carousel-item-prev"
        ) && (m.triggerTransitionEnd(this._element), this.cycle(!0));
        clearInterval(this._interval);
        this._interval = null;
      };
      d.cycle = function (b) {
        b || (this._isPaused = !1);
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
        this._config.interval &&
          !this._isPaused &&
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          ));
      };
      d.to = function (g) {
        var c = this;
        this._activeElement = this._element.querySelector(
          ".active.carousel-item"
        );
        var f = this._getItemIndex(this._activeElement);
        if (!(g > this._items.length - 1 || 0 > g))
          if (this._isSliding)
            b(this._element).one("slid.bs.carousel", function () {
              return c.to(g);
            });
          else
            f === g
              ? (this.pause(), this.cycle())
              : this._slide(g > f ? "next" : "prev", this._items[g]);
      };
      d.dispose = function () {
        b(this._element).off(".bs.carousel");
        b.removeData(this._element, "bs.carousel");
        this._indicatorsElement =
          this._activeElement =
          this._isSliding =
          this._isPaused =
          this._interval =
          this._element =
          this._config =
          this._items =
            null;
      };
      d._getConfig = function (b) {
        b = k({}, K, {}, b);
        m.typeCheckConfig("carousel", b, oa);
        return b;
      };
      d._handleSwipe = function () {
        var b = Math.abs(this.touchDeltaX);
        40 >= b ||
          ((b /= this.touchDeltaX),
          (this.touchDeltaX = 0),
          0 < b && this.prev(),
          0 > b && this.next());
      };
      d._addEventListeners = function () {
        var g = this;
        if (this._config.keyboard)
          b(this._element).on("keydown.bs.carousel", function (b) {
            return g._keydown(b);
          });
        if ("hover" === this._config.pause)
          b(this._element)
            .on("mouseenter.bs.carousel", function (b) {
              return g.pause(b);
            })
            .on("mouseleave.bs.carousel", function (b) {
              return g.cycle(b);
            });
        this._config.touch && this._addTouchEventListeners();
      };
      d._addTouchEventListeners = function () {
        var g = this;
        if (this._touchSupported) {
          var c = function (f) {
              g._pointerEvent && L[f.originalEvent.pointerType.toUpperCase()]
                ? (g.touchStartX = f.originalEvent.clientX)
                : g._pointerEvent ||
                  (g.touchStartX = f.originalEvent.touches[0].clientX);
            },
            f = function (f) {
              g._pointerEvent &&
                L[f.originalEvent.pointerType.toUpperCase()] &&
                (g.touchDeltaX = f.originalEvent.clientX - g.touchStartX);
              g._handleSwipe();
              "hover" === g._config.pause &&
                (g.pause(),
                g.touchTimeout && clearTimeout(g.touchTimeout),
                (g.touchTimeout = setTimeout(function (f) {
                  return g.cycle(f);
                }, 500 + g._config.interval)));
            };
          b(this._element.querySelectorAll(".carousel-item img")).on(
            "dragstart.bs.carousel",
            function (f) {
              return f.preventDefault();
            }
          );
          this._pointerEvent
            ? (b(this._element).on("pointerdown.bs.carousel", function (f) {
                return c(f);
              }),
              b(this._element).on("pointerup.bs.carousel", function (b) {
                return f(b);
              }),
              this._element.classList.add("pointer-event"))
            : (b(this._element).on("touchstart.bs.carousel", function (f) {
                return c(f);
              }),
              b(this._element).on("touchmove.bs.carousel", function (f) {
                g.touchDeltaX =
                  f.originalEvent.touches && 1 < f.originalEvent.touches.length
                    ? 0
                    : f.originalEvent.touches[0].clientX - g.touchStartX;
              }),
              b(this._element).on("touchend.bs.carousel", function (b) {
                return f(b);
              }));
        }
      };
      d._keydown = function (b) {
        if (!/input|textarea/i.test(b.target.tagName))
          switch (b.which) {
            case 37:
              b.preventDefault();
              this.prev();
              break;
            case 39:
              b.preventDefault(), this.next();
          }
      };
      d._getItemIndex = function (b) {
        this._items =
          b && b.parentNode
            ? [].slice.call(b.parentNode.querySelectorAll(".carousel-item"))
            : [];
        return this._items.indexOf(b);
      };
      d._getItemByDirection = function (b, c) {
        var f = "next" === b,
          g = "prev" === b,
          p = this._getItemIndex(c),
          d = this._items.length - 1;
        if (((g && 0 === p) || (f && p === d)) && !this._config.wrap) return c;
        b = (p + ("prev" === b ? -1 : 1)) % this._items.length;
        return -1 === b ? this._items[this._items.length - 1] : this._items[b];
      };
      d._triggerSlideEvent = function (g, c) {
        var f = this._getItemIndex(g),
          p = this._getItemIndex(
            this._element.querySelector(".active.carousel-item")
          );
        g = b.Event("slide.bs.carousel", {
          relatedTarget: g,
          direction: c,
          from: p,
          to: f,
        });
        b(this._element).trigger(g);
        return g;
      };
      d._setActiveIndicatorElement = function (g) {
        if (this._indicatorsElement) {
          var c = [].slice.call(
            this._indicatorsElement.querySelectorAll(".active")
          );
          b(c).removeClass("active");
          (g = this._indicatorsElement.children[this._getItemIndex(g)]) &&
            b(g).addClass("active");
        }
      };
      d._slide = function (g, c) {
        var f = this,
          p = this._element.querySelector(".active.carousel-item"),
          d = this._getItemIndex(p),
          h = c || (p && this._getItemByDirection(g, p)),
          e = this._getItemIndex(h);
        c = !!this._interval;
        if ("next" === g) {
          var A = "carousel-item-left";
          var l = "carousel-item-next";
          g = "left";
        } else
          (A = "carousel-item-right"),
            (l = "carousel-item-prev"),
            (g = "right");
        if (h && b(h).hasClass("active")) this._isSliding = !1;
        else if (
          !this._triggerSlideEvent(h, g).isDefaultPrevented() &&
          p &&
          h
        ) {
          this._isSliding = !0;
          c && this.pause();
          this._setActiveIndicatorElement(h);
          var k = b.Event("slid.bs.carousel", {
            relatedTarget: h,
            direction: g,
            from: d,
            to: e,
          });
          b(this._element).hasClass("slide")
            ? (b(h).addClass(l),
              m.reflow(h),
              b(p).addClass(A),
              b(h).addClass(A),
              (d = parseInt(h.getAttribute("data-interval"), 10))
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = d))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval),
              (d = m.getTransitionDurationFromElement(p)),
              b(p)
                .one(m.TRANSITION_END, function () {
                  b(h)
                    .removeClass(A + " " + l)
                    .addClass("active");
                  b(p).removeClass("active " + l + " " + A);
                  f._isSliding = !1;
                  setTimeout(function () {
                    return b(f._element).trigger(k);
                  }, 0);
                })
                .emulateTransitionEnd(d))
            : (b(p).removeClass("active"),
              b(h).addClass("active"),
              (this._isSliding = !1),
              b(this._element).trigger(k));
          c && this.cycle();
        }
      };
      c._jQueryInterface = function (g) {
        return this.each(function () {
          var p = b(this).data("bs.carousel"),
            f = k({}, K, {}, b(this).data());
          "object" === typeof g && (f = k({}, f, {}, g));
          var d = "string" === typeof g ? g : f.slide;
          p || ((p = new c(this, f)), b(this).data("bs.carousel", p));
          if ("number" === typeof g) p.to(g);
          else if ("string" === typeof d) {
            if ("undefined" === typeof p[d])
              throw new TypeError('No method named "' + d + '"');
            p[d]();
          } else f.interval && f.ride && (p.pause(), p.cycle());
        });
      };
      c._dataApiClickHandler = function (g) {
        var p = m.getSelectorFromElement(this);
        if (p && (p = b(p)[0]) && b(p).hasClass("carousel")) {
          var f = k({}, b(p).data(), {}, b(this).data()),
            d = this.getAttribute("data-slide-to");
          d && (f.interval = !1);
          c._jQueryInterface.call(b(p), f);
          d && b(p).data("bs.carousel").to(d);
          g.preventDefault();
        }
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "Default",
          get: function () {
            return K;
          },
        },
      ]);
      return c;
    })();
  b(document).on(
    "click.bs.carousel.data-api",
    "[data-slide], [data-slide-to]",
    U._dataApiClickHandler
  );
  b(window).on("load.bs.carousel.data-api", function () {
    for (
      var c = [].slice.call(
          document.querySelectorAll('[data-ride\x3d"carousel"]')
        ),
        d = 0,
        g = c.length;
      d < g;
      d++
    ) {
      var p = b(c[d]);
      U._jQueryInterface.call(p, p.data());
    }
  });
  b.fn.carousel = U._jQueryInterface;
  b.fn.carousel.Constructor = U;
  b.fn.carousel.noConflict = function () {
    b.fn.carousel = ja;
    return U._jQueryInterface;
  };
  var P = b.fn.collapse,
    Z = { toggle: !0, parent: "" },
    aa = { toggle: "boolean", parent: "(string|element)" },
    Q = (function () {
      function c(b, c) {
        this._isTransitioning = !1;
        this._element = b;
        this._config = this._getConfig(c);
        this._triggerArray = [].slice.call(
          document.querySelectorAll(
            '[data-toggle\x3d"collapse"][href\x3d"#' +
              b.id +
              '"],' +
              ('[data-toggle\x3d"collapse"][data-target\x3d"#' + b.id + '"]')
          )
        );
        c = [].slice.call(
          document.querySelectorAll('[data-toggle\x3d"collapse"]')
        );
        for (var f = 0, g = c.length; f < g; f++) {
          var p = c[f],
            d = m.getSelectorFromElement(p),
            h = [].slice
              .call(document.querySelectorAll(d))
              .filter(function (f) {
                return f === b;
              });
          null !== d &&
            0 < h.length &&
            ((this._selector = d), this._triggerArray.push(p));
        }
        this._parent = this._config.parent ? this._getParent() : null;
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        this._config.toggle && this.toggle();
      }
      var d = c.prototype;
      d.toggle = function () {
        b(this._element).hasClass("show") ? this.hide() : this.show();
      };
      d.show = function () {
        var g = this;
        if (!this._isTransitioning && !b(this._element).hasClass("show")) {
          var p;
          if (this._parent) {
            var f = [].slice
              .call(this._parent.querySelectorAll(".show, .collapsing"))
              .filter(function (f) {
                return "string" === typeof g._config.parent
                  ? f.getAttribute("data-parent") === g._config.parent
                  : f.classList.contains("collapse");
              });
            0 === f.length && (f = null);
          }
          if (
            f &&
            (p = b(f).not(this._selector).data("bs.collapse")) &&
            p._isTransitioning
          )
            return;
          var d = b.Event("show.bs.collapse");
          b(this._element).trigger(d);
          if (!d.isDefaultPrevented()) {
            f &&
              (c._jQueryInterface.call(b(f).not(this._selector), "hide"),
              p || b(f).data("bs.collapse", null));
            var h = this._getDimension();
            b(this._element).removeClass("collapse").addClass("collapsing");
            this._element.style[h] = 0;
            this._triggerArray.length &&
              b(this._triggerArray)
                .removeClass("collapsed")
                .attr("aria-expanded", !0);
            this.setTransitioning(!0);
            f = "scroll" + (h[0].toUpperCase() + h.slice(1));
            p = m.getTransitionDurationFromElement(this._element);
            b(this._element)
              .one(m.TRANSITION_END, function () {
                b(g._element)
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .addClass("show");
                g._element.style[h] = "";
                g.setTransitioning(!1);
                b(g._element).trigger("shown.bs.collapse");
              })
              .emulateTransitionEnd(p);
            this._element.style[h] = this._element[f] + "px";
          }
        }
      };
      d.hide = function () {
        var g = this;
        if (!this._isTransitioning && b(this._element).hasClass("show")) {
          var c = b.Event("hide.bs.collapse");
          b(this._element).trigger(c);
          if (!c.isDefaultPrevented()) {
            c = this._getDimension();
            this._element.style[c] =
              this._element.getBoundingClientRect()[c] + "px";
            m.reflow(this._element);
            b(this._element)
              .addClass("collapsing")
              .removeClass("collapse")
              .removeClass("show");
            var f = this._triggerArray.length;
            if (0 < f)
              for (var d = 0; d < f; d++) {
                var h = this._triggerArray[d],
                  e = m.getSelectorFromElement(h);
                null !== e &&
                  (b([].slice.call(document.querySelectorAll(e))).hasClass(
                    "show"
                  ) ||
                    b(h).addClass("collapsed").attr("aria-expanded", !1));
              }
            this.setTransitioning(!0);
            this._element.style[c] = "";
            c = m.getTransitionDurationFromElement(this._element);
            b(this._element)
              .one(m.TRANSITION_END, function () {
                g.setTransitioning(!1);
                b(g._element)
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
              })
              .emulateTransitionEnd(c);
          }
        }
      };
      d.setTransitioning = function (b) {
        this._isTransitioning = b;
      };
      d.dispose = function () {
        b.removeData(this._element, "bs.collapse");
        this._isTransitioning =
          this._triggerArray =
          this._element =
          this._parent =
          this._config =
            null;
      };
      d._getConfig = function (b) {
        b = k({}, Z, {}, b);
        b.toggle = !!b.toggle;
        m.typeCheckConfig("collapse", b, aa);
        return b;
      };
      d._getDimension = function () {
        return b(this._element).hasClass("width") ? "width" : "height";
      };
      d._getParent = function () {
        var g = this;
        if (m.isElement(this._config.parent)) {
          var p = this._config.parent;
          "undefined" !== typeof this._config.parent.jquery &&
            (p = this._config.parent[0]);
        } else p = document.querySelector(this._config.parent);
        var f = [].slice.call(
          p.querySelectorAll(
            '[data-toggle\x3d"collapse"][data-parent\x3d"' +
              this._config.parent +
              '"]'
          )
        );
        b(f).each(function (f, b) {
          g._addAriaAndCollapsedClass(c._getTargetFromElement(b), [b]);
        });
        return p;
      };
      d._addAriaAndCollapsedClass = function (g, c) {
        g = b(g).hasClass("show");
        c.length && b(c).toggleClass("collapsed", !g).attr("aria-expanded", g);
      };
      c._getTargetFromElement = function (b) {
        return (b = m.getSelectorFromElement(b))
          ? document.querySelector(b)
          : null;
      };
      c._jQueryInterface = function (g) {
        return this.each(function () {
          var p = b(this),
            f = p.data("bs.collapse"),
            d = k({}, Z, {}, p.data(), {}, "object" === typeof g && g ? g : {});
          !f && d.toggle && /show|hide/.test(g) && (d.toggle = !1);
          f || ((f = new c(this, d)), p.data("bs.collapse", f));
          if ("string" === typeof g) {
            if ("undefined" === typeof f[g])
              throw new TypeError('No method named "' + g + '"');
            f[g]();
          }
        });
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "Default",
          get: function () {
            return Z;
          },
        },
      ]);
      return c;
    })();
  b(document).on(
    "click.bs.collapse.data-api",
    '[data-toggle\x3d"collapse"]',
    function (c) {
      "A" === c.currentTarget.tagName && c.preventDefault();
      var d = b(this);
      c = m.getSelectorFromElement(this);
      c = [].slice.call(document.querySelectorAll(c));
      b(c).each(function () {
        var g = b(this),
          c = g.data("bs.collapse") ? "toggle" : d.data();
        Q._jQueryInterface.call(g, c);
      });
    }
  );
  b.fn.collapse = Q._jQueryInterface;
  b.fn.collapse.Constructor = Q;
  b.fn.collapse.noConflict = function () {
    b.fn.collapse = P;
    return Q._jQueryInterface;
  };
  var z = b.fn.dropdown,
    V = /38|40|27/,
    ma = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    ba = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    T = (function () {
      function d(b, c) {
        this._element = b;
        this._popper = null;
        this._config = this._getConfig(c);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();
        this._addEventListeners();
      }
      var h = d.prototype;
      h.toggle = function () {
        if (!this._element.disabled && !b(this._element).hasClass("disabled")) {
          var g = b(this._menu).hasClass("show");
          d._clearMenus();
          g || this.show(!0);
        }
      };
      h.show = function (g) {
        void 0 === g && (g = !1);
        if (
          !(
            this._element.disabled ||
            b(this._element).hasClass("disabled") ||
            b(this._menu).hasClass("show")
          )
        ) {
          var p = { relatedTarget: this._element },
            f = b.Event("show.bs.dropdown", p),
            h = d._getParentFromElement(this._element);
          b(h).trigger(f);
          if (!f.isDefaultPrevented()) {
            if (!this._inNavbar && g) {
              if ("undefined" === typeof c)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                );
              g = this._element;
              "parent" === this._config.reference
                ? (g = h)
                : m.isElement(this._config.reference) &&
                  ((g = this._config.reference),
                  "undefined" !== typeof this._config.reference.jquery &&
                    (g = this._config.reference[0]));
              "scrollParent" !== this._config.boundary &&
                b(h).addClass("position-static");
              this._popper = new c(g, this._menu, this._getPopperConfig());
            }
            if (
              "ontouchstart" in document.documentElement &&
              0 === b(h).closest(".navbar-nav").length
            )
              b(document.body).children().on("mouseover", null, b.noop);
            this._element.focus();
            this._element.setAttribute("aria-expanded", !0);
            b(this._menu).toggleClass("show");
            b(h).toggleClass("show").trigger(b.Event("shown.bs.dropdown", p));
          }
        }
      };
      h.hide = function () {
        if (
          !this._element.disabled &&
          !b(this._element).hasClass("disabled") &&
          b(this._menu).hasClass("show")
        ) {
          var g = { relatedTarget: this._element },
            c = b.Event("hide.bs.dropdown", g),
            f = d._getParentFromElement(this._element);
          b(f).trigger(c);
          c.isDefaultPrevented() ||
            (this._popper && this._popper.destroy(),
            b(this._menu).toggleClass("show"),
            b(f).toggleClass("show").trigger(b.Event("hidden.bs.dropdown", g)));
        }
      };
      h.dispose = function () {
        b.removeData(this._element, "bs.dropdown");
        b(this._element).off(".bs.dropdown");
        this._menu = this._element = null;
        null !== this._popper &&
          (this._popper.destroy(), (this._popper = null));
      };
      h.update = function () {
        this._inNavbar = this._detectNavbar();
        null !== this._popper && this._popper.scheduleUpdate();
      };
      h._addEventListeners = function () {
        var g = this;
        b(this._element).on("click.bs.dropdown", function (b) {
          b.preventDefault();
          b.stopPropagation();
          g.toggle();
        });
      };
      h._getConfig = function (g) {
        g = k({}, this.constructor.Default, {}, b(this._element).data(), {}, g);
        m.typeCheckConfig("dropdown", g, this.constructor.DefaultType);
        return g;
      };
      h._getMenuElement = function () {
        if (!this._menu) {
          var b = d._getParentFromElement(this._element);
          b && (this._menu = b.querySelector(".dropdown-menu"));
        }
        return this._menu;
      };
      h._getPlacement = function () {
        var g = b(this._element.parentNode),
          c = "bottom-start";
        g.hasClass("dropup")
          ? ((c = "top-start"),
            b(this._menu).hasClass("dropdown-menu-right") && (c = "top-end"))
          : g.hasClass("dropright")
          ? (c = "right-start")
          : g.hasClass("dropleft")
          ? (c = "left-start")
          : b(this._menu).hasClass("dropdown-menu-right") && (c = "bottom-end");
        return c;
      };
      h._detectNavbar = function () {
        return 0 < b(this._element).closest(".navbar").length;
      };
      h._getOffset = function () {
        var b = this,
          c = {};
        "function" === typeof this._config.offset
          ? (c.fn = function (f) {
              f.offsets = k(
                {},
                f.offsets,
                {},
                b._config.offset(f.offsets, b._element) || {}
              );
              return f;
            })
          : (c.offset = this._config.offset);
        return c;
      };
      h._getPopperConfig = function () {
        var b = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: { enabled: this._config.flip },
            preventOverflow: { boundariesElement: this._config.boundary },
          },
        };
        "static" === this._config.display &&
          (b.modifiers.applyStyle = { enabled: !1 });
        return k({}, b, {}, this._config.popperConfig);
      };
      d._jQueryInterface = function (g) {
        return this.each(function () {
          var c = b(this).data("bs.dropdown"),
            f = "object" === typeof g ? g : null;
          c || ((c = new d(this, f)), b(this).data("bs.dropdown", c));
          if ("string" === typeof g) {
            if ("undefined" === typeof c[g])
              throw new TypeError('No method named "' + g + '"');
            c[g]();
          }
        });
      };
      d._clearMenus = function (g) {
        if (!g || (3 !== g.which && ("keyup" !== g.type || 9 === g.which)))
          for (
            var c = [].slice.call(
                document.querySelectorAll('[data-toggle\x3d"dropdown"]')
              ),
              f = 0,
              h = c.length;
            f < h;
            f++
          ) {
            var e = d._getParentFromElement(c[f]),
              l = b(c[f]).data("bs.dropdown"),
              m = { relatedTarget: c[f] };
            g && "click" === g.type && (m.clickEvent = g);
            if (l) {
              var A = l._menu;
              if (
                b(e).hasClass("show") &&
                !(
                  g &&
                  (("click" === g.type &&
                    /input|textarea/i.test(g.target.tagName)) ||
                    ("keyup" === g.type && 9 === g.which)) &&
                  b.contains(e, g.target)
                )
              ) {
                var k = b.Event("hide.bs.dropdown", m);
                b(e).trigger(k);
                k.isDefaultPrevented() ||
                  ("ontouchstart" in document.documentElement &&
                    b(document.body).children().off("mouseover", null, b.noop),
                  c[f].setAttribute("aria-expanded", "false"),
                  l._popper && l._popper.destroy(),
                  b(A).removeClass("show"),
                  b(e)
                    .removeClass("show")
                    .trigger(b.Event("hidden.bs.dropdown", m)));
              }
            }
          }
      };
      d._getParentFromElement = function (b) {
        var g,
          f = m.getSelectorFromElement(b);
        f && (g = document.querySelector(f));
        return g || b.parentNode;
      };
      d._dataApiKeydownHandler = function (g) {
        if (
          /input|textarea/i.test(g.target.tagName)
            ? !(
                32 === g.which ||
                (27 !== g.which &&
                  ((40 !== g.which && 38 !== g.which) ||
                    b(g.target).closest(".dropdown-menu").length))
              )
            : V.test(g.which)
        )
          if (
            (g.preventDefault(),
            g.stopPropagation(),
            !this.disabled && !b(this).hasClass("disabled"))
          ) {
            var c = d._getParentFromElement(this),
              f = b(c).hasClass("show");
            if (f || 27 !== g.which)
              !f || (f && (27 === g.which || 32 === g.which))
                ? (27 === g.which &&
                    ((g = c.querySelector('[data-toggle\x3d"dropdown"]')),
                    b(g).trigger("focus")),
                  b(this).trigger("click"))
                : ((c = [].slice
                    .call(
                      c.querySelectorAll(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                      )
                    )
                    .filter(function (f) {
                      return b(f).is(":visible");
                    })),
                  0 !== c.length &&
                    ((f = c.indexOf(g.target)),
                    38 === g.which && 0 < f && f--,
                    40 === g.which && f < c.length - 1 && f++,
                    0 > f && (f = 0),
                    c[f].focus()));
          }
      };
      r(d, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "Default",
          get: function () {
            return ma;
          },
        },
        {
          key: "DefaultType",
          get: function () {
            return ba;
          },
        },
      ]);
      return d;
    })();
  b(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle\x3d"dropdown"]',
      T._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      T._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", T._clearMenus)
    .on(
      "click.bs.dropdown.data-api",
      '[data-toggle\x3d"dropdown"]',
      function (c) {
        c.preventDefault();
        c.stopPropagation();
        T._jQueryInterface.call(b(this), "toggle");
      }
    )
    .on("click.bs.dropdown.data-api", ".dropdown form", function (b) {
      b.stopPropagation();
    });
  b.fn.dropdown = T._jQueryInterface;
  b.fn.dropdown.Constructor = T;
  b.fn.dropdown.noConflict = function () {
    b.fn.dropdown = z;
    return T._jQueryInterface;
  };
  var D = b.fn.modal,
    G = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    F = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    R = (function () {
      function c(b, c) {
        this._config = this._getConfig(c);
        this._element = b;
        this._dialog = b.querySelector(".modal-dialog");
        this._backdrop = null;
        this._isTransitioning =
          this._ignoreBackdropClick =
          this._isBodyOverflowing =
          this._isShown =
            !1;
        this._scrollbarWidth = 0;
      }
      var d = c.prototype;
      d.toggle = function (b) {
        return this._isShown ? this.hide() : this.show(b);
      };
      d.show = function (c) {
        var g = this;
        if (!this._isShown && !this._isTransitioning) {
          b(this._element).hasClass("fade") && (this._isTransitioning = !0);
          var f = b.Event("show.bs.modal", { relatedTarget: c });
          b(this._element).trigger(f);
          this._isShown ||
            f.isDefaultPrevented() ||
            ((this._isShown = !0),
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            b(this._element).on(
              "click.dismiss.bs.modal",
              '[data-dismiss\x3d"modal"]',
              function (b) {
                return g.hide(b);
              }
            ),
            b(this._dialog).on("mousedown.dismiss.bs.modal", function () {
              b(g._element).one("mouseup.dismiss.bs.modal", function (f) {
                b(f.target).is(g._element) && (g._ignoreBackdropClick = !0);
              });
            }),
            this._showBackdrop(function () {
              return g._showElement(c);
            }));
        }
      };
      d.hide = function (c) {
        var g = this;
        c && c.preventDefault();
        if (
          this._isShown &&
          !this._isTransitioning &&
          ((c = b.Event("hide.bs.modal")),
          b(this._element).trigger(c),
          this._isShown && !c.isDefaultPrevented())
        ) {
          this._isShown = !1;
          if ((c = b(this._element).hasClass("fade")))
            this._isTransitioning = !0;
          this._setEscapeEvent();
          this._setResizeEvent();
          b(document).off("focusin.bs.modal");
          b(this._element).removeClass("show");
          b(this._element).off("click.dismiss.bs.modal");
          b(this._dialog).off("mousedown.dismiss.bs.modal");
          c
            ? ((c = m.getTransitionDurationFromElement(this._element)),
              b(this._element)
                .one(m.TRANSITION_END, function (b) {
                  return g._hideModal(b);
                })
                .emulateTransitionEnd(c))
            : this._hideModal();
        }
      };
      d.dispose = function () {
        [window, this._element, this._dialog].forEach(function (c) {
          return b(c).off(".bs.modal");
        });
        b(document).off("focusin.bs.modal");
        b.removeData(this._element, "bs.modal");
        this._scrollbarWidth =
          this._isTransitioning =
          this._ignoreBackdropClick =
          this._isBodyOverflowing =
          this._isShown =
          this._backdrop =
          this._dialog =
          this._element =
          this._config =
            null;
      };
      d.handleUpdate = function () {
        this._adjustDialog();
      };
      d._getConfig = function (b) {
        b = k({}, G, {}, b);
        m.typeCheckConfig("modal", b, F);
        return b;
      };
      d._triggerBackdropTransition = function () {
        var c = this;
        if ("static" === this._config.backdrop) {
          var d = b.Event("hidePrevented.bs.modal");
          b(this._element).trigger(d);
          d.defaultPrevented ||
            (this._element.classList.add("modal-static"),
            (d = m.getTransitionDurationFromElement(this._element)),
            b(this._element)
              .one(m.TRANSITION_END, function () {
                c._element.classList.remove("modal-static");
              })
              .emulateTransitionEnd(d),
            this._element.focus());
        } else this.hide();
      };
      d._showElement = function (c) {
        var g = this,
          f = b(this._element).hasClass("fade"),
          d = this._dialog ? this._dialog.querySelector(".modal-body") : null;
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element);
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", !0);
        b(this._dialog).hasClass("modal-dialog-scrollable") && d
          ? (d.scrollTop = 0)
          : (this._element.scrollTop = 0);
        f && m.reflow(this._element);
        b(this._element).addClass("show");
        this._config.focus && this._enforceFocus();
        var h = b.Event("shown.bs.modal", { relatedTarget: c });
        c = function () {
          g._config.focus && g._element.focus();
          g._isTransitioning = !1;
          b(g._element).trigger(h);
        };
        f
          ? ((f = m.getTransitionDurationFromElement(this._dialog)),
            b(this._dialog).one(m.TRANSITION_END, c).emulateTransitionEnd(f))
          : c();
      };
      d._enforceFocus = function () {
        var c = this;
        b(document)
          .off("focusin.bs.modal")
          .on("focusin.bs.modal", function (g) {
            document !== g.target &&
              c._element !== g.target &&
              0 === b(c._element).has(g.target).length &&
              c._element.focus();
          });
      };
      d._setEscapeEvent = function () {
        var c = this;
        if (this._isShown && this._config.keyboard)
          b(this._element).on("keydown.dismiss.bs.modal", function (b) {
            27 === b.which && c._triggerBackdropTransition();
          });
        else this._isShown || b(this._element).off("keydown.dismiss.bs.modal");
      };
      d._setResizeEvent = function () {
        var c = this;
        if (this._isShown)
          b(window).on("resize.bs.modal", function (b) {
            return c.handleUpdate(b);
          });
        else b(window).off("resize.bs.modal");
      };
      d._hideModal = function () {
        var c = this;
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", !0);
        this._element.removeAttribute("aria-modal");
        this._isTransitioning = !1;
        this._showBackdrop(function () {
          b(document.body).removeClass("modal-open");
          c._resetAdjustments();
          c._resetScrollbar();
          b(c._element).trigger("hidden.bs.modal");
        });
      };
      d._removeBackdrop = function () {
        this._backdrop && (b(this._backdrop).remove(), (this._backdrop = null));
      };
      d._showBackdrop = function (c) {
        var g = this,
          f = b(this._element).hasClass("fade") ? "fade" : "";
        if (this._isShown && this._config.backdrop)
          (this._backdrop = document.createElement("div")),
            (this._backdrop.className = "modal-backdrop"),
            f && this._backdrop.classList.add(f),
            b(this._backdrop).appendTo(document.body),
            b(this._element).on("click.dismiss.bs.modal", function (b) {
              g._ignoreBackdropClick
                ? (g._ignoreBackdropClick = !1)
                : b.target === b.currentTarget &&
                  g._triggerBackdropTransition();
            }),
            f && m.reflow(this._backdrop),
            b(this._backdrop).addClass("show"),
            c &&
              (f
                ? ((f = m.getTransitionDurationFromElement(this._backdrop)),
                  b(this._backdrop)
                    .one(m.TRANSITION_END, c)
                    .emulateTransitionEnd(f))
                : c());
        else if (!this._isShown && this._backdrop)
          if (
            (b(this._backdrop).removeClass("show"),
            (f = function () {
              g._removeBackdrop();
              c && c();
            }),
            b(this._element).hasClass("fade"))
          ) {
            var d = m.getTransitionDurationFromElement(this._backdrop);
            b(this._backdrop).one(m.TRANSITION_END, f).emulateTransitionEnd(d);
          } else f();
        else c && c();
      };
      d._adjustDialog = function () {
        var b =
          this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing &&
          b &&
          (this._element.style.paddingLeft = this._scrollbarWidth + "px");
        this._isBodyOverflowing &&
          !b &&
          (this._element.style.paddingRight = this._scrollbarWidth + "px");
      };
      d._resetAdjustments = function () {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
      };
      d._checkScrollbar = function () {
        var b = document.body.getBoundingClientRect();
        this._isBodyOverflowing = b.left + b.right < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };
      d._setScrollbar = function () {
        var c = this;
        if (this._isBodyOverflowing) {
          var d = [].slice.call(
              document.querySelectorAll(
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
              )
            ),
            f = [].slice.call(document.querySelectorAll(".sticky-top"));
          b(d).each(function (f, g) {
            f = g.style.paddingRight;
            var d = b(g).css("padding-right");
            b(g)
              .data("padding-right", f)
              .css("padding-right", parseFloat(d) + c._scrollbarWidth + "px");
          });
          b(f).each(function (f, g) {
            f = g.style.marginRight;
            var d = b(g).css("margin-right");
            b(g)
              .data("margin-right", f)
              .css("margin-right", parseFloat(d) - c._scrollbarWidth + "px");
          });
          d = document.body.style.paddingRight;
          f = b(document.body).css("padding-right");
          b(document.body)
            .data("padding-right", d)
            .css("padding-right", parseFloat(f) + this._scrollbarWidth + "px");
        }
        b(document.body).addClass("modal-open");
      };
      d._resetScrollbar = function () {
        var c = [].slice.call(
          document.querySelectorAll(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
          )
        );
        b(c).each(function (c, f) {
          c = b(f).data("padding-right");
          b(f).removeData("padding-right");
          f.style.paddingRight = c ? c : "";
        });
        c = [].slice.call(document.querySelectorAll(".sticky-top"));
        b(c).each(function (c, f) {
          c = b(f).data("margin-right");
          "undefined" !== typeof c &&
            b(f).css("margin-right", c).removeData("margin-right");
        });
        c = b(document.body).data("padding-right");
        b(document.body).removeData("padding-right");
        document.body.style.paddingRight = c ? c : "";
      };
      d._getScrollbarWidth = function () {
        var b = document.createElement("div");
        b.className = "modal-scrollbar-measure";
        document.body.appendChild(b);
        var c = b.getBoundingClientRect().width - b.clientWidth;
        document.body.removeChild(b);
        return c;
      };
      c._jQueryInterface = function (g, d) {
        return this.each(function () {
          var f = b(this).data("bs.modal"),
            h = k(
              {},
              G,
              {},
              b(this).data(),
              {},
              "object" === typeof g && g ? g : {}
            );
          f || ((f = new c(this, h)), b(this).data("bs.modal", f));
          if ("string" === typeof g) {
            if ("undefined" === typeof f[g])
              throw new TypeError('No method named "' + g + '"');
            f[g](d);
          } else h.show && f.show(d);
        });
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "Default",
          get: function () {
            return G;
          },
        },
      ]);
      return c;
    })();
  b(document).on(
    "click.bs.modal.data-api",
    '[data-toggle\x3d"modal"]',
    function (c) {
      var d = this,
        g,
        h = m.getSelectorFromElement(this);
      h && (g = document.querySelector(h));
      h = b(g).data("bs.modal")
        ? "toggle"
        : k({}, b(g).data(), {}, b(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || c.preventDefault();
      var f = b(g).one("show.bs.modal", function (c) {
        if (!c.isDefaultPrevented())
          f.one("hidden.bs.modal", function () {
            b(d).is(":visible") && d.focus();
          });
      });
      R._jQueryInterface.call(b(g), h, this);
    }
  );
  b.fn.modal = R._jQueryInterface;
  b.fn.modal.Constructor = R;
  b.fn.modal.noConflict = function () {
    b.fn.modal = D;
    return R._jQueryInterface;
  };
  var C = "background cite href itemtype longdesc poster src xlink:href".split(
      " "
    ),
    I = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    u =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
    M = b.fn.tooltip,
    E = /(^|\s)bs-tooltip\S+/g,
    w = ["sanitize", "whiteList", "sanitizeFn"],
    h = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    fa = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    va = {
      animation: !0,
      template:
        '\x3cdiv class\x3d"tooltip" role\x3d"tooltip"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"tooltip-inner"\x3e\x3c/div\x3e\x3c/div\x3e',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    N = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    H = (function () {
      function d(b, d) {
        if ("undefined" === typeof c)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        this._isEnabled = !0;
        this._timeout = 0;
        this._hoverState = "";
        this._activeTrigger = {};
        this._popper = null;
        this.element = b;
        this.config = this._getConfig(d);
        this.tip = null;
        this._setListeners();
      }
      var e = d.prototype;
      e.enable = function () {
        this._isEnabled = !0;
      };
      e.disable = function () {
        this._isEnabled = !1;
      };
      e.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      };
      e.toggle = function (c) {
        if (this._isEnabled)
          if (c) {
            var g = this.constructor.DATA_KEY,
              f = b(c.currentTarget).data(g);
            f ||
              ((f = new this.constructor(
                c.currentTarget,
                this._getDelegateConfig()
              )),
              b(c.currentTarget).data(g, f));
            f._activeTrigger.click = !f._activeTrigger.click;
            f._isWithActiveTrigger() ? f._enter(null, f) : f._leave(null, f);
          } else
            b(this.getTipElement()).hasClass("show")
              ? this._leave(null, this)
              : this._enter(null, this);
      };
      e.dispose = function () {
        clearTimeout(this._timeout);
        b.removeData(this.element, this.constructor.DATA_KEY);
        b(this.element).off(this.constructor.EVENT_KEY);
        b(this.element)
          .closest(".modal")
          .off("hide.bs.modal", this._hideModalHandler);
        this.tip && b(this.tip).remove();
        this._activeTrigger =
          this._hoverState =
          this._timeout =
          this._isEnabled =
            null;
        this._popper && this._popper.destroy();
        this.tip = this.config = this.element = this._popper = null;
      };
      e.show = function () {
        var g = this;
        if ("none" === b(this.element).css("display"))
          throw Error("Please use show on visible elements");
        var d = b.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          b(this.element).trigger(d);
          var f = m.findShadowRoot(this.element);
          f = b.contains(
            null !== f ? f : this.element.ownerDocument.documentElement,
            this.element
          );
          if (!d.isDefaultPrevented() && f) {
            d = this.getTipElement();
            f = m.getUID(this.constructor.NAME);
            d.setAttribute("id", f);
            this.element.setAttribute("aria-describedby", f);
            this.setContent();
            this.config.animation && b(d).addClass("fade");
            f =
              "function" === typeof this.config.placement
                ? this.config.placement.call(this, d, this.element)
                : this.config.placement;
            f = this._getAttachment(f);
            this.addAttachmentClass(f);
            var h = this._getContainer();
            b(d).data(this.constructor.DATA_KEY, this);
            b.contains(this.element.ownerDocument.documentElement, this.tip) ||
              b(d).appendTo(h);
            b(this.element).trigger(this.constructor.Event.INSERTED);
            this._popper = new c(this.element, d, this._getPopperConfig(f));
            b(d).addClass("show");
            if ("ontouchstart" in document.documentElement)
              b(document.body).children().on("mouseover", null, b.noop);
            d = function () {
              g.config.animation && g._fixTransition();
              var f = g._hoverState;
              g._hoverState = null;
              b(g.element).trigger(g.constructor.Event.SHOWN);
              "out" === f && g._leave(null, g);
            };
            b(this.tip).hasClass("fade")
              ? ((f = m.getTransitionDurationFromElement(this.tip)),
                b(this.tip).one(m.TRANSITION_END, d).emulateTransitionEnd(f))
              : d();
          }
        }
      };
      e.hide = function (c) {
        var g = this,
          f = this.getTipElement(),
          d = b.Event(this.constructor.Event.HIDE),
          h = function () {
            "show" !== g._hoverState &&
              f.parentNode &&
              f.parentNode.removeChild(f);
            g._cleanTipClass();
            g.element.removeAttribute("aria-describedby");
            b(g.element).trigger(g.constructor.Event.HIDDEN);
            null !== g._popper && g._popper.destroy();
            c && c();
          };
        b(this.element).trigger(d);
        d.isDefaultPrevented() ||
          (b(f).removeClass("show"),
          "ontouchstart" in document.documentElement &&
            b(document.body).children().off("mouseover", null, b.noop),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          b(this.tip).hasClass("fade")
            ? ((d = m.getTransitionDurationFromElement(f)),
              b(f).one(m.TRANSITION_END, h).emulateTransitionEnd(d))
            : h(),
          (this._hoverState = ""));
      };
      e.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      };
      e.isWithContent = function () {
        return !!this.getTitle();
      };
      e.addAttachmentClass = function (c) {
        b(this.getTipElement()).addClass("bs-tooltip-" + c);
      };
      e.getTipElement = function () {
        return (this.tip = this.tip || b(this.config.template)[0]);
      };
      e.setContent = function () {
        var c = this.getTipElement();
        this.setElementContent(
          b(c.querySelectorAll(".tooltip-inner")),
          this.getTitle()
        );
        b(c).removeClass("fade show");
      };
      e.setElementContent = function (c, d) {
        "object" === typeof d && (d.nodeType || d.jquery)
          ? this.config.html
            ? b(d).parent().is(c) || c.empty().append(d)
            : c.text(b(d).text())
          : this.config.html
          ? (this.config.sanitize &&
              (d = y(d, this.config.whiteList, this.config.sanitizeFn)),
            c.html(d))
          : c.text(d);
      };
      e.getTitle = function () {
        var b = this.element.getAttribute("data-original-title");
        b ||
          (b =
            "function" === typeof this.config.title
              ? this.config.title.call(this.element)
              : this.config.title);
        return b;
      };
      e._getPopperConfig = function (b) {
        var c = this;
        b = {
          placement: b,
          modifiers: {
            offset: this._getOffset(),
            flip: { behavior: this.config.fallbackPlacement },
            arrow: { element: ".arrow" },
            preventOverflow: { boundariesElement: this.config.boundary },
          },
          onCreate: function (b) {
            b.originalPlacement !== b.placement &&
              c._handlePopperPlacementChange(b);
          },
          onUpdate: function (b) {
            return c._handlePopperPlacementChange(b);
          },
        };
        return k({}, b, {}, this.config.popperConfig);
      };
      e._getOffset = function () {
        var b = this,
          c = {};
        "function" === typeof this.config.offset
          ? (c.fn = function (f) {
              f.offsets = k(
                {},
                f.offsets,
                {},
                b.config.offset(f.offsets, b.element) || {}
              );
              return f;
            })
          : (c.offset = this.config.offset);
        return c;
      };
      e._getContainer = function () {
        return !1 === this.config.container
          ? document.body
          : m.isElement(this.config.container)
          ? b(this.config.container)
          : b(document).find(this.config.container);
      };
      e._getAttachment = function (b) {
        return fa[b.toUpperCase()];
      };
      e._setListeners = function () {
        var c = this;
        this.config.trigger.split(" ").forEach(function (d) {
          if ("click" === d)
            b(c.element).on(
              c.constructor.Event.CLICK,
              c.config.selector,
              function (b) {
                return c.toggle(b);
              }
            );
          else if ("manual" !== d) {
            var f =
              "hover" === d
                ? c.constructor.Event.MOUSEENTER
                : c.constructor.Event.FOCUSIN;
            d =
              "hover" === d
                ? c.constructor.Event.MOUSELEAVE
                : c.constructor.Event.FOCUSOUT;
            b(c.element)
              .on(f, c.config.selector, function (b) {
                return c._enter(b);
              })
              .on(d, c.config.selector, function (b) {
                return c._leave(b);
              });
          }
        });
        this._hideModalHandler = function () {
          c.element && c.hide();
        };
        b(this.element)
          .closest(".modal")
          .on("hide.bs.modal", this._hideModalHandler);
        this.config.selector
          ? (this.config = k({}, this.config, {
              trigger: "manual",
              selector: "",
            }))
          : this._fixTitle();
      };
      e._fixTitle = function () {
        var b = typeof this.element.getAttribute("data-original-title");
        if (this.element.getAttribute("title") || "string" !== b)
          this.element.setAttribute(
            "data-original-title",
            this.element.getAttribute("title") || ""
          ),
            this.element.setAttribute("title", "");
      };
      e._enter = function (c, d) {
        var f = this.constructor.DATA_KEY;
        d = d || b(c.currentTarget).data(f);
        d ||
          ((d = new this.constructor(
            c.currentTarget,
            this._getDelegateConfig()
          )),
          b(c.currentTarget).data(f, d));
        c && (d._activeTrigger["focusin" === c.type ? "focus" : "hover"] = !0);
        b(d.getTipElement()).hasClass("show") || "show" === d._hoverState
          ? (d._hoverState = "show")
          : (clearTimeout(d._timeout),
            (d._hoverState = "show"),
            d.config.delay && d.config.delay.show
              ? (d._timeout = setTimeout(function () {
                  "show" === d._hoverState && d.show();
                }, d.config.delay.show))
              : d.show());
      };
      e._leave = function (c, d) {
        var f = this.constructor.DATA_KEY;
        d = d || b(c.currentTarget).data(f);
        d ||
          ((d = new this.constructor(
            c.currentTarget,
            this._getDelegateConfig()
          )),
          b(c.currentTarget).data(f, d));
        c && (d._activeTrigger["focusout" === c.type ? "focus" : "hover"] = !1);
        d._isWithActiveTrigger() ||
          (clearTimeout(d._timeout),
          (d._hoverState = "out"),
          d.config.delay && d.config.delay.hide
            ? (d._timeout = setTimeout(function () {
                "out" === d._hoverState && d.hide();
              }, d.config.delay.hide))
            : d.hide());
      };
      e._isWithActiveTrigger = function () {
        for (var b in this._activeTrigger)
          if (this._activeTrigger[b]) return !0;
        return !1;
      };
      e._getConfig = function (c) {
        var d = b(this.element).data();
        Object.keys(d).forEach(function (b) {
          -1 !== w.indexOf(b) && delete d[b];
        });
        c = k(
          {},
          this.constructor.Default,
          {},
          d,
          {},
          "object" === typeof c && c ? c : {}
        );
        "number" === typeof c.delay &&
          (c.delay = { show: c.delay, hide: c.delay });
        "number" === typeof c.title && (c.title = c.title.toString());
        "number" === typeof c.content && (c.content = c.content.toString());
        m.typeCheckConfig("tooltip", c, this.constructor.DefaultType);
        c.sanitize && (c.template = y(c.template, c.whiteList, c.sanitizeFn));
        return c;
      };
      e._getDelegateConfig = function () {
        var b = {};
        if (this.config)
          for (var c in this.config)
            this.constructor.Default[c] !== this.config[c] &&
              (b[c] = this.config[c]);
        return b;
      };
      e._cleanTipClass = function () {
        var c = b(this.getTipElement()),
          d = c.attr("class").match(E);
        null !== d && d.length && c.removeClass(d.join(""));
      };
      e._handlePopperPlacementChange = function (b) {
        this.tip = b.instance.popper;
        this._cleanTipClass();
        this.addAttachmentClass(this._getAttachment(b.placement));
      };
      e._fixTransition = function () {
        var c = this.getTipElement(),
          d = this.config.animation;
        null === c.getAttribute("x-placement") &&
          (b(c).removeClass("fade"),
          (this.config.animation = !1),
          this.hide(),
          this.show(),
          (this.config.animation = d));
      };
      d._jQueryInterface = function (c) {
        return this.each(function () {
          var g = b(this).data("bs.tooltip"),
            f = "object" === typeof c && c;
          if (g || !/dispose|hide/.test(c))
            if (
              (g || ((g = new d(this, f)), b(this).data("bs.tooltip", g)),
              "string" === typeof c)
            ) {
              if ("undefined" === typeof g[c])
                throw new TypeError('No method named "' + c + '"');
              g[c]();
            }
        });
      };
      r(d, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "Default",
          get: function () {
            return va;
          },
        },
        {
          key: "NAME",
          get: function () {
            return "tooltip";
          },
        },
        {
          key: "DATA_KEY",
          get: function () {
            return "bs.tooltip";
          },
        },
        {
          key: "Event",
          get: function () {
            return N;
          },
        },
        {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.tooltip";
          },
        },
        {
          key: "DefaultType",
          get: function () {
            return h;
          },
        },
      ]);
      return d;
    })();
  b.fn.tooltip = H._jQueryInterface;
  b.fn.tooltip.Constructor = H;
  b.fn.tooltip.noConflict = function () {
    b.fn.tooltip = M;
    return H._jQueryInterface;
  };
  var wa = b.fn.popover,
    Ca = /(^|\s)bs-popover\S+/g,
    La = k({}, H.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '\x3cdiv class\x3d"popover" role\x3d"tooltip"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3ch3 class\x3d"popover-header"\x3e\x3c/h3\x3e\x3cdiv class\x3d"popover-body"\x3e\x3c/div\x3e\x3c/div\x3e',
    }),
    xa = k({}, H.DefaultType, { content: "(string|element|function)" }),
    Ha = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    Da = (function (c) {
      function d() {
        return c.apply(this, arguments) || this;
      }
      q(d, c);
      var g = d.prototype;
      g.isWithContent = function () {
        return this.getTitle() || this._getContent();
      };
      g.addAttachmentClass = function (c) {
        b(this.getTipElement()).addClass("bs-popover-" + c);
      };
      g.getTipElement = function () {
        return (this.tip = this.tip || b(this.config.template)[0]);
      };
      g.setContent = function () {
        var c = b(this.getTipElement());
        this.setElementContent(c.find(".popover-header"), this.getTitle());
        var f = this._getContent();
        "function" === typeof f && (f = f.call(this.element));
        this.setElementContent(c.find(".popover-body"), f);
        c.removeClass("fade show");
      };
      g._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      };
      g._cleanTipClass = function () {
        var c = b(this.getTipElement()),
          f = c.attr("class").match(Ca);
        null !== f && 0 < f.length && c.removeClass(f.join(""));
      };
      d._jQueryInterface = function (c) {
        return this.each(function () {
          var f = b(this).data("bs.popover"),
            g = "object" === typeof c ? c : null;
          if (f || !/dispose|hide/.test(c))
            if (
              (f || ((f = new d(this, g)), b(this).data("bs.popover", f)),
              "string" === typeof c)
            ) {
              if ("undefined" === typeof f[c])
                throw new TypeError('No method named "' + c + '"');
              f[c]();
            }
        });
      };
      r(d, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "Default",
          get: function () {
            return La;
          },
        },
        {
          key: "NAME",
          get: function () {
            return "popover";
          },
        },
        {
          key: "DATA_KEY",
          get: function () {
            return "bs.popover";
          },
        },
        {
          key: "Event",
          get: function () {
            return Ha;
          },
        },
        {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.popover";
          },
        },
        {
          key: "DefaultType",
          get: function () {
            return xa;
          },
        },
      ]);
      return d;
    })(H);
  b.fn.popover = Da._jQueryInterface;
  b.fn.popover.Constructor = Da;
  b.fn.popover.noConflict = function () {
    b.fn.popover = wa;
    return Da._jQueryInterface;
  };
  var ya = b.fn.scrollspy,
    X = { offset: 10, method: "auto", target: "" },
    Ia = { offset: "number", method: "string", target: "(string|element)" },
    Y = (function () {
      function c(c, d) {
        var f = this;
        this._element = c;
        this._scrollElement = "BODY" === c.tagName ? window : c;
        this._config = this._getConfig(d);
        this._selector =
          this._config.target +
          " .nav-link," +
          (this._config.target + " .list-group-item,") +
          (this._config.target + " .dropdown-item");
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        b(this._scrollElement).on("scroll.bs.scrollspy", function (b) {
          return f._process(b);
        });
        this.refresh();
        this._process();
      }
      var d = c.prototype;
      d.refresh = function () {
        var c = this,
          d =
            this._scrollElement === this._scrollElement.window
              ? "offset"
              : "position",
          f = "auto" === this._config.method ? d : this._config.method,
          h = "position" === f ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        [].slice
          .call(document.querySelectorAll(this._selector))
          .map(function (c) {
            var d;
            (c = m.getSelectorFromElement(c)) &&
              (d = document.querySelector(c));
            if (d) {
              var g = d.getBoundingClientRect();
              if (g.width || g.height) return [b(d)[f]().top + h, c];
            }
            return null;
          })
          .filter(function (b) {
            return b;
          })
          .sort(function (b, c) {
            return b[0] - c[0];
          })
          .forEach(function (b) {
            c._offsets.push(b[0]);
            c._targets.push(b[1]);
          });
      };
      d.dispose = function () {
        b.removeData(this._element, "bs.scrollspy");
        b(this._scrollElement).off(".bs.scrollspy");
        this._scrollHeight =
          this._activeTarget =
          this._targets =
          this._offsets =
          this._selector =
          this._config =
          this._scrollElement =
          this._element =
            null;
      };
      d._getConfig = function (c) {
        c = k({}, X, {}, "object" === typeof c && c ? c : {});
        if ("string" !== typeof c.target) {
          var d = b(c.target).attr("id");
          d || ((d = m.getUID("scrollspy")), b(c.target).attr("id", d));
          c.target = "#" + d;
        }
        m.typeCheckConfig("scrollspy", c, Ia);
        return c;
      };
      d._getScrollTop = function () {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      };
      d._getScrollHeight = function () {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      };
      d._getOffsetHeight = function () {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      };
      d._process = function () {
        var b = this._getScrollTop() + this._config.offset,
          c = this._getScrollHeight(),
          f = this._config.offset + c - this._getOffsetHeight();
        this._scrollHeight !== c && this.refresh();
        if (b >= f)
          (b = this._targets[this._targets.length - 1]),
            this._activeTarget !== b && this._activate(b);
        else if (
          this._activeTarget &&
          b < this._offsets[0] &&
          0 < this._offsets[0]
        )
          (this._activeTarget = null), this._clear();
        else
          for (c = this._offsets.length; c--; )
            this._activeTarget !== this._targets[c] &&
              b >= this._offsets[c] &&
              ("undefined" === typeof this._offsets[c + 1] ||
                b < this._offsets[c + 1]) &&
              this._activate(this._targets[c]);
      };
      d._activate = function (c) {
        this._activeTarget = c;
        this._clear();
        var d = this._selector.split(",").map(function (b) {
          return (
            b + '[data-target\x3d"' + c + '"],' + b + '[href\x3d"' + c + '"]'
          );
        });
        d = b([].slice.call(document.querySelectorAll(d.join(","))));
        d.hasClass("dropdown-item")
          ? (d.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
            d.addClass("active"))
          : (d.addClass("active"),
            d
              .parents(".nav, .list-group")
              .prev(".nav-link, .list-group-item")
              .addClass("active"),
            d
              .parents(".nav, .list-group")
              .prev(".nav-item")
              .children(".nav-link")
              .addClass("active"));
        b(this._scrollElement).trigger("activate.bs.scrollspy", {
          relatedTarget: c,
        });
      };
      d._clear = function () {
        [].slice
          .call(document.querySelectorAll(this._selector))
          .filter(function (b) {
            return b.classList.contains("active");
          })
          .forEach(function (b) {
            return b.classList.remove("active");
          });
      };
      c._jQueryInterface = function (d) {
        return this.each(function () {
          var g = b(this).data("bs.scrollspy"),
            f = "object" === typeof d && d;
          g || ((g = new c(this, f)), b(this).data("bs.scrollspy", g));
          if ("string" === typeof d) {
            if ("undefined" === typeof g[d])
              throw new TypeError('No method named "' + d + '"');
            g[d]();
          }
        });
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "Default",
          get: function () {
            return X;
          },
        },
      ]);
      return c;
    })();
  b(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var c = [].slice.call(
          document.querySelectorAll('[data-spy\x3d"scroll"]')
        ),
        d = c.length;
      d--;

    ) {
      var g = b(c[d]);
      Y._jQueryInterface.call(g, g.data());
    }
  });
  b.fn.scrollspy = Y._jQueryInterface;
  b.fn.scrollspy.Constructor = Y;
  b.fn.scrollspy.noConflict = function () {
    b.fn.scrollspy = ya;
    return Y._jQueryInterface;
  };
  var qa = b.fn.tab,
    pa = (function () {
      function c(b) {
        this._element = b;
      }
      var d = c.prototype;
      d.show = function () {
        var c = this;
        if (
          !(
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              b(this._element).hasClass("active")) ||
            b(this._element).hasClass("disabled")
          )
        ) {
          var d,
            f = b(this._element).closest(".nav, .list-group")[0],
            h = m.getSelectorFromElement(this._element);
          if (f) {
            var e =
              "UL" === f.nodeName || "OL" === f.nodeName
                ? "\x3e li \x3e .active"
                : ".active";
            var l = b.makeArray(b(f).find(e));
            l = l[l.length - 1];
          }
          e = b.Event("hide.bs.tab", { relatedTarget: this._element });
          var k = b.Event("show.bs.tab", { relatedTarget: l });
          l && b(l).trigger(e);
          b(this._element).trigger(k);
          k.isDefaultPrevented() ||
            e.isDefaultPrevented() ||
            (h && (d = document.querySelector(h)),
            this._activate(this._element, f),
            (f = function () {
              var f = b.Event("hidden.bs.tab", { relatedTarget: c._element }),
                d = b.Event("shown.bs.tab", { relatedTarget: l });
              b(l).trigger(f);
              b(c._element).trigger(d);
            }),
            d ? this._activate(d, d.parentNode, f) : f());
        }
      };
      d.dispose = function () {
        b.removeData(this._element, "bs.tab");
        this._element = null;
      };
      d._activate = function (c, d, f) {
        var g = this,
          h = (
            !d || ("UL" !== d.nodeName && "OL" !== d.nodeName)
              ? b(d).children(".active")
              : b(d).find("\x3e li \x3e .active")
          )[0],
          e = f && h && b(h).hasClass("fade");
        d = function () {
          return g._transitionComplete(c, h, f);
        };
        h && e
          ? ((e = m.getTransitionDurationFromElement(h)),
            b(h)
              .removeClass("show")
              .one(m.TRANSITION_END, d)
              .emulateTransitionEnd(e))
          : d();
      };
      d._transitionComplete = function (c, d, f) {
        if (d) {
          b(d).removeClass("active");
          var g = b(d.parentNode).find("\x3e .dropdown-menu .active")[0];
          g && b(g).removeClass("active");
          "tab" === d.getAttribute("role") &&
            d.setAttribute("aria-selected", !1);
        }
        b(c).addClass("active");
        "tab" === c.getAttribute("role") && c.setAttribute("aria-selected", !0);
        m.reflow(c);
        c.classList.contains("fade") && c.classList.add("show");
        if (c.parentNode && b(c.parentNode).hasClass("dropdown-menu")) {
          if ((d = b(c).closest(".dropdown")[0]))
            (d = [].slice.call(d.querySelectorAll(".dropdown-toggle"))),
              b(d).addClass("active");
          c.setAttribute("aria-expanded", !0);
        }
        f && f();
      };
      c._jQueryInterface = function (d) {
        return this.each(function () {
          var g = b(this),
            f = g.data("bs.tab");
          f || ((f = new c(this)), g.data("bs.tab", f));
          if ("string" === typeof d) {
            if ("undefined" === typeof f[d])
              throw new TypeError('No method named "' + d + '"');
            f[d]();
          }
        });
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
      ]);
      return c;
    })();
  b(document).on(
    "click.bs.tab.data-api",
    '[data-toggle\x3d"tab"], [data-toggle\x3d"pill"], [data-toggle\x3d"list"]',
    function (c) {
      c.preventDefault();
      pa._jQueryInterface.call(b(this), "show");
    }
  );
  b.fn.tab = pa._jQueryInterface;
  b.fn.tab.Constructor = pa;
  b.fn.tab.noConflict = function () {
    b.fn.tab = qa;
    return pa._jQueryInterface;
  };
  var Ea = b.fn.toast,
    Aa = { animation: "boolean", autohide: "boolean", delay: "number" },
    ra = { animation: !0, autohide: !0, delay: 500 },
    ha = (function () {
      function c(c, b) {
        this._element = c;
        this._config = this._getConfig(b);
        this._timeout = null;
        this._setListeners();
      }
      var d = c.prototype;
      d.show = function () {
        var c = this,
          d = b.Event("show.bs.toast");
        b(this._element).trigger(d);
        if (!d.isDefaultPrevented())
          if (
            (this._config.animation && this._element.classList.add("fade"),
            (d = function () {
              c._element.classList.remove("showing");
              c._element.classList.add("show");
              b(c._element).trigger("shown.bs.toast");
              c._config.autohide &&
                (c._timeout = setTimeout(function () {
                  c.hide();
                }, c._config.delay));
            }),
            this._element.classList.remove("hide"),
            m.reflow(this._element),
            this._element.classList.add("showing"),
            this._config.animation)
          ) {
            var f = m.getTransitionDurationFromElement(this._element);
            b(this._element).one(m.TRANSITION_END, d).emulateTransitionEnd(f);
          } else d();
      };
      d.hide = function () {
        if (this._element.classList.contains("show")) {
          var c = b.Event("hide.bs.toast");
          b(this._element).trigger(c);
          c.isDefaultPrevented() || this._close();
        }
      };
      d.dispose = function () {
        clearTimeout(this._timeout);
        this._timeout = null;
        this._element.classList.contains("show") &&
          this._element.classList.remove("show");
        b(this._element).off("click.dismiss.bs.toast");
        b.removeData(this._element, "bs.toast");
        this._config = this._element = null;
      };
      d._getConfig = function (c) {
        c = k(
          {},
          ra,
          {},
          b(this._element).data(),
          {},
          "object" === typeof c && c ? c : {}
        );
        m.typeCheckConfig("toast", c, this.constructor.DefaultType);
        return c;
      };
      d._setListeners = function () {
        var c = this;
        b(this._element).on(
          "click.dismiss.bs.toast",
          '[data-dismiss\x3d"toast"]',
          function () {
            return c.hide();
          }
        );
      };
      d._close = function () {
        var c = this,
          d = function () {
            c._element.classList.add("hide");
            b(c._element).trigger("hidden.bs.toast");
          };
        this._element.classList.remove("show");
        if (this._config.animation) {
          var f = m.getTransitionDurationFromElement(this._element);
          b(this._element).one(m.TRANSITION_END, d).emulateTransitionEnd(f);
        } else d();
      };
      c._jQueryInterface = function (d) {
        return this.each(function () {
          var h = b(this),
            f = h.data("bs.toast"),
            g = "object" === typeof d && d;
          f || ((f = new c(this, g)), h.data("bs.toast", f));
          if ("string" === typeof d) {
            if ("undefined" === typeof f[d])
              throw new TypeError('No method named "' + d + '"');
            f[d](this);
          }
        });
      };
      r(c, null, [
        {
          key: "VERSION",
          get: function () {
            return "4.4.0";
          },
        },
        {
          key: "DefaultType",
          get: function () {
            return Aa;
          },
        },
        {
          key: "Default",
          get: function () {
            return ra;
          },
        },
      ]);
      return c;
    })();
  b.fn.toast = ha._jQueryInterface;
  b.fn.toast.Constructor = ha;
  b.fn.toast.noConflict = function () {
    b.fn.toast = Ea;
    return ha._jQueryInterface;
  };
  e.Alert = O;
  e.Button = S;
  e.Carousel = U;
  e.Collapse = Q;
  e.Dropdown = T;
  e.Modal = R;
  e.Popover = Da;
  e.Scrollspy = Y;
  e.Tab = pa;
  e.Toast = ha;
  e.Tooltip = H;
  e.Util = m;
  Object.defineProperty(e, "__esModule", { value: !0 });
});
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "undefined" != typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  var b = window.Slick || {};
  (b = (function () {
    var c = 0;
    return function (b, r) {
      this.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(b),
        appendDots: e(b),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '\x3cbutton class\x3d"slick-prev" aria-label\x3d"Previous" type\x3d"button"\x3ePrevious\x3c/button\x3e',
        nextArrow:
          '\x3cbutton class\x3d"slick-next" aria-label\x3d"Next" type\x3d"button"\x3eNext\x3c/button\x3e',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (c, b) {
          return e('\x3cbutton type\x3d"button" /\x3e').text(b + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      };
      this.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1,
      };
      e.extend(this, this.initials);
      this.animProp = this.animType = this.activeBreakpoint = null;
      this.breakpoints = [];
      this.breakpointSettings = [];
      this.interrupted = this.focussed = this.cssTransitions = !1;
      this.hidden = "hidden";
      this.paused = !0;
      this.respondTo = this.positionProp = null;
      this.rowCount = 1;
      this.shouldClick = !0;
      this.$slider = e(b);
      this.transitionType = this.transformType = this.$slidesCache = null;
      this.visibilityChange = "visibilitychange";
      this.windowWidth = 0;
      this.windowTimer = null;
      b = e(b).data("slick") || {};
      this.options = e.extend({}, this.defaults, r, b);
      this.currentSlide = this.options.initialSlide;
      this.originalSettings = this.options;
      void 0 !== document.mozHidden
        ? ((this.hidden = "mozHidden"),
          (this.visibilityChange = "mozvisibilitychange"))
        : void 0 !== document.webkitHidden &&
          ((this.hidden = "webkitHidden"),
          (this.visibilityChange = "webkitvisibilitychange"));
      this.autoPlay = e.proxy(this.autoPlay, this);
      this.autoPlayClear = e.proxy(this.autoPlayClear, this);
      this.autoPlayIterator = e.proxy(this.autoPlayIterator, this);
      this.changeSlide = e.proxy(this.changeSlide, this);
      this.clickHandler = e.proxy(this.clickHandler, this);
      this.selectHandler = e.proxy(this.selectHandler, this);
      this.setPosition = e.proxy(this.setPosition, this);
      this.swipeHandler = e.proxy(this.swipeHandler, this);
      this.dragHandler = e.proxy(this.dragHandler, this);
      this.keyHandler = e.proxy(this.keyHandler, this);
      this.instanceUid = c++;
      this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      this.registerBreakpoints();
      this.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  };
  b.prototype.addSlide = b.prototype.slickAdd = function (c, b, r) {
    if ("boolean" == typeof b) (r = b), (b = null);
    else if (0 > b || b >= this.slideCount) return !1;
    this.unload();
    "number" == typeof b
      ? 0 === b && 0 === this.$slides.length
        ? e(c).appendTo(this.$slideTrack)
        : r
        ? e(c).insertBefore(this.$slides.eq(b))
        : e(c).insertAfter(this.$slides.eq(b))
      : !0 === r
      ? e(c).prependTo(this.$slideTrack)
      : e(c).appendTo(this.$slideTrack);
    this.$slides = this.$slideTrack.children(this.options.slide);
    this.$slideTrack.children(this.options.slide).detach();
    this.$slideTrack.append(this.$slides);
    this.$slides.each(function (c, b) {
      e(b).attr("data-slick-index", c);
    });
    this.$slidesCache = this.$slides;
    this.reinit();
  };
  b.prototype.animateHeight = function () {
    if (
      1 === this.options.slidesToShow &&
      !0 === this.options.adaptiveHeight &&
      !1 === this.options.vertical
    ) {
      var c = this.$slides.eq(this.currentSlide).outerHeight(!0);
      this.$list.animate({ height: c }, this.options.speed);
    }
  };
  b.prototype.animateSlide = function (c, b) {
    var d = {},
      l = this;
    l.animateHeight();
    !0 === l.options.rtl && !1 === l.options.vertical && (c = -c);
    !1 === l.transformsEnabled
      ? !1 === l.options.vertical
        ? l.$slideTrack.animate(
            { left: c },
            l.options.speed,
            l.options.easing,
            b
          )
        : l.$slideTrack.animate(
            { top: c },
            l.options.speed,
            l.options.easing,
            b
          )
      : !1 === l.cssTransitions
      ? (!0 === l.options.rtl && (l.currentLeft = -l.currentLeft),
        e({ animStart: l.currentLeft }).animate(
          { animStart: c },
          {
            duration: l.options.speed,
            easing: l.options.easing,
            step: function (c) {
              c = Math.ceil(c);
              !1 === l.options.vertical
                ? ((d[l.animType] = "translate(" + c + "px, 0px)"),
                  l.$slideTrack.css(d))
                : ((d[l.animType] = "translate(0px," + c + "px)"),
                  l.$slideTrack.css(d));
            },
            complete: function () {
              b && b.call();
            },
          }
        ))
      : (l.applyTransition(),
        (c = Math.ceil(c)),
        !1 === l.options.vertical
          ? (d[l.animType] = "translate3d(" + c + "px, 0px, 0px)")
          : (d[l.animType] = "translate3d(0px," + c + "px, 0px)"),
        l.$slideTrack.css(d),
        b &&
          setTimeout(function () {
            l.disableTransition();
            b.call();
          }, l.options.speed));
  };
  b.prototype.getNavTarget = function () {
    var c = this.options.asNavFor;
    return c && null !== c && (c = e(c).not(this.$slider)), c;
  };
  b.prototype.asNavFor = function (c) {
    var b = this.getNavTarget();
    null !== b &&
      "object" == typeof b &&
      b.each(function () {
        var b = e(this).slick("getSlick");
        b.unslicked || b.slideHandler(c, !0);
      });
  };
  b.prototype.applyTransition = function (c) {
    var b = {};
    !1 === this.options.fade
      ? (b[this.transitionType] =
          this.transformType +
          " " +
          this.options.speed +
          "ms " +
          this.options.cssEase)
      : (b[this.transitionType] =
          "opacity " + this.options.speed + "ms " + this.options.cssEase);
    !1 === this.options.fade
      ? this.$slideTrack.css(b)
      : this.$slides.eq(c).css(b);
  };
  b.prototype.autoPlay = function () {
    this.autoPlayClear();
    this.slideCount > this.options.slidesToShow &&
      (this.autoPlayTimer = setInterval(
        this.autoPlayIterator,
        this.options.autoplaySpeed
      ));
  };
  b.prototype.autoPlayClear = function () {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
  };
  b.prototype.autoPlayIterator = function () {
    var b = this.currentSlide + this.options.slidesToScroll;
    this.paused ||
      this.interrupted ||
      this.focussed ||
      (!1 === this.options.infinite &&
        (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1
          ? (this.direction = 0)
          : 0 === this.direction &&
            ((b = this.currentSlide - this.options.slidesToScroll),
            0 == this.currentSlide - 1 && (this.direction = 1))),
      this.slideHandler(b));
  };
  b.prototype.buildArrows = function () {
    !0 === this.options.arrows &&
      ((this.$prevArrow = e(this.options.prevArrow).addClass("slick-arrow")),
      (this.$nextArrow = e(this.options.nextArrow).addClass("slick-arrow")),
      this.slideCount > this.options.slidesToShow
        ? (this.$prevArrow
            .removeClass("slick-hidden")
            .removeAttr("aria-hidden tabindex"),
          this.$nextArrow
            .removeClass("slick-hidden")
            .removeAttr("aria-hidden tabindex"),
          this.htmlExpr.test(this.options.prevArrow) &&
            this.$prevArrow.prependTo(this.options.appendArrows),
          this.htmlExpr.test(this.options.nextArrow) &&
            this.$nextArrow.appendTo(this.options.appendArrows),
          !0 !== this.options.infinite &&
            this.$prevArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"))
        : this.$prevArrow
            .add(this.$nextArrow)
            .addClass("slick-hidden")
            .attr({ "aria-disabled": "true", tabindex: "-1" }));
  };
  b.prototype.buildDots = function () {
    var b;
    if (!0 === this.options.dots) {
      this.$slider.addClass("slick-dotted");
      var d = e("\x3cul /\x3e").addClass(this.options.dotsClass);
      for (b = 0; b <= this.getDotCount(); b += 1)
        d.append(
          e("\x3cli /\x3e").append(
            this.options.customPaging.call(this, this, b)
          )
        );
      this.$dots = d.appendTo(this.options.appendDots);
      this.$dots.find("li").first().addClass("slick-active");
    }
  };
  b.prototype.buildOut = function () {
    this.$slides = this.$slider
      .children(this.options.slide + ":not(.slick-cloned)")
      .addClass("slick-slide");
    this.slideCount = this.$slides.length;
    this.$slides.each(function (b, d) {
      e(d)
        .attr("data-slick-index", b)
        .data("originalStyling", e(d).attr("style") || "");
    });
    this.$slider.addClass("slick-slider");
    this.$slideTrack =
      0 === this.slideCount
        ? e('\x3cdiv class\x3d"slick-track"/\x3e').appendTo(this.$slider)
        : this.$slides.wrapAll('\x3cdiv class\x3d"slick-track"/\x3e').parent();
    this.$list = this.$slideTrack
      .wrap('\x3cdiv class\x3d"slick-list"/\x3e')
      .parent();
    this.$slideTrack.css("opacity", 0);
    (!0 !== this.options.centerMode && !0 !== this.options.swipeToSlide) ||
      (this.options.slidesToScroll = 1);
    e("img[data-lazy]", this.$slider).not("[src]").addClass("slick-loading");
    this.setupInfinite();
    this.buildArrows();
    this.buildDots();
    this.updateDots();
    this.setSlideClasses(
      "number" == typeof this.currentSlide ? this.currentSlide : 0
    );
    !0 === this.options.draggable && this.$list.addClass("draggable");
  };
  b.prototype.buildRows = function () {
    var b, d, e, l, k;
    if (
      ((l = document.createDocumentFragment()),
      (k = this.$slider.children()),
      1 < this.options.rows)
    ) {
      var q = this.options.slidesPerRow * this.options.rows;
      var t = Math.ceil(k.length / q);
      for (b = 0; b < t; b++) {
        var y = document.createElement("div");
        for (d = 0; d < this.options.rows; d++) {
          var m = document.createElement("div");
          for (e = 0; e < this.options.slidesPerRow; e++) {
            var v = b * q + (d * this.options.slidesPerRow + e);
            k.get(v) && m.appendChild(k.get(v));
          }
          y.appendChild(m);
        }
        l.appendChild(y);
      }
      this.$slider.empty().append(l);
      this.$slider
        .children()
        .children()
        .children()
        .css({
          width: 100 / this.options.slidesPerRow + "%",
          display: "inline-block",
        });
    }
  };
  b.prototype.checkResponsive = function (b, d) {
    var c,
      l,
      k = !1;
    var q = this.$slider.width();
    var t = window.innerWidth || e(window).width();
    if (
      ("window" === this.respondTo
        ? (l = t)
        : "slider" === this.respondTo
        ? (l = q)
        : "min" === this.respondTo && (l = Math.min(t, q)),
      this.options.responsive &&
        this.options.responsive.length &&
        null !== this.options.responsive)
    ) {
      q = null;
      for (c in this.breakpoints)
        this.breakpoints.hasOwnProperty(c) &&
          (!1 === this.originalSettings.mobileFirst
            ? l < this.breakpoints[c] && (q = this.breakpoints[c])
            : l > this.breakpoints[c] && (q = this.breakpoints[c]));
      null !== q
        ? null !== this.activeBreakpoint
          ? (q !== this.activeBreakpoint || d) &&
            ((this.activeBreakpoint = q),
            "unslick" === this.breakpointSettings[q]
              ? this.unslick(q)
              : ((this.options = e.extend(
                  {},
                  this.originalSettings,
                  this.breakpointSettings[q]
                )),
                !0 === b && (this.currentSlide = this.options.initialSlide),
                this.refresh(b)),
            (k = q))
          : ((this.activeBreakpoint = q),
            "unslick" === this.breakpointSettings[q]
              ? this.unslick(q)
              : ((this.options = e.extend(
                  {},
                  this.originalSettings,
                  this.breakpointSettings[q]
                )),
                !0 === b && (this.currentSlide = this.options.initialSlide),
                this.refresh(b)),
            (k = q))
        : null !== this.activeBreakpoint &&
          ((this.activeBreakpoint = null),
          (this.options = this.originalSettings),
          !0 === b && (this.currentSlide = this.options.initialSlide),
          this.refresh(b),
          (k = q));
      b || !1 === k || this.$slider.trigger("breakpoint", [this, k]);
    }
  };
  b.prototype.changeSlide = function (b, d) {
    var c, l;
    var k = e(b.currentTarget);
    switch (
      (k.is("a") && b.preventDefault(),
      k.is("li") || (k = k.closest("li")),
      (l = 0 != this.slideCount % this.options.slidesToScroll),
      (c = l
        ? 0
        : (this.slideCount - this.currentSlide) % this.options.slidesToScroll),
      b.data.message)
    ) {
      case "previous":
        k =
          0 === c ? this.options.slidesToScroll : this.options.slidesToShow - c;
        this.slideCount > this.options.slidesToShow &&
          this.slideHandler(this.currentSlide - k, !1, d);
        break;
      case "next":
        k = 0 === c ? this.options.slidesToScroll : c;
        this.slideCount > this.options.slidesToShow &&
          this.slideHandler(this.currentSlide + k, !1, d);
        break;
      case "index":
        (b =
          0 === b.data.index
            ? 0
            : b.data.index || k.index() * this.options.slidesToScroll),
          this.slideHandler(this.checkNavigable(b), !1, d),
          k.children().trigger("focus");
    }
  };
  b.prototype.checkNavigable = function (b) {
    var c, e;
    if (((c = this.getNavigableIndexes()), (e = 0), b > c[c.length - 1]))
      b = c[c.length - 1];
    else
      for (var l in c) {
        if (b < c[l]) {
          b = e;
          break;
        }
        e = c[l];
      }
    return b;
  };
  b.prototype.cleanUpEvents = function () {
    this.options.dots &&
      null !== this.$dots &&
      (e("li", this.$dots)
        .off("click.slick", this.changeSlide)
        .off("mouseenter.slick", e.proxy(this.interrupt, this, !0))
        .off("mouseleave.slick", e.proxy(this.interrupt, this, !1)),
      !0 === this.options.accessibility &&
        this.$dots.off("keydown.slick", this.keyHandler));
    this.$slider.off("focus.slick blur.slick");
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide),
      this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide),
      !0 === this.options.accessibility &&
        (this.$prevArrow &&
          this.$prevArrow.off("keydown.slick", this.keyHandler),
        this.$nextArrow &&
          this.$nextArrow.off("keydown.slick", this.keyHandler)));
    this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler);
    this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler);
    this.$list.off("touchend.slick mouseup.slick", this.swipeHandler);
    this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler);
    this.$list.off("click.slick", this.clickHandler);
    e(document).off(this.visibilityChange, this.visibility);
    this.cleanUpSlideEvents();
    !0 === this.options.accessibility &&
      this.$list.off("keydown.slick", this.keyHandler);
    !0 === this.options.focusOnSelect &&
      e(this.$slideTrack).children().off("click.slick", this.selectHandler);
    e(window).off(
      "orientationchange.slick.slick-" + this.instanceUid,
      this.orientationChange
    );
    e(window).off("resize.slick.slick-" + this.instanceUid, this.resize);
    e("[draggable!\x3dtrue]", this.$slideTrack).off(
      "dragstart",
      this.preventDefault
    );
    e(window).off("load.slick.slick-" + this.instanceUid, this.setPosition);
  };
  b.prototype.cleanUpSlideEvents = function () {
    this.$list.off("mouseenter.slick", e.proxy(this.interrupt, this, !0));
    this.$list.off("mouseleave.slick", e.proxy(this.interrupt, this, !1));
  };
  b.prototype.cleanUpRows = function () {
    var b;
    1 < this.options.rows &&
      ((b = this.$slides.children().children()).removeAttr("style"),
      this.$slider.empty().append(b));
  };
  b.prototype.clickHandler = function (b) {
    !1 === this.shouldClick &&
      (b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault());
  };
  b.prototype.destroy = function (b) {
    this.autoPlayClear();
    this.touchObject = {};
    this.cleanUpEvents();
    e(".slick-cloned", this.$slider).detach();
    this.$dots && this.$dots.remove();
    this.$prevArrow &&
      this.$prevArrow.length &&
      (this.$prevArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", ""),
      this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove());
    this.$nextArrow &&
      this.$nextArrow.length &&
      (this.$nextArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", ""),
      this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove());
    this.$slides &&
      (this.$slides
        .removeClass(
          "slick-slide slick-active slick-center slick-visible slick-current"
        )
        .removeAttr("aria-hidden")
        .removeAttr("data-slick-index")
        .each(function () {
          e(this).attr("style", e(this).data("originalStyling"));
        }),
      this.$slideTrack.children(this.options.slide).detach(),
      this.$slideTrack.detach(),
      this.$list.detach(),
      this.$slider.append(this.$slides));
    this.cleanUpRows();
    this.$slider.removeClass("slick-slider");
    this.$slider.removeClass("slick-initialized");
    this.$slider.removeClass("slick-dotted");
    this.unslicked = !0;
    b || this.$slider.trigger("destroy", [this]);
  };
  b.prototype.disableTransition = function (b) {
    var c = {};
    c[this.transitionType] = "";
    !1 === this.options.fade
      ? this.$slideTrack.css(c)
      : this.$slides.eq(b).css(c);
  };
  b.prototype.fadeSlide = function (b, d) {
    var c = this;
    !1 === c.cssTransitions
      ? (c.$slides.eq(b).css({ zIndex: c.options.zIndex }),
        c.$slides
          .eq(b)
          .animate({ opacity: 1 }, c.options.speed, c.options.easing, d))
      : (c.applyTransition(b),
        c.$slides.eq(b).css({ opacity: 1, zIndex: c.options.zIndex }),
        d &&
          setTimeout(function () {
            c.disableTransition(b);
            d.call();
          }, c.options.speed));
  };
  b.prototype.fadeSlideOut = function (b) {
    !1 === this.cssTransitions
      ? this.$slides
          .eq(b)
          .animate(
            { opacity: 0, zIndex: this.options.zIndex - 2 },
            this.options.speed,
            this.options.easing
          )
      : (this.applyTransition(b),
        this.$slides
          .eq(b)
          .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
  };
  b.prototype.filterSlides = b.prototype.slickFilter = function (b) {
    null !== b &&
      ((this.$slidesCache = this.$slides),
      this.unload(),
      this.$slideTrack.children(this.options.slide).detach(),
      this.$slidesCache.filter(b).appendTo(this.$slideTrack),
      this.reinit());
  };
  b.prototype.focusHandler = function () {
    var b = this;
    b.$slider
      .off("focus.slick blur.slick")
      .on("focus.slick blur.slick", "*", function (c) {
        c.stopImmediatePropagation();
        var d = e(this);
        setTimeout(function () {
          b.options.pauseOnFocus &&
            ((b.focussed = d.is(":focus")), b.autoPlay());
        }, 0);
      });
  };
  b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  };
  b.prototype.getDotCount = function () {
    var b = 0,
      d = 0,
      e = 0;
    if (!0 === this.options.infinite)
      if (this.slideCount <= this.options.slidesToShow) ++e;
      else
        for (; b < this.slideCount; )
          ++e,
            (b = d + this.options.slidesToScroll),
            (d +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
    else if (!0 === this.options.centerMode) e = this.slideCount;
    else if (this.options.asNavFor)
      for (; b < this.slideCount; )
        ++e,
          (b = d + this.options.slidesToScroll),
          (d +=
            this.options.slidesToScroll <= this.options.slidesToShow
              ? this.options.slidesToScroll
              : this.options.slidesToShow);
    else
      e =
        1 +
        Math.ceil(
          (this.slideCount - this.options.slidesToShow) /
            this.options.slidesToScroll
        );
    return e - 1;
  };
  b.prototype.getLeft = function (b) {
    var c,
      e,
      l,
      k,
      q = 0;
    return (
      (this.slideOffset = 0),
      (e = this.$slides.first().outerHeight(!0)),
      !0 === this.options.infinite
        ? (this.slideCount > this.options.slidesToShow &&
            ((this.slideOffset =
              this.slideWidth * this.options.slidesToShow * -1),
            (k = -1),
            !0 === this.options.vertical &&
              !0 === this.options.centerMode &&
              (2 === this.options.slidesToShow
                ? (k = -1.5)
                : 1 === this.options.slidesToShow && (k = -2)),
            (q = e * this.options.slidesToShow * k)),
          0 != this.slideCount % this.options.slidesToScroll &&
            b + this.options.slidesToScroll > this.slideCount &&
            this.slideCount > this.options.slidesToShow &&
            (b > this.slideCount
              ? ((this.slideOffset =
                  (this.options.slidesToShow - (b - this.slideCount)) *
                  this.slideWidth *
                  -1),
                (q =
                  (this.options.slidesToShow - (b - this.slideCount)) * e * -1))
              : ((this.slideOffset =
                  (this.slideCount % this.options.slidesToScroll) *
                  this.slideWidth *
                  -1),
                (q =
                  (this.slideCount % this.options.slidesToScroll) * e * -1))))
        : b + this.options.slidesToShow > this.slideCount &&
          ((this.slideOffset =
            (b + this.options.slidesToShow - this.slideCount) *
            this.slideWidth),
          (q = (b + this.options.slidesToShow - this.slideCount) * e)),
      this.slideCount <= this.options.slidesToShow &&
        ((this.slideOffset = 0), (q = 0)),
      !0 === this.options.centerMode &&
      this.slideCount <= this.options.slidesToShow
        ? (this.slideOffset =
            (this.slideWidth * Math.floor(this.options.slidesToShow)) / 2 -
            (this.slideWidth * this.slideCount) / 2)
        : !0 === this.options.centerMode && !0 === this.options.infinite
        ? (this.slideOffset +=
            this.slideWidth * Math.floor(this.options.slidesToShow / 2) -
            this.slideWidth)
        : !0 === this.options.centerMode &&
          ((this.slideOffset = 0),
          (this.slideOffset +=
            this.slideWidth * Math.floor(this.options.slidesToShow / 2))),
      (c =
        !1 === this.options.vertical
          ? b * this.slideWidth * -1 + this.slideOffset
          : b * e * -1 + q),
      !0 === this.options.variableWidth &&
        ((l =
          this.slideCount <= this.options.slidesToShow ||
          !1 === this.options.infinite
            ? this.$slideTrack.children(".slick-slide").eq(b)
            : this.$slideTrack
                .children(".slick-slide")
                .eq(b + this.options.slidesToShow)),
        (c =
          !0 === this.options.rtl
            ? l[0]
              ? -1 * (this.$slideTrack.width() - l[0].offsetLeft - l.width())
              : 0
            : l[0]
            ? -1 * l[0].offsetLeft
            : 0),
        !0 === this.options.centerMode &&
          ((l =
            this.slideCount <= this.options.slidesToShow ||
            !1 === this.options.infinite
              ? this.$slideTrack.children(".slick-slide").eq(b)
              : this.$slideTrack
                  .children(".slick-slide")
                  .eq(b + this.options.slidesToShow + 1)),
          (c =
            !0 === this.options.rtl
              ? l[0]
                ? -1 * (this.$slideTrack.width() - l[0].offsetLeft - l.width())
                : 0
              : l[0]
              ? -1 * l[0].offsetLeft
              : 0),
          (c += (this.$list.width() - l.outerWidth()) / 2))),
      c
    );
  };
  b.prototype.getOption = b.prototype.slickGetOption = function (b) {
    return this.options[b];
  };
  b.prototype.getNavigableIndexes = function () {
    var b,
      d = 0,
      e = 0,
      l = [];
    for (
      !1 === this.options.infinite
        ? (b = this.slideCount)
        : ((d = -1 * this.options.slidesToScroll),
          (e = -1 * this.options.slidesToScroll),
          (b = 2 * this.slideCount));
      d < b;

    )
      l.push(d),
        (d = e + this.options.slidesToScroll),
        (e +=
          this.options.slidesToScroll <= this.options.slidesToShow
            ? this.options.slidesToScroll
            : this.options.slidesToShow);
    return l;
  };
  b.prototype.getSlick = function () {
    return this;
  };
  b.prototype.getSlideCount = function () {
    var b,
      d,
      r = this;
    return (
      (d =
        !0 === r.options.centerMode
          ? r.slideWidth * Math.floor(r.options.slidesToShow / 2)
          : 0),
      !0 === r.options.swipeToSlide
        ? (r.$slideTrack.find(".slick-slide").each(function (c, k) {
            if (k.offsetLeft - d + e(k).outerWidth() / 2 > -1 * r.swipeLeft)
              return (b = k), !1;
          }),
          Math.abs(e(b).attr("data-slick-index") - r.currentSlide) || 1)
        : r.options.slidesToScroll
    );
  };
  b.prototype.goTo = b.prototype.slickGoTo = function (b, d) {
    this.changeSlide({ data: { message: "index", index: parseInt(b) } }, d);
  };
  b.prototype.init = function (b) {
    e(this.$slider).hasClass("slick-initialized") ||
      (e(this.$slider).addClass("slick-initialized"),
      this.buildRows(),
      this.buildOut(),
      this.setProps(),
      this.startLoad(),
      this.loadSlider(),
      this.initializeEvents(),
      this.updateArrows(),
      this.updateDots(),
      this.checkResponsive(!0),
      this.focusHandler());
    b && this.$slider.trigger("init", [this]);
    !0 === this.options.accessibility && this.initADA();
    this.options.autoplay && ((this.paused = !1), this.autoPlay());
  };
  b.prototype.initADA = function () {
    var b = this,
      d = Math.ceil(b.slideCount / b.options.slidesToShow),
      r = b.getNavigableIndexes().filter(function (c) {
        return 0 <= c && c < b.slideCount;
      });
    b.$slides
      .add(b.$slideTrack.find(".slick-cloned"))
      .attr({ "aria-hidden": "true", tabindex: "-1" })
      .find("a, input, button, select")
      .attr({ tabindex: "-1" });
    null !== b.$dots &&
      (b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
        var d = r.indexOf(c);
        e(this).attr({
          role: "tabpanel",
          id: "slick-slide" + b.instanceUid + c,
          tabindex: -1,
        });
        -1 !== d &&
          e(this).attr({
            "aria-describedby": "slick-slide-control" + b.instanceUid + d,
          });
      }),
      b.$dots
        .attr("role", "tablist")
        .find("li")
        .each(function (c) {
          var l = r[c];
          e(this).attr({ role: "presentation" });
          e(this)
            .find("button")
            .first()
            .attr({
              role: "tab",
              id: "slick-slide-control" + b.instanceUid + c,
              "aria-controls": "slick-slide" + b.instanceUid + l,
              "aria-label": c + 1 + " of " + d,
              "aria-selected": null,
              tabindex: "-1",
            });
        })
        .eq(b.currentSlide)
        .find("button")
        .attr({ "aria-selected": "true", tabindex: "0" })
        .end());
    for (var l = b.currentSlide, k = l + b.options.slidesToShow; l < k; l++)
      b.$slides.eq(l).attr("tabindex", 0);
    b.activateADA();
  };
  b.prototype.initArrowEvents = function () {
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow
        .off("click.slick")
        .on("click.slick", { message: "previous" }, this.changeSlide),
      this.$nextArrow
        .off("click.slick")
        .on("click.slick", { message: "next" }, this.changeSlide),
      !0 === this.options.accessibility &&
        (this.$prevArrow.on("keydown.slick", this.keyHandler),
        this.$nextArrow.on("keydown.slick", this.keyHandler)));
  };
  b.prototype.initDotEvents = function () {
    !0 === this.options.dots &&
      (e("li", this.$dots).on(
        "click.slick",
        { message: "index" },
        this.changeSlide
      ),
      !0 === this.options.accessibility &&
        this.$dots.on("keydown.slick", this.keyHandler));
    !0 === this.options.dots &&
      !0 === this.options.pauseOnDotsHover &&
      e("li", this.$dots)
        .on("mouseenter.slick", e.proxy(this.interrupt, this, !0))
        .on("mouseleave.slick", e.proxy(this.interrupt, this, !1));
  };
  b.prototype.initSlideEvents = function () {
    this.options.pauseOnHover &&
      (this.$list.on("mouseenter.slick", e.proxy(this.interrupt, this, !0)),
      this.$list.on("mouseleave.slick", e.proxy(this.interrupt, this, !1)));
  };
  b.prototype.initializeEvents = function () {
    this.initArrowEvents();
    this.initDotEvents();
    this.initSlideEvents();
    this.$list.on(
      "touchstart.slick mousedown.slick",
      { action: "start" },
      this.swipeHandler
    );
    this.$list.on(
      "touchmove.slick mousemove.slick",
      { action: "move" },
      this.swipeHandler
    );
    this.$list.on(
      "touchend.slick mouseup.slick",
      { action: "end" },
      this.swipeHandler
    );
    this.$list.on(
      "touchcancel.slick mouseleave.slick",
      { action: "end" },
      this.swipeHandler
    );
    this.$list.on("click.slick", this.clickHandler);
    e(document).on(this.visibilityChange, e.proxy(this.visibility, this));
    !0 === this.options.accessibility &&
      this.$list.on("keydown.slick", this.keyHandler);
    !0 === this.options.focusOnSelect &&
      e(this.$slideTrack).children().on("click.slick", this.selectHandler);
    e(window).on(
      "orientationchange.slick.slick-" + this.instanceUid,
      e.proxy(this.orientationChange, this)
    );
    e(window).on(
      "resize.slick.slick-" + this.instanceUid,
      e.proxy(this.resize, this)
    );
    e("[draggable!\x3dtrue]", this.$slideTrack).on(
      "dragstart",
      this.preventDefault
    );
    e(window).on("load.slick.slick-" + this.instanceUid, this.setPosition);
    e(this.setPosition);
  };
  b.prototype.initUI = function () {
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow.show(), this.$nextArrow.show());
    !0 === this.options.dots &&
      this.slideCount > this.options.slidesToShow &&
      this.$dots.show();
  };
  b.prototype.keyHandler = function (b) {
    b.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
      (37 === b.keyCode && !0 === this.options.accessibility
        ? this.changeSlide({
            data: { message: !0 === this.options.rtl ? "next" : "previous" },
          })
        : 39 === b.keyCode &&
          !0 === this.options.accessibility &&
          this.changeSlide({
            data: { message: !0 === this.options.rtl ? "previous" : "next" },
          }));
  };
  b.prototype.lazyLoad = function () {
    function b(b) {
      e("img[data-lazy]", b).each(function () {
        var b = e(this),
          c = e(this).attr("data-lazy"),
          d = e(this).attr("data-srcset"),
          l = e(this).attr("data-sizes") || k.$slider.attr("data-sizes"),
          r = document.createElement("img");
        r.onload = function () {
          b.animate({ opacity: 0 }, 100, function () {
            d && (b.attr("srcset", d), l && b.attr("sizes", l));
            b.attr("src", c).animate({ opacity: 1 }, 200, function () {
              b.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                "slick-loading"
              );
            });
            k.$slider.trigger("lazyLoaded", [k, b, c]);
          });
        };
        r.onerror = function () {
          b.removeAttr("data-lazy")
            .removeClass("slick-loading")
            .addClass("slick-lazyload-error");
          k.$slider.trigger("lazyLoadError", [k, b, c]);
        };
        r.src = c;
      });
    }
    var d,
      r,
      l,
      k = this;
    if (
      (!0 === k.options.centerMode
        ? !0 === k.options.infinite
          ? (l =
              (r = k.currentSlide + (k.options.slidesToShow / 2 + 1)) +
              k.options.slidesToShow +
              2)
          : ((r = Math.max(
              0,
              k.currentSlide - (k.options.slidesToShow / 2 + 1)
            )),
            (l = k.options.slidesToShow / 2 + 3 + k.currentSlide))
        : ((r = k.options.infinite
            ? k.options.slidesToShow + k.currentSlide
            : k.currentSlide),
          (l = Math.ceil(r + k.options.slidesToShow)),
          !0 === k.options.fade && (0 < r && r--, l <= k.slideCount && l++)),
      (d = k.$slider.find(".slick-slide").slice(r, l)),
      "anticipated" === k.options.lazyLoad)
    ) {
      --r;
      for (
        var q = k.$slider.find(".slick-slide"), t = 0;
        t < k.options.slidesToScroll;
        t++
      )
        0 > r && (r = k.slideCount - 1),
          (d = (d = d.add(q.eq(r))).add(q.eq(l))),
          r--,
          l++;
    }
    b(d);
    k.slideCount <= k.options.slidesToShow
      ? b(k.$slider.find(".slick-slide"))
      : k.currentSlide >= k.slideCount - k.options.slidesToShow
      ? b(k.$slider.find(".slick-cloned").slice(0, k.options.slidesToShow))
      : 0 === k.currentSlide &&
        b(k.$slider.find(".slick-cloned").slice(-1 * k.options.slidesToShow));
  };
  b.prototype.loadSlider = function () {
    this.setPosition();
    this.$slideTrack.css({ opacity: 1 });
    this.$slider.removeClass("slick-loading");
    this.initUI();
    "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
  };
  b.prototype.next = b.prototype.slickNext = function () {
    this.changeSlide({ data: { message: "next" } });
  };
  b.prototype.orientationChange = function () {
    this.checkResponsive();
    this.setPosition();
  };
  b.prototype.pause = b.prototype.slickPause = function () {
    this.autoPlayClear();
    this.paused = !0;
  };
  b.prototype.play = b.prototype.slickPlay = function () {
    this.autoPlay();
    this.options.autoplay = !0;
    this.interrupted = this.focussed = this.paused = !1;
  };
  b.prototype.postSlide = function (b) {
    this.unslicked ||
      (this.$slider.trigger("afterChange", [this, b]),
      (this.animating = !1),
      this.slideCount > this.options.slidesToShow && this.setPosition(),
      (this.swipeLeft = null),
      this.options.autoplay && this.autoPlay(),
      !0 === this.options.accessibility &&
        (this.initADA(),
        this.options.focusOnChange &&
          e(this.$slides.get(this.currentSlide)).attr("tabindex", 0).focus()));
  };
  b.prototype.prev = b.prototype.slickPrev = function () {
    this.changeSlide({ data: { message: "previous" } });
  };
  b.prototype.preventDefault = function (b) {
    b.preventDefault();
  };
  b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;
    var c,
      r,
      l,
      k,
      q,
      t = this,
      y = e("img[data-lazy]", t.$slider);
    y.length
      ? ((c = y.first()),
        (r = c.attr("data-lazy")),
        (l = c.attr("data-srcset")),
        (k = c.attr("data-sizes") || t.$slider.attr("data-sizes")),
        ((q = document.createElement("img")).onload = function () {
          l && (c.attr("srcset", l), k && c.attr("sizes", k));
          c.attr("src", r)
            .removeAttr("data-lazy data-srcset data-sizes")
            .removeClass("slick-loading");
          !0 === t.options.adaptiveHeight && t.setPosition();
          t.$slider.trigger("lazyLoaded", [t, c, r]);
          t.progressiveLazyLoad();
        }),
        (q.onerror = function () {
          3 > b
            ? setTimeout(function () {
                t.progressiveLazyLoad(b + 1);
              }, 500)
            : (c
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
              t.$slider.trigger("lazyLoadError", [t, c, r]),
              t.progressiveLazyLoad());
        }),
        (q.src = r))
      : t.$slider.trigger("allImagesLoaded", [t]);
  };
  b.prototype.refresh = function (b) {
    var c = this.slideCount - this.options.slidesToShow;
    !this.options.infinite && this.currentSlide > c && (this.currentSlide = c);
    this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0);
    c = this.currentSlide;
    this.destroy(!0);
    e.extend(this, this.initials, { currentSlide: c });
    this.init();
    b || this.changeSlide({ data: { message: "index", index: c } }, !1);
  };
  b.prototype.registerBreakpoints = function () {
    var b,
      d,
      r,
      l = this,
      k = l.options.responsive || null;
    if ("array" === e.type(k) && k.length) {
      l.respondTo = l.options.respondTo || "window";
      for (b in k)
        if (((r = l.breakpoints.length - 1), k.hasOwnProperty(b))) {
          for (d = k[b].breakpoint; 0 <= r; )
            l.breakpoints[r] &&
              l.breakpoints[r] === d &&
              l.breakpoints.splice(r, 1),
              r--;
          l.breakpoints.push(d);
          l.breakpointSettings[d] = k[b].settings;
        }
      l.breakpoints.sort(function (b, c) {
        return l.options.mobileFirst ? b - c : c - b;
      });
    }
  };
  b.prototype.reinit = function () {
    this.$slides = this.$slideTrack
      .children(this.options.slide)
      .addClass("slick-slide");
    this.slideCount = this.$slides.length;
    this.currentSlide >= this.slideCount &&
      0 !== this.currentSlide &&
      (this.currentSlide -= this.options.slidesToScroll);
    this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0);
    this.registerBreakpoints();
    this.setProps();
    this.setupInfinite();
    this.buildArrows();
    this.updateArrows();
    this.initArrowEvents();
    this.buildDots();
    this.updateDots();
    this.initDotEvents();
    this.cleanUpSlideEvents();
    this.initSlideEvents();
    this.checkResponsive(!1, !0);
    !0 === this.options.focusOnSelect &&
      e(this.$slideTrack).children().on("click.slick", this.selectHandler);
    this.setSlideClasses(
      "number" == typeof this.currentSlide ? this.currentSlide : 0
    );
    this.setPosition();
    this.focusHandler();
    this.paused = !this.options.autoplay;
    this.autoPlay();
    this.$slider.trigger("reInit", [this]);
  };
  b.prototype.resize = function () {
    var b = this;
    e(window).width() !== b.windowWidth &&
      (clearTimeout(b.windowDelay),
      (b.windowDelay = window.setTimeout(function () {
        b.windowWidth = e(window).width();
        b.checkResponsive();
        b.unslicked || b.setPosition();
      }, 50)));
  };
  b.prototype.removeSlide = b.prototype.slickRemove = function (b, d, e) {
    if (
      ((b =
        "boolean" == typeof b
          ? !0 === b
            ? 0
            : this.slideCount - 1
          : !0 === d
          ? --b
          : b),
      1 > this.slideCount || 0 > b || b > this.slideCount - 1)
    )
      return !1;
    this.unload();
    !0 === e
      ? this.$slideTrack.children().remove()
      : this.$slideTrack.children(this.options.slide).eq(b).remove();
    this.$slides = this.$slideTrack.children(this.options.slide);
    this.$slideTrack.children(this.options.slide).detach();
    this.$slideTrack.append(this.$slides);
    this.$slidesCache = this.$slides;
    this.reinit();
  };
  b.prototype.setCSS = function (b) {
    var c = {};
    !0 === this.options.rtl && (b = -b);
    var e = "left" == this.positionProp ? Math.ceil(b) + "px" : "0px";
    var l = "top" == this.positionProp ? Math.ceil(b) + "px" : "0px";
    c[this.positionProp] = b;
    !1 === this.transformsEnabled
      ? this.$slideTrack.css(c)
      : ((c = {}),
        !1 === this.cssTransitions
          ? ((c[this.animType] = "translate(" + e + ", " + l + ")"),
            this.$slideTrack.css(c))
          : ((c[this.animType] = "translate3d(" + e + ", " + l + ", 0px)"),
            this.$slideTrack.css(c)));
  };
  b.prototype.setDimensions = function () {
    !1 === this.options.vertical
      ? !0 === this.options.centerMode &&
        this.$list.css({ padding: "0px " + this.options.centerPadding })
      : (this.$list.height(
          this.$slides.first().outerHeight(!0) * this.options.slidesToShow
        ),
        !0 === this.options.centerMode &&
          this.$list.css({ padding: this.options.centerPadding + " 0px" }));
    this.listWidth = this.$list.width();
    this.listHeight = this.$list.height();
    !1 === this.options.vertical && !1 === this.options.variableWidth
      ? ((this.slideWidth = Math.ceil(
          this.listWidth / this.options.slidesToShow
        )),
        this.$slideTrack.width(
          Math.ceil(
            this.slideWidth * this.$slideTrack.children(".slick-slide").length
          )
        ))
      : !0 === this.options.variableWidth
      ? this.$slideTrack.width(5e3 * this.slideCount)
      : ((this.slideWidth = Math.ceil(this.listWidth)),
        this.$slideTrack.height(
          Math.ceil(
            this.$slides.first().outerHeight(!0) *
              this.$slideTrack.children(".slick-slide").length
          )
        ));
    var b = this.$slides.first().outerWidth(!0) - this.$slides.first().width();
    !1 === this.options.variableWidth &&
      this.$slideTrack.children(".slick-slide").width(this.slideWidth - b);
  };
  b.prototype.setFade = function () {
    var b,
      d = this;
    d.$slides.each(function (c, l) {
      b = d.slideWidth * c * -1;
      !0 === d.options.rtl
        ? e(l).css({
            position: "relative",
            right: b,
            top: 0,
            zIndex: d.options.zIndex - 2,
            opacity: 0,
          })
        : e(l).css({
            position: "relative",
            left: b,
            top: 0,
            zIndex: d.options.zIndex - 2,
            opacity: 0,
          });
    });
    d.$slides
      .eq(d.currentSlide)
      .css({ zIndex: d.options.zIndex - 1, opacity: 1 });
  };
  b.prototype.setHeight = function () {
    if (
      1 === this.options.slidesToShow &&
      !0 === this.options.adaptiveHeight &&
      !1 === this.options.vertical
    ) {
      var b = this.$slides.eq(this.currentSlide).outerHeight(!0);
      this.$list.css("height", b);
    }
  };
  b.prototype.setOption = b.prototype.slickSetOption = function (b, d, r) {
    var c,
      k,
      q,
      t,
      y = this,
      m = !1;
    if (
      ("object" === e.type(b)
        ? ((k = b), (m = d), (t = "multiple"))
        : "string" === e.type(b) &&
          ((k = b),
          (q = d),
          (m = r),
          "responsive" === b && "array" === e.type(d)
            ? (t = "responsive")
            : void 0 !== d && (t = "single")),
      "single" === t)
    )
      y.options[k] = q;
    else if ("multiple" === t)
      e.each(k, function (b, c) {
        y.options[b] = c;
      });
    else if ("responsive" === t)
      for (c in q)
        if ("array" !== e.type(y.options.responsive))
          y.options.responsive = [q[c]];
        else {
          for (b = y.options.responsive.length - 1; 0 <= b; )
            y.options.responsive[b].breakpoint === q[c].breakpoint &&
              y.options.responsive.splice(b, 1),
              b--;
          y.options.responsive.push(q[c]);
        }
    m && (y.unload(), y.reinit());
  };
  b.prototype.setPosition = function () {
    this.setDimensions();
    this.setHeight();
    !1 === this.options.fade
      ? this.setCSS(this.getLeft(this.currentSlide))
      : this.setFade();
    this.$slider.trigger("setPosition", [this]);
  };
  b.prototype.setProps = function () {
    var b = document.body.style;
    this.positionProp = !0 === this.options.vertical ? "top" : "left";
    "top" === this.positionProp
      ? this.$slider.addClass("slick-vertical")
      : this.$slider.removeClass("slick-vertical");
    (void 0 === b.WebkitTransition &&
      void 0 === b.MozTransition &&
      void 0 === b.msTransition) ||
      (!0 === this.options.useCSS && (this.cssTransitions = !0));
    this.options.fade &&
      ("number" == typeof this.options.zIndex
        ? 3 > this.options.zIndex && (this.options.zIndex = 3)
        : (this.options.zIndex = this.defaults.zIndex));
    void 0 !== b.OTransform &&
      ((this.animType = "OTransform"),
      (this.transformType = "-o-transform"),
      (this.transitionType = "OTransition"),
      void 0 === b.perspectiveProperty &&
        void 0 === b.webkitPerspective &&
        (this.animType = !1));
    void 0 !== b.MozTransform &&
      ((this.animType = "MozTransform"),
      (this.transformType = "-moz-transform"),
      (this.transitionType = "MozTransition"),
      void 0 === b.perspectiveProperty &&
        void 0 === b.MozPerspective &&
        (this.animType = !1));
    void 0 !== b.webkitTransform &&
      ((this.animType = "webkitTransform"),
      (this.transformType = "-webkit-transform"),
      (this.transitionType = "webkitTransition"),
      void 0 === b.perspectiveProperty &&
        void 0 === b.webkitPerspective &&
        (this.animType = !1));
    void 0 !== b.msTransform &&
      ((this.animType = "msTransform"),
      (this.transformType = "-ms-transform"),
      (this.transitionType = "msTransition"),
      void 0 === b.msTransform && (this.animType = !1));
    void 0 !== b.transform &&
      !1 !== this.animType &&
      ((this.animType = "transform"),
      (this.transformType = "transform"),
      (this.transitionType = "transition"));
    this.transformsEnabled =
      this.options.useTransform &&
      null !== this.animType &&
      !1 !== this.animType;
  };
  b.prototype.setSlideClasses = function (b) {
    var c, e;
    if (
      ((c = this.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
      this.$slides.eq(b).addClass("slick-current"),
      !0 === this.options.centerMode)
    ) {
      var l = 0 == this.options.slidesToShow % 2 ? 1 : 0;
      var k = Math.floor(this.options.slidesToShow / 2);
      !0 === this.options.infinite &&
        (b >= k && b <= this.slideCount - 1 - k
          ? this.$slides
              .slice(b - k + l, b + k + 1)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : ((e = this.options.slidesToShow + b),
            c
              .slice(e - k + 1 + l, e + k + 2)
              .addClass("slick-active")
              .attr("aria-hidden", "false")),
        0 === b
          ? c
              .eq(c.length - 1 - this.options.slidesToShow)
              .addClass("slick-center")
          : b === this.slideCount - 1 &&
            c.eq(this.options.slidesToShow).addClass("slick-center"));
      this.$slides.eq(b).addClass("slick-center");
    } else
      0 <= b && b <= this.slideCount - this.options.slidesToShow
        ? this.$slides
            .slice(b, b + this.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false")
        : c.length <= this.options.slidesToShow
        ? c.addClass("slick-active").attr("aria-hidden", "false")
        : ((k = this.slideCount % this.options.slidesToShow),
          (e =
            !0 === this.options.infinite ? this.options.slidesToShow + b : b),
          this.options.slidesToShow == this.options.slidesToScroll &&
          this.slideCount - b < this.options.slidesToShow
            ? c
                .slice(e - (this.options.slidesToShow - k), e + k)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : c
                .slice(e, e + this.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false"));
    ("ondemand" !== this.options.lazyLoad &&
      "anticipated" !== this.options.lazyLoad) ||
      this.lazyLoad();
  };
  b.prototype.setupInfinite = function () {
    var b, d;
    if (
      (!0 === this.options.fade && (this.options.centerMode = !1),
      !0 === this.options.infinite &&
        !1 === this.options.fade &&
        ((d = null), this.slideCount > this.options.slidesToShow))
    ) {
      var r =
        !0 === this.options.centerMode
          ? this.options.slidesToShow + 1
          : this.options.slidesToShow;
      for (b = this.slideCount; b > this.slideCount - r; --b)
        (d = b - 1),
          e(this.$slides[d])
            .clone(!0)
            .attr("id", "")
            .attr("data-slick-index", d - this.slideCount)
            .prependTo(this.$slideTrack)
            .addClass("slick-cloned");
      for (b = 0; b < r + this.slideCount; b += 1)
        (d = b),
          e(this.$slides[d])
            .clone(!0)
            .attr("id", "")
            .attr("data-slick-index", d + this.slideCount)
            .appendTo(this.$slideTrack)
            .addClass("slick-cloned");
      this.$slideTrack
        .find(".slick-cloned")
        .find("[id]")
        .each(function () {
          e(this).attr("id", "");
        });
    }
  };
  b.prototype.interrupt = function (b) {
    b || this.autoPlay();
    this.interrupted = b;
  };
  b.prototype.selectHandler = function (b) {
    b = e(b.target).is(".slick-slide")
      ? e(b.target)
      : e(b.target).parents(".slick-slide");
    (b = parseInt(b.attr("data-slick-index"))) || (b = 0);
    this.slideCount <= this.options.slidesToShow
      ? this.slideHandler(b, !1, !0)
      : this.slideHandler(b);
  };
  b.prototype.slideHandler = function (b, d, e) {
    var c,
      k,
      q,
      r,
      y = null,
      m = this;
    if (
      ((d = d || !1),
      !(
        (!0 === m.animating && !0 === m.options.waitForAnimate) ||
        (!0 === m.options.fade && m.currentSlide === b)
      ))
    )
      if (
        (!1 === d && m.asNavFor(b),
        (c = b),
        (y = m.getLeft(c)),
        (q = m.getLeft(m.currentSlide)),
        (m.currentLeft = null === m.swipeLeft ? q : m.swipeLeft),
        !1 === m.options.infinite &&
          !1 === m.options.centerMode &&
          (0 > b || b > m.getDotCount() * m.options.slidesToScroll))
      )
        !1 === m.options.fade &&
          ((c = m.currentSlide),
          !0 !== e
            ? m.animateSlide(q, function () {
                m.postSlide(c);
              })
            : m.postSlide(c));
      else if (
        !1 === m.options.infinite &&
        !0 === m.options.centerMode &&
        (0 > b || b > m.slideCount - m.options.slidesToScroll)
      )
        !1 === m.options.fade &&
          ((c = m.currentSlide),
          !0 !== e
            ? m.animateSlide(q, function () {
                m.postSlide(c);
              })
            : m.postSlide(c));
      else {
        if (
          (m.options.autoplay && clearInterval(m.autoPlayTimer),
          (k =
            0 > c
              ? 0 != m.slideCount % m.options.slidesToScroll
                ? m.slideCount - (m.slideCount % m.options.slidesToScroll)
                : m.slideCount + c
              : c >= m.slideCount
              ? 0 != m.slideCount % m.options.slidesToScroll
                ? 0
                : c - m.slideCount
              : c),
          (m.animating = !0),
          m.$slider.trigger("beforeChange", [m, m.currentSlide, k]),
          (b = m.currentSlide),
          (m.currentSlide = k),
          m.setSlideClasses(m.currentSlide),
          m.options.asNavFor &&
            (r = (r = m.getNavTarget()).slick("getSlick")).slideCount <=
              r.options.slidesToShow &&
            r.setSlideClasses(m.currentSlide),
          m.updateDots(),
          m.updateArrows(),
          !0 === m.options.fade)
        )
          return (
            !0 !== e
              ? (m.fadeSlideOut(b),
                m.fadeSlide(k, function () {
                  m.postSlide(k);
                }))
              : m.postSlide(k),
            void m.animateHeight()
          );
        !0 !== e
          ? m.animateSlide(y, function () {
              m.postSlide(k);
            })
          : m.postSlide(k);
      }
  };
  b.prototype.startLoad = function () {
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow.hide(), this.$nextArrow.hide());
    !0 === this.options.dots &&
      this.slideCount > this.options.slidesToShow &&
      this.$dots.hide();
    this.$slider.addClass("slick-loading");
  };
  b.prototype.swipeDirection = function () {
    var b, d, e, l;
    return (
      (b = this.touchObject.startX - this.touchObject.curX),
      (d = this.touchObject.startY - this.touchObject.curY),
      (e = Math.atan2(d, b)),
      0 > (l = Math.round((180 * e) / Math.PI)) && (l = 360 - Math.abs(l)),
      45 >= l && 0 <= l
        ? !1 === this.options.rtl
          ? "left"
          : "right"
        : 360 >= l && 315 <= l
        ? !1 === this.options.rtl
          ? "left"
          : "right"
        : 135 <= l && 225 >= l
        ? !1 === this.options.rtl
          ? "right"
          : "left"
        : !0 === this.options.verticalSwiping
        ? 35 <= l && 135 >= l
          ? "down"
          : "up"
        : "vertical"
    );
  };
  b.prototype.swipeEnd = function (b) {
    if (((this.dragging = !1), (this.swiping = !1), this.scrolling))
      return (this.scrolling = !1), !1;
    if (
      ((this.interrupted = !1),
      (this.shouldClick = !(10 < this.touchObject.swipeLength)),
      void 0 === this.touchObject.curX)
    )
      return !1;
    if (
      (!0 === this.touchObject.edgeHit &&
        this.$slider.trigger("edge", [this, this.swipeDirection()]),
      this.touchObject.swipeLength >= this.touchObject.minSwipe)
    ) {
      switch ((b = this.swipeDirection())) {
        case "left":
        case "down":
          var c = this.options.swipeToSlide
            ? this.checkNavigable(this.currentSlide + this.getSlideCount())
            : this.currentSlide + this.getSlideCount();
          this.currentDirection = 0;
          break;
        case "right":
        case "up":
          (c = this.options.swipeToSlide
            ? this.checkNavigable(this.currentSlide - this.getSlideCount())
            : this.currentSlide - this.getSlideCount()),
            (this.currentDirection = 1);
      }
      "vertical" != b &&
        (this.slideHandler(c),
        (this.touchObject = {}),
        this.$slider.trigger("swipe", [this, b]));
    } else
      this.touchObject.startX !== this.touchObject.curX &&
        (this.slideHandler(this.currentSlide), (this.touchObject = {}));
  };
  b.prototype.swipeHandler = function (b) {
    if (
      !(
        !1 === this.options.swipe ||
        ("ontouchend" in document && !1 === this.options.swipe) ||
        (!1 === this.options.draggable && -1 !== b.type.indexOf("mouse"))
      )
    )
      switch (
        ((this.touchObject.fingerCount =
          b.originalEvent && void 0 !== b.originalEvent.touches
            ? b.originalEvent.touches.length
            : 1),
        (this.touchObject.minSwipe =
          this.listWidth / this.options.touchThreshold),
        !0 === this.options.verticalSwiping &&
          (this.touchObject.minSwipe =
            this.listHeight / this.options.touchThreshold),
        b.data.action)
      ) {
        case "start":
          this.swipeStart(b);
          break;
        case "move":
          this.swipeMove(b);
          break;
        case "end":
          this.swipeEnd(b);
      }
  };
  b.prototype.swipeMove = function (b) {
    var c, e, l, k, q, t;
    return (
      (q = void 0 !== b.originalEvent ? b.originalEvent.touches : null),
      !(!this.dragging || this.scrolling || (q && 1 !== q.length)) &&
        ((c = this.getLeft(this.currentSlide)),
        (this.touchObject.curX = void 0 !== q ? q[0].pageX : b.clientX),
        (this.touchObject.curY = void 0 !== q ? q[0].pageY : b.clientY),
        (this.touchObject.swipeLength = Math.round(
          Math.sqrt(
            Math.pow(this.touchObject.curX - this.touchObject.startX, 2)
          )
        )),
        (t = Math.round(
          Math.sqrt(
            Math.pow(this.touchObject.curY - this.touchObject.startY, 2)
          )
        )),
        !this.options.verticalSwiping && !this.swiping && 4 < t
          ? ((this.scrolling = !0), !1)
          : (!0 === this.options.verticalSwiping &&
              (this.touchObject.swipeLength = t),
            (e = this.swipeDirection()),
            void 0 !== b.originalEvent &&
              4 < this.touchObject.swipeLength &&
              ((this.swiping = !0), b.preventDefault()),
            (k =
              (!1 === this.options.rtl ? 1 : -1) *
              (this.touchObject.curX > this.touchObject.startX ? 1 : -1)),
            !0 === this.options.verticalSwiping &&
              (k = this.touchObject.curY > this.touchObject.startY ? 1 : -1),
            (l = this.touchObject.swipeLength),
            (this.touchObject.edgeHit = !1),
            !1 === this.options.infinite &&
              ((0 === this.currentSlide && "right" === e) ||
                (this.currentSlide >= this.getDotCount() && "left" === e)) &&
              ((l = this.touchObject.swipeLength * this.options.edgeFriction),
              (this.touchObject.edgeHit = !0)),
            !1 === this.options.vertical
              ? (this.swipeLeft = c + l * k)
              : (this.swipeLeft =
                  c + l * (this.$list.height() / this.listWidth) * k),
            !0 === this.options.verticalSwiping && (this.swipeLeft = c + l * k),
            !0 !== this.options.fade &&
              !1 !== this.options.touchMove &&
              (!0 === this.animating
                ? ((this.swipeLeft = null), !1)
                : void this.setCSS(this.swipeLeft))))
    );
  };
  b.prototype.swipeStart = function (b) {
    var c;
    if (
      ((this.interrupted = !0),
      1 !== this.touchObject.fingerCount ||
        this.slideCount <= this.options.slidesToShow)
    )
      return (this.touchObject = {}), !1;
    void 0 !== b.originalEvent &&
      void 0 !== b.originalEvent.touches &&
      (c = b.originalEvent.touches[0]);
    this.touchObject.startX = this.touchObject.curX =
      void 0 !== c ? c.pageX : b.clientX;
    this.touchObject.startY = this.touchObject.curY =
      void 0 !== c ? c.pageY : b.clientY;
    this.dragging = !0;
  };
  b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    null !== this.$slidesCache &&
      (this.unload(),
      this.$slideTrack.children(this.options.slide).detach(),
      this.$slidesCache.appendTo(this.$slideTrack),
      this.reinit());
  };
  b.prototype.unload = function () {
    e(".slick-cloned", this.$slider).remove();
    this.$dots && this.$dots.remove();
    this.$prevArrow &&
      this.htmlExpr.test(this.options.prevArrow) &&
      this.$prevArrow.remove();
    this.$nextArrow &&
      this.htmlExpr.test(this.options.nextArrow) &&
      this.$nextArrow.remove();
    this.$slides
      .removeClass("slick-slide slick-active slick-visible slick-current")
      .attr("aria-hidden", "true")
      .css("width", "");
  };
  b.prototype.unslick = function (b) {
    this.$slider.trigger("unslick", [this, b]);
    this.destroy();
  };
  b.prototype.updateArrows = function () {
    Math.floor(this.options.slidesToShow / 2);
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      !this.options.infinite &&
      (this.$prevArrow
        .removeClass("slick-disabled")
        .attr("aria-disabled", "false"),
      this.$nextArrow
        .removeClass("slick-disabled")
        .attr("aria-disabled", "false"),
      0 === this.currentSlide
        ? (this.$prevArrow
            .addClass("slick-disabled")
            .attr("aria-disabled", "true"),
          this.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"))
        : this.currentSlide >= this.slideCount - this.options.slidesToShow &&
          !1 === this.options.centerMode
        ? (this.$nextArrow
            .addClass("slick-disabled")
            .attr("aria-disabled", "true"),
          this.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"))
        : this.currentSlide >= this.slideCount - 1 &&
          !0 === this.options.centerMode &&
          (this.$nextArrow
            .addClass("slick-disabled")
            .attr("aria-disabled", "true"),
          this.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false")));
  };
  b.prototype.updateDots = function () {
    null !== this.$dots &&
      (this.$dots.find("li").removeClass("slick-active").end(),
      this.$dots
        .find("li")
        .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
        .addClass("slick-active"));
  };
  b.prototype.visibility = function () {
    this.options.autoplay &&
      (document[this.hidden]
        ? (this.interrupted = !0)
        : (this.interrupted = !1));
  };
  e.fn.slick = function () {
    var c,
      d,
      e = arguments[0],
      l = Array.prototype.slice.call(arguments, 1),
      k = this.length;
    for (c = 0; c < k; c++)
      if (
        ("object" == typeof e || void 0 === e
          ? (this[c].slick = new b(this[c], e))
          : (d = this[c].slick[e].apply(this[c].slick, l)),
        void 0 !== d)
      )
        return d;
    return this;
  };
});
(function (e) {
  e.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5,
    },
    translations: { en: null },
    init: function (b, c) {
      e(b).ajaxChimp(c);
    },
  };
  e.fn.ajaxChimp = function (b) {
    e(this).each(function (c, d) {
      var r = e(d),
        l = r.find("input[type\x3demail]"),
        k = r.find("label[for\x3d" + l.attr("id") + "]"),
        q = e.extend({ url: r.attr("action"), language: "en" }, b),
        t = q.url.replace("/post?", "/post-json?").concat("\x26c\x3d?");
      r.attr("novalidate", "true");
      l.attr("name", "EMAIL");
      r.submit(function () {
        var b,
          c = {},
          d = r.serializeArray();
        e.each(d, function (b, d) {
          c[d.name] = d.value;
        });
        e.ajax({
          url: t,
          data: c,
          success: function (c) {
            if ("success" === c.result)
              (b = "We have sent you a confirmation email"),
                k.removeClass("error").addClass("valid"),
                l.removeClass("error").addClass("valid");
            else {
              l.removeClass("valid").addClass("error");
              k.removeClass("valid").addClass("error");
              try {
                var d = c.msg.split(" - ", 2);
                b =
                  void 0 === d[1]
                    ? c.msg
                    : parseInt(d[0], 10).toString() === d[0]
                    ? d[1]
                    : c.msg;
              } catch (S) {
                b = c.msg;
              }
            }
            "en" !== q.language &&
              void 0 !== e.ajaxChimp.responses[b] &&
              e.ajaxChimp.translations &&
              e.ajaxChimp.translations[q.language] &&
              e.ajaxChimp.translations[q.language][e.ajaxChimp.responses[b]] &&
              (b =
                e.ajaxChimp.translations[q.language][e.ajaxChimp.responses[b]]);
            k.html(b);
            k.show(2e3);
            q.callback && q.callback(c);
          },
          dataType: "jsonp",
          error: function (b, c) {
            console.log("mailchimp ajax submit error: " + c);
          },
        });
        d = "Submitting...";
        "en" !== q.language &&
          e.ajaxChimp.translations &&
          e.ajaxChimp.translations[q.language] &&
          e.ajaxChimp.translations[q.language].submit &&
          (d = e.ajaxChimp.translations[q.language].submit);
        k.html(d).show(2e3);
        return !1;
      });
    });
    return this;
  };
})(jQuery);
("use strict");
function _slicedToArray(e, b) {
  return (
    _arrayWithHoles(e) || _iterableToArrayLimit(e, b) || _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(e, b) {
  if (
    Symbol.iterator in Object(e) ||
    "[object Arguments]" === Object.prototype.toString.call(e)
  ) {
    var c = [],
      d = !0,
      r = !1,
      l = void 0;
    try {
      for (
        var k, q = e[Symbol.iterator]();
        !(d = (k = q.next()).done) && (c.push(k.value), !b || c.length !== b);
        d = !0
      );
    } catch (t) {
      (r = !0), (l = t);
    } finally {
      try {
        d || null == q.return || q.return();
      } finally {
        if (r) throw l;
      }
    }
    return c;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck(e, b) {
  if (!(e instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, b) {
  for (var c = 0; c < b.length; c++) {
    var d = b[c];
    d.enumerable = d.enumerable || !1;
    d.configurable = !0;
    "value" in d && (d.writable = !0);
    Object.defineProperty(e, d.key, d);
  }
}
function _createClass(e, b, c) {
  return (
    b && _defineProperties(e.prototype, b), c && _defineProperties(e, c), e
  );
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (b) {
          return typeof b;
        }
      : function (b) {
          return b &&
            "function" == typeof Symbol &&
            b.constructor === Symbol &&
            b !== Symbol.prototype
            ? "symbol"
            : typeof b;
        })(e);
}
!(function a(e, b, c) {
  function r(k, t) {
    if (!b[k]) {
      if (!e[k]) {
        var q = "function" == typeof require && require;
        if (!t && q) return q(k, !0);
        if (l) return l(k, !0);
        t = Error("Cannot find module '" + k + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      t = b[k] = { exports: {} };
      e[k][0].call(
        t.exports,
        function (b) {
          return r(e[k][1][b] || b);
        },
        t,
        t.exports,
        a,
        e,
        b,
        c
      );
    }
    return b[k].exports;
  }
  for (
    var l = "function" == typeof require && require, k = 0;
    k < c.length;
    k++
  )
    r(c[k]);
  return r;
})(
  {
    1: [
      function (e, b, c) {
        (function (d) {
          function e(b, c) {
            return b.set(c[0], c[1]), b;
          }
          function l(b, c) {
            return b.add(c), b;
          }
          function k(b, c, d, e) {
            var f = -1,
              h = b ? b.length : 0;
            for (e && h && (d = b[++f]); ++f < h; ) d = c(d, b[f], f, b);
            return d;
          }
          function q(b) {
            var c = !1;
            if (null != b && "function" != typeof b.toString)
              try {
                c = !!(b + "");
              } catch (Pa) {}
            return c;
          }
          function t(b) {
            var c = -1,
              f = Array(b.size);
            return (
              b.forEach(function (b, d) {
                f[++c] = [d, b];
              }),
              f
            );
          }
          function y(b, c) {
            return function (f) {
              return b(c(f));
            };
          }
          function m(b) {
            var c = -1,
              f = Array(b.size);
            return (
              b.forEach(function (b) {
                f[++c] = b;
              }),
              f
            );
          }
          function v(b) {
            var c = -1,
              f = b ? b.length : 0;
            for (this.clear(); ++c < f; ) {
              var d = b[c];
              this.set(d[0], d[1]);
            }
          }
          function O(b) {
            var c = -1,
              f = b ? b.length : 0;
            for (this.clear(); ++c < f; ) {
              var d = b[c];
              this.set(d[0], d[1]);
            }
          }
          function da(b) {
            var c = -1,
              f = b ? b.length : 0;
            for (this.clear(); ++c < f; ) {
              var d = b[c];
              this.set(d[0], d[1]);
            }
          }
          function S(b) {
            this.__data__ = new O(b);
          }
          function ja(b, c) {
            var f =
                g(b) ||
                (function (b) {
                  return (
                    !!b &&
                    "object" == _typeof(b) &&
                    ma(b) &&
                    N.call(b, "callee") &&
                    (!Ha.call(b, "callee") || "[object Arguments]" == H.call(b))
                  );
                })(b)
                  ? (function (b, c) {
                      for (var f = -1, d = Array(b); ++f < b; ) d[f] = c(f);
                      return d;
                    })(b.length, String)
                  : [],
              d = f.length,
              e = !!d,
              h;
            for (h in b)
              (!c && !N.call(b, h)) ||
                (e && ("length" == h || Q(h, d))) ||
                f.push(h);
            return f;
          }
          function K(b, c, d) {
            var f = b[c];
            (N.call(b, c) &&
              (f === d || (f != f && d != d)) &&
              (void 0 !== d || c in b)) ||
              (b[c] = d);
          }
          function oa(b, c) {
            for (var f = b.length; f--; ) {
              var d = b[f][0];
              if (d === c || (d != d && c != c)) return f;
            }
            return -1;
          }
          function L(b, c, d, h, w, A, ea) {
            var f;
            if ((h && (f = A ? h(b, w, A, ea) : h(b)), void 0 !== f)) return f;
            if (!T(b)) return b;
            if ((w = g(b))) {
              if (
                ((f = (function (b) {
                  var c = b.length,
                    f = b.constructor(c);
                  c &&
                    "string" == typeof b[0] &&
                    N.call(b, "index") &&
                    ((f.index = b.index), (f.input = b.input));
                  return f;
                })(b)),
                !c)
              )
                return (function (b, c) {
                  var f = -1,
                    d = b.length;
                  for (c = c || Array(d); ++f < d; ) c[f] = b[f];
                  return c;
                })(b, f);
            } else {
              var J = la(b),
                E =
                  "[object Function]" == J || "[object GeneratorFunction]" == J;
              if (p(b))
                return (function (b, c) {
                  if (c) return b.slice();
                  c = new b.constructor(b.length);
                  return b.copy(c), c;
                })(b, c);
              if (
                "[object Object]" == J ||
                "[object Arguments]" == J ||
                (E && !A)
              ) {
                if (q(b)) return A ? b : {};
                if (
                  ((f = (function (b) {
                    "function" != typeof b.constructor || z(b)
                      ? (b = {})
                      : ((b = La(b)), (b = T(b) ? xa(b) : {}));
                    return b;
                  })(E ? {} : b)),
                  !c)
                )
                  return (function (b, c) {
                    return P(b, sa(b), c);
                  })(
                    b,
                    (function (b, c) {
                      return b && P(c, D(c), b);
                    })(f, b)
                  );
              } else {
                if (!C[J]) return A ? b : {};
                f = (function (b, c, f, d) {
                  var h = b.constructor;
                  switch (c) {
                    case "[object ArrayBuffer]":
                      return U(b);
                    case "[object Boolean]":
                    case "[object Date]":
                      return new h(+b);
                    case "[object DataView]":
                      return (function (b, c) {
                        c = c ? U(b.buffer) : b.buffer;
                        return new b.constructor(c, b.byteOffset, b.byteLength);
                      })(b, d);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                      return (function (b, c) {
                        c = c ? U(b.buffer) : b.buffer;
                        return new b.constructor(c, b.byteOffset, b.length);
                      })(b, d);
                    case "[object Map]":
                      return (function (b, c, f) {
                        return k(
                          c ? f(t(b), !0) : t(b),
                          e,
                          new b.constructor()
                        );
                      })(b, d, f);
                    case "[object Number]":
                    case "[object String]":
                      return new h(b);
                    case "[object RegExp]":
                      return (function (b) {
                        var c = new b.constructor(b.source, G.exec(b));
                        return (c.lastIndex = b.lastIndex), c;
                      })(b);
                    case "[object Set]":
                      return (function (b, c, f) {
                        return k(
                          c ? f(m(b), !0) : m(b),
                          l,
                          new b.constructor()
                        );
                      })(b, d, f);
                    case "[object Symbol]":
                      return ha ? Object(ha.call(b)) : {};
                  }
                })(b, J, L, c);
              }
            }
            if ((A = (ea = ea || new S()).get(b))) return A;
            if ((ea.set(b, f), !w))
              var wa = d
                ? (function (b) {
                    var c = sa,
                      f = D(b);
                    if (!g(b)) {
                      b = c(b);
                      c = -1;
                      for (var d = b.length, h = f.length; ++c < d; )
                        f[h + c] = b[c];
                    }
                    return f;
                  })(b)
                : D(b);
            return (
              (function (b, c) {
                for (
                  var f = -1, d = b ? b.length : 0;
                  ++f < d && !1 !== c(b[f], f, b);

                );
              })(wa || b, function (e, g) {
                wa && (e = b[(g = e)]);
                K(f, g, L(e, c, d, h, g, b, ea));
              }),
              f
            );
          }
          function U(b) {
            var c = new b.constructor(b.byteLength);
            return new Ca(c).set(new Ca(b)), c;
          }
          function P(b, c, d, h) {
            d = d || {};
            for (var f = -1, e = c.length; ++f < e; ) {
              var g = c[f],
                l = h ? h(d[g], b[g], g, d, b) : void 0;
              K(d, g, void 0 === l ? b[g] : l);
            }
            return d;
          }
          function Z(b, c) {
            b = b.__data__;
            var f = _typeof(c);
            return (
              "string" == f || "number" == f || "symbol" == f || "boolean" == f
                ? "__proto__" !== c
                : null === c
            )
              ? b["string" == typeof c ? "string" : "hash"]
              : b.map;
          }
          function aa(b, c) {
            b = null == b ? void 0 : b[c];
            return !T(b) ||
              (fa && fa in b) ||
              !(ba(b) || q(b) ? wa : F).test(V(b))
              ? void 0
              : b;
          }
          function Q(b, c) {
            return (
              !!(c = null == c ? 9007199254740991 : c) &&
              ("number" == typeof b || R.test(b)) &&
              -1 < b &&
              0 == b % 1 &&
              b < c
            );
          }
          function z(b) {
            var c = b && b.constructor;
            return b === (("function" == typeof c && c.prototype) || w);
          }
          function V(b) {
            if (null != b) {
              try {
                return va.call(b);
              } catch (J) {}
              return b + "";
            }
            return "";
          }
          function ma(b) {
            var c;
            if ((c = null != b))
              (c = b.length),
                (c =
                  "number" == typeof c &&
                  -1 < c &&
                  0 == c % 1 &&
                  9007199254740991 >= c);
            return c && !ba(b);
          }
          function ba(b) {
            b = T(b) ? H.call(b) : "";
            return (
              "[object Function]" == b || "[object GeneratorFunction]" == b
            );
          }
          function T(b) {
            var c = _typeof(b);
            return !!b && ("object" == c || "function" == c);
          }
          function D(b) {
            if (ma(b)) b = ja(b);
            else if (z(b)) {
              var c = [],
                f;
              for (f in Object(b))
                N.call(b, f) && "constructor" != f && c.push(f);
              b = c;
            } else b = ya(b);
            return b;
          }
          var G = /\w*$/,
            F = /^\[object .+?Constructor\]$/,
            R = /^(?:0|[1-9]\d*)$/,
            C = {};
          C["[object Arguments]"] =
            C["[object Array]"] =
            C["[object ArrayBuffer]"] =
            C["[object DataView]"] =
            C["[object Boolean]"] =
            C["[object Date]"] =
            C["[object Float32Array]"] =
            C["[object Float64Array]"] =
            C["[object Int8Array]"] =
            C["[object Int16Array]"] =
            C["[object Int32Array]"] =
            C["[object Map]"] =
            C["[object Number]"] =
            C["[object Object]"] =
            C["[object RegExp]"] =
            C["[object Set]"] =
            C["[object String]"] =
            C["[object Symbol]"] =
            C["[object Uint8Array]"] =
            C["[object Uint8ClampedArray]"] =
            C["[object Uint16Array]"] =
            C["[object Uint32Array]"] =
              !0;
          C["[object Error]"] =
            C["[object Function]"] =
            C["[object WeakMap]"] =
              !1;
          d = "object" == _typeof(d) && d && d.Object === Object && d;
          var I =
            "object" ==
              ("undefined" == typeof self ? "undefined" : _typeof(self)) &&
            self &&
            self.Object === Object &&
            self;
          d = d || I || Function("return this")();
          var u =
            (I = "object" == _typeof(c) && c && !c.nodeType && c) &&
            "object" == _typeof(b) &&
            b &&
            !b.nodeType &&
            b;
          u = u && u.exports === I;
          var M;
          I = Array.prototype;
          var E = Function.prototype,
            w = Object.prototype,
            h = d["__core-js_shared__"],
            fa = (M = /[^.]+$/.exec((h && h.keys && h.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + M
              : "",
            va = E.toString,
            N = w.hasOwnProperty,
            H = w.toString,
            wa = RegExp(
              "^" +
                va
                  .call(N)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$\x26")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            );
          u = u ? d.Buffer : void 0;
          M = d.Symbol;
          var Ca = d.Uint8Array,
            La = y(Object.getPrototypeOf, Object),
            xa = Object.create,
            Ha = w.propertyIsEnumerable,
            Da = I.splice;
          I = Object.getOwnPropertySymbols;
          u = u ? u.isBuffer : void 0;
          var ya = y(Object.keys, Object);
          E = aa(d, "DataView");
          var X = aa(d, "Map");
          h = aa(d, "Promise");
          var Ia = aa(d, "Set");
          d = aa(d, "WeakMap");
          var Y = aa(Object, "create"),
            qa = V(E),
            pa = V(X),
            Ea = V(h),
            Aa = V(Ia),
            ra = V(d),
            ha = (M = M ? M.prototype : void 0) ? M.valueOf : void 0;
          v.prototype.clear = function () {
            this.__data__ = Y ? Y(null) : {};
          };
          v.prototype.delete = function (b) {
            return this.has(b) && delete this.__data__[b];
          };
          v.prototype.get = function (b) {
            var c = this.__data__;
            return Y
              ? ((b = c[b]), "__lodash_hash_undefined__" === b ? void 0 : b)
              : N.call(c, b)
              ? c[b]
              : void 0;
          };
          v.prototype.has = function (b) {
            var c = this.__data__;
            return Y ? void 0 !== c[b] : N.call(c, b);
          };
          v.prototype.set = function (b, c) {
            return (
              (this.__data__[b] =
                Y && void 0 === c ? "__lodash_hash_undefined__" : c),
              this
            );
          };
          O.prototype.clear = function () {
            this.__data__ = [];
          };
          O.prototype.delete = function (b) {
            var c = this.__data__;
            b = oa(c, b);
            return (
              !(0 > b) && (b == c.length - 1 ? c.pop() : Da.call(c, b, 1), !0)
            );
          };
          O.prototype.get = function (b) {
            var c = this.__data__;
            b = oa(c, b);
            return 0 > b ? void 0 : c[b][1];
          };
          O.prototype.has = function (b) {
            return -1 < oa(this.__data__, b);
          };
          O.prototype.set = function (b, c) {
            var d = this.__data__,
              f = oa(d, b);
            return 0 > f ? d.push([b, c]) : (d[f][1] = c), this;
          };
          da.prototype.clear = function () {
            this.__data__ = {
              hash: new v(),
              map: new (X || O)(),
              string: new v(),
            };
          };
          da.prototype.delete = function (b) {
            return Z(this, b).delete(b);
          };
          da.prototype.get = function (b) {
            return Z(this, b).get(b);
          };
          da.prototype.has = function (b) {
            return Z(this, b).has(b);
          };
          da.prototype.set = function (b, c) {
            return Z(this, b).set(b, c), this;
          };
          S.prototype.clear = function () {
            this.__data__ = new O();
          };
          S.prototype.delete = function (b) {
            return this.__data__.delete(b);
          };
          S.prototype.get = function (b) {
            return this.__data__.get(b);
          };
          S.prototype.has = function (b) {
            return this.__data__.has(b);
          };
          S.prototype.set = function (b, c) {
            var d = this.__data__;
            if (d instanceof O) {
              d = d.__data__;
              if (!X || 199 > d.length) return d.push([b, c]), this;
              d = this.__data__ = new da(d);
            }
            return d.set(b, c), this;
          };
          var sa = I
              ? y(I, Object)
              : function () {
                  return [];
                },
            la = function (b) {
              return H.call(b);
            };
          ((E && "[object DataView]" != la(new E(new ArrayBuffer(1)))) ||
            (X && "[object Map]" != la(new X())) ||
            (h && "[object Promise]" != la(h.resolve())) ||
            (Ia && "[object Set]" != la(new Ia())) ||
            (d && "[object WeakMap]" != la(new d()))) &&
            (la = function (b) {
              var c = H.call(b);
              if (
                (b = (b = "[object Object]" == c ? b.constructor : void 0)
                  ? V(b)
                  : void 0)
              )
                switch (b) {
                  case qa:
                    return "[object DataView]";
                  case pa:
                    return "[object Map]";
                  case Ea:
                    return "[object Promise]";
                  case Aa:
                    return "[object Set]";
                  case ra:
                    return "[object WeakMap]";
                }
              return c;
            });
          var g = Array.isArray,
            p =
              u ||
              function () {
                return !1;
              };
          b.exports = function (b) {
            return L(b, !0, !0);
          };
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    2: [
      function (e, b, c) {
        (function (c) {
          function d(b) {
            var c = -1,
              d = b ? b.length : 0;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function e(b) {
            var c = -1,
              d = b ? b.length : 0;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function k(b) {
            var c = -1,
              d = b ? b.length : 0;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function q(b, c) {
            for (var d, e, h = b.length; h--; )
              if ((d = b[h][0]) === (e = c) || (d != d && e != e)) return h;
            return -1;
          }
          function t(b, c) {
            var d = 0,
              e = (c = (function (b, c) {
                if (w(b)) return !1;
                var d = _typeof(b);
                return "number" == d ||
                  "symbol" == d ||
                  "boolean" == d ||
                  null == b ||
                  ja(b)
                  ? !0
                  : L.test(b) || !oa.test(b) || (null != c && b in Object(c));
              })(c, b)
                ? [c]
                : (function (b) {
                    return w(b) ? b : E(b);
                  })(c)).length;
            for (; null != b && d < e; ) b = b[O(c[d++])];
            return d && d == e ? b : void 0;
          }
          function y(b) {
            return (
              !(!S(b) || (T && T in b)) &&
              ((function (b) {
                b = S(b) ? F.call(b) : "";
                return (
                  "[object Function]" == b || "[object GeneratorFunction]" == b
                );
              })(b) ||
              (function (b) {
                var c = !1;
                if (null != b && "function" != typeof b.toString)
                  try {
                    c = !!(b + "");
                  } catch (N) {}
                return c;
              })(b)
                ? R
                : aa
              ).test(
                (function (b) {
                  if (null != b) {
                    try {
                      return D.call(b);
                    } catch (va) {}
                    return b + "";
                  }
                  return "";
                })(b)
              )
            );
          }
          function m(b, c) {
            b = b.__data__;
            var d = _typeof(c);
            return (
              "string" == d || "number" == d || "symbol" == d || "boolean" == d
                ? "__proto__" !== c
                : null === c
            )
              ? b["string" == typeof c ? "string" : "hash"]
              : b.map;
          }
          function v(b, c) {
            b = null == b ? void 0 : b[c];
            return y(b) ? b : void 0;
          }
          function O(b) {
            if ("string" == typeof b || ja(b)) return b;
            var c = b + "";
            return "0" == c && 1 / b == -K ? "-0" : c;
          }
          function da(b, c) {
            function d() {
              var e = arguments,
                h = c ? c.apply(this, e) : e[0],
                l = d.cache;
              if (l.has(h)) return l.get(h);
              e = b.apply(this, e);
              return (d.cache = l.set(h, e)), e;
            }
            if ("function" != typeof b || (c && "function" != typeof c))
              throw new TypeError("Expected a function");
            return (d.cache = new (da.Cache || k)()), d;
          }
          function S(b) {
            var c = _typeof(b);
            return !!b && ("object" == c || "function" == c);
          }
          function ja(b) {
            return (
              "symbol" == _typeof(b) ||
              (!!b && "object" == _typeof(b) && "[object Symbol]" == F.call(b))
            );
          }
          var K = 1 / 0,
            oa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            L = /^\w*$/,
            U = /^\./,
            P =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Z = /\\(\\)?/g,
            aa = /^\[object .+?Constructor\]$/;
          c = "object" == _typeof(c) && c && c.Object === Object && c;
          var Q =
            "object" ==
              ("undefined" == typeof self ? "undefined" : _typeof(self)) &&
            self &&
            self.Object === Object &&
            self;
          c = c || Q || Function("return this")();
          var z;
          Q = Array.prototype;
          var V = Function.prototype,
            ma = Object.prototype,
            ba = c["__core-js_shared__"],
            T = (z = /[^.]+$/.exec((ba && ba.keys && ba.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + z
              : "",
            D = V.toString,
            G = ma.hasOwnProperty,
            F = ma.toString,
            R = RegExp(
              "^" +
                D.call(G)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$\x26")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            );
          z = c.Symbol;
          var C = Q.splice,
            I = v(c, "Map"),
            u = v(Object, "create"),
            M = (z = z ? z.prototype : void 0) ? z.toString : void 0;
          d.prototype.clear = function () {
            this.__data__ = u ? u(null) : {};
          };
          d.prototype.delete = function (b) {
            return this.has(b) && delete this.__data__[b];
          };
          d.prototype.get = function (b) {
            var c = this.__data__;
            return u
              ? ((b = c[b]), "__lodash_hash_undefined__" === b ? void 0 : b)
              : G.call(c, b)
              ? c[b]
              : void 0;
          };
          d.prototype.has = function (b) {
            var c = this.__data__;
            return u ? void 0 !== c[b] : G.call(c, b);
          };
          d.prototype.set = function (b, c) {
            return (
              (this.__data__[b] =
                u && void 0 === c ? "__lodash_hash_undefined__" : c),
              this
            );
          };
          e.prototype.clear = function () {
            this.__data__ = [];
          };
          e.prototype.delete = function (b) {
            var c = this.__data__;
            b = q(c, b);
            return (
              !(0 > b) && (b == c.length - 1 ? c.pop() : C.call(c, b, 1), !0)
            );
          };
          e.prototype.get = function (b) {
            var c = this.__data__;
            b = q(c, b);
            return 0 > b ? void 0 : c[b][1];
          };
          e.prototype.has = function (b) {
            return -1 < q(this.__data__, b);
          };
          e.prototype.set = function (b, c) {
            var d = this.__data__,
              e = q(d, b);
            return 0 > e ? d.push([b, c]) : (d[e][1] = c), this;
          };
          k.prototype.clear = function () {
            this.__data__ = {
              hash: new d(),
              map: new (I || e)(),
              string: new d(),
            };
          };
          k.prototype.delete = function (b) {
            return m(this, b).delete(b);
          };
          k.prototype.get = function (b) {
            return m(this, b).get(b);
          };
          k.prototype.has = function (b) {
            return m(this, b).has(b);
          };
          k.prototype.set = function (b, c) {
            return m(this, b).set(b, c), this;
          };
          var E = da(function (b) {
            b = (function (b) {
              if (null == b) b = "";
              else if ("string" != typeof b)
                if (ja(b)) b = M ? M.call(b) : "";
                else {
                  var c = b + "";
                  b = "0" == c && 1 / b == -K ? "-0" : c;
                }
              return b;
            })(b);
            var c = [];
            return (
              U.test(b) && c.push(""),
              b.replace(P, function (b, d, e, h) {
                c.push(e ? h.replace(Z, "$1") : d || b);
              }),
              c
            );
          });
          da.Cache = k;
          var w = Array.isArray;
          b.exports = function (b, c, d) {
            b = null == b ? void 0 : t(b, c);
            return void 0 === b ? d : b;
          };
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    3: [
      function (e, b, c) {
        (function (c) {
          function d(b) {
            var c = -1,
              d = b ? b.length : 0;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function e(b) {
            var c = -1,
              d = b ? b.length : 0;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function k(b) {
            var c = -1,
              d = b ? b.length : 0;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function q(b, c) {
            for (var d, e, h = b.length; h--; )
              if ((d = b[h][0]) === (e = c) || (d != d && e != e)) return h;
            return -1;
          }
          function t(b, c) {
            return null != b && I.call(b, c);
          }
          function y(b) {
            return (
              !(!oa(b) || (R && R in b)) &&
              (ja(b) ||
              (function (b) {
                var c = !1;
                if (null != b && "function" != typeof b.toString)
                  try {
                    c = !!(b + "");
                  } catch (xa) {}
                return c;
              })(b)
                ? M
                : V
              ).test(
                (function (b) {
                  if (null != b) {
                    try {
                      return C.call(b);
                    } catch (La) {}
                    return b + "";
                  }
                  return "";
                })(b)
              )
            );
          }
          function m(b, c) {
            b = b.__data__;
            var d = _typeof(c);
            return (
              "string" == d || "number" == d || "symbol" == d || "boolean" == d
                ? "__proto__" !== c
                : null === c
            )
              ? b["string" == typeof c ? "string" : "hash"]
              : b.map;
          }
          function v(b, c) {
            b = null == b ? void 0 : b[c];
            return y(b) ? b : void 0;
          }
          function O(b, c, d) {
            var e,
              h = -1,
              l = (c = (function (b, c) {
                if (H(b)) return !1;
                var d = _typeof(b);
                return "number" == d ||
                  "symbol" == d ||
                  "boolean" == d ||
                  null == b ||
                  L(b)
                  ? !0
                  : Z.test(b) || !P.test(b) || (null != c && b in Object(c));
              })(c, b)
                ? [c]
                : (function (b) {
                    return H(b) ? b : N(b);
                  })(c)).length;
            for (; ++h < l; ) {
              var k = da(c[h]);
              if (!(e = null != b && d(b, k))) break;
              b = b[k];
            }
            return (
              e ||
              (!!(l = b ? b.length : 0) &&
                K(l) &&
                (function (b, c) {
                  return (
                    !!(c = null == c ? 9007199254740991 : c) &&
                    ("number" == typeof b || ma.test(b)) &&
                    -1 < b &&
                    0 == b % 1 &&
                    b < c
                  );
                })(k, l) &&
                (H(b) ||
                  (function (b) {
                    var c;
                    if ((c = !!b && "object" == _typeof(b)))
                      c = null != b && K(b.length) && !ja(b);
                    return (
                      c &&
                      I.call(b, "callee") &&
                      (!E.call(b, "callee") ||
                        "[object Arguments]" == u.call(b))
                    );
                  })(b)))
            );
          }
          function da(b) {
            if ("string" == typeof b || L(b)) return b;
            var c = b + "";
            return "0" == c && 1 / b == -U ? "-0" : c;
          }
          function S(b, c) {
            function d() {
              var e = arguments,
                h = c ? c.apply(this, e) : e[0],
                l = d.cache;
              if (l.has(h)) return l.get(h);
              e = b.apply(this, e);
              return (d.cache = l.set(h, e)), e;
            }
            if ("function" != typeof b || (c && "function" != typeof c))
              throw new TypeError("Expected a function");
            return (d.cache = new (S.Cache || k)()), d;
          }
          function ja(b) {
            b = oa(b) ? u.call(b) : "";
            return (
              "[object Function]" == b || "[object GeneratorFunction]" == b
            );
          }
          function K(b) {
            return (
              "number" == typeof b &&
              -1 < b &&
              0 == b % 1 &&
              9007199254740991 >= b
            );
          }
          function oa(b) {
            var c = _typeof(b);
            return !!b && ("object" == c || "function" == c);
          }
          function L(b) {
            return (
              "symbol" == _typeof(b) ||
              (!!b && "object" == _typeof(b) && "[object Symbol]" == u.call(b))
            );
          }
          var U = 1 / 0,
            P = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Z = /^\w*$/,
            aa = /^\./,
            Q =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            z = /\\(\\)?/g,
            V = /^\[object .+?Constructor\]$/,
            ma = /^(?:0|[1-9]\d*)$/;
          c = "object" == _typeof(c) && c && c.Object === Object && c;
          var ba =
            "object" ==
              ("undefined" == typeof self ? "undefined" : _typeof(self)) &&
            self &&
            self.Object === Object &&
            self;
          c = c || ba || Function("return this")();
          var T;
          ba = Array.prototype;
          var D = Function.prototype,
            G = Object.prototype,
            F = c["__core-js_shared__"],
            R = (T = /[^.]+$/.exec((F && F.keys && F.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + T
              : "",
            C = D.toString,
            I = G.hasOwnProperty,
            u = G.toString,
            M = RegExp(
              "^" +
                C.call(I)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$\x26")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            );
          T = c.Symbol;
          var E = G.propertyIsEnumerable,
            w = ba.splice,
            h = v(c, "Map"),
            fa = v(Object, "create"),
            va = (T = T ? T.prototype : void 0) ? T.toString : void 0;
          d.prototype.clear = function () {
            this.__data__ = fa ? fa(null) : {};
          };
          d.prototype.delete = function (b) {
            return this.has(b) && delete this.__data__[b];
          };
          d.prototype.get = function (b) {
            var c = this.__data__;
            return fa
              ? ((b = c[b]), "__lodash_hash_undefined__" === b ? void 0 : b)
              : I.call(c, b)
              ? c[b]
              : void 0;
          };
          d.prototype.has = function (b) {
            var c = this.__data__;
            return fa ? void 0 !== c[b] : I.call(c, b);
          };
          d.prototype.set = function (b, c) {
            return (
              (this.__data__[b] =
                fa && void 0 === c ? "__lodash_hash_undefined__" : c),
              this
            );
          };
          e.prototype.clear = function () {
            this.__data__ = [];
          };
          e.prototype.delete = function (b) {
            var c = this.__data__;
            b = q(c, b);
            return (
              !(0 > b) && (b == c.length - 1 ? c.pop() : w.call(c, b, 1), !0)
            );
          };
          e.prototype.get = function (b) {
            var c = this.__data__;
            b = q(c, b);
            return 0 > b ? void 0 : c[b][1];
          };
          e.prototype.has = function (b) {
            return -1 < q(this.__data__, b);
          };
          e.prototype.set = function (b, c) {
            var d = this.__data__,
              e = q(d, b);
            return 0 > e ? d.push([b, c]) : (d[e][1] = c), this;
          };
          k.prototype.clear = function () {
            this.__data__ = {
              hash: new d(),
              map: new (h || e)(),
              string: new d(),
            };
          };
          k.prototype.delete = function (b) {
            return m(this, b).delete(b);
          };
          k.prototype.get = function (b) {
            return m(this, b).get(b);
          };
          k.prototype.has = function (b) {
            return m(this, b).has(b);
          };
          k.prototype.set = function (b, c) {
            return m(this, b).set(b, c), this;
          };
          var N = S(function (b) {
            b = (function (b) {
              if (null == b) b = "";
              else if ("string" != typeof b)
                if (L(b)) b = va ? va.call(b) : "";
                else {
                  var c = b + "";
                  b = "0" == c && 1 / b == -U ? "-0" : c;
                }
              return b;
            })(b);
            var c = [];
            return (
              aa.test(b) && c.push(""),
              b.replace(Q, function (b, d, e, h) {
                c.push(e ? h.replace(z, "$1") : d || b);
              }),
              c
            );
          });
          S.Cache = k;
          var H = Array.isArray;
          b.exports = function (b, c) {
            return null != b && O(b, c, t);
          };
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    4: [
      function (e, b, c) {
        (function (d) {
          function e(b, c) {
            for (var d = -1, f = null == b ? 0 : b.length; ++d < f; )
              if (c(b[d], d, b)) return !0;
            return !1;
          }
          function l(b) {
            var c = -1,
              d = Array(b.size);
            return (
              b.forEach(function (b, f) {
                d[++c] = [f, b];
              }),
              d
            );
          }
          function k(b) {
            var c = -1,
              d = Array(b.size);
            return (
              b.forEach(function (b) {
                d[++c] = b;
              }),
              d
            );
          }
          function q(b) {
            var c = -1,
              d = null == b ? 0 : b.length;
            for (this.clear(); ++c < d; ) {
              var f = b[c];
              this.set(f[0], f[1]);
            }
          }
          function t(b) {
            var c = -1,
              d = null == b ? 0 : b.length;
            for (this.clear(); ++c < d; ) {
              var f = b[c];
              this.set(f[0], f[1]);
            }
          }
          function y(b) {
            var c = -1,
              d = null == b ? 0 : b.length;
            for (this.clear(); ++c < d; ) {
              var f = b[c];
              this.set(f[0], f[1]);
            }
          }
          function m(b) {
            var c = -1,
              d = null == b ? 0 : b.length;
            for (this.__data__ = new y(); ++c < d; ) this.add(b[c]);
          }
          function v(b) {
            this.size = (this.__data__ = new t(b)).size;
          }
          function O(b, c) {
            for (var d = b.length; d--; ) if (Z(b[d][0], c)) return d;
            return -1;
          }
          function da(b, c, d) {
            c = c(b);
            if (!la(b)) {
              b = d(b);
              d = -1;
              for (var f = b.length, e = c.length; ++d < f; ) c[e + d] = b[d];
            }
            return c;
          }
          function S(b) {
            if (null == b)
              b = void 0 === b ? "[object Undefined]" : "[object Null]";
            else if (xa && xa in Object(b)) {
              var c = fa.call(b, xa),
                d = b[xa];
              try {
                var f = !(b[xa] = void 0);
              } catch (A) {}
              var e = N.call(b);
              f && (c ? (b[xa] = d) : delete b[xa]);
              b = e;
            } else b = N.call(b);
            return b;
          }
          function ja(b) {
            return V(b) && "[object Arguments]" == S(b);
          }
          function K(b, c, d, e, h) {
            return (
              b === c ||
              (null == b || null == c || (!V(b) && !V(c))
                ? b != b && c != c
                : (function (b, c, d, f, e, h) {
                    var A = la(b),
                      m = la(c),
                      w = A ? "[object Array]" : ha(b),
                      E = m ? "[object Array]" : ha(c),
                      ea =
                        "[object Object]" ==
                        (w = "[object Arguments]" == w ? "[object Object]" : w);
                    m =
                      "[object Object]" ==
                      (E = "[object Arguments]" == E ? "[object Object]" : E);
                    if ((E = w == E) && g(b)) {
                      if (!g(c)) return !1;
                      ea = !(A = !0);
                    }
                    return E && !ea
                      ? ((h = h || new v()),
                        A || p(b)
                          ? oa(b, c, d, f, e, h)
                          : (function (b, c, d, f, e, g, h) {
                              switch (d) {
                                case "[object DataView]":
                                  if (
                                    b.byteLength != c.byteLength ||
                                    b.byteOffset != c.byteOffset
                                  )
                                    break;
                                  b = b.buffer;
                                  c = c.buffer;
                                case "[object ArrayBuffer]":
                                  return !(
                                    b.byteLength != c.byteLength ||
                                    !g(new wa(b), new wa(c))
                                  );
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                  return Z(+b, +c);
                                case "[object Error]":
                                  return (
                                    b.name == c.name && b.message == c.message
                                  );
                                case "[object RegExp]":
                                case "[object String]":
                                  return b == c + "";
                                case "[object Map]":
                                  var A = l;
                                case "[object Set]":
                                  if (
                                    ((A = A || k), b.size != c.size && !(f & 1))
                                  )
                                    break;
                                  if ((d = h.get(b))) return d == c;
                                  f |= 2;
                                  h.set(b, c);
                                  c = oa(A(b), A(c), f, e, g, h);
                                  return h.delete(b), c;
                                case "[object Symbol]":
                                  if (Aa) return Aa.call(b) == Aa.call(c);
                              }
                              return !1;
                            })(b, c, w, d, f, e, h))
                      : d & 1 ||
                        ((A = ea && fa.call(b, "__wrapped__")),
                        (w = m && fa.call(c, "__wrapped__")),
                        !A && !w)
                      ? E &&
                        ((h = h || new v()),
                        (function (b, c, d, f, e, g) {
                          var h = d & 1,
                            A = da(b, ma, ra),
                            l = A.length,
                            k = da(c, ma, ra).length;
                          if (l != k && !h) return !1;
                          for (var m = l; m--; ) {
                            var w = A[m];
                            if (!(h ? w in c : fa.call(c, w))) return !1;
                          }
                          if ((k = g.get(b)) && g.get(c)) return k == c;
                          k = !0;
                          g.set(b, c);
                          g.set(c, b);
                          for (var E = h; ++m < l; ) {
                            w = A[m];
                            var Ka = b[w],
                              ea = c[w];
                            if (f)
                              var p = h
                                ? f(ea, Ka, w, c, b, g)
                                : f(Ka, ea, w, b, c, g);
                            if (
                              void 0 === p
                                ? Ka !== ea && !e(Ka, ea, d, f, g)
                                : !p
                            ) {
                              k = !1;
                              break;
                            }
                            E = E || "constructor" == w;
                          }
                          k &&
                            !E &&
                            ((d = b.constructor),
                            (f = c.constructor),
                            d != f &&
                              "constructor" in b &&
                              "constructor" in c &&
                              !(
                                "function" == typeof d &&
                                d instanceof d &&
                                "function" == typeof f &&
                                f instanceof f
                              ) &&
                              (k = !1));
                          return g.delete(b), g.delete(c), k;
                        })(b, c, d, f, e, h))
                      : ((b = A ? b.value() : b),
                        (c = w ? c.value() : c),
                        (h = h || new v()),
                        e(b, c, d, f, h));
                  })(b, c, d, e, K, h))
            );
          }
          function oa(b, c, d, g, h, A) {
            var f = d & 1,
              l = b.length,
              k = c.length;
            if (l != k && !(f && l < k)) return !1;
            if ((k = A.get(b)) && A.get(c)) return k == c;
            k = -1;
            var w = !0,
              E = d & 2 ? new m() : void 0;
            A.set(b, c);
            for (A.set(c, b); ++k < l; ) {
              var p = b[k],
                q = c[k];
              if (g) var v = f ? g(q, p, k, c, b, A) : g(p, q, k, b, c, A);
              if (void 0 !== v) {
                if (v) continue;
                w = !1;
                break;
              }
              if (E) {
                if (
                  !e(c, function (b, c) {
                    if (((f = c), !E.has(f) && (p === b || h(p, b, d, g, A))))
                      return E.push(c);
                    var f;
                  })
                ) {
                  w = !1;
                  break;
                }
              } else if (p !== q && !h(p, q, d, g, A)) {
                w = !1;
                break;
              }
            }
            return A.delete(b), A.delete(c), w;
          }
          function L(b, c) {
            b = b.__data__;
            var d = _typeof(c);
            return (
              "string" == d || "number" == d || "symbol" == d || "boolean" == d
                ? "__proto__" !== c
                : null === c
            )
              ? b["string" == typeof c ? "string" : "hash"]
              : b.map;
          }
          function U(b, c) {
            b = null == b ? void 0 : b[c];
            return !z(b) || (va && va in b) || !(aa(b) ? H : ba).test(P(b))
              ? void 0
              : b;
          }
          function P(b) {
            if (null != b) {
              try {
                return h.call(b);
              } catch (J) {}
              return b + "";
            }
            return "";
          }
          function Z(b, c) {
            return b === c || (b != b && c != c);
          }
          function aa(b) {
            if (!z(b)) return !1;
            b = S(b);
            return (
              "[object Function]" == b ||
              "[object GeneratorFunction]" == b ||
              "[object AsyncFunction]" == b ||
              "[object Proxy]" == b
            );
          }
          function Q(b) {
            return (
              "number" == typeof b &&
              -1 < b &&
              0 == b % 1 &&
              9007199254740991 >= b
            );
          }
          function z(b) {
            var c = _typeof(b);
            return null != b && ("object" == c || "function" == c);
          }
          function V(b) {
            return null != b && "object" == _typeof(b);
          }
          function ma(b) {
            if (null != b && Q(b.length) && !aa(b)) {
              var c = la(b),
                d = !c && sa(b),
                f = !c && !d && g(b),
                e = !c && !d && !f && p(b);
              if ((c = c || d || f || e)) {
                d = b.length;
                for (var h = String, k = -1, l = Array(d); ++k < d; )
                  l[k] = h(k);
                d = l;
              } else d = [];
              h = d.length;
              for (var m in b)
                !(k = !fa.call(b, m)) &&
                  (k = c) &&
                  ((l =
                    "length" == m ||
                    (f && ("offset" == m || "parent" == m)) ||
                    (e &&
                      ("buffer" == m ||
                        "byteLength" == m ||
                        "byteOffset" == m))) ||
                    ((l = m),
                    (k = h),
                    (l =
                      !!(k = null == k ? 9007199254740991 : k) &&
                      ("number" == typeof l || T.test(l)) &&
                      -1 < l &&
                      0 == l % 1 &&
                      l < k)),
                  (k = l)),
                  k || d.push(m);
              b = d;
            } else if (
              ((m = b && b.constructor),
              b !== (("function" == typeof m && m.prototype) || w))
            )
              b = Da(b);
            else {
              m = [];
              for (f in Object(b))
                fa.call(b, f) && "constructor" != f && m.push(f);
              b = m;
            }
            return b;
          }
          var ba = /^\[object .+?Constructor\]$/,
            T = /^(?:0|[1-9]\d*)$/,
            D = {};
          D["[object Float32Array]"] =
            D["[object Float64Array]"] =
            D["[object Int8Array]"] =
            D["[object Int16Array]"] =
            D["[object Int32Array]"] =
            D["[object Uint8Array]"] =
            D["[object Uint8ClampedArray]"] =
            D["[object Uint16Array]"] =
            D["[object Uint32Array]"] =
              !0;
          D["[object Arguments]"] =
            D["[object Array]"] =
            D["[object ArrayBuffer]"] =
            D["[object Boolean]"] =
            D["[object DataView]"] =
            D["[object Date]"] =
            D["[object Error]"] =
            D["[object Function]"] =
            D["[object Map]"] =
            D["[object Number]"] =
            D["[object Object]"] =
            D["[object RegExp]"] =
            D["[object Set]"] =
            D["[object String]"] =
            D["[object WeakMap]"] =
              !1;
          var G = "object" == _typeof(d) && d && d.Object === Object && d;
          d =
            "object" ==
              ("undefined" == typeof self ? "undefined" : _typeof(self)) &&
            self &&
            self.Object === Object &&
            self;
          d = G || d || Function("return this")();
          var F = "object" == _typeof(c) && c && !c.nodeType && c,
            R = F && "object" == _typeof(b) && b && !b.nodeType && b;
          G = (F = R && R.exports === F) && G.process;
          a: {
            try {
              var C = G && G.binding && G.binding("util");
              break a;
            } catch (f) {}
            C = void 0;
          }
          var I = C && C.isTypedArray,
            u,
            M,
            E;
          C = Array.prototype;
          var w = Object.prototype;
          G = d["__core-js_shared__"];
          var h = Function.prototype.toString,
            fa = w.hasOwnProperty,
            va = (u = /[^.]+$/.exec((G && G.keys && G.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + u
              : "",
            N = w.toString,
            H = RegExp(
              "^" +
                h
                  .call(fa)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$\x26")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            );
          G = F ? d.Buffer : void 0;
          u = d.Symbol;
          var wa = d.Uint8Array,
            Ca = w.propertyIsEnumerable,
            La = C.splice,
            xa = u ? u.toStringTag : void 0,
            Ha = Object.getOwnPropertySymbols;
          C = G ? G.isBuffer : void 0;
          var Da =
            ((M = Object.keys),
            (E = Object),
            function (b) {
              return M(E(b));
            });
          G = U(d, "DataView");
          var ya = U(d, "Map");
          F = U(d, "Promise");
          R = U(d, "Set");
          d = U(d, "WeakMap");
          var X = U(Object, "create"),
            Ia = P(G),
            Y = P(ya),
            qa = P(F),
            pa = P(R),
            Ea = P(d),
            Aa = (u = u ? u.prototype : void 0) ? u.valueOf : void 0;
          q.prototype.clear = function () {
            this.__data__ = X ? X(null) : {};
            this.size = 0;
          };
          q.prototype.delete = function (b) {
            b = this.has(b) && delete this.__data__[b];
            return (this.size -= b ? 1 : 0), b;
          };
          q.prototype.get = function (b) {
            var c = this.__data__;
            return X
              ? ((b = c[b]), "__lodash_hash_undefined__" === b ? void 0 : b)
              : fa.call(c, b)
              ? c[b]
              : void 0;
          };
          q.prototype.has = function (b) {
            var c = this.__data__;
            return X ? void 0 !== c[b] : fa.call(c, b);
          };
          q.prototype.set = function (b, c) {
            var d = this.__data__;
            return (
              (this.size += this.has(b) ? 0 : 1),
              (d[b] = X && void 0 === c ? "__lodash_hash_undefined__" : c),
              this
            );
          };
          t.prototype.clear = function () {
            this.__data__ = [];
            this.size = 0;
          };
          t.prototype.delete = function (b) {
            var c = this.__data__;
            b = O(c, b);
            return (
              !(0 > b) &&
              (b == c.length - 1 ? c.pop() : La.call(c, b, 1), --this.size, !0)
            );
          };
          t.prototype.get = function (b) {
            var c = this.__data__;
            b = O(c, b);
            return 0 > b ? void 0 : c[b][1];
          };
          t.prototype.has = function (b) {
            return -1 < O(this.__data__, b);
          };
          t.prototype.set = function (b, c) {
            var d = this.__data__,
              f = O(d, b);
            return 0 > f ? (++this.size, d.push([b, c])) : (d[f][1] = c), this;
          };
          y.prototype.clear = function () {
            this.size = 0;
            this.__data__ = {
              hash: new q(),
              map: new (ya || t)(),
              string: new q(),
            };
          };
          y.prototype.delete = function (b) {
            b = L(this, b).delete(b);
            return (this.size -= b ? 1 : 0), b;
          };
          y.prototype.get = function (b) {
            return L(this, b).get(b);
          };
          y.prototype.has = function (b) {
            return L(this, b).has(b);
          };
          y.prototype.set = function (b, c) {
            var d = L(this, b),
              f = d.size;
            return d.set(b, c), (this.size += d.size == f ? 0 : 1), this;
          };
          m.prototype.add = m.prototype.push = function (b) {
            return this.__data__.set(b, "__lodash_hash_undefined__"), this;
          };
          m.prototype.has = function (b) {
            return this.__data__.has(b);
          };
          v.prototype.clear = function () {
            this.__data__ = new t();
            this.size = 0;
          };
          v.prototype.delete = function (b) {
            var c = this.__data__;
            b = c.delete(b);
            return (this.size = c.size), b;
          };
          v.prototype.get = function (b) {
            return this.__data__.get(b);
          };
          v.prototype.has = function (b) {
            return this.__data__.has(b);
          };
          v.prototype.set = function (b, c) {
            var d = this.__data__;
            if (d instanceof t) {
              var e = d.__data__;
              if (!ya || 199 > e.length)
                return e.push([b, c]), (this.size = ++d.size), this;
              d = this.__data__ = new y(e);
            }
            return d.set(b, c), (this.size = d.size), this;
          };
          var ra = Ha
              ? function (b) {
                  return null == b
                    ? []
                    : ((b = Object(b)),
                      (function (b, c) {
                        for (
                          var d = -1,
                            e = null == b ? 0 : b.length,
                            f = 0,
                            g = [];
                          ++d < e;

                        ) {
                          var h = b[d];
                          c(h, d, b) && (g[f++] = h);
                        }
                        return g;
                      })(Ha(b), function (c) {
                        return Ca.call(b, c);
                      }));
                }
              : function () {
                  return [];
                },
            ha = S;
          ((G && "[object DataView]" != ha(new G(new ArrayBuffer(1)))) ||
            (ya && "[object Map]" != ha(new ya())) ||
            (F && "[object Promise]" != ha(F.resolve())) ||
            (R && "[object Set]" != ha(new R())) ||
            (d && "[object WeakMap]" != ha(new d()))) &&
            (ha = function (b) {
              var c = S(b);
              if (
                (b = (b = "[object Object]" == c ? b.constructor : void 0)
                  ? P(b)
                  : "")
              )
                switch (b) {
                  case Ia:
                    return "[object DataView]";
                  case Y:
                    return "[object Map]";
                  case qa:
                    return "[object Promise]";
                  case pa:
                    return "[object Set]";
                  case Ea:
                    return "[object WeakMap]";
                }
              return c;
            });
          var sa = ja(
              (function () {
                return arguments;
              })()
            )
              ? ja
              : function (b) {
                  return V(b) && fa.call(b, "callee") && !Ca.call(b, "callee");
                },
            la = Array.isArray,
            g =
              C ||
              function () {
                return !1;
              },
            p = I
              ? function (b) {
                  return I(b);
                }
              : function (b) {
                  return V(b) && Q(b.length) && !!D[S(b)];
                };
          b.exports = function (b, c) {
            return K(b, c);
          };
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    5: [
      function (e, b, c) {
        (function (d) {
          function e() {}
          function l(b) {
            var c = -1,
              d = null == b ? 0 : b.length;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function k(b) {
            var c = -1,
              d = null == b ? 0 : b.length;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function q(b) {
            var c = -1,
              d = null == b ? 0 : b.length;
            for (this.clear(); ++c < d; ) {
              var e = b[c];
              this.set(e[0], e[1]);
            }
          }
          function t(b) {
            this.size = (this.__data__ = new k(b)).size;
          }
          function y(b, c, d) {
            ((void 0 === d || Z(b[c], d)) && (void 0 !== d || c in b)) ||
              v(b, c, d);
          }
          function m(b, c) {
            for (var d = b.length; d--; ) if (Z(b[d][0], c)) return d;
            return -1;
          }
          function v(b, c, d) {
            "__proto__" == c && qa
              ? qa(b, c, {
                  configurable: !0,
                  enumerable: !0,
                  value: d,
                  writable: !0,
                })
              : (b[c] = d);
          }
          function O(b) {
            if (null == b)
              b = void 0 === b ? "[object Undefined]" : "[object Null]";
            else if (Y && Y in Object(b)) {
              var c = N.call(b, Y),
                d = b[Y];
              try {
                var e = !(b[Y] = void 0);
              } catch (ob) {}
              var f = wa.call(b);
              e && (c ? (b[Y] = d) : delete b[Y]);
              b = f;
            } else b = wa.call(b);
            return b;
          }
          function da(b) {
            return ma(b) && "[object Arguments]" == O(b);
          }
          function S(b) {
            return (
              !(!V(b) || (H && H in b)) &&
              (Q(b) ? La : D).test(
                (function (b) {
                  if (null != b) {
                    try {
                      return va.call(b);
                    } catch (Za) {}
                    return b + "";
                  }
                  return "";
                })(b)
              )
            );
          }
          function ja(b, c, d, g, h) {
            b !== c &&
              ha(
                c,
                function (k, l) {
                  if (((h = h || new t()), V(k)))
                    !(function (b, c, d, g, h, k, l) {
                      var m = P(b, d),
                        A = P(c, d),
                        w = l.get(A);
                      if (w) return y(b, d, w);
                      c = k ? k(m, A, d + "", b, c, l) : void 0;
                      if ((w = void 0 === c)) {
                        var E = J(A),
                          Ka = !E && Pa(A),
                          p = !E && !Ka && bb(A);
                        c = A;
                        E || Ka || p
                          ? (c = J(m)
                              ? m
                              : (function (b) {
                                  return ma(b) && aa(b);
                                })(m)
                              ? (function (b, c) {
                                  var d = -1,
                                    e = b.length;
                                  for (c = c || Array(e); ++d < e; )
                                    c[d] = b[d];
                                  return c;
                                })(m)
                              : Ka
                              ? (function (b, c) {
                                  if (c) return b.slice();
                                  c = b.length;
                                  c = Ha ? Ha(c) : new b.constructor(c);
                                  return b.copy(c), c;
                                })(A, !(w = !1))
                              : p
                              ? (function (b, c) {
                                  if (c) {
                                    c = b.buffer;
                                    var d = new c.constructor(c.byteLength);
                                    c = (new xa(d).set(new xa(c)), d);
                                  } else c = b.buffer;
                                  return new b.constructor(
                                    c,
                                    b.byteOffset,
                                    b.length
                                  );
                                })(A, !(w = !1))
                              : [])
                          : (function (b) {
                              if (!ma(b) || "[object Object]" != O(b))
                                return !1;
                              b = Da(b);
                              if (null === b) return !0;
                              b = N.call(b, "constructor") && b.constructor;
                              return (
                                "function" == typeof b &&
                                b instanceof b &&
                                va.call(b) == Ca
                              );
                            })(A) || f(A)
                          ? f((c = m))
                            ? (c = (function (b) {
                                var c = ba(b),
                                  d = void 0,
                                  e = !d;
                                d = d || {};
                                for (var f = -1, g = c.length; ++f < g; ) {
                                  var h = c[f],
                                    k = void 0;
                                  void 0 === k && (k = b[h]);
                                  e
                                    ? v(d, h, k)
                                    : ((A = k),
                                      void 0,
                                      (w = (l = d)[(m = h)]),
                                      (N.call(l, m) &&
                                        Z(w, A) &&
                                        (void 0 !== A || m in l)) ||
                                        v(l, m, A));
                                }
                                var l, m, A, w;
                                return d;
                              })(m))
                            : (V(m) && !Q(m)) ||
                              (c = (function (b) {
                                "function" != typeof b.constructor || U(b)
                                  ? (b = {})
                                  : ((b = Da(b)),
                                    V(b)
                                      ? ya
                                        ? (b = ya(b))
                                        : ((e.prototype = b),
                                          (b = new e()),
                                          (b = ((e.prototype = void 0), b)))
                                      : (b = {}));
                                return b;
                              })(A))
                          : (w = !1);
                      }
                      w && (l.set(A, c), h(c, A, g, k, l), l.delete(A));
                      y(b, d, c);
                    })(b, c, l, d, ja, g, h);
                  else {
                    var m = g ? g(P(b, l), k, l + "", b, c, h) : void 0;
                    void 0 === m && (m = k);
                    y(b, l, m);
                  }
                },
                ba
              );
          }
          function K(b, c) {
            b = b.__data__;
            var d = _typeof(c);
            return (
              "string" == d || "number" == d || "symbol" == d || "boolean" == d
                ? "__proto__" !== c
                : null === c
            )
              ? b["string" == typeof c ? "string" : "hash"]
              : b.map;
          }
          function oa(b, c) {
            b = null == b ? void 0 : b[c];
            return S(b) ? b : void 0;
          }
          function L(b, c) {
            var d = _typeof(b);
            return (
              !!(c = null == c ? 9007199254740991 : c) &&
              ("number" == d || ("symbol" != d && G.test(b))) &&
              -1 < b &&
              0 == b % 1 &&
              b < c
            );
          }
          function U(b) {
            var c = b && b.constructor;
            return b === (("function" == typeof c && c.prototype) || fa);
          }
          function P(b, c) {
            if (
              ("constructor" !== c || "function" != typeof b[c]) &&
              "__proto__" != c
            )
              return b[c];
          }
          function Z(b, c) {
            return b === c || (b != b && c != c);
          }
          function aa(b) {
            return null != b && z(b.length) && !Q(b);
          }
          function Q(b) {
            if (!V(b)) return !1;
            b = O(b);
            return (
              "[object Function]" == b ||
              "[object GeneratorFunction]" == b ||
              "[object AsyncFunction]" == b ||
              "[object Proxy]" == b
            );
          }
          function z(b) {
            return (
              "number" == typeof b &&
              -1 < b &&
              0 == b % 1 &&
              9007199254740991 >= b
            );
          }
          function V(b) {
            var c = _typeof(b);
            return null != b && ("object" == c || "function" == c);
          }
          function ma(b) {
            return null != b && "object" == _typeof(b);
          }
          function ba(b) {
            if (aa(b)) {
              var c = J(b),
                d = !c && f(b),
                e = !c && !d && Pa(b),
                g = !c && !d && !e && bb(b);
              if ((c = c || d || e || g)) {
                d = b.length;
                for (var h = String, k = -1, l = Array(d); ++k < d; )
                  l[k] = h(k);
                d = l;
              } else d = [];
              h = d.length;
              for (var m in b)
                (c &&
                  ("length" == m ||
                    (e && ("offset" == m || "parent" == m)) ||
                    (g &&
                      ("buffer" == m ||
                        "byteLength" == m ||
                        "byteOffset" == m)) ||
                    L(m, h))) ||
                  d.push(m);
              b = d;
            } else if (V(b)) {
              m = U(b);
              g = [];
              for (e in b)
                ("constructor" != e || (!m && N.call(b, e))) && g.push(e);
              b = g;
            } else {
              m = [];
              if (null != b) for (g in Object(b)) m.push(g);
              b = m;
            }
            return b;
          }
          function T(b) {
            return b;
          }
          var D = /^\[object .+?Constructor\]$/,
            G = /^(?:0|[1-9]\d*)$/,
            F = {};
          F["[object Float32Array]"] =
            F["[object Float64Array]"] =
            F["[object Int8Array]"] =
            F["[object Int16Array]"] =
            F["[object Int32Array]"] =
            F["[object Uint8Array]"] =
            F["[object Uint8ClampedArray]"] =
            F["[object Uint16Array]"] =
            F["[object Uint32Array]"] =
              !0;
          F["[object Arguments]"] =
            F["[object Array]"] =
            F["[object ArrayBuffer]"] =
            F["[object Boolean]"] =
            F["[object DataView]"] =
            F["[object Date]"] =
            F["[object Error]"] =
            F["[object Function]"] =
            F["[object Map]"] =
            F["[object Number]"] =
            F["[object Object]"] =
            F["[object RegExp]"] =
            F["[object Set]"] =
            F["[object String]"] =
            F["[object WeakMap]"] =
              !1;
          var R = "object" == _typeof(d) && d && d.Object === Object && d;
          d =
            "object" ==
              ("undefined" == typeof self ? "undefined" : _typeof(self)) &&
            self &&
            self.Object === Object &&
            self;
          d = R || d || Function("return this")();
          var C = "object" == _typeof(c) && c && !c.nodeType && c,
            I = C && "object" == _typeof(b) && b && !b.nodeType && b;
          R = (C = I && I.exports === C) && R.process;
          a: {
            try {
              var u =
                (I && I.require && I.require("util").types) ||
                (R && R.binding && R.binding("util"));
              break a;
            } catch (A) {}
            u = void 0;
          }
          var M = u && u.isTypedArray,
            E,
            w,
            h;
          u = Array.prototype;
          var fa = Object.prototype;
          R = d["__core-js_shared__"];
          var va = Function.prototype.toString,
            N = fa.hasOwnProperty,
            H = (E = /[^.]+$/.exec((R && R.keys && R.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + E
              : "",
            wa = fa.toString,
            Ca = va.call(Object),
            La = RegExp(
              "^" +
                va
                  .call(N)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$\x26")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            );
          E = C ? d.Buffer : void 0;
          C = d.Symbol;
          var xa = d.Uint8Array,
            Ha = E ? E.allocUnsafe : void 0,
            Da =
              ((w = Object.getPrototypeOf),
              (h = Object),
              function (b) {
                return w(h(b));
              }),
            ya = Object.create,
            X = fa.propertyIsEnumerable,
            Ia = u.splice,
            Y = C ? C.toStringTag : void 0,
            qa = (function () {
              try {
                var b = oa(Object, "defineProperty");
                return b({}, "", {}), b;
              } catch (ea) {}
            })();
          E = E ? E.isBuffer : void 0;
          var pa = Math.max,
            Ea = Date.now,
            Aa = oa(d, "Map"),
            ra = oa(Object, "create");
          l.prototype.clear = function () {
            this.__data__ = ra ? ra(null) : {};
            this.size = 0;
          };
          l.prototype.delete = function (b) {
            b = this.has(b) && delete this.__data__[b];
            return (this.size -= b ? 1 : 0), b;
          };
          l.prototype.get = function (b) {
            var c = this.__data__;
            return ra
              ? ((b = c[b]), "__lodash_hash_undefined__" === b ? void 0 : b)
              : N.call(c, b)
              ? c[b]
              : void 0;
          };
          l.prototype.has = function (b) {
            var c = this.__data__;
            return ra ? void 0 !== c[b] : N.call(c, b);
          };
          l.prototype.set = function (b, c) {
            var d = this.__data__;
            return (
              (this.size += this.has(b) ? 0 : 1),
              (d[b] = ra && void 0 === c ? "__lodash_hash_undefined__" : c),
              this
            );
          };
          k.prototype.clear = function () {
            this.__data__ = [];
            this.size = 0;
          };
          k.prototype.delete = function (b) {
            var c = this.__data__;
            b = m(c, b);
            return (
              !(0 > b) &&
              (b == c.length - 1 ? c.pop() : Ia.call(c, b, 1), --this.size, !0)
            );
          };
          k.prototype.get = function (b) {
            var c = this.__data__;
            b = m(c, b);
            return 0 > b ? void 0 : c[b][1];
          };
          k.prototype.has = function (b) {
            return -1 < m(this.__data__, b);
          };
          k.prototype.set = function (b, c) {
            var d = this.__data__,
              e = m(d, b);
            return 0 > e ? (++this.size, d.push([b, c])) : (d[e][1] = c), this;
          };
          q.prototype.clear = function () {
            this.size = 0;
            this.__data__ = {
              hash: new l(),
              map: new (Aa || k)(),
              string: new l(),
            };
          };
          q.prototype.delete = function (b) {
            b = K(this, b).delete(b);
            return (this.size -= b ? 1 : 0), b;
          };
          q.prototype.get = function (b) {
            return K(this, b).get(b);
          };
          q.prototype.has = function (b) {
            return K(this, b).has(b);
          };
          q.prototype.set = function (b, c) {
            var d = K(this, b),
              e = d.size;
            return d.set(b, c), (this.size += d.size == e ? 0 : 1), this;
          };
          t.prototype.clear = function () {
            this.__data__ = new k();
            this.size = 0;
          };
          t.prototype.delete = function (b) {
            var c = this.__data__;
            b = c.delete(b);
            return (this.size = c.size), b;
          };
          t.prototype.get = function (b) {
            return this.__data__.get(b);
          };
          t.prototype.has = function (b) {
            return this.__data__.has(b);
          };
          t.prototype.set = function (b, c) {
            var d = this.__data__;
            if (d instanceof k) {
              var e = d.__data__;
              if (!Aa || 199 > e.length)
                return e.push([b, c]), (this.size = ++d.size), this;
              d = this.__data__ = new q(e);
            }
            return d.set(b, c), (this.size = d.size), this;
          };
          var ha = function (b, c, d) {
              var e = -1,
                f = Object(b);
              d = d(b);
              for (var g = d.length; g--; ) {
                var h = d[++e];
                if (!1 === c(f[h], h, f)) break;
              }
              return b;
            },
            sa,
            la,
            g,
            p =
              ((sa = qa
                ? function (b, c) {
                    return qa(b, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      value: (function (b) {
                        return function () {
                          return b;
                        };
                      })(c),
                      writable: !0,
                    });
                  }
                : T),
              (g = la = 0),
              function () {
                var b = Ea(),
                  c = 16 - (b - g);
                if (((g = b), 0 < c)) {
                  if (800 <= ++la) return arguments[0];
                } else la = 0;
                return sa.apply(void 0, arguments);
              }),
            f = da(
              (function () {
                return arguments;
              })()
            )
              ? da
              : function (b) {
                  return ma(b) && N.call(b, "callee") && !X.call(b, "callee");
                },
            J = Array.isArray,
            Pa =
              E ||
              function () {
                return !1;
              },
            bb = M
              ? function (b) {
                  return M(b);
                }
              : function (b) {
                  return ma(b) && z(b.length) && !!F[O(b)];
                },
            Ya;
          d =
            ((Ya = function (b, c, d, e) {
              ja(b, c, d, e);
            }),
            (function (b, c) {
              return p(
                (function (b, c, d) {
                  return (
                    (c = pa(void 0 === c ? b.length - 1 : c, 0)),
                    function () {
                      for (
                        var e = arguments,
                          f = -1,
                          g = pa(e.length - c, 0),
                          h = Array(g);
                        ++f < g;

                      )
                        h[f] = e[c + f];
                      f = -1;
                      for (g = Array(c + 1); ++f < c; ) g[f] = e[f];
                      return (
                        (g[c] = d(h)),
                        (function (b, c, d) {
                          switch (d.length) {
                            case 0:
                              return b.call(c);
                            case 1:
                              return b.call(c, d[0]);
                            case 2:
                              return b.call(c, d[0], d[1]);
                            case 3:
                              return b.call(c, d[0], d[1], d[2]);
                          }
                          return b.apply(c, d);
                        })(b, this, g)
                      );
                    }
                  );
                })(b, c, T),
                b + ""
              );
            })(function (b, c) {
              var d = -1,
                e = c.length,
                f = 1 < e ? c[e - 1] : void 0,
                g = 2 < e ? c[2] : void 0;
              f = 3 < Ya.length && "function" == typeof f ? (e--, f) : void 0;
              var h;
              if ((h = g)) {
                h = c[0];
                var k = c[1];
                if (V(g)) {
                  var l = _typeof(k);
                  h =
                    !!("number" == l
                      ? aa(g) && L(k, g.length)
                      : "string" == l && k in g) && Z(g[k], h);
                } else h = !1;
              }
              h && ((f = 3 > e ? void 0 : f), (e = 1));
              for (b = Object(b); ++d < e; ) (g = c[d]) && Ya(b, g, d, f);
              return b;
            }));
          b.exports = d;
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    6: [
      function (e, b, c) {
        var d = e("lodash.mergewith"),
          r = e("lodash.clonedeep"),
          l = {};
        l.Item = e("./DataLayerItem").item;
        l.Listener = e("./DataLayerListener");
        l.ListenerManagerFactory = e("./DataLayerListenerManagerFactory");
        l.constants = e("./DataLayerConstants");
        l.Manager = function (b) {
          this._config = b;
          this._initialize();
        };
        l.Manager.prototype._initialize = function () {
          Array.isArray(this._config.dataLayer) ||
            (this._config.dataLayer = []);
          this._dataLayer = this._config.dataLayer;
          this._state = {};
          this._previousStateCopy = {};
          this._listenerManager = l.ListenerManagerFactory.create(this);
          this._augment();
          this._processItems();
          var b = new l.Item({ event: l.constants.dataLayerEvent.READY });
          this._listenerManager.triggerListeners(b);
        };
        l.Manager.prototype._updateState = function (b) {
          this._previousStateCopy = r(this._state);
          this._customMerge(this._state, b.config.data);
        };
        l.Manager.prototype._customMerge = function (b, c) {
          d(b, c, function (b, c, d, e) {
            void 0 === c && delete e[d];
          });
        };
        l.Manager.prototype._augment = function () {
          var b = this;
          b._dataLayer.push = function (c) {
            var d = arguments,
              e = arguments;
            if (
              (Object.keys(d).forEach(function (c) {
                var k = new l.Item(d[c]);
                b._processItem(k);
                (k.type !== l.constants.itemType.LISTENER_ON &&
                  k.type !== l.constants.itemType.LISTENER_OFF &&
                  k.valid) ||
                  delete e[c];
              }),
              e[0])
            )
              return Array.prototype.push.apply(this, e);
          };
          b._dataLayer.getState = function () {
            return r(b._state);
          };
        };
        l.Manager.prototype._processItems = function () {
          for (var b = 0; b < this._dataLayer.length; b++) {
            var c = new l.Item(this._dataLayer[b], b);
            this._processItem(c);
            (c.type !== l.constants.itemType.LISTENER_ON &&
              c.type !== l.constants.itemType.LISTENER_OFF &&
              c.valid) ||
              (this._dataLayer.splice(b, 1), b--);
          }
        };
        l.Manager.prototype._processItem = function (b) {
          function c(b) {
            return 0 === d._dataLayer.length ||
              b.index > d._dataLayer.length - 1
              ? []
              : d._dataLayer.slice(0, b.index).map(function (b) {
                  return new l.Item(b);
                });
          }
          var d = this;
          if (b.valid)
            ({
              data: function (b) {
                d._updateState(b);
                d._listenerManager.triggerListeners(b);
              },
              event: function (b) {
                b.config.data && d._updateState(b);
                d._listenerManager.triggerListeners(b);
              },
              listenerOn: function (b) {
                var e = new l.Listener(b);
                switch (e.scope) {
                  case l.constants.listenerScope.PAST:
                    var k = !0,
                      q = !1,
                      r = void 0;
                    try {
                      for (
                        var t, y = c(b)[Symbol.iterator]();
                        !(k = (t = y.next()).done);
                        k = !0
                      )
                        d._listenerManager.triggerListener(e, t.value);
                    } catch (K) {
                      (q = !0), (r = K);
                    } finally {
                      try {
                        k || null == y.return || y.return();
                      } finally {
                        if (q) throw r;
                      }
                    }
                    break;
                  case l.constants.listenerScope.FUTURE:
                    d._listenerManager.register(e);
                    break;
                  case l.constants.listenerScope.ALL:
                    t = !0;
                    y = !1;
                    r = void 0;
                    try {
                      for (
                        q = c(b)[Symbol.iterator]();
                        !(t = (k = q.next()).done);
                        t = !0
                      )
                        d._listenerManager.triggerListener(e, k.value);
                    } catch (K) {
                      (y = !0), (r = K);
                    } finally {
                      try {
                        t || null == q.return || q.return();
                      } finally {
                        if (y) throw r;
                      }
                    }
                    d._listenerManager.register(e);
                }
              },
              listenerOff: function (b) {
                d._listenerManager.unregister(new l.Listener(b));
              },
            }[b.type](b));
          else
            (b =
              "The following item cannot be handled by the data layer because it does not have a valid format: " +
              JSON.stringify(b.config)),
              console.error(b);
        };
        new l.Manager({ dataLayer: window.dataLayer });
        b.exports = l;
      },
      {
        "./DataLayerConstants": 7,
        "./DataLayerItem": 8,
        "./DataLayerListener": 9,
        "./DataLayerListenerManagerFactory": 10,
        "lodash.clonedeep": 1,
        "lodash.mergewith": 5,
      },
    ],
    7: [
      function (e, b, c) {
        b.exports = {
          itemType: {
            DATA: "data",
            EVENT: "event",
            LISTENER_ON: "listenerOn",
            LISTENER_OFF: "listenerOff",
          },
          dataLayerEvent: {
            CHANGE: "datalayer:change",
            EVENT: "datalayer:event",
            READY: "datalayer:ready",
          },
          listenerScope: { PAST: "past", FUTURE: "future", ALL: "all" },
        };
      },
      {},
    ],
    8: [
      function (e, b, c) {
        var d = e("./DataLayerConstants");
        var r = { data: { type: "object" } },
          l = {
            event: { type: "string" },
            info: { type: "object", optional: !0 },
            data: { type: "object", optional: !0 },
          },
          k = {
            on: { type: "string" },
            handler: { type: "function" },
            scope: {
              type: "string",
              values: ["past", "future", "all"],
              optional: !0,
            },
            path: { type: "string", optional: !0 },
          },
          q = {
            off: { type: "string" },
            handler: { type: "function", optional: !0 },
            scope: {
              type: "string",
              values: ["past", "future", "all"],
              optional: !0,
            },
            path: { type: "string", optional: !0 },
          };
        e = (function () {
          function b(c, e) {
            var m;
            _classCallCheck(this, b);
            this._config = c;
            this._type =
              (t.itemConfigMatchesConstraints(c, r)
                ? (m = d.itemType.DATA)
                : t.itemConfigMatchesConstraints(c, l)
                ? (m = d.itemType.EVENT)
                : t.itemConfigMatchesConstraints(c, k)
                ? (m = d.itemType.LISTENER_ON)
                : t.itemConfigMatchesConstraints(c, q) &&
                  (m = d.itemType.LISTENER_OFF),
              m);
            this._index = e;
            this._valid = !!this._type;
          }
          return (
            _createClass(b, [
              {
                key: "config",
                get: function () {
                  return this._config;
                },
              },
              {
                key: "type",
                get: function () {
                  return this._type;
                },
              },
              {
                key: "valid",
                get: function () {
                  return this._valid;
                },
              },
              {
                key: "index",
                get: function () {
                  return this._index;
                },
              },
            ]),
            b
          );
        })();
        var t = {
          itemConfigMatchesConstraints: function (b, c) {
            for (var d = Object.keys(c), e = 0; e < d.length; e++) {
              var l = d[e],
                k = c[l].type,
                m = c[l].values,
                q = !c[l].optional;
              l = b[l];
              var r = _typeof(l);
              if (q) {
                if (!l || r !== k || (m && !m.includes(l))) return !1;
              } else if (l && (r !== k || (m && !m.includes(l)))) return !1;
            }
            return !t.itemConfigHasCustomProperties(b, c);
          },
          itemConfigHasCustomProperties: function (b, c) {
            b = Object.keys(b);
            c = Object.keys(c);
            if (b.length > c.length) return !0;
            for (var d = 0; d < b.length; d++) {
              for (var e = b[d], l = !1, k = 0; k < c.length; k++)
                if (e === c[k]) {
                  l = !0;
                  break;
                }
              if (!l) return !0;
            }
            return !1;
          },
        };
        b.exports = { item: e, utils: t };
      },
      { "./DataLayerConstants": 7 },
    ],
    9: [
      function (e, b, c) {
        var d = e("./DataLayerConstants");
        e = (function () {
          function b(c) {
            _classCallCheck(this, b);
            this._event = c.config.on ? c.config.on : c.config.off;
            this._handler = c.config.handler ? c.config.handler : null;
            this._scope = c.config.scope ? c.config.scope : null;
            c.config.on &&
              null === this._scope &&
              (this._scope = d.listenerScope.FUTURE);
            this._path = c.config.path ? c.config.path : null;
          }
          return (
            _createClass(b, [
              {
                key: "event",
                get: function () {
                  return this._event;
                },
              },
              {
                key: "handler",
                get: function () {
                  return this._handler;
                },
              },
              {
                key: "scope",
                get: function () {
                  return this._scope;
                },
              },
              {
                key: "path",
                get: function () {
                  return this._path;
                },
              },
            ]),
            b
          );
        })();
        b.exports = e;
      },
      { "./DataLayerConstants": 7 },
    ],
    10: [
      function (e, b, c) {
        var d = e("./DataLayerConstants"),
          r = e("lodash.has"),
          l = e("lodash.get"),
          k = e("lodash.isequal"),
          q = e("lodash.clonedeep");
        b.exports = {
          create: function (b) {
            function c(c, k, m) {
              var r = c.event,
                t = k.config,
                v = !1;
              k.type === d.itemType.DATA
                ? r === d.dataLayerEvent.CHANGE && (v = e(c, k))
                : k.type === d.itemType.EVENT &&
                  ((r !== d.dataLayerEvent.EVENT && r !== t.event) ||
                    (v = e(c, k)),
                  t.data && r === d.dataLayerEvent.CHANGE && (v = e(c, k)));
              v &&
                ((r = q(k.config)),
                k.config.data
                  ? c.path
                    ? ((k = l(b._previousStateCopy, c.path)),
                      (m = l(r.data, c.path)),
                      c.handler.call(b._dataLayer, r, k, m))
                    : m
                    ? c.handler.call(b._dataLayer, r)
                    : ((k = b._previousStateCopy),
                      (m = q(b._state)),
                      c.handler.call(b._dataLayer, r, k, m))
                  : c.handler.call(b._dataLayer, r));
            }
            function e(b, c) {
              c = c.config;
              return !b.path || !c.data || r(c.data, b.path);
            }
            function v(b) {
              var c = b.event;
              if (Object.prototype.hasOwnProperty.call(t, c)) {
                var d = !0,
                  e = !1,
                  l = void 0;
                try {
                  for (
                    var m, q = t[c].entries()[Symbol.iterator]();
                    !(d = (m = q.next()).done);
                    d = !0
                  ) {
                    var r = _slicedToArray(m.value, 2),
                      v = r[0];
                    if (k(r[1], b)) return v;
                  }
                } catch (aa) {
                  (e = !0), (l = aa);
                } finally {
                  try {
                    d || null == q.return || q.return();
                  } finally {
                    if (e) throw l;
                  }
                }
              }
              return -1;
            }
            var t = {};
            return {
              register: function (b) {
                Object.prototype.hasOwnProperty.call(t, b.event)
                  ? -1 === v(b) && t[b.event].push(b)
                  : (t[b.event] = [b]);
              },
              unregister: function (b) {
                var c = b.event;
                Object.prototype.hasOwnProperty.call(t, c) &&
                  (b.handler || b.scope || b.path
                    ? ((b = v(b)), -1 < b && t[c].splice(b, 1))
                    : (t[c] = []));
              },
              triggerListeners: function (b) {
                (function (b) {
                  var c = [],
                    e = b.config;
                  b.type === d.itemType.DATA
                    ? c.push(d.dataLayerEvent.CHANGE)
                    : b.type === d.itemType.EVENT &&
                      (e.event !== d.dataLayerEvent.CHANGE && c.push(e.event),
                      c.push(d.dataLayerEvent.EVENT),
                      e.data && c.push(d.dataLayerEvent.CHANGE));
                  return c;
                })(b).forEach(function (d) {
                  if (Object.prototype.hasOwnProperty.call(t, d)) {
                    var e = !0,
                      k = !1,
                      l = void 0;
                    try {
                      for (
                        var m, q = t[d][Symbol.iterator]();
                        !(e = (m = q.next()).done);
                        e = !0
                      )
                        c(m.value, b, !1);
                    } catch (P) {
                      (k = !0), (l = P);
                    } finally {
                      try {
                        e || null == q.return || q.return();
                      } finally {
                        if (k) throw l;
                      }
                    }
                  }
                });
              },
              triggerListener: function (b, d) {
                c(b, d, !0);
              },
            };
          },
        };
      },
      {
        "./DataLayerConstants": 7,
        "lodash.clonedeep": 1,
        "lodash.get": 2,
        "lodash.has": 3,
        "lodash.isequal": 4,
      },
    ],
  },
  {},
  [6]
);
(function (e, b) {
  "object" === typeof exports && "undefined" !== typeof module
    ? (module.exports = b())
    : "function" === typeof define && define.amd
    ? define(b)
    : (e.moment = b());
})(this, function () {
  function e() {
    return tc.apply(null, arguments);
  }
  function b(b) {
    return (
      b instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(b)
    );
  }
  function c(b) {
    return null != b && "[object Object]" === Object.prototype.toString.call(b);
  }
  function d(b, c) {
    return Object.prototype.hasOwnProperty.call(b, c);
  }
  function r(b) {
    if (Object.getOwnPropertyNames)
      return 0 === Object.getOwnPropertyNames(b).length;
    for (var c in b) if (d(b, c)) return !1;
    return !0;
  }
  function l(b) {
    return void 0 === b;
  }
  function k(b) {
    return (
      "number" === typeof b ||
      "[object Number]" === Object.prototype.toString.call(b)
    );
  }
  function q(b) {
    return (
      b instanceof Date || "[object Date]" === Object.prototype.toString.call(b)
    );
  }
  function t(b, c) {
    var n = [],
      d;
    for (d = 0; d < b.length; ++d) n.push(c(b[d], d));
    return n;
  }
  function y(b, c) {
    for (var n in c) d(c, n) && (b[n] = c[n]);
    d(c, "toString") && (b.toString = c.toString);
    d(c, "valueOf") && (b.valueOf = c.valueOf);
    return b;
  }
  function m(b, c, d, e) {
    return Fa(b, c, d, e, !0).utc();
  }
  function v(b) {
    null == b._pf &&
      (b._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1,
      });
    return b._pf;
  }
  function O(b) {
    if (null == b._isValid) {
      var c = v(b),
        n = uc.call(c.parsedDateParts, function (b) {
          return null != b;
        });
      n =
        !isNaN(b._d.getTime()) &&
        0 > c.overflow &&
        !c.empty &&
        !c.invalidEra &&
        !c.invalidMonth &&
        !c.invalidWeekday &&
        !c.weekdayMismatch &&
        !c.nullInput &&
        !c.invalidFormat &&
        !c.userInvalidated &&
        (!c.meridiem || (c.meridiem && n));
      b._strict &&
        (n =
          n &&
          0 === c.charsLeftOver &&
          0 === c.unusedTokens.length &&
          void 0 === c.bigHour);
      if (null != Object.isFrozen && Object.isFrozen(b)) return n;
      b._isValid = n;
    }
    return b._isValid;
  }
  function da(b) {
    var c = m(NaN);
    null != b ? y(v(c), b) : (v(c).userInvalidated = !0);
    return c;
  }
  function S(b, c) {
    var n;
    l(c._isAMomentObject) || (b._isAMomentObject = c._isAMomentObject);
    l(c._i) || (b._i = c._i);
    l(c._f) || (b._f = c._f);
    l(c._l) || (b._l = c._l);
    l(c._strict) || (b._strict = c._strict);
    l(c._tzm) || (b._tzm = c._tzm);
    l(c._isUTC) || (b._isUTC = c._isUTC);
    l(c._offset) || (b._offset = c._offset);
    l(c._pf) || (b._pf = v(c));
    l(c._locale) || (b._locale = c._locale);
    if (0 < Ib.length)
      for (n = 0; n < Ib.length; n++) {
        var d = Ib[n];
        var ia = c[d];
        l(ia) || (b[d] = ia);
      }
    return b;
  }
  function ja(b) {
    S(this, b);
    this._d = new Date(null != b._d ? b._d.getTime() : NaN);
    this.isValid() || (this._d = new Date(NaN));
    !1 === Jb && ((Jb = !0), e.updateOffset(this), (Jb = !1));
  }
  function K(b) {
    return b instanceof ja || (null != b && null != b._isAMomentObject);
  }
  function oa(b) {
    !1 === e.suppressDeprecationWarnings &&
      "undefined" !== typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + b);
  }
  function L(b, c) {
    var n = !0;
    return y(function () {
      null != e.deprecationHandler && e.deprecationHandler(null, b);
      if (n) {
        var ia = [],
          hb,
          f;
        for (hb = 0; hb < arguments.length; hb++) {
          var g = "";
          if ("object" === typeof arguments[hb]) {
            g += "\n[" + hb + "] ";
            for (f in arguments[0])
              d(arguments[0], f) && (g += f + ": " + arguments[0][f] + ", ");
            g = g.slice(0, -2);
          } else g = arguments[hb];
          ia.push(g);
        }
        oa(
          b +
            "\nArguments: " +
            Array.prototype.slice.call(ia).join("") +
            "\n" +
            Error().stack
        );
        n = !1;
      }
      return c.apply(this, arguments);
    }, c);
  }
  function U(b, c) {
    null != e.deprecationHandler && e.deprecationHandler(b, c);
    bc[b] || (oa(c), (bc[b] = !0));
  }
  function P(b) {
    return (
      ("undefined" !== typeof Function && b instanceof Function) ||
      "[object Function]" === Object.prototype.toString.call(b)
    );
  }
  function Z(b, ia) {
    var n = y({}, b),
      e;
    for (e in ia)
      d(ia, e) &&
        (c(b[e]) && c(ia[e])
          ? ((n[e] = {}), y(n[e], b[e]), y(n[e], ia[e]))
          : null != ia[e]
          ? (n[e] = ia[e])
          : delete n[e]);
    for (e in b) d(b, e) && !d(ia, e) && c(b[e]) && (n[e] = y({}, n[e]));
    return n;
  }
  function aa(b) {
    null != b && this.set(b);
  }
  function Q(b, c, d) {
    var n = "" + Math.abs(b);
    return (
      (0 <= b ? (d ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, c - n.length))
        .toString()
        .substr(1) +
      n
    );
  }
  function z(b, c, d, e) {
    var n = e;
    "string" === typeof e &&
      (n = function () {
        return this[e]();
      });
    b && (ib[b] = n);
    c &&
      (ib[c[0]] = function () {
        return Q(n.apply(this, arguments), c[1], c[2]);
      });
    d &&
      (ib[d] = function () {
        return this.localeData().ordinal(n.apply(this, arguments), b);
      });
  }
  function V(b) {
    return b.match(/\[[\s\S]/)
      ? b.replace(/^\[|\]$/g, "")
      : b.replace(/\\/g, "");
  }
  function ma(b) {
    var c = b.match(Kb),
      n;
    var d = 0;
    for (n = c.length; d < n; d++) c[d] = ib[c[d]] ? ib[c[d]] : V(c[d]);
    return function (d) {
      var ia = "",
        e;
      for (e = 0; e < n; e++) ia += P(c[e]) ? c[e].call(d, b) : c[e];
      return ia;
    };
  }
  function ba(b, c) {
    if (!b.isValid()) return b.localeData().invalidDate();
    c = T(c, b.localeData());
    Lb[c] = Lb[c] || ma(c);
    return Lb[c](b);
  }
  function T(b, c) {
    function n(b) {
      return c.longDateFormat(b) || b;
    }
    var d = 5;
    for (wb.lastIndex = 0; 0 <= d && wb.test(b); )
      (b = b.replace(wb, n)), (wb.lastIndex = 0), --d;
    return b;
  }
  function D(b, c) {
    var n = b.toLowerCase();
    pb[n] = pb[n + "s"] = pb[c] = b;
  }
  function G(b) {
    return "string" === typeof b ? pb[b] || pb[b.toLowerCase()] : void 0;
  }
  function F(b) {
    var c = {},
      n,
      e;
    for (e in b) d(b, e) && (n = G(e)) && (c[n] = b[e]);
    return c;
  }
  function R(b) {
    var c = [],
      n;
    for (n in b) d(b, n) && c.push({ unit: n, priority: za[n] });
    c.sort(function (b, c) {
      return b.priority - c.priority;
    });
    return c;
  }
  function C(b) {
    return (0 === b % 4 && 0 !== b % 100) || 0 === b % 400;
  }
  function I(b) {
    return 0 > b ? Math.ceil(b) || 0 : Math.floor(b);
  }
  function u(b) {
    b = +b;
    var c = 0;
    0 !== b && isFinite(b) && (c = I(b));
    return c;
  }
  function M(b, c) {
    return function (n) {
      return null != n
        ? (w(this, b, n), e.updateOffset(this, c), this)
        : E(this, b);
    };
  }
  function E(b, c) {
    return b.isValid() ? b._d["get" + (b._isUTC ? "UTC" : "") + c]() : NaN;
  }
  function w(b, c, d) {
    if (b.isValid() && !isNaN(d))
      if ("FullYear" === c && C(b.year()) && 1 === b.month() && 29 === b.date())
        (d = u(d)),
          b._d["set" + (b._isUTC ? "UTC" : "") + c](
            d,
            b.month(),
            Ca(d, b.month())
          );
      else b._d["set" + (b._isUTC ? "UTC" : "") + c](d);
  }
  function h(b, c, d) {
    Mb[b] = P(c)
      ? c
      : function (b, n) {
          return b && d ? d : c;
        };
  }
  function fa(b, c) {
    return d(Mb, b) ? Mb[b](c._strict, c._locale) : new RegExp(va(b));
  }
  function va(b) {
    return N(
      b
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (b, c, n, d, e) {
            return c || n || d || e;
          }
        )
    );
  }
  function N(b) {
    return b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$\x26");
  }
  function H(b, c) {
    var n,
      d = c;
    "string" === typeof b && (b = [b]);
    k(c) &&
      (d = function (b, n) {
        n[c] = u(b);
      });
    for (n = 0; n < b.length; n++) Nb[b[n]] = d;
  }
  function wa(b, c) {
    H(b, function (b, n, d, ia) {
      d._w = d._w || {};
      c(b, d._w, d, ia);
    });
  }
  function Ca(b, c) {
    if (isNaN(b) || isNaN(c)) return NaN;
    var n = ((c % 12) + 12) % 12;
    return 1 === n ? (C(b + (c - n) / 12) ? 29 : 28) : 31 - ((n % 7) % 2);
  }
  function La(b, c) {
    if (!b.isValid()) return b;
    if ("string" === typeof c)
      if (/^\d+$/.test(c)) c = u(c);
      else if (((c = b.localeData().monthsParse(c)), !k(c))) return b;
    var n = Math.min(b.date(), Ca(b.year(), c));
    b._d["set" + (b._isUTC ? "UTC" : "") + "Month"](c, n);
    return b;
  }
  function xa(b) {
    return null != b
      ? (La(this, b), e.updateOffset(this, !0), this)
      : E(this, "Month");
  }
  function Ha() {
    function b(b, c) {
      return c.length - b.length;
    }
    var c = [],
      d = [],
      e = [],
      f;
    for (f = 0; 12 > f; f++) {
      var g = m([2e3, f]);
      c.push(this.monthsShort(g, ""));
      d.push(this.months(g, ""));
      e.push(this.months(g, ""));
      e.push(this.monthsShort(g, ""));
    }
    c.sort(b);
    d.sort(b);
    e.sort(b);
    for (f = 0; 12 > f; f++) (c[f] = N(c[f])), (d[f] = N(d[f]));
    for (f = 0; 24 > f; f++) e[f] = N(e[f]);
    this._monthsShortRegex = this._monthsRegex = new RegExp(
      "^(" + e.join("|") + ")",
      "i"
    );
    this._monthsStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
    this._monthsShortStrictRegex = new RegExp("^(" + c.join("|") + ")", "i");
  }
  function Da(b, c, d, e, f, g, h) {
    100 > b && 0 <= b
      ? ((c = new Date(b + 400, c, d, e, f, g, h)),
        isFinite(c.getFullYear()) && c.setFullYear(b))
      : (c = new Date(b, c, d, e, f, g, h));
    return c;
  }
  function ya(b) {
    if (100 > b && 0 <= b) {
      var c = Array.prototype.slice.call(arguments);
      c[0] = b + 400;
      c = new Date(Date.UTC.apply(null, c));
      isFinite(c.getUTCFullYear()) && c.setUTCFullYear(b);
    } else c = new Date(Date.UTC.apply(null, arguments));
    return c;
  }
  function X(b, c, d) {
    d = 7 + c - d;
    return -((7 + ya(b, 0, d).getUTCDay() - c) % 7) + d - 1;
  }
  function Ia(b, c, d, e, f) {
    d = (7 + d - e) % 7;
    e = X(b, e, f);
    e = 1 + 7 * (c - 1) + d + e;
    0 >= e
      ? ((c = b - 1), (b = (C(c) ? 366 : 365) + e))
      : e > (C(b) ? 366 : 365)
      ? ((c = b + 1), (b = e - (C(b) ? 366 : 365)))
      : ((c = b), (b = e));
    return { year: c, dayOfYear: b };
  }
  function Y(b, c, d) {
    var n = X(b.year(), c, d);
    n = Math.floor((b.dayOfYear() - n - 1) / 7) + 1;
    1 > n
      ? ((b = b.year() - 1), (c = n + qa(b, c, d)))
      : n > qa(b.year(), c, d)
      ? ((c = n - qa(b.year(), c, d)), (b = b.year() + 1))
      : ((b = b.year()), (c = n));
    return { week: c, year: b };
  }
  function qa(b, c, d) {
    var n = X(b, c, d);
    c = X(b + 1, c, d);
    return ((C(b) ? 366 : 365) - n + c) / 7;
  }
  function pa(b, c) {
    return b.slice(c, 7).concat(b.slice(0, c));
  }
  function Ea(b, c, d) {
    var n;
    b = b.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          n = 0;
        7 > n;
        ++n
      ) {
        var ia = m([2e3, 1]).day(n);
        this._minWeekdaysParse[n] = this.weekdaysMin(
          ia,
          ""
        ).toLocaleLowerCase();
        this._shortWeekdaysParse[n] = this.weekdaysShort(
          ia,
          ""
        ).toLocaleLowerCase();
        this._weekdaysParse[n] = this.weekdays(ia, "").toLocaleLowerCase();
      }
    if (d)
      c =
        "dddd" === c
          ? ta.call(this._weekdaysParse, b)
          : "ddd" === c
          ? ta.call(this._shortWeekdaysParse, b)
          : ta.call(this._minWeekdaysParse, b);
    else if ("dddd" === c) {
      c = ta.call(this._weekdaysParse, b);
      if (-1 !== c) return c;
      c = ta.call(this._shortWeekdaysParse, b);
      if (-1 !== c) return c;
      c = ta.call(this._minWeekdaysParse, b);
    } else if ("ddd" === c) {
      c = ta.call(this._shortWeekdaysParse, b);
      if (-1 !== c) return c;
      c = ta.call(this._weekdaysParse, b);
      if (-1 !== c) return c;
      c = ta.call(this._minWeekdaysParse, b);
    } else {
      c = ta.call(this._minWeekdaysParse, b);
      if (-1 !== c) return c;
      c = ta.call(this._weekdaysParse, b);
      if (-1 !== c) return c;
      c = ta.call(this._shortWeekdaysParse, b);
    }
    return -1 !== c ? c : null;
  }
  function Aa() {
    function b(b, c) {
      return c.length - b.length;
    }
    var c = [],
      d = [],
      e = [],
      f = [],
      g;
    for (g = 0; 7 > g; g++) {
      var h = m([2e3, 1]).day(g);
      var k = N(this.weekdaysMin(h, ""));
      var l = N(this.weekdaysShort(h, ""));
      h = N(this.weekdays(h, ""));
      c.push(k);
      d.push(l);
      e.push(h);
      f.push(k);
      f.push(l);
      f.push(h);
    }
    c.sort(b);
    d.sort(b);
    e.sort(b);
    f.sort(b);
    this._weekdaysMinRegex =
      this._weekdaysShortRegex =
      this._weekdaysRegex =
        new RegExp("^(" + f.join("|") + ")", "i");
    this._weekdaysStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
    this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
    this._weekdaysMinStrictRegex = new RegExp("^(" + c.join("|") + ")", "i");
  }
  function ra() {
    return this.hours() % 12 || 12;
  }
  function ha(b, c) {
    z(b, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), c);
    });
  }
  function sa(b, c) {
    return c._meridiemParse;
  }
  function la(b) {
    return b ? b.toLowerCase().replace("_", "-") : b;
  }
  function g(b) {
    var c = null;
    if (
      void 0 === na[b] &&
      "undefined" !== typeof module &&
      module &&
      module.exports
    )
      try {
        c = qb._abbr;
        var n = require;
        n("./locale/" + b);
        p(c);
      } catch (hd) {
        na[b] = null;
      }
    return na[b];
  }
  function p(b, c) {
    b &&
      ((c = l(c) ? J(b) : f(b, c))
        ? (qb = c)
        : "undefined" !== typeof console &&
          console.warn &&
          console.warn(
            "Locale " + b + " not found. Did you forget to load it?"
          ));
    return qb._abbr;
  }
  function f(b, c) {
    if (null !== c) {
      var d = cc;
      c.abbr = b;
      if (null != na[b])
        U(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (d = na[b]._config);
      else if (null != c.parentLocale)
        if (null != na[c.parentLocale]) d = na[c.parentLocale]._config;
        else if (((d = g(c.parentLocale)), null != d)) d = d._config;
        else
          return (
            rb[c.parentLocale] || (rb[c.parentLocale] = []),
            rb[c.parentLocale].push({ name: b, config: c }),
            null
          );
      na[b] = new aa(Z(d, c));
      rb[b] &&
        rb[b].forEach(function (b) {
          f(b.name, b.config);
        });
      p(b);
      return na[b];
    }
    delete na[b];
    return null;
  }
  function J(c) {
    var d;
    c && c._locale && c._locale._abbr && (c = c._locale._abbr);
    if (!c) return qb;
    if (!b(c)) {
      if ((d = g(c))) return d;
      c = [c];
    }
    a: {
      d = 0;
      for (var n, e, f, h; d < c.length; ) {
        h = la(c[d]).split("-");
        n = h.length;
        for (e = (e = la(c[d + 1])) ? e.split("-") : null; 0 < n; ) {
          if ((f = g(h.slice(0, n).join("-")))) {
            c = f;
            break a;
          }
          if ((f = e && e.length >= n)) {
            b: {
              var k = Math.min(h.length, e.length);
              for (f = 0; f < k; f += 1) if (h[f] !== e[f]) break b;
              f = k;
            }
            f = f >= n - 1;
          }
          if (f) break;
          n--;
        }
        d++;
      }
      c = qb;
    }
    return c;
  }
  function Pa(b) {
    var c;
    (c = b._a) &&
      -2 === v(b).overflow &&
      ((c =
        0 > c[Ta] || 11 < c[Ta]
          ? Ta
          : 1 > c[Oa] || c[Oa] > Ca(c[Ba], c[Ta])
          ? Oa
          : 0 > c[ua] ||
            24 < c[ua] ||
            (24 === c[ua] && (0 !== c[Na] || 0 !== c[Ua] || 0 !== c[db]))
          ? ua
          : 0 > c[Na] || 59 < c[Na]
          ? Na
          : 0 > c[Ua] || 59 < c[Ua]
          ? Ua
          : 0 > c[db] || 999 < c[db]
          ? db
          : -1),
      v(b)._overflowDayOfYear && (c < Ba || c > Oa) && (c = Oa),
      v(b)._overflowWeeks && -1 === c && (c = vc),
      v(b)._overflowWeekday && -1 === c && (c = wc),
      (v(b).overflow = c));
    return b;
  }
  function bb(b) {
    var c;
    var d = b._i;
    var n = xc.exec(d) || yc.exec(d);
    if (n) {
      v(b).iso = !0;
      d = 0;
      for (c = xb.length; d < c; d++)
        if (xb[d][1].exec(n[1])) {
          var e = xb[d][0];
          var f = !1 !== xb[d][2];
          break;
        }
      if (null == e) b._isValid = !1;
      else {
        if (n[3]) {
          d = 0;
          for (c = Ob.length; d < c; d++)
            if (Ob[d][1].exec(n[3])) {
              var g = (n[2] || " ") + Ob[d][0];
              break;
            }
          if (null == g) {
            b._isValid = !1;
            return;
          }
        }
        if (f || null == g) {
          if (n[4])
            if (zc.exec(n[4])) var h = "Z";
            else {
              b._isValid = !1;
              return;
            }
          b._f = e + (g || "") + (h || "");
          $a(b);
        } else b._isValid = !1;
      }
    } else b._isValid = !1;
  }
  function Ya(b) {
    var c = Ac.exec(
      b._i
        .replace(/\([^)]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "")
    );
    if (c) {
      var d = c[3],
        n = c[2],
        e = c[5],
        f = c[6],
        g = c[7],
        h = parseInt(c[4], 10);
      d = [
        49 >= h ? 2e3 + h : 999 >= h ? 1900 + h : h,
        dc.indexOf(d),
        parseInt(n, 10),
        parseInt(e, 10),
        parseInt(f, 10),
      ];
      g && d.push(parseInt(g, 10));
      a: {
        if ((g = c[1]))
          if (
            ((g = ec.indexOf(g)),
            (n = new Date(d[0], d[1], d[2]).getDay()),
            g !== n)
          ) {
            v(b).weekdayMismatch = !0;
            g = b._isValid = !1;
            break a;
          }
        g = !0;
      }
      g &&
        ((b._a = d),
        (g = c[8])
          ? (c = Bc[g])
          : c[9]
          ? (c = 0)
          : ((c = parseInt(c[10], 10)),
            (g = c % 100),
            (c = ((c - g) / 100) * 60 + g)),
        (b._tzm = c),
        (b._d = ya.apply(null, b._a)),
        b._d.setUTCMinutes(b._d.getUTCMinutes() - b._tzm),
        (v(b).rfc2822 = !0));
    } else b._isValid = !1;
  }
  function A(b) {
    var c = Cc.exec(b._i);
    null !== c
      ? (b._d = new Date(+c[1]))
      : (bb(b),
        !1 === b._isValid &&
          (delete b._isValid,
          Ya(b),
          !1 === b._isValid &&
            (delete b._isValid,
            b._strict ? (b._isValid = !1) : e.createFromInputFallback(b))));
  }
  function ea(b, c, d) {
    return null != b ? b : null != c ? c : d;
  }
  function Za(b) {
    var c = [];
    if (!b._d) {
      var d = new Date(e.now());
      d = b._useUTC
        ? [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()]
        : [d.getFullYear(), d.getMonth(), d.getDate()];
      if (b._w && null == b._a[Oa] && null == b._a[Ta]) {
        var n = b._w;
        if (null != n.GG || null != n.W || null != n.E) {
          var f = 1;
          var g = 4;
          var h = ea(n.GG, b._a[Ba], Y(B(), 1, 4).year);
          var k = ea(n.W, 1);
          var l = ea(n.E, 1);
          if (1 > l || 7 < l) var m = !0;
        } else if (
          ((f = b._locale._week.dow),
          (g = b._locale._week.doy),
          (k = Y(B(), f, g)),
          (h = ea(n.gg, b._a[Ba], k.year)),
          (k = ea(n.w, k.week)),
          null != n.d)
        ) {
          if (((l = n.d), 0 > l || 6 < l)) m = !0;
        } else if (null != n.e) {
          if (((l = n.e + f), 0 > n.e || 6 < n.e)) m = !0;
        } else l = f;
        1 > k || k > qa(h, f, g)
          ? (v(b)._overflowWeeks = !0)
          : null != m
          ? (v(b)._overflowWeekday = !0)
          : ((m = Ia(h, k, l, f, g)),
            (b._a[Ba] = m.year),
            (b._dayOfYear = m.dayOfYear));
      }
      if (null != b._dayOfYear) {
        m = ea(b._a[Ba], d[Ba]);
        if (b._dayOfYear > (C(m) ? 366 : 365) || 0 === b._dayOfYear)
          v(b)._overflowDayOfYear = !0;
        m = ya(m, 0, b._dayOfYear);
        b._a[Ta] = m.getUTCMonth();
        b._a[Oa] = m.getUTCDate();
      }
      for (m = 0; 3 > m && null == b._a[m]; ++m) b._a[m] = c[m] = d[m];
      for (; 7 > m; m++)
        b._a[m] = c[m] = null == b._a[m] ? (2 === m ? 1 : 0) : b._a[m];
      24 === b._a[ua] &&
        0 === b._a[Na] &&
        0 === b._a[Ua] &&
        0 === b._a[db] &&
        ((b._nextDay = !0), (b._a[ua] = 0));
      b._d = (b._useUTC ? ya : Da).apply(null, c);
      c = b._useUTC ? b._d.getUTCDay() : b._d.getDay();
      null != b._tzm && b._d.setUTCMinutes(b._d.getUTCMinutes() - b._tzm);
      b._nextDay && (b._a[ua] = 24);
      b._w &&
        "undefined" !== typeof b._w.d &&
        b._w.d !== c &&
        (v(b).weekdayMismatch = !0);
    }
  }
  function $a(b) {
    if (b._f === e.ISO_8601) bb(b);
    else if (b._f === e.RFC_2822) Ya(b);
    else {
      b._a = [];
      v(b).empty = !0;
      var c = "" + b._i,
        n,
        f,
        g = c.length,
        h = 0;
      var k = T(b._f, b._locale).match(Kb) || [];
      for (n = 0; n < k.length; n++) {
        var l = k[n];
        if ((f = (c.match(fa(l, b)) || [])[0])) {
          var m = c.substr(0, c.indexOf(f));
          0 < m.length && v(b).unusedInput.push(m);
          c = c.slice(c.indexOf(f) + f.length);
          h += f.length;
        }
        if (ib[l]) {
          if (
            (f ? (v(b).empty = !1) : v(b).unusedTokens.push(l),
            (m = b),
            null != f && d(Nb, l))
          )
            Nb[l](f, m._a, m, l);
        } else b._strict && !f && v(b).unusedTokens.push(l);
      }
      v(b).charsLeftOver = g - h;
      0 < c.length && v(b).unusedInput.push(c);
      12 >= b._a[ua] &&
        !0 === v(b).bigHour &&
        0 < b._a[ua] &&
        (v(b).bigHour = void 0);
      v(b).parsedDateParts = b._a.slice(0);
      v(b).meridiem = b._meridiem;
      c = b._a;
      n = ua;
      g = b._locale;
      k = b._a[ua];
      h = b._meridiem;
      null != h &&
        (null != g.meridiemHour
          ? (k = g.meridiemHour(k, h))
          : null != g.isPM &&
            ((g = g.isPM(h)) && 12 > k && (k += 12), g || 12 !== k || (k = 0)));
      c[n] = k;
      c = v(b).era;
      null !== c && (b._a[Ba] = b._locale.erasConvertYear(c, b._a[Ba]));
      Za(b);
      Pa(b);
    }
  }
  function fb(b) {
    if (!b._d) {
      var c = F(b._i);
      b._a = t(
        [
          c.year,
          c.month,
          void 0 === c.day ? c.date : c.day,
          c.hour,
          c.minute,
          c.second,
          c.millisecond,
        ],
        function (b) {
          return b && parseInt(b, 10);
        }
      );
      Za(b);
    }
  }
  function ob(c) {
    var d = c._i,
      n = c._f;
    c._locale = c._locale || J(c._l);
    if (null === d || (void 0 === n && "" === d)) return da({ nullInput: !0 });
    "string" === typeof d && (c._i = d = c._locale.preparse(d));
    if (K(d)) return new ja(Pa(d));
    if (q(d)) c._d = d;
    else if (b(n)) {
      var e = !1;
      if (0 === c._f.length) (v(c).invalidFormat = !0), (c._d = new Date(NaN));
      else {
        for (d = 0; d < c._f.length; d++) {
          n = 0;
          var f = !1;
          var g = S({}, c);
          null != c._useUTC && (g._useUTC = c._useUTC);
          g._f = c._f[d];
          $a(g);
          O(g) && (f = !0);
          n += v(g).charsLeftOver;
          n += 10 * v(g).unusedTokens.length;
          v(g).score = n;
          if (e) n < h && ((h = n), (k = g));
          else if (null == h || n < h || f) {
            var h = n;
            var k = g;
            f && (e = !0);
          }
        }
        y(c, k || g);
      }
    } else n ? $a(c) : Ja(c);
    O(c) || (c._d = null);
    return c;
  }
  function Ja(d) {
    var n = d._i;
    l(n)
      ? (d._d = new Date(e.now()))
      : q(n)
      ? (d._d = new Date(n.valueOf()))
      : "string" === typeof n
      ? A(d)
      : b(n)
      ? ((d._a = t(n.slice(0), function (b) {
          return parseInt(b, 10);
        })),
        Za(d))
      : c(n)
      ? fb(d)
      : k(n)
      ? (d._d = new Date(n))
      : e.createFromInputFallback(d);
  }
  function Fa(d, e, f, g, h) {
    var n = {};
    if (!0 === e || !1 === e) (g = e), (e = void 0);
    if (!0 === f || !1 === f) (g = f), (f = void 0);
    if ((c(d) && r(d)) || (b(d) && 0 === d.length)) d = void 0;
    n._isAMomentObject = !0;
    n._useUTC = n._isUTC = h;
    n._l = f;
    n._i = d;
    n._f = e;
    n._strict = g;
    d = new ja(Pa(ob(n)));
    d._nextDay && (d.add(1, "d"), (d._nextDay = void 0));
    return d;
  }
  function B(b, c, d, e) {
    return Fa(b, c, d, e, !1);
  }
  function mb(c, d) {
    var n;
    1 === d.length && b(d[0]) && (d = d[0]);
    if (!d.length) return B();
    var e = d[0];
    for (n = 1; n < d.length; ++n) if (!d[n].isValid() || d[n][c](e)) e = d[n];
    return e;
  }
  function Qa(b) {
    var c = F(b);
    b = c.year || 0;
    var n = c.quarter || 0,
      e = c.month || 0,
      f = c.week || c.isoWeek || 0,
      g = c.day || 0,
      h = c.hour || 0,
      k = c.minute || 0,
      l = c.second || 0,
      m = c.millisecond || 0;
    a: {
      var w,
        E = !1;
      for (w in c)
        if (
          d(c, w) &&
          (-1 === ta.call(sb, w) || (null != c[w] && isNaN(c[w])))
        ) {
          c = !1;
          break a;
        }
      for (w = 0; w < sb.length; ++w)
        if (c[sb[w]]) {
          if (E) {
            c = !1;
            break a;
          }
          parseFloat(c[sb[w]]) !== u(c[sb[w]]) && (E = !0);
        }
      c = !0;
    }
    this._isValid = c;
    this._milliseconds = +m + 1e3 * l + 6e4 * k + 36e5 * h;
    this._days = +g + 7 * f;
    this._months = +e + 3 * n + 12 * b;
    this._data = {};
    this._locale = J();
    this._bubble();
  }
  function Ra(b) {
    return b instanceof Qa;
  }
  function Sa(b) {
    return 0 > b ? -1 * Math.round(-1 * b) : Math.round(b);
  }
  function nb(b, c) {
    z(b, 0, 0, function () {
      var b = this.utcOffset(),
        d = "+";
      0 > b && ((b = -b), (d = "-"));
      return d + Q(~~(b / 60), 2) + c + Q(~~b % 60, 2);
    });
  }
  function Ka(b, c) {
    b = (c || "").match(b);
    if (null === b) return null;
    b = ((b[b.length - 1] || []) + "").match(Dc) || ["-", 0, 0];
    c = +(60 * b[1]) + u(b[2]);
    return 0 === c ? 0 : "+" === b[0] ? c : -c;
  }
  function Fb(b, c) {
    return c._isUTC
      ? ((c = c.clone()),
        (b = (K(b) || q(b) ? b.valueOf() : B(b).valueOf()) - c.valueOf()),
        c._d.setTime(c._d.valueOf() + b),
        e.updateOffset(c, !1),
        c)
      : B(b).local();
  }
  function Tb() {
    return this.isValid() ? this._isUTC && 0 === this._offset : !1;
  }
  function Ma(b, c) {
    var n = b;
    Ra(b)
      ? (n = { ms: b._milliseconds, d: b._days, M: b._months })
      : k(b) || !isNaN(+b)
      ? ((n = {}), c ? (n[c] = +b) : (n.milliseconds = +b))
      : (c = Ec.exec(b))
      ? ((n = "-" === c[1] ? -1 : 1),
        (n = {
          y: 0,
          d: u(c[Oa]) * n,
          h: u(c[ua]) * n,
          m: u(c[Na]) * n,
          s: u(c[Ua]) * n,
          ms: u(Sa(1e3 * c[db])) * n,
        }))
      : (c = Fc.exec(b))
      ? ((n = "-" === c[1] ? -1 : 1),
        (n = {
          y: cb(c[2], n),
          M: cb(c[3], n),
          w: cb(c[4], n),
          d: cb(c[5], n),
          h: cb(c[6], n),
          m: cb(c[7], n),
          s: cb(c[8], n),
        }))
      : null == n
      ? (n = {})
      : "object" === typeof n &&
        ("from" in n || "to" in n) &&
        ((c = B(n.from)),
        (n = B(n.to)),
        c.isValid() && n.isValid()
          ? ((n = Fb(n, c)),
            c.isBefore(n)
              ? (n = Ub(c, n))
              : ((n = Ub(n, c)),
                (n.milliseconds = -n.milliseconds),
                (n.months = -n.months)),
            (c = n))
          : (c = { milliseconds: 0, months: 0 }),
        (n = {}),
        (n.ms = c.milliseconds),
        (n.M = c.months));
    n = new Qa(n);
    Ra(b) && d(b, "_locale") && (n._locale = b._locale);
    Ra(b) && d(b, "_isValid") && (n._isValid = b._isValid);
    return n;
  }
  function cb(b, c) {
    b = b && parseFloat(b.replace(",", "."));
    return (isNaN(b) ? 0 : b) * c;
  }
  function Ub(b, c) {
    var d = {};
    d.months = c.month() - b.month() + 12 * (c.year() - b.year());
    b.clone().add(d.months, "M").isAfter(c) && --d.months;
    d.milliseconds = +c - +b.clone().add(d.months, "M");
    return d;
  }
  function Vb(b, c) {
    return function (d, n) {
      if (null !== n && !isNaN(+n)) {
        U(
          c,
          "moment()." +
            c +
            "(period, number) is deprecated. Please use moment()." +
            c +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        );
        var e = d;
        d = n;
        n = e;
      }
      d = Ma(d, n);
      Wb(this, d, b);
      return this;
    };
  }
  function Wb(b, c, d, f) {
    var n = c._milliseconds,
      g = Sa(c._days);
    c = Sa(c._months);
    b.isValid() &&
      ((f = null == f ? !0 : f),
      c && La(b, E(b, "Month") + c * d),
      g && w(b, "Date", E(b, "Date") + g * d),
      n && b._d.setTime(b._d.valueOf() + n * d),
      f && e.updateOffset(b, g || c));
  }
  function Xb(b) {
    return "string" === typeof b || b instanceof String;
  }
  function sc(c) {
    var d = b(c),
      n = !1;
    d &&
      (n =
        0 ===
        c.filter(function (b) {
          return !k(b) && Xb(c);
        }).length);
    return d && n;
  }
  function ub(b, c) {
    if (b.date() < c.date()) return -ub(c, b);
    var d = 12 * (c.year() - b.year()) + (c.month() - b.month()),
      n = b.clone().add(d, "months");
    0 > c - n
      ? ((b = b.clone().add(d - 1, "months")), (c = (c - n) / (n - b)))
      : ((b = b.clone().add(d + 1, "months")), (c = (c - n) / (b - n)));
    return -(d + c) || 0;
  }
  function Yb(b) {
    if (void 0 === b) return this._locale._abbr;
    b = J(b);
    null != b && (this._locale = b);
    return this;
  }
  function Zb() {
    return this._locale;
  }
  function gb(b, c) {
    return ((b % c) + c) % c;
  }
  function $b(b, c, d) {
    return 100 > b && 0 <= b
      ? new Date(b + 400, c, d) - 126227808e5
      : new Date(b, c, d).valueOf();
  }
  function ac(b, c, d) {
    return 100 > b && 0 <= b
      ? Date.UTC(b + 400, c, d) - 126227808e5
      : Date.UTC(b, c, d);
  }
  function Hb(b, c) {
    return c.erasAbbrRegex(b);
  }
  function Gb() {
    var b = [],
      c = [],
      d = [],
      e = [],
      f,
      g = this.eras();
    var h = 0;
    for (f = g.length; h < f; ++h)
      c.push(N(g[h].name)),
        b.push(N(g[h].abbr)),
        d.push(N(g[h].narrow)),
        e.push(N(g[h].name)),
        e.push(N(g[h].abbr)),
        e.push(N(g[h].narrow));
    this._erasRegex = new RegExp("^(" + e.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + c.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + b.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp("^(" + d.join("|") + ")", "i");
  }
  function vb(b, c) {
    z(0, [b, b.length], 0, c);
  }
  function fc(b, c, d, e, f) {
    if (null == b) return Y(this, e, f).year;
    var n = qa(b, e, f);
    c > n && (c = n);
    b = Ia(b, c, d, e, f);
    b = ya(b.year, 0, b.dayOfYear);
    this.year(b.getUTCFullYear());
    this.month(b.getUTCMonth());
    this.date(b.getUTCDate());
    return this;
  }
  function Gc(b, c) {
    c[db] = u(1e3 * ("0." + b));
  }
  function gc(b) {
    return b;
  }
  function yb(b, c, d, e) {
    var n = J();
    c = m().set(e, c);
    return n[d](c, b);
  }
  function hc(b, c, d) {
    k(b) && ((c = b), (b = void 0));
    b = b || "";
    if (null != c) return yb(b, c, d, "month");
    var n = [];
    for (c = 0; 12 > c; c++) n[c] = yb(b, c, d, "month");
    return n;
  }
  function Pb(b, c, d, e) {
    "boolean" !== typeof b && ((d = c = b), (b = !1));
    k(c) && ((d = c), (c = void 0));
    c = c || "";
    var n = J();
    b = b ? n._week.dow : 0;
    n = [];
    if (null != d) return yb(c, (d + b) % 7, e, "day");
    for (d = 0; 7 > d; d++) n[d] = yb(c, (d + b) % 7, e, "day");
    return n;
  }
  function ic(b, c, d, e) {
    c = Ma(c, d);
    b._milliseconds += e * c._milliseconds;
    b._days += e * c._days;
    b._months += e * c._months;
    return b._bubble();
  }
  function jc(b) {
    return 0 > b ? Math.floor(b) : Math.ceil(b);
  }
  function Va(b) {
    return function () {
      return this.as(b);
    };
  }
  function eb(b) {
    return function () {
      return this.isValid() ? this._data[b] : NaN;
    };
  }
  function Hc(b, c, d, e, f) {
    return f.relativeTime(c || 1, !!d, b, e);
  }
  function jb(b) {
    return (0 < b) - (0 > b) || +b;
  }
  function zb() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var b = Qb(this._milliseconds) / 1e3,
      c = Qb(this._days),
      d = Qb(this._months),
      e = this.asSeconds();
    if (!e) return "P0D";
    var f = I(b / 60);
    var g = I(f / 60);
    b %= 60;
    f %= 60;
    var h = I(d / 12);
    d %= 12;
    var k = b ? b.toFixed(3).replace(/\.?0+$/, "") : "";
    var l = 0 > e ? "-" : "";
    var m = jb(this._months) !== jb(e) ? "-" : "";
    var w = jb(this._days) !== jb(e) ? "-" : "";
    e = jb(this._milliseconds) !== jb(e) ? "-" : "";
    return (
      l +
      "P" +
      (h ? m + h + "Y" : "") +
      (d ? m + d + "M" : "") +
      (c ? w + c + "D" : "") +
      (g || f || b ? "T" : "") +
      (g ? e + g + "H" : "") +
      (f ? e + f + "M" : "") +
      (b ? e + k + "S" : "")
    );
  }
  var uc = Array.prototype.some
    ? Array.prototype.some
    : function (b) {
        var c = Object(this),
          d = c.length >>> 0,
          n;
        for (n = 0; n < d; n++)
          if (n in c && b.call(this, c[n], n, c)) return !0;
        return !1;
      };
  var Ib = (e.momentProperties = []),
    Jb = !1,
    bc = {};
  e.suppressDeprecationWarnings = !1;
  e.deprecationHandler = null;
  var Ic = Object.keys
    ? Object.keys
    : function (b) {
        var c,
          n = [];
        for (c in b) d(b, c) && n.push(c);
        return n;
      };
  var Kb =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    wb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Lb = {},
    ib = {},
    pb = {},
    za = {},
    kc = /\d/,
    Ga = /\d\d/,
    lc = /\d{3}/,
    Rb = /\d{4}/,
    Ab = /[+-]?\d{6}/,
    ka = /\d\d?/,
    mc = /\d\d\d\d?/,
    nc = /\d\d\d\d\d\d?/,
    Bb = /\d{1,3}/,
    Sb = /\d{1,4}/,
    Cb = /[+-]?\d{1,6}/,
    kb = /\d+/,
    Db = /[+-]?\d+/,
    Jc = /Z|[+-]\d\d:?\d\d/gi,
    Eb = /Z|[+-]\d\d(?::?\d\d)?/gi,
    tb =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  var Mb = {};
  var Nb = {},
    Ba = 0,
    Ta = 1,
    Oa = 2,
    ua = 3,
    Na = 4,
    Ua = 5,
    db = 6,
    vc = 7,
    wc = 8;
  var ta = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (b) {
        var c;
        for (c = 0; c < this.length; ++c) if (this[c] === b) return c;
        return -1;
      };
  z("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  z("MMM", 0, 0, function (b) {
    return this.localeData().monthsShort(this, b);
  });
  z("MMMM", 0, 0, function (b) {
    return this.localeData().months(this, b);
  });
  D("month", "M");
  za.month = 8;
  h("M", ka);
  h("MM", ka, Ga);
  h("MMM", function (b, c) {
    return c.monthsShortRegex(b);
  });
  h("MMMM", function (b, c) {
    return c.monthsRegex(b);
  });
  H(["M", "MM"], function (b, c) {
    c[Ta] = u(b) - 1;
  });
  H(["MMM", "MMMM"], function (b, c, d, e) {
    e = d._locale.monthsParse(b, e, d._strict);
    null != e ? (c[Ta] = e) : (v(d).invalidMonth = b);
  });
  var dc = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    oc = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  z("Y", 0, 0, function () {
    var b = this.year();
    return 9999 >= b ? Q(b, 4) : "+" + b;
  });
  z(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  z(0, ["YYYY", 4], 0, "year");
  z(0, ["YYYYY", 5], 0, "year");
  z(0, ["YYYYYY", 6, !0], 0, "year");
  D("year", "y");
  za.year = 1;
  h("Y", Db);
  h("YY", ka, Ga);
  h("YYYY", Sb, Rb);
  h("YYYYY", Cb, Ab);
  h("YYYYYY", Cb, Ab);
  H(["YYYYY", "YYYYYY"], Ba);
  H("YYYY", function (b, c) {
    c[Ba] = 2 === b.length ? e.parseTwoDigitYear(b) : u(b);
  });
  H("YY", function (b, c) {
    c[Ba] = e.parseTwoDigitYear(b);
  });
  H("Y", function (b, c) {
    c[Ba] = parseInt(b, 10);
  });
  e.parseTwoDigitYear = function (b) {
    return u(b) + (68 < u(b) ? 1900 : 2e3);
  };
  var pc = M("FullYear", !0);
  z("w", ["ww", 2], "wo", "week");
  z("W", ["WW", 2], "Wo", "isoWeek");
  D("week", "w");
  D("isoWeek", "W");
  za.week = 5;
  za.isoWeek = 5;
  h("w", ka);
  h("ww", ka, Ga);
  h("W", ka);
  h("WW", ka, Ga);
  wa(["w", "ww", "W", "WW"], function (b, c, d, e) {
    c[e.substr(0, 1)] = u(b);
  });
  z("d", 0, "do", "day");
  z("dd", 0, 0, function (b) {
    return this.localeData().weekdaysMin(this, b);
  });
  z("ddd", 0, 0, function (b) {
    return this.localeData().weekdaysShort(this, b);
  });
  z("dddd", 0, 0, function (b) {
    return this.localeData().weekdays(this, b);
  });
  z("e", 0, 0, "weekday");
  z("E", 0, 0, "isoWeekday");
  D("day", "d");
  D("weekday", "e");
  D("isoWeekday", "E");
  za.day = 11;
  za.weekday = 11;
  za.isoWeekday = 11;
  h("d", ka);
  h("e", ka);
  h("E", ka);
  h("dd", function (b, c) {
    return c.weekdaysMinRegex(b);
  });
  h("ddd", function (b, c) {
    return c.weekdaysShortRegex(b);
  });
  h("dddd", function (b, c) {
    return c.weekdaysRegex(b);
  });
  wa(["dd", "ddd", "dddd"], function (b, c, d, e) {
    e = d._locale.weekdaysParse(b, e, d._strict);
    null != e ? (c.d = e) : (v(d).invalidWeekday = b);
  });
  wa(["d", "e", "E"], function (b, c, d, e) {
    c[e] = u(b);
  });
  var ec = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
  z("H", ["HH", 2], 0, "hour");
  z("h", ["hh", 2], 0, ra);
  z("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  });
  z("hmm", 0, 0, function () {
    return "" + ra.apply(this) + Q(this.minutes(), 2);
  });
  z("hmmss", 0, 0, function () {
    return "" + ra.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2);
  });
  z("Hmm", 0, 0, function () {
    return "" + this.hours() + Q(this.minutes(), 2);
  });
  z("Hmmss", 0, 0, function () {
    return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2);
  });
  ha("a", !0);
  ha("A", !1);
  D("hour", "h");
  za.hour = 13;
  h("a", sa);
  h("A", sa);
  h("H", ka);
  h("h", ka);
  h("k", ka);
  h("HH", ka, Ga);
  h("hh", ka, Ga);
  h("kk", ka, Ga);
  h("hmm", mc);
  h("hmmss", nc);
  h("Hmm", mc);
  h("Hmmss", nc);
  H(["H", "HH"], ua);
  H(["k", "kk"], function (b, c, d) {
    b = u(b);
    c[ua] = 24 === b ? 0 : b;
  });
  H(["a", "A"], function (b, c, d) {
    d._isPm = d._locale.isPM(b);
    d._meridiem = b;
  });
  H(["h", "hh"], function (b, c, d) {
    c[ua] = u(b);
    v(d).bigHour = !0;
  });
  H("hmm", function (b, c, d) {
    var n = b.length - 2;
    c[ua] = u(b.substr(0, n));
    c[Na] = u(b.substr(n));
    v(d).bigHour = !0;
  });
  H("hmmss", function (b, c, d) {
    var n = b.length - 4,
      e = b.length - 2;
    c[ua] = u(b.substr(0, n));
    c[Na] = u(b.substr(n, 2));
    c[Ua] = u(b.substr(e));
    v(d).bigHour = !0;
  });
  H("Hmm", function (b, c, d) {
    d = b.length - 2;
    c[ua] = u(b.substr(0, d));
    c[Na] = u(b.substr(d));
  });
  H("Hmmss", function (b, c, d) {
    d = b.length - 4;
    var n = b.length - 2;
    c[ua] = u(b.substr(0, d));
    c[Na] = u(b.substr(d, 2));
    c[Ua] = u(b.substr(n));
  });
  var Kc = M("Hours", !0),
    cc = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      },
      months:
        "January February March April May June July August September October November December".split(
          " "
        ),
      monthsShort: dc,
      week: { dow: 0, doy: 6 },
      weekdays:
        "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
      weekdaysShort: ec,
      meridiemParse: /[ap]\.?m?\.?/i,
    },
    na = {},
    rb = {},
    qb,
    xc =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    yc =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    zc = /Z|[+-]\d\d(?::?\d\d)?/,
    xb = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1],
    ],
    Ob = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    Cc = /^\/?Date\((-?\d+)/i,
    Ac =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    Bc = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480,
    };
  e.createFromInputFallback = L(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (b) {
      b._d = new Date(b._i + (b._useUTC ? " UTC" : ""));
    }
  );
  e.ISO_8601 = function () {};
  e.RFC_2822 = function () {};
  var Lc = L(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var b = B.apply(null, arguments);
        return this.isValid() && b.isValid() ? (b < this ? this : b) : da();
      }
    ),
    Mc = L(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var b = B.apply(null, arguments);
        return this.isValid() && b.isValid() ? (b > this ? this : b) : da();
      }
    ),
    sb = "year quarter month week day hour minute second millisecond".split(
      " "
    );
  nb("Z", ":");
  nb("ZZ", "");
  h("Z", Eb);
  h("ZZ", Eb);
  H(["Z", "ZZ"], function (b, c, d) {
    d._useUTC = !0;
    d._tzm = Ka(Eb, b);
  });
  var Dc = /([\+\-]|\d\d)/gi;
  e.updateOffset = function () {};
  var Ec = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    Fc =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  Ma.fn = Qa.prototype;
  Ma.invalid = function () {
    return Ma(NaN);
  };
  var Nc = Vb(1, "add"),
    Oc = Vb(-1, "subtract");
  e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var qc = L(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (b) {
      return void 0 === b ? this.localeData() : this.locale(b);
    }
  );
  z("N", 0, 0, "eraAbbr");
  z("NN", 0, 0, "eraAbbr");
  z("NNN", 0, 0, "eraAbbr");
  z("NNNN", 0, 0, "eraName");
  z("NNNNN", 0, 0, "eraNarrow");
  z("y", ["y", 1], "yo", "eraYear");
  z("y", ["yy", 2], 0, "eraYear");
  z("y", ["yyy", 3], 0, "eraYear");
  z("y", ["yyyy", 4], 0, "eraYear");
  h("N", Hb);
  h("NN", Hb);
  h("NNN", Hb);
  h("NNNN", function (b, c) {
    return c.erasNameRegex(b);
  });
  h("NNNNN", function (b, c) {
    return c.erasNarrowRegex(b);
  });
  H(["N", "NN", "NNN", "NNNN", "NNNNN"], function (b, c, d, e) {
    (c = d._locale.erasParse(b, e, d._strict))
      ? (v(d).era = c)
      : (v(d).invalidEra = b);
  });
  h("y", kb);
  h("yy", kb);
  h("yyy", kb);
  h("yyyy", kb);
  h("yo", function (b, c) {
    return c._eraYearOrdinalRegex || kb;
  });
  H(["y", "yy", "yyy", "yyyy"], Ba);
  H(["yo"], function (b, c, d, e) {
    var n;
    d._locale._eraYearOrdinalRegex &&
      (n = b.match(d._locale._eraYearOrdinalRegex));
    c[Ba] = d._locale.eraYearOrdinalParse
      ? d._locale.eraYearOrdinalParse(b, n)
      : parseInt(b, 10);
  });
  z(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  z(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  vb("gggg", "weekYear");
  vb("ggggg", "weekYear");
  vb("GGGG", "isoWeekYear");
  vb("GGGGG", "isoWeekYear");
  D("weekYear", "gg");
  D("isoWeekYear", "GG");
  za.weekYear = 1;
  za.isoWeekYear = 1;
  h("G", Db);
  h("g", Db);
  h("GG", ka, Ga);
  h("gg", ka, Ga);
  h("GGGG", Sb, Rb);
  h("gggg", Sb, Rb);
  h("GGGGG", Cb, Ab);
  h("ggggg", Cb, Ab);
  wa(["gggg", "ggggg", "GGGG", "GGGGG"], function (b, c, d, e) {
    c[e.substr(0, 2)] = u(b);
  });
  wa(["gg", "GG"], function (b, c, d, f) {
    c[f] = e.parseTwoDigitYear(b);
  });
  z("Q", 0, "Qo", "quarter");
  D("quarter", "Q");
  za.quarter = 7;
  h("Q", kc);
  H("Q", function (b, c) {
    c[Ta] = 3 * (u(b) - 1);
  });
  z("D", ["DD", 2], "Do", "date");
  D("date", "D");
  za.date = 9;
  h("D", ka);
  h("DD", ka, Ga);
  h("Do", function (b, c) {
    return b
      ? c._dayOfMonthOrdinalParse || c._ordinalParse
      : c._dayOfMonthOrdinalParseLenient;
  });
  H(["D", "DD"], Oa);
  H("Do", function (b, c) {
    c[Oa] = u(b.match(ka)[0]);
  });
  var rc = M("Date", !0);
  z("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  D("dayOfYear", "DDD");
  za.dayOfYear = 4;
  h("DDD", Bb);
  h("DDDD", lc);
  H(["DDD", "DDDD"], function (b, c, d) {
    d._dayOfYear = u(b);
  });
  z("m", ["mm", 2], 0, "minute");
  D("minute", "m");
  za.minute = 14;
  h("m", ka);
  h("mm", ka, Ga);
  H(["m", "mm"], Na);
  var Pc = M("Minutes", !1);
  z("s", ["ss", 2], 0, "second");
  D("second", "s");
  za.second = 15;
  h("s", ka);
  h("ss", ka, Ga);
  H(["s", "ss"], Ua);
  var Qc = M("Seconds", !1);
  z("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  z(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  z(0, ["SSS", 3], 0, "millisecond");
  z(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  });
  z(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  });
  z(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  });
  z(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  });
  z(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  });
  z(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  });
  D("millisecond", "ms");
  za.millisecond = 16;
  h("S", Bb, kc);
  h("SS", Bb, Ga);
  h("SSS", Bb, lc);
  var ab;
  for (ab = "SSSS"; 9 >= ab.length; ab += "S") h(ab, kb);
  for (ab = "S"; 9 >= ab.length; ab += "S") H(ab, Gc);
  var Rc = M("Milliseconds", !1);
  z("z", 0, 0, "zoneAbbr");
  z("zz", 0, 0, "zoneName");
  var x = ja.prototype;
  x.add = Nc;
  x.calendar = function (b, f) {
    if (1 === arguments.length) {
      var n = arguments[0],
        g;
      if (!(g = K(n) || q(n) || Xb(n) || k(n) || sc(n))) {
        g = c(n) && !r(n);
        var h = !1,
          l =
            "years year y months month M days day d dates date D hours hour h minutes minute m seconds second s milliseconds millisecond ms".split(
              " "
            ),
          m;
        for (m = 0; m < l.length; m += 1) {
          var ia = l[m];
          h = h || d(n, ia);
        }
        g = g && h;
      }
      if (g || null === n || void 0 === n) (b = arguments[0]), (f = void 0);
      else {
        n = arguments[0];
        g = c(n) && !r(n);
        h = !1;
        l = "sameDay nextDay lastDay nextWeek lastWeek sameElse".split(" ");
        for (m = 0; m < l.length; m += 1) (ia = l[m]), (h = h || d(n, ia));
        g && h && ((f = arguments[0]), (b = void 0));
      }
    }
    n = b || B();
    g = Fb(n, this).startOf("day");
    g = e.calendarFormat(this, g) || "sameElse";
    h = f && (P(f[g]) ? f[g].call(this, n) : f[g]);
    return this.format(h || this.localeData().calendar(g, this, B(n)));
  };
  x.clone = function () {
    return new ja(this);
  };
  x.diff = function (b, c, d) {
    if (!this.isValid()) return NaN;
    b = Fb(b, this);
    if (!b.isValid()) return NaN;
    var n = 6e4 * (b.utcOffset() - this.utcOffset());
    c = G(c);
    switch (c) {
      case "year":
        c = ub(this, b) / 12;
        break;
      case "month":
        c = ub(this, b);
        break;
      case "quarter":
        c = ub(this, b) / 3;
        break;
      case "second":
        c = (this - b) / 1e3;
        break;
      case "minute":
        c = (this - b) / 6e4;
        break;
      case "hour":
        c = (this - b) / 36e5;
        break;
      case "day":
        c = (this - b - n) / 864e5;
        break;
      case "week":
        c = (this - b - n) / 6048e5;
        break;
      default:
        c = this - b;
    }
    return d ? c : I(c);
  };
  x.endOf = function (b) {
    b = G(b);
    if (void 0 === b || "millisecond" === b || !this.isValid()) return this;
    var c = this._isUTC ? ac : $b;
    switch (b) {
      case "year":
        var d = c(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        d = c(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
        break;
      case "month":
        d = c(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        d = c(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        d =
          c(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
        break;
      case "day":
      case "date":
        d = c(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        d = this._d.valueOf();
        d +=
          36e5 - gb(d + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
        break;
      case "minute":
        d = this._d.valueOf();
        d += 6e4 - gb(d, 6e4) - 1;
        break;
      case "second":
        (d = this._d.valueOf()), (d += 1e3 - gb(d, 1e3) - 1);
    }
    this._d.setTime(d);
    e.updateOffset(this, !0);
    return this;
  };
  x.format = function (b) {
    b || (b = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
    b = ba(this, b);
    return this.localeData().postformat(b);
  };
  x.from = function (b, c) {
    return this.isValid() && ((K(b) && b.isValid()) || B(b).isValid())
      ? Ma({ to: this, from: b }).locale(this.locale()).humanize(!c)
      : this.localeData().invalidDate();
  };
  x.fromNow = function (b) {
    return this.from(B(), b);
  };
  x.to = function (b, c) {
    return this.isValid() && ((K(b) && b.isValid()) || B(b).isValid())
      ? Ma({ from: this, to: b }).locale(this.locale()).humanize(!c)
      : this.localeData().invalidDate();
  };
  x.toNow = function (b) {
    return this.to(B(), b);
  };
  x.get = function (b) {
    b = G(b);
    return P(this[b]) ? this[b]() : this;
  };
  x.invalidAt = function () {
    return v(this).overflow;
  };
  x.isAfter = function (b, c) {
    b = K(b) ? b : B(b);
    if (!this.isValid() || !b.isValid()) return !1;
    c = G(c) || "millisecond";
    return "millisecond" === c
      ? this.valueOf() > b.valueOf()
      : b.valueOf() < this.clone().startOf(c).valueOf();
  };
  x.isBefore = function (b, c) {
    b = K(b) ? b : B(b);
    if (!this.isValid() || !b.isValid()) return !1;
    c = G(c) || "millisecond";
    return "millisecond" === c
      ? this.valueOf() < b.valueOf()
      : this.clone().endOf(c).valueOf() < b.valueOf();
  };
  x.isBetween = function (b, c, d, e) {
    b = K(b) ? b : B(b);
    c = K(c) ? c : B(c);
    if (!(this.isValid() && b.isValid() && c.isValid())) return !1;
    e = e || "()";
    return (
      ("(" === e[0] ? this.isAfter(b, d) : !this.isBefore(b, d)) &&
      (")" === e[1] ? this.isBefore(c, d) : !this.isAfter(c, d))
    );
  };
  x.isSame = function (b, c) {
    b = K(b) ? b : B(b);
    if (!this.isValid() || !b.isValid()) return !1;
    c = G(c) || "millisecond";
    if ("millisecond" === c) return this.valueOf() === b.valueOf();
    b = b.valueOf();
    return (
      this.clone().startOf(c).valueOf() <= b &&
      b <= this.clone().endOf(c).valueOf()
    );
  };
  x.isSameOrAfter = function (b, c) {
    return this.isSame(b, c) || this.isAfter(b, c);
  };
  x.isSameOrBefore = function (b, c) {
    return this.isSame(b, c) || this.isBefore(b, c);
  };
  x.isValid = function () {
    return O(this);
  };
  x.lang = qc;
  x.locale = Yb;
  x.localeData = Zb;
  x.max = Mc;
  x.min = Lc;
  x.parsingFlags = function () {
    return y({}, v(this));
  };
  x.set = function (b, c) {
    if ("object" === typeof b) {
      b = F(b);
      c = R(b);
      var d;
      for (d = 0; d < c.length; d++) this[c[d].unit](b[c[d].unit]);
    } else if (((b = G(b)), P(this[b]))) return this[b](c);
    return this;
  };
  x.startOf = function (b) {
    b = G(b);
    if (void 0 === b || "millisecond" === b || !this.isValid()) return this;
    var c = this._isUTC ? ac : $b;
    switch (b) {
      case "year":
        var d = c(this.year(), 0, 1);
        break;
      case "quarter":
        d = c(this.year(), this.month() - (this.month() % 3), 1);
        break;
      case "month":
        d = c(this.year(), this.month(), 1);
        break;
      case "week":
        d = c(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        d = c(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        d = c(this.year(), this.month(), this.date());
        break;
      case "hour":
        d = this._d.valueOf();
        d -= gb(d + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
        break;
      case "minute":
        d = this._d.valueOf();
        d -= gb(d, 6e4);
        break;
      case "second":
        (d = this._d.valueOf()), (d -= gb(d, 1e3));
    }
    this._d.setTime(d);
    e.updateOffset(this, !0);
    return this;
  };
  x.subtract = Oc;
  x.toArray = function () {
    return [
      this.year(),
      this.month(),
      this.date(),
      this.hour(),
      this.minute(),
      this.second(),
      this.millisecond(),
    ];
  };
  x.toObject = function () {
    return {
      years: this.year(),
      months: this.month(),
      date: this.date(),
      hours: this.hours(),
      minutes: this.minutes(),
      seconds: this.seconds(),
      milliseconds: this.milliseconds(),
    };
  };
  x.toDate = function () {
    return new Date(this.valueOf());
  };
  x.toISOString = function (b) {
    if (!this.isValid()) return null;
    var c = (b = !0 !== b) ? this.clone().utc() : this;
    return 0 > c.year() || 9999 < c.year()
      ? ba(
          c,
          b ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        )
      : P(Date.prototype.toISOString)
      ? b
        ? this.toDate().toISOString()
        : new Date(this.valueOf() + 6e4 * this.utcOffset())
            .toISOString()
            .replace("Z", ba(c, "Z"))
      : ba(
          c,
          b ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
  };
  x.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var b = "moment",
      c = "";
    this.isLocal() ||
      ((b = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
      (c = "Z"));
    b = "[" + b + '("]';
    var d = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY";
    return this.format(b + d + "-MM-DD[T]HH:mm:ss.SSS" + (c + '[")]'));
  };
  "undefined" !== typeof Symbol &&
    null != Symbol.for &&
    (x[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment\x3c" + this.format() + "\x3e";
    });
  x.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  };
  x.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  };
  x.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  };
  x.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  };
  x.creationData = function () {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  };
  x.eraName = function () {
    var b,
      c = this.localeData().eras();
    var d = 0;
    for (b = c.length; d < b; ++d) {
      var e = this.startOf("day").valueOf();
      if (
        (c[d].since <= e && e <= c[d].until) ||
        (c[d].until <= e && e <= c[d].since)
      )
        return c[d].name;
    }
    return "";
  };
  x.eraNarrow = function () {
    var b,
      c = this.localeData().eras();
    var d = 0;
    for (b = c.length; d < b; ++d) {
      var e = this.startOf("day").valueOf();
      if (
        (c[d].since <= e && e <= c[d].until) ||
        (c[d].until <= e && e <= c[d].since)
      )
        return c[d].narrow;
    }
    return "";
  };
  x.eraAbbr = function () {
    var b,
      c = this.localeData().eras();
    var d = 0;
    for (b = c.length; d < b; ++d) {
      var e = this.startOf("day").valueOf();
      if (
        (c[d].since <= e && e <= c[d].until) ||
        (c[d].until <= e && e <= c[d].since)
      )
        return c[d].abbr;
    }
    return "";
  };
  x.eraYear = function () {
    var b,
      c = this.localeData().eras();
    var d = 0;
    for (b = c.length; d < b; ++d) {
      var f = c[d].since <= c[d].until ? 1 : -1;
      var g = this.startOf("day").valueOf();
      if (
        (c[d].since <= g && g <= c[d].until) ||
        (c[d].until <= g && g <= c[d].since)
      )
        return (this.year() - e(c[d].since).year()) * f + c[d].offset;
    }
    return this.year();
  };
  x.year = pc;
  x.isLeapYear = function () {
    return C(this.year());
  };
  x.weekYear = function (b) {
    return fc.call(
      this,
      b,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  };
  x.isoWeekYear = function (b) {
    return fc.call(this, b, this.isoWeek(), this.isoWeekday(), 1, 4);
  };
  x.quarter = x.quarters = function (b) {
    return null == b
      ? Math.ceil((this.month() + 1) / 3)
      : this.month(3 * (b - 1) + (this.month() % 3));
  };
  x.month = xa;
  x.daysInMonth = function () {
    return Ca(this.year(), this.month());
  };
  x.week = x.weeks = function (b) {
    var c = this.localeData().week(this);
    return null == b ? c : this.add(7 * (b - c), "d");
  };
  x.isoWeek = x.isoWeeks = function (b) {
    var c = Y(this, 1, 4).week;
    return null == b ? c : this.add(7 * (b - c), "d");
  };
  x.weeksInYear = function () {
    var b = this.localeData()._week;
    return qa(this.year(), b.dow, b.doy);
  };
  x.weeksInWeekYear = function () {
    var b = this.localeData()._week;
    return qa(this.weekYear(), b.dow, b.doy);
  };
  x.isoWeeksInYear = function () {
    return qa(this.year(), 1, 4);
  };
  x.isoWeeksInISOWeekYear = function () {
    return qa(this.isoWeekYear(), 1, 4);
  };
  x.date = rc;
  x.day = x.days = function (b) {
    if (!this.isValid()) return null != b ? this : NaN;
    var c = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (null != b) {
      var d = this.localeData();
      "string" === typeof b &&
        (isNaN(b)
          ? ((b = d.weekdaysParse(b)), (b = "number" === typeof b ? b : null))
          : (b = parseInt(b, 10)));
      return this.add(b - c, "d");
    }
    return c;
  };
  x.weekday = function (b) {
    if (!this.isValid()) return null != b ? this : NaN;
    var c = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == b ? c : this.add(b - c, "d");
  };
  x.isoWeekday = function (b) {
    if (!this.isValid()) return null != b ? this : NaN;
    if (null != b) {
      var c = this.localeData();
      b =
        "string" === typeof b
          ? c.weekdaysParse(b) % 7 || 7
          : isNaN(b)
          ? null
          : b;
      return this.day(this.day() % 7 ? b : b - 7);
    }
    return this.day() || 7;
  };
  x.dayOfYear = function (b) {
    var c =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return null == b ? c : this.add(b - c, "d");
  };
  x.hour = x.hours = Kc;
  x.minute = x.minutes = Pc;
  x.second = x.seconds = Qc;
  x.millisecond = x.milliseconds = Rc;
  x.utcOffset = function (b, c, d) {
    var f = this._offset || 0,
      n;
    if (!this.isValid()) return null != b ? this : NaN;
    if (null != b) {
      if ("string" === typeof b) {
        if (((b = Ka(Eb, b)), null === b)) return this;
      } else 16 > Math.abs(b) && !d && (b *= 60);
      !this._isUTC && c && (n = -Math.round(this._d.getTimezoneOffset()));
      this._offset = b;
      this._isUTC = !0;
      null != n && this.add(n, "m");
      f !== b &&
        (!c || this._changeInProgress
          ? Wb(this, Ma(b - f, "m"), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            e.updateOffset(this, !0),
            (this._changeInProgress = null)));
      return this;
    }
    return this._isUTC ? f : -Math.round(this._d.getTimezoneOffset());
  };
  x.utc = function (b) {
    return this.utcOffset(0, b);
  };
  x.local = function (b) {
    this._isUTC &&
      (this.utcOffset(0, b),
      (this._isUTC = !1),
      b && this.subtract(-Math.round(this._d.getTimezoneOffset()), "m"));
    return this;
  };
  x.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
    else if ("string" === typeof this._i) {
      var b = Ka(Jc, this._i);
      null != b ? this.utcOffset(b) : this.utcOffset(0, !0);
    }
    return this;
  };
  x.hasAlignedHourOffset = function (b) {
    if (!this.isValid()) return !1;
    b = b ? B(b).utcOffset() : 0;
    return 0 === (this.utcOffset() - b) % 60;
  };
  x.isDST = function () {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  };
  x.isLocal = function () {
    return this.isValid() ? !this._isUTC : !1;
  };
  x.isUtcOffset = function () {
    return this.isValid() ? this._isUTC : !1;
  };
  x.isUtc = Tb;
  x.isUTC = Tb;
  x.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  };
  x.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  };
  x.dates = L("dates accessor is deprecated. Use date instead.", rc);
  x.months = L("months accessor is deprecated. Use month instead", xa);
  x.years = L("years accessor is deprecated. Use year instead", pc);
  x.zone = L(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    function (b, c) {
      return null != b
        ? ("string" !== typeof b && (b = -b), this.utcOffset(b, c), this)
        : -this.utcOffset();
    }
  );
  x.isDSTShifted = L(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    function () {
      if (!l(this._isDSTShifted)) return this._isDSTShifted;
      var b = {};
      S(b, this);
      b = ob(b);
      if (b._a) {
        var c = b._isUTC ? m(b._a) : B(b._a);
        var d;
        if ((d = this.isValid())) {
          b = b._a;
          c = c.toArray();
          d = Math.min(b.length, c.length);
          var e = Math.abs(b.length - c.length),
            f = 0,
            g;
          for (g = 0; g < d; g++) u(b[g]) !== u(c[g]) && f++;
          d = 0 < f + e;
        }
        this._isDSTShifted = d;
      } else this._isDSTShifted = !1;
      return this._isDSTShifted;
    }
  );
  var ca = aa.prototype;
  ca.calendar = function (b, c, d) {
    b = this._calendar[b] || this._calendar.sameElse;
    return P(b) ? b.call(c, d) : b;
  };
  ca.longDateFormat = function (b) {
    var c = this._longDateFormat[b],
      d = this._longDateFormat[b.toUpperCase()];
    if (c || !d) return c;
    this._longDateFormat[b] = d
      .match(Kb)
      .map(function (b) {
        return "MMMM" === b || "MM" === b || "DD" === b || "dddd" === b
          ? b.slice(1)
          : b;
      })
      .join("");
    return this._longDateFormat[b];
  };
  ca.invalidDate = function () {
    return this._invalidDate;
  };
  ca.ordinal = function (b) {
    return this._ordinal.replace("%d", b);
  };
  ca.preparse = gc;
  ca.postformat = gc;
  ca.relativeTime = function (b, c, d, e) {
    var f = this._relativeTime[d];
    return P(f) ? f(b, c, d, e) : f.replace(/%d/i, b);
  };
  ca.pastFuture = function (b, c) {
    b = this._relativeTime[0 < b ? "future" : "past"];
    return P(b) ? b(c) : b.replace(/%s/i, c);
  };
  ca.set = function (b) {
    var c;
    for (c in b)
      if (d(b, c)) {
        var e = b[c];
        P(e) ? (this[c] = e) : (this["_" + c] = e);
      }
    this._config = b;
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source
    );
  };
  ca.eras = function (b, c) {
    var d = this._eras || J("en")._eras;
    b = 0;
    for (c = d.length; b < c; ++b) {
      switch (typeof d[b].since) {
        case "string":
          var f = e(d[b].since).startOf("day");
          d[b].since = f.valueOf();
      }
      switch (typeof d[b].until) {
        case "undefined":
          d[b].until = Infinity;
          break;
        case "string":
          (f = e(d[b].until).startOf("day").valueOf()),
            (d[b].until = f.valueOf());
      }
    }
    return d;
  };
  ca.erasParse = function (b, c, d) {
    var e,
      f = this.eras();
    b = b.toUpperCase();
    var g = 0;
    for (e = f.length; g < e; ++g) {
      var n = f[g].name.toUpperCase();
      var h = f[g].abbr.toUpperCase();
      var k = f[g].narrow.toUpperCase();
      if (d)
        switch (c) {
          case "N":
          case "NN":
          case "NNN":
            if (h === b) return f[g];
            break;
          case "NNNN":
            if (n === b) return f[g];
            break;
          case "NNNNN":
            if (k === b) return f[g];
        }
      else if (0 <= [n, h, k].indexOf(b)) return f[g];
    }
  };
  ca.erasConvertYear = function (b, c) {
    var d = b.since <= b.until ? 1 : -1;
    return void 0 === c
      ? e(b.since).year()
      : e(b.since).year() + (c - b.offset) * d;
  };
  ca.erasAbbrRegex = function (b) {
    d(this, "_erasAbbrRegex") || Gb.call(this);
    return b ? this._erasAbbrRegex : this._erasRegex;
  };
  ca.erasNameRegex = function (b) {
    d(this, "_erasNameRegex") || Gb.call(this);
    return b ? this._erasNameRegex : this._erasRegex;
  };
  ca.erasNarrowRegex = function (b) {
    d(this, "_erasNarrowRegex") || Gb.call(this);
    return b ? this._erasNarrowRegex : this._erasRegex;
  };
  ca.months = function (c, d) {
    return c
      ? b(this._months)
        ? this._months[c.month()]
        : this._months[
            (this._months.isFormat || oc).test(d) ? "format" : "standalone"
          ][c.month()]
      : b(this._months)
      ? this._months
      : this._months.standalone;
  };
  ca.monthsShort = function (c, d) {
    return c
      ? b(this._monthsShort)
        ? this._monthsShort[c.month()]
        : this._monthsShort[oc.test(d) ? "format" : "standalone"][c.month()]
      : b(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
  };
  ca.monthsParse = function (b, c, d) {
    var e;
    if (this._monthsParseExact) {
      a: {
        b = b.toLocaleLowerCase();
        if (!this._monthsParse)
          for (
            this._monthsParse = [],
              this._longMonthsParse = [],
              this._shortMonthsParse = [],
              e = 0;
            12 > e;
            ++e
          ) {
            var f = m([2e3, e]);
            this._shortMonthsParse[e] = this.monthsShort(
              f,
              ""
            ).toLocaleLowerCase();
            this._longMonthsParse[e] = this.months(f, "").toLocaleLowerCase();
          }
        if (d)
          c =
            "MMM" === c
              ? ta.call(this._shortMonthsParse, b)
              : ta.call(this._longMonthsParse, b);
        else if ("MMM" === c) {
          c = ta.call(this._shortMonthsParse, b);
          if (-1 !== c) break a;
          c = ta.call(this._longMonthsParse, b);
        } else {
          c = ta.call(this._longMonthsParse, b);
          if (-1 !== c) break a;
          c = ta.call(this._shortMonthsParse, b);
        }
        c = -1 !== c ? c : null;
      }
      return c;
    }
    this._monthsParse ||
      ((this._monthsParse = []),
      (this._longMonthsParse = []),
      (this._shortMonthsParse = []));
    for (e = 0; 12 > e; e++)
      if (
        ((f = m([2e3, e])),
        d &&
          !this._longMonthsParse[e] &&
          ((this._longMonthsParse[e] = new RegExp(
            "^" + this.months(f, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[e] = new RegExp(
            "^" + this.monthsShort(f, "").replace(".", "") + "$",
            "i"
          ))),
        d ||
          this._monthsParse[e] ||
          ((f = "^" + this.months(f, "") + "|^" + this.monthsShort(f, "")),
          (this._monthsParse[e] = new RegExp(f.replace(".", ""), "i"))),
        (d && "MMMM" === c && this._longMonthsParse[e].test(b)) ||
          (d && "MMM" === c && this._shortMonthsParse[e].test(b)) ||
          (!d && this._monthsParse[e].test(b)))
      )
        return e;
  };
  ca.monthsRegex = function (b) {
    if (this._monthsParseExact)
      return (
        d(this, "_monthsRegex") || Ha.call(this),
        b ? this._monthsStrictRegex : this._monthsRegex
      );
    d(this, "_monthsRegex") || (this._monthsRegex = tb);
    return this._monthsStrictRegex && b
      ? this._monthsStrictRegex
      : this._monthsRegex;
  };
  ca.monthsShortRegex = function (b) {
    if (this._monthsParseExact)
      return (
        d(this, "_monthsRegex") || Ha.call(this),
        b ? this._monthsShortStrictRegex : this._monthsShortRegex
      );
    d(this, "_monthsShortRegex") || (this._monthsShortRegex = tb);
    return this._monthsShortStrictRegex && b
      ? this._monthsShortStrictRegex
      : this._monthsShortRegex;
  };
  ca.week = function (b) {
    return Y(b, this._week.dow, this._week.doy).week;
  };
  ca.firstDayOfYear = function () {
    return this._week.doy;
  };
  ca.firstDayOfWeek = function () {
    return this._week.dow;
  };
  ca.weekdays = function (c, d) {
    d = b(this._weekdays)
      ? this._weekdays
      : this._weekdays[
          c && !0 !== c && this._weekdays.isFormat.test(d)
            ? "format"
            : "standalone"
        ];
    return !0 === c ? pa(d, this._week.dow) : c ? d[c.day()] : d;
  };
  ca.weekdaysMin = function (b) {
    return !0 === b
      ? pa(this._weekdaysMin, this._week.dow)
      : b
      ? this._weekdaysMin[b.day()]
      : this._weekdaysMin;
  };
  ca.weekdaysShort = function (b) {
    return !0 === b
      ? pa(this._weekdaysShort, this._week.dow)
      : b
      ? this._weekdaysShort[b.day()]
      : this._weekdaysShort;
  };
  ca.weekdaysParse = function (b, c, d) {
    var e;
    if (this._weekdaysParseExact) return Ea.call(this, b, c, d);
    this._weekdaysParse ||
      ((this._weekdaysParse = []),
      (this._minWeekdaysParse = []),
      (this._shortWeekdaysParse = []),
      (this._fullWeekdaysParse = []));
    for (e = 0; 7 > e; e++) {
      var f = m([2e3, 1]).day(e);
      d &&
        !this._fullWeekdaysParse[e] &&
        ((this._fullWeekdaysParse[e] = new RegExp(
          "^" + this.weekdays(f, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._shortWeekdaysParse[e] = new RegExp(
          "^" + this.weekdaysShort(f, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._minWeekdaysParse[e] = new RegExp(
          "^" + this.weekdaysMin(f, "").replace(".", "\\.?") + "$",
          "i"
        )));
      this._weekdaysParse[e] ||
        ((f =
          "^" +
          this.weekdays(f, "") +
          "|^" +
          this.weekdaysShort(f, "") +
          "|^" +
          this.weekdaysMin(f, "")),
        (this._weekdaysParse[e] = new RegExp(f.replace(".", ""), "i")));
      if (
        (d && "dddd" === c && this._fullWeekdaysParse[e].test(b)) ||
        (d && "ddd" === c && this._shortWeekdaysParse[e].test(b)) ||
        (d && "dd" === c && this._minWeekdaysParse[e].test(b)) ||
        (!d && this._weekdaysParse[e].test(b))
      )
        return e;
    }
  };
  ca.weekdaysRegex = function (b) {
    if (this._weekdaysParseExact)
      return (
        d(this, "_weekdaysRegex") || Aa.call(this),
        b ? this._weekdaysStrictRegex : this._weekdaysRegex
      );
    d(this, "_weekdaysRegex") || (this._weekdaysRegex = tb);
    return this._weekdaysStrictRegex && b
      ? this._weekdaysStrictRegex
      : this._weekdaysRegex;
  };
  ca.weekdaysShortRegex = function (b) {
    if (this._weekdaysParseExact)
      return (
        d(this, "_weekdaysRegex") || Aa.call(this),
        b ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
      );
    d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tb);
    return this._weekdaysShortStrictRegex && b
      ? this._weekdaysShortStrictRegex
      : this._weekdaysShortRegex;
  };
  ca.weekdaysMinRegex = function (b) {
    if (this._weekdaysParseExact)
      return (
        d(this, "_weekdaysRegex") || Aa.call(this),
        b ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
      );
    d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = tb);
    return this._weekdaysMinStrictRegex && b
      ? this._weekdaysMinStrictRegex
      : this._weekdaysMinRegex;
  };
  ca.isPM = function (b) {
    return "p" === (b + "").toLowerCase().charAt(0);
  };
  ca.meridiem = function (b, c, d) {
    return 11 < b ? (d ? "pm" : "PM") : d ? "am" : "AM";
  };
  p("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD",
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC",
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (b) {
      var c = b % 10;
      c =
        1 === u((b % 100) / 10)
          ? "th"
          : 1 === c
          ? "st"
          : 2 === c
          ? "nd"
          : 3 === c
          ? "rd"
          : "th";
      return b + c;
    },
  });
  e.lang = L("moment.lang is deprecated. Use moment.locale instead.", p);
  e.langData = L(
    "moment.langData is deprecated. Use moment.localeData instead.",
    J
  );
  var Wa = Math.abs,
    Sc = Va("ms"),
    Tc = Va("s"),
    Uc = Va("m"),
    Vc = Va("h"),
    Wc = Va("d"),
    Xc = Va("w"),
    Yc = Va("M"),
    Zc = Va("Q"),
    $c = Va("y"),
    ad = eb("milliseconds"),
    bd = eb("seconds"),
    cd = eb("minutes"),
    dd = eb("hours"),
    ed = eb("days"),
    fd = eb("months"),
    gd = eb("years"),
    Xa = Math.round,
    lb = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 },
    Qb = Math.abs,
    W = Qa.prototype;
  W.isValid = function () {
    return this._isValid;
  };
  W.abs = function () {
    var b = this._data;
    this._milliseconds = Wa(this._milliseconds);
    this._days = Wa(this._days);
    this._months = Wa(this._months);
    b.milliseconds = Wa(b.milliseconds);
    b.seconds = Wa(b.seconds);
    b.minutes = Wa(b.minutes);
    b.hours = Wa(b.hours);
    b.months = Wa(b.months);
    b.years = Wa(b.years);
    return this;
  };
  W.add = function (b, c) {
    return ic(this, b, c, 1);
  };
  W.subtract = function (b, c) {
    return ic(this, b, c, -1);
  };
  W.as = function (b) {
    if (!this.isValid()) return NaN;
    var c = this._milliseconds;
    b = G(b);
    if ("month" === b || "quarter" === b || "year" === b) {
      var d = this._days + c / 864e5;
      d = this._months + (4800 * d) / 146097;
      switch (b) {
        case "month":
          return d;
        case "quarter":
          return d / 3;
        case "year":
          return d / 12;
      }
    } else
      switch (
        ((d = this._days + Math.round((146097 * this._months) / 4800)), b)
      ) {
        case "week":
          return d / 7 + c / 6048e5;
        case "day":
          return d + c / 864e5;
        case "hour":
          return 24 * d + c / 36e5;
        case "minute":
          return 1440 * d + c / 6e4;
        case "second":
          return 86400 * d + c / 1e3;
        case "millisecond":
          return Math.floor(864e5 * d) + c;
        default:
          throw Error("Unknown unit " + b);
      }
  };
  W.asMilliseconds = Sc;
  W.asSeconds = Tc;
  W.asMinutes = Uc;
  W.asHours = Vc;
  W.asDays = Wc;
  W.asWeeks = Xc;
  W.asMonths = Yc;
  W.asQuarters = Zc;
  W.asYears = $c;
  W.valueOf = function () {
    return this.isValid()
      ? this._milliseconds +
          864e5 * this._days +
          (this._months % 12) * 2592e6 +
          31536e6 * u(this._months / 12)
      : NaN;
  };
  W._bubble = function () {
    var b = this._milliseconds,
      c = this._days,
      d = this._months,
      e = this._data;
    (0 <= b && 0 <= c && 0 <= d) ||
      (0 >= b && 0 >= c && 0 >= d) ||
      ((b += 864e5 * jc((146097 * d) / 4800 + c)), (d = c = 0));
    e.milliseconds = b % 1e3;
    b = I(b / 1e3);
    e.seconds = b % 60;
    b = I(b / 60);
    e.minutes = b % 60;
    b = I(b / 60);
    e.hours = b % 24;
    c += I(b / 24);
    b = I((4800 * c) / 146097);
    d += b;
    c -= jc((146097 * b) / 4800);
    b = I(d / 12);
    e.days = c;
    e.months = d % 12;
    e.years = b;
    return this;
  };
  W.clone = function () {
    return Ma(this);
  };
  W.get = function (b) {
    b = G(b);
    return this.isValid() ? this[b + "s"]() : NaN;
  };
  W.milliseconds = ad;
  W.seconds = bd;
  W.minutes = cd;
  W.hours = dd;
  W.days = ed;
  W.weeks = function () {
    return I(this.days() / 7);
  };
  W.months = fd;
  W.years = gd;
  W.humanize = function (b, c) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var d = !1,
      e = lb;
    "object" === typeof b && ((c = b), (b = !1));
    "boolean" === typeof b && (d = b);
    "object" === typeof c &&
      ((e = Object.assign({}, lb, c)),
      null != c.s && null == c.ss && (e.ss = c.s - 1));
    b = this.localeData();
    c = !d;
    var f = Ma(this).abs(),
      g = Xa(f.as("s")),
      h = Xa(f.as("m")),
      n = Xa(f.as("h")),
      k = Xa(f.as("d")),
      l = Xa(f.as("M")),
      m = Xa(f.as("w"));
    f = Xa(f.as("y"));
    g =
      (g <= e.ss && ["s", g]) ||
      (g < e.s && ["ss", g]) ||
      (1 >= h && ["m"]) ||
      (h < e.m && ["mm", h]) ||
      (1 >= n && ["h"]) ||
      (n < e.h && ["hh", n]) ||
      (1 >= k && ["d"]) ||
      (k < e.d && ["dd", k]);
    null != e.w && (g = g || (1 >= m && ["w"]) || (m < e.w && ["ww", m]));
    g = g ||
      (1 >= l && ["M"]) ||
      (l < e.M && ["MM", l]) ||
      (1 >= f && ["y"]) || ["yy", f];
    g[2] = c;
    g[3] = 0 < +this;
    g[4] = b;
    c = Hc.apply(null, g);
    d && (c = b.pastFuture(+this, c));
    return b.postformat(c);
  };
  W.toISOString = zb;
  W.toString = zb;
  W.toJSON = zb;
  W.locale = Yb;
  W.localeData = Zb;
  W.toIsoString = L(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    zb
  );
  W.lang = qc;
  z("X", 0, 0, "unix");
  z("x", 0, 0, "valueOf");
  h("x", Db);
  h("X", /[+-]?\d+(\.\d{1,3})?/);
  H("X", function (b, c, d) {
    d._d = new Date(1e3 * parseFloat(b));
  });
  H("x", function (b, c, d) {
    d._d = new Date(u(b));
  });
  e.version = "2.27.0";
  var tc = B;
  e.fn = x;
  e.min = function () {
    var b = [].slice.call(arguments, 0);
    return mb("isBefore", b);
  };
  e.max = function () {
    var b = [].slice.call(arguments, 0);
    return mb("isAfter", b);
  };
  e.now = function () {
    return Date.now ? Date.now() : +new Date();
  };
  e.utc = m;
  e.unix = function (b) {
    return B(1e3 * b);
  };
  e.months = function (b, c) {
    return hc(b, c, "months");
  };
  e.isDate = q;
  e.locale = p;
  e.invalid = da;
  e.duration = Ma;
  e.isMoment = K;
  e.weekdays = function (b, c, d) {
    return Pb(b, c, d, "weekdays");
  };
  e.parseZone = function () {
    return B.apply(null, arguments).parseZone();
  };
  e.localeData = J;
  e.isDuration = Ra;
  e.monthsShort = function (b, c) {
    return hc(b, c, "monthsShort");
  };
  e.weekdaysMin = function (b, c, d) {
    return Pb(b, c, d, "weekdaysMin");
  };
  e.defineLocale = f;
  e.updateLocale = function (b, c) {
    if (null != c) {
      var d = cc;
      if (null != na[b] && null != na[b].parentLocale)
        na[b].set(Z(na[b]._config, c));
      else {
        var e = g(b);
        null != e && (d = e._config);
        c = Z(d, c);
        null == e && (c.abbr = b);
        c = new aa(c);
        c.parentLocale = na[b];
        na[b] = c;
      }
      p(b);
    } else
      null != na[b] &&
        (null != na[b].parentLocale
          ? ((na[b] = na[b].parentLocale), b === p() && p(b))
          : null != na[b] && delete na[b]);
    return na[b];
  };
  e.locales = function () {
    return Ic(na);
  };
  e.weekdaysShort = function (b, c, d) {
    return Pb(b, c, d, "weekdaysShort");
  };
  e.normalizeUnits = G;
  e.relativeTimeRounding = function (b) {
    return void 0 === b ? Xa : "function" === typeof b ? ((Xa = b), !0) : !1;
  };
  e.relativeTimeThreshold = function (b, c) {
    if (void 0 === lb[b]) return !1;
    if (void 0 === c) return lb[b];
    lb[b] = c;
    "s" === b && (lb.ss = c - 1);
    return !0;
  };
  e.calendarFormat = function (b, c) {
    b = b.diff(c, "days", !0);
    return -6 > b
      ? "sameElse"
      : -1 > b
      ? "lastWeek"
      : 0 > b
      ? "lastDay"
      : 1 > b
      ? "sameDay"
      : 2 > b
      ? "nextDay"
      : 7 > b
      ? "nextWeek"
      : "sameElse";
  };
  e.prototype = x;
  e.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM",
  };
  return e;
});
(function (e, b) {
  if ("function" === typeof define && define.amd) define(["moment"], b);
  else if ("object" === typeof exports)
    try {
      module.exports = b(require("moment"));
    } catch (c) {
      module.exports = b;
    }
  e && (e.momentDurationFormatSetup = e.moment ? b(e.moment) : b);
})(this, function (e) {
  function b(b, c) {
    return c.length > b.length ? !1 : -1 !== b.indexOf(c);
  }
  function c(b) {
    for (var c = ""; b; ) (c += "0"), --b;
    return c;
  }
  function d(b, c) {
    var e = v(U(c).sort(), function (b) {
      return b + ":" + c[b];
    }).join(",");
    e = b + "+" + e;
    d.cache[e] || (d.cache[e] = Intl.NumberFormat(b, c));
    return d.cache[e];
  }
  function r(b, e, h) {
    var k = e.useToLocaleString,
      l = e.useGrouping,
      m = l && e.grouping.slice(),
      w = e.maximumSignificantDigits,
      E = e.minimumIntegerDigits || 1,
      q = e.fractionDigits || 0,
      t = e.groupingSeparator,
      v = e.decimalSeparator;
    if (k && h) {
      l = { minimumIntegerDigits: E, useGrouping: l };
      q && ((l.maximumFractionDigits = q), (l.minimumFractionDigits = q));
      w && 0 < b && (l.maximumSignificantDigits = w);
      if (G)
        return (
          F ||
            ((m = L({}, e)),
            (m.useGrouping = !1),
            (m.decimalSeparator = "."),
            (b = parseFloat(r(b, m), 10))),
          d(h, l).format(b)
        );
      D ||
        ((m = L({}, e)),
        (m.useGrouping = !1),
        (m.decimalSeparator = "."),
        (b = parseFloat(r(b, m), 10)));
      return b.toLocaleString(h, l);
    }
    e = (w ? b.toPrecision(w + 1) : b.toFixed(q + 1)).split("e");
    b = e[1] || "";
    e = e[0].split(".");
    h = e[1] || "";
    var u = e[0] || "";
    e = u.length;
    k = h.length;
    var z = e + k,
      y = u + h;
    if ((w && z === w + 1) || (!w && k === q + 1)) {
      h = y.split("").reverse();
      u = 0;
      for (y = !0; y && u < h.length; )
        u
          ? "9" === h[u]
            ? (h[u] = "0")
            : ((h[u] = (parseInt(h[u], 10) + 1).toString()), (y = !1))
          : (5 > parseInt(h[u], 10) && (y = !1), (h[u] = "0")),
          (u += 1);
      y && h.push("1");
      y = h.reverse().join("");
      y.length === z + 1 && (e += 1);
      k && (y = y.slice(0, -1));
      u = y.slice(0, e);
      h = y.slice(e);
    }
    w && (h = h.replace(/0*$/, ""));
    b = parseInt(b, 10);
    0 < b
      ? h.length <= b
        ? ((h += c(b - h.length)), (u += h), (h = ""))
        : ((u += h.slice(0, b)), (h = h.slice(b)))
      : 0 > b && ((h = c(Math.abs(b) - u.length) + u + h), (u = "0"));
    w ||
      ((h = h.slice(0, q)),
      h.length < q && (h += c(q - h.length)),
      u.length < E && (u = c(E - u.length) + u));
    w = "";
    if (l) {
      e = u;
      for (var C; e.length; )
        m.length && (C = m.shift()),
          w && (w = t + w),
          (w = e.slice(-C) + w),
          (e = e.slice(0, -C));
    } else w = u;
    h && (w = w + v + h);
    return w;
  }
  function l(b, c) {
    return b.label.length > c.label.length
      ? -1
      : b.label.length < c.label.length
      ? 1
      : 0;
  }
  function k(b, c) {
    var d = [];
    m(U(c), function (e) {
      if ("_durationLabels" === e.slice(0, 15)) {
        var h = e.slice(15).toLowerCase();
        m(U(c[e]), function (k) {
          k.slice(0, 1) === b && d.push({ type: h, key: k, label: c[e][k] });
        });
      }
    });
    return d;
  }
  function q(b) {
    return "[object Array]" === Object.prototype.toString.call(b);
  }
  function t(b, c) {
    for (var d = b.length; --d; ) if (c(b[d])) return b[d];
  }
  function y(b, c) {
    var d = 0,
      e = (b && b.length) || 0;
    if ("function" !== typeof c) {
      var k = c;
      c = function (b) {
        return b === k;
      };
    }
    for (; d < e; ) {
      if (c(b[d])) return b[d];
      d += 1;
    }
  }
  function m(b, c) {
    var d = 0,
      e = b.length;
    if (b && e) for (; d < e && !1 !== c(b[d], d); ) d += 1;
  }
  function v(b, c) {
    var d = 0,
      e = b.length,
      k = [];
    if (!b || !e) return k;
    for (; d < e; ) (k[d] = c(b[d], d)), (d += 1);
    return k;
  }
  function O(b, c) {
    return v(b, function (b) {
      return b[c];
    });
  }
  function da(b) {
    var c = [];
    m(b, function (b) {
      b && c.push(b);
    });
    return c;
  }
  function S(b) {
    var c = [];
    m(b, function (b) {
      y(c, b) || c.push(b);
    });
    return c;
  }
  function ja(b, c) {
    var d = [];
    m(b, function (b) {
      m(c, function (c) {
        b === c && d.push(b);
      });
    });
    return S(d);
  }
  function K(b, c) {
    var d = [];
    m(b, function (e, h) {
      if (!c(e)) return (d = b.slice(h)), !1;
    });
    return d;
  }
  function oa(b, c) {
    b = b.slice().reverse();
    return K(b, c).reverse();
  }
  function L(b, c) {
    for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]);
    return b;
  }
  function U(b) {
    var c = [],
      d;
    for (d in b) b.hasOwnProperty(d) && c.push(d);
    return c;
  }
  function P(b, c) {
    var d = 0,
      e = b.length;
    if (!b || !e) return !1;
    for (; d < e; ) {
      if (!0 === c(b[d], d)) return !0;
      d += 1;
    }
    return !1;
  }
  function Z(b) {
    var c = [];
    m(b, function (b) {
      c = c.concat(b);
    });
    return c;
  }
  function aa(b) {
    return (
      "3.6" ===
      b(3.55, "en", {
        useGrouping: !1,
        minimumIntegerDigits: 1,
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })
    );
  }
  function Q(b) {
    var c =
      (c =
        (c = "1" === b(1, "en", { minimumIntegerDigits: 1 })) &&
        "01" === b(1, "en", { minimumIntegerDigits: 2 })) &&
      "001" === b(1, "en", { minimumIntegerDigits: 3 });
    if (!c) return !1;
    c =
      (c =
        (c =
          (c =
            c &&
            "100" ===
              b(99.99, "en", {
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })) &&
          "100.0" ===
            b(99.99, "en", {
              maximumFractionDigits: 1,
              minimumFractionDigits: 1,
            })) &&
        "99.99" ===
          b(99.99, "en", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })) &&
      "99.990" ===
        b(99.99, "en", { maximumFractionDigits: 3, minimumFractionDigits: 3 });
    if (!c) return !1;
    c =
      (c =
        (c =
          (c =
            (c =
              c && "100" === b(99.99, "en", { maximumSignificantDigits: 1 })) &&
            "100" === b(99.99, "en", { maximumSignificantDigits: 2 })) &&
          "100" === b(99.99, "en", { maximumSignificantDigits: 3 })) &&
        "99.99" === b(99.99, "en", { maximumSignificantDigits: 4 })) &&
      "99.99" === b(99.99, "en", { maximumSignificantDigits: 5 });
    return c
      ? (c =
          (c = c && "1,000" === b(1e3, "en", { useGrouping: !0 })) &&
          "1000" === b(1e3, "en", { useGrouping: !1 }))
        ? !0
        : !1
      : !1;
  }
  function z() {
    var b = [].slice.call(arguments),
      c = {},
      d;
    m(b, function (b, e) {
      if (!e) {
        if (!q(b))
          throw "Expected array as the first argument to durationsFormat.";
        d = b;
      }
      "string" === typeof b || "function" === typeof b
        ? (c.template = b)
        : "number" === typeof b
        ? (c.precision = b)
        : "[object Object]" === Object.prototype.toString.call(b) && L(c, b);
    });
    if (!d || !d.length) return [];
    c.returnMomentTypes = !0;
    b = v(d, function (b) {
      return b.format(c);
    });
    b = ja(R, S(O(Z(b), "type")));
    var e = c.largest;
    e && (b = b.slice(0, e));
    c.returnMomentTypes = !1;
    c.outputTypes = b;
    return v(d, function (b) {
      return b.format(c);
    });
  }
  function V() {
    var c = [].slice.call(arguments),
      d = L({}, this.format.defaults),
      h = this.asMilliseconds(),
      u = this.asMonths();
    "function" === typeof this.isValid && !1 === this.isValid() && (u = h = 0);
    var t = 0 > h,
      z = e.duration(Math.abs(h), "milliseconds"),
      D = e.duration(Math.abs(u), "months");
    m(c, function (b) {
      "string" === typeof b || "function" === typeof b
        ? (d.template = b)
        : "number" === typeof b
        ? (d.precision = b)
        : "[object Object]" === Object.prototype.toString.call(b) && L(d, b);
    });
    var F = {
        years: "y",
        months: "M",
        weeks: "w",
        days: "d",
        hours: "h",
        minutes: "m",
        seconds: "s",
        milliseconds: "S",
      },
      Q = {
        escape: /\[(.+?)\]/,
        years: /\*?[Yy]+/,
        months: /\*?M+/,
        weeks: /\*?[Ww]+/,
        days: /\*?[Dd]+/,
        hours: /\*?[Hh]+/,
        minutes: /\*?m+/,
        seconds: /\*?s+/,
        milliseconds: /\*?S+/,
        general: /.+?/,
      };
    d.types = R;
    var V = function (b) {
        return y(R, function (c) {
          return Q[c].test(b);
        });
      },
      M = new RegExp(
        v(R, function (b) {
          return Q[b].source;
        }).join("|"),
        "g"
      );
    d.duration = this;
    var aa =
        "function" === typeof d.template ? d.template.apply(d) : d.template,
      Z = d.outputTypes;
    c = d.returnMomentTypes;
    h = d.largest;
    var ba = [];
    Z ||
      (q(d.stopTrim) && (d.stopTrim = d.stopTrim.join("")),
      d.stopTrim &&
        m(d.stopTrim.match(M), function (b) {
          b = V(b);
          "escape" !== b && "general" !== b && ba.push(b);
        }));
    var X = e.localeData();
    X || (X = {});
    m(U(I), function (b) {
      "function" === typeof I[b]
        ? X[b] || (X[b] = I[b])
        : X["_" + b] || (X["_" + b] = I[b]);
    });
    m(U(X._durationTimeTemplates), function (b) {
      aa = aa.replace("_" + b + "_", X._durationTimeTemplates[b]);
    });
    var ma = d.userLocale || e.locale(),
      Y = d.useLeftUnits,
      qa = d.usePlural,
      pa = d.precision,
      Ea = d.forceLength,
      Aa = d.useGrouping,
      ra = d.trunc,
      ha = d.useSignificantDigits && 0 < pa,
      sa = ha ? d.precision : 0;
    u = sa;
    var la = d.minValue,
      g = !1,
      p = d.maxValue,
      f = !1,
      J = d.useToLocaleString,
      Pa = d.groupingSeparator,
      bb = d.decimalSeparator,
      Ya = d.grouping;
    J = J && (T || G);
    var A = d.trim;
    q(A) && (A = A.join(" "));
    null === A && (h || p || ha) && (A = "all");
    if (null === A || !0 === A || "left" === A || "right" === A) A = "large";
    !1 === A && (A = "");
    var ea = function (b) {
        return b.test(A);
      },
      Za = /large/,
      $a = /both/,
      fb = /^all|[^sm]all/;
    Za = 0 < h || P([Za, $a, fb], ea);
    $a = P([/small/, $a, fb], ea);
    var ob = P([/mid/, fb], ea);
    ea = P([/final/, fb], ea);
    M = v(aa.match(M), function (b, c) {
      var d = V(b);
      "*" === b.slice(0, 1) &&
        ((b = b.slice(1)), "escape" !== d && "general" !== d && ba.push(d));
      return {
        index: c,
        length: b.length,
        text: "",
        token: "escape" === d ? b.replace(Q.escape, "$1") : b,
        type: "escape" === d || "general" === d ? null : d,
      };
    });
    var Ja = { index: 0, length: 0, token: "", text: "", type: null },
      Fa = [];
    Y && M.reverse();
    m(M, function (b) {
      b.type
        ? ((Ja.type || Ja.text) && Fa.push(Ja), (Ja = b))
        : (Ja.text = Y ? b.token + Ja.text : Ja.text + b.token);
    });
    (Ja.type || Ja.text) && Fa.push(Ja);
    Y && Fa.reverse();
    var B = ja(R, S(da(O(Fa, "type"))));
    if (!B.length) return O(Fa, "text").join("");
    B = v(B, function (b, c) {
      var e = c + 1 === B.length;
      c = !c;
      var h = "years" === b || "months" === b ? D.as(b) : z.as(b);
      var k = Math.floor(h),
        l = h - k,
        m = y(Fa, function (c) {
          return b === c.type;
        });
      c && p && h > p && (f = !0);
      e && la && Math.abs(d.duration.as(b)) < la && (g = !0);
      c && null === Ea && 1 < m.length && (Ea = !0);
      z.subtract(k, b);
      D.subtract(k, b);
      return {
        rawValue: h,
        wholeValue: k,
        decimalValue: e ? l : 0,
        isSmallest: e,
        isLargest: c,
        type: b,
        tokenLength: m.length,
      };
    });
    var mb = ra ? Math.floor : Math.round,
      Qa = function (b, c) {
        c = Math.pow(10, c);
        return mb(b * c) / c;
      },
      Ra = !1,
      Sa = !1;
    M = function (b, c) {
      c = {
        useGrouping: Aa,
        groupingSeparator: Pa,
        decimalSeparator: bb,
        grouping: Ya,
        useToLocaleString: J,
      };
      ha &&
        (0 >= sa
          ? ((b.rawValue = 0), (b.wholeValue = 0), (b.decimalValue = 0))
          : ((c.maximumSignificantDigits = sa), (b.significantDigits = sa)));
      f && !Sa && ((b.wholeValue = b.isLargest ? p : 0), (b.decimalValue = 0));
      g &&
        !Sa &&
        ((b.wholeValue = b.isSmallest ? la : 0), (b.decimalValue = 0));
      b.isSmallest ||
      (b.significantDigits &&
        0 >= b.significantDigits - b.wholeValue.toString().length)
        ? 0 > pa
          ? (b.value = Qa(b.wholeValue, pa))
          : 0 === pa
          ? (b.value = mb(b.wholeValue + b.decimalValue))
          : ha
          ? ((b.value = ra
              ? Qa(b.rawValue, sa - b.wholeValue.toString().length)
              : b.rawValue),
            b.wholeValue && (sa -= b.wholeValue.toString().length))
          : ((c.fractionDigits = pa),
            (b.value = ra
              ? b.wholeValue + Qa(b.decimalValue, pa)
              : b.wholeValue + b.decimalValue))
        : ha && b.wholeValue
        ? ((b.value = Math.round(
            Qa(
              b.wholeValue,
              b.significantDigits - b.wholeValue.toString().length
            )
          )),
          (sa -= b.wholeValue.toString().length))
        : (b.value = b.wholeValue);
      1 < b.tokenLength &&
        (Ea || Ra) &&
        ((c.minimumIntegerDigits = b.tokenLength),
        Sa &&
          c.maximumSignificantDigits < b.tokenLength &&
          delete c.maximumSignificantDigits);
      !Ra &&
        (0 < b.value || "" === A || y(ba, b.type) || y(Z, b.type)) &&
        (Ra = !0);
      b.formattedValue = r(b.value, c, ma);
      c.useGrouping = !1;
      c.decimalSeparator = ".";
      b.formattedValueEn = r(b.value, c, "en");
      2 === b.tokenLength &&
        "milliseconds" === b.type &&
        (b.formattedValueMS = r(
          b.value,
          { minimumIntegerDigits: 3, useGrouping: !1 },
          "en"
        ).slice(0, 2));
      return b;
    };
    B = v(B, M);
    B = da(B);
    if (1 < B.length) {
      var nb = function (b) {
        return y(B, function (c) {
          return c.type === b;
        });
      };
      m(C, function (b) {
        var c = nb(b.type);
        c &&
          m(b.targets, function (b) {
            var d = nb(b.type);
            d &&
              parseInt(c.formattedValueEn, 10) === b.value &&
              ((c.rawValue = 0),
              (c.wholeValue = 0),
              (c.decimalValue = 0),
              (d.rawValue += 1),
              (d.wholeValue += 1),
              (d.decimalValue = 0),
              (d.formattedValueEn = d.wholeValue.toString()),
              (Sa = !0));
          });
      });
    }
    Sa && ((Ra = !1), (sa = u), (B = v(B, M)), (B = da(B)));
    !Z || (f && !d.trim)
      ? (Za &&
          (B = K(B, function (b) {
            return !b.isSmallest && !b.wholeValue && !y(ba, b.type);
          })),
        h && B.length && (B = B.slice(0, h)),
        $a &&
          1 < B.length &&
          (B = oa(B, function (b) {
            return !b.wholeValue && !y(ba, b.type) && !b.isLargest;
          })),
        ob &&
          ((B = v(B, function (b, c) {
            return 0 < c && c < B.length - 1 && !b.wholeValue ? null : b;
          })),
          (B = da(B))),
        !ea ||
          1 !== B.length ||
          B[0].wholeValue ||
          (!ra && B[0].isSmallest && B[0].rawValue < la) ||
          (B = []))
      : ((B = v(B, function (b) {
          return y(Z, function (c) {
            return b.type === c;
          })
            ? b
            : null;
        })),
        (B = da(B)));
    if (c) return B;
    m(Fa, function (c) {
      var d = F[c.type],
        e = y(B, function (b) {
          return b.type === c.type;
        });
      if (d && e) {
        e = e.formattedValueEn.split(".");
        e[0] = parseInt(e[0], 10);
        e[1] = e[1] ? parseFloat("0." + e[1], 10) : null;
        var f = X.durationPluralKey(d, e[0], e[1]),
          g = k(d, X),
          h = !1,
          p = {};
        m(X._durationLabelTypes, function (d) {
          var e = y(g, function (b) {
            return b.type === d.type && b.key === f;
          });
          e &&
            ((p[e.type] = e.label),
            b(c.text, d.string) &&
              ((c.text = c.text.replace(d.string, e.label)), (h = !0)));
        });
        qa &&
          !h &&
          (g.sort(l),
          m(g, function (d) {
            if (p[d.type] === d.label) {
              if (b(c.text, d.label)) return !1;
            } else if (b(c.text, d.label)) return (c.text = c.text.replace(d.label, p[d.type])), !1;
          }));
      }
    });
    Fa = v(Fa, function (b) {
      if (!b.type) return b.text;
      var c = y(B, function (c) {
        return c.type === b.type;
      });
      if (!c) return "";
      var d = "";
      Y && (d += b.text);
      if ((t && f) || (!t && g)) (d += "\x3c "), (g = f = !1);
      if ((t && g) || (!t && f)) (d += "\x3e "), (g = f = !1);
      t &&
        (0 < c.value || "" === A || y(ba, c.type) || y(Z, c.type)) &&
        ((d += "-"), (t = !1));
      d =
        "milliseconds" === b.type && c.formattedValueMS
          ? d + c.formattedValueMS
          : d + c.formattedValue;
      Y || (d += b.text);
      return d;
    });
    return Fa.join("")
      .replace(/(,| |:|\.)*$/, "")
      .replace(/^(,| |:|\.)*/, "");
  }
  function ma() {
    var b = this.duration,
      c = function (c) {
        return b._data[c];
      },
      d = y(this.types, c);
    c = t(this.types, c);
    switch (d) {
      case "milliseconds":
        return "S __";
      case "seconds":
      case "minutes":
        return "*_MS_";
      case "hours":
        return "_HMS_";
      case "days":
        if (d === c) return "d __";
      case "weeks":
        if (d === c) return "w __";
        null === this.trim && (this.trim = "both");
        return "w __, d __, h __";
      case "months":
        if (d === c) return "M __";
      case "years":
        if (d === c) return "y __";
        null === this.trim && (this.trim = "both");
        return "y __, M __, d __";
      default:
        return (
          null === this.trim && (this.trim = "both"),
          "y __, d __, h __, m __, s __"
        );
    }
  }
  function ba(b) {
    if (!b) throw "Moment Duration Format init cannot find moment instance.";
    b.duration.format = z;
    b.duration.fn.format = V;
    b.duration.fn.format.defaults = {
      trim: null,
      stopTrim: null,
      largest: null,
      maxValue: null,
      minValue: null,
      precision: 0,
      trunc: !1,
      forceLength: null,
      userLocale: null,
      usePlural: !0,
      useLeftUnits: !1,
      useGrouping: !0,
      useSignificantDigits: !1,
      template: ma,
      useToLocaleString: !0,
      groupingSeparator: ",",
      decimalSeparator: ".",
      grouping: [3],
    };
    b.updateLocale("en", I);
  }
  var T = !1,
    D = !1,
    G = !1,
    F = !1,
    R =
      "escape years months weeks days hours minutes seconds milliseconds general".split(
        " "
      ),
    C = [
      {
        type: "seconds",
        targets: [
          { type: "minutes", value: 60 },
          { type: "hours", value: 3600 },
          { type: "days", value: 86400 },
          { type: "weeks", value: 604800 },
          { type: "months", value: 2678400 },
          { type: "years", value: 31536e3 },
        ],
      },
      {
        type: "minutes",
        targets: [
          { type: "hours", value: 60 },
          { type: "days", value: 1440 },
          { type: "weeks", value: 10080 },
          { type: "months", value: 44640 },
          { type: "years", value: 525600 },
        ],
      },
      {
        type: "hours",
        targets: [
          { type: "days", value: 24 },
          { type: "weeks", value: 168 },
          { type: "months", value: 744 },
          { type: "years", value: 8760 },
        ],
      },
      {
        type: "days",
        targets: [
          { type: "weeks", value: 7 },
          { type: "months", value: 31 },
          { type: "years", value: 365 },
        ],
      },
      { type: "months", targets: [{ type: "years", value: 12 }] },
    ];
  d.cache = {};
  var I = {
      durationLabelsStandard: {
        S: "millisecond",
        SS: "milliseconds",
        s: "second",
        ss: "seconds",
        m: "minute",
        mm: "minutes",
        h: "hour",
        hh: "hours",
        d: "day",
        dd: "days",
        w: "week",
        ww: "weeks",
        M: "month",
        MM: "months",
        y: "year",
        yy: "years",
      },
      durationLabelsShort: {
        S: "msec",
        SS: "msecs",
        s: "sec",
        ss: "secs",
        m: "min",
        mm: "mins",
        h: "hr",
        hh: "hrs",
        d: "dy",
        dd: "dys",
        w: "wk",
        ww: "wks",
        M: "mo",
        MM: "mos",
        y: "yr",
        yy: "yrs",
      },
      durationTimeTemplates: { HMS: "h:mm:ss", HM: "h:mm", MS: "m:ss" },
      durationLabelTypes: [
        { type: "standard", string: "__" },
        { type: "short", string: "_" },
      ],
      durationPluralKey: function (b, c, d) {
        return 1 === c && null === d ? b : b + b;
      },
    },
    u = function (b, c, d) {
      return b.toLocaleString(c, d);
    };
  a: {
    try {
      (0).toLocaleString("i");
    } catch (E) {
      var M = "RangeError" === E.name;
      break a;
    }
    M = !1;
  }
  D = (T = M && Q(u)) && aa(u);
  u = function (b, c, d) {
    if (
      "undefined" !== typeof window &&
      window &&
      window.Intl &&
      window.Intl.NumberFormat
    )
      return window.Intl.NumberFormat(c, d).format(b);
  };
  F = (G = Q(u)) && aa(u);
  ba(e);
  return ba;
});
