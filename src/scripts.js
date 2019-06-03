/** @jsx createElement */
const createElement = function (type, props, ...children) {
  if (type.call) {
    return type(props, children);
  }
  let childs = [];
  children && children.map(child => {
    if (Array.isArray(child)) {
      childs = childs.concat(...child);
    } else {
      childs.push(child);
    }
  });
  return {
    type,
    props: props || {},
    children: childs
  };
};

class VDom {
  static setBooleanProp($target, name, value) {
    if (value) {
      $target.setAttribute(name, value);
      $target[name] = true;
    } else {
      $target[name] = false;
    }
  }
  
  static removeBooleanProp($target, name) {
    $target.removeAttribute(name);
    $target[name] = false;
  }
  
  static isEventProp(name) {
    return /^on/.test(name);
  }
  
  static extractEventName(name) {
    return name.slice(2).toLowerCase();
  }
  
  static isCustomProp(name) {
    return VDom.isEventProp(name) || name === "forceUpdate";
  }
  
  static setProp($target, name, value) {
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
  
  static removeProp($target, name, value) {
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
  
  static setProps($target, props) {
    Object.keys(props).forEach(name => {
      VDom.setProp($target, name, props[name]);
    });
  }
  
  static updateProp($target, name, newVal, oldVal) {
    if (!newVal) {
      VDom.removeProp($target, name, oldVal);
    } else if (!oldVal || newVal !== oldVal) {
      VDom.setProp($target, name, newVal);
    }
  }
  
  static updateProps($target, newProps, oldProps = {}) {
    const props = Object.assign({}, newProps, oldProps);
    Object.keys(props).forEach(name => {
      VDom.updateProp($target, name, newProps[name], oldProps[name]);
    });
  }
  
  static addEventListeners($target, props) {
    Object.keys(props).forEach(name => {
      if (VDom.isEventProp(name)) {
        $target.addEventListener(
          VDom.extractEventName(name),
          props[name]
        );
      }
    });
  }
  
  static createElement(node) {
    if (typeof node === "string") {
      return document.createTextNode(node);
    }
    
    const $el = document.createElement(node.type);
    VDom.setProps($el, node.props);
    VDom.addEventListeners($el, node.props);
    node.children
      .map(VDom.createElement)
      .forEach($el.appendChild.bind($el));
    return $el;
  }
  
  static changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
      typeof node1 === "string" && node1 !== node2 ||
      node1.type !== node2.type ||
      node1.props && node1.props.forceUpdate || document.documentMode || /Edge/.test(navigator.userAgent);
  };
  
  static updateElement($parent, newNode, oldNode, index = 0) {
    const domNode = $parent.childNodes[index];
    if (!oldNode) {
      newNode && $parent.appendChild(VDom.createElement(newNode));
      return;
    }
    if (!newNode) {
      domNode && $parent.removeChild(domNode);
      return;
    }
    if (VDom.changed(oldNode, newNode)) {
      domNode ? $parent.replaceChild(
        VDom.createElement(newNode),
        domNode
      ) : $parent.appendChild(VDom.createElement(newNode));
      return;
    }
    if (typeof newNode !== "string") {
      VDom.updateProps(domNode, newNode.props, oldNode.props);
      for (
        let i = Math.max(oldNode.children.length, newNode.children.length) - 1;
        i >= 0;
        i--
      ) {
        VDom.updateElement(
          domNode,
          newNode.children[i],
          oldNode.children[i],
          i
        );
      }
    }
  }
}
class ObservableObject {
  observe = (property, handler) => {
    if (!this.handlers[property]) this.handlers[property] = [];
    
    this.handlers[property].push(handler);
    return handler;
  };
  forgot = (property, handler) => {
    if (!this.handlers[property]) this.handlers[property] = [];
    const indexOfHandler = this.handlers[property].indexOf(handler);
    if (indexOfHandler === -1) return;
    
    this.handlers[property].splice(indexOfHandler, 1);
  };
  emitChange = ({ key, newValue, prevValue }) => {
    if (!this.handlers[key] || this.handlers[key].length < 1) return;
    
    this.handlers[key].forEach(signalHandler => signalHandler({ newValue, prevValue }));
  };
  makeReactive = (obj, key) => {
    let val = obj[key];
    
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },
      set(newValue) {
        const prevValue = val;
        val = newValue;
        this.emitChange({ key, newValue, prevValue });
      }
    });
    
    return val;
  };
  observeData = (obj) => {
    Object.keys(obj).forEach((key) => {
      this.makeReactive(obj, key);
    });
    return obj;
  };
  
  constructor(obj) {
    this.handlers = {};
    return Object.assign(this.observeData(obj), this);
  }
}
class Utils {
    static sortingAndRetrieveArrayFromObject({ obj, sortingFunc, isReverse }) {
        const arrFromObj = obj ? Object.values(obj) : [];
        const sortedArr = sortingFunc ? arrFromObj.sort(sortingFunc) : arrFromObj;
        return isReverse ? sortedArr.reverse() : sortedArr;
    }
    static getSortFunction(sortBy) {
        switch (sortBy) {
            case "name": {
                return (user, nextUser) => user.name > nextUser.name ? 1 : -1;
            }
            case "username": {
                return (user, nextUser) => user.username > nextUser.username ? 1 : -1;
            }
            case "email": {
                return (user, nextUser) => user.email > nextUser.email ? 1 : -1;
            }
            case "website": {
                return (user, nextUser) => user.website > nextUser.website ? 1 : -1;
            }
            default: {
                return () => 0;
            }
        }
    }
    static checkUserEqualToSchema(user) {
        const isNotUndefined = (val) => typeof val !== "undefined";
        return isNotUndefined(user.id)
            && isNotUndefined(user.name)
            && isNotUndefined(user.username)
            && isNotUndefined(user.website)
            && isNotUndefined(user.address)
            && isNotUndefined(user.address.city)
            && isNotUndefined(user.address.zipcode)
            && isNotUndefined(user.address.street);
    }
    static rmOpenModalClass() {
        document.querySelector("#app").className = '';
    }
    static createInputIdByTitle(title) {
        return `${title}-input`;
    }
}
class App {
    constructor(){
        this.reactiveObject = new ObservableObject({
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
        VDom.updateElement(document.getElementById("app-wrap"), <AppComponent/>);
    
        this.getNextUID = this.getNextUID.bind(this);
        this.addUserToUsers = this.addUserToUsers.bind(this);
        this.deleteUserById = this.deleteUserById.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.setModalUserId = this.setModalUserId.bind(this);
        this.setSortCondition = this.setSortCondition.bind(this);
    }
    
    getNextUID() {
        const maxID = this.reactiveObject.users.reduce((maxID, { id }) => {
            return maxID > id ? maxID : id;
        }, 0);
        return maxID + 1;
    }
    addUserToUsers(user) {
        this.reactiveObject.users = [...this.reactiveObject.users, user];
    }
    deleteUserById(id) {
        const userIndex = this.reactiveObject.users.findIndex(user => user.id === id);
        if (userIndex !== -1) this.reactiveObject.users.splice(userIndex, 1);
        // trigger 'set' method
        this.reactiveObject.users = [...this.reactiveObject.users];
    }
    showModal(modalComponentRenderer) {
        this.reactiveObject.modalVDom = modalComponentRenderer();
        document.querySelector("#app").className = !!this.reactiveObject.modalVDom ? 'open-modal' : '';
    }
    hideModal() {
        this.reactiveObject.modalUserId = undefined;
        this.reactiveObject.modalVDom = undefined;
        Utils.rmOpenModalClass();
    }
    setModalUserId(id) {
        this.reactiveObject.modalUserId = Number(id);
    }
    setSortCondition(condition) {
        this.reactiveObject.sortCondition = condition;
    }
    loadUsersData(usersApiHref) {
        this.reactiveObject.dataLoading = {
            process: true,
            success: false,
            error: null
        };
        const generateDataLoadingError = (text) => {
            return {
                process: false,
                success: false,
                error: text
            };
        };
        const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        const xhr = new XHR();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', usersApiHref, true);
        xhr.onload  = () => {
            if (xhr.status >= 400 && xhr.status <= 499) {
                this.reactiveObject.dataLoading = generateDataLoadingError(`Fail on fetching users: URL api is wrong or other client error with code ${xhr.status}.`);
                return;
            }
            if (xhr.status >= 300 && xhr.status <= 399) {
                this.reactiveObject.dataLoading = generateDataLoadingError(`Fail on fetching users: redirect error, code: ${xhr.status}.`);
                return;
            }
            
            const users = JSON.parse(xhr.responseText);
            const _users = [...users];
            const isAllUsersEqualToUserSchema = _users.length && !_users.some(user => !Utils.checkUserEqualToSchema(user));
            if (isAllUsersEqualToUserSchema) {
                this.reactiveObject.dataLoading = {
                    process: false,
                    success: true,
                    error: null
                };
                this.reactiveObject.users = users;
                this.reactiveObject.sortCondition = 'name';
            } else {
                this.reactiveObject.dataLoading = generateDataLoadingError(`Fail on fetching users: some user not equal to user schema.`);
            }
        };
        xhr.onerror = (err) => {
            if (xhr.status === 0) {
                this.reactiveObject.dataLoading = generateDataLoadingError(`Fail on fetching users: disconnect from web.`);
                return;
            }
            if (xhr.status >= 500) {
                this.reactiveObject.dataLoading = generateDataLoadingError(`Fail on fetching users: server error with code ${xhr.status}`);
                return;
            }
            this.reactiveObject.dataLoading = this.reactiveObject.dataLoading = generateDataLoadingError(`Fail on fetching users, status code: ${err.target.status}`);
        };
        
        xhr.send(null);
    }
    
    initObservers() {
        this.reactiveObject.observe("users", ({ newValue }) => {
            this.reactiveObject.sortedUsers = Utils.sortingAndRetrieveArrayFromObject({
                obj: newValue,
                sortingFunc: Utils.getSortFunction(this.reactiveObject.sortCondition),
                isReverse: this.reactiveObject.isReverseSort
            });
        });
        this.reactiveObject.observe("modalUserId", ({ newValue }) => {
            const userId = newValue;
            const userInfo = this.reactiveObject.users.find(user => user.id === userId);
            userInfo && this.showModal(() => <ModalUserInfo user={userInfo}/>);
        });
        this.reactiveObject.observe("sortCondition", ({ newValue, prevValue }) => {
            if (newValue !== prevValue) {
                this.reactiveObject.isReverseSort = false;
                this.reactiveObject.sortedUsers = this.reactiveObject.sortedUsers.sort(Utils.getSortFunction(newValue));
            } else {
                this.reactiveObject.isReverseSort = !this.reactiveObject.isReverseSort;
                this.reactiveObject.sortedUsers = this.reactiveObject.sortedUsers.reverse();
            }
        });
        this.reactiveObject.observe("sortedUsers", () => {
            this.reactiveObject.tableVDom = <Table {...this.reactiveObject} />;
        });
        this.reactiveObject.observe("dataLoading", () => {
            this.reactiveObject.tableVDom = <Table {...this.reactiveObject} />;
        });
    }
    initDomChangers() {
        this.reactiveObject.observe("tableVDom", ({ newValue, prevValue }) => {
            VDom.updateElement(document.querySelector(".user-table-wrap"), newValue, prevValue);
        });
        this.reactiveObject.observe("modalVDom", ({ newValue, prevValue }) => {
            VDom.updateElement(document.querySelector(".modal-wrap"), newValue, prevValue);
        });
    }
    initEventListeners() {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode  === 27) {
                this.hideModal();
            }
        }, false);
    }
    initPolyfills = () => {
      (function(ctx) {
        Array.prototype.findIndex = Array.prototype.findIndex || function(callback) {
          if (this === null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
          } else if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
          }
          var list = Object(this);
          // Makes sures is always has an positive integer as length.
          var length = list.length >>> 0;
          var thisArg = arguments[1];
          for (var i = 0; i < length; i++) {
            if ( callback.call(thisArg, list[i], i, list) ) {
              return i;
            }
          }
          return -1;
        };
        Array.prototype.find = Array.prototype.find || function(callback) {
          if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
          } else if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
          }
          var list = Object(this);
          // Makes sures is always has an positive integer as length.
          var length = list.length >>> 0;
          var thisArg = arguments[1];
          for (var i = 0; i < length; i++) {
            var element = list[i];
            if ( callback.call(thisArg, element, i, list) ) {
              return element;
            }
          }
        };
        Object.values = Object.values || (obj => Object.keys(obj).map(key => obj[key]));
        // Mozilla bind polyfill
        if (!Function.prototype.bind) {
          Function.prototype.bind = function (oThis) {
            if (typeof this !== "function") {
              // closest thing possible to the ECMAScript 5 internal IsCallable function
              throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
        
            var aArgs = Array.prototype.slice.call(arguments, 1),
              fToBind = this,
              fNOP = function () {},
              fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
              };
        
            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();
        
            return fBound;
          };
        }
        if (!document.querySelectorAll) {
          document.querySelectorAll = function (selectors) {
            var style = document.createElement('style'), elements = [], element;
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
            return (elements.length) ? elements[0] : null;
          };
        }
        //----------------------------------------------------------------------
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
        }

