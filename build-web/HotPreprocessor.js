(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HotPreprocessorWeb"] = factory();
	else
		root["HotPreprocessorWeb"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HotPreprocessorWeb.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./src/Hot.ts":
/*!********************!*\
  !*** ./src/Hot.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HotFile_1 = __webpack_require__(/*! ./HotFile */ "./src/HotFile.ts");
const HotPreprocessor_1 = __webpack_require__(/*! ./HotPreprocessor */ "./src/HotPreprocessor.ts");
/**
 * The api used during processing.
 */
class Hot {
    /**
     * Retrieve a file and echo out it's contents.
     */
    static include(file) {
        return __awaiter(this, void 0, void 0, function* () {
            Hot.echo(yield Hot.getFile(file));
        });
    }
    /**
     * Get the content of a file.
     */
    static getFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let tempFile = null;
            if (typeof (file) === "string") {
                tempFile = new HotFile_1.HotFile();
                if (HotPreprocessor_1.HotPreprocessor.isWeb === true)
                    tempFile.url = file;
                else
                    tempFile.localFile = file;
            }
            else
                tempFile = file;
            yield tempFile.load();
            let content = yield tempFile.process();
            return (content);
        });
    }
    /**
     * Echo out some output.
     */
    static echo(message) {
        Hot.Output += message;
    }
    /**
     * Echo out the CSS for the current page being generated.
     */
    static displayCSS() {
        for (let iIdx = 0; iIdx < Hot.CSS.length; iIdx++) {
            let cssFile = Hot.CSS[iIdx];
            let cssOut = Hot.cssStr;
            cssOut = cssOut.replace(/\%CSS_FILE\%/g, cssFile);
            Hot.echo(cssOut);
        }
    }
    /**
     * Echo out the JS files for the current page being generated.
     */
    static displayJSFiles() {
        for (let iIdx = 0; iIdx < Hot.JSFiles.length; iIdx++) {
            let jsFile = Hot.JSFiles[iIdx];
            let jsFileOut = Hot.jsFileStr;
            jsFileOut = jsFileOut.replace(/\%JS_FILE\%/g, jsFile);
            Hot.echo(jsFileOut);
        }
    }
    /**
     * Echo out the JS scripts for the current page being generated.
     */
    static displayJSScripts() {
        for (let iIdx = 0; iIdx < Hot.JSScripts.length; iIdx++) {
            let jsScript = Hot.JSScripts[iIdx];
            let jsScriptOut = Hot.jsScriptsStr;
            jsScriptOut = jsScriptOut.replace(/\%JS_CODE\%/g, jsScript);
            Hot.echo(jsScriptOut);
        }
    }
}
exports.Hot = Hot;
/**
 * Contains the buffer to output. This is cleared between every file processed.
 */
Hot.CurrentPage = null;
/**
 * Contains the buffer to output. This is cleared between every file processed.
 */
Hot.Output = "";
/**
 * The data to share across all the different files and pages.
 */
Hot.Persistence = {};
/**
 * The CSS string to use when echoing out the CSS files.
 */
Hot.cssStr = `<link rel = "stylesheet" href = "%CSS_FILE%" />`;
/**
 * The CSS files to use in the current page being generated.
 *
 * @todo Make this a "string | CSSObject" data type so it can also include
 * the integrity hashes as well.
 */
Hot.CSS = [];
/**
 * The JavaScript files to use in the current page being generated.
 *
 * @todo Make this a "string | JSFileObject" data type so it can also include
 * the integrity hashes as well.
 */
Hot.JSFiles = [];
/**
 * The JavaScript inline code to use in the current page being generated.
 */
Hot.JSScripts = [];
/**
 * The JavaScript string to use when echoing out the Scripts files.
 */
Hot.jsFileStr = `<script type = "text/javascript" src = "%JS_FILE%"></script>`;
/**
 * The JavaScript string to use when echoing out the Scripts files.
 */
Hot.jsScriptsStr = `<script type = "text/javascript">%JS_CODE%</script>`;


/***/ }),

/***/ "./src/HotFile.ts":
/*!************************!*\
  !*** ./src/HotFile.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(__webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js"));
const isomorphic_fetch_1 = __importDefault(__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js"));
const Hot_1 = __webpack_require__(/*! ./Hot */ "./src/Hot.ts");
/**
 * A file to process.
 */
class HotFile {
    constructor(copy = {}) {
        this.name = copy.name || "";
        this.url = copy.url || "";
        this.localFile = copy.localFile || "";
        this.content = copy.content || "";
    }
    /**
     * Set the content of this file.
     */
    setContent(content) {
        this.content = content;
    }
    /**
     * Get the content of this file.
     */
    getContent() {
        return (this.content);
    }
    /**
     * Load content from a url.
     */
    loadUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield isomorphic_fetch_1.default(this.url);
            let content = yield res.text();
            this.content = content;
        });
    }
    /**
     * Load content from a local file.
     */
    loadLocalFile() {
        return __awaiter(this, void 0, void 0, function* () {
            let promise = new Promise((resolve, reject) => {
                fs.readFile(this.localFile, (err, data) => {
                    if (err != null)
                        throw err;
                    let content = data.toString();
                    this.content = content;
                    resolve();
                });
            });
            return (promise);
        });
    }
    /**
     * Load the contents of the file.
     */
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.url !== "")
                yield this.loadUrl();
            if (this.localFile !== "")
                yield this.loadLocalFile();
        });
    }
    /**
     * Process the content in this file.
     */
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = "";
            let regex = new RegExp("(?<=\\<\\*)([\\s\\S]*?)(?=\\*\\>)", "g");
            let thisContent = this.content;
            let result = regex.exec(thisContent);
            let previousIndex = 0;
            // Begin parsing Javascript sections.
            while (result != null) {
                let start = result.index - 2;
                let end = regex.lastIndex + 2;
                // Get the previous JS section.
                let prevContent = thisContent.substr(previousIndex, (start - previousIndex));
                previousIndex = end;
                output += prevContent;
                let content = `
			var Hot = arguments[0];

			async function runContent ()
			{`;
                content += result[0];
                content += `
			}

			return (runContent ().then (() =>
			{
				return ({ hot: Hot, output: Hot.Output, persistence: JSON.stringify (Hot.Persistence) });
			}));`;
                /// @fixme Prior to execution compile any TypeScript and make it ES5 compatible.
                let func = new Function(content);
                let returnedOutput = yield func.apply(this, [Hot_1.Hot]);
                Hot_1.Hot.Persistence = returnedOutput.hot.Persistence;
                output += returnedOutput.output;
                Hot_1.Hot.Output = "";
                // Move on to the next section to parse for Javascript.
                result = regex.exec(thisContent);
            }
            // Append whatever else is after the last parsed section.
            output += thisContent.substr(previousIndex);
            return (output);
        });
    }
}
exports.HotFile = HotFile;


/***/ }),

/***/ "./src/HotPage.ts":
/*!************************!*\
  !*** ./src/HotPage.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hot_1 = __webpack_require__(/*! ./Hot */ "./src/Hot.ts");
const HotPreprocessor_1 = __webpack_require__(/*! ./HotPreprocessor */ "./src/HotPreprocessor.ts");
/**
 * A page to preprocess.
 */
class HotPage {
    constructor(copy) {
        if (copy instanceof HotPreprocessor_1.HotPreprocessor) {
            this.processor = copy;
            this.name = "";
            this.route = "";
            this.files = [];
        }
        else {
            this.processor = copy.processor;
            this.name = copy.name || "";
            this.route = copy.route || "";
            this.files = copy.files || [];
        }
    }
    /**
     * Add a file to process. It's recommend to load the file prior to
     * adding it to a page if it's about to be used.
     */
    addFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            this.files.push(file);
        });
    }
    /**
     * Add all files in the page. Could decrease page loading performance.
     * It's recommend to load the file prior to adding it to a page.
     */
    load(file) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let iIdx = 0; iIdx < this.files.length; iIdx++) {
                let file = this.files[iIdx];
                yield file.load();
            }
        });
    }
    /**
     * Process a page and get the result.
     */
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = "";
            for (let iIdx = 0; iIdx < this.files.length; iIdx++) {
                let file = this.files[iIdx];
                Hot_1.Hot.Output = "";
                output += yield file.process();
            }
            return (output);
        });
    }
}
exports.HotPage = HotPage;


