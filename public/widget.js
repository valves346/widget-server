;(() => {
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t
            }),
      t(e)
    )
  }
  function e(t, e) {
    for (var o = 0; o < e.length; o++) {
      var r = e[o]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, n(r.key), r)
    }
  }
  function n(e) {
    var n = (function (e) {
      if ("object" != t(e) || !e) return e
      var n = e[Symbol.toPrimitive]
      if (void 0 !== n) {
        var o = n.call(e, "string")
        if ("object" != t(o)) return o
        throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return String(e)
    })(e)
    return "symbol" == t(n) ? n : n + ""
  }
  !(function (t) {
    var n = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
        })(this, t),
          console.log("Brla payment widget initialized")
      }
      var n, o
      return (
        (n = t),
        (o = [
          {
            key: "mount",
            value: function (t, e) {
              console.log("Initializing checkout with session id:", t)
              var n = document.getElementById(e)
              if (n) {
                var o = document.createElement("iframe")
                ;(o.style.width = "100%"),
                  (o.style.height = "500px"),
                  (o.style.border = "none"),
                  (o.src = "https://brala.digital/jssdk/".concat(t)),
                  n.appendChild(o)
              } else console.error("Checkout container not found!")
            },
          },
        ]) && e(n.prototype, o),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t
      )
    })()
    t.Brla = n
  })(window)
})()
