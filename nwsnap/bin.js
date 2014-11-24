function app(global, window, document) {

  function _system() {
    var gui, fs, optimist, path = require("path");
    switch (require("child_process"), global.gui = gui = require("nw.gui"), global.Shell = gui.Shell, global.Clipboard = gui.Clipboard, global.App = gui.App, global.Manifest = gui.App.manifest, process.setMaxListeners(0), process.platform) {
      case "win32":
        global.EXECPATH = path.join(process.execPath, "../");
        break;
      case "darwin":
        global.EXECPATH = path.join(process.execPath, "../../../../../");
        break;
      case "linux":
        global.EXECPATH = path.join(process.execPath, "../")
    }
    global.mdexts = ["md", "mmd", "markdown", "mdown", "markdn", "mkd", "mkdn", "mdwn", "mdtxt", "mdtext", "mdml"], global.PATHS = {
      node_modules: path.join(global.EXECPATH, "Libraries", ".node_modules"),
      locales: path.join(global.EXECPATH, "Libraries", ".locales"),
      docs: path.join(global.EXECPATH, "Libraries", ".docs"),
      css_code: path.join(global.EXECPATH, "Libraries", ".css", "code"),
      js: path.join(global.EXECPATH, "Libraries", ".js"),
      theme_res_editor: path.join(global.EXECPATH, "Resources", "Themes", "editor"),
      theme_res_viewer: path.join(global.EXECPATH, "Resources", "Themes", "viewer"),
      theme_dest_editor: path.join(global.App.dataPath, "Themes", "editor"),
      theme_dest_viewer: path.join(global.App.dataPath, "Themes", "viewer"),
      db: path.join(global.App.dataPath, "LevelDB"),
      tmp: path.join(global.App.dataPath, ".tmp")
    }, process.mainModule.paths = [global.PATHS.node_modules], fs = require("fs-extra"), optimist = require("optimist").boolean("f"), global.LANGS = fs.readFileSync(path.join(global.PATHS.locales, "locales.json")), global.LANGS = JSON.parse(global.LANGS), global.argv = optimist.parse(gui.App.argv), fs.mkdirsSync(global.PATHS.tmp), fs.mkdirsSync(global.PATHS.db), _theme(), _shortcut()
  }

  function _theme() {
    var files, isExist, source, dest, readDir = require("readdir"),
      fs = require("fs-extra"),
      path = require("path"),
      editorSource = global.PATHS.theme_res_editor,
      markdownSource = global.PATHS.theme_res_viewer,
      editorDest = global.PATHS.theme_dest_editor,
      markdownDest = global.PATHS.theme_dest_viewer,
      loadUserThemes = function(dir) {
        var name, csses = readDir.readSync(dir, ["*.css"], readDir.CASELESS_SORT),
          themes = [];
        return csses.forEach(function(css) {
          name = path.basename(css), "." != name.charAt(0) && (name = name.replace(".css", ""), themes.push(name))
        }), themes
      };
    fs.mkdirpSync(editorDest), fs.mkdirpSync(markdownDest), files = readDir.readSync(editorSource, ["**.css"]), files.forEach(function(file) {
      if (dest = path.join(editorDest, file), source = path.join(editorSource, file), isExist = fs.existsSync(dest), !isExist) try {
        fs.copySync(source, dest)
      } catch (e) {}
    }), files = readDir.readSync(markdownSource, ["**.css"]), files.forEach(function(file) {
      if (dest = path.join(markdownDest, file), source = path.join(markdownSource, file), isExist = fs.existsSync(dest), !isExist) try {
        fs.copySync(source, dest)
      } catch (e) {}
    }), global.THEMES = {}, global.THEMES.user = {}, global.THEMES.user.editor = loadUserThemes(global.PATHS.theme_dest_editor), global.THEMES.user.viewer = loadUserThemes(global.PATHS.theme_dest_viewer), global.THEMES.editor = ["default", "3024-day", "3024-night", "ambiance-mobile", "ambiance", "base16-dark", "base16-light", "blackboard", "cobalt", "eclipse", "elegant", "erlang-dark", "lesser-dark", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "paraiso-dark", "paraiso-light", "pastel-on-dark", "rubyblue", "solarized dark", "solarized light", "the-matrix", "tomorrow-night-eighties", "twilight", "vibrant-ink", "xq-dark", "xq-light"], global.THEMES.viewer = ["clearness", "clearness-dark", "node-dark", "github", "haroopad", "solarized-dark", "solarized-light", "metro-vibes", "metro-vibes-dark", "wood", "wood-ri"], global.THEMES.code = ["default", "arta", "ascetic", "atelier-dune.dark", "atelier-dune.light", "atelier-forest.dark", "atelier-forest.light", "atelier-heath.dark", "atelier-heath.light", "atelier-lakeside.dark", "atelier-lakeside.light", "atelier-seaside.dark", "atelier-seaside.light", "brown_paper", "codepen-embed", "color-brewer", "dark", "docco", "far", "foundation", "github", "googlecode", "hybrid", "idea", "ir_black", "kimbie.dark", "kimbie.light", "magula", "mono-blue", "monokai", "monokai_sublime", "obsidian", "paraiso.dark", "paraiso.light", "pojoaque", "railscasts", "rainbow", "school_book", "solarized_dark", "solarized_light", "sunburst", "tomorrow", "tomorrow-night-blue", "tomorrow-night-bright", "tomorrow-night-eighties", "tomorrow-night", "vs", "xcode", "zenburn"]
  }

  function _shortcut() {
    global.SHORTCUTS = {
      new_window: {
        key: "n",
        modifiers: "cmd"
      },
      save: {
        key: "s",
        modifiers: "cmd"
      },
      save_as: {
        key: "s",
        modifiers: "cmd-shift"
      },
      open: {
        key: "o",
        modifiers: "cmd"
      },
      send_email: {
        key: "e",
        modifiers: "cmd-shift"
      },
      copy_to_clipboard: {
        key: "c",
        modifiers: "cmd-shift"
      },
      export_html: {
        key: "x",
        modifiers: "cmd-shift"
      },
      close: {
        key: "w",
        modifiers: "cmd"
      },
      close_win: {
        key: "f4",
        modifiers: "cmd"
      },
      show_preference: {
        key: ",",
        modifiers: "cmd"
      },
      print: {
        key: "p",
        modifiers: "cmd"
      },
      exit: {
        key: "q",
        modifiers: "cmd"
      },
      perspective_edit_view: {
        key: "1",
        modifiers: "shift-ctrl"
      },
      perspective_view_edit: {
        key: "2",
        modifiers: "shift-ctrl"
      },
      perspective_only_edit: {
        key: "3",
        modifiers: "shift-ctrl"
      },
      perspective_only_view: {
        key: "4",
        modifiers: "shift-ctrl"
      },
      perspective_set_default: {
        key: "\\",
        modifiers: "shift-ctrl"
      },
      perspective_move_right: {
        key: "]",
        modifiers: "shift-ctrl-alt"
      },
      perspective_move_left: {
        key: "[",
        modifiers: "shift-ctrl-alt"
      },
      perspective_minus_view: {
        key: "]",
        modifiers: "shift-ctrl"
      },
      perspective_plus_view: {
        key: "[",
        modifiers: "shift-ctrl"
      },
      toggle_line_number: {
        key: "g",
        modifiers: "shift-ctrl"
      },
      show_markdown_help: {
        key: "h",
        modifiers: "shift-ctrl"
      },
      toggle_vim_key_binding: {
        key: "y",
        modifiers: "shift-ctrl"
      },
      show_table_of_content: {
        key: "u",
        modifiers: "shift-ctrl"
      },
      enter_fullscreen: {
        key: "enter",
        modifiers: "cmd"
      },
      enter_fullscreen_win: {
        key: "f11",
        modifiers: "cmd"
      },
      escape_fullscreen: {
        key: "esc",
        modifiers: ""
      },
      enter_presentation: {
        key: "p",
        modifiers: "cmd-alt"
      },
      enter_presentation_win: {
        key: "p",
        modifiers: "cmd-alt"
      },
      editor_font_size_up: {
        key: "up",
        modifiers: "alt"
      },
      editor_font_size_down: {
        key: "down",
        modifiers: "alt"
      },
      viewer_font_size_up: {
        key: "up",
        modifiers: "shift-alt"
      },
      viewer_font_size_down: {
        key: "down",
        modifiers: "shift-alt"
      },
      cut: {
        key: "x",
        modifiers: "cmd"
      },
      copy: {
        key: "c",
        modifiers: "cmd"
      },
      paste: {
        key: "v",
        modifiers: "cmd"
      },
      select_all: {
        key: "a",
        modifiers: "cmd"
      },
      delete_line: {
        key: "d",
        modifiers: "cmd"
      },
      undo: {
        key: "z",
        modifiers: "cmd"
      },
      redo: {
        key: "z",
        modifiers: "cmd-shift"
      },
      go_to_doc_start: {
        key: "up",
        modifiers: "cmd"
      },
      go_to_doc_end1: {
        key: "end",
        modifiers: "cmd"
      },
      go_to_doc_end2: {
        key: "down",
        modifiers: "cmd"
      },
      go_to_group_left: {
        key: "left",
        modifiers: "alt"
      },
      go_to_group_right: {
        key: "right",
        modifiers: "alt"
      },
      go_to_line_start: {
        key: "left",
        modifiers: "cmd"
      },
      go_to_line_end: {
        key: "right",
        modifiers: "cmd"
      },
      delete_group_before: {
        key: "backspace",
        modifiers: "alt"
      },
      delete_group_after1: {
        key: "backspace",
        modifiers: "ctrl-alt"
      },
      delete_group_after2: {
        key: "delete",
        modifiers: "alt"
      },
      indent_less: {
        key: "[",
        modifiers: "cmd"
      },
      indent: {
        key: "]",
        modifiers: "cmd"
      },
      folding: {
        key: "q",
        modifiers: "ctrl"
      },
      insert_date_time: {
        key: "d",
        modifiers: "shift-ctrl"
      },
      insert_md_header1: {
        key: "1",
        modifiers: "cmd"
      },
      insert_md_header2: {
        key: "2",
        modifiers: "cmd"
      },
      insert_md_header3: {
        key: "3",
        modifiers: "cmd"
      },
      insert_md_header4: {
        key: "4",
        modifiers: "cmd"
      },
      insert_md_header5: {
        key: "5",
        modifiers: "cmd"
      },
      insert_md_header6: {
        key: "6",
        modifiers: "cmd"
      },
      insert_md_bold: {
        key: "b",
        modifiers: "cmd"
      },
      insert_md_italic: {
        key: "i",
        modifiers: "cmd"
      },
      insert_md_link: {
        key: "l",
        modifiers: "cmd"
      },
      insert_md_underline: {
        key: "y",
        modifiers: "cmd"
      },
      insert_md_inline_code: {
        key: "k",
        modifiers: "cmd"
      },
      insert_md_embed: {
        key: "e",
        modifiers: "cmd"
      },
      insert_md_strike: {
        key: "u",
        modifiers: "cmd"
      },
      insert_md_highlight: {
        key: "t",
        modifiers: "cmd"
      },
      insert_md_fenced_code: {
        key: "",
        modifiers: "cmd"
      },
      insert_md_image: {
        key: "i",
        modifiers: "shift-ctrl"
      },
      insert_md_footnotes: {
        key: "f",
        modifiers: "shift-ctrl"
      },
      insert_md_footnotes_ref: {
        key: "r",
        modifiers: "shift-ctrl"
      },
      insert_md_toc: {
        key: "t",
        modifiers: "shift-ctrl"
      },
      insert_md_ordered_list: {
        key: "o",
        modifiers: "shift-ctrl"
      },
      insert_md_unordered_list: {
        key: "l",
        modifiers: "shift-ctrl"
      },
      insert_md_math_inline: {
        key: "j",
        modifiers: "shift-ctrl"
      },
      insert_md_math_block: {
        key: "m",
        modifiers: "shift-ctrl"
      },
      insert_md_blockquote: {
        key: "q",
        modifiers: "shift-ctrl"
      },
      insert_md_section_break: {
        key: "enter",
        modifiers: "shift-alt"
      },
      insert_md_page_break: {
        key: "enter",
        modifiers: "shift-ctrl"
      },
      insert_md_sentence_break: {
        key: "enter",
        modifiers: "shift-ctrl-alt"
      },
      start_search: {
        key: "f",
        modifiers: "cmd"
      },
      find_next: {
        key: "g",
        modifiers: "cmd"
      },
      find_previous: {
        key: "g",
        modifiers: "cmd-shift"
      },
      replace: {
        key: "f",
        modifiers: "cmd-alt"
      },
      replace_win: {
        key: "f",
        modifiers: "shift-ctrl"
      },
      replace_all: {
        key: "f",
        modifiers: "cmd-shift-alt"
      },
      replace_all_win: {
        key: "r",
        modifiers: "shift-ctrl"
      },
      "close-preference": {
        key: "esc",
        modifiers: ""
      }
    };
    var p, shortcut, SHORTCUTS = global.SHORTCUTS;
    if ("darwin" !== process.platform)
      for (p in SHORTCUTS) shortcut = SHORTCUTS[p], shortcut.modifiers = shortcut.modifiers.replace("cmd", "ctrl")
  }

  function _logger() {
    var path = require("path"),
      fs = require("fs-extra"),
      moment = require("moment"),
      gui = require("nw.gui"),
      errDir = path.join(gui.App.dataPath, ".error", moment().format("YYYY/MM"));
    errFile = path.join(errDir, moment().format("DD") + ".log"), fs.mkdirsSync(errDir), process.on("userException", function(message) {
      var message = " Information | Description \n-------------|-----------------------------\n Type        | userException \n Date        | " + new Date + "\n" + " Stack       | " + message + "\n\n";
      fs.appendFile(errFile, message)
    }), process.on("uncaughtException", function(err) {
      var message = " Information | Description \n-------------|-----------------------------\n Type        | UncaughtException \n Date        | " + new Date + "\n" + " Agent       | " + navigator.userAgent + "\n" + " Stack       | " + err.stack + "\n\n";
      fs.appendFile(errFile, message)
    }), window.addEventListener("error", function(err) {
      var message = " Information | Description \n-------------|-----------------------------\n Type        | Error\n Date        | " + new Date + "\n" + " Agent       | " + navigator.userAgent + "\n" + " File        | " + err.filename.replace(process.cwd(), "") + "\n" + " Line Number | " + err.lineno + "\n" + " Message     | " + err.message + "\n\n";
      fs.appendFile(errFile, message)
    }, !1)
  }

  function _locale() {
    function load(locale) {
      var json, file = path.join(baseDir, locale);
      G.LOCALES._lang = locale, ["menu", "pad", "preference"].forEach(function(ns) {
        json = fs.readFileSync(path.join(file, ns + ".json"), "utf8"), locales[ns] = JSON.parse(json)
      })
    }
    var fs = require("fs"),
      path = require("path"),
      G = global,
      locales = G.LOCALES = {},
      config = localStorage.getItem("General");
    config = JSON.parse(config) || {
      displayLanguage: void 0
    };
    var baseDir = G.PATHS.locales,
      locale = window.navigator.language.toLowerCase(),
      prefix = locale.split("-")[0];
    G.LANGS.hasOwnProperty(locale) ? load(locale) : G.LANGS.hasOwnProperty(prefix) ? load(prefix) : load("en")
  }
  _system(), _logger(), global._gaq = {
    instance: null,
    _iframe: null,
    init: function(next) {
      var cw, iframe, wrapper, html = '<iframe src="about:blank" id="__google" style="position:absolute;width:1px;height:1px;top:-100px;left:-100px;" nwdisable nwfaketop></iframe>';
      wrapper = document.createElement("p"), wrapper.innerHTML = html, iframe = wrapper.firstElementChild, iframe.src = "http://pad.haroopress.com/assets/google_analytics.html", document.body.appendChild(iframe), this._iframe = cw = iframe.contentWindow, cw.onload = function() {
        next(cw._gaq), global._gaq.instance = cw._gaq
      }
    },
    push: function(cate, action, label) {
      var arr = ["_trackEvent", cate, action, label];
      navigator.onLine && global._gaq.instance && global._gaq.instance.push(arr)
    }
  }, window.addEventListener("online", function() {
    global._gaq._iframe.location.reload()
  }, !1), _locale();
  var _glo = {
    getEmailAdvertisementHTML: function() {
      return '<p style="display: block; width: 99.6%; line-height:1.6em; /*text-align: center; */padding: 5px 0; font-size:1em; border: 1px solid #e5e5e5;/* background-color:rgb(253,246,227);*/ border-radius: 3px;"> <span>   <img src="http://pad.haroopress.com/assets/images/logo-small.png" align="absmiddle" width="40" height="40" style="float:left; margin:0 10px;"/>   Sent from My <strong><a href="http://pad.haroopress.com/" target="_blank">Haroopad</a></strong> <br/>   The Next Document processor based on Markdown  - <a href="http://pad.haroopress.com/user.html#download" target="_blank">Download</a> </span></p>'
    },
    getEmailAdvertisementMD: function() {
      return "\n* * * * * * * *  \n > Sent from My **[Haroopad](http://pad.haroopress.com)**  \n  > The Next Document processor based on Markdown  \n > [Download Haroopad](http://pad.haroopress.com/user.html#download)  \n"
    }
  };
  define("context/util", ["module"], function(e) {
    var n = window.gui;
    e.exports = {
      menuItem: function(e) {
        return new n.MenuItem(e)
      },
      sepItem: function() {
        return new n.MenuItem({
          type: "separator"
        })
      }
    }
  }), define("context/editor/themes", ["context/util"], function(e) {
    function n(e) {
      i.append(e)
    }
    var t = require("nw.gui"),
      i = new t.Menu,
      o = global.THEMES.editor;
    return o.forEach(function(t) {
      n(e.menuItem({
        label: t,
        click: function() {
          window.parent.ee.emit("context.editor.theme", this.label)
        }
      }))
    }), i
  }), define("context/editor/themesUser", ["context/util"], function(e) {
    function n(e) {
      r.append(e)
    }

    function t() {
      for (var e = r.items.length, n = 0; e > n; n++) r.removeAt(0)
    }

    function i(t) {
      t.forEach(function(t) {
        n(e.menuItem({
          label: t,
          click: function() {
            window.parent.ee.emit("context.editor.theme.user", this.label)
          }
        }))
      })
    }
    var o = require("nw.gui"),
      r = new o.Menu;
    return i(global.THEMES.user.editor), window.ee.on("preferences.editor.userTheme", function() {
      t(), i(global.THEMES.user.editor)
    }), r
  }), define("context/Editor", ["context/util", "context/editor/themes", "context/editor/themesUser"], function(e, n, t) {
    function i(e) {
      r.append(e)
    }
    var o = require("nw.gui"),
      r = new o.Menu;
    return i(e.menuItem({
      label: i18n.t("edit.cut"),
      click: function() {
        window.ee.emit("context.cut")
      }
    })), i(e.menuItem({
      label: i18n.t("edit.copy"),
      click: function() {
        window.ee.emit("context.copy")
      }
    })), i(e.menuItem({
      label: i18n.t("edit.paste"),
      click: function() {
        window.ee.emit("context.paste")
      }
    })), i(e.menuItem({
      label: i18n.t("edit.delete"),
      click: function() {
        window.ee.emit("context.delete")
      }
    })), i(e.menuItem({
      label: i18n.t("edit.select-all"),
      click: function() {
        window.ee.emit("context.selectall")
      }
    })), i(e.sepItem()), i(e.menuItem({
      label: i18n.t("view.editor.theme"),
      submenu: n
    })), i(e.menuItem({
      label: i18n.t("view.editor.theme-user"),
      submenu: t
    })), i(e.sepItem()), i(e.menuItem({
      label: i18n.t("file.preferences"),
      click: function() {
        window.ee.emit("context.preferences")
      }
    })), r
  }), define("context/viewer/export", ["context/util"], function(e) {
    function n(e) {
      i.append(e)
    }
    var t = require("nw.gui"),
      i = new t.Menu;
    return n(e.menuItem({
      label: i18n.t("HTML"),
      click: function() {
        window.parent.ee.emit("context.viewer.export", this.label)
      }
    })), i
  }), define("context/viewer/publish", ["context/util"], function(e) {
    function n(e) {
      i.append(e)
    }
    var t = require("nw.gui"),
      i = new t.Menu;
    return n(e.menuItem({
      label: i18n.t("file.sending-email"),
      click: function() {
        window.parent.ee.emit("context.viewer.publish", "email")
      }
    })), i
  }), define("context/viewer/themes", ["context/util"], function(e) {
    function n(e) {
      i.append(e)
    }
    var t = require("nw.gui"),
      i = new t.Menu,
      o = global.THEMES.viewer;
    return o.forEach(function(t) {
      n(e.menuItem({
        label: t,
        click: function() {
          window.parent.ee.emit("context.viewer.theme", this.label)
        }
      }))
    }), i
  }), define("context/viewer/themesUser", ["context/util"], function(e) {
    function n(e) {
      r.append(e)
    }

    function t() {
      for (var e = r.items.length, n = 0; e > n; n++) r.removeAt(0)
    }

    function i(t) {
      t.forEach(function(t) {
        n(e.menuItem({
          label: t,
          click: function() {
            window.parent.ee.emit("context.viewer.theme.user", this.label)
          }
        }))
      })
    }
    var o = require("nw.gui"),
      r = new o.Menu;
    return i(global.THEMES.user.viewer), window.ee.on("preferences.viewer.userTheme", function() {
      t(), i(global.THEMES.user.viewer)
    }), r
  }), define("context/viewer/themesCode", ["context/util"], function(e) {
    function n(e) {
      i.append(e)
    }
    var t = require("nw.gui"),
      i = new t.Menu,
      o = global.THEMES.code;
    return o.forEach(function(t) {
      n(e.menuItem({
        label: t,
        click: function() {
          window.parent.ee.emit("context.viewer.theme.code", this.label)
        }
      }))
    }), i
  }), define("context/Viewer", ["context/util", "context/viewer/export", "context/viewer/publish", "context/viewer/themes", "context/viewer/themesUser", "context/viewer/themesCode"], function(e, n, t, i, o, r) {
    function a(e) {
      d.append(e)
    }
    var c = require("nw.gui"),
      d = new c.Menu;
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
      submenu: n
    })), a(e.menuItem({
      label: i18n.t("file.sending"),
      submenu: t
    })), a(e.sepItem()), a(e.menuItem({
      label: i18n.t("view.enter-presentation"),
      click: function() {
        window.parent.ee.emit("menu.view.presentation")
      }
    })), a(e.sepItem()), a(e.menuItem({
      label: i18n.t("view.viewer.theme"),
      submenu: i
    })), a(e.menuItem({
      label: i18n.t("view.viewer.theme-code"),
      submenu: r
    })), a(e.menuItem({
      label: i18n.t("view.viewer.theme-user"),
      submenu: o
    })), a(e.sepItem()), a(e.menuItem({
      label: i18n.t("file.preferences"),
      click: function() {
        window.ee.emit("context.preferences")
      }
    })), d
  }), define("context/Context", ["context/Editor", "context/Viewer"], function(e, n) {
    var t = require("nw.gui");
    t.Window.get(), window.ee.on("popup.context.viewer", function(e, t) {
      n.popup(e, t)
    }), window.ee.on("popup.context.editor", function(n, t) {
      e.popup(n, t)
    })
  }), define("mail/Mailer", [], function() {
    function e(e, n, i) {
      t = o.createTransport("SMTP", {
        service: i || "Gmail",
        auth: {
          user: e,
          pass: n
        }
      })
    }

    function n(e) {
      t.sendMail(r, function(n, o) {
        return e(n, o), n ? (t.close(), void 0) : (window.clearTimeout(i), i = window.setTimeout(function() {
          t.close()
        }, 6e5), void 0)
      }), global._gaq.push("haroopad.file", "email", "")
    }
    var t, i, o = require("nodemailer"),
      r = {
        from: "",
        to: "",
        subject: "",
        text: ""
      };
    return window.ee.on("cancel.send.email", function() {
      window.clearTimeout(i), t && t.close()
    }), {
      setCredential: function(n) {
        e(n.from, n.password)
      },
      send: function(e, t, i) {
        var o = e.title,
          a = e.to,
          c = e.mode,
          d = t.emailHTML,
          u = t.markdown;
        a.indexOf("@tumblr.com") > -1 ? ("md" == c && (o = "!m " + o), global._gaq.push("haroopad.file", "tumblr", "")) : (d += _glo.getEmailAdvertisementHTML(), u += _glo.getEmailAdvertisementMD()), "html" == c ? (delete r.text, r.html = d || "") : (delete r.html, r.text = u || ""), r.from = e.from, r.to = a, r.subject = o, r.attachments = t.attachments, n(i)
      }
    }
  }), define("core/Lexer", [], function() {
    function e(e, n) {
      return e = e.source, n = n || "",
        function t(i, o) {
          return i ? (o = o.source || o, o = o.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(i, o), t) : RegExp(e, n)
        }
    }

    function n(e) {
      for (var n, t, i = 1; arguments.length > i; i++) {
        n = arguments[i];
        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
      }
      return e
    }
    var t = require("marked"),
      i = {
        math: /^ *(\${2,2}) *([\s\S]+?)\s*\1 *(?:\n+|$)/,
        oembed: /^@\[(inside)\]\(href\)/,
        toc: /^\[\s*(TOC|toc)(?:\s+['"]([\s\S]*?)['"])?\s*\] *(?:\n+|$)/
      },
      o = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
      r = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
    return i.oembed = e(i.oembed)("inside", o)("href", r)(),
      function(o) {
        var r = new t.Lexer(o);
        return r.rules.paragraph = e(r.rules.paragraph)("math", i.math)(), r.rules = n({}, r.rules, i), r.rules.pedantic = n({}, r.rules.pedantic, i), r.rules.gfm = n({}, r.rules.gfm, i), r.rules.tables = n({}, r.rules.tables, i), r
      }
  }), define("core/InlineLexer", [], function() {
    function e(e, n) {
      return e = e.source, n = n || "",
        function t(i, o) {
          return i ? (o = o.source || o, o = o.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(i, o), t) : RegExp(e, n)
        }
    }

    function n(e) {
      for (var n, t, i = 1; arguments.length > i; i++) {
        n = arguments[i];
        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
      }
      return e
    }
    var t = require("marked"),
      i = {
        emoji: /^:([A-Za-z0-9_\-\+]+?):/,
        stronghighlight: /^==([^=]+)==/,
        underline: /^\+\+([\s\S]+?)\+\+(?!\+)/,
        sup: /^\^([\S]+?)\^(?!\^)/,
        sub: /^\~([\S]+?)\~(?!\~)/
      },
      o = /^ *(split)([\s\S]*?[^\$])\1(?!\$)/;
    return function(r) {
      var a = t.InlineLexer,
        c = a.rules;
      return a.rules.normal = n({}, a.rules.normal, i), a.rules.gfm = n({}, a.rules.gfm, i), a.rules.breaks = n({}, a.rules.breaks, i), i.math = r.dollarSign ? e(o)("split", /\${3,3}|\${1,1}/)() : e(o)("split", /\${3,3}/)(), r.gfm && (a.rules.gfm = n({}, c.gfm, i)), r.breaks && (a.rules.breaks = n({}, c.breaks, i)), a
    }
  }), define("core/Renderer", [], function() {
    function e(e) {
      var n;
      return e = e || "", n = e.split("."), 1 >= n.length ? "" : "." + n[n.length - 1]
    }

    function n(e) {
      var n = {};
      return e = e ? e : "", e && (e = e.split(";"), e.forEach(function(e) {
        e = e.split(":"), e[0] && e[1] && (n[e[0].trim()] = e[1].trim())
      }), e = JSON.stringify(n), e = encodeURIComponent(e)), e
    }

    function t(e, n, t, i) {
      var o = '<img src="' + e + '" alt="' + t + '"';
      return n && (o += ' title="' + n + '"'), i && (o += ' style="' + i + '"'), o += ">"
    }

    function i(e, n, t, i, o) {
      var r = "<audio controls";
      return o && (r += ' style="' + o + '"'), r += ">", r += '<source src="' + e + '" type="audio/' + n + '" />', r += i18n.t("Your browser does not support the audio tag!"), r += "</audio>"
    }

    function o(e, n, t, i, o) {
      var r = "<video controls";
      return o && (r += ' style="' + o + '"'), r += ">", r += '<source src="' + e + '" type="video/' + n + '" />', r += i18n.t("Your browser does not support the video tag!"), r += "</video>"
    }
    var r = require("marked"),
      a = new r.Renderer;
    return a.listitem = function(e) {
      return /^\s*\[[xv ]\]\s*/.test(e) ? (e = e.replace(/^\s*\[ \]\s*/, '<input type="checkbox" /> ').replace(/^\s*\[[x|v]\]\s*/, '<input type="checkbox" checked /> '), '<li style="list-style: none">' + e + "</li>") : "<li>" + e + "</li>"
    }, a.oembed = function(e, t, i) {
      var o;
      return t ? (i = n(i), o = '<a href="' + t + '" data-props="' + i + '" target="_blank">' + (e ? e : t) + "</a>", '<p class="oembed">' + o + "</p>") : ""
    }, a.math = function(e, n) {
      return "$$" === n ? '<p class="mathjax">$$' + e + "$$</p>" : '<span class="mathjax">' + n + e + n + "</span>"
    }, a.toc = function(e) {
      return '<p class="toc" style="' + e + '"></p>'
    }, a.hr = function(e) {
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
    }, a.heading = function(e, n, t) {
      return t = t.replace(/(<([^>]+)>)/gi, "").toLowerCase().trim().replace(/[\s]+/g, "-"), "<h" + n + ' id="' + this.options.headerPrefix + t + '">' + '<a name="' + t + '" href="#' + t + '"></a>' + e + "</h" + n + ">\n"
    }, a.image = function(n, r, a, c) {
      var d, u = e(n);
      switch (u = u.substr(1, u.length)) {
        case "mp3":
        case "ogg":
          d = i(n, u, r, a, c);
          break;
        case "mp4":
        case "webm":
        case "ogv":
          d = o(n, u, r, a, c);
          break;
        default:
          d = t(n, r, a, c)
      }
      return d
    }, a
  }), define("parse", ["core/Lexer", "core/InlineLexer", "core/Renderer"], function(e, n, t) {
    var i = require("nw.gui"),
      o = (i.Window.get(), require("marked")),
      r = store.get("Markdown") || {},
      a = merge(o.defaults, r, {
        renderer: t
      }),
      c = e(a);
    o.InlineLexer = n(a);
    var d = window.marked = function(e) {
      var n = c.lex(e);
      return {
        tokens: n,
        html: o.parser(n, c.options)
      }
    };
    return window.ee.on("preferences.markdown.change", function(t) {
      c = e(t), o.InlineLexer = n(t), window.ee.emit("preferences.markdown.change.after")
    }), d
  }), define("file/File.toc.element", [], function() {
    function e(e, n, t, i) {
      this.tagName = e, this.anchor = n, this.text = t, this.index = i, this.children = []
    }
    return e.prototype.childrenToString = function() {
      if (0 === this.children.length) return "";
      var e = "<ul>\n";
      return this.children.forEach(function(n) {
        e += "" + n
      }), e += "</ul>\n"
    }, e.prototype.toString = function() {
      var e = "<li>";
      return this.anchor && this.text && (e += '<span class="title">\n', e += '<a href="#' + this.anchor + '" title="' + this.text + '">' + this.text + "</a>", e += "\n</span>\n", e += '<!--span class="number">\n', e += this.index, e += "\n</span-->\n"), e += this.childrenToString() + "</li>\n"
    }, e
  }), define("file/File.toc", ["file/File.toc.element"], function(e) {
    function n(t, i) {
      function o() {
        void 0 !== c && (c.children.length > 0 && (c.children = n(c.children, i + 1)), a.push(c))
      }
      i = i || 1;
      var r = "H" + i,
        a = [],
        c = void 0;
      return t.forEach(function(n) {
        n.tagName != r ? (void 0 === c && (c = new e), c.children.push(n)) : (o(), c = n)
      }), o(), a
    }

    function t(t) {
      function o(e) {
        var n, t = e.id || e.textContent || "title",
          i = 0;
        for (n = t; r.hasOwnProperty(n);) n = t + "-" + ++i;
        return r[n] = !0, e.id = n, n
      }
      var r = {},
        a = [];
      return t.forEach(function(n, t) {
        n.setAttribute("data-idx", t), a.push(new e(n.tagName, o(n), n.textContent, t))
      }), a = n(a), i = "<ul>\n" + a.join("") + "\n</ul>\n"
    }
    var i = "";
    return {
      get: t
    }
  }), define("file/File.doc", ["file/File.toc"], function(e) {
    return Backbone.Model.extend({
      _body: null,
      _headers: null,
      _header: null,
      initialize: function() {
        this._body = document.createElement("div"), this._headers = [], this.on("change:html", function(e, n) {
          this._body.innerHTML = n || "", this.trigger("update", this, n)
        })
      },
      isChangeTOC: function(e) {
        var n, t = 0;
        if (0 >= e.length) return !1;
        for (t; e.length > t; t++) {
          if (n = e[t], this._header = this._headers[t], !this._header) return !0;
          if (n.textContent != this._header.textContent) return !0
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
        var n = this._body.querySelectorAll("h1, h2, h3, h4, h5, h6"),
          t = this._body.querySelectorAll("img"),
          i = this._body.querySelectorAll("code"),
          o = this._body.querySelectorAll("blockquote"),
          r = this._body.querySelectorAll("p"),
          a = this._body.querySelectorAll("a"),
          c = this._body.querySelectorAll("table");
        this.set({
          title: n[0] && n[0].textContent || "Untitled",
          dom: {
            header: n.length,
            paragraph: r.length,
            link: a.length,
            image: t.length,
            code: i.length,
            blockquote: o.length,
            table: c.length
          }
        }), n = Array.prototype.slice.call(n, 0), n = n.filter(function(e) {
          return "H1" !== e.tagName
        }), this.isChangeTOC(n) && this.set({
          toc: e.get(n)
        })
      }
    })
  }), define("file/File.tmp.opt", [], function() {
    var e = (require("path"), []),
      n = Backbone.Model.extend({
        defaults: {
          files: []
        },
        initialize: function() {
          var n = localStorage.getItem("Temporary");
          this.bind("change", function() {
            store.set("Temporary", this.toJSON())
          }), n ? (this.set(JSON.parse(n)), e = this.get("files") || []) : (this.set(this.defaults), store.set("Temporary", this.toJSON()))
        },
        add: function(n) {
          -1 === e.indexOf(n) && (e.push(n), this.set({
            files: e
          }), this.trigger("change"))
        },
        remove: function(n) {
          var t = e.indexOf(n);
          t > -1 && (e.splice(t, 1), this.set({
            files: e
          }), this.trigger("change"))
        },
        clearAll: function() {
          e.length = 0, this.set("files", []), this.trigger("change")
        }
      });
    return new n
  }), function initialize() {
      this.doc = new n, this.on("change:markdown", function() {
        var n = this.get("markdown") || "",
          i = e(n),
          o = i.html;
        this.doc.set({
          html: o,
          footnotes: i.tokens.footnotes,
          links: i.tokens.links
        }), this.set({
          updated_at: new Date
        }), this.get("tmp") || (window.clearTimeout(this._writeTimeout), this._writeTimeout = window.setTimeout(function() {
          a.writeFileSync(this._tmpFile, n, "utf8"), t.add(this._uid)
        }.bind(this), 2500))
      }), this.on("change:fileEntry", function() {
        var e = this.get("fileEntry");
        this.update(e)
      }), this.on("close", this.close, this), this.get("tmp") ? (this._tmpFile = this.get("fileEntry"), this._uid = c.basename(this._tmpFile)) : (this._uid = o(), this._tmpFile = r(this._uid)), this.get("fileEntry") && (this.trigger("change:fileEntry"), this.load())
    }

}
function app2(global, window, document) {
  define("file/File.model", ["parse", "file/File.doc", "file/File.tmp.opt"], function(e, n, t) {
    // function i(e) {
    //   return a.readFileSync(e, "utf8")
    // }

    // function o() {
    //   return d.encode(parseInt(1e17 * Math.random()))
    // }

    // function r(e) {
    //   return c.join(global.PATHS.tmp, e)
    // }

    var a = require("fs-extra"),
      // c = require("path"),
      // d = require("base62"),
      // u = (require("nw.gui"), window),
      s = Backbone.Model.extend({
        defaults: {
          // created_at: new Date,
          // updated_at: new Date,
          // fileEntry: void 0,
          extname: ".md",
          // dirname: void 0,
          // basename: void 0,
          markdown: "",
          // tmp: void 0
          a: !1
        }
        // doc: null,
        // initialize: initialize,
        // load: function(e) {
        // },
        // reload: function(e) {
        // },
        // refresh: function() {
        // },
        // update: function(e) {
        // },
        // save: function(e) {
        // },
        // close: function() {
        // }
      });
    return s
  }), define("index", function() {});
}