/***/ }),

/***/ "./src/HotPreprocessor.ts":
/*!********************************!*\
  !*** ./src/HotPreprocessor.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(__webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js"));
const HotPage_1 = __webpack_require__(/*! ./HotPage */ "./src/HotPage.ts");
const HotFile_1 = __webpack_require__(/*! ./HotFile */ "./src/HotFile.ts");
const isomorphic_fetch_1 = __importDefault(__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js"));
/**
 * The main class that handles all HTML preprocessing, then outputs the
 * results.
 */
class IHotPreprocessor {
}
exports.IHotPreprocessor = IHotPreprocessor;
/**
 * The main class that handles all HTML preprocessing, then outputs the
 * results.
 */
class HotPreprocessor {
    constructor(copy = {}) {
        this.pages = copy.pages || {};
        this.pageContent =
            `<!DOCTYPE html>
<html>

<head>
	<title>%title%</title>

	<script type = "text/javascript" src = "%hotpreprocessor_js_src%"></script>
	<script type = "text/javascript">
		var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
		HotPreprocessor.displayUrl ("%url%");
	</script>
</head>

<body>
</body>

</html>`;
    }
    /**
     * Add a page.
     */
    addPage(page) {
        this.pages[page.name] = page;
    }
    /**
     * Get a page to process.
     */
    getPage(pageName) {
        return (this.pages[pageName]);
    }
    /**
     * Load from a HotSite.json file.
     */
    loadHotSite(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let jsonStr = "";
            if (HotPreprocessor.isWeb === true) {
                let res = yield isomorphic_fetch_1.default(path);
                jsonStr = res.text();
            }
            else {
                jsonStr = yield new Promise((resolve, reject) => {
                    fs.readFile(path, (err, data) => {
                        if (err != null)
                            throw err;
                        let content = data.toString();
                        resolve(content);
                    });
                });
            }
            let jsonObj = JSON.parse(jsonStr);
            let routes = jsonObj["routes"];
            for (let key in routes) {
                let route = routes[key];
                let file = new HotFile_1.HotFile(route);
                let page = new HotPage_1.HotPage({
                    processor: this,
                    name: route.name || "",
                    route: key,
                    files: [file]
                });
                this.addPage(page);
            }
        });
    }
    /**
     * Create the Express routes from the given pages. Be sure to load the
     * pages first before doing this.
     */
    createExpressRoutes(expressApp, jsSrcPath = "./js/HotPreprocessor.js") {
        for (let key in this.pages) {
            let page = this.pages[key];
            let content = this.pageContent;
            let fixContent = (tempContent) => {
                tempContent = tempContent.replace(/\%title\%/g, page.name);
                tempContent = tempContent.replace(/\%hotpreprocessor\_js\_src\%/g, jsSrcPath);
                tempContent = tempContent.replace(/\%url\%/g, page.files[0].url);
                return (tempContent);
            };
            content = fixContent(content);
            expressApp.get(page.route, (req, res) => {
                res.send(content);
            });
        }
    }
    /**
     * Process a page and get the result.
     */
    process(pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            let page = this.getPage(pageName);
            let result = yield page.process();
            return (result);
        });
    }
    /**
     * Process a local file and get the result.
     */
    static processLocalFile(localFilepath, name = localFilepath) {
        return __awaiter(this, void 0, void 0, function* () {
            let processor = new HotPreprocessor();
            let file = new HotFile_1.HotFile({
                "localFile": localFilepath
            });
            yield file.load();
            let page = new HotPage_1.HotPage({
                "processor": processor,
                "name": name,
                "files": [file]
            });
            processor.addPage(page);
            let result = yield processor.process(name);
            return (result);
        });
    }
    /**
     * Process a url and get the result.
     */
    static processUrl(url, name = url) {
        return __awaiter(this, void 0, void 0, function* () {
            let processor = new HotPreprocessor();
            let file = new HotFile_1.HotFile({
                "url": url
            });
            yield file.load();
            let page = new HotPage_1.HotPage({
                "processor": processor,
                "name": name,
                "files": [file]
            });
            processor.addPage(page);
            let result = yield processor.process(name);
            return (result);
        });
    }
    /**
     * Process content and get the result.
     */
    static processContent(content, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let processor = new HotPreprocessor();
            let file = new HotFile_1.HotFile({
                "content": content
            });
            yield file.load();
            let page = new HotPage_1.HotPage({
                "processor": processor,
                "name": name,
                "files": [file]
            });
            processor.addPage(page);
            let result = yield processor.process(name);
            return (result);
        });
    }
    /**
     * When the window has finished loading, execute the function.
     * This is meant for web browser use only.
     */
    static onReady(readyFunc) {
        if (document.readyState === "complete")
            readyFunc();
        else
            window.addEventListener("load", readyFunc);
    }
    /**
     * Replace the current HTML page with the output.
     * This is meant for web browser use only.
     */
    static useOutput(output) {
        document.open();
        document.write(output);
        document.close();
    }
    /**
     * Process and replace the current HTML page with the
     * hott script from the given url.
     * This is meant for web browser use only.
     */
    static displayUrl(url, name = url) {
        return __awaiter(this, void 0, void 0, function* () {
            HotPreprocessor.onReady(() => __awaiter(this, void 0, void 0, function* () {
                let output = yield HotPreprocessor.processUrl(url, name);
                HotPreprocessor.useOutput(output);
            }));
        });
    }
    /**
     * Process and replace the current HTML page with the
     * hott script.
     * This is meant for web browser use only.
     */
    static displayContent(content, name) {
        return __awaiter(this, void 0, void 0, function* () {
            HotPreprocessor.onReady(() => __awaiter(this, void 0, void 0, function* () {
                let output = yield HotPreprocessor.processContent(content, name);
                HotPreprocessor.useOutput(output);
            }));
        });
    }
}
exports.HotPreprocessor = HotPreprocessor;
/**
 * Indicates if this is a web build.
 */
HotPreprocessor.isWeb = false;


/***/ }),

/***/ "./src/HotPreprocessorWeb.ts":
/*!***********************************!*\
  !*** ./src/HotPreprocessorWeb.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HotPreprocessor_1 = __webpack_require__(/*! ./HotPreprocessor */ "./src/HotPreprocessor.ts");
