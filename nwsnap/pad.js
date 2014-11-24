function app(global, window, document) {
  define("context/util", ["module"], function(e) {
    var t = window.gui;
    e.exports = {
      menuItem: function(e) {
        return new t.MenuItem(e)
      },
      sepItem: function() {
        return new t.MenuItem({
          type: "separator"
        })
      }
    }
  }), define("context/editor/themes", ["context/util"], function(e) {
    function i(e) {
      n.append(e)
    }
    var t = require("nw.gui"),
      n = new t.Menu,
      r = global.THEMES.editor;
    return r.forEach(function(t) {
      i(e.menuItem({
        label: t,
        click: function() {
          window.parent.ee.emit("context.editor.theme", this.label)
        }
      }))
    }), n
  }), define("context/editor/themesUser", ["context/util"], function(e) {
    function r(e) {
      n.append(e)
    }

    function i() {
      var e = n.items.length;
      for (var t = 0; t < e; t++) n.removeAt(0)
    }

    function s(t) {
      t.forEach(function(t) {
        r(e.menuItem({
          label: t,
          click: function() {
            window.parent.ee.emit("context.editor.theme.user", this.label)
          }
        }))
      })
    }
    var t = require("nw.gui"),
      n = new t.Menu;
    return s(global.THEMES.user.editor), window.ee.on("preferences.editor.userTheme", function(e) {
      i(), s(global.THEMES.user.editor)
    }), n
  }), define("context/Editor", ["context/util", "context/editor/themes", "context/editor/themesUser"], function(e, t, n) {
    function s(e) {
      i.append(e)
    }
    var r = require("nw.gui"),
      i = new r.Menu;
    return s(e.menuItem({
      label: i18n.t("edit.cut"),
      click: function() {
        window.ee.emit("context.cut")
      }
    })), s(e.menuItem({
      label: i18n.t("edit.copy"),
      click: function() {
        window.ee.emit("context.copy")
      }
    })), s(e.menuItem({
      label: i18n.t("edit.paste"),
      click: function() {
        window.ee.emit("context.paste")
      }
    })), s(e.menuItem({
      label: i18n.t("edit.delete"),
      click: function() {
        window.ee.emit("context.delete")
      }
    })), s(e.menuItem({
      label: i18n.t("edit.select-all"),
      click: function() {
        window.ee.emit("context.selectall")
      }
    })), s(e.sepItem()), s(e.menuItem({
      label: i18n.t("view.editor.theme"),
      submenu: t
    })), s(e.menuItem({
      label: i18n.t("view.editor.theme-user"),
      submenu: n
    })), s(e.sepItem()), s(e.menuItem({
      label: i18n.t("file.preferences"),
      click: function() {
        window.ee.emit("context.preferences")
      }
    })), i
  }), define("context/viewer/export", ["context/util"], function(e) {
    function r(e) {
      n.append(e)
    }
    var t = require("nw.gui"),
      n = new t.Menu;
    return r(e.menuItem({
      label: i18n.t("HTML"),
      click: function() {
        window.parent.ee.emit("context.viewer.export", this.label)
      }
    })), n
  }), define("context/viewer/publish", ["context/util"], function(e) {
    function r(e) {
      n.append(e)
    }
    var t = require("nw.gui"),
      n = new t.Menu;
    return r(e.menuItem({
      label: i18n.t("file.sending-email"),
      click: function() {
        window.parent.ee.emit("context.viewer.publish", "email")
      }
    })), n
  }), define("context/viewer/themes", ["context/util"], function(e) {
    function i(e) {
      n.append(e)
    }
    var t = require("nw.gui"),
      n = new t.Menu,
      r = global.THEMES.viewer;
    return r.forEach(function(t) {
      i(e.menuItem({
        label: t,
        click: function() {
          window.parent.ee.emit("context.viewer.theme", this.label)
        }
      }))
    }), n
  }), define("context/viewer/themesUser", ["context/util"], function(e) {
    function r(e) {
      n.append(e)
    }

    function i() {
      var e = n.items.length;
      for (var t = 0; t < e; t++) n.removeAt(0)
    }

    function s(t) {
      t.forEach(function(t) {
        r(e.menuItem({
          label: t,
          click: function() {
            window.parent.ee.emit("context.viewer.theme.user", this.label)
          }
        }))
      })
    }
    var t = require("nw.gui"),
      n = new t.Menu;
    return s(global.THEMES.user.viewer), window.ee.on("preferences.viewer.userTheme", function(e) {
      i(), s(global.THEMES.user.viewer)
    }), n
  }), define("context/viewer/themesCode", ["context/util"], function(e) {
    function i(e) {
      n.append(e)
    }
    var t = require("nw.gui"),
      n = new t.Menu,
      r = global.THEMES.code;
    return r.forEach(function(t) {
      i(e.menuItem({
        label: t,
        click: function() {
          window.parent.ee.emit("context.viewer.theme.code", this.label)
        }
      }))
    }), n
  }), define("context/Viewer", ["context/util", "context/viewer/export", "context/viewer/publish", "context/viewer/themes", "context/viewer/themesUser", "context/viewer/themesCode"], function(e, t, n, r, i, s) {
    function a(e) {
      u.append(e)
    }
    var o = require("nw.gui"),
      u = new o.Menu;
    return a(e.menuItem({
      label: i18n.t("edit.copy-html"),
      click: function() {
        window.ee.emit("context.copy.html")
      }
    })), a(e.menuItem({
      label: i18n.t("edit.copy-styled-html"),
      click: function() {
        window.parent.ee.emit("menu.file.exports.clipboard.styled")
      }
    })), a(e.sepItem()), a(e.menuItem({
      label: i18n.t("file.exports"),
      submenu: t
    })), a(e.menuItem({
      label: i18n.t("file.sending"),
      submenu: n
    })), a(e.sepItem()), a(e.menuItem({
      label: i18n.t("view.enter-presentation"),
      click: function() {
        window.parent.ee.emit("menu.view.presentation")
      }
    })), a(e.sepItem()), a(e.menuItem({
      label: i18n.t("view.viewer.theme"),
      submenu: r
    })), a(e.menuItem({
      label: i18n.t("view.viewer.theme-code"),
      submenu: s
    })), a(e.menuItem({
      label: i18n.t("view.viewer.theme-user"),
      submenu: i
    })), a(e.sepItem()), a(e.menuItem({
      label: i18n.t("file.preferences"),
      click: function() {
        window.ee.emit("context.preferences")
      }
    })), u
  }), define("context/Context", ["context/Editor", "context/Viewer"], function(e, t) {
    var n = require("nw.gui"),
      r = n.Window.get();
    window.ee.on("popup.context.viewer", function(e, n) {
      t.popup(e, n)
    }), window.ee.on("popup.context.editor", function(t, n) {
      e.popup(t, n)
    })
  }), define("mail/Mailer", [], function() {
    function s(t, r, i) {
      n = e.createTransport("SMTP", {
        service: i || "Gmail",
        auth: {
          user: t,
          pass: r
        }
      })
    }

    function o(e) {
      n.sendMail(i, function(t, i) {
        e(t, i);
        if (t) {
          n.close();
          return
        }
        window.clearTimeout(r), r = window.setTimeout(function() {
          n.close()
        }, 6e5)
      }), global._gaq.push("haroopad.file", "email", "")
    }
    var e = require("nodemailer"),
      t, n, r, i = {
        from: "",
        to: "",
        subject: "",
        text: ""
      };
    return window.ee.on("cancel.send.email", function() {
      window.clearTimeout(r), n && n.close()
    }), {
      setCredential: function(e) {
        s(e.from, e.password)
      },
      send: function(e, t, n) {
        var r = e.title,
          s = e.to,
          u = e.mode,
          a = t.emailHTML,
          f = t.markdown;
        s.indexOf("@tumblr.com") > -1 ? (u == "md" && (r = "!m " + r), global._gaq.push("haroopad.file", "tumblr", "")) : (a += _glo.getEmailAdvertisementHTML(), f += _glo.getEmailAdvertisementMD()), u == "html" ? (delete i.text, i.html = a || "") : (delete i.html, i.text = f || ""), i.from = e.from, i.to = s, i.subject = r, i.attachments = t.attachments, o(n)
      }
    }
  }), define("core/Lexer", [], function() {
    function i(e, t) {
      return e = e.source, t = t || "",
        function n(r, i) {
          return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
        }
    }

    function s(e) {
      var t = 1,
        n, r;
      for (; t < arguments.length; t++) {
        n = arguments[t];
        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }
    var e = require("marked"),
      t = {
        math: /^ *(\${2,2}) *([\s\S]+?)\s*\1 *(?:\n+|$)/,
        oembed: /^@\[(inside)\]\(href\)/,
        toc: /^\[\s*(TOC|toc)(?:\s+['"]([\s\S]*?)['"])?\s*\] *(?:\n+|$)/
      },
      n = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
      r = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
    return t.oembed = i(t.oembed)("inside", n)("href", r)(),
      function(n) {
        var r = new e.Lexer(n),
          o;
        return r.rules.paragraph = i(r.rules.paragraph)("math", t.math)(), r.rules = s({}, r.rules, t), r.rules.pedantic = s({}, r.rules.pedantic, t), r.rules.gfm = s({}, r.rules.gfm, t), r.rules.tables = s({}, r.rules.tables, t), r
      }
  }), define("core/InlineLexer", [], function() {
    function r(e, t) {
      return e = e.source, t = t || "",
        function n(r, i) {
          return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
        }
    }

    function i(e) {
      var t = 1,
        n, r;
      for (; t < arguments.length; t++) {
        n = arguments[t];
        for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }
    var e = require("marked"),
      t = {
        emoji: /^:([A-Za-z0-9_\-\+]+?):/,
        stronghighlight: /^==([^=]+)==/,
        underline: /^\+\+([\s\S]+?)\+\+(?!\+)/,
        sup: /^\^([\S]+?)\^(?!\^)/,
        sub: /^\~([\S]+?)\~(?!\~)/
      },
      n = /^ *(split)([\s\S]*?[^\$])\1(?!\$)/;
    return function(s) {
      var o = e.InlineLexer,
        u = o.rules;
      return o.rules.normal = i({}, o.rules.normal, t), o.rules.gfm = i({}, o.rules.gfm, t), o.rules.breaks = i({}, o.rules.breaks, t), s.dollarSign ? t.math = r(n)("split", /\${3,3}|\${1,1}/)() : t.math = r(n)("split", /\${3,3}/)(), s.gfm && (o.rules.gfm = i({}, u.gfm, t)), s.breaks && (o.rules.breaks = i({}, u.breaks, t)), o
    }
  }), define("core/Renderer", [], function() {
    function n(e) {
      var t, n;
      return e = e || "", n = e.split("."), n.length <= 1 ? "" : "." + n[n.length - 1]
    }

    function r(e) {
      var t, n, r = {};
      return e = e ? e : "", e && (e = e.split(";"), e.forEach(function(e) {
        e = e.split(":"), e[0] && e[1] && (r[e[0].trim()] = e[1].trim())
      }), e = JSON.stringify(r), e = encodeURIComponent(e)), e
    }

    function i(e, t, n, r) {
      var i = '<img src="' + e + '" alt="' + n + '"';
      return t && (i += ' title="' + t + '"'), r && (i += ' style="' + r + '"'), i += ">", i
    }

    function s(e, t, n, r, i) {
      var s = "<audio controls";
      return i && (s += ' style="' + i + '"'), s += ">", s += '<source src="' + e + '" type="audio/' + t + '" />', s += i18n.t("Your browser does not support the audio tag!"), s += "</audio>", s
    }

    function o(e, t, n, r, i) {
      var s = "<video controls";
      return i && (s += ' style="' + i + '"'), s += ">", s += '<source src="' + e + '" type="video/' + t + '" />', s += i18n.t("Your browser does not support the video tag!"), s += "</video>", s
    }
    var e = require("marked"),
      t = new e.Renderer;
    return t.listitem = function(e) {
      return /^\s*\[[xv ]\]\s*/.test(e) ? (e = e.replace(/^\s*\[ \]\s*/, '<input type="checkbox" /> ').replace(/^\s*\[[x|v]\]\s*/, '<input type="checkbox" checked /> '), '<li style="list-style: none">' + e + "</li>") : "<li>" + e + "</li>"
    }, t.oembed = function(e, t, n) {
      var i;
      return t ? (n = r(n), i = '<a href="' + t + '" data-props="' + n + '" target="_blank">' + (e ? e : t) + "</a>", '<p class="oembed">' + i + "</p>") : ""
    }, t.math = function(e, t) {
      return t === "$$" ? '<p class="mathjax">$$' + e + "$$</p>" : '<span class="mathjax">' + t + e + t + "</span>"
    }, t.toc = function(e) {
      return '<p class="toc" style="' + e + '"></p>'
    }, t.hr = function(e) {
      switch (e.trim()) {
        case "*":
          e = "page";
          break;
        case "-":
          e = "section";
          break;
        case "_":
          e = "underscore"
      }
      return '<hr class="' + e + '">\n'
    }, t.heading = function(e, t, n) {
      return n = n.replace(/(<([^>]+)>)/gi, "").toLowerCase().trim().replace(/[\s]+/g, "-"), "<h" + t + ' id="' + this.options.headerPrefix + n + '">' + '<a name="' + n + '" href="#' + n + '"></a>' + e + "</h" + t + ">\n"
    }, t.image = function(e, t, r, u) {
      var a, f = n(e);
      f = f.substr(1, f.length);
      switch (f) {
        case "mp3":
        case "ogg":
          a = s(e, f, t, r, u);
          break;
        case "mp4":
        case "webm":
        case "ogv":
          a = o(e, f, t, r, u);
          break;
        default:
          a = i(e, t, r, u)
      }
      return a
    }, t
  }), define("parse", ["core/Lexer", "core/InlineLexer", "core/Renderer"], function(e, t, n) {
    var r = require("nw.gui"),
      i = r.Window.get(),
      s = require("marked"),
      o = store.get("Markdown") || {},
      u = merge(s.defaults, o, {
        renderer: n
      }),
      a = e(u);
    s.InlineLexer = t(u);
    var f = window.marked = function(e) {
      var t = a.lex(e);
      return {
        tokens: t,
        html: s.parser(t, a.options)
      }
    };
    return window.ee.on("preferences.markdown.change", function(n) {
      a = e(n), s.InlineLexer = t(n), window.ee.emit("preferences.markdown.change.after")
    }), f
  }), define("file/File.toc.element", [], function() {
    function e(e, t, n, r) {
      this.tagName = e, this.anchor = t, this.text = n, this.index = r, this.children = []
    }
    return e.prototype.childrenToString = function() {
      if (this.children.length === 0) return "";
      var e = "<ul>\n";
      return this.children.forEach(function(t) {
        e += t.toString()
      }), e += "</ul>\n", e
    }, e.prototype.toString = function() {
      var e = "<li>";
      return this.anchor && this.text && (e += '<span class="title">\n', e += '<a href="#' + this.anchor + '" title="' + this.text + '">' + this.text + "</a>", e += "\n</span>\n", e += '<!--span class="number">\n', e += this.index, e += "\n</span-->\n"), e += this.childrenToString() + "</li>\n", e
    }, e
  }), define("file/File.toc", ["file/File.toc.element"], function(e) {
    function t(n, r) {
      function u() {
        o !== undefined && (o.children.length > 0 && (o.children = t(o.children, r + 1)), s.push(o))
      }
      r = r || 1;
      var i = "H" + r,
        s = [],
        o = undefined;
      return n.forEach(function(t, n) {
        t.tagName != i ? (o === undefined && (o = new e), o.children.push(t)) : (u(), o = t)
      }), u(), s
    }

    function r(r) {
      function o(e) {
        var t, n = e.id || e.textContent || "title",
          r = 0;
        t = n;
        while (i.hasOwnProperty(t)) t = n + "-" + ++r;
        return i[t] = !0, e.id = t, t
      }
      var i = {},
        s = [];
      return r.forEach(function(t, n) {
        t.setAttribute("data-idx", n), s.push(new e(t.tagName, o(t), t.textContent, n))
      }), s = t(s), n = "<ul>\n" + s.join("") + "\n</ul>\n", n
    }
    var n = "";
    return {
      get: r
    }
  }), define("file/File.doc", ["file/File.toc"], function(e) {
    return Backbone.Model.extend({
      _body: null,
      _headers: null,
      _header: null,
      initialize: function() {
        this._body = document.createElement("div"), this._headers = [], this.on("change:html", function(e, t) {
          this._body.innerHTML = t || "", this.trigger("update", this, t)
        })
      },
      isChangeTOC: function(e) {
        var t = 0,
          n, r;
        if (e.length <= 0) return !1;
        for (t; t < e.length; t++) {
          r = e[t], this._header = this._headers[t];
          if (!this._header) return !0;
          if (r.textContent != this._header.textContent) return !0
        }
        return this._headers = e, !1
      },
      dom: function() {
        return this._body
      },
      html: function() {
        return this._body.innerHTML
      },
      parse: function() {
        var t = this._body.querySelectorAll("h1, h2, h3, h4, h5, h6"),
          n = this._body.querySelectorAll("img"),
          r = this._body.querySelectorAll("code"),
          i = this._body.querySelectorAll("blockquote"),
          s = this._body.querySelectorAll("p"),
          o = this._body.querySelectorAll("a"),
          u = this._body.querySelectorAll("table");
        this.set({
          title: t[0] && t[0].textContent || "Untitled",
          dom: {
            header: t.length,
            paragraph: s.length,
            link: o.length,
            image: n.length,
            code: r.length,
            blockquote: i.length,
            table: u.length
          }
        }), t = Array.prototype.slice.call(t, 0), t = t.filter(function(e) {
          return e.tagName !== "H1"
        }), this.isChangeTOC(t) && this.set({
          toc: e.get(t)
        })
      }
    })
  }), define("file/File.tmp.opt", [], function() {
    function n(e) {
      return t.splice(e, 1), t
    }
    var e = require("path"),
      t = [],
      r = Backbone.Model.extend({
        defaults: {
          files: []
        },
        initialize: function() {
          var e = localStorage.getItem("Temporary");
          this.bind("change", function() {
            store.set("Temporary", this.toJSON())
          }), e ? (this.set(JSON.parse(e)), t = this.get("files") || []) : (this.set(this.defaults), store.set("Temporary", this.toJSON()))
        },
        add: function(e) {
          t.indexOf(e) === -1 && (t.push(e), this.set({
            files: t
          }), this.trigger("change"))
        },
        remove: function(e) {
          var n = t.indexOf(e);
          n > -1 && (t.splice(n, 1), this.set({
            files: t
          }), this.trigger("change"))
        },
        clearAll: function() {
          t.length = 0, this.set("files", []), this.trigger("change")
        }
      });
    return new r
  }), define("file/File.model", ["parse", "file/File.doc", "file/File.tmp.opt"], function(e, t, n) {
    function a(e) {
      return r.readFileSync(e, "utf8")
    }

    function f() {
      return s.encode(parseInt(Math.random() * 1e17))
    }

    function l(e) {
      return i.join(global.PATHS.tmp, e)
    }
    var r = require("fs-extra"),
      i = require("path"),
      s = require("base62"),
      o = require("nw.gui"),
      u = window,
      c = Backbone.Model.extend({
        defaults: {
          created_at: new Date,
          updated_at: new Date,
          fileEntry: undefined,
          extname: ".md",
          dirname: undefined,
          basename: undefined,
          markdown: "",
          tmp: undefined,
          readOnly: !1
        },
        doc: null,
        initialize: function() {
          this.doc = new t, this.on("change:markdown", function() {
            var t = this.get("markdown") || "",
              i = e(t),
              s = i.html;
            this.doc.set({
              html: s,
              footnotes: i.tokens.footnotes,
              links: i.tokens.links
            }), this.set({
              updated_at: new Date
            }), this.get("tmp") || (window.clearTimeout(this._writeTimeout), this._writeTimeout = window.setTimeout(function() {
              r.writeFileSync(this._tmpFile, t, "utf8"), n.add(this._uid)
            }.bind(this), 2500))
          }), this.on("change:fileEntry", function() {
            var e = this.get("fileEntry");
            this.update(e)
          }), this.on("close", this.close, this), this.get("tmp") ? (this._tmpFile = this.get("fileEntry"), this._uid = i.basename(this._tmpFile)) : (this._uid = f(), this._tmpFile = l(this._uid)), this.get("fileEntry") && (this.trigger("change:fileEntry"), this.load())
        },
        load: function(e) {
          var t = this.get("fileEntry"),
            n = a(t),
            i = r.statSync(t);
          e = e ? e : {}, this.set({
            markdown: n
          }, e), this.set(i, e)
        },
        reload: function(e) {
          var t = this.get("fileEntry"),
            n = a(t);
          e = e ? e : {}, this.set({
            markdown: n
          }, e)
        },
        refresh: function() {
          var e, t = this.get("fileEntry");
          t && (e = r.statSync(t), this.set(e))
        },
        update: function(e) {
          this.set({
            fileEntry: e,
            extname: i.extname(e) || ".md",
            dirname: i.dirname(e),
            basename: i.basename(e),
            updated_at: new Date
          })
        },
        save: function(e) {
          var t, n;
          e = e || this.get("fileEntry"), i.extname(e) || (e += ".md"), n = this.get("markdown"), process.platform.indexOf("win") == 0 && (n = n.replace(/\n/g, "\r\n")), r.writeFileSync(e, n, "utf8"), t = r.statSync(e), this.update(e), this.set(t, {
            silent: !0
          }), this.trigger("saved")
        },
        close: function() {
          u.clearTimeout(this._writeTimeout), r.existsSync(this._tmpFile) && r.removeSync(this._tmpFile), n.remove(this._uid)
        }
      });
    return c
  }), define("file/File", ["file/File.model", "file/File.tmp.opt"], function(e, t) {
    function f() {
      var i;
      o.forEach(function(s, o) {
        i = r.join(a, s);
        if (n.existsSync(i)) {
          var f = new e({
            fileEntry: i,
            tmp: !0
          });
          u.push(f), window.ee.emit("tmp.file.open", f)
        } else t.remove(s)
      })
    }
    var n = require("fs-extra"),
      r = require("path"),
      i = require("nw.gui"),
      s = i.Window.get(),
      o = t.get("files") || [],
      u = [],
      a = global.PATHS.tmp,
      l = {
        open: function(t) {
          var n = new e({
            fileEntry: t
          });
          return u.push(n), n
        },
        loadTemporary: function() {
          f()
        }
      };
    return window.ee.on("clear.lastfiles", function() {
      n.removeSync(a), t.clearAll()
    }), l
  }), define("tools/Presentation", [], function() {
    var e, t = Backbone.View.extend({
      win: null,
      initialize: function() {},
      start: function() {
        this.win = global.gui.Window.open("box/presentation/index.html", {
          title: "Haroopad Presentation",
          toolbar: !1,
          show: !1,
          width: 800,
          height: 450,
          position: "center",
          frame: !1,
          fullscreen: !0
        }), this.win.on("loaded", function() {
          this.win.removeAllListeners("loaded"), this.win.window.update(window.ee, window.activedWindow.file.doc.toJSON()), this.show()
        }.bind(this)), this.win.on("close", function() {
          this.hide(), this.close(!0)
        }), this.win.on("leave-fullscreen", function() {
          this.win && this.win.close()
        }.bind(this)), this.win.on("enter-fullscreen", function() {}.bind(this)), window.ee.on("exit.presentation", function() {
          this.win.close()
        }.bind(this))
      },
      show: function() {
        this.win.show(), this.win.focus()
      }
    });
    e = new t, window.ee.on("menu.view.presentation", function() {
      e.start()
    })
  }), define("tools/Tools", ["tools/Presentation"], function(e) {}), define("window/Window.opt", [], function() {
    var e = require("nw.gui"),
      t, n = Backbone.Model.extend({
        defaults: {
          x: 0,
          y: 0,
          width: 1024,
          height: 600,
          zoom: 1,
          mode: 1,
          viewerWidth: 50,
          isFullscreen: !1
        },
        initialize: function() {
          var e = localStorage.getItem("Window");
          this.bind("change", function() {
            store.set("Window", this.toJSON())
          }), e ? this.set(JSON.parse(e)) : (this.set(this.defaults), store.set("Window", this.toJSON()))
        }
      });
    return t = new n
  }), define("file/Recents", [], function() {
    function n(e) {
      return t.splice(e, 1), t
    }
    var e = require("path"),
      t = [],
      r = Backbone.Model.extend({
        defaults: {
          files: [],
          limit: 100
        },
        initialize: function() {
          var e = localStorage.getItem("Recents");
          this.bind("change", function() {
            store.set("Recents", this.toJSON())
          }), e ? (this.set(JSON.parse(e)), t = this.get("files")) : (this.set(this.defaults), store.set("Recents", this.toJSON()))
        },
        add: function(r) {
          var i = e.basename(r),
            s = {};
          s[r] = i, t.forEach(function(e, t) {
            if (e.hasOwnProperty(r)) {
              n(t);
              return
            }
          }), t.push(s), this.set("files", t), this.trigger("change")
        },
        clearAll: function() {
          t.length = 0, this.set("files", []), this.trigger("change")
        }
      });
    return new r
  }), define("window/WindowManager", ["exports", "file/File", "file/Recents"], function(e, t, n) {
    function p() {
      f = store.get("Window") || {}
    }

    function d(e) {
      for (var t in o)
        if (o[t].file.get("fileEntry") == e) return o[t];
      return
    }

    function v() {
      return a
    }

    function s() {
      for (var e in o) o[e].emit("close")
    }

    function m(r) {
      e.actived = o[r.created_at] = r, a++, r.on("closed", function() {
        for (var e in o)
          if (e == this.created_at) {
            o[e] = null, delete o[e], a--, a || (process.platform === "win32" || s ? window.ee.emit("exit") : s && window.ee.emit("exit"));
            return
          }
      }), r.on("file.open", function(e) {
        var r = t.open(e);
        g(r), n.add(e)
      }), r.on("file.saved", function(e) {
        n.add(e.fileEntry)
      }), r.once("loaded", function() {
        p();
        if (!c && !h) {
          this.setPosition("center"), c = this.x, h = this.y;
          return
        }
        c = c < 20 ? 40 : c, h = h < 20 ? 40 : h, f.height + c > window.screen.height && (c = 40), f.width + h > window.screen.width && (h = 40), a > 1 && (h += 20, c += 20), this.moveTo(h, c)
      })
    }

    function g(n, i) {
      var s, o, a;
      if (u && !n) return;
      u = !0, n = typeof n == "string" ? t.open(n) : n, s = n && n.get("fileEntry"), a = d(s);
      if (s && a) {
        a.focus();
        return
      }
      if (n && e.actived && e.actived.file && !e.actived.file.get("fileEntry") && e.actived.file.get("created_at").getTime() == e.actived.file.get("updated_at").getTime()) {
        e.actived.file.set(n.toJSON()), e.actived.file.doc.set(n.doc.toJSON()), e.actived.emit("file.opened", n), n.close();
        return
      }
      return o = r.Window.open("pad.html", r.App.manifest.window), o.parent = window, o.file = n || t.open(), o.created_at = (new Date).getTime(), o._args = i || {}, m(o), o
    }
    var r = global.gui,
      i = r.Window.get(),
      s = !1,
      o = {},
      u = !1,
      a = 0,
      f = store.get("Window") || {},
      l = store.get("General"),
      c = f.y,
      h = f.x;
    process.on("actived", function(t) {
      e.actived = window.activedWindow = t, t.show(), u = !1
    }), window.ee.on("closeAll", function() {
      r.App.closeAllWindows()
    }), r.App.on("reopen", function() {
      a < 1 && g()
    }), i.on("close", function() {
      s = !0, a || window.ee.emit("exit")
    }), e.open = g, e.length = v
  }), define("window/Window.preferences", ["window/WindowManager"], function(e) {
    function i() {
      r = t.Window.open("preferences.html", {
        toolbar: !1,
        show: !0,
        width: 650,
        height: 450,
        icon: "logo.png",
        resizable: !1,
        position: "center",
        fullscreen: !1
      }), r.parent = window, r.on("close", function() {
        r.hide(), e.actived.focus()
      }), r.on("loaded", function() {
        r.focus(), r.window.focus()
      })
    }
    var t = require("nw.gui"),
      n = t.Window.get(),
      r;
    return {
      show: function() {
        r ? (r.show(), r.focus()) : i()
      },
      hide: function() {
        r.hide()
      }
    }
  }), define("window/Window.dragdrop", ["window/WindowManager"], function(e) {
    var t = require("nw.gui"),
      n = t.Window.get(),
      r = 0;
    window.ee.on("dragdrop", function(t) {
      for (r; r < t.dataTransfer.files.length; ++r) e.open(t.dataTransfer.files[r].path);
      return !1
    })
  }), define("window/Window", ["window/Window.opt", "window/WindowManager", "window/Window.preferences", "window/Window.dragdrop", "file/File", "file/Recents"], function(e, t, n, r, i, s) {
    var o = require("nw.gui"),
      u = o.Window.get(),
      a, f = require("fs"),
      l = require("path"),
      c = getDocsPath();
    window.ee.on("tmp.file.open", function(e) {
      t.open(e)
    }), window.ee.on("drop.file.open", function(e) {
      t.open(e)
    }), window.ee.on("menu.file.new", function() {
      t.open()
    }), window.ee.on("menu.file.open", function() {
      t.actived.window.ee.emit("menu.file.open")
    }), window.ee.on("menu.file.recents", function(e) {
      var n = i.open(e);
      s.add(e), t.open(n), global._gaq.push("haroopad.file", "open", "recents item")
    }), window.ee.on("menu.file.recents.clear", function() {
      s.clearAll()
    }), window.ee.on("menu.file.save", function() {
      t.actived.window.ee.emit("menu.file.save")
    }), window.ee.on("menu.file.save.as", function() {
      t.actived.window.ee.emit("menu.file.save.as")
    }), window.ee.on("menu.file.close", function() {
      t.actived.window.ee.emit("file.close")
    }), window.ee.on("menu.file.exports.clipboard.plain", function() {
      t.actived.window.ee.emit("menu.file.exports.clipboard.plain")
    }), window.ee.on("menu.file.exports.clipboard.styled", function() {
      t.actived.window.ee.emit("menu.file.exports.clipboard.styled")
    }), window.ee.on("menu.file.exports.html", function() {
      t.actived.window.ee.emit("file.exports.html")
    }), window.ee.on("menu.file.send.email", function() {
      t.actived.window.ee.emit("menu.file.send.email")
    }), window.ee.on("menu.print.editor", function() {
      t.actived.window.ee.emit("print.editor")
    }), window.ee.on("menu.print.viewer", function() {
      t.actived.window.ee.emit("print.viewer")
    }), window.ee.on("menu.preferences.show", function() {
      n.show()
    })
  }), define("window/Window2", [], function(e, t, n, r, i, s) {
    , window.ee.on("menu.edit.undo", function() {
      t.actived.window.ee.emit("menu.edit.undo")
    }), window.ee.on("menu.edit.redo", function() {
      t.actived.window.ee.emit("menu.edit.redo")
    }), window.ee.on("menu.edit.cut", function() {
      t.actived.window.ee.emit("menu.edit.cut")
    }), window.ee.on("menu.edit.copy", function() {
      t.actived.window.ee.emit("menu.edit.copy")
    }), window.ee.on("menu.edit.paste", function() {
      t.actived.window.ee.emit("menu.edit.paste")
    }), window.ee.on("menu.edit.delete", function() {
      t.actived.window.ee.emit("menu.edit.delete")
    }), window.ee.on("menu.edit.selectall", function() {
      t.actived.window.ee.emit("menu.edit.selectall")
    }), window.ee.on("menu.view.mode", function(e) {
      t.actived.window.ee.emit("menu.view.mode", e)
    }), window.ee.on("menu.show.toggle.linenum", function() {
      t.actived.window.ee.emit("show.toggle.linenum")
    }), window.ee.on("menu.show.toggle.markdown.help", function() {
      t.actived.window.ee.emit("toggle.syntax.help")
    }), window.ee.on("menu.view.toggle.vim", function() {
      t.actived.window.ee.emit("menu.view.toggle.vim")
    }), window.ee.on("menu.view.toggle.toc", function() {
      t.actived.window.ee.emit("menu.view.toggle.toc")
    }), window.ee.on("menu.view.plus5.width", function() {
      t.actived.window.ee.emit("view.plus5.width")
    }), window.ee.on("menu.view.minus5.width", function() {
      t.actived.window.ee.emit("view.minus5.width")
    }), window.ee.on("menu.view.doc.outline", function() {
      t.actived.window.ee.emit("menu.view.doc.outline")
    }), window.ee.on("menu.view.editor.font.size", function(e) {
      t.actived.window.ee.emit("menu.view.editor.font.size", e)
    }), window.ee.on("menu.view.viewer.font.size", function(e) {
      t.actived.window.ee.emit("menu.view.viewer.font.size", e)
    }), window.ee.on("menu.view.fullscreen", function() {
      t.actived.window.ee.emit("view.fullscreen")
    }), window.ee.on("menu.insert.markdown", function(e) {
      t.actived.window.ee.emit("menu.insert.markdown", e)
    }), window.ee.on("menu.insert.toc", function() {
      t.actived.window.ee.emit("insert.toc")
    }), window.ee.on("menu.insert.date", function(e) {
      t.actived.window.ee.emit("insert.date", e)
    }), window.ee.on("menu.insert.filename", function() {
      t.actived.window.ee.emit("insert.filename")
    }), window.ee.on("menu.find.start", function() {
      t.actived.window.ee.emit("find.start")
    }), window.ee.on("menu.find.next", function() {
      t.actived.window.ee.emit("find.next")
    }), window.ee.on("menu.find.previous", function() {
      t.actived.window.ee.emit("find.previous")
    }), window.ee.on("menu.find.replace", function() {
      t.actived.window.ee.emit("find.replace")
    }), window.ee.on("menu.find.replace.all", function() {
      t.actived.window.ee.emit("find.replace.all")
    }), window.ee.on("menu.help.doc", function(e) {
      var n;
      switch (e) {
        case "about":
          n = c + "/about.md";
          break;
        case "shortcut":
          n = c + "/shortcut.md";
          break;
        case "acknowledgements":
          n = c + "/../acknowledgements.md"
      }
      n = i.open(n), n.set("readOnly", !0), t.open(n)
    }), window.ee.on("menu.help.syntax", function() {
      t.actived.window.ee.emit("menu.help.syntax")
    }), window.ee.on("exit", function() {
      o.App.quit()
    }), window.ee.on("context.cut", function(e) {
      t.actived.window.ee.emit("context.cut", e)
    }), window.ee.on("context.copy", function(e) {
      t.actived.window.ee.emit("context.copy")
    }), window.ee.on("context.paste", function(e) {
      t.actived.window.ee.emit("context.paste")
    }), window.ee.on("context.delete", function(e) {
      t.actived.window.ee.emit("context.delete")
    }), window.ee.on("context.selectall", function(e) {
      t.actived.window.ee.emit("context.selectall")
    }), window.ee.on("context.preferences", function(e) {
      n.show()
    }), window.ee.on("context.copy", function(e) {
      t.actived.window.ee.emit("context.copy")
    }), window.ee.on("context.copy.html", function(e) {
      t.actived.window.ee.emit("menu.file.exports.clipboard.plain")
    }), window.ee.on("context.editor.theme", function(e) {
      t.actived.window.ee.emit("editor.theme", e)
    }), window.ee.on("context.editor.theme.user", function(e) {
      t.actived.window.ee.emit("editor.theme.user", e)
    }), window.ee.on("context.viewer.theme", function(e) {
      t.actived.window.ee.emit("viewer.theme", e)
    }), window.ee.on("context.viewer.theme.code", function(e) {
      t.actived.window.ee.emit("viewer.theme.code", e)
    }), window.ee.on("context.viewer.theme.user", function(e) {
      t.actived.window.ee.emit("viewer.theme.user", e)
    }), window.ee.on("context.viewer.export", function(e) {
      t.actived.window.ee.emit("file.exports.html")
    }), window.ee.on("context.viewer.publish", function(e) {
      t.actived.window.ee.emit("menu.file.send.email")
    }), window.ee.on("update.haroopad", function(e, n) {
      t.actived.window.ee.emit("update.haroopad", e, n)
    }), window.ee.on("up.to.date.haroopad", function(e) {
      t.actived.window.ee.emit("up.to.date.haroopad", e)
    }), window.ee.on("up.to.date.news", function(e) {
      t.actived.window.ee.emit("up.to.date.news", e)
    })
  });, define("utils/NewsNotifier", [], function() {
    function o() {}

    function u(t) {
      var n = "";
      e.get(t, function(e) {
        e.setEncoding("utf8"), e.on("data", function(e) {
          n += e
        }), e.on("end", function() {
          window.ee.emit("up.to.date.news", n), s.stime = (new Date).getTime(), s.body = n, store.set("_news", s)
        })
      }).on("error", function(e) {})
    }
    var e = require("http"),
      t = global.Manifest,
      n = t.app.news,
      r = t.version,
      i, s = store.get("_news") || {};
    return function(e) {
      var t = (new Date).getTime();
      if (!e || !e.url) return;
      s.url != e.url ? (s.url = e.url, s.expire = e.expire, u(e.url)) : s.stime + s.expire * 60 * 1e3 > t && window.ee.emit("up.to.date.news", s.body)
    }
  }), define("utils/UpdateNotifier", ["utils/NewsNotifier"], function(e) {
    function s(e, t) {
      if (!compareVersions(e, i)) {
        t && window.ee.emit("up.to.date.haroopad", i);
        return
      }
      window.ee.emit("update.haroopad", i, e)
    }

    function o(i) {
      t.get(r, function(t) {
        t.on("data", function(t) {
          try {
            serverInfo = JSON.parse(t), n.app.info = serverInfo, s(serverInfo.version, i), e(serverInfo.news)
          } catch (r) {
            serverInfo = {}
          }
        })
      }).on("error", function(e) {})
    }
    var t = require("http"),
      n = global.Manifest,
      r = n.app.upgrade,
      i = n.version;
    window.ee.on("check.version", function(e) {
      o(e)
    }), window.ee.on("download.haroopad", function() {
      gui.Shell.openExternal(serverInfo.download[getPlatformName()])
    }), window.ee.on("release.note.haroopad", function() {
      gui.Shell.openExternal(serverInfo.release)
    })
  });
  var fs = require("fs"),
    path = require("path");
  window.gui = require("nw.gui"), window.top = window, window.nw = gui.Window.get(), window.ee = new EventEmitter, require.nodeRequire = require, requirejs.config({
    baseUrl: "js/app",
    waitSeconds: 30,
    locale: "ko-kr",
    paths: {
      tpl: "../../tpl",
      vendors: "../vendors",
      parse: "core/Parser"
    },
    config: {
      text: {
        env: "xhr"
      }
    }
  }), i18n.init({
    lng: global.LOCALES._lang
  }, function() {
    i18n.addResourceBundle(global.LOCALES._lang, "menu", global.LOCALES.menu), i18n.setDefaultNamespace("menu"), MenuBar(), requirejs.onError = function(e) {
      console.log(e.stack), alert("Oops! app is crash :-(")
    }, requirejs(["context/Context", "mail/Mailer", "file/File", "tools/Tools", "window/Window", "window/WindowManager", "utils/UpdateNotifier"], function(e, t, n, r, i, s, o) {
      global._gaq.init(function(e) {
        e && e.push("haroopad", "init", "")
      }), window.ee.on("send.email", function(e, n) {
        var r = s.actived,
          i = store.get("Emails") || {},
          o = i.addrs || [];
        t.setCredential(n), t.send(n, e, function(e, t) {
          if (e) {
            r.window.ee.emit("fail.send.email", e);
            return
          }
          n.remember && (o.push(n.to), o = _.uniq(o), store.set("Emails", {
            to: n.to,
            from: n.from,
            mode: n.mode,
            addrs: o,
            remember: n.remember
          })), r.window.ee.emit("sent.email")
        })
      });
      var u = getPlatformName();
      gui.App.on("open", function(e) {
        var t;
        switch (u) {
          case "windows":
            e.split('"').length >= 5 && (e = e.split('"'), e.pop(), t = e.pop());
            break;
          case "mac":
            t = e;
            break;
          case "linux":
            e = e.split(" "), e.shift(), t = e.join(" "), t = t.replace(global.Manifest["chromium-args"], "").trim()
        }
        s.open(t)
      }), n.loadTemporary(), global.argv._.length > 0 && global.argv._.forEach(function(e) {
        var e = path.resolve(process.env.PWD, e),
          t = path.extname(e).replace(".", "");
        global.mdexts.indexOf(t) > -1 && fs.existsSync(e) && s.open(e, {
          mode: global.argv.mode
        })
      }), s.length() < 1 && s.open(), window.setTimeout(function() {
        window.ee.emit("check.version")
      }, 2e3)
    })
  }), define("index", function() {});
}