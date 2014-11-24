function app() {
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  }),
  define("file/File.tmp.opt", [], function() {
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
  })
}