exports.HotPreprocessor = HotPreprocessor_1.HotPreprocessor;
HotPreprocessor_1.HotPreprocessor.isWeb = true;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ib3RQcmVwcm9jZXNzb3JXZWIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0hvdFByZXByb2Nlc3NvcldlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ib3RQcmVwcm9jZXNzb3JXZWIvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyIsIndlYnBhY2s6Ly9Ib3RQcmVwcm9jZXNzb3JXZWIvLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovL0hvdFByZXByb2Nlc3NvcldlYi8uL3NyYy9Ib3QudHMiLCJ3ZWJwYWNrOi8vSG90UHJlcHJvY2Vzc29yV2ViLy4vc3JjL0hvdEZpbGUudHMiLCJ3ZWJwYWNrOi8vSG90UHJlcHJvY2Vzc29yV2ViLy4vc3JjL0hvdFBhZ2UudHMiLCJ3ZWJwYWNrOi8vSG90UHJlcHJvY2Vzc29yV2ViLy4vc3JjL0hvdFByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9Ib3RQcmVwcm9jZXNzb3JXZWIvLi9zcmMvSG90UHJlcHJvY2Vzc29yV2ViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFDQUFxQywwQkFBMEI7QUFDL0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QiwwQkFBMEIsZUFBZTtBQUN0RTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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OUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxTQUFTLENBQUUsTUFBYztRQUUvQixRQUFRLENBQUMsSUFBSSxFQUFHLENBQUM7UUFDakIsUUFBUSxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUMsQ0FBQztRQUN4QixRQUFRLENBQUMsS0FBSyxFQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQU8sVUFBVSxDQUFFLEdBQVcsRUFBRSxPQUFlLEdBQUc7O1lBRXZELGVBQWUsQ0FBQyxPQUFPLENBQUUsR0FBUyxFQUFFO2dCQUVsQyxJQUFJLE1BQU0sR0FBVyxNQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUVsRSxlQUFlLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBTyxjQUFjLENBQUUsT0FBZSxFQUFFLElBQVk7O1lBRXpELGVBQWUsQ0FBQyxPQUFPLENBQUUsR0FBUyxFQUFFO2dCQUVsQyxJQUFJLE1BQU0sR0FBVyxNQUFNLGVBQWUsQ0FBQyxjQUFjLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUUxRSxlQUFlLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBOztBQTdQRiwwQ0E4UEM7QUE1UEE7O0dBRUc7QUFDSSxxQkFBSyxHQUFZLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUIvQixtR0FBb0Q7QUFLbEQsMEJBTE8saUNBQWUsQ0FLUDtBQUhqQixpQ0FBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiSG90UHJlcHJvY2Vzc29yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSG90UHJlcHJvY2Vzc29yV2ViXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhvdFByZXByb2Nlc3NvcldlYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSG90UHJlcHJvY2Vzc29yV2ViLnRzXCIpO1xuIiwiLy8gdGhlIHdoYXR3Zy1mZXRjaCBwb2x5ZmlsbCBpbnN0YWxscyB0aGUgZmV0Y2goKSBmdW5jdGlvblxuLy8gb24gdGhlIGdsb2JhbCBvYmplY3QgKHdpbmRvdyBvciBzZWxmKVxuLy9cbi8vIFJldHVybiB0aGF0IGFzIHRoZSBleHBvcnQgZm9yIHVzZSBpbiBXZWJwYWNrLCBCcm93c2VyaWZ5IGV0Yy5cbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBzZWxmLmZldGNoLmJpbmQoc2VsZik7XG4iLCJ2YXIgc3VwcG9ydCA9IHtcbiAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgYmxvYjpcbiAgICAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJlxuICAgICdCbG9iJyBpbiBzZWxmICYmXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG59XG5cbmZ1bmN0aW9uIGlzRGF0YVZpZXcob2JqKSB7XG4gIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxufVxuXG5pZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgXVxuXG4gIHZhciBpc0FycmF5QnVmZmVyVmlldyA9XG4gICAgQXJyYXlCdWZmZXIuaXNWaWV3IHx8XG4gICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICB9XG4gIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gIH1cbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlcmF0b3Jcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICB0aGlzLm1hcCA9IHt9XG5cbiAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfSwgdGhpcylcbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICB9XG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKG5hbWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIGl0ZW1zLnB1c2godmFsdWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbn1cblxuZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgfVxuICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgfVxuICByZXR1cm4gY2hhcnMuam9pbignJylcbn1cblxuZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gIGlmIChidWYuc2xpY2UpIHtcbiAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gIH0gZWxzZSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICB9XG59XG5cbmZ1bmN0aW9uIEJvZHkoKSB7XG4gIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgIGlmICghYm9keSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICB9XG4gIH1cblxuICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG52YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG5mdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgfVxuICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsXG4gICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gIH1cblxuICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbidcbiAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB9XG4gIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbFxuICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gIH1cbiAgdGhpcy5faW5pdEJvZHkoYm9keSlcbn1cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG59XG5cbmZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgYm9keVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoJyYnKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gZm9ybVxufVxuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgLy8gUmVwbGFjZSBpbnN0YW5jZXMgb2YgXFxyXFxuIGFuZCBcXG4gZm9sbG93ZWQgYnkgYXQgbGVhc3Qgb25lIHNwYWNlIG9yIGhvcml6b250YWwgdGFiIHdpdGggYSBzcGFjZVxuICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKVxuICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgaWYgKGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbkJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzXG4gIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snXG4gIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbn1cblxuQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgIHVybDogdGhpcy51cmxcbiAgfSlcbn1cblxuUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cbnZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG5SZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbn1cblxuZXhwb3J0IHZhciBET01FeGNlcHRpb24gPSBzZWxmLkRPTUV4Y2VwdGlvblxudHJ5IHtcbiAgbmV3IERPTUV4Y2VwdGlvbigpXG59IGNhdGNoIChlcnIpIHtcbiAgRE9NRXhjZXB0aW9uID0gZnVuY3Rpb24obWVzc2FnZSwgbmFtZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSlcbiAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2tcbiAgfVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpXG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBET01FeGNlcHRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICBmdW5jdGlvbiBhYm9ydFhocigpIHtcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICB9XG4gICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgfVxuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgfVxuXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICB9XG5cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgIH1cblxuICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnb21pdCcpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgfVxuXG4gICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgIH0pXG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgfSlcbn1cblxuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG5cbmlmICghc2VsZi5mZXRjaCkge1xuICBzZWxmLmZldGNoID0gZmV0Y2hcbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxufVxuIiwiaW1wb3J0IHsgSG90RmlsZSB9IGZyb20gXCIuL0hvdEZpbGVcIjtcclxuaW1wb3J0IHsgSG90UGFnZSB9IGZyb20gXCIuL0hvdFBhZ2VcIjtcclxuaW1wb3J0IHsgSG90UHJlcHJvY2Vzc29yIH0gZnJvbSBcIi4vSG90UHJlcHJvY2Vzc29yXCI7XHJcblxyXG4vKipcclxuICogQSBDU1Mgb2JqZWN0IHRvIGVtYmVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDU1NPYmplY3Rcclxue1xyXG5cdC8qKlxyXG5cdCAqIFRoZSB1cmwgdG8gdGhlIENTUyBmaWxlIHRvIGVtYmVkLlxyXG5cdCAqL1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBpbnRlZ3JpdHkgaGFzaCB0byBnZW5lcmF0ZSBkdXJpbmcgaW5pdGlhbCBjb21waWxhdGlvbi5cclxuXHQgKi9cclxuXHRpbnRlZ3JpdHlIYXNoOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgYXBpIHVzZWQgZHVyaW5nIHByb2Nlc3NpbmcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSG90XHJcbntcclxuXHQvKipcclxuXHQgKiBDb250YWlucyB0aGUgYnVmZmVyIHRvIG91dHB1dC4gVGhpcyBpcyBjbGVhcmVkIGJldHdlZW4gZXZlcnkgZmlsZSBwcm9jZXNzZWQuXHJcblx0ICovXHJcblx0c3RhdGljIEN1cnJlbnRQYWdlOiBIb3RQYWdlID0gbnVsbDtcclxuXHQvKipcclxuXHQgKiBDb250YWlucyB0aGUgYnVmZmVyIHRvIG91dHB1dC4gVGhpcyBpcyBjbGVhcmVkIGJldHdlZW4gZXZlcnkgZmlsZSBwcm9jZXNzZWQuXHJcblx0ICovXHJcblx0c3RhdGljIE91dHB1dDogc3RyaW5nID0gXCJcIjtcclxuXHQvKipcclxuXHQgKiBUaGUgZGF0YSB0byBzaGFyZSBhY3Jvc3MgYWxsIHRoZSBkaWZmZXJlbnQgZmlsZXMgYW5kIHBhZ2VzLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBQZXJzaXN0ZW5jZTogYW55ID0ge307XHJcblx0LyoqXHJcblx0ICogVGhlIENTUyBzdHJpbmcgdG8gdXNlIHdoZW4gZWNob2luZyBvdXQgdGhlIENTUyBmaWxlcy5cclxuXHQgKi9cclxuXHRzdGF0aWMgY3NzU3RyOiBzdHJpbmcgPSBgPGxpbmsgcmVsID0gXCJzdHlsZXNoZWV0XCIgaHJlZiA9IFwiJUNTU19GSUxFJVwiIC8+YDtcclxuXHQvKipcclxuXHQgKiBUaGUgQ1NTIGZpbGVzIHRvIHVzZSBpbiB0aGUgY3VycmVudCBwYWdlIGJlaW5nIGdlbmVyYXRlZC5cclxuXHQgKiBcclxuXHQgKiBAdG9kbyBNYWtlIHRoaXMgYSBcInN0cmluZyB8IENTU09iamVjdFwiIGRhdGEgdHlwZSBzbyBpdCBjYW4gYWxzbyBpbmNsdWRlIFxyXG5cdCAqIHRoZSBpbnRlZ3JpdHkgaGFzaGVzIGFzIHdlbGwuXHJcblx0ICovXHJcblx0c3RhdGljIENTUzogc3RyaW5nW10gPSBbXTtcclxuXHQvKipcclxuXHQgKiBUaGUgSmF2YVNjcmlwdCBmaWxlcyB0byB1c2UgaW4gdGhlIGN1cnJlbnQgcGFnZSBiZWluZyBnZW5lcmF0ZWQuXHJcblx0ICogXHJcblx0ICogQHRvZG8gTWFrZSB0aGlzIGEgXCJzdHJpbmcgfCBKU0ZpbGVPYmplY3RcIiBkYXRhIHR5cGUgc28gaXQgY2FuIGFsc28gaW5jbHVkZSBcclxuXHQgKiB0aGUgaW50ZWdyaXR5IGhhc2hlcyBhcyB3ZWxsLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBKU0ZpbGVzOiBhbnlbXSA9IFtdO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBKYXZhU2NyaXB0IGlubGluZSBjb2RlIHRvIHVzZSBpbiB0aGUgY3VycmVudCBwYWdlIGJlaW5nIGdlbmVyYXRlZC5cclxuXHQgKi9cclxuXHRzdGF0aWMgSlNTY3JpcHRzOiBhbnlbXSA9IFtdO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBKYXZhU2NyaXB0IHN0cmluZyB0byB1c2Ugd2hlbiBlY2hvaW5nIG91dCB0aGUgU2NyaXB0cyBmaWxlcy5cclxuXHQgKi9cclxuXHRzdGF0aWMganNGaWxlU3RyOiBzdHJpbmcgPSBgPHNjcmlwdCB0eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmMgPSBcIiVKU19GSUxFJVwiPjwvc2NyaXB0PmA7XHJcblx0LyoqXHJcblx0ICogVGhlIEphdmFTY3JpcHQgc3RyaW5nIHRvIHVzZSB3aGVuIGVjaG9pbmcgb3V0IHRoZSBTY3JpcHRzIGZpbGVzLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBqc1NjcmlwdHNTdHI6IHN0cmluZyA9IGA8c2NyaXB0IHR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiPiVKU19DT0RFJTwvc2NyaXB0PmA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlIGEgZmlsZSBhbmQgZWNobyBvdXQgaXQncyBjb250ZW50cy5cclxuXHQgKi9cclxuXHRzdGF0aWMgYXN5bmMgaW5jbHVkZSAoZmlsZTogSG90RmlsZSB8IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuXHR7XHJcblx0XHRIb3QuZWNobyAoYXdhaXQgSG90LmdldEZpbGUgKGZpbGUpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgY29udGVudCBvZiBhIGZpbGUuXHJcblx0ICovXHJcblx0c3RhdGljIGFzeW5jIGdldEZpbGUgKGZpbGU6IEhvdEZpbGUgfCBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz5cclxuXHR7XHJcblx0XHRsZXQgdGVtcEZpbGU6IEhvdEZpbGUgPSBudWxsO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgKGZpbGUpID09PSBcInN0cmluZ1wiKVxyXG5cdFx0e1xyXG5cdFx0XHR0ZW1wRmlsZSA9IG5ldyBIb3RGaWxlICgpO1xyXG5cclxuXHRcdFx0aWYgKEhvdFByZXByb2Nlc3Nvci5pc1dlYiA9PT0gdHJ1ZSlcclxuXHRcdFx0XHR0ZW1wRmlsZS51cmwgPSBmaWxlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGVtcEZpbGUubG9jYWxGaWxlID0gZmlsZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGVtcEZpbGUgPSBmaWxlO1xyXG5cclxuXHRcdGF3YWl0IHRlbXBGaWxlLmxvYWQgKCk7XHJcblxyXG5cdFx0bGV0IGNvbnRlbnQ6IHN0cmluZyA9IGF3YWl0IHRlbXBGaWxlLnByb2Nlc3MgKCk7XHJcblxyXG5cdFx0cmV0dXJuIChjb250ZW50KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEVjaG8gb3V0IHNvbWUgb3V0cHV0LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBlY2hvIChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0SG90Lk91dHB1dCArPSBtZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRWNobyBvdXQgdGhlIENTUyBmb3IgdGhlIGN1cnJlbnQgcGFnZSBiZWluZyBnZW5lcmF0ZWQuXHJcblx0ICovXHJcblx0c3RhdGljIGRpc3BsYXlDU1MgKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IgKGxldCBpSWR4ID0gMDsgaUlkeCA8IEhvdC5DU1MubGVuZ3RoOyBpSWR4KyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBjc3NGaWxlOiBzdHJpbmcgPSBIb3QuQ1NTW2lJZHhdO1xyXG5cdFx0XHRsZXQgY3NzT3V0OiBzdHJpbmcgPSBIb3QuY3NzU3RyO1xyXG5cclxuXHRcdFx0Y3NzT3V0ID0gY3NzT3V0LnJlcGxhY2UgKC9cXCVDU1NfRklMRVxcJS9nLCBjc3NGaWxlKTtcclxuXHJcblx0XHRcdEhvdC5lY2hvIChjc3NPdXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRWNobyBvdXQgdGhlIEpTIGZpbGVzIGZvciB0aGUgY3VycmVudCBwYWdlIGJlaW5nIGdlbmVyYXRlZC5cclxuXHQgKi9cclxuXHRzdGF0aWMgZGlzcGxheUpTRmlsZXMgKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IgKGxldCBpSWR4ID0gMDsgaUlkeCA8IEhvdC5KU0ZpbGVzLmxlbmd0aDsgaUlkeCsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQganNGaWxlOiBzdHJpbmcgPSBIb3QuSlNGaWxlc1tpSWR4XTtcclxuXHRcdFx0bGV0IGpzRmlsZU91dDogc3RyaW5nID0gSG90LmpzRmlsZVN0cjtcclxuXHJcblx0XHRcdGpzRmlsZU91dCA9IGpzRmlsZU91dC5yZXBsYWNlICgvXFwlSlNfRklMRVxcJS9nLCBqc0ZpbGUpO1xyXG5cclxuXHRcdFx0SG90LmVjaG8gKGpzRmlsZU91dCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBFY2hvIG91dCB0aGUgSlMgc2NyaXB0cyBmb3IgdGhlIGN1cnJlbnQgcGFnZSBiZWluZyBnZW5lcmF0ZWQuXHJcblx0ICovXHJcblx0c3RhdGljIGRpc3BsYXlKU1NjcmlwdHMgKCk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IgKGxldCBpSWR4ID0gMDsgaUlkeCA8IEhvdC5KU1NjcmlwdHMubGVuZ3RoOyBpSWR4KyspXHJcblx0XHR7XHJcblx0XHRcdGxldCBqc1NjcmlwdDogc3RyaW5nID0gSG90LkpTU2NyaXB0c1tpSWR4XTtcclxuXHRcdFx0bGV0IGpzU2NyaXB0T3V0OiBzdHJpbmcgPSBIb3QuanNTY3JpcHRzU3RyO1xyXG5cclxuXHRcdFx0anNTY3JpcHRPdXQgPSBqc1NjcmlwdE91dC5yZXBsYWNlICgvXFwlSlNfQ09ERVxcJS9nLCBqc1NjcmlwdCk7XHJcblxyXG5cdFx0XHRIb3QuZWNobyAoanNTY3JpcHRPdXQpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5cclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5pbXBvcnQgeyBIb3QgfSBmcm9tIFwiLi9Ib3RcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGZpbGUgdG8gcHJvY2Vzcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhvdEZpbGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxyXG5cdCAqL1xyXG5cdG5hbWU/OiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogVGhlIHVybCB0byB0aGUgZmlsZSB0byBnZXQuXHJcblx0ICovXHJcblx0dXJsPzogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBwYXRoIHRvIHRoZSBsb2NhbCBmaWxlIHRvIGdldC5cclxuXHQgKi9cclxuXHRsb2NhbEZpbGU/OiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogVGhlIGNvbnRlbnQgb2YgdGhlIGZpbGUgdG8gcHJvY2Vzcy5cclxuXHQgKi9cclxuXHRjb250ZW50Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQSBmaWxlIHRvIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSG90RmlsZSBpbXBsZW1lbnRzIElIb3RGaWxlXHJcbntcclxuXHQvKipcclxuXHQgKiBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cclxuXHQgKi9cclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogVGhlIHVybCB0byB0aGUgZmlsZSB0byBnZXQuXHJcblx0ICovXHJcblx0dXJsOiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogVGhlIHBhdGggdG8gdGhlIGxvY2FsIGZpbGUgdG8gZ2V0LlxyXG5cdCAqL1xyXG5cdGxvY2FsRmlsZTogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHRvIHByb2Nlc3MuXHJcblx0ICovXHJcblx0Y29udGVudDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoY29weTogSUhvdEZpbGUgPSB7fSlcclxuXHR7XHJcblx0XHR0aGlzLm5hbWUgPSBjb3B5Lm5hbWUgfHwgXCJcIjtcclxuXHRcdHRoaXMudXJsID0gY29weS51cmwgfHwgXCJcIjtcclxuXHRcdHRoaXMubG9jYWxGaWxlID0gY29weS5sb2NhbEZpbGUgfHwgXCJcIjtcclxuXHRcdHRoaXMuY29udGVudCA9IGNvcHkuY29udGVudCB8fCBcIlwiO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHRoZSBjb250ZW50IG9mIHRoaXMgZmlsZS5cclxuXHQgKi9cclxuXHRzZXRDb250ZW50IChjb250ZW50OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgY29udGVudCBvZiB0aGlzIGZpbGUuXHJcblx0ICovXHJcblx0Z2V0Q29udGVudCAoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuICh0aGlzLmNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCBjb250ZW50IGZyb20gYSB1cmwuXHJcblx0ICovXHJcblx0YXN5bmMgbG9hZFVybCAoKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdGxldCByZXM6IGFueSA9IGF3YWl0IGZldGNoICh0aGlzLnVybCk7XHJcblx0XHRsZXQgY29udGVudDogc3RyaW5nID0gYXdhaXQgcmVzLnRleHQgKCk7XHJcblxyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgY29udGVudCBmcm9tIGEgbG9jYWwgZmlsZS5cclxuXHQgKi9cclxuXHRhc3luYyBsb2FkTG9jYWxGaWxlICgpOiBQcm9taXNlPHZvaWQ+XHJcblx0e1xyXG5cdFx0bGV0IHByb21pc2U6IFByb21pc2U8dm9pZD4gPSBuZXcgUHJvbWlzZSAoXHJcblx0XHRcdChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KTogdm9pZCA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZnMucmVhZEZpbGUgKHRoaXMubG9jYWxGaWxlLCAoZXJyOiBOb2RlSlMuRXJybm9FeGNlcHRpb24sIGRhdGE6IEJ1ZmZlcik6IHZvaWQgPT5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKGVyciAhPSBudWxsKVxyXG5cdFx0XHRcdFx0XHRcdHRocm93IGVycjtcclxuXHJcblx0XHRcdFx0XHRcdGxldCBjb250ZW50OiBzdHJpbmcgPSBkYXRhLnRvU3RyaW5nICgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSAoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gKHByb21pc2UpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUuXHJcblx0ICovXHJcblx0YXN5bmMgbG9hZCAoKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnVybCAhPT0gXCJcIilcclxuXHRcdFx0YXdhaXQgdGhpcy5sb2FkVXJsICgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmxvY2FsRmlsZSAhPT0gXCJcIilcclxuXHRcdFx0YXdhaXQgdGhpcy5sb2FkTG9jYWxGaWxlICgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHJvY2VzcyB0aGUgY29udGVudCBpbiB0aGlzIGZpbGUuXHJcblx0ICovXHJcblx0YXN5bmMgcHJvY2VzcyAoKTogUHJvbWlzZTxzdHJpbmc+XHJcblx0e1xyXG5cdFx0bGV0IG91dHB1dDogc3RyaW5nID0gXCJcIjtcclxuXHRcdGxldCByZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cCAoXCIoPzw9XFxcXDxcXFxcKikoW1xcXFxzXFxcXFNdKj8pKD89XFxcXCpcXFxcPilcIiwgXCJnXCIpO1xyXG5cdFx0bGV0IHRoaXNDb250ZW50OiBzdHJpbmcgPSB0aGlzLmNvbnRlbnQ7XHJcblx0XHRsZXQgcmVzdWx0OiBSZWdFeHBFeGVjQXJyYXkgPSByZWdleC5leGVjICh0aGlzQ29udGVudCk7XHJcblx0XHRsZXQgcHJldmlvdXNJbmRleDogbnVtYmVyID0gMDtcclxuXHJcblx0XHQvLyBCZWdpbiBwYXJzaW5nIEphdmFzY3JpcHQgc2VjdGlvbnMuXHJcblx0XHR3aGlsZSAocmVzdWx0ICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGxldCBzdGFydDogbnVtYmVyID0gcmVzdWx0LmluZGV4IC0gMjtcclxuXHRcdFx0bGV0IGVuZDogbnVtYmVyID0gcmVnZXgubGFzdEluZGV4ICsgMjtcclxuXHJcblx0XHRcdC8vIEdldCB0aGUgcHJldmlvdXMgSlMgc2VjdGlvbi5cclxuXHRcdFx0bGV0IHByZXZDb250ZW50OiBzdHJpbmcgPSB0aGlzQ29udGVudC5zdWJzdHIgKHByZXZpb3VzSW5kZXgsIChzdGFydCAtIHByZXZpb3VzSW5kZXgpKTtcclxuXHRcdFx0cHJldmlvdXNJbmRleCA9IGVuZDtcclxuXHJcblx0XHRcdG91dHB1dCArPSBwcmV2Q29udGVudDtcclxuXHJcblx0XHRcdGxldCBjb250ZW50OiBzdHJpbmcgPSBgXHJcblx0XHRcdHZhciBIb3QgPSBhcmd1bWVudHNbMF07XHJcblxyXG5cdFx0XHRhc3luYyBmdW5jdGlvbiBydW5Db250ZW50ICgpXHJcblx0XHRcdHtgO1xyXG5cdFx0XHRjb250ZW50ICs9IHJlc3VsdFswXTtcclxuXHRcdFx0Y29udGVudCArPSBgXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiAocnVuQ29udGVudCAoKS50aGVuICgoKSA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cmV0dXJuICh7IGhvdDogSG90LCBvdXRwdXQ6IEhvdC5PdXRwdXQsIHBlcnNpc3RlbmNlOiBKU09OLnN0cmluZ2lmeSAoSG90LlBlcnNpc3RlbmNlKSB9KTtcclxuXHRcdFx0fSkpO2A7XHJcblxyXG5cdFx0XHQvLy8gQGZpeG1lIFByaW9yIHRvIGV4ZWN1dGlvbiBjb21waWxlIGFueSBUeXBlU2NyaXB0IGFuZCBtYWtlIGl0IEVTNSBjb21wYXRpYmxlLlxyXG5cdFx0XHRsZXQgZnVuYzogRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24gKGNvbnRlbnQpO1xyXG5cdFx0XHRsZXQgcmV0dXJuZWRPdXRwdXQ6IGFueSA9IGF3YWl0IGZ1bmMuYXBwbHkgKHRoaXMsIFtIb3RdKTtcclxuXHJcblx0XHRcdEhvdC5QZXJzaXN0ZW5jZSA9IHJldHVybmVkT3V0cHV0LmhvdC5QZXJzaXN0ZW5jZTtcclxuXHRcdFx0b3V0cHV0ICs9IHJldHVybmVkT3V0cHV0Lm91dHB1dDtcclxuXHJcblx0XHRcdEhvdC5PdXRwdXQgPSBcIlwiO1xyXG5cclxuXHRcdFx0Ly8gTW92ZSBvbiB0byB0aGUgbmV4dCBzZWN0aW9uIHRvIHBhcnNlIGZvciBKYXZhc2NyaXB0LlxyXG5cdFx0XHRyZXN1bHQgPSByZWdleC5leGVjICh0aGlzQ29udGVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQXBwZW5kIHdoYXRldmVyIGVsc2UgaXMgYWZ0ZXIgdGhlIGxhc3QgcGFyc2VkIHNlY3Rpb24uXHJcblx0XHRvdXRwdXQgKz0gdGhpc0NvbnRlbnQuc3Vic3RyIChwcmV2aW91c0luZGV4KTtcclxuXHJcblx0XHRyZXR1cm4gKG91dHB1dCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSG90IH0gZnJvbSBcIi4vSG90XCI7XHJcbmltcG9ydCB7IEhvdEZpbGUgfSBmcm9tIFwiLi9Ib3RGaWxlXCI7XHJcbmltcG9ydCB7IEhvdFByZXByb2Nlc3NvciB9IGZyb20gXCIuL0hvdFByZXByb2Nlc3NvclwiO1xyXG5cclxuLyoqXHJcbiAqIEEgcGFnZSB0byBwcmVwcm9jZXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSG90UGFnZVxyXG57XHJcblx0LyoqXHJcblx0ICogVGhlIHByb2Nlc3NvciB0byB1c2UuXHJcblx0ICovXHJcblx0cHJvY2Vzc29yOiBIb3RQcmVwcm9jZXNzb3I7XHJcblx0LyoqXHJcblx0ICogVGhlIG5hbWUgb2YgdGhlIHBhZ2UuXHJcblx0ICovXHJcblx0bmFtZT86IHN0cmluZztcclxuXHQvKipcclxuXHQgKiBUaGUgcm91dGUgdXNlZCB0byBnZXQgdG8gdGhpcyBwYWdlLlxyXG5cdCAqL1xyXG5cdHJvdXRlPzogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBuYW1lIG9mIHRoZSBwYWdlLiBGaWxlIG9yZGVyaW5nIG1hdHRlcnMgaGVyZS5cclxuXHQgKiBFdmVyeSBmaWxlIGlzIHByb2Nlc3NlZCBpbmNyZW1lbnRhbGx5LlxyXG5cdCAqL1xyXG5cdGZpbGVzPzogSG90RmlsZVtdO1xyXG59XHJcblxyXG4vKipcclxuICogQSBwYWdlIHRvIHByZXByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSG90UGFnZSBpbXBsZW1lbnRzIElIb3RQYWdlXHJcbntcclxuXHQvKipcclxuXHQgKiBUaGUgcHJvY2Vzc29yIHRvIHVzZS5cclxuXHQgKi9cclxuXHRwcm9jZXNzb3I6IEhvdFByZXByb2Nlc3NvcjtcclxuXHQvKipcclxuXHQgKiBUaGUgbmFtZSBvZiB0aGUgcGFnZS5cclxuXHQgKi9cclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0LyoqXHJcblx0ICogVGhlIHJvdXRlIHVzZWQgdG8gZ2V0IHRvIHRoaXMgcGFnZS5cclxuXHQgKi9cclxuXHRyb3V0ZTogc3RyaW5nO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBuYW1lIG9mIHRoZSBwYWdlLiBGaWxlIG9yZGVyaW5nIG1hdHRlcnMgaGVyZS5cclxuXHQgKiBFdmVyeSBmaWxlIGlzIHByb2Nlc3NlZCBpbmNyZW1lbnRhbGx5LlxyXG5cdCAqL1xyXG5cdGZpbGVzOiBIb3RGaWxlW107XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb3B5OiBJSG90UGFnZSB8IEhvdFByZXByb2Nlc3NvcilcclxuXHR7XHJcblx0XHRpZiAoY29weSBpbnN0YW5jZW9mIEhvdFByZXByb2Nlc3NvcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzb3IgPSBjb3B5O1xyXG5cdFx0XHR0aGlzLm5hbWUgPSBcIlwiO1xyXG5cdFx0XHR0aGlzLnJvdXRlID0gXCJcIjtcclxuXHRcdFx0dGhpcy5maWxlcyA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnByb2Nlc3NvciA9IGNvcHkucHJvY2Vzc29yO1xyXG5cdFx0XHR0aGlzLm5hbWUgPSBjb3B5Lm5hbWUgfHwgXCJcIjtcclxuXHRcdFx0dGhpcy5yb3V0ZSA9IGNvcHkucm91dGUgfHwgXCJcIjtcclxuXHRcdFx0dGhpcy5maWxlcyA9IGNvcHkuZmlsZXMgfHwgW107XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgYSBmaWxlIHRvIHByb2Nlc3MuIEl0J3MgcmVjb21tZW5kIHRvIGxvYWQgdGhlIGZpbGUgcHJpb3IgdG8gXHJcblx0ICogYWRkaW5nIGl0IHRvIGEgcGFnZSBpZiBpdCdzIGFib3V0IHRvIGJlIHVzZWQuXHJcblx0ICovXHJcblx0YXN5bmMgYWRkRmlsZSAoZmlsZTogSG90RmlsZSk6IFByb21pc2U8dm9pZD5cclxuXHR7XHJcblx0XHR0aGlzLmZpbGVzLnB1c2ggKGZpbGUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGFsbCBmaWxlcyBpbiB0aGUgcGFnZS4gQ291bGQgZGVjcmVhc2UgcGFnZSBsb2FkaW5nIHBlcmZvcm1hbmNlLlxyXG5cdCAqIEl0J3MgcmVjb21tZW5kIHRvIGxvYWQgdGhlIGZpbGUgcHJpb3IgdG8gYWRkaW5nIGl0IHRvIGEgcGFnZS5cclxuXHQgKi9cclxuXHRhc3luYyBsb2FkIChmaWxlOiBIb3RGaWxlKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdGZvciAobGV0IGlJZHggPSAwOyBpSWR4IDwgdGhpcy5maWxlcy5sZW5ndGg7IGlJZHgrKylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGZpbGU6IEhvdEZpbGUgPSB0aGlzLmZpbGVzW2lJZHhdO1xyXG5cclxuXHRcdFx0YXdhaXQgZmlsZS5sb2FkICgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHJvY2VzcyBhIHBhZ2UgYW5kIGdldCB0aGUgcmVzdWx0LlxyXG5cdCAqL1xyXG5cdGFzeW5jIHByb2Nlc3MgKCk6IFByb21pc2U8c3RyaW5nPlxyXG5cdHtcclxuXHRcdGxldCBvdXRwdXQ6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cdFx0Zm9yIChsZXQgaUlkeCA9IDA7IGlJZHggPCB0aGlzLmZpbGVzLmxlbmd0aDsgaUlkeCsrKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZmlsZTogSG90RmlsZSA9IHRoaXMuZmlsZXNbaUlkeF07XHJcblxyXG5cdFx0XHRIb3QuT3V0cHV0ID0gXCJcIjtcclxuXHJcblx0XHRcdG91dHB1dCArPSBhd2FpdCBmaWxlLnByb2Nlc3MgKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChvdXRwdXQpO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5cclxuaW1wb3J0IHsgSG90UGFnZSB9IGZyb20gXCIuL0hvdFBhZ2VcIjtcclxuaW1wb3J0IHsgSG90RmlsZSB9IGZyb20gXCIuL0hvdEZpbGVcIjtcclxuXHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIGNsYXNzIHRoYXQgaGFuZGxlcyBhbGwgSFRNTCBwcmVwcm9jZXNzaW5nLCB0aGVuIG91dHB1dHMgdGhlIFxyXG4gKiByZXN1bHRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElIb3RQcmVwcm9jZXNzb3Jcclxue1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBwYWdlcyB0aGF0IGNhbiBiZSBjb25zdHJ1Y3RlZC5cclxuXHQgKi9cclxuXHRwYWdlcz86IHsgW25hbWU6IHN0cmluZ106IEhvdFBhZ2UgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIGNsYXNzIHRoYXQgaGFuZGxlcyBhbGwgSFRNTCBwcmVwcm9jZXNzaW5nLCB0aGVuIG91dHB1dHMgdGhlIFxyXG4gKiByZXN1bHRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEhvdFByZXByb2Nlc3NvciBpbXBsZW1lbnRzIElIb3RQcmVwcm9jZXNzb3Jcclxue1xyXG5cdC8qKlxyXG5cdCAqIEluZGljYXRlcyBpZiB0aGlzIGlzIGEgd2ViIGJ1aWxkLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBpc1dlYjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBwYWdlcyB0aGF0IGNhbiBiZSBjb25zdHJ1Y3RlZC5cclxuXHQgKi9cclxuXHRwYWdlczogeyBbbmFtZTogc3RyaW5nXTogSG90UGFnZSB9O1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBwYWdlIGNvbnRlbnQgdG8gdXNlIHdoZW4gLlxyXG5cdCAqL1xyXG5cdHBhZ2VDb250ZW50OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yIChjb3B5OiBJSG90UHJlcHJvY2Vzc29yID0ge30pXHJcblx0e1xyXG5cdFx0dGhpcy5wYWdlcyA9IGNvcHkucGFnZXMgfHwge307XHJcblx0XHR0aGlzLnBhZ2VDb250ZW50ID0gXHJcbmA8IURPQ1RZUEUgaHRtbD5cclxuPGh0bWw+XHJcblxyXG48aGVhZD5cclxuXHQ8dGl0bGU+JXRpdGxlJTwvdGl0bGU+XHJcblxyXG5cdDxzY3JpcHQgdHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCIgc3JjID0gXCIlaG90cHJlcHJvY2Vzc29yX2pzX3NyYyVcIj48L3NjcmlwdD5cclxuXHQ8c2NyaXB0IHR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiPlxyXG5cdFx0dmFyIEhvdFByZXByb2Nlc3NvciA9IEhvdFByZXByb2Nlc3NvcldlYi5Ib3RQcmVwcm9jZXNzb3I7XHJcblx0XHRIb3RQcmVwcm9jZXNzb3IuZGlzcGxheVVybCAoXCIldXJsJVwiKTtcclxuXHQ8L3NjcmlwdD5cclxuPC9oZWFkPlxyXG5cclxuPGJvZHk+XHJcbjwvYm9keT5cclxuXHJcbjwvaHRtbD5gO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGEgcGFnZS5cclxuXHQgKi9cclxuXHRhZGRQYWdlIChwYWdlOiBIb3RQYWdlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucGFnZXNbcGFnZS5uYW1lXSA9IHBhZ2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSBwYWdlIHRvIHByb2Nlc3MuXHJcblx0ICovXHJcblx0Z2V0UGFnZSAocGFnZU5hbWU6IHN0cmluZyk6IEhvdFBhZ2VcclxuXHR7XHJcblx0XHRyZXR1cm4gKHRoaXMucGFnZXNbcGFnZU5hbWVdKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIExvYWQgZnJvbSBhIEhvdFNpdGUuanNvbiBmaWxlLlxyXG5cdCAqL1xyXG5cdGFzeW5jIGxvYWRIb3RTaXRlIChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcblx0e1xyXG5cdFx0bGV0IGpzb25TdHI6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cdFx0aWYgKEhvdFByZXByb2Nlc3Nvci5pc1dlYiA9PT0gdHJ1ZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJlczogYW55ID0gYXdhaXQgZmV0Y2ggKHBhdGgpO1xyXG5cdFx0XHRqc29uU3RyID0gcmVzLnRleHQgKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGpzb25TdHIgPSBhd2FpdCBuZXcgUHJvbWlzZSAoXHJcblx0XHRcdFx0KHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpOiB2b2lkID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZnMucmVhZEZpbGUgKHBhdGgsIChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbiwgZGF0YTogQnVmZmVyKTogdm9pZCA9PlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVyciAhPSBudWxsKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBjb250ZW50OiBzdHJpbmcgPSBkYXRhLnRvU3RyaW5nICgpO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUgKGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQganNvbk9iaiA9IEpTT04ucGFyc2UgKGpzb25TdHIpO1xyXG5cdFx0bGV0IHJvdXRlcyA9IGpzb25PYmpbXCJyb3V0ZXNcIl07XHJcblxyXG5cdFx0Zm9yIChsZXQga2V5IGluIHJvdXRlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJvdXRlID0gcm91dGVzW2tleV07XHJcblx0XHRcdGxldCBmaWxlOiBIb3RGaWxlID0gbmV3IEhvdEZpbGUgKHJvdXRlKTtcclxuXHRcdFx0bGV0IHBhZ2U6IEhvdFBhZ2UgPSBuZXcgSG90UGFnZSAoe1xyXG5cdFx0XHRcdFx0cHJvY2Vzc29yOiB0aGlzLFxyXG5cdFx0XHRcdFx0bmFtZTogcm91dGUubmFtZSB8fCBcIlwiLFxyXG5cdFx0XHRcdFx0cm91dGU6IGtleSxcclxuXHRcdFx0XHRcdGZpbGVzOiBbZmlsZV1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuYWRkUGFnZSAocGFnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgdGhlIEV4cHJlc3Mgcm91dGVzIGZyb20gdGhlIGdpdmVuIHBhZ2VzLiBCZSBzdXJlIHRvIGxvYWQgdGhlIFxyXG5cdCAqIHBhZ2VzIGZpcnN0IGJlZm9yZSBkb2luZyB0aGlzLlxyXG5cdCAqL1xyXG5cdGNyZWF0ZUV4cHJlc3NSb3V0ZXMgKGV4cHJlc3NBcHA6IGFueSwganNTcmNQYXRoOiBzdHJpbmcgPSBcIi4vanMvSG90UHJlcHJvY2Vzc29yLmpzXCIpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yIChsZXQga2V5IGluIHRoaXMucGFnZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwYWdlOiBIb3RQYWdlID0gdGhpcy5wYWdlc1trZXldO1xyXG5cdFx0XHRsZXQgY29udGVudDogc3RyaW5nID0gdGhpcy5wYWdlQ29udGVudDtcclxuXHRcdFx0bGV0IGZpeENvbnRlbnQgPSAodGVtcENvbnRlbnQ6IHN0cmluZykgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZW1wQ29udGVudCA9IHRlbXBDb250ZW50LnJlcGxhY2UgKC9cXCV0aXRsZVxcJS9nLCBwYWdlLm5hbWUpO1xyXG5cdFx0XHRcdFx0dGVtcENvbnRlbnQgPSB0ZW1wQ29udGVudC5yZXBsYWNlICgvXFwlaG90cHJlcHJvY2Vzc29yXFxfanNcXF9zcmNcXCUvZywganNTcmNQYXRoKTtcclxuXHRcdFx0XHRcdHRlbXBDb250ZW50ID0gdGVtcENvbnRlbnQucmVwbGFjZSAoL1xcJXVybFxcJS9nLCBwYWdlLmZpbGVzWzBdLnVybCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuICh0ZW1wQ29udGVudCk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0Y29udGVudCA9IGZpeENvbnRlbnQgKGNvbnRlbnQpO1xyXG5cclxuXHRcdFx0ZXhwcmVzc0FwcC5nZXQgKHBhZ2Uucm91dGUsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmVzLnNlbmQgKGNvbnRlbnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHJvY2VzcyBhIHBhZ2UgYW5kIGdldCB0aGUgcmVzdWx0LlxyXG5cdCAqL1xyXG5cdGFzeW5jIHByb2Nlc3MgKHBhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz5cclxuXHR7XHJcblx0XHRsZXQgcGFnZTogSG90UGFnZSA9IHRoaXMuZ2V0UGFnZSAocGFnZU5hbWUpO1xyXG5cdFx0bGV0IHJlc3VsdDogc3RyaW5nID0gYXdhaXQgcGFnZS5wcm9jZXNzICgpO1xyXG5cclxuXHRcdHJldHVybiAocmVzdWx0KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2Nlc3MgYSBsb2NhbCBmaWxlIGFuZCBnZXQgdGhlIHJlc3VsdC5cclxuXHQgKi9cclxuXHRzdGF0aWMgYXN5bmMgcHJvY2Vzc0xvY2FsRmlsZSAobG9jYWxGaWxlcGF0aDogc3RyaW5nLCBuYW1lOiBzdHJpbmcgPSBsb2NhbEZpbGVwYXRoKTogUHJvbWlzZTxzdHJpbmc+XHJcblx0e1xyXG5cdFx0bGV0IHByb2Nlc3NvcjogSG90UHJlcHJvY2Vzc29yID0gbmV3IEhvdFByZXByb2Nlc3NvciAoKTtcclxuXHRcdGxldCBmaWxlOiBIb3RGaWxlID0gbmV3IEhvdEZpbGUgKHtcclxuXHRcdFx0XCJsb2NhbEZpbGVcIjogbG9jYWxGaWxlcGF0aFxyXG5cdFx0fSk7XHJcblx0XHRhd2FpdCBmaWxlLmxvYWQgKCk7XHJcblx0XHRsZXQgcGFnZTogSG90UGFnZSA9IG5ldyBIb3RQYWdlICh7XHJcblx0XHRcdFx0XCJwcm9jZXNzb3JcIjogcHJvY2Vzc29yLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBuYW1lLFxyXG5cdFx0XHRcdFwiZmlsZXNcIjogW2ZpbGVdXHJcblx0XHRcdH0pO1xyXG5cdFx0cHJvY2Vzc29yLmFkZFBhZ2UgKHBhZ2UpO1xyXG5cdFx0bGV0IHJlc3VsdDogc3RyaW5nID0gYXdhaXQgcHJvY2Vzc29yLnByb2Nlc3MgKG5hbWUpO1xyXG5cclxuXHRcdHJldHVybiAocmVzdWx0KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2Nlc3MgYSB1cmwgYW5kIGdldCB0aGUgcmVzdWx0LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBhc3luYyBwcm9jZXNzVXJsICh1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nID0gdXJsKTogUHJvbWlzZTxzdHJpbmc+XHJcblx0e1xyXG5cdFx0bGV0IHByb2Nlc3NvcjogSG90UHJlcHJvY2Vzc29yID0gbmV3IEhvdFByZXByb2Nlc3NvciAoKTtcclxuXHRcdGxldCBmaWxlOiBIb3RGaWxlID0gbmV3IEhvdEZpbGUgKHtcclxuXHRcdFx0XCJ1cmxcIjogdXJsXHJcblx0XHR9KTtcclxuXHRcdGF3YWl0IGZpbGUubG9hZCAoKTtcclxuXHRcdGxldCBwYWdlOiBIb3RQYWdlID0gbmV3IEhvdFBhZ2UgKHtcclxuXHRcdFx0XHRcInByb2Nlc3NvclwiOiBwcm9jZXNzb3IsXHJcblx0XHRcdFx0XCJuYW1lXCI6IG5hbWUsXHJcblx0XHRcdFx0XCJmaWxlc1wiOiBbZmlsZV1cclxuXHRcdFx0fSk7XHJcblx0XHRwcm9jZXNzb3IuYWRkUGFnZSAocGFnZSk7XHJcblx0XHRsZXQgcmVzdWx0OiBzdHJpbmcgPSBhd2FpdCBwcm9jZXNzb3IucHJvY2VzcyAobmFtZSk7XHJcblxyXG5cdFx0cmV0dXJuIChyZXN1bHQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUHJvY2VzcyBjb250ZW50IGFuZCBnZXQgdGhlIHJlc3VsdC5cclxuXHQgKi9cclxuXHRzdGF0aWMgYXN5bmMgcHJvY2Vzc0NvbnRlbnQgKGNvbnRlbnQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+XHJcblx0e1xyXG5cdFx0bGV0IHByb2Nlc3NvcjogSG90UHJlcHJvY2Vzc29yID0gbmV3IEhvdFByZXByb2Nlc3NvciAoKTtcclxuXHRcdGxldCBmaWxlOiBIb3RGaWxlID0gbmV3IEhvdEZpbGUgKHtcclxuXHRcdFx0XCJjb250ZW50XCI6IGNvbnRlbnRcclxuXHRcdH0pO1xyXG5cdFx0YXdhaXQgZmlsZS5sb2FkICgpO1xyXG5cdFx0bGV0IHBhZ2U6IEhvdFBhZ2UgPSBuZXcgSG90UGFnZSAoe1xyXG5cdFx0XHRcdFwicHJvY2Vzc29yXCI6IHByb2Nlc3NvcixcclxuXHRcdFx0XHRcIm5hbWVcIjogbmFtZSxcclxuXHRcdFx0XHRcImZpbGVzXCI6IFtmaWxlXVxyXG5cdFx0XHR9KTtcclxuXHRcdHByb2Nlc3Nvci5hZGRQYWdlIChwYWdlKTtcclxuXHRcdGxldCByZXN1bHQ6IHN0cmluZyA9IGF3YWl0IHByb2Nlc3Nvci5wcm9jZXNzIChuYW1lKTtcclxuXHJcblx0XHRyZXR1cm4gKHJlc3VsdCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBXaGVuIHRoZSB3aW5kb3cgaGFzIGZpbmlzaGVkIGxvYWRpbmcsIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uLlxyXG5cdCAqIFRoaXMgaXMgbWVhbnQgZm9yIHdlYiBicm93c2VyIHVzZSBvbmx5LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBvblJlYWR5IChyZWFkeUZ1bmM6ICgpID0+IHZvaWQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIilcclxuXHRcdFx0cmVhZHlGdW5jICgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAoXCJsb2FkXCIsIHJlYWR5RnVuYyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXBsYWNlIHRoZSBjdXJyZW50IEhUTUwgcGFnZSB3aXRoIHRoZSBvdXRwdXQuXHJcblx0ICogVGhpcyBpcyBtZWFudCBmb3Igd2ViIGJyb3dzZXIgdXNlIG9ubHkuXHJcblx0ICovXHJcblx0c3RhdGljIHVzZU91dHB1dCAob3V0cHV0OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0ZG9jdW1lbnQub3BlbiAoKTtcclxuXHRcdGRvY3VtZW50LndyaXRlIChvdXRwdXQpO1xyXG5cdFx0ZG9jdW1lbnQuY2xvc2UgKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcm9jZXNzIGFuZCByZXBsYWNlIHRoZSBjdXJyZW50IEhUTUwgcGFnZSB3aXRoIHRoZSBcclxuXHQgKiBob3R0IHNjcmlwdCBmcm9tIHRoZSBnaXZlbiB1cmwuXHJcblx0ICogVGhpcyBpcyBtZWFudCBmb3Igd2ViIGJyb3dzZXIgdXNlIG9ubHkuXHJcblx0ICovXHJcblx0c3RhdGljIGFzeW5jIGRpc3BsYXlVcmwgKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcgPSB1cmwpOiBQcm9taXNlPHZvaWQ+XHJcblx0e1xyXG5cdFx0SG90UHJlcHJvY2Vzc29yLm9uUmVhZHkgKGFzeW5jICgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb3V0cHV0OiBzdHJpbmcgPSBhd2FpdCBIb3RQcmVwcm9jZXNzb3IucHJvY2Vzc1VybCAodXJsLCBuYW1lKTtcclxuXHJcblx0XHRcdFx0SG90UHJlcHJvY2Vzc29yLnVzZU91dHB1dCAob3V0cHV0KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQcm9jZXNzIGFuZCByZXBsYWNlIHRoZSBjdXJyZW50IEhUTUwgcGFnZSB3aXRoIHRoZSBcclxuXHQgKiBob3R0IHNjcmlwdC5cclxuXHQgKiBUaGlzIGlzIG1lYW50IGZvciB3ZWIgYnJvd3NlciB1c2Ugb25seS5cclxuXHQgKi9cclxuXHRzdGF0aWMgYXN5bmMgZGlzcGxheUNvbnRlbnQgKGNvbnRlbnQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG5cdHtcclxuXHRcdEhvdFByZXByb2Nlc3Nvci5vblJlYWR5IChhc3luYyAoKSA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG91dHB1dDogc3RyaW5nID0gYXdhaXQgSG90UHJlcHJvY2Vzc29yLnByb2Nlc3NDb250ZW50IChjb250ZW50LCBuYW1lKTtcclxuXHJcblx0XHRcdFx0SG90UHJlcHJvY2Vzc29yLnVzZU91dHB1dCAob3V0cHV0KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSG90UHJlcHJvY2Vzc29yIH0gZnJvbSBcIi4vSG90UHJlcHJvY2Vzc29yXCI7XHJcblxyXG5Ib3RQcmVwcm9jZXNzb3IuaXNXZWIgPSB0cnVlO1xyXG5cclxuZXhwb3J0IHtcclxuXHRcdEhvdFByZXByb2Nlc3NvclxyXG5cdH07Il0sInNvdXJjZVJvb3QiOiIifQ==