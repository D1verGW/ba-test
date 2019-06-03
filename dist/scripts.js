"use strict";

function _typeof11(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof11 = function _typeof11(obj) { return typeof obj; }; } else { _typeof11 = function _typeof11(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof11(obj); }

function _typeof10(obj) {
  if (typeof Symbol === "function" && _typeof11(Symbol.iterator) === "symbol") {
    _typeof10 = function _typeof10(obj) {
      return _typeof11(obj);
    };
  } else {
    _typeof10 = function _typeof10(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof11(obj);
    };
  }

  return _typeof10(obj);
}

function _typeof9(obj) {
  if (typeof Symbol === "function" && _typeof10(Symbol.iterator) === "symbol") {
    _typeof9 = function _typeof9(obj) {
      return _typeof10(obj);
    };
  } else {
    _typeof9 = function _typeof9(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof10(obj);
    };
  }

  return _typeof9(obj);
}

function _typeof8(obj) {
  if (typeof Symbol === "function" && _typeof9(Symbol.iterator) === "symbol") {
    _typeof8 = function _typeof8(obj) {
      return _typeof9(obj);
    };
  } else {
    _typeof8 = function _typeof8(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof9(obj);
    };
  }

  return _typeof8(obj);
}

function _typeof7(obj) {
  if (typeof Symbol === "function" && _typeof8(Symbol.iterator) === "symbol") {
    _typeof7 = function _typeof7(obj) {
      return _typeof8(obj);
    };
  } else {
    _typeof7 = function _typeof7(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof8(obj);
    };
  }

  return _typeof7(obj);
}

function _typeof6(obj) {
  if (typeof Symbol === "function" && _typeof7(Symbol.iterator) === "symbol") {
    _typeof6 = function _typeof6(obj) {
      return _typeof7(obj);
    };
  } else {
    _typeof6 = function _typeof6(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof7(obj);
    };
  }

  return _typeof6(obj);
}

function _typeof5(obj) {
  if (typeof Symbol === "function" && _typeof6(Symbol.iterator) === "symbol") {
    _typeof5 = function _typeof5(obj) {
      return _typeof6(obj);
    };
  } else {
    _typeof5 = function _typeof5(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof6(obj);
    };
  }

  return _typeof5(obj);
}

function _typeof4(obj) {
  if (typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol") {
    _typeof4 = function _typeof4(obj) {
      return _typeof5(obj);
    };
  } else {
    _typeof4 = function _typeof4(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof5(obj);
    };
  }

  return _typeof4(obj);
}

function _typeof3(obj) {
  if (typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol") {
    _typeof3 = function _typeof3(obj) {
      return _typeof4(obj);
    };
  } else {
    _typeof3 = function _typeof3(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof4(obj);
    };
  }

  return _typeof3(obj);
}

function _typeof2(obj) {
  if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return _typeof3(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof3(obj);
    };
  }

  return _typeof2(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
/** @jsx createElement */
// make polyfills


(function (ctx) {
  Array.prototype.findIndex = Array.prototype.findIndex || function (callback) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    } else if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }

    var list = Object(this); // Makes sures is always has an positive integer as length.

    var length = list.length >>> 0;
    var thisArg = arguments[1];

    for (var i = 0; i < length; i++) {
      if (callback.call(thisArg, list[i], i, list)) {
        return i;
      }
    }

    return -1;
  };

  Array.prototype.find = Array.prototype.find || function (callback) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    } else if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }

    var list = Object(this); // Makes sures is always has an positive integer as length.

    var length = list.length >>> 0;
    var thisArg = arguments[1];

    for (var i = 0; i < length; i++) {
      var element = list[i];

      if (callback.call(thisArg, element, i, list)) {
        return element;
      }
    }
  };

  Object.values = Object.values || function (obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  }; // Mozilla bind polyfill


  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5 internal IsCallable function
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function fNOP() {},
          fBound = function fBound() {
        return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };

      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();
      return fBound;
    };
  }

  if (!document.querySelectorAll) {
    document.querySelectorAll = function (selectors) {
      var style = document.createElement('style'),
          elements = [],
          element;
      document.documentElement.firstChild.appendChild(style);
      document._qsa = [];
      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
      window.scrollBy(0, 0);
      style.parentNode.removeChild(style);

      while (document._qsa.length) {
        element = document._qsa.shift();
        element.style.removeAttribute('x-qsa');
        elements.push(element);
      }

      document._qsa = null;
      return elements;
    };
  }

  if (!document.querySelector) {
    document.querySelector = function (selectors) {
      var elements = document.querySelectorAll(selectors);
      return elements.length ? elements[0] : null;
    };
  } //----------------------------------------------------------------------
  //
  // ECMAScript 5 Polyfills
  //
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  // ES5 15.2 Object Objects
  //----------------------------------------------------------------------
  //
  // ES5 15.2.3 Properties of the Object Constructor
  //
  // ES5 15.2.3.2 Object.getPrototypeOf ( O )
  // From http://ejohn.org/blog/objectgetprototypeof/
  // NOTE: won't work for typical function T() {}; T.prototype = {}; new T; case
  // since the constructor property is destroyed.


  if (!Object.getPrototypeOf) {
    Object.getPrototypeOf = function (o) {
      if (o !== Object(o)) {
        throw TypeError("Object.getPrototypeOf called on non-object");
      }

      return o.__proto__ || o.constructor.prototype || Object.prototype;
    };
  } //    // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )
  //    if (typeof Object.getOwnPropertyDescriptor !== "function") {
  //        Object.getOwnPropertyDescriptor = function (o, name) {
  //            if (o !== Object(o)) { throw TypeError(); }
  //            if (o.hasOwnProperty(name)) {
  //                return {
  //                    value: o[name],
  //                    enumerable: true,
  //                    writable: true,
  //                    configurable: true
  //                };
  //            }
  //        };
  //    }
  // ES5 15.2.3.4 Object.getOwnPropertyNames ( O )


  if (typeof Object.getOwnPropertyNames !== "function") {
    Object.getOwnPropertyNames = function (o) {
      if (o !== Object(o)) {
        throw TypeError("Object.getOwnPropertyNames called on non-object");
      }

      var props = [],
          p;

      for (p in o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          props.push(p);
        }
      }

      return props;
    };
  } // ES5 15.2.3.5 Object.create ( O [, Properties] )


  if (typeof Object.create !== "function") {
    Object.create = function (prototype, properties) {
      if (_typeof(prototype) !== "object") {
        throw TypeError();
      }

      function Ctor() {}

      Ctor.prototype = prototype;
      var o = new Ctor();

      if (prototype) {
        o.constructor = Ctor;
      }

      if (properties !== undefined) {
        if (properties !== Object(properties)) {
          throw TypeError();
        }

        Object.defineProperties(o, properties);
      }

      return o;
    };
  } // ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
  // Partial support for most common case - getters, setters, and values


  (function () {
    if (!Object.defineProperty || !function () {
      try {
        Object.defineProperty({}, 'x', {});
        return true;
      } catch (e) {
        return false;
      }
    }()) {
      var orig = Object.defineProperty;

      Object.defineProperty = function (o, prop, desc) {
        // In IE8 try built-in implementation for defining properties on DOM prototypes.
        if (orig) {
          try {
            return orig(o, prop, desc);
          } catch (e) {}
        }

        if (o !== Object(o)) {
          throw TypeError("Object.defineProperty called on non-object");
        }

        if (Object.prototype.__defineGetter__ && 'get' in desc) {
          Object.prototype.__defineGetter__.call(o, prop, desc.get);
        }

        if (Object.prototype.__defineSetter__ && 'set' in desc) {
          Object.prototype.__defineSetter__.call(o, prop, desc.set);
        }

        if ('value' in desc) {
          o[prop] = desc.value;
        }

        return o;
      };
    }
  })(); // ES 15.2.3.7 Object.defineProperties ( O, Properties )


  if (typeof Object.defineProperties !== "function") {
    Object.defineProperties = function (o, properties) {
      if (o !== Object(o)) {
        throw TypeError("Object.defineProperties called on non-object");
      }

      var name;

      for (name in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, name)) {
          Object.defineProperty(o, name, properties[name]);
        }
      }

      return o;
    };
  } // ES5 15.2.3.14 Object.keys ( O )
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys


  if (!Object.keys) {
    Object.keys = function (o) {
      if (o !== Object(o)) {
        throw TypeError('Object.keys called on non-object');
      }

      var ret = [],
          p;

      for (p in o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          ret.push(p);
        }
      }

      return ret;
    };
  } //----------------------------------------------------------------------
  // ES5 15.3 Function Objects
  //----------------------------------------------------------------------
  //
  // ES5 15.3.4 Properties of the Function Prototype Object
  //
  // ES5 15.3.4.5 Function.prototype.bind ( thisArg [, arg1 [, arg2, ... ]] )
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind


  if (!Function.prototype.bind) {
    Function.prototype.bind = function (o) {
      if (typeof this !== 'function') {
        throw TypeError("Bind must be called on a function");
      }

      var slice = [].slice,
          args = slice.call(arguments, 1),
          self = this,
          bound = function bound() {
        return self.apply(this instanceof nop ? this : o, args.concat(slice.call(arguments)));
      };

      function nop() {}

      nop.prototype = self.prototype;
      bound.prototype = new nop();
      return bound;
    };
  } //----------------------------------------------------------------------
  // ES5 15.4 Array Objects
  //----------------------------------------------------------------------
  //
  // ES5 15.4.3 Properties of the Array Constructor
  //
  // ES5 15.4.3.2 Array.isArray ( arg )
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray


  Array.isArray = Array.isArray || function (o) {
    return Boolean(o && Object.prototype.toString.call(Object(o)) === '[object Array]');
  }; //
  // ES5 15.4.4 Properties of the Array Prototype Object
  //
  // ES5 15.4.4.14 Array.prototype.indexOf ( searchElement [ , fromIndex ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf


  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement
    /*, fromIndex */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (len === 0) {
        return -1;
      }

      var n = 0;

      if (arguments.length > 0) {
        n = Number(arguments[1]);

        if (isNaN(n)) {
          n = 0;
        } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }

      if (n >= len) {
        return -1;
      }

      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }

      return -1;
    };
  } // ES5 15.4.4.15 Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf


  if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function (searchElement
    /*, fromIndex*/
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (len === 0) {
        return -1;
      }

      var n = len;

      if (arguments.length > 1) {
        n = Number(arguments[1]);

        if (n !== n) {
          n = 0;
        } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }

      var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);

      for (; k >= 0; k--) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }

      return -1;
    };
  } // ES5 15.4.4.16 Array.prototype.every ( callbackfn [ , thisArg ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every


  if (!Array.prototype.every) {
    Array.prototype.every = function (fun
    /*, thisp */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof fun !== "function") {
        throw TypeError();
      }

      var thisp = arguments[1],
          i;

      for (i = 0; i < len; i++) {
        if (i in t && !fun.call(thisp, t[i], i, t)) {
          return false;
        }
      }

      return true;
    };
  } // ES5 15.4.4.17 Array.prototype.some ( callbackfn [ , thisArg ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some


  if (!Array.prototype.some) {
    Array.prototype.some = function (fun
    /*, thisp */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof fun !== "function") {
        throw TypeError();
      }

      var thisp = arguments[1],
          i;

      for (i = 0; i < len; i++) {
        if (i in t && fun.call(thisp, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  } // ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach


  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fun
    /*, thisp */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof fun !== "function") {
        throw TypeError();
      }

      var thisp = arguments[1],
          i;

      for (i = 0; i < len; i++) {
        if (i in t) {
          fun.call(thisp, t[i], i, t);
        }
      }
    };
  } // ES5 15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Map


  if (!Array.prototype.map) {
    Array.prototype.map = function (fun
    /*, thisp */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof fun !== "function") {
        throw TypeError();
      }

      var res = [];
      res.length = len;
      var thisp = arguments[1],
          i;

      for (i = 0; i < len; i++) {
        if (i in t) {
          res[i] = fun.call(thisp, t[i], i, t);
        }
      }

      return res;
    };
  } // ES5 15.4.4.20 Array.prototype.filter ( callbackfn [ , thisArg ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Filter


  if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun
    /*, thisp */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof fun !== "function") {
        throw TypeError();
      }

      var res = [];
      var thisp = arguments[1],
          i;

      for (i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i]; // in case fun mutates this

          if (fun.call(thisp, val, i, t)) {
            res.push(val);
          }
        }
      }

      return res;
    };
  } // ES5 15.4.4.21 Array.prototype.reduce ( callbackfn [ , initialValue ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Reduce


  if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (fun
    /*, initialValue */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof fun !== "function") {
        throw TypeError();
      } // no value to return if no initial value and an empty array


      if (len === 0 && arguments.length === 1) {
        throw TypeError();
      }

      var k = 0;
      var accumulator;

      if (arguments.length >= 2) {
        accumulator = arguments[1];
      } else {
        do {
          if (k in t) {
            accumulator = t[k++];
            break;
          } // if array contains no values, no initial value to return


          if (++k >= len) {
            throw TypeError();
          }
        } while (true);
      }

      while (k < len) {
        if (k in t) {
          accumulator = fun.call(undefined, accumulator, t[k], k, t);
        }

        k++;
      }

      return accumulator;
    };
  } // ES5 15.4.4.22 Array.prototype.reduceRight ( callbackfn [, initialValue ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/ReduceRight


  if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function (callbackfn
    /*, initialValue */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof callbackfn !== "function") {
        throw TypeError();
      } // no value to return if no initial value, empty array


      if (len === 0 && arguments.length === 1) {
        throw TypeError();
      }

      var k = len - 1;
      var accumulator;

      if (arguments.length >= 2) {
        accumulator = arguments[1];
      } else {
        do {
          if (k in this) {
            accumulator = this[k--];
            break;
          } // if array contains no values, no initial value to return


          if (--k < 0) {
            throw TypeError();
          }
        } while (true);
      }

      while (k >= 0) {
        if (k in t) {
          accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
        }

        k--;
      }

      return accumulator;
    };
  } //----------------------------------------------------------------------
  // ES5 15.5 String Objects
  //----------------------------------------------------------------------
  //
  // ES5 15.5.4 Properties of the String Prototype Object
  //
  // ES5 15.5.4.20 String.prototype.trim()


  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return String(this).replace(/^\s+/, '').replace(/\s+$/, '');
    };
  } //----------------------------------------------------------------------
  // ES5 15.9 Date Objects
  //----------------------------------------------------------------------
  //
  // ES 15.9.4 Properties of the Date Constructor
  //
  // ES5 15.9.4.4 Date.now ( )
  // From https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/now


  if (!Date.now) {
    Date.now = function now() {
      return Number(new Date());
    };
  } //
  // ES5 15.9.5 Properties of the Date Prototype Object
  //
  // ES5 15.9.4.43 Date.prototype.toISOString ( )
  // Inspired by http://www.json.org/json2.js


  if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = function () {
      function pad2(n) {
        return ('00' + n).slice(-2);
      }

      function pad3(n) {
        return ('000' + n).slice(-3);
      }

      return this.getUTCFullYear() + '-' + pad2(this.getUTCMonth() + 1) + '-' + pad2(this.getUTCDate()) + 'T' + pad2(this.getUTCHours()) + ':' + pad2(this.getUTCMinutes()) + ':' + pad2(this.getUTCSeconds()) + '.' + pad3(this.getUTCMilliseconds()) + 'Z';
    };
  }

  if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (search) {
      var d = document,
          elements,
          pattern,
          i,
          results = [];

      if (d.querySelectorAll) {
        // IE8
        return d.querySelectorAll("." + search);
      }

      if (d.evaluate) {
        // IE6, IE7
        pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
        elements = d.evaluate(pattern, d, null, 0, null);

        while (i = elements.iterateNext()) {
          results.push(i);
        }
      } else {
        elements = d.getElementsByTagName("*");
        pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");

        for (i = 0; i < elements.length; i++) {
          if (pattern.test(elements[i].className)) {
            results.push(elements[i]);
          }
        }
      }

      return results;
    };
  }
})(window);