//    // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )
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
        }

// ES5 15.2.3.5 Object.create ( O [, Properties] )
        if (typeof Object.create !== "function") {
          Object.create = function (prototype, properties) {
            if (typeof prototype !== "object") {
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
        }

// ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
// Partial support for most common case - getters, setters, and values
        (function () {
          if (!Object.defineProperty ||
            !(function () {
              try {
                Object.defineProperty({}, 'x', {});
                return true;
              }
              catch (e) {
                return false;
              }
            }())) {
            var orig = Object.defineProperty;
            Object.defineProperty = function (o, prop, desc) {
              // In IE8 try built-in implementation for defining properties on DOM prototypes.
              if (orig) {
                try {
                  return orig(o, prop, desc);
                }
                catch (e) {}
              }
          
              if (o !== Object(o)) {
                throw TypeError("Object.defineProperty called on non-object");
              }
              if (Object.prototype.__defineGetter__ && ('get' in desc)) {
                Object.prototype.__defineGetter__.call(o, prop, desc.get);
              }
              if (Object.prototype.__defineSetter__ && ('set' in desc)) {
                Object.prototype.__defineSetter__.call(o, prop, desc.set);
              }
              if ('value' in desc) {
                o[prop] = desc.value;
              }
              return o;
            };
          }
        }());

// ES 15.2.3.7 Object.defineProperties ( O, Properties )
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
        }


// ES5 15.2.3.14 Object.keys ( O )
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
        }

