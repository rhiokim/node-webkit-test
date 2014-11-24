function app(global, window, document) {
  define("window/Window", ["window/Window.opt", "window/WindowManager", "window/Window.preferences", "window/Window.dragdrop", "file/File", "file/Recents"], function(e, t, n, r, i, s) {
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
    }), window.ee.on("menu.edit.undo", function() {
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
  });
}