function createElement(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (type.call) {
    return type(props, children);
  }

  var childs = [];
  children && children.map(function (child) {
    if (Array.isArray(child)) {
      var _childs;

      childs = (_childs = childs).concat.apply(_childs, _toConsumableArray(child));
    } else {
      childs.push(child);
    }
  });
  return {
    type: type,
    props: props || {},
    children: childs
  };
}

var VDom =
/*#__PURE__*/
function () {
  function VDom() {
    _classCallCheck(this, VDom);
  }

  _createClass(VDom, null, [{
    key: "setBooleanProp",
    value: function setBooleanProp($target, name, value) {
      if (value) {
        $target.setAttribute(name, value);
        $target[name] = true;
      } else {
        $target[name] = false;
      }
    }
  }, {
    key: "removeBooleanProp",
    value: function removeBooleanProp($target, name) {
      $target.removeAttribute(name);
      $target[name] = false;
    }
  }, {
    key: "isEventProp",
    value: function isEventProp(name) {
      return /^on/.test(name);
    }
  }, {
    key: "extractEventName",
    value: function extractEventName(name) {
      return name.slice(2).toLowerCase();
    }
  }, {
    key: "isCustomProp",
    value: function isCustomProp(name) {
      return VDom.isEventProp(name) || name === "forceUpdate";
    }
  }, {
    key: "setProp",
    value: function setProp($target, name, value) {
      if (VDom.isCustomProp(name)) {
        return;
      } else if (name === "className") {
        $target.setAttribute("class", value);
      } else if (typeof value === "boolean") {
        VDom.setBooleanProp($target, name, value);
      } else {
        $target.setAttribute(name, value);
      }
    }
  }, {
    key: "removeProp",
    value: function removeProp($target, name, value) {
      if (VDom.isCustomProp(name)) {
        return;
      } else if (name === "className") {
        $target.removeAttribute("class");
      } else if (typeof value === "boolean") {
        VDom.removeBooleanProp($target, name);
      } else {
        $target.removeAttribute(name);
      }
    }
  }, {
    key: "setProps",
    value: function setProps($target, props) {
      Object.keys(props).forEach(function (name) {
        VDom.setProp($target, name, props[name]);
      });
    }
  }, {
    key: "updateProp",
    value: function updateProp($target, name, newVal, oldVal) {
      if (!newVal) {
        VDom.removeProp($target, name, oldVal);
      } else if (!oldVal || newVal !== oldVal) {
        VDom.setProp($target, name, newVal);
      }
    }
  }, {
    key: "updateProps",
    value: function updateProps($target, newProps) {
      var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var props = _extends({}, newProps, oldProps);

      Object.keys(props).forEach(function (name) {
        VDom.updateProp($target, name, newProps[name], oldProps[name]);
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners($target, props) {
      Object.keys(props).forEach(function (name) {
        if (VDom.isEventProp(name)) {
          $target.addEventListener(VDom.extractEventName(name), props[name]);
        }
      });
    }
  }, {
    key: "createElement",
    value: function createElement(node) {
      if (typeof node === "string") {
        return document.createTextNode(node);
      }

      var $el = document.createElement(node.type);
      VDom.setProps($el, node.props);
      VDom.addEventListeners($el, node.props);
      node.children.map(VDom.createElement).forEach($el.appendChild.bind($el));
      return $el;
    }
  }, {
    key: "changed",
    value: function changed(node1, node2) {
      return _typeof(node1) !== _typeof(node2) || typeof node1 === "string" && node1 !== node2 || node1.type !== node2.type || node1.props && node1.props.forceUpdate || document.documentMode || /Edge/.test(navigator.userAgent);
    }
  }, {
    key: "updateElement",
    value: function updateElement($parent, newNode, oldNode) {
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var domNode = $parent.childNodes[index];

      if (!oldNode) {
        newNode && $parent.appendChild(VDom.createElement(newNode));
        return;
      }

      if (!newNode) {
        domNode && $parent.removeChild(domNode);
        return;
      }

      if (VDom.changed(oldNode, newNode)) {
        domNode ? $parent.replaceChild(VDom.createElement(newNode), domNode) : $parent.appendChild(VDom.createElement(newNode));
        return;
      }

      if (typeof newNode !== "string") {
        VDom.updateProps(domNode, newNode.props, oldNode.props);

        for (var i = Math.max(oldNode.children.length, newNode.children.length) - 1; i >= 0; i--) {
          VDom.updateElement(domNode, newNode.children[i], oldNode.children[i], i);
        }
      }
    }
  }]);

  return VDom;
}();

var ObservableObject = function ObservableObject(_obj) {
  var _this = this;

  _classCallCheck(this, ObservableObject);

  _defineProperty(this, "observe", function (property, handler) {
    if (!_this.handlers[property]) _this.handlers[property] = [];

    _this.handlers[property].push(handler);

    return handler;
  });

  _defineProperty(this, "forgot", function (property, handler) {
    if (!_this.handlers[property]) _this.handlers[property] = [];

    var indexOfHandler = _this.handlers[property].indexOf(handler);

    if (indexOfHandler === -1) return;

    _this.handlers[property].splice(indexOfHandler, 1);
  });

  _defineProperty(this, "emitChange", function (_ref) {
    var key = _ref.key,
        newValue = _ref.newValue,
        prevValue = _ref.prevValue;
    if (!_this.handlers[key] || _this.handlers[key].length < 1) return;

    _this.handlers[key].forEach(function (signalHandler) {
      return signalHandler({
        newValue: newValue,
        prevValue: prevValue
      });
    });
  });

  _defineProperty(this, "makeReactive", function (obj, key) {
    var val = obj[key];
    Object.defineProperty(obj, key, {
      get: function get() {
        return val;
      },
      set: function set(newValue) {
        var prevValue = val;
        val = newValue;
        this.emitChange({
          key: key,
          newValue: newValue,
          prevValue: prevValue
        });
      }
    });
    return val;
  });

  _defineProperty(this, "observeData", function (obj) {
    Object.keys(obj).forEach(function (key) {
      _this.makeReactive(obj, key);
    });
    return obj;
  });

  this.handlers = {};
  return _extends(this.observeData(_obj), this);
};

var userSchema = {
  ID: "id",
  NAME: "name",
  USERNAME: "username",
  EMAIL: "email",
  ADDRESS: {
    STREET: "street",
    SUITE: "suite",
    CITY: "city",
    ZIPCODE: "zipcode",
    GEO: {
      LAT: "lat",
      LNG: "lng"
    }
  },
  PHONE: "phone",
  WEBSITE: "website",
  COMPANY: {
    NAME: "name",
    CATCH_PHRASE: "catchPhrase",
    BS: "bs"
  }
};

function sortingAndRetrieveArrayFromObject(_ref2) {
  var obj = _ref2.obj,
      sortingFunc = _ref2.sortingFunc,
      isReverse = _ref2.isReverse;
  var arrFromObj = obj ? Object.values(obj) : [];
  var sortedArr = sortingFunc ? arrFromObj.sort(sortingFunc) : arrFromObj;
  return isReverse ? sortedArr.reverse() : sortedArr;
} // dirty function
// Unstable sorting with modification possibility
// TODO: refactor this by getSortCondition(condition) => userFieldForSorting


function getSortFunction(sortBy) {
  switch (sortBy) {
    case "":
      {
        return function () {
          return 0;
        };
      }

    case "name":
      {
        return function (user, nextUser) {
          return user[userSchema.NAME] > nextUser[userSchema.NAME] ? 1 : -1;
        };
      }

    case "username":
      {
        return function (user, nextUser) {
          return user[userSchema.USERNAME] > nextUser[userSchema.USERNAME] ? 1 : -1;
        };
      }

    case "email":
      {
        return function (user, nextUser) {
          return user[userSchema.EMAIL] > nextUser[userSchema.EMAIL] ? 1 : -1;
        };
      }

    case "website":
      {
        return function (user, nextUser) {
          return user[userSchema.WEBSITE] > nextUser[userSchema.WEBSITE] ? 1 : -1;
        };
      }

    default:
      {
        return function () {
          return 0;
        };
      }
  }
}

var obj = new ObservableObject({
  users: [],
  isReverseSort: false,
  sortCondition: "",
  sortedUsers: [],
  dataLoading: {
    process: false,
    success: true,
    error: null
  },
  modalUserId: undefined,
  tableVDom: undefined,
  modalVDom: undefined,
  tableContentPlaceholderVDom: undefined
});
obj.observe("users", function (_ref3) {
  var newValue = _ref3.newValue;
  obj.sortedUsers = sortingAndRetrieveArrayFromObject({
    obj: newValue,
    sortingFunc: getSortFunction(obj.sortCondition),
    isReverse: obj.isReverseSort
  });
});
obj.observe("modalUserId", function (_ref4) {
  var newValue = _ref4.newValue;
  var userId = newValue;
  var userInfo = obj.users.find(function (user) {
    return user.id === userId;
  });
  userInfo && showModal(function () {
    return createElement(ModalUserInfo, {
      user: userInfo
    });
  });
});
obj.observe("sortedUsers", function () {
  obj.tableVDom = createElement(Table, obj);
});
obj.observe("dataLoading", function () {
  obj.tableVDom = createElement(Table, obj);
});
obj.observe("sortCondition", function (_ref5) {
  var newValue = _ref5.newValue,
      prevValue = _ref5.prevValue;

  if (newValue !== prevValue) {
    obj.isReverseSort = false;
    obj.sortedUsers = obj.sortedUsers.sort(getSortFunction(newValue));
  } else {
    obj.isReverseSort = !obj.isReverseSort;
    obj.sortedUsers = obj.sortedUsers.reverse();
  }
});
obj.observe("tableVDom", function (_ref6) {
  var newValue = _ref6.newValue,
      prevValue = _ref6.prevValue;
  VDom.updateElement(document.querySelector(".user-table-wrap"), newValue, prevValue);
});
obj.observe("modalVDom", function (_ref7) {
  var newValue = _ref7.newValue,
      prevValue = _ref7.prevValue;
  VDom.updateElement(document.querySelector(".modal-wrap"), newValue, prevValue);
});

function getNextUID() {
  var maxID = obj.users.reduce(function (maxID, _ref8) {
    var id = _ref8.id;
    return maxID > id ? maxID : id;
  }, 0);
  return maxID + 1;
}

function checkUserEqualToSchema(user) {
  var isNotUndefined = function isNotUndefined(val) {
    return typeof val !== "undefined";
  };

  return isNotUndefined(user.id) && isNotUndefined(user.name) && isNotUndefined(user.username) && isNotUndefined(user.website) && isNotUndefined(user.address) && isNotUndefined(user.address.city) && isNotUndefined(user.address.zipcode) && isNotUndefined(user.address.street);
}

function addUserToUsers(user) {
  obj.users = [].concat(_toConsumableArray(obj.users), [user]);
}

function deleteUserById(id) {
  var userIndex = obj.users.findIndex(function (user) {
    return user.id === id;
  });
  if (userIndex !== -1) obj.users.splice(userIndex, 1); // trigger 'set' method

  obj.users = _toConsumableArray(obj.users);
}

function rmOpenModalClass() {
  document.querySelector("#app").className = '';
}

function showModal(modalComponentRenderer) {
  obj.modalVDom = modalComponentRenderer();
  document.querySelector("#app").className = !!obj.modalVDom ? 'open-modal' : '';
}

function hideModal() {
  obj.modalUserId = undefined;
  obj.modalVDom = undefined;
  rmOpenModalClass();
}

function setModalUserId(id) {
  obj.modalUserId = Number(id);
}

function setSortCondition(condition) {
  obj.sortCondition = condition;
}

function AddUserBtn() {
  return createElement("button", {
    className: "open-add-user-modal-btn",
    onClick: function onClick() {
      return showModal(function () {
        return createElement(ModalAddUserComponent, null);
      });
    }
  }, "Add user");
}

function UserTableRow(user) {
  var id = user.id,
      name = user.name,
      username = user.username,
      email = user.email,
      website = user.website;
  return createElement("div", {
    className: "user"
  }, createElement(UserField, {
    fieldName: "name",
    content: name
  }), createElement(UserField, {
    fieldName: "username",
    content: username
  }), createElement(UserField, {
    fieldName: "email",
    content: email
  }), createElement(UserField, {
    fieldName: "website",
    content: website
  }), createElement("div", {
    className: "show-user-modal-button-container",
    onClick: setModalUserId.bind(null, id),
    forceUpdate: true
  }));
}

function ModalUserInfo(_ref9) {
  var user = _ref9.user;
  var id = user.id,
      name = user.name,
      username = user.username,
      email = user.email,
      website = user.website,
      _user$address = user.address,
      street = _user$address.street,
      city = _user$address.city,
      zipcode = _user$address.zipcode;

  var deleteUserHandler = function deleteUserHandler() {
    deleteUserById(id);
    hideModal();
  };

  return createElement(Modal, null, createElement(ModalRowComponent, {
    title: "Name",
    value: name
  }), createElement(ModalRowComponent, {
    title: "Username",
    value: username
  }), createElement(ModalRowComponent, {
    title: "Email",
    value: email
  }), createElement(ModalRowComponent, {
    title: "Website",
    value: website
  }), createElement(ModalRowComponent, {
    title: "Street",
    value: street
  }), createElement(ModalRowComponent, {
    title: "City",
    value: city
  }), createElement(ModalRowComponent, {
    title: "Zipcode",
    value: zipcode
  }), createElement("button", {
    className: "modal-btn delete-btn",
    onClick: deleteUserHandler,
    forceUpdate: true
  }, createElement("span", null, "Delete user")));
}

function ModalAddUserComponent() {
  return createElement(Modal, {
    className: "user-data-inputs--modal"
  }, createElement(AddUserContainer, null));
}

function createInputIdByTitle(title) {
  return "".concat(title, "-input");
}

function UserDataInput(_ref10) {
  var _ref10$type = _ref10.type,
      type = _ref10$type === void 0 ? "text" : _ref10$type,
      placeholder = _ref10.placeholder,
      id = _ref10.id,
      title = _ref10.title,
      _ref10$required = _ref10.required,
      required = _ref10$required === void 0 ? "true" : _ref10$required;

  var _placeholder = placeholder || "Type ".concat(title, " here");

  var _id = typeof id !== "undefined" || createInputIdByTitle(title);

  return createElement("input", {
    type: type,
    placeholder: _placeholder,
    id: _id,
    required: required,
    autoComplete: "new-password",
    "data-title": title,
    forseUpdate: true
  });
}

function AddUserContainer() {
  var inputs = [{
    title: "name"
  }, {
    title: "userName"
  }, {
    title: "email",
    type: "email"
  }, {
    title: "website",
    type: "url"
  }, {
    title: "street"
  }, {
    title: "city"
  }, {
    title: "zipcode",
    type: "number"
  }];

  var saveUserHandler = function saveUserHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    var inputItemIds = inputs.map(function (_ref11) {
      var title = _ref11.title;
      return createInputIdByTitle(title);
    });
    var inputElements = inputItemIds.map(function (id) {
      return document.querySelector("#".concat(id));
    });
    if (inputElements.length !== inputItemIds.length) throw new Error("Don't found all inputs");

    var inputValues = _toConsumableArray(inputElements).map(function (elem) {
      return {
        type: elem.dataset.title,
        value: elem.value
      };
    });

    var userData = {};
    inputValues.forEach(function (_ref12) {
      var type = _ref12.type,
          value = _ref12.value;
      userData[type] = value;
    });
    var user = {
      id: getNextUID(),
      name: userData.name,
      username: userData.userName,
      email: userData.email,
      website: userData.website,
      address: {
        street: userData.street,
        city: userData.city,
        zipcode: userData.zipcode
      }
    };

    if (checkUserEqualToSchema(user)) {
      addUserToUsers(user);
    } else {
      throw new Error("User ".concat(JSON.stringify(user), " is not equal as user model"));
    }

    hideModal();
  };

  return createElement("form", {
    className: "user-data-inputs",
    onSubmit: saveUserHandler
  }, inputs.map(function (input) {
    return createElement(ModalRowComponent, {
      title: input.title,
      value: createElement(UserDataInput, input)
    });
  }), createElement("button", {
    type: "submit",
    className: "modal-btn save-btn"
  }, createElement("span", null, "Save user")));
}

function UserField(_ref13) {
  var fieldName = _ref13.fieldName,
      content = _ref13.content,
      onClick = _ref13.onClick;

  var props = _objectSpread({}, onClick ? {
    onClick: onClick
  } : {});

  return createElement("div", _extends({
    className: "title wrap ".concat(fieldName)
  }, props), createElement("div", {
    className: "content"
  }, content));
}

function Modal(props, children) {
  return createElement("div", {
    className: "".concat(props && props.className || "", " modal"),
    onClick: hideModal
  }, createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, createElement("div", {
    className: "close-modal"
  }, createElement("div", {
    className: "close-btn",
    onClick: hideModal
  }, "\xD7")), children));
}

function ModalRowComponent(_ref14) {
  var title = _ref14.title,
      value = _ref14.value;
  return createElement("div", {
    className: "modal-info"
  }, createElement("span", {
    className: "title"
  }, title), createElement("span", {
    className: "value"
  }, value));
}

function TableHeader(_ref15) {
  var isReverseSort = _ref15.isReverseSort;
  var fields = ["name", "username", "email", "website"];
  return createElement("div", {
    className: "user header",
    "data-sort-reverse": isReverseSort
  }, fields.map(function (field) {
    return createElement(UserField, {
      fieldName: field,
      content: field.toUpperCase(),
      onClick: setSortCondition.bind(null, field)
    });
  }));
}

function TableContent(state) {
  var sortedUsers = state.sortedUsers;
  return createElement("div", {
    className: "user-table-content"
  }, sortedUsers.map(function (user) {
    return UserTableRow(user);
  }));
}

function EmptyUsersRow(state) {
  var dataLoading = state.dataLoading,
      sortedUsers = state.sortedUsers;

  var NoUsersComponent = function NoUsersComponent() {
    return createElement("div", {
      className: "user no-users-placeholder"
    }, createElement("span", null, "No one users for showing."));
  };

  var PreloaderComponent = function PreloaderComponent() {
    return createElement("div", {
      className: "user no-users-placeholder"
    }, createElement("div", {
      className: "preloader"
    }, createElement("div", null, createElement("div", null, createElement("div", null, createElement("div", null))))));
  };

  var ErrorComponent = function ErrorComponent(_ref16) {
    var error = _ref16.error;
    return createElement("div", {
      className: "user no-users-placeholder"
    }, createElement("span", null, error.toString ? error.toString() : String(error)));
  };

  if (dataLoading.success) {
    return !sortedUsers.length ? createElement(NoUsersComponent, null) : null;
  }

  if (dataLoading.process) {
    return createElement(PreloaderComponent, null);
  }

  if (dataLoading.error) {
    return createElement(ErrorComponent, {
      error: dataLoading.error
    });
  }
}

function Table(state) {
  return createElement("div", {
    className: "user-table",
    "data-sort-condition": state.sortCondition
  }, createElement(AddUserBtn, null), createElement(TableHeader, state), state.sortedUsers.length ? createElement(TableContent, state) : createElement(EmptyUsersRow, state));
}

function App() {
  return createElement("div", {
    id: "app"
  }, createElement("div", {
    className: "control-elements-wrap"
  }), createElement("div", {
    className: "user-table-wrap"
  }), createElement("div", {
    className: "modal-wrap"
  }));
}

function loadUsersData(usersApiHref) {
  obj.dataLoading = {
    process: true,
    success: false,
    error: null
  };

  var generateDataLoadingError = function generateDataLoadingError(text) {
    return {
      process: false,
      success: false,
      error: text
    };
  };

  var XHR = "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
  var xhr = new XHR();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', usersApiHref, true);

  xhr.onload = function () {
    if (xhr.status >= 400 && xhr.status <= 499) {
      obj.dataLoading = generateDataLoadingError("Fail on fetching users: URL api is wrong or other client error with code ".concat(xhr.status, "."));
      return;
    }

    if (xhr.status >= 300 && xhr.status <= 399) {
      obj.dataLoading = generateDataLoadingError("Fail on fetching users: redirect error, code: ".concat(xhr.status, "."));
      return;
    }

    var users = JSON.parse(xhr.responseText);

    var _users = _toConsumableArray(users);

    var isAllUsersEqualToUserSchema = _users.length && !_users.some(function (user) {
      return !checkUserEqualToSchema(user);
    });

    if (isAllUsersEqualToUserSchema) {
      obj.dataLoading = {
        process: false,
        success: true,
        error: null
      };
      obj.users = users;
      obj.sortCondition = 'name';
    } else {
      obj.dataLoading = generateDataLoadingError("Fail on fetching users: some user not equal to user schema.");
    }
  };

  xhr.onerror = function (err) {
    if (xhr.status === 0) {
      obj.dataLoading = generateDataLoadingError("Fail on fetching users: disconnect from web.");
      return;
    }

    if (xhr.status >= 500) {
      obj.dataLoading = generateDataLoadingError("Fail on fetching users: server error with code ".concat(xhr.status));
      return;
    }

    obj.dataLoading = obj.dataLoading = generateDataLoadingError("Fail on fetching users, status code: ".concat(err.target.status));
  };

  xhr.send(null);
}

VDom.updateElement(document.getElementById("app-wrap"), createElement(App, null));
obj.tableVDom = createElement(Table, obj);
loadUsersData("https://jsonplaceholder.typicode.com/users");
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    hideModal();
  }
}, false);