//----------------------------------------------------------------------
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
              bound = function () {
                return self.apply(this instanceof nop ? this : o,
                  args.concat(slice.call(arguments)));
              };
        
            function nop() {}
            nop.prototype = self.prototype;
            bound.prototype = new nop();
            return bound;
          };
        }


//----------------------------------------------------------------------
// ES5 15.4 Array Objects
//----------------------------------------------------------------------

//
// ES5 15.4.3 Properties of the Array Constructor
//


// ES5 15.4.3.2 Array.isArray ( arg )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
        Array.isArray = Array.isArray || function (o) {
          return Boolean(o && Object.prototype.toString.call(Object(o)) === '[object Array]');
        };


//
// ES5 15.4.4 Properties of the Array Prototype Object
//

// ES5 15.4.4.14 Array.prototype.indexOf ( searchElement [ , fromIndex ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
        if (!Array.prototype.indexOf) {
          Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
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
              }
              else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
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
        }

// ES5 15.4.4.15 Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
        if (!Array.prototype.lastIndexOf) {
          Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/ ) {
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
              }
              else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
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
        }

// ES5 15.4.4.16 Array.prototype.every ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
        if (!Array.prototype.every) {
          Array.prototype.every = function (fun /*, thisp */ ) {
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
        }

// ES5 15.4.4.17 Array.prototype.some ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
        if (!Array.prototype.some) {
          Array.prototype.some = function (fun /*, thisp */ ) {
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
        }

// ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
        if (!Array.prototype.forEach) {
          Array.prototype.forEach = function (fun /*, thisp */ ) {
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
        }


// ES5 15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Map
        if (!Array.prototype.map) {
          Array.prototype.map = function (fun /*, thisp */ ) {
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
        }

// ES5 15.4.4.20 Array.prototype.filter ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Filter
        if (!Array.prototype.filter) {
          Array.prototype.filter = function (fun /*, thisp */ ) {
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
        }


// ES5 15.4.4.21 Array.prototype.reduce ( callbackfn [ , initialValue ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Reduce
        if (!Array.prototype.reduce) {
          Array.prototype.reduce = function (fun /*, initialValue */ ) {
            if (this === void 0 || this === null) {
              throw TypeError();
            }
        
            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fun !== "function") {
              throw TypeError();
            }
        
            // no value to return if no initial value and an empty array
            if (len === 0 && arguments.length === 1) {
              throw TypeError();
            }
        
            var k = 0;
            var accumulator;
            if (arguments.length >= 2) {
              accumulator = arguments[1];
            }
            else {
              do {
                if (k in t) {
                  accumulator = t[k++];
                  break;
                }
            
                // if array contains no values, no initial value to return
                if (++k >= len) {
                  throw TypeError();
                }
              }
              while (true);
            }
        
            while (k < len) {
              if (k in t) {
                accumulator = fun.call(undefined, accumulator, t[k], k, t);
              }
              k++;
            }
        
            return accumulator;
          };
        }


// ES5 15.4.4.22 Array.prototype.reduceRight ( callbackfn [, initialValue ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/ReduceRight
        if (!Array.prototype.reduceRight) {
          Array.prototype.reduceRight = function (callbackfn /*, initialValue */ ) {
            if (this === void 0 || this === null) {
              throw TypeError();
            }
        
            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof callbackfn !== "function") {
              throw TypeError();
            }
        
            // no value to return if no initial value, empty array
            if (len === 0 && arguments.length === 1) {
              throw TypeError();
            }
        
            var k = len - 1;
            var accumulator;
            if (arguments.length >= 2) {
              accumulator = arguments[1];
            }
            else {
              do {
                if (k in this) {
                  accumulator = this[k--];
                  break;
                }
            
                // if array contains no values, no initial value to return
                if (--k < 0) {
                  throw TypeError();
                }
              }
              while (true);
            }
        
            while (k >= 0) {
              if (k in t) {
                accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
              }
              k--;
            }
        
            return accumulator;
          };
        }


//----------------------------------------------------------------------
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
        }


//----------------------------------------------------------------------
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
        }


//
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
        
            return this.getUTCFullYear() + '-' +
              pad2(this.getUTCMonth() + 1) + '-' +
              pad2(this.getUTCDate()) + 'T' +
              pad2(this.getUTCHours()) + ':' +
              pad2(this.getUTCMinutes()) + ':' +
              pad2(this.getUTCSeconds()) + '.' +
              pad3(this.getUTCMilliseconds()) + 'Z';
          };
        }
        if (!document.getElementsByClassName) {
          document.getElementsByClassName = function(search) {
            var d = document, elements, pattern, i, results = [];
            if (d.querySelectorAll) { // IE8
              return d.querySelectorAll("." + search);
            }
            if (d.evaluate) { // IE6, IE7
              pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
              elements = d.evaluate(pattern, d, null, 0, null);
              while ((i = elements.iterateNext())) {
                results.push(i);
              }
            } else {
              elements = d.getElementsByTagName("*");
              pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
              for (i = 0; i < elements.length; i++) {
                if ( pattern.test(elements[i].className) ) {
                  results.push(elements[i]);
                }
              }
            }
            return results;
          }
        }
      })(window);
    };
    
    init() {
      this.initPolyfills();
      this.initObservers();
      this.initDomChangers();
      this.initEventListeners();
      this.reactiveObject.tableVDom = <Table {...this.reactiveObject}/>;
      this.loadUsersData("https://jsonplaceholder.typicode.com/users");
    }
}

const app = new App();
app.init();

/**
 * Components section
 * Global-defined.
 **/
function AddUserBtn() {
  return (
    <button className='open-add-user-modal-btn' onClick={() => app.showModal(() => <ModalAddUserComponent/>)}>
      Add user
    </button>
  );
}
function UserTableRow(user) {
  const { id, name, username, email, website } = user;
  return (
    <div className='user'>
      <UserField fieldName={"name"} content={name}/>
      <UserField fieldName={"username"} content={username}/>
      <UserField fieldName={"email"} content={email}/>
      <UserField fieldName={"website"} content={website}/>
      <div className={"show-user-modal-button-container"} onClick={app.setModalUserId.bind(null, id)} forceUpdate/>
    </div>
  );
}
function ModalUserInfo({ user }) {
  const { id, name, username, email, website, address: { street, city, zipcode } } = user;
  const deleteUserHandler = () => {
    app.deleteUserById(id);
    app.hideModal();
  };
  
  return (
    <Modal>
      <ModalRowComponent title='Name' value={name}/>
      <ModalRowComponent title='Username' value={username}/>
      <ModalRowComponent title='Email' value={email}/>
      <ModalRowComponent title='Website' value={website}/>
      <ModalRowComponent title='Street' value={street}/>
      <ModalRowComponent title='City' value={city}/>
      <ModalRowComponent title='Zipcode' value={zipcode}/>
      <button className={"modal-btn delete-btn"} onClick={deleteUserHandler} forceUpdate>
        <span>{"Delete user"}</span>
      </button>
    </Modal>
  );
}
function ModalAddUserComponent() {
  return (
    <Modal className='user-data-inputs--modal'>
      <AddUserContainer/>
    </Modal>
  );
}
function UserDataInput({ type = "text", placeholder, id, title, required = "true" }) {
  const _placeholder = placeholder || `Type ${title} here`;
  const _id = typeof id !== "undefined" || Utils.createInputIdByTitle(title);
  return (
    <input type={type}
           placeholder={_placeholder}
           id={_id}
           required={required}
           autoComplete={"new-password"}
           data-title={title}
           forseUpdate
    />
  );
}
function AddUserContainer() {
  const inputs = [
    { title: "name" },
    { title: "userName" },
    { title: "email", type: "email" },
    { title: "website", type: "url" },
    { title: "street" },
    { title: "city" },
    { title: "zipcode", type: "number" }
  ];
  const saveUserHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const inputItemIds = inputs.map(({ title }) => Utils.createInputIdByTitle(title));
    const inputElements = inputItemIds.map(id => document.querySelector(`#${id}`));
    if (inputElements.length !== inputItemIds.length) throw new Error(`Don't found all inputs`);
    const inputValues = [...inputElements].map((elem) => {
      return {
        type: elem.dataset.title,
        value: elem.value
      };
    });
    let userData = {};
    inputValues.forEach(({ type, value }) => {
      userData[type] = value;
    });
    const user = {
      id: app.getNextUID(),
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
    if (Utils.checkUserEqualToSchema(user)) {
      app.addUserToUsers(user);
    } else {
      throw new Error(`User ${JSON.stringify(user)} is not equal as user model`);
    }
    app.hideModal();
  };
  
  return (
    <form className='user-data-inputs' onSubmit={saveUserHandler}>
      {
        inputs.map(input => <ModalRowComponent title={input.title} value={<UserDataInput {...input} />}/>)
      }
      <button type='submit' className={"modal-btn save-btn"}>
        <span>{"Save user"}</span>
      </button>
    </form>
  );
}
function UserField({ fieldName, content, onClick }) {
  const props = {
    ...(onClick ? { onClick } : {})
  };
  return (
    <div className={`title wrap ${fieldName}`} {...props}>
      <div className='content'>{content}</div>
    </div>
  );
}
function Modal(props, children) {
  return (
    <div className={`${props && props.className || ""} modal`} onClick={app.hideModal}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='close-modal'>
          <div className='close-btn' onClick={app.hideModal}>&times;</div>
        </div>
        {children}
      </div>
    </div>
  );
}
function ModalRowComponent({ title, value }) {
  return (
    <div className='modal-info'>
      <span className='title'>{title}</span>
      <span className='value'>{value}</span>
    </div>
  );
}
function TableHeader({ isReverseSort }) {
  const fields = ["name", "username", "email", "website"];
  return (
    <div className='user header' data-sort-reverse={isReverseSort}>
      {
        fields.map((field) => <UserField fieldName={field} content={field.toUpperCase()}
                                         onClick={app.setSortCondition.bind(null, field)}/>)
      }
    </div>
  );
}
function TableContent(state) {
  const { sortedUsers } = state;
  return (
    <div className='user-table-content'>
      {
        sortedUsers.map(user => UserTableRow(user))
      }
    </div>
  );
}
function EmptyUsersRow(state) {
  const { dataLoading, sortedUsers } = state;
  let NoUsersComponent = () => (
    <div className='user no-users-placeholder'>
      <span>No one users for showing.</span>
    </div>
  );
  let PreloaderComponent = () => (
    <div className='user no-users-placeholder'>
      <div className='preloader'>
        <div>
          <div>
            <div>
              <div/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const ErrorComponent = ({ error }) => (
    <div className='user no-users-placeholder'>
      <span>
        {
          error.toString ? error.toString() : String(error)
        }
        </span>
    </div>
  );
  
  if (dataLoading.success) {
    return !sortedUsers.length ? <NoUsersComponent/> : null;
  }
  if (dataLoading.process) {
    return <PreloaderComponent/>;
  }
  if (dataLoading.error) {
    return <ErrorComponent error={dataLoading.error}/>;
  }
}
function Table(state) {
  return (
    <div className='user-table' data-sort-condition={state.sortCondition}>
      <AddUserBtn/>
      <TableHeader {...state}/>
      {
        state.sortedUsers.length ? <TableContent {...state}/> : <EmptyUsersRow {...state}/>
      }
    </div>
  );
}
function AppComponent() {
  return (
    <div id='app'>
      <div className='control-elements-wrap'/>
      <div className='user-table-wrap'/>
      <div className='modal-wrap'/>
    </div>
  );
}
