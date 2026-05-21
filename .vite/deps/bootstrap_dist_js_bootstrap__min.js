//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
//#endregion
//#region node_modules/jquery/dist-module/jquery.module.js
var jquery_module_exports = /* @__PURE__ */ __exportAll({
	$: () => jQuery,
	default: () => jQuery,
	jQuery: () => jQuery
});
/*!
* jQuery JavaScript Library v4.0.0
* https://jquery.com/
*
* Copyright OpenJS Foundation and other contributors
* Released under the MIT license
* https://jquery.com/license/
*
* Date: 2026-01-18T00:20Z
*/
function jQueryFactory(window, noGlobal) {
	if (typeof window === "undefined" || !window.document) throw new Error("jQuery requires a window with a document");
	var arr = [];
	var getProto = Object.getPrototypeOf;
	var slice = arr.slice;
	var flat = arr.flat ? function(array) {
		return arr.flat.call(array);
	} : function(array) {
		return arr.concat.apply([], array);
	};
	var push = arr.push;
	var indexOf = arr.indexOf;
	var class2type = {};
	var toString = class2type.toString;
	var hasOwn = class2type.hasOwnProperty;
	var fnToString = hasOwn.toString;
	var ObjectFunctionString = fnToString.call(Object);
	var support = {};
	function toType(obj) {
		if (obj == null) return obj + "";
		return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj;
	}
	function isWindow(obj) {
		return obj != null && obj === obj.window;
	}
	function isArrayLike(obj) {
		var length = !!obj && obj.length, type = toType(obj);
		if (typeof obj === "function" || isWindow(obj)) return false;
		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var document$1 = window.document;
	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};
	function DOMEval(code, node, doc) {
		doc = doc || document$1;
		var i, script = doc.createElement("script");
		script.text = code;
		for (i in preservedScriptAttributes) if (node && node[i]) script[i] = node[i];
		if (doc.head.appendChild(script).parentNode) script.parentNode.removeChild(script);
	}
	var version = "4.0.0", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
		return new jQuery.fn.init(selector, context);
	};
	jQuery.fn = jQuery.prototype = {
		jquery: version,
		constructor: jQuery,
		length: 0,
		toArray: function() {
			return slice.call(this);
		},
		get: function(num) {
			if (num == null) return slice.call(this);
			return num < 0 ? this[num + this.length] : this[num];
		},
		pushStack: function(elems) {
			var ret = jQuery.merge(this.constructor(), elems);
			ret.prevObject = this;
			return ret;
		},
		each: function(callback) {
			return jQuery.each(this, callback);
		},
		map: function(callback) {
			return this.pushStack(jQuery.map(this, function(elem, i) {
				return callback.call(elem, i, elem);
			}));
		},
		slice: function() {
			return this.pushStack(slice.apply(this, arguments));
		},
		first: function() {
			return this.eq(0);
		},
		last: function() {
			return this.eq(-1);
		},
		even: function() {
			return this.pushStack(jQuery.grep(this, function(_elem, i) {
				return (i + 1) % 2;
			}));
		},
		odd: function() {
			return this.pushStack(jQuery.grep(this, function(_elem, i) {
				return i % 2;
			}));
		},
		eq: function(i) {
			var len = this.length, j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},
		end: function() {
			return this.prevObject || this.constructor();
		}
	};
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[i] || {};
			i++;
		}
		if (typeof target !== "object" && typeof target !== "function") target = {};
		if (i === length) {
			target = this;
			i--;
		}
		for (; i < length; i++) if ((options = arguments[i]) != null) for (name in options) {
			copy = options[name];
			if (name === "__proto__" || target === copy) continue;
			if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
				src = target[name];
				if (copyIsArray && !Array.isArray(src)) clone = [];
				else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {};
				else clone = src;
				copyIsArray = false;
				target[name] = jQuery.extend(deep, clone, copy);
			} else if (copy !== void 0) target[name] = copy;
		}
		return target;
	};
	jQuery.extend({
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
		isReady: true,
		error: function(msg) {
			throw new Error(msg);
		},
		noop: function() {},
		isPlainObject: function(obj) {
			var proto, Ctor;
			if (!obj || toString.call(obj) !== "[object Object]") return false;
			proto = getProto(obj);
			if (!proto) return true;
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},
		isEmptyObject: function(obj) {
			var name;
			for (name in obj) return false;
			return true;
		},
		globalEval: function(code, options, doc) {
			DOMEval(code, { nonce: options && options.nonce }, doc);
		},
		each: function(obj, callback) {
			var length, i = 0;
			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) if (callback.call(obj[i], i, obj[i]) === false) break;
			} else for (i in obj) if (callback.call(obj[i], i, obj[i]) === false) break;
			return obj;
		},
		text: function(elem) {
			var node, ret = "", i = 0, nodeType = elem.nodeType;
			if (!nodeType) while (node = elem[i++]) ret += jQuery.text(node);
			if (nodeType === 1 || nodeType === 11) return elem.textContent;
			if (nodeType === 9) return elem.documentElement.textContent;
			if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
			return ret;
		},
		makeArray: function(arr, results) {
			var ret = results || [];
			if (arr != null) if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
			else push.call(ret, arr);
			return ret;
		},
		inArray: function(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},
		isXMLDoc: function(elem) {
			var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
			return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
		},
		contains: function(a, b) {
			var bup = b && b.parentNode;
			return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
		},
		merge: function(first, second) {
			var len = +second.length, j = 0, i = first.length;
			for (; j < len; j++) first[i++] = second[j];
			first.length = i;
			return first;
		},
		grep: function(elems, callback, invert) {
			var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) matches.push(elems[i]);
			}
			return matches;
		},
		map: function(elems, callback, arg) {
			var length, value, i = 0, ret = [];
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);
					if (value != null) ret.push(value);
				}
			} else for (i in elems) {
				value = callback(elems[i], i, arg);
				if (value != null) ret.push(value);
			}
			return flat(ret);
		},
		guid: 1,
		support
	});
	if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});
	function nodeName(elem, name) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	}
	var pop = arr.pop;
	var whitespace = "[\\x20\\t\\r\\n\\f]";
	var isIE = document$1.documentMode;
	var rbuggyQSA = isIE && new RegExp(":enabled|:disabled|\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
	var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
	var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
	var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
	var rdescend = new RegExp(whitespace + "|>");
	var rsibling = /[+~]/;
	var documentElement$1 = document$1.documentElement;
	var matches = documentElement$1.matches || documentElement$1.msMatchesSelector;
	/**
	* Create key-value caches of limited size
	* @returns {function(string, object)} Returns the Object data after storing it on itself with
	*	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	*	deleting the oldest entry
	*/
	function createCache() {
		var keys = [];
		function cache(key, value) {
			if (keys.push(key + " ") > jQuery.expr.cacheLength) delete cache[keys.shift()];
			return cache[key + " "] = value;
		}
		return cache;
	}
	/**
	* Checks a node for validity as a jQuery selector context
	* @param {Element|Object=} context
	* @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	*/
	function testContext(context) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]";
	var pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)";
	var filterMatchExpr = {
		ID: new RegExp("^#(" + identifier + ")"),
		CLASS: new RegExp("^\\.(" + identifier + ")"),
		TAG: new RegExp("^(" + identifier + "|[*])"),
		ATTR: new RegExp("^" + attributes),
		PSEUDO: new RegExp("^" + pseudos),
		CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i")
	};
	var rpseudo = new RegExp(pseudos);
	var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
		var high = "0x" + escape.slice(1) - 65536;
		if (nonHex) return nonHex;
		return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
	};
	function unescapeSelector(sel) {
		return sel.replace(runescape, funescape);
	}
	function selectorError(msg) {
		jQuery.error("Syntax error, unrecognized expression: " + msg);
	}
	var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
	var tokenCache = createCache();
	function tokenize(selector, parseOnly) {
		var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
		if (cached) return parseOnly ? 0 : cached.slice(0);
		soFar = selector;
		groups = [];
		preFilters = jQuery.expr.preFilter;
		while (soFar) {
			if (!matched || (match = rcomma.exec(soFar))) {
				if (match) soFar = soFar.slice(match[0].length) || soFar;
				groups.push(tokens = []);
			}
			matched = false;
			if (match = rleadingCombinator.exec(soFar)) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: match[0].replace(rtrimCSS, " ")
				});
				soFar = soFar.slice(matched.length);
			}
			for (type in filterMatchExpr) if ((match = jQuery.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type,
					matches: match
				});
				soFar = soFar.slice(matched.length);
			}
			if (!matched) break;
		}
		if (parseOnly) return soFar.length;
		return soFar ? selectorError(selector) : tokenCache(selector, groups).slice(0);
	}
	var preFilter = {
		ATTR: function(match) {
			match[1] = unescapeSelector(match[1]);
			match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
			if (match[2] === "~=") match[3] = " " + match[3] + " ";
			return match.slice(0, 4);
		},
		CHILD: function(match) {
			match[1] = match[1].toLowerCase();
			if (match[1].slice(0, 3) === "nth") {
				if (!match[3]) selectorError(match[0]);
				match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
				match[5] = +(match[7] + match[8] || match[3] === "odd");
			} else if (match[3]) selectorError(match[0]);
			return match;
		},
		PSEUDO: function(match) {
			var excess, unquoted = !match[6] && match[2];
			if (filterMatchExpr.CHILD.test(match[0])) return null;
			if (match[3]) match[2] = match[4] || match[5] || "";
			else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
				match[0] = match[0].slice(0, excess);
				match[2] = unquoted.slice(0, excess);
			}
			return match.slice(0, 3);
		}
	};
	function toSelector(tokens) {
		var i = 0, len = tokens.length, selector = "";
		for (; i < len; i++) selector += tokens[i].value;
		return selector;
	}
	function access(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0, len = elems.length, bulk = key == null;
		if (toType(key) === "object") {
			chainable = true;
			for (i in key) access(elems, fn, i, key[i], true, emptyGet, raw);
		} else if (value !== void 0) {
			chainable = true;
			if (typeof value !== "function") raw = true;
			if (bulk) if (raw) {
				fn.call(elems, value);
				fn = null;
			} else {
				bulk = fn;
				fn = function(elem, _key, value) {
					return bulk.call(jQuery(elem), value);
				};
			}
			if (fn) for (; i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
		}
		if (chainable) return elems;
		if (bulk) return fn.call(elems);
		return len ? fn(elems[0], key) : emptyGet;
	}
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
	jQuery.fn.extend({
		attr: function(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},
		removeAttr: function(name) {
			return this.each(function() {
				jQuery.removeAttr(this, name);
			});
		}
	});
	jQuery.extend({
		attr: function(elem, name, value) {
			var ret, hooks, nType = elem.nodeType;
			if (nType === 3 || nType === 8 || nType === 2) return;
			if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()];
			if (value !== void 0) {
				if (value === null || value === false && name.toLowerCase().indexOf("aria-") !== 0) {
					jQuery.removeAttr(elem, name);
					return;
				}
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
				elem.setAttribute(name, value);
				return value;
			}
			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
			ret = elem.getAttribute(name);
			return ret == null ? void 0 : ret;
		},
		attrHooks: {},
		removeAttr: function(elem, value) {
			var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
			if (attrNames && elem.nodeType === 1) while (name = attrNames[i++]) elem.removeAttribute(name);
		}
	});
	if (isIE) jQuery.attrHooks.type = { set: function(elem, value) {
		if (value === "radio" && nodeName(elem, "input")) {
			var val = elem.value;
			elem.setAttribute("type", value);
			if (val) elem.value = val;
			return value;
		}
	} };
	var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
	function fcssescape(ch, asCodePoint) {
		if (asCodePoint) {
			if (ch === "\0") return "�";
			return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
		}
		return "\\" + ch;
	}
	jQuery.escapeSelector = function(sel) {
		return (sel + "").replace(rcssescape, fcssescape);
	};
	var sort = arr.sort;
	var splice = arr.splice;
	var hasDuplicate;
	function sortOrder(a, b) {
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if (compare) return compare;
		compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
		if (compare & 1) {
			if (a == document$1 || a.ownerDocument == document$1 && jQuery.contains(document$1, a)) return -1;
			if (b == document$1 || b.ownerDocument == document$1 && jQuery.contains(document$1, b)) return 1;
			return 0;
		}
		return compare & 4 ? -1 : 1;
	}
	/**
	* Document sorting and removing duplicates
	* @param {ArrayLike} results
	*/
	jQuery.uniqueSort = function(results) {
		var elem, duplicates = [], j = 0, i = 0;
		hasDuplicate = false;
		sort.call(results, sortOrder);
		if (hasDuplicate) {
			while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
			while (j--) splice.call(results, duplicates[j], 1);
		}
		return results;
	};
	jQuery.fn.uniqueSort = function() {
		return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
	};
	var i, outermostContext, document, documentElement, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery.extend({ needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i") }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr$1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
		setDocument();
	}, inDisabledFieldset = addCombinator(function(elem) {
		return elem.disabled === true && nodeName(elem, "fieldset");
	}, {
		dir: "parentNode",
		next: "legend"
	});
	function find(selector, context, results, seed) {
		var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
		results = results || [];
		if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
		if (!seed) {
			setDocument(context);
			context = context || document;
			if (documentIsHTML) {
				if (nodeType !== 11 && (match = rquickExpr$1.exec(selector))) {
					if (m = match[1]) {
						if (nodeType === 9) {
							if (elem = context.getElementById(m)) push.call(results, elem);
							return results;
						} else if (newContext && (elem = newContext.getElementById(m)) && jQuery.contains(context, elem)) {
							push.call(results, elem);
							return results;
						}
					} else if (match[2]) {
						push.apply(results, context.getElementsByTagName(selector));
						return results;
					} else if ((m = match[3]) && context.getElementsByClassName) {
						push.apply(results, context.getElementsByClassName(m));
						return results;
					}
				}
				if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
					newSelector = selector;
					newContext = context;
					if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
						newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						if (newContext != context || isIE) if (nid = context.getAttribute("id")) nid = jQuery.escapeSelector(nid);
						else context.setAttribute("id", nid = jQuery.expando);
						groups = tokenize(selector);
						i = groups.length;
						while (i--) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
						newSelector = groups.join(",");
					}
					try {
						push.apply(results, newContext.querySelectorAll(newSelector));
						return results;
					} catch (qsaError) {
						nonnativeSelectorCache(selector, true);
					} finally {
						if (nid === jQuery.expando) context.removeAttribute("id");
					}
				}
			}
		}
		return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
	}
	/**
	* Mark a function for special use by jQuery selector module
	* @param {Function} fn The function to mark
	*/
	function markFunction(fn) {
		fn[jQuery.expando] = true;
		return fn;
	}
	/**
	* Returns a function to use in pseudos for input types
	* @param {String} type
	*/
	function createInputPseudo(type) {
		return function(elem) {
			return nodeName(elem, "input") && elem.type === type;
		};
	}
	/**
	* Returns a function to use in pseudos for buttons
	* @param {String} type
	*/
	function createButtonPseudo(type) {
		return function(elem) {
			return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
		};
	}
	/**
	* Returns a function to use in pseudos for :enabled/:disabled
	* @param {Boolean} disabled true for :disabled; false for :enabled
	*/
	function createDisabledPseudo(disabled) {
		return function(elem) {
			if ("form" in elem) {
				if (elem.parentNode && elem.disabled === false) {
					if ("label" in elem) if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
					else return elem.disabled === disabled;
					return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
				}
				return elem.disabled === disabled;
			} else if ("label" in elem) return elem.disabled === disabled;
			return false;
		};
	}
	/**
	* Returns a function to use in pseudos for positionals
	* @param {Function} fn
	*/
	function createPositionalPseudo(fn) {
		return markFunction(function(argument) {
			argument = +argument;
			return markFunction(function(seed, matches) {
				var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
				while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
			});
		});
	}
	/**
	* Sets document-related variables once based on the current document
	* @param {Element|Object} [node] An element or document object to use to set the document
	*/
	function setDocument(node) {
		var subWindow, doc = node ? node.ownerDocument || node : document$1;
		if (doc == document || doc.nodeType !== 9) return;
		document = doc;
		documentElement = document.documentElement;
		documentIsHTML = !jQuery.isXMLDoc(document);
		if (isIE && document$1 != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) subWindow.addEventListener("unload", unloadHandler);
	}
	find.matches = function(expr, elements) {
		return find(expr, null, null, elements);
	};
	find.matchesSelector = function(elem, expr) {
		setDocument(elem);
		if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
			return matches.call(elem, expr);
		} catch (e) {
			nonnativeSelectorCache(expr, true);
		}
		return find(expr, document, null, [elem]).length > 0;
	};
	jQuery.expr = {
		cacheLength: 50,
		createPseudo: markFunction,
		match: matchExpr,
		find: {
			ID: function(id, context) {
				if (typeof context.getElementById !== "undefined" && documentIsHTML) {
					var elem = context.getElementById(id);
					return elem ? [elem] : [];
				}
			},
			TAG: function(tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
				else return context.querySelectorAll(tag);
			},
			CLASS: function(className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
			}
		},
		relative: {
			">": {
				dir: "parentNode",
				first: true
			},
			" ": { dir: "parentNode" },
			"+": {
				dir: "previousSibling",
				first: true
			},
			"~": { dir: "previousSibling" }
		},
		preFilter,
		filter: {
			ID: function(id) {
				var attrId = unescapeSelector(id);
				return function(elem) {
					return elem.getAttribute("id") === attrId;
				};
			},
			TAG: function(nodeNameSelector) {
				var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
				return nodeNameSelector === "*" ? function() {
					return true;
				} : function(elem) {
					return nodeName(elem, expectedNodeName);
				};
			},
			CLASS: function(className) {
				var pattern = classCache[className + " "];
				return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
					return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
				});
			},
			ATTR: function(name, operator, check) {
				return function(elem) {
					var result = jQuery.attr(elem, name);
					if (result == null) return operator === "!=";
					if (!operator) return true;
					result += "";
					if (operator === "=") return result === check;
					if (operator === "!=") return result !== check;
					if (operator === "^=") return check && result.indexOf(check) === 0;
					if (operator === "*=") return check && result.indexOf(check) > -1;
					if (operator === "$=") return check && result.slice(-check.length) === check;
					if (operator === "~=") return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
					if (operator === "|=") return result === check || result.slice(0, check.length + 1) === check + "-";
					return false;
				};
			},
			CHILD: function(type, what, _argument, first, last) {
				var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
				return first === 1 && last === 0 ? function(elem) {
					return !!elem.parentNode;
				} : function(elem, _context, xml) {
					var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
					if (parent) {
						if (simple) {
							while (dir) {
								node = elem;
								while (node = node[dir]) if (ofType ? nodeName(node, name) : node.nodeType === 1) return false;
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}
						start = [forward ? parent.firstChild : parent.lastChild];
						if (forward && useCache) {
							outerCache = parent[jQuery.expando] || (parent[jQuery.expando] = {});
							cache = outerCache[type] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = nodeIndex && cache[2];
							node = nodeIndex && parent.childNodes[nodeIndex];
							while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (node.nodeType === 1 && ++diff && node === elem) {
								outerCache[type] = [
									dirruns,
									nodeIndex,
									diff
								];
								break;
							}
						} else {
							if (useCache) {
								outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
								cache = outerCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex;
							}
							if (diff === false) {
								while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
									if (useCache) {
										outerCache = node[jQuery.expando] || (node[jQuery.expando] = {});
										outerCache[type] = [dirruns, diff];
									}
									if (node === elem) break;
								}
							}
						}
						diff -= last;
						return diff === first || diff % first === 0 && diff / first >= 0;
					}
				};
			},
			PSEUDO: function(pseudo, argument) {
				var fn = jQuery.expr.pseudos[pseudo] || jQuery.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
				if (fn[jQuery.expando]) return fn(argument);
				return fn;
			}
		},
		pseudos: {
			not: markFunction(function(selector) {
				var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
				return matcher[jQuery.expando] ? markFunction(function(seed, matches, _context, xml) {
					var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
					while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
				}) : function(elem, _context, xml) {
					input[0] = elem;
					matcher(input, null, xml, results);
					input[0] = null;
					return !results.pop();
				};
			}),
			has: markFunction(function(selector) {
				return function(elem) {
					return find(selector, elem).length > 0;
				};
			}),
			contains: markFunction(function(text) {
				text = unescapeSelector(text);
				return function(elem) {
					return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
				};
			}),
			lang: markFunction(function(lang) {
				if (!ridentifier.test(lang || "")) selectorError("unsupported lang: " + lang);
				lang = unescapeSelector(lang).toLowerCase();
				return function(elem) {
					var elemLang;
					do
						if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
						}
					while ((elem = elem.parentNode) && elem.nodeType === 1);
					return false;
				};
			}),
			target: function(elem) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice(1) === elem.id;
			},
			root: function(elem) {
				return elem === documentElement;
			},
			focus: function(elem) {
				return elem === document.activeElement && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
			},
			enabled: createDisabledPseudo(false),
			disabled: createDisabledPseudo(true),
			checked: function(elem) {
				return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
			},
			selected: function(elem) {
				if (isIE && elem.parentNode) elem.parentNode.selectedIndex;
				return elem.selected === true;
			},
			empty: function(elem) {
				for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
				return true;
			},
			parent: function(elem) {
				return !jQuery.expr.pseudos.empty(elem);
			},
			header: function(elem) {
				return rheader.test(elem.nodeName);
			},
			input: function(elem) {
				return rinputs.test(elem.nodeName);
			},
			button: function(elem) {
				return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
			},
			text: function(elem) {
				return nodeName(elem, "input") && elem.type === "text";
			},
			first: createPositionalPseudo(function() {
				return [0];
			}),
			last: createPositionalPseudo(function(_matchIndexes, length) {
				return [length - 1];
			}),
			eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
				return [argument < 0 ? argument + length : argument];
			}),
			even: createPositionalPseudo(function(matchIndexes, length) {
				var i = 0;
				for (; i < length; i += 2) matchIndexes.push(i);
				return matchIndexes;
			}),
			odd: createPositionalPseudo(function(matchIndexes, length) {
				var i = 1;
				for (; i < length; i += 2) matchIndexes.push(i);
				return matchIndexes;
			}),
			lt: createPositionalPseudo(function(matchIndexes, length, argument) {
				var i;
				if (argument < 0) i = argument + length;
				else if (argument > length) i = length;
				else i = argument;
				for (; --i >= 0;) matchIndexes.push(i);
				return matchIndexes;
			}),
			gt: createPositionalPseudo(function(matchIndexes, length, argument) {
				var i = argument < 0 ? argument + length : argument;
				for (; ++i < length;) matchIndexes.push(i);
				return matchIndexes;
			})
		}
	};
	jQuery.expr.pseudos.nth = jQuery.expr.pseudos.eq;
	for (i in {
		radio: true,
		checkbox: true,
		file: true,
		password: true,
		image: true
	}) jQuery.expr.pseudos[i] = createInputPseudo(i);
	for (i in {
		submit: true,
		reset: true
	}) jQuery.expr.pseudos[i] = createButtonPseudo(i);
	function setFilters() {}
	setFilters.prototype = jQuery.expr.pseudos;
	jQuery.expr.setFilters = new setFilters();
	function addCombinator(matcher, combinator, base) {
		var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
		return combinator.first ? function(elem, context, xml) {
			while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
			return false;
		} : function(elem, context, xml) {
			var oldCache, outerCache, newCache = [dirruns, doneName];
			if (xml) {
				while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) {
					if (matcher(elem, context, xml)) return true;
				}
			} else while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) {
				outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
				if (skip && nodeName(elem, skip)) elem = elem[dir] || elem;
				else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
				else {
					outerCache[key] = newCache;
					if (newCache[2] = matcher(elem, context, xml)) return true;
				}
			}
			return false;
		};
	}
	function elementMatcher(matchers) {
		return matchers.length > 1 ? function(elem, context, xml) {
			var i = matchers.length;
			while (i--) if (!matchers[i](elem, context, xml)) return false;
			return true;
		} : matchers[0];
	}
	function multipleContexts(selector, contexts, results) {
		var i = 0, len = contexts.length;
		for (; i < len; i++) find(selector, contexts[i], results);
		return results;
	}
	function condense(unmatched, map, filter, context, xml) {
		var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
		for (; i < len; i++) if (elem = unmatched[i]) {
			if (!filter || filter(elem, context, xml)) {
				newUnmatched.push(elem);
				if (mapped) map.push(i);
			}
		}
		return newUnmatched;
	}
	function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
		if (postFilter && !postFilter[jQuery.expando]) postFilter = setMatcher(postFilter);
		if (postFinder && !postFinder[jQuery.expando]) postFinder = setMatcher(postFinder, postSelector);
		return markFunction(function(seed, results, context, xml) {
			var temp, i, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
			if (matcher) {
				matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
				matcher(matcherIn, matcherOut, context, xml);
			} else matcherOut = matcherIn;
			if (postFilter) {
				temp = condense(matcherOut, postMap);
				postFilter(temp, [], context, xml);
				i = temp.length;
				while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
			}
			if (seed) {
				if (postFinder || preFilter) {
					if (postFinder) {
						temp = [];
						i = matcherOut.length;
						while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
						postFinder(null, matcherOut = [], temp, xml);
					}
					i = matcherOut.length;
					while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
				}
			} else {
				matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
				if (postFinder) postFinder(null, results, matcherOut, xml);
				else push.apply(results, matcherOut);
			}
		});
	}
	function matcherFromTokens(tokens) {
		var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery.expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
			return elem === checkContext;
		}, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
			return indexOf.call(checkContext, elem) > -1;
		}, implicitRelative, true), matchers = [function(elem, context, xml) {
			var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
			checkContext = null;
			return ret;
		}];
		for (; i < len; i++) if (matcher = jQuery.expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
		else {
			matcher = jQuery.expr.filter[tokens[i].type].apply(null, tokens[i].matches);
			if (matcher[jQuery.expando]) {
				j = ++i;
				for (; j < len; j++) if (jQuery.expr.relative[tokens[j].type]) break;
				return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
			}
			matchers.push(matcher);
		}
		return elementMatcher(matchers);
	}
	function matcherFromGroupMatchers(elementMatchers, setMatchers) {
		var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
			var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
			if (outermost) outermostContext = context == document || context || outermost;
			for (; (elem = elems[i]) != null; i++) {
				if (byElement && elem) {
					j = 0;
					if (!context && elem.ownerDocument != document) {
						setDocument(elem);
						xml = !documentIsHTML;
					}
					while (matcher = elementMatchers[j++]) if (matcher(elem, context || document, xml)) {
						push.call(results, elem);
						break;
					}
					if (outermost) dirruns = dirrunsUnique;
				}
				if (bySet) {
					if (elem = !matcher && elem) matchedCount--;
					if (seed) unmatched.push(elem);
				}
			}
			matchedCount += i;
			if (bySet && i !== matchedCount) {
				j = 0;
				while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
				if (seed) {
					if (matchedCount > 0) {
						while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
					}
					setMatched = condense(setMatched);
				}
				push.apply(results, setMatched);
				if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) jQuery.uniqueSort(results);
			}
			if (outermost) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}
			return unmatched;
		};
		return bySet ? markFunction(superMatcher) : superMatcher;
	}
	function compile(selector, match) {
		var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
		if (!cached) {
			if (!match) match = tokenize(selector);
			i = match.length;
			while (i--) {
				cached = matcherFromTokens(match[i]);
				if (cached[jQuery.expando]) setMatchers.push(cached);
				else elementMatchers.push(cached);
			}
			cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
			cached.selector = selector;
		}
		return cached;
	}
	/**
	* A low-level selection function that works with jQuery's compiled
	*  selector functions
	* @param {String|Function} selector A selector or a pre-compiled
	*  selector function built with jQuery selector compile
	* @param {Element} context
	* @param {Array} [results]
	* @param {Array} [seed] A set of elements to match against
	*/
	function select(selector, context, results, seed) {
		var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
		results = results || [];
		if (match.length === 1) {
			tokens = match[0] = match[0].slice(0);
			if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery.expr.relative[tokens[1].type]) {
				context = (jQuery.expr.find.ID(unescapeSelector(token.matches[0]), context) || [])[0];
				if (!context) return results;
				else if (compiled) context = context.parentNode;
				selector = selector.slice(tokens.shift().value.length);
			}
			i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
			while (i--) {
				token = tokens[i];
				if (jQuery.expr.relative[type = token.type]) break;
				if (find = jQuery.expr.find[type]) {
					if (seed = find(unescapeSelector(token.matches[0]), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
						tokens.splice(i, 1);
						selector = seed.length && toSelector(tokens);
						if (!selector) {
							push.apply(results, seed);
							return results;
						}
						break;
					}
				}
			}
		}
		(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
		return results;
	}
	setDocument();
	jQuery.find = find;
	find.compile = compile;
	find.select = select;
	find.setDocument = setDocument;
	find.tokenize = tokenize;
	function dir(elem, dir, until) {
		var matched = [], truncate = until !== void 0;
		while ((elem = elem[dir]) && elem.nodeType !== 9) if (elem.nodeType === 1) {
			if (truncate && jQuery(elem).is(until)) break;
			matched.push(elem);
		}
		return matched;
	}
	function siblings(n, elem) {
		var matched = [];
		for (; n; n = n.nextSibling) if (n.nodeType === 1 && n !== elem) matched.push(n);
		return matched;
	}
	var rneedsContext = jQuery.expr.match.needsContext;
	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function isObviousHtml(input) {
		return input[0] === "<" && input[input.length - 1] === ">" && input.length >= 3;
	}
	function winnow(elements, qualifier, not) {
		if (typeof qualifier === "function") return jQuery.grep(elements, function(elem, i) {
			return !!qualifier.call(elem, i, elem) !== not;
		});
		if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
			return elem === qualifier !== not;
		});
		if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
			return indexOf.call(qualifier, elem) > -1 !== not;
		});
		return jQuery.filter(qualifier, elements, not);
	}
	jQuery.filter = function(expr, elems, not) {
		var elem = elems[0];
		if (not) expr = ":not(" + expr + ")";
		if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
			return elem.nodeType === 1;
		}));
	};
	jQuery.fn.extend({
		find: function(selector) {
			var i, ret, len = this.length, self = this;
			if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
				for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
			}));
			ret = this.pushStack([]);
			for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function(selector) {
			return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});
	var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context) {
		var match, elem;
		if (!selector) return this;
		if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;
		} else if (typeof selector === "function") return rootjQuery.ready !== void 0 ? rootjQuery.ready(selector) : selector(jQuery);
		else {
			match = selector + "";
			if (isObviousHtml(match)) match = [
				null,
				selector,
				null
			];
			else if (typeof selector === "string") match = rquickExpr.exec(selector);
			else return jQuery.makeArray(selector, this);
			if (match && (match[1] || !context)) if (match[1]) {
				context = context instanceof jQuery ? context[0] : context;
				jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document$1, true));
				if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (typeof this[match] === "function") this[match](context[match]);
				else this.attr(match, context[match]);
				return this;
			} else {
				elem = document$1.getElementById(match[2]);
				if (elem) {
					this[0] = elem;
					this.length = 1;
				}
				return this;
			}
			else if (!context || context.jquery) return (context || rootjQuery).find(selector);
			else return this.constructor(context).find(selector);
		}
	};
	init.prototype = jQuery.fn;
	rootjQuery = jQuery(document$1);
	var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};
	jQuery.fn.extend({
		has: function(target) {
			var targets = jQuery(target, this), l = targets.length;
			return this.filter(function() {
				var i = 0;
				for (; i < l; i++) if (jQuery.contains(this, targets[i])) return true;
			});
		},
		closest: function(selectors, context) {
			var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
					matched.push(cur);
					break;
				}
			}
			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},
		index: function(elem) {
			if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
			return indexOf.call(this, elem.jquery ? elem[0] : elem);
		},
		add: function(selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},
		addBack: function(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});
	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1);
		return cur;
	}
	jQuery.each({
		parent: function(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function(elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function(elem, _i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function(elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function(elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function(elem, _i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function(elem, _i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function(elem) {
			return siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function(elem) {
			return siblings(elem.firstChild);
		},
		contents: function(elem) {
			if (elem.contentDocument != null && getProto(elem.contentDocument)) return elem.contentDocument;
			if (nodeName(elem, "template")) elem = elem.content || elem;
			return jQuery.merge([], elem.childNodes);
		}
	}, function(name, fn) {
		jQuery.fn[name] = function(until, selector) {
			var matched = jQuery.map(this, fn, until);
			if (name.slice(-5) !== "Until") selector = until;
			if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
			if (this.length > 1) {
				if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
				if (rparentsprev.test(name)) matched.reverse();
			}
			return this.pushStack(matched);
		};
	});
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
			object[flag] = true;
		});
		return object;
	}
	jQuery.Callbacks = function(options) {
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
		var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
			locked = locked || options.once;
			fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
					firingIndex = list.length;
					memory = false;
				}
			}
			if (!options.memory) memory = false;
			firing = false;
			if (locked) if (memory) list = [];
			else list = "";
		}, self = {
			add: function() {
				if (list) {
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}
					(function add(args) {
						jQuery.each(args, function(_, arg) {
							if (typeof arg === "function") {
								if (!options.unique || !self.has(arg)) list.push(arg);
							} else if (arg && arg.length && toType(arg) !== "string") add(arg);
						});
					})(arguments);
					if (memory && !firing) fire();
				}
				return this;
			},
			remove: function() {
				jQuery.each(arguments, function(_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);
						if (index <= firingIndex) firingIndex--;
					}
				});
				return this;
			},
			has: function(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},
			empty: function() {
				if (list) list = [];
				return this;
			},
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},
			lock: function() {
				locked = queue = [];
				if (!memory && !firing) list = memory = "";
				return this;
			},
			locked: function() {
				return !!locked;
			},
			fireWith: function(context, args) {
				if (!locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) fire();
				}
				return this;
			},
			fire: function() {
				self.fireWith(this, arguments);
				return this;
			},
			fired: function() {
				return !!fired;
			}
		};
		return self;
	};
	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}
	function adoptValue(value, resolve, reject, noValue) {
		var method;
		try {
			if (value && typeof (method = value.promise) === "function") method.call(value).done(resolve).fail(reject);
			else if (value && typeof (method = value.then) === "function") method.call(value, resolve, reject);
			else resolve.apply(void 0, [value].slice(noValue));
		} catch (value) {
			reject(value);
		}
	}
	jQuery.extend({
		Deferred: function(func) {
			var tuples = [
				[
					"notify",
					"progress",
					jQuery.Callbacks("memory"),
					jQuery.Callbacks("memory"),
					2
				],
				[
					"resolve",
					"done",
					jQuery.Callbacks("once memory"),
					jQuery.Callbacks("once memory"),
					0,
					"resolved"
				],
				[
					"reject",
					"fail",
					jQuery.Callbacks("once memory"),
					jQuery.Callbacks("once memory"),
					1,
					"rejected"
				]
			], state = "pending", promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				catch: function(fn) {
					return promise.then(null, fn);
				},
				pipe: function() {
					var fns = arguments;
					return jQuery.Deferred(function(newDefer) {
						jQuery.each(tuples, function(_i, tuple) {
							var fn = typeof fns[tuple[4]] === "function" && fns[tuple[4]];
							deferred[tuple[1]](function() {
								var returned = fn && fn.apply(this, arguments);
								if (returned && typeof returned.promise === "function") returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								else newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
							});
						});
						fns = null;
					}).promise();
				},
				then: function(onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function() {
							var that = this, args = arguments, mightThrow = function() {
								var returned, then;
								if (depth < maxDepth) return;
								returned = handler.apply(that, args);
								if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
								then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
								if (typeof then === "function") if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
								else {
									maxDepth++;
									then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
								}
								else {
									if (handler !== Identity) {
										that = void 0;
										args = [returned];
									}
									(special || deferred.resolveWith)(that, args);
								}
							}, process = special ? mightThrow : function() {
								try {
									mightThrow();
								} catch (e) {
									if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.error);
									if (depth + 1 >= maxDepth) {
										if (handler !== Thrower) {
											that = void 0;
											args = [e];
										}
										deferred.rejectWith(that, args);
									}
								}
							};
							if (depth) process();
							else {
								if (jQuery.Deferred.getErrorHook) process.error = jQuery.Deferred.getErrorHook();
								window.setTimeout(process);
							}
						};
					}
					return jQuery.Deferred(function(newDefer) {
						tuples[0][3].add(resolve(0, newDefer, typeof onProgress === "function" ? onProgress : Identity, newDefer.notifyWith));
						tuples[1][3].add(resolve(0, newDefer, typeof onFulfilled === "function" ? onFulfilled : Identity));
						tuples[2][3].add(resolve(0, newDefer, typeof onRejected === "function" ? onRejected : Thrower));
					}).promise();
				},
				promise: function(obj) {
					return obj != null ? jQuery.extend(obj, promise) : promise;
				}
			}, deferred = {};
			jQuery.each(tuples, function(i, tuple) {
				var list = tuple[2], stateString = tuple[5];
				promise[tuple[1]] = list.add;
				if (stateString) list.add(function() {
					state = stateString;
				}, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
				list.add(tuple[3].fire);
				deferred[tuple[0]] = function() {
					deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});
			promise.promise(deferred);
			if (func) func.call(deferred, deferred);
			return deferred;
		},
		when: function(singleValue) {
			var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i) {
				return function(value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
					if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
				};
			};
			if (remaining <= 1) {
				adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
				if (primary.state() === "pending" || typeof (resolveValues[i] && resolveValues[i].then) === "function") return primary.then();
			}
			while (i--) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
			return primary.promise();
		}
	});
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	jQuery.Deferred.exceptionHook = function(error, asyncError) {
		if (error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception", error, asyncError);
	};
	jQuery.readyException = function(error) {
		window.setTimeout(function() {
			throw error;
		});
	};
	var readyList = jQuery.Deferred();
	jQuery.fn.ready = function(fn) {
		readyList.then(fn).catch(function(error) {
			jQuery.readyException(error);
		});
		return this;
	};
	jQuery.extend({
		isReady: false,
		readyWait: 1,
		ready: function(wait) {
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
			jQuery.isReady = true;
			if (wait !== true && --jQuery.readyWait > 0) return;
			readyList.resolveWith(document$1, [jQuery]);
		}
	});
	jQuery.ready.then = readyList.then;
	function completed() {
		document$1.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}
	if (document$1.readyState !== "loading") window.setTimeout(jQuery.ready);
	else {
		document$1.addEventListener("DOMContentLoaded", completed);
		window.addEventListener("load", completed);
	}
	var rdashAlpha = /-([a-z])/g;
	function fcamelCase(_all, letter) {
		return letter.toUpperCase();
	}
	function camelCase(string) {
		return string.replace(rdashAlpha, fcamelCase);
	}
	/**
	* Determines whether an object can have data
	*/
	function acceptData(owner) {
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	}
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	Data.uid = 1;
	Data.prototype = {
		cache: function(owner) {
			var value = owner[this.expando];
			if (!value) {
				value = Object.create(null);
				if (acceptData(owner)) if (owner.nodeType) owner[this.expando] = value;
				else Object.defineProperty(owner, this.expando, {
					value,
					configurable: true
				});
			}
			return value;
		},
		set: function(owner, data, value) {
			var prop, cache = this.cache(owner);
			if (typeof data === "string") cache[camelCase(data)] = value;
			else for (prop in data) cache[camelCase(prop)] = data[prop];
			return value;
		},
		get: function(owner, key) {
			return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
		},
		access: function(owner, key, value) {
			if (key === void 0 || key && typeof key === "string" && value === void 0) return this.get(owner, key);
			this.set(owner, key, value);
			return value !== void 0 ? value : key;
		},
		remove: function(owner, key) {
			var i, cache = owner[this.expando];
			if (cache === void 0) return;
			if (key !== void 0) {
				if (Array.isArray(key)) key = key.map(camelCase);
				else {
					key = camelCase(key);
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}
				i = key.length;
				while (i--) delete cache[key[i]];
			}
			if (key === void 0 || jQuery.isEmptyObject(cache)) if (owner.nodeType) owner[this.expando] = void 0;
			else delete owner[this.expando];
		},
		hasData: function(owner) {
			var cache = owner[this.expando];
			return cache !== void 0 && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();
	var dataUser = new Data();
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
	function getData(data) {
		if (data === "true") return true;
		if (data === "false") return false;
		if (data === "null") return null;
		if (data === +data + "") return +data;
		if (rbrace.test(data)) return JSON.parse(data);
		return data;
	}
	function dataAttr(elem, key, data) {
		var name;
		if (data === void 0 && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);
			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}
				dataUser.set(elem, key, data);
			} else data = void 0;
		}
		return data;
	}
	jQuery.extend({
		hasData: function(elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},
		data: function(elem, name, data) {
			return dataUser.access(elem, name, data);
		},
		removeData: function(elem, name) {
			dataUser.remove(elem, name);
		},
		_data: function(elem, name, data) {
			return dataPriv.access(elem, name, data);
		},
		_removeData: function(elem, name) {
			dataPriv.remove(elem, name);
		}
	});
	jQuery.fn.extend({
		data: function(key, value) {
			var i, name, data, elem = this[0], attrs = elem && elem.attributes;
			if (key === void 0) {
				if (this.length) {
					data = dataUser.get(elem);
					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) if (attrs[i]) {
							name = attrs[i].name;
							if (name.indexOf("data-") === 0) {
								name = camelCase(name.slice(5));
								dataAttr(elem, name, data[name]);
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}
				return data;
			}
			if (typeof key === "object") return this.each(function() {
				dataUser.set(this, key);
			});
			return access(this, function(value) {
				var data;
				if (elem && value === void 0) {
					data = dataUser.get(elem, key);
					if (data !== void 0) return data;
					data = dataAttr(elem, key);
					if (data !== void 0) return data;
					return;
				}
				this.each(function() {
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},
		removeData: function(key) {
			return this.each(function() {
				dataUser.remove(this, key);
			});
		}
	});
	jQuery.extend({
		queue: function(elem, type, data) {
			var queue;
			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);
				if (data) if (!queue || Array.isArray(data)) queue = dataPriv.set(elem, type, jQuery.makeArray(data));
				else queue.push(data);
				return queue || [];
			}
		},
		dequeue: function(elem, type) {
			type = type || "fx";
			var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
				jQuery.dequeue(elem, type);
			};
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}
			if (fn) {
				if (type === "fx") queue.unshift("inprogress");
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}
			if (!startLength && hooks) hooks.empty.fire();
		},
		_queueHooks: function(elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.set(elem, key, { empty: jQuery.Callbacks("once memory").add(function() {
				dataPriv.remove(elem, [type + "queue", key]);
			}) });
		}
	});
	jQuery.fn.extend({
		queue: function(type, data) {
			var setter = 2;
			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}
			if (arguments.length < setter) return jQuery.queue(this[0], type);
			return data === void 0 ? this : this.each(function() {
				var queue = jQuery.queue(this, type, data);
				jQuery._queueHooks(this, type);
				if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
			});
		},
		dequeue: function(type) {
			return this.each(function() {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function(type) {
			return this.queue(type || "fx", []);
		},
		promise: function(type, obj) {
			var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
				if (!--count) defer.resolveWith(elements, [elements]);
			};
			if (typeof type !== "string") {
				obj = type;
				type = void 0;
			}
			type = type || "fx";
			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
	var cssExpand = [
		"Top",
		"Right",
		"Bottom",
		"Left"
	];
	function isHiddenWithinTree(elem, el) {
		elem = el || elem;
		return elem.style.display === "none" || elem.style.display === "" && jQuery.css(elem, "display") === "none";
	}
	var ralphaStart = /^[a-z]/, rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
	function isAutoPx(prop) {
		return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));
	}
	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
			return tween.cur();
		} : function() {
			return jQuery.css(elem, prop, "");
		}, initial = currentValue(), unit = valueParts && valueParts[3] || (isAutoPx(prop) ? "px" : ""), initialInUnit = elem.nodeType && (!isAutoPx(prop) || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
		if (initialInUnit && initialInUnit[3] !== unit) {
			initial = initial / 2;
			unit = unit || initialInUnit[3];
			initialInUnit = +initial || 1;
			while (maxIterations--) {
				jQuery.style(elem, prop, initialInUnit + unit);
				if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) maxIterations = 0;
				initialInUnit = initialInUnit / scale;
			}
			initialInUnit = initialInUnit * 2;
			jQuery.style(elem, prop, initialInUnit + unit);
			valueParts = valueParts || [];
		}
		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rmsPrefix = /^-ms-/;
	function cssCamelCase(string) {
		return camelCase(string.replace(rmsPrefix, "ms-"));
	}
	var defaultDisplayMap = {};
	function getDefaultDisplay(elem) {
		var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
		if (display) return display;
		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");
		temp.parentNode.removeChild(temp);
		if (display === "none") display = "block";
		defaultDisplayMap[nodeName] = display;
		return display;
	}
	function showHide(elements, show) {
		var display, elem, values = [], index = 0, length = elements.length;
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) continue;
			display = elem.style.display;
			if (show) {
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) elem.style.display = "";
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
			} else if (display !== "none") {
				values[index] = "none";
				dataPriv.set(elem, "display", display);
			}
		}
		for (index = 0; index < length; index++) if (values[index] != null) elements[index].style.display = values[index];
		return elements;
	}
	jQuery.fn.extend({
		show: function() {
			return showHide(this, true);
		},
		hide: function() {
			return showHide(this);
		},
		toggle: function(state) {
			if (typeof state === "boolean") return state ? this.show() : this.hide();
			return this.each(function() {
				if (isHiddenWithinTree(this)) jQuery(this).show();
				else jQuery(this).hide();
			});
		}
	});
	var isAttached = function(elem) {
		return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
	}, composed = { composed: true };
	if (!documentElement$1.getRootNode) isAttached = function(elem) {
		return jQuery.contains(elem.ownerDocument, elem);
	};
	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
	var wrapMap = {
		thead: ["table"],
		col: ["colgroup", "table"],
		tr: ["tbody", "table"],
		td: [
			"tr",
			"tbody",
			"table"
		]
	};
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	function getAll(context, tag) {
		var ret;
		if (typeof context.getElementsByTagName !== "undefined") ret = arr.slice.call(context.getElementsByTagName(tag || "*"));
		else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
		else ret = [];
		if (tag === void 0 || tag && nodeName(context, tag)) return jQuery.merge([context], ret);
		return ret;
	}
	var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
	function setGlobalEval(elems, refElements) {
		var i = 0, l = elems.length;
		for (; i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
	}
	var rhtml = /<|&#?\w+;/;
	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
		for (; i < l; i++) {
			elem = elems[i];
			if (elem || elem === 0) if (toType(elem) === "object" && (elem.nodeType || isArrayLike(elem))) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
			else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
			else {
				tmp = tmp || fragment.appendChild(context.createElement("div"));
				tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
				wrap = wrapMap[tag] || arr;
				j = wrap.length;
				while (--j > -1) tmp = tmp.appendChild(context.createElement(wrap[j]));
				tmp.innerHTML = jQuery.htmlPrefilter(elem);
				jQuery.merge(nodes, tmp.childNodes);
				tmp = fragment.firstChild;
				tmp.textContent = "";
			}
		}
		fragment.textContent = "";
		i = 0;
		while (elem = nodes[i++]) {
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) ignored.push(elem);
				continue;
			}
			attached = isAttached(elem);
			tmp = getAll(fragment.appendChild(elem), "script");
			if (attached) setGlobalEval(tmp);
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
			}
		}
		return fragment;
	}
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
		else elem.removeAttribute("type");
		return elem;
	}
	function domManip(collection, args, callback, ignored) {
		args = flat(args);
		var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0];
		if (typeof value === "function") return collection.each(function(index) {
			var self = collection.eq(index);
			args[0] = value.call(this, index, self.html());
			domManip(self, args, callback, ignored);
		});
		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;
			if (fragment.childNodes.length === 1) fragment = first;
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;
				for (; i < l; i++) {
					node = fragment;
					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);
						if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
					}
					callback.call(collection[i], node, i);
				}
				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;
					jQuery.map(scripts, restoreScript);
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.get(node, "globalEval") && jQuery.contains(doc, node)) if (node.src && (node.type || "").toLowerCase() !== "module") {
							if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
								nonce: node.nonce,
								crossOrigin: node.crossOrigin
							}, doc);
						} else DOMEval(node.textContent, node, doc);
					}
				}
			}
		}
		return collection;
	}
	var rcheckableType = /^(?:checkbox|radio)$/i;
	var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	function returnTrue() {
		return true;
	}
	function returnFalse() {
		return false;
	}
	function on(elem, types, selector, data, fn, one) {
		var origFn, type;
		if (typeof types === "object") {
			if (typeof selector !== "string") {
				data = data || selector;
				selector = void 0;
			}
			for (type in types) on(elem, type, selector, data, types[type], one);
			return elem;
		}
		if (data == null && fn == null) {
			fn = selector;
			data = selector = void 0;
		} else if (fn == null) if (typeof selector === "string") {
			fn = data;
			data = void 0;
		} else {
			fn = data;
			data = selector;
			selector = void 0;
		}
		if (fn === false) fn = returnFalse;
		else if (!fn) return elem;
		if (one === 1) {
			origFn = fn;
			fn = function(event) {
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function() {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}
	jQuery.event = {
		add: function(elem, types, handler, data, selector) {
			var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
			if (!acceptData(elem)) return;
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
			if (selector) jQuery.find.matchesSelector(documentElement$1, selector);
			if (!handler.guid) handler.guid = jQuery.guid++;
			if (!(events = elemData.events)) events = elemData.events = Object.create(null);
			if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
			};
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();
				if (!type) continue;
				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				special = jQuery.event.special[type] || {};
				handleObj = jQuery.extend({
					type,
					origType,
					data,
					handler,
					guid: handler.guid,
					selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						if (elem.addEventListener) elem.addEventListener(type, eventHandle);
					}
				}
				if (special.add) {
					special.add.call(elem, handleObj);
					if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
				}
				if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
				else handlers.push(handleObj);
			}
		},
		remove: function(elem, types, handler, selector, mappedTypes) {
			var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
			if (!elemData || !(events = elemData.events)) return;
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();
				if (!type) {
					for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
					continue;
				}
				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];
					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);
						if (handleObj.selector) handlers.delegateCount--;
						if (special.remove) special.remove.call(elem, handleObj);
					}
				}
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
					delete events[type];
				}
			}
			if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
		},
		dispatch: function(nativeEvent) {
			var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
			args[0] = event;
			for (i = 1; i < arguments.length; i++) args[i] = arguments[i];
			event.delegateTarget = this;
			if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;
				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
					event.handleObj = handleObj;
					event.data = handleObj.data;
					ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
					if (ret !== void 0) {
						if ((event.result = ret) === false) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
			if (special.postDispatch) special.postDispatch.call(this, event);
			return event.result;
		},
		handlers: function(event, handlers) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
			if (delegateCount && !(event.type === "click" && event.button >= 1)) {
				for (; cur !== this; cur = cur.parentNode || this) if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					for (i = 0; i < delegateCount; i++) {
						handleObj = handlers[i];
						sel = handleObj.selector + " ";
						if (matchedSelectors[sel] === void 0) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
						if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
					}
					if (matchedHandlers.length) handlerQueue.push({
						elem: cur,
						handlers: matchedHandlers
					});
				}
			}
			cur = this;
			if (delegateCount < handlers.length) handlerQueue.push({
				elem: cur,
				handlers: handlers.slice(delegateCount)
			});
			return handlerQueue;
		},
		addProp: function(name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
				get: typeof hook === "function" ? function() {
					if (this.originalEvent) return hook(this.originalEvent);
				} : function() {
					if (this.originalEvent) return this.originalEvent[name];
				},
				set: function(value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value
					});
				}
			});
		},
		fix: function(originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},
		special: jQuery.extend(Object.create(null), {
			load: { noBubble: true },
			click: {
				setup: function(data) {
					var el = this || data;
					if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click", true);
					return false;
				},
				trigger: function(data) {
					var el = this || data;
					if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
					return true;
				},
				_default: function(event) {
					var target = event.target;
					return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
				}
			},
			beforeunload: { postDispatch: function(event) {
				if (event.result !== void 0) event.preventDefault();
			} }
		})
	};
	function leverageNative(el, type, isSetup) {
		if (!isSetup) {
			if (dataPriv.get(el, type) === void 0) jQuery.event.add(el, type, returnTrue);
			return;
		}
		dataPriv.set(el, type, false);
		jQuery.event.add(el, type, {
			namespace: false,
			handler: function(event) {
				var result, saved = dataPriv.get(this, type);
				if (event.isTrigger & 1 && this[type]) {
					if (!saved.length) {
						saved = slice.call(arguments);
						dataPriv.set(this, type, saved);
						this[type]();
						result = dataPriv.get(this, type);
						dataPriv.set(this, type, false);
						if (saved !== result) {
							event.stopImmediatePropagation();
							event.preventDefault();
							return result && result.value;
						}
					} else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
				} else if (saved.length) {
					dataPriv.set(this, type, { value: jQuery.event.trigger(saved[0], saved.slice(1), this) });
					event.stopPropagation();
					event.isImmediatePropagationStopped = returnTrue;
				}
			}
		});
	}
	jQuery.removeEvent = function(elem, type, handle) {
		if (elem.removeEventListener) elem.removeEventListener(type, handle);
	};
	jQuery.Event = function(src, props) {
		if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;
			this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;
			this.target = src.target;
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
		} else this.type = src;
		if (props) jQuery.extend(this, props);
		this.timeStamp = src && src.timeStamp || Date.now();
		this[jQuery.expando] = true;
	};
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = returnTrue;
			if (e && !this.isSimulated) e.preventDefault();
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = returnTrue;
			if (e && !this.isSimulated) e.stopPropagation();
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = returnTrue;
			if (e && !this.isSimulated) e.stopImmediatePropagation();
			this.stopPropagation();
		}
	};
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: true
	}, jQuery.event.addProp);
	jQuery.each({
		focus: "focusin",
		blur: "focusout"
	}, function(type, delegateType) {
		function focusMappedHandler(nativeEvent) {
			var event = jQuery.event.fix(nativeEvent);
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;
			if (event.target === event.currentTarget) dataPriv.get(this, "handle")(event);
		}
		jQuery.event.special[type] = {
			setup: function() {
				leverageNative(this, type, true);
				if (isIE) this.addEventListener(delegateType, focusMappedHandler);
				else return false;
			},
			trigger: function() {
				leverageNative(this, type);
				return true;
			},
			teardown: function() {
				if (isIE) this.removeEventListener(delegateType, focusMappedHandler);
				else return false;
			},
			_default: function(event) {
				return dataPriv.get(event.target, type);
			},
			delegateType
		};
	});
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,
			handle: function(event) {
				var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});
	jQuery.fn.extend({
		on: function(types, selector, data, fn) {
			return on(this, types, selector, data, fn);
		},
		one: function(types, selector, data, fn) {
			return on(this, types, selector, data, fn, 1);
		},
		off: function(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if (typeof types === "object") {
				for (type in types) this.off(type, selector, types[type]);
				return this;
			}
			if (selector === false || typeof selector === "function") {
				fn = selector;
				selector = void 0;
			}
			if (fn === false) fn = returnFalse;
			return this.each(function() {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});
	var rnoInnerhtml = /<script|<style|<link/i;
	function manipulationTarget(elem, content) {
		if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
		return elem;
	}
	function cloneCopyEvent(src, dest) {
		var type, i, l, events = dataPriv.get(src, "events");
		if (dest.nodeType !== 1) return;
		if (events) {
			dataPriv.remove(dest, "handle events");
			for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
		}
		if (dataUser.hasData(src)) dataUser.set(dest, jQuery.extend({}, dataUser.get(src)));
	}
	function remove(elem, selector, keepData) {
		var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
			if (node.parentNode) {
				if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
				node.parentNode.removeChild(node);
			}
		}
		return elem;
	}
	jQuery.extend({
		htmlPrefilter: function(html) {
			return html;
		},
		clone: function(elem, dataAndEvents, deepDataAndEvents) {
			var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
			if (isIE && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
				destElements = getAll(clone);
				srcElements = getAll(elem);
				for (i = 0, l = srcElements.length; i < l; i++) if (nodeName(destElements[i], "textarea")) destElements[i].defaultValue = srcElements[i].defaultValue;
			}
			if (dataAndEvents) if (deepDataAndEvents) {
				srcElements = srcElements || getAll(elem);
				destElements = destElements || getAll(clone);
				for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
			} else cloneCopyEvent(elem, clone);
			destElements = getAll(clone, "script");
			if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			return clone;
		},
		cleanData: function(elems) {
			var data, elem, type, special = jQuery.event.special, i = 0;
			for (; (elem = elems[i]) !== void 0; i++) if (acceptData(elem)) {
				if (data = elem[dataPriv.expando]) {
					if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type);
					else jQuery.removeEvent(elem, type, data.handle);
					elem[dataPriv.expando] = void 0;
				}
				if (elem[dataUser.expando]) elem[dataUser.expando] = void 0;
			}
		}
	});
	jQuery.fn.extend({
		detach: function(selector) {
			return remove(this, selector, true);
		},
		remove: function(selector) {
			return remove(this, selector);
		},
		text: function(value) {
			return access(this, function(value) {
				return value === void 0 ? jQuery.text(this) : this.empty().each(function() {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
				});
			}, null, value, arguments.length);
		},
		append: function() {
			return domManip(this, arguments, function(elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) manipulationTarget(this, elem).appendChild(elem);
			});
		},
		prepend: function() {
			return domManip(this, arguments, function(elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},
		before: function() {
			return domManip(this, arguments, function(elem) {
				if (this.parentNode) this.parentNode.insertBefore(elem, this);
			});
		},
		after: function() {
			return domManip(this, arguments, function(elem) {
				if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
			});
		},
		empty: function() {
			var elem, i = 0;
			for (; (elem = this[i]) != null; i++) if (elem.nodeType === 1) {
				jQuery.cleanData(getAll(elem, false));
				elem.textContent = "";
			}
			return this;
		},
		clone: function(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
			return this.map(function() {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},
		html: function(value) {
			return access(this, function(value) {
				var elem = this[0] || {}, i = 0, l = this.length;
				if (value === void 0 && elem.nodeType === 1) return elem.innerHTML;
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
					value = jQuery.htmlPrefilter(value);
					try {
						for (; i < l; i++) {
							elem = this[i] || {};
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}
						elem = 0;
					} catch (e) {}
				}
				if (elem) this.empty().append(value);
			}, null, value, arguments.length);
		},
		replaceWith: function() {
			var ignored = [];
			return domManip(this, arguments, function(elem) {
				var parent = this.parentNode;
				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) parent.replaceChild(elem, this);
				}
			}, ignored);
		}
	});
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(name, original) {
		jQuery.fn[name] = function(selector) {
			var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);
				push.apply(ret, elems);
			}
			return this.pushStack(ret);
		};
	});
	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	var rcustomProp = /^--/;
	function getStyles(elem) {
		var view = elem.ownerDocument.defaultView;
		if (!view) view = window;
		return view.getComputedStyle(elem);
	}
	function swap(elem, options, callback) {
		var ret, name, old = {};
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}
		ret = callback.call(elem);
		for (name in options) elem.style[name] = old[name];
		return ret;
	}
	function curCSS(elem, name, computed) {
		var ret, isCustomProp = rcustomProp.test(name);
		computed = computed || getStyles(elem);
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];
			if (isCustomProp && ret) ret = ret.replace(rtrimCSS, "$1") || void 0;
			if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
		}
		return ret !== void 0 ? ret + "" : ret;
	}
	var cssPrefixes = [
		"Webkit",
		"Moz",
		"ms"
	], emptyStyle = document$1.createElement("div").style;
	function vendorPropName(name) {
		var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) return name;
		}
	}
	function finalPropName(name) {
		if (name in emptyStyle) return name;
		return vendorPropName(name) || name;
	}
	var reliableTrDimensionsVal, reliableColDimensionsVal, table = document$1.createElement("table");
	function computeTableStyleTests() {
		if (!table || !table.style) return;
		var trStyle, col = document$1.createElement("col"), tr = document$1.createElement("tr"), td = document$1.createElement("td");
		table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate;border-spacing:0";
		tr.style.cssText = "box-sizing:content-box;border:1px solid;height:1px";
		td.style.cssText = "height:9px;width:9px;padding:0";
		col.span = 2;
		documentElement$1.appendChild(table).appendChild(col).parentNode.appendChild(tr).appendChild(td).parentNode.appendChild(td.cloneNode(true));
		if (table.offsetWidth === 0) {
			documentElement$1.removeChild(table);
			return;
		}
		trStyle = window.getComputedStyle(tr);
		reliableColDimensionsVal = isIE || Math.round(parseFloat(window.getComputedStyle(col).width)) === 18;
		reliableTrDimensionsVal = Math.round(parseFloat(trStyle.height) + parseFloat(trStyle.borderTopWidth) + parseFloat(trStyle.borderBottomWidth)) === tr.offsetHeight;
		documentElement$1.removeChild(table);
		table = null;
	}
	jQuery.extend(support, {
		reliableTrDimensions: function() {
			computeTableStyleTests();
			return reliableTrDimensionsVal;
		},
		reliableColDimensions: function() {
			computeTableStyleTests();
			return reliableColDimensionsVal;
		}
	});
	var cssShow = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	}, cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};
	function setPositiveNumber(_elem, value, subtract) {
		var matches = rcssNum.exec(value);
		return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}
	function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
		var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
		if (box === (isBorderBox ? "border" : "content")) return 0;
		for (; i < 4; i += 2) {
			if (box === "margin") marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
			if (!isBorderBox) {
				delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
			} else {
				if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
			}
		}
		if (!isBorderBox && computedVal >= 0) delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
		return delta + marginDelta;
	}
	function getWidthOrHeight(elem, dimension, extra) {
		var styles = getStyles(elem), isBorderBox = (isIE || extra) && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
		if (rnumnonpx.test(val)) {
			if (!extra) return val;
			val = "auto";
		}
		if ((val === "auto" || isIE && isBorderBox || !support.reliableColDimensions() && nodeName(elem, "col") || !support.reliableTrDimensions() && nodeName(elem, "tr")) && elem.getClientRects().length) {
			isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
			valueIsBorderBox = offsetProp in elem;
			if (valueIsBorderBox) val = elem[offsetProp];
		}
		val = parseFloat(val) || 0;
		return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
	}
	jQuery.extend({
		cssHooks: {},
		style: function(elem, name, value, extra) {
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
			var ret, type, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
			if (!isCustomProp) name = finalPropName(origName);
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
			if (value !== void 0) {
				type = typeof value;
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);
					type = "number";
				}
				if (value == null || value !== value) return;
				if (type === "number") value += ret && ret[3] || (isAutoPx(origName) ? "px" : "");
				if (isIE && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) if (isCustomProp) style.setProperty(name, value);
				else style[name] = value;
			} else {
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) return ret;
				return style[name];
			}
		},
		css: function(elem, name, extra, styles) {
			var val, num, hooks, origName = cssCamelCase(name);
			if (!rcustomProp.test(name)) name = finalPropName(origName);
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
			if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
			if (val === void 0) val = curCSS(elem, name, styles);
			if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}
			return val;
		}
	});
	jQuery.each(["height", "width"], function(_i, dimension) {
		jQuery.cssHooks[dimension] = {
			get: function(elem, computed, extra) {
				if (computed) return jQuery.css(elem, "display") === "none" ? swap(elem, cssShow, function() {
					return getWidthOrHeight(elem, dimension, extra);
				}) : getWidthOrHeight(elem, dimension, extra);
			},
			set: function(elem, value, extra) {
				var matches, styles = getStyles(elem), isBorderBox = extra && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
					elem.style[dimension] = value;
					value = jQuery.css(elem, dimension);
				}
				return setPositiveNumber(elem, value, subtract);
			}
		};
	});
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = { expand: function(value) {
			var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
			for (; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
			return expanded;
		} };
		if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
	});
	jQuery.fn.extend({ css: function(name, value) {
		return access(this, function(elem, name, value) {
			var styles, len, map = {}, i = 0;
			if (Array.isArray(name)) {
				styles = getStyles(elem);
				len = name.length;
				for (; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
				return map;
			}
			return value !== void 0 ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
		}, name, value, arguments.length > 1);
	} });
	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;
	Tween.prototype = {
		constructor: Tween,
		init: function(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (isAutoPx(prop) ? "px" : "");
		},
		cur: function() {
			var hooks = Tween.propHooks[this.prop];
			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function(percent) {
			var eased, hooks = Tween.propHooks[this.prop];
			if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			else this.pos = eased = percent;
			this.now = (this.end - this.start) * eased + this.start;
			if (this.options.step) this.options.step.call(this.elem, this.now, this);
			if (hooks && hooks.set) hooks.set(this);
			else Tween.propHooks._default.set(this);
			return this;
		}
	};
	Tween.prototype.init.prototype = Tween.prototype;
	Tween.propHooks = { _default: {
		get: function(tween) {
			var result;
			if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
			result = jQuery.css(tween.elem, tween.prop, "");
			return !result || result === "auto" ? 0 : result;
		},
		set: function(tween) {
			if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
			else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
			else tween.elem[tween.prop] = tween.now;
		}
	} };
	jQuery.easing = {
		linear: function(p) {
			return p;
		},
		swing: function(p) {
			return .5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.step = {};
	var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
	function schedule() {
		if (inProgress) {
			if (document$1.hidden === false && window.requestAnimationFrame) window.requestAnimationFrame(schedule);
			else window.setTimeout(schedule, 13);
			jQuery.fx.tick();
		}
	}
	function createFxNow() {
		window.setTimeout(function() {
			fxNow = void 0;
		});
		return fxNow = Date.now();
	}
	function genFx(type, includeWidth) {
		var which, i = 0, attrs = { height: type };
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}
		if (includeWidth) attrs.opacity = attrs.width = type;
		return attrs;
	}
	function createTween(value, prop, animation) {
		var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
		for (; index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
	}
	function defaultPrefilter(elem, props, opts) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if (!hooks.unqueued) oldfire();
				};
			}
			hooks.unqueued++;
			anim.always(function() {
				anim.always(function() {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
				});
			});
		}
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) if (value === "show" && dataShow && dataShow[prop] !== void 0) hidden = true;
				else continue;
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) return;
		if (isBox && elem.nodeType === 1) {
			opts.overflow = [
				style.overflow,
				style.overflowX,
				style.overflowY
			];
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
			display = jQuery.css(elem, "display");
			if (display === "none") if (restoreDisplay) display = restoreDisplay;
			else {
				showHide([elem], true);
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css(elem, "display");
				showHide([elem]);
			}
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {
					if (!propTween) {
						anim.done(function() {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}
		propTween = false;
		for (prop in orig) {
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) hidden = dataShow.hidden;
				} else dataShow = dataPriv.set(elem, "fxshow", { display: restoreDisplay });
				if (toggle) dataShow.hidden = !hidden;
				if (hidden) showHide([elem], true);
				anim.done(function() {
					if (!hidden) showHide([elem]);
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) jQuery.style(elem, prop, orig[prop]);
				});
			}
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;
		for (index in props) {
			name = cssCamelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (Array.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}
			if (index !== name) {
				props[name] = value;
				delete props[index];
			}
			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];
				for (index in value) if (!(index in props)) {
					props[index] = value[index];
					specialEasing[index] = easing;
				}
			} else specialEasing[name] = easing;
		}
	}
	function Animation(elem, properties, options) {
		var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
			delete tick.elem;
		}), tick = function() {
			if (stopped) return false;
			var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index = 0, length = animation.tweens.length;
			for (; index < length; index++) animation.tweens[index].run(percent);
			deferred.notifyWith(elem, [
				animation,
				percent,
				remaining
			]);
			if (percent < 1 && length) return remaining;
			if (!length) deferred.notifyWith(elem, [
				animation,
				1,
				0
			]);
			deferred.resolveWith(elem, [animation]);
			return false;
		}, animation = deferred.promise({
			elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function(gotoEnd) {
				var index = 0, length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) return this;
				stopped = true;
				for (; index < length; index++) animation.tweens[index].run(1);
				if (gotoEnd) {
					deferred.notifyWith(elem, [
						animation,
						1,
						0
					]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else deferred.rejectWith(elem, [animation, gotoEnd]);
				return this;
			}
		}), props = animation.props;
		propFilter(props, animation.opts.specialEasing);
		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (typeof result.stop === "function") jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
				return result;
			}
		}
		jQuery.map(props, createTween, animation);
		if (typeof animation.opts.start === "function") animation.opts.start.call(elem, animation);
		animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		jQuery.fx.timer(jQuery.extend(tick, {
			elem,
			anim: animation,
			queue: animation.opts.queue
		}));
		return animation;
	}
	jQuery.Animation = jQuery.extend(Animation, {
		tweeners: { "*": [function(prop, value) {
			var tween = this.createTween(prop, value);
			adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
			return tween;
		}] },
		tweener: function(props, callback) {
			if (typeof props === "function") {
				callback = props;
				props = ["*"];
			} else props = props.match(rnothtmlwhite);
			var prop, index = 0, length = props.length;
			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},
		prefilters: [defaultPrefilter],
		prefilter: function(callback, prepend) {
			if (prepend) Animation.prefilters.unshift(callback);
			else Animation.prefilters.push(callback);
		}
	});
	jQuery.speed = function(speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || easing || typeof speed === "function" && speed,
			duration: speed,
			easing: fn && easing || easing && typeof easing !== "function" && easing
		};
		if (jQuery.fx.off) opt.duration = 0;
		else if (typeof opt.duration !== "number") if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
		else opt.duration = jQuery.fx.speeds._default;
		if (opt.queue == null || opt.queue === true) opt.queue = "fx";
		opt.old = opt.complete;
		opt.complete = function() {
			if (typeof opt.old === "function") opt.old.call(this);
			if (opt.queue) jQuery.dequeue(this, opt.queue);
		};
		return opt;
	};
	jQuery.fn.extend({
		fadeTo: function(speed, to, easing, callback) {
			return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
				var anim = Animation(this, jQuery.extend({}, prop), optall);
				if (empty || dataPriv.get(this, "finish")) anim.stop(true);
			};
			doAnimation.finish = doAnimation;
			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function(type, clearQueue, gotoEnd) {
			var stopQueue = function(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};
			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = void 0;
			}
			if (clearQueue) this.queue(type || "fx", []);
			return this.each(function() {
				var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
				if (index) {
					if (data[index] && data[index].stop) stopQueue(data[index]);
				} else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
				for (index = timers.length; index--;) if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
					timers[index].anim.stop(gotoEnd);
					dequeue = false;
					timers.splice(index, 1);
				}
				if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
			});
		},
		finish: function(type) {
			if (type !== false) type = type || "fx";
			return this.each(function() {
				var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
				data.finish = true;
				jQuery.queue(this, type, []);
				if (hooks && hooks.stop) hooks.stop.call(this, true);
				for (index = timers.length; index--;) if (timers[index].elem === this && timers[index].queue === type) {
					timers[index].anim.stop(true);
					timers.splice(index, 1);
				}
				for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
				delete data.finish;
			});
		}
	});
	jQuery.each([
		"toggle",
		"show",
		"hide"
	], function(_i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function(speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function(name, props) {
		jQuery.fn[name] = function(speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer, i = 0, timers = jQuery.timers;
		fxNow = Date.now();
		for (; i < timers.length; i++) {
			timer = timers[i];
			if (!timer() && timers[i] === timer) timers.splice(i--, 1);
		}
		if (!timers.length) jQuery.fx.stop();
		fxNow = void 0;
	};
	jQuery.fx.timer = function(timer) {
		jQuery.timers.push(timer);
		jQuery.fx.start();
	};
	jQuery.fx.start = function() {
		if (inProgress) return;
		inProgress = true;
		schedule();
	};
	jQuery.fx.stop = function() {
		inProgress = null;
	};
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	jQuery.fn.delay = function(time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";
		return this.queue(type, function(next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function() {
				window.clearTimeout(timeout);
			};
		});
	};
	var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
	jQuery.fn.extend({
		prop: function(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},
		removeProp: function(name) {
			return this.each(function() {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});
	jQuery.extend({
		prop: function(elem, name, value) {
			var ret, hooks, nType = elem.nodeType;
			if (nType === 3 || nType === 8 || nType === 2) return;
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}
			if (value !== void 0) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
				return elem[name] = value;
			}
			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
			return elem[name];
		},
		propHooks: { tabIndex: { get: function(elem) {
			var tabindex = elem.getAttribute("tabindex");
			if (tabindex) return parseInt(tabindex, 10);
			if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
			return -1;
		} } },
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});
	if (isIE) jQuery.propHooks.selected = {
		get: function(elem) {
			var parent = elem.parentNode;
			if (parent && parent.parentNode) parent.parentNode.selectedIndex;
			return null;
		},
		set: function(elem) {
			var parent = elem.parentNode;
			if (parent) {
				parent.selectedIndex;
				if (parent.parentNode) parent.parentNode.selectedIndex;
			}
		}
	};
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[this.toLowerCase()] = this;
	});
	function stripAndCollapse(value) {
		return (value.match(rnothtmlwhite) || []).join(" ");
	}
	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}
	function classesToArray(value) {
		if (Array.isArray(value)) return value;
		if (typeof value === "string") return value.match(rnothtmlwhite) || [];
		return [];
	}
	jQuery.fn.extend({
		addClass: function(value) {
			var classNames, cur, curValue, className, i, finalValue;
			if (typeof value === "function") return this.each(function(j) {
				jQuery(this).addClass(value.call(this, j, getClass(this)));
			});
			classNames = classesToArray(value);
			if (classNames.length) return this.each(function() {
				curValue = getClass(this);
				cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
				if (cur) {
					for (i = 0; i < classNames.length; i++) {
						className = classNames[i];
						if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
					}
					finalValue = stripAndCollapse(cur);
					if (curValue !== finalValue) this.setAttribute("class", finalValue);
				}
			});
			return this;
		},
		removeClass: function(value) {
			var classNames, cur, curValue, className, i, finalValue;
			if (typeof value === "function") return this.each(function(j) {
				jQuery(this).removeClass(value.call(this, j, getClass(this)));
			});
			if (!arguments.length) return this.attr("class", "");
			classNames = classesToArray(value);
			if (classNames.length) return this.each(function() {
				curValue = getClass(this);
				cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
				if (cur) {
					for (i = 0; i < classNames.length; i++) {
						className = classNames[i];
						while (cur.indexOf(" " + className + " ") > -1) cur = cur.replace(" " + className + " ", " ");
					}
					finalValue = stripAndCollapse(cur);
					if (curValue !== finalValue) this.setAttribute("class", finalValue);
				}
			});
			return this;
		},
		toggleClass: function(value, stateVal) {
			var classNames, className, i, self;
			if (typeof value === "function") return this.each(function(i) {
				jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
			});
			if (typeof stateVal === "boolean") return stateVal ? this.addClass(value) : this.removeClass(value);
			classNames = classesToArray(value);
			if (classNames.length) return this.each(function() {
				self = jQuery(this);
				for (i = 0; i < classNames.length; i++) {
					className = classNames[i];
					if (self.hasClass(className)) self.removeClass(className);
					else self.addClass(className);
				}
			});
			return this;
		},
		hasClass: function(selector) {
			var className, elem, i = 0;
			className = " " + selector + " ";
			while (elem = this[i++]) if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
			return false;
		}
	});
	jQuery.fn.extend({ val: function(value) {
		var hooks, ret, valueIsFunction, elem = this[0];
		if (!arguments.length) {
			if (elem) {
				hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
				if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) return ret;
				ret = elem.value;
				return ret == null ? "" : ret;
			}
			return;
		}
		valueIsFunction = typeof value === "function";
		return this.each(function(i) {
			var val;
			if (this.nodeType !== 1) return;
			if (valueIsFunction) val = value.call(this, i, jQuery(this).val());
			else val = value;
			if (val == null) val = "";
			else if (typeof val === "number") val += "";
			else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
				return value == null ? "" : value + "";
			});
			hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
			if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) this.value = val;
		});
	} });
	jQuery.extend({ valHooks: { select: {
		get: function(elem) {
			var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
			if (index < 0) i = max;
			else i = one ? index : 0;
			for (; i < max; i++) {
				option = options[i];
				if (option.selected && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
					value = jQuery(option).val();
					if (one) return value;
					values.push(value);
				}
			}
			return values;
		},
		set: function(elem, value) {
			var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
			while (i--) {
				option = options[i];
				if (option.selected = jQuery.inArray(jQuery(option).val(), values) > -1) optionSet = true;
			}
			if (!optionSet) elem.selectedIndex = -1;
			return values;
		}
	} } });
	if (isIE) jQuery.valHooks.option = { get: function(elem) {
		var val = elem.getAttribute("value");
		return val != null ? val : stripAndCollapse(jQuery.text(elem));
	} };
	jQuery.each(["radio", "checkbox"], function() {
		jQuery.valHooks[this] = { set: function(elem, value) {
			if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
		} };
	});
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
		e.stopPropagation();
	};
	jQuery.extend(jQuery.event, {
		trigger: function(event, data, elem, onlyHandlers) {
			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document$1], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
			cur = lastElement = tmp = elem = elem || document$1;
			if (elem.nodeType === 3 || elem.nodeType === 8) return;
			if (rfocusMorph.test(type + jQuery.event.triggered)) return;
			if (type.indexOf(".") > -1) {
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
			event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
			event.result = void 0;
			if (!event.target) event.target = elem;
			data = data == null ? [event] : jQuery.makeArray(data, [event]);
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
			if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}
				if (tmp === (elem.ownerDocument || document$1)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
			}
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
				lastElement = cur;
				event.type = i > 1 ? bubbleType : special.bindType || type;
				handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
				if (handle) handle.apply(cur, data);
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) event.preventDefault();
				}
			}
			event.type = type;
			if (!onlyHandlers && !event.isDefaultPrevented()) {
				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
					if (ontype && typeof elem[type] === "function" && !isWindow(elem)) {
						tmp = elem[ontype];
						if (tmp) elem[ontype] = null;
						jQuery.event.triggered = type;
						if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
						elem[type]();
						if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
						jQuery.event.triggered = void 0;
						if (tmp) elem[ontype] = tmp;
					}
				}
			}
			return event.result;
		},
		simulate: function(type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type,
				isSimulated: true
			});
			jQuery.event.trigger(e, null, elem);
		}
	});
	jQuery.fn.extend({
		trigger: function(type, data) {
			return this.each(function() {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function(type, data) {
			var elem = this[0];
			if (elem) return jQuery.event.trigger(type, data, elem, true);
		}
	});
	var location = window.location;
	var nonce = { guid: Date.now() };
	var rquery = /\?/;
	jQuery.parseXML = function(data) {
		var xml, parserErrorElem;
		if (!data || typeof data !== "string") return null;
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {}
		parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
		if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
			return el.textContent;
		}).join("\n") : data));
		return xml;
	};
	var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
	function buildParams(prefix, obj, traditional, add) {
		var name;
		if (Array.isArray(obj)) jQuery.each(obj, function(i, v) {
			if (traditional || rbracket.test(prefix)) add(prefix, v);
			else buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
		});
		else if (!traditional && toType(obj) === "object") for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
		else add(prefix, obj);
	}
	jQuery.param = function(a, traditional) {
		var prefix, s = [], add = function(key, valueOrFunction) {
			var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};
		if (a == null) return "";
		if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
			add(this.name, this.value);
		});
		else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
		return s.join("&");
	};
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function() {
			return this.map(function() {
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function() {
				var type = this.type;
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function(_i, elem) {
				var val = jQuery(this).val();
				if (val == null) return null;
				if (Array.isArray(val)) return jQuery.map(val, function(val) {
					return {
						name: elem.name,
						value: val.replace(rCRLF, "\r\n")
					};
				});
				return {
					name: elem.name,
					value: val.replace(rCRLF, "\r\n")
				};
			}).get();
		}
	});
	var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document$1.createElement("a");
	originAnchor.href = location.href;
	function addToPrefiltersOrTransports(structure) {
		return function(dataTypeExpression, func) {
			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
			var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
			if (typeof func === "function") while (dataType = dataTypes[i++]) if (dataType[0] === "+") {
				dataType = dataType.slice(1) || "*";
				(structure[dataType] = structure[dataType] || []).unshift(func);
			} else (structure[dataType] = structure[dataType] || []).push(func);
		};
	}
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
		var inspected = {}, seekingTransport = structure === transports;
		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) return !(selected = dataTypeOrTransport);
			});
			return selected;
		}
		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}
	function ajaxExtend(target, src) {
		var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
		for (key in src) if (src[key] !== void 0) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
		if (deep) jQuery.extend(true, target, deep);
		return target;
	}
	function ajaxHandleResponses(s, jqXHR, responses) {
		var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === void 0) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
		if (ct) {
			for (type in contents) if (contents[type] && contents[type].test(ct)) {
				dataTypes.unshift(type);
				break;
			}
		}
		if (dataTypes[0] in responses) finalDataType = dataTypes[0];
		else {
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) firstDataType = type;
			}
			finalDataType = finalDataType || firstDataType;
		}
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
			return responses[finalDataType];
		}
	}
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
		if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
		current = dataTypes.shift();
		while (current) {
			if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
			if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
			prev = current;
			current = dataTypes.shift();
			if (current) {
				if (current === "*") current = prev;
				else if (prev !== "*" && prev !== current) {
					conv = converters[prev + " " + current] || converters["* " + current];
					if (!conv) for (conv2 in converters) {
						tmp = conv2.split(" ");
						if (tmp[1] === current) {
							conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
							if (conv) {
								if (conv === true) conv = converters[conv2];
								else if (converters[conv2] !== true) {
									current = tmp[0];
									dataTypes.unshift(tmp[1]);
								}
								break;
							}
						}
					}
					if (conv !== true) if (conv && s.throws) response = conv(response);
					else try {
						response = conv(response);
					} catch (e) {
						return {
							state: "parsererror",
							error: conv ? e : "No conversion from " + prev + " to " + current
						};
					}
				}
			}
		}
		return {
			state: "success",
			data: response
		};
	}
	jQuery.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": true,
				"text json": JSON.parse,
				"text xml": jQuery.parseXML
			},
			flatOptions: {
				url: true,
				context: true
			}
		},
		ajaxSetup: function(target, settings) {
			return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
		},
		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),
		ajax: function(url, options) {
			if (typeof url === "object") {
				options = url;
				url = void 0;
			}
			options = options || {};
			var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
				readyState: 0,
				getResponseHeader: function(key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
						}
						match = responseHeaders[key.toLowerCase() + " "];
					}
					return match == null ? null : match.join(", ");
				},
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},
				setRequestHeader: function(name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},
				overrideMimeType: function(type) {
					if (completed == null) s.mimeType = type;
					return this;
				},
				statusCode: function(map) {
					var code;
					if (map) if (completed) jqXHR.always(map[jqXHR.status]);
					else for (code in map) statusCode[code] = [statusCode[code], map[code]];
					return this;
				},
				abort: function(statusText) {
					var finalText = statusText || strAbort;
					if (transport) transport.abort(finalText);
					done(0, finalText);
					return this;
				}
			};
			deferred.promise(jqXHR);
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
			s.type = options.method || options.type || s.method || s.type;
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
			if (s.crossDomain == null) {
				urlAnchor = document$1.createElement("a");
				try {
					urlAnchor.href = s.url;
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {
					s.crossDomain = true;
				}
			}
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
			if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
			if (completed) return jqXHR;
			fireGlobals = jQuery.event && s.global;
			if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
			s.type = s.type.toUpperCase();
			s.hasContent = !rnoContent.test(s.type);
			cacheURL = s.url.replace(rhash, "");
			if (!s.hasContent) {
				uncached = s.url.slice(cacheURL.length);
				if (s.data && (s.processData || typeof s.data === "string")) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
					delete s.data;
				}
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
				}
				s.url = cacheURL + uncached;
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
			}
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
			for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) return jqXHR.abort();
			strAbort = "abort";
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
			if (!transport) done(-1, "No Transport");
			else {
				jqXHR.readyState = 1;
				if (fireGlobals) globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				if (completed) return jqXHR;
				if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout);
				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {
					if (completed) throw e;
					done(-1, e);
				}
			}
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess, success, error, response, modified, statusText = nativeStatusText;
				if (completed) return;
				completed = true;
				if (timeoutTimer) window.clearTimeout(timeoutTimer);
				transport = void 0;
				responseHeadersString = headers || "";
				jqXHR.readyState = status > 0 ? 4 : 0;
				isSuccess = status >= 200 && status < 300 || status === 304;
				if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
				if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
				response = ajaxConvert(s, response, jqXHR, isSuccess);
				if (isSuccess) {
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) jQuery.lastModified[cacheURL] = modified;
						modified = jqXHR.getResponseHeader("etag");
						if (modified) jQuery.etag[cacheURL] = modified;
					}
					if (status === 204 || s.type === "HEAD") statusText = "nocontent";
					else if (status === 304) statusText = "notmodified";
					else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) status = 0;
					}
				}
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";
				if (isSuccess) deferred.resolveWith(callbackContext, [
					success,
					statusText,
					jqXHR
				]);
				else deferred.rejectWith(callbackContext, [
					jqXHR,
					statusText,
					error
				]);
				jqXHR.statusCode(statusCode);
				statusCode = void 0;
				if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
					jqXHR,
					s,
					isSuccess ? success : error
				]);
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
				}
			}
			return jqXHR;
		},
		getJSON: function(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},
		getScript: function(url, callback) {
			return jQuery.get(url, void 0, callback, "script");
		}
	});
	jQuery.each(["get", "post"], function(_i, method) {
		jQuery[method] = function(url, data, callback, type) {
			if (typeof data === "function" || data === null) {
				type = type || callback;
				callback = data;
				data = void 0;
			}
			return jQuery.ajax(jQuery.extend({
				url,
				type: method,
				dataType: type,
				data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});
	jQuery.ajaxPrefilter(function(s) {
		var i;
		for (i in s.headers) if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
	});
	jQuery._evalUrl = function(url, options, doc) {
		return jQuery.ajax({
			url,
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			scriptAttrs: options.crossOrigin ? { "crossOrigin": options.crossOrigin } : void 0,
			converters: { "text script": function() {} },
			dataFilter: function(response) {
				jQuery.globalEval(response, options, doc);
			}
		});
	};
	jQuery.fn.extend({
		wrapAll: function(html) {
			var wrap;
			if (this[0]) {
				if (typeof html === "function") html = html.call(this[0]);
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
				if (this[0].parentNode) wrap.insertBefore(this[0]);
				wrap.map(function() {
					var elem = this;
					while (elem.firstElementChild) elem = elem.firstElementChild;
					return elem;
				}).append(this);
			}
			return this;
		},
		wrapInner: function(html) {
			if (typeof html === "function") return this.each(function(i) {
				jQuery(this).wrapInner(html.call(this, i));
			});
			return this.each(function() {
				var self = jQuery(this), contents = self.contents();
				if (contents.length) contents.wrapAll(html);
				else self.append(html);
			});
		},
		wrap: function(html) {
			var htmlIsFunction = typeof html === "function";
			return this.each(function(i) {
				jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
			});
		},
		unwrap: function(selector) {
			this.parent(selector).not("body").each(function() {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});
	jQuery.expr.pseudos.hidden = function(elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function(elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};
	jQuery.ajaxSettings.xhr = function() {
		return new window.XMLHttpRequest();
	};
	var xhrSuccessStatus = { 0: 200 };
	jQuery.ajaxTransport(function(options) {
		var callback;
		return {
			send: function(headers, complete) {
				var i, xhr = options.xhr();
				xhr.open(options.type, options.url, options.async, options.username, options.password);
				if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
				if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
				if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
				for (i in headers) xhr.setRequestHeader(i, headers[i]);
				callback = function(type) {
					return function() {
						if (callback) {
							callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;
							if (type === "abort") xhr.abort();
							else if (type === "error") complete(xhr.status, xhr.statusText);
							else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") === "text" ? { text: xhr.responseText } : { binary: xhr.response }, xhr.getAllResponseHeaders());
						}
					};
				};
				xhr.onload = callback();
				xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");
				callback = callback("abort");
				try {
					xhr.send(options.hasContent && options.data || null);
				} catch (e) {
					if (callback) throw e;
				}
			},
			abort: function() {
				if (callback) callback();
			}
		};
	});
	function canUseScriptTag(s) {
		return s.scriptAttrs || !s.headers && (s.crossDomain || s.async && jQuery.inArray("json", s.dataTypes) < 0);
	}
	jQuery.ajaxSetup({
		accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
		converters: { "text script": function(text) {
			jQuery.globalEval(text);
			return text;
		} }
	});
	jQuery.ajaxPrefilter("script", function(s) {
		if (s.cache === void 0) s.cache = false;
		if (canUseScriptTag(s)) s.type = "GET";
	});
	jQuery.ajaxTransport("script", function(s) {
		if (canUseScriptTag(s)) {
			var script, callback;
			return {
				send: function(_, complete) {
					script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", callback = function(evt) {
						script.remove();
						callback = null;
						if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
					});
					document$1.head.appendChild(script[0]);
				},
				abort: function() {
					if (callback) callback();
				}
			};
		}
	});
	var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
			this[callback] = true;
			return callback;
		}
	});
	jQuery.ajaxPrefilter("jsonp", function(s, originalSettings, jqXHR) {
		var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
		callbackName = s.jsonpCallback = typeof s.jsonpCallback === "function" ? s.jsonpCallback() : s.jsonpCallback;
		if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
		else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
		s.converters["script json"] = function() {
			if (!responseContainer) jQuery.error(callbackName + " was not called");
			return responseContainer[0];
		};
		s.dataTypes[0] = "json";
		overwritten = window[callbackName];
		window[callbackName] = function() {
			responseContainer = arguments;
		};
		jqXHR.always(function() {
			if (overwritten === void 0) jQuery(window).removeProp(callbackName);
			else window[callbackName] = overwritten;
			if (s[callbackName]) {
				s.jsonpCallback = originalSettings.jsonpCallback;
				oldCallbacks.push(callbackName);
			}
			if (responseContainer && typeof overwritten === "function") overwritten(responseContainer[0]);
			responseContainer = overwritten = void 0;
		});
		return "script";
	});
	jQuery.ajaxPrefilter(function(s, origOptions) {
		if (typeof s.data !== "string" && !jQuery.isPlainObject(s.data) && !Array.isArray(s.data) && !("processData" in origOptions)) s.processData = false;
		if (s.data instanceof window.FormData) s.contentType = false;
	});
	jQuery.parseHTML = function(data, context, keepScripts) {
		if (typeof data !== "string" && !isObviousHtml(data + "")) return [];
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		var parsed, scripts;
		if (!context) context = new window.DOMParser().parseFromString("", "text/html");
		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];
		if (parsed) return [context.createElement(parsed[1])];
		parsed = buildFragment([data], context, scripts);
		if (scripts && scripts.length) jQuery(scripts).remove();
		return jQuery.merge([], parsed.childNodes);
	};
	/**
	* Load a url into a page
	*/
	jQuery.fn.load = function(url, params, callback) {
		var selector, type, response, self = this, off = url.indexOf(" ");
		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}
		if (typeof params === "function") {
			callback = params;
			params = void 0;
		} else if (params && typeof params === "object") type = "POST";
		if (self.length > 0) jQuery.ajax({
			url,
			type: type || "GET",
			dataType: "html",
			data: params
		}).done(function(responseText) {
			response = arguments;
			self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
		}).always(callback && function(jqXHR, status) {
			self.each(function() {
				callback.apply(this, response || [
					jqXHR.responseText,
					status,
					jqXHR
				]);
			});
		});
		return this;
	};
	jQuery.expr.pseudos.animated = function(elem) {
		return jQuery.grep(jQuery.timers, function(fn) {
			return elem === fn.elem;
		}).length;
	};
	jQuery.offset = { setOffset: function(elem, options, i) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
		if (position === "static") elem.style.position = "relative";
		curOffset = curElem.offset();
		curCSSTop = jQuery.css(elem, "top");
		curCSSLeft = jQuery.css(elem, "left");
		calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
		if (calculatePosition) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat(curCSSTop) || 0;
			curLeft = parseFloat(curCSSLeft) || 0;
		}
		if (typeof options === "function") options = options.call(elem, i, jQuery.extend({}, curOffset));
		if (options.top != null) props.top = options.top - curOffset.top + curTop;
		if (options.left != null) props.left = options.left - curOffset.left + curLeft;
		if ("using" in options) options.using.call(elem, props);
		else curElem.css(props);
	} };
	jQuery.fn.extend({
		offset: function(options) {
			if (arguments.length) return options === void 0 ? this : this.each(function(i) {
				jQuery.offset.setOffset(this, options, i);
			});
			var rect, win, elem = this[0];
			if (!elem) return;
			if (!elem.getClientRects().length) return {
				top: 0,
				left: 0
			};
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},
		position: function() {
			if (!this[0]) return;
			var offsetParent, offset, doc, elem = this[0], parentOffset = {
				top: 0,
				left: 0
			};
			if (jQuery.css(elem, "position") === "fixed") offset = elem.getBoundingClientRect();
			else {
				offset = this.offset();
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while (offsetParent && offsetParent !== doc.documentElement && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.offsetParent || doc.documentElement;
				if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 && jQuery.css(offsetParent, "position") !== "static") {
					parentOffset = jQuery(offsetParent).offset();
					parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
				}
			}
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent;
				while (offsetParent && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.offsetParent;
				return offsetParent || documentElement$1;
			});
		}
	});
	jQuery.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(method, prop) {
		var top = "pageYOffset" === prop;
		jQuery.fn[method] = function(val) {
			return access(this, function(elem, method, val) {
				var win;
				if (isWindow(elem)) win = elem;
				else if (elem.nodeType === 9) win = elem.defaultView;
				if (val === void 0) return win ? win[prop] : elem[method];
				if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				else elem[method] = val;
			}, method, val, arguments.length);
		};
	});
	jQuery.each({
		Height: "height",
		Width: "width"
	}, function(name, type) {
		jQuery.each({
			padding: "inner" + name,
			content: type,
			"": "outer" + name
		}, function(defaultExtra, funcName) {
			jQuery.fn[funcName] = function(margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
				return access(this, function(elem, type, value) {
					var doc;
					if (isWindow(elem)) return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					if (elem.nodeType === 9) {
						doc = elem.documentElement;
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}
					return value === void 0 ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : void 0, chainable);
			};
		});
	});
	jQuery.each([
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function(_i, type) {
		jQuery.fn[type] = function(fn) {
			return this.on(type, fn);
		};
	});
	jQuery.fn.extend({
		bind: function(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function(types, fn) {
			return this.off(types, null, fn);
		},
		delegate: function(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function(selector, types, fn) {
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		},
		hover: function(fnOver, fnOut) {
			return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
		}
	});
	jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
		jQuery.fn[name] = function(data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});
	jQuery.proxy = function(fn, context) {
		var tmp, args, proxy;
		if (typeof context === "string") {
			tmp = fn[context];
			context = fn;
			fn = tmp;
		}
		if (typeof fn !== "function") return;
		args = slice.call(arguments, 2);
		proxy = function() {
			return fn.apply(context || this, args.concat(slice.call(arguments)));
		};
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;
		return proxy;
	};
	jQuery.holdReady = function(hold) {
		if (hold) jQuery.readyWait++;
		else jQuery.ready(true);
	};
	jQuery.expr[":"] = jQuery.expr.filters = jQuery.expr.pseudos;
	if (typeof define === "function" && define.amd) define("jquery", [], function() {
		return jQuery;
	});
	var _jQuery = window.jQuery, _$ = window.$;
	jQuery.noConflict = function(deep) {
		if (window.$ === jQuery) window.$ = _$;
		if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
		return jQuery;
	};
	if (typeof noGlobal === "undefined") window.jQuery = window.$ = jQuery;
	return jQuery;
}
var jQuery;
var init_jquery_module = __esmMin((() => {
	jQuery = jQueryFactory(window, true);
}));
//#endregion
//#region node_modules/jquery/dist/wrappers/jquery.bundler-require-wrapper.js
var require_jquery_bundler_require_wrapper = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { jQuery } = (init_jquery_module(), __toCommonJS(jquery_module_exports));
	module.exports = jQuery;
}));
//#endregion
//#region node_modules/popper.js/dist/esm/popper.js
var popper_exports = /* @__PURE__ */ __exportAll({ default: () => Popper });
/**!
* @fileOverview Kickass library to create and place poppers near their reference elements.
* @version 1.16.1
* @license
* Copyright (c) 2016 Federico Zivolo and contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
function microtaskDebounce(fn) {
	var called = false;
	return function() {
		if (called) return;
		called = true;
		window.Promise.resolve().then(function() {
			called = false;
			fn();
		});
	};
}
function taskDebounce(fn) {
	var scheduled = false;
	return function() {
		if (!scheduled) {
			scheduled = true;
			setTimeout(function() {
				scheduled = false;
				fn();
			}, timeoutDuration);
		}
	};
}
/**
* Check if the given variable is a function
* @method
* @memberof Popper.Utils
* @argument {Any} functionToCheck - variable to check
* @returns {Boolean} answer to: is a function?
*/
function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
}
/**
* Get CSS computed property of the given element
* @method
* @memberof Popper.Utils
* @argument {Eement} element
* @argument {String} property
*/
function getStyleComputedProperty(element, property) {
	if (element.nodeType !== 1) return [];
	var css = element.ownerDocument.defaultView.getComputedStyle(element, null);
	return property ? css[property] : css;
}
/**
* Returns the parentNode or the host of the element
* @method
* @memberof Popper.Utils
* @argument {Element} element
* @returns {Element} parent
*/
function getParentNode(element) {
	if (element.nodeName === "HTML") return element;
	return element.parentNode || element.host;
}
/**
* Returns the scrolling parent of the given element
* @method
* @memberof Popper.Utils
* @argument {Element} element
* @returns {Element} scroll parent
*/
function getScrollParent(element) {
	if (!element) return document.body;
	switch (element.nodeName) {
		case "HTML":
		case "BODY": return element.ownerDocument.body;
		case "#document": return element.body;
	}
	var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
	if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) return element;
	return getScrollParent(getParentNode(element));
}
/**
* Returns the reference node of the reference object, or the reference object itself.
* @method
* @memberof Popper.Utils
* @param {Element|Object} reference - the reference element (the popper will be relative to this)
* @returns {Element} parent
*/
function getReferenceNode(reference) {
	return reference && reference.referenceNode ? reference.referenceNode : reference;
}
/**
* Determines if the browser is Internet Explorer
* @method
* @memberof Popper.Utils
* @param {Number} version to check
* @returns {Boolean} isIE
*/
function isIE(version) {
	if (version === 11) return isIE11;
	if (version === 10) return isIE10;
	return isIE11 || isIE10;
}
/**
* Returns the offset parent of the given element
* @method
* @memberof Popper.Utils
* @argument {Element} element
* @returns {Element} offset parent
*/
function getOffsetParent(element) {
	if (!element) return document.documentElement;
	var noOffsetParent = isIE(10) ? document.body : null;
	var offsetParent = element.offsetParent || null;
	while (offsetParent === noOffsetParent && element.nextElementSibling) offsetParent = (element = element.nextElementSibling).offsetParent;
	var nodeName = offsetParent && offsetParent.nodeName;
	if (!nodeName || nodeName === "BODY" || nodeName === "HTML") return element ? element.ownerDocument.documentElement : document.documentElement;
	if ([
		"TH",
		"TD",
		"TABLE"
	].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") return getOffsetParent(offsetParent);
	return offsetParent;
}
function isOffsetContainer(element) {
	var nodeName = element.nodeName;
	if (nodeName === "BODY") return false;
	return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
/**
* Finds the root node (document, shadowDOM root) of the given element
* @method
* @memberof Popper.Utils
* @argument {Element} node
* @returns {Element} root node
*/
function getRoot(node) {
	if (node.parentNode !== null) return getRoot(node.parentNode);
	return node;
}
/**
* Finds the offset parent common to the two provided nodes
* @method
* @memberof Popper.Utils
* @argument {Element} element1
* @argument {Element} element2
* @returns {Element} common offset parent
*/
function findCommonOffsetParent(element1, element2) {
	if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) return document.documentElement;
	var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	var start = order ? element1 : element2;
	var end = order ? element2 : element1;
	var range = document.createRange();
	range.setStart(start, 0);
	range.setEnd(end, 0);
	var commonAncestorContainer = range.commonAncestorContainer;
	if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
		if (isOffsetContainer(commonAncestorContainer)) return commonAncestorContainer;
		return getOffsetParent(commonAncestorContainer);
	}
	var element1root = getRoot(element1);
	if (element1root.host) return findCommonOffsetParent(element1root.host, element2);
	else return findCommonOffsetParent(element1, getRoot(element2).host);
}
/**
* Gets the scroll value of the given element in the given side (top and left)
* @method
* @memberof Popper.Utils
* @argument {Element} element
* @argument {String} side `top` or `left`
* @returns {number} amount of scrolled pixels
*/
function getScroll(element) {
	var upperSide = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top") === "top" ? "scrollTop" : "scrollLeft";
	var nodeName = element.nodeName;
	if (nodeName === "BODY" || nodeName === "HTML") {
		var html = element.ownerDocument.documentElement;
		return (element.ownerDocument.scrollingElement || html)[upperSide];
	}
	return element[upperSide];
}
function includeScroll(rect, element) {
	var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
	var scrollTop = getScroll(element, "top");
	var scrollLeft = getScroll(element, "left");
	var modifier = subtract ? -1 : 1;
	rect.top += scrollTop * modifier;
	rect.bottom += scrollTop * modifier;
	rect.left += scrollLeft * modifier;
	rect.right += scrollLeft * modifier;
	return rect;
}
function getBordersSize(styles, axis) {
	var sideA = axis === "x" ? "Left" : "Top";
	var sideB = sideA === "Left" ? "Right" : "Bottom";
	return parseFloat(styles["border" + sideA + "Width"]) + parseFloat(styles["border" + sideB + "Width"]);
}
function getSize(axis, body, html, computedStyle) {
	return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document) {
	var body = document.body;
	var html = document.documentElement;
	var computedStyle = isIE(10) && getComputedStyle(html);
	return {
		height: getSize("Height", body, html, computedStyle),
		width: getSize("Width", body, html, computedStyle)
	};
}
/**
* Given element offsets, generate an output similar to getBoundingClientRect
* @method
* @memberof Popper.Utils
* @argument {Object} offsets
* @returns {Object} ClientRect like output
*/
function getClientRect(offsets) {
	return _extends({}, offsets, {
		right: offsets.left + offsets.width,
		bottom: offsets.top + offsets.height
	});
}
/**
* Get bounding client rect of given element
* @method
* @memberof Popper.Utils
* @param {HTMLElement} element
* @return {Object} client rect
*/
function getBoundingClientRect(element) {
	var rect = {};
	try {
		if (isIE(10)) {
			rect = element.getBoundingClientRect();
			var scrollTop = getScroll(element, "top");
			var scrollLeft = getScroll(element, "left");
			rect.top += scrollTop;
			rect.left += scrollLeft;
			rect.bottom += scrollTop;
			rect.right += scrollLeft;
		} else rect = element.getBoundingClientRect();
	} catch (e) {}
	var result = {
		left: rect.left,
		top: rect.top,
		width: rect.right - rect.left,
		height: rect.bottom - rect.top
	};
	var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
	var width = sizes.width || element.clientWidth || result.width;
	var height = sizes.height || element.clientHeight || result.height;
	var horizScrollbar = element.offsetWidth - width;
	var vertScrollbar = element.offsetHeight - height;
	if (horizScrollbar || vertScrollbar) {
		var styles = getStyleComputedProperty(element);
		horizScrollbar -= getBordersSize(styles, "x");
		vertScrollbar -= getBordersSize(styles, "y");
		result.width -= horizScrollbar;
		result.height -= vertScrollbar;
	}
	return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
	var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
	var isIE10 = isIE(10);
	var isHTML = parent.nodeName === "HTML";
	var childrenRect = getBoundingClientRect(children);
	var parentRect = getBoundingClientRect(parent);
	var scrollParent = getScrollParent(children);
	var styles = getStyleComputedProperty(parent);
	var borderTopWidth = parseFloat(styles.borderTopWidth);
	var borderLeftWidth = parseFloat(styles.borderLeftWidth);
	if (fixedPosition && isHTML) {
		parentRect.top = Math.max(parentRect.top, 0);
		parentRect.left = Math.max(parentRect.left, 0);
	}
	var offsets = getClientRect({
		top: childrenRect.top - parentRect.top - borderTopWidth,
		left: childrenRect.left - parentRect.left - borderLeftWidth,
		width: childrenRect.width,
		height: childrenRect.height
	});
	offsets.marginTop = 0;
	offsets.marginLeft = 0;
	if (!isIE10 && isHTML) {
		var marginTop = parseFloat(styles.marginTop);
		var marginLeft = parseFloat(styles.marginLeft);
		offsets.top -= borderTopWidth - marginTop;
		offsets.bottom -= borderTopWidth - marginTop;
		offsets.left -= borderLeftWidth - marginLeft;
		offsets.right -= borderLeftWidth - marginLeft;
		offsets.marginTop = marginTop;
		offsets.marginLeft = marginLeft;
	}
	if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") offsets = includeScroll(offsets, parent);
	return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
	var html = element.ownerDocument.documentElement;
	var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	var width = Math.max(html.clientWidth, window.innerWidth || 0);
	var height = Math.max(html.clientHeight, window.innerHeight || 0);
	var scrollTop = !excludeScroll ? getScroll(html) : 0;
	var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
	return getClientRect({
		top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
		left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
		width,
		height
	});
}
/**
* Check if the given element is fixed or is inside a fixed parent
* @method
* @memberof Popper.Utils
* @argument {Element} element
* @argument {Element} customContainer
* @returns {Boolean} answer to "isFixed?"
*/
function isFixed(element) {
	var nodeName = element.nodeName;
	if (nodeName === "BODY" || nodeName === "HTML") return false;
	if (getStyleComputedProperty(element, "position") === "fixed") return true;
	var parentNode = getParentNode(element);
	if (!parentNode) return false;
	return isFixed(parentNode);
}
/**
* Finds the first parent of an element that has a transformed property defined
* @method
* @memberof Popper.Utils
* @argument {Element} element
* @returns {Element} first transformed parent or documentElement
*/
function getFixedPositionOffsetParent(element) {
	if (!element || !element.parentElement || isIE()) return document.documentElement;
	var el = element.parentElement;
	while (el && getStyleComputedProperty(el, "transform") === "none") el = el.parentElement;
	return el || document.documentElement;
}
/**
* Computed the boundaries limits and return them
* @method
* @memberof Popper.Utils
* @param {HTMLElement} popper
* @param {HTMLElement} reference
* @param {number} padding
* @param {HTMLElement} boundariesElement - Element used to define the boundaries
* @param {Boolean} fixedPosition - Is in fixed position mode
* @returns {Object} Coordinates of the boundaries
*/
function getBoundaries(popper, reference, padding, boundariesElement) {
	var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
	var boundaries = {
		top: 0,
		left: 0
	};
	var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
	if (boundariesElement === "viewport") boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	else {
		var boundariesNode = void 0;
		if (boundariesElement === "scrollParent") {
			boundariesNode = getScrollParent(getParentNode(reference));
			if (boundariesNode.nodeName === "BODY") boundariesNode = popper.ownerDocument.documentElement;
		} else if (boundariesElement === "window") boundariesNode = popper.ownerDocument.documentElement;
		else boundariesNode = boundariesElement;
		var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
		if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
			var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
			boundaries.top += offsets.top - offsets.marginTop;
			boundaries.bottom = height + offsets.top;
			boundaries.left += offsets.left - offsets.marginLeft;
			boundaries.right = width + offsets.left;
		} else boundaries = offsets;
	}
	padding = padding || 0;
	var isPaddingNumber = typeof padding === "number";
	boundaries.left += isPaddingNumber ? padding : padding.left || 0;
	boundaries.top += isPaddingNumber ? padding : padding.top || 0;
	boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
	boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
	return boundaries;
}
function getArea(_ref) {
	return _ref.width * _ref.height;
}
/**
* Utility used to transform the `auto` placement to the placement with more
* available space.
* @method
* @memberof Popper.Utils
* @argument {Object} data - The data object generated by update method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
	if (placement.indexOf("auto") === -1) return placement;
	var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
	var rects = {
		top: {
			width: boundaries.width,
			height: refRect.top - boundaries.top
		},
		right: {
			width: boundaries.right - refRect.right,
			height: boundaries.height
		},
		bottom: {
			width: boundaries.width,
			height: boundaries.bottom - refRect.bottom
		},
		left: {
			width: refRect.left - boundaries.left,
			height: boundaries.height
		}
	};
	var sortedAreas = Object.keys(rects).map(function(key) {
		return _extends({ key }, rects[key], { area: getArea(rects[key]) });
	}).sort(function(a, b) {
		return b.area - a.area;
	});
	var filteredAreas = sortedAreas.filter(function(_ref2) {
		var width = _ref2.width, height = _ref2.height;
		return width >= popper.clientWidth && height >= popper.clientHeight;
	});
	var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
	var variation = placement.split("-")[1];
	return computedPlacement + (variation ? "-" + variation : "");
}
/**
* Get offsets to the reference element
* @method
* @memberof Popper.Utils
* @param {Object} state
* @param {Element} popper - the popper element
* @param {Element} reference - the reference element (the popper will be relative to this)
* @param {Element} fixedPosition - is in fixed position mode
* @returns {Object} An object containing the offsets which will be applied to the popper
*/
function getReferenceOffsets(state, popper, reference) {
	var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
	return getOffsetRectRelativeToArbitraryNode(reference, fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)), fixedPosition);
}
/**
* Get the outer sizes of the given element (offset size + margins)
* @method
* @memberof Popper.Utils
* @argument {Element} element
* @returns {Object} object containing width and height properties
*/
function getOuterSizes(element) {
	var styles = element.ownerDocument.defaultView.getComputedStyle(element);
	var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
	var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
	return {
		width: element.offsetWidth + y,
		height: element.offsetHeight + x
	};
}
/**
* Get the opposite placement of the given one
* @method
* @memberof Popper.Utils
* @argument {String} placement
* @returns {String} flipped placement
*/
function getOppositePlacement(placement) {
	var hash = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};
	return placement.replace(/left|right|bottom|top/g, function(matched) {
		return hash[matched];
	});
}
/**
* Get offsets to the popper
* @method
* @memberof Popper.Utils
* @param {Object} position - CSS position the Popper will get applied
* @param {HTMLElement} popper - the popper element
* @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
* @param {String} placement - one of the valid placement options
* @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
*/
function getPopperOffsets(popper, referenceOffsets, placement) {
	placement = placement.split("-")[0];
	var popperRect = getOuterSizes(popper);
	var popperOffsets = {
		width: popperRect.width,
		height: popperRect.height
	};
	var isHoriz = ["right", "left"].indexOf(placement) !== -1;
	var mainSide = isHoriz ? "top" : "left";
	var secondarySide = isHoriz ? "left" : "top";
	var measurement = isHoriz ? "height" : "width";
	var secondaryMeasurement = !isHoriz ? "height" : "width";
	popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	if (placement === secondarySide) popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	else popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	return popperOffsets;
}
/**
* Mimics the `find` method of Array
* @method
* @memberof Popper.Utils
* @argument {Array} arr
* @argument prop
* @argument value
* @returns index or -1
*/
function find(arr, check) {
	if (Array.prototype.find) return arr.find(check);
	return arr.filter(check)[0];
}
/**
* Return the index of the matching object
* @method
* @memberof Popper.Utils
* @argument {Array} arr
* @argument prop
* @argument value
* @returns index or -1
*/
function findIndex(arr, prop, value) {
	if (Array.prototype.findIndex) return arr.findIndex(function(cur) {
		return cur[prop] === value;
	});
	var match = find(arr, function(obj) {
		return obj[prop] === value;
	});
	return arr.indexOf(match);
}
/**
* Loop trough the list of modifiers and run them in order,
* each of them will then edit the data object.
* @method
* @memberof Popper.Utils
* @param {dataObject} data
* @param {Array} modifiers
* @param {String} ends - Optional modifier name used as stopper
* @returns {dataObject}
*/
function runModifiers(modifiers, data, ends) {
	(ends === void 0 ? modifiers : modifiers.slice(0, findIndex(modifiers, "name", ends))).forEach(function(modifier) {
		if (modifier["function"]) console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
		var fn = modifier["function"] || modifier.fn;
		if (modifier.enabled && isFunction(fn)) {
			data.offsets.popper = getClientRect(data.offsets.popper);
			data.offsets.reference = getClientRect(data.offsets.reference);
			data = fn(data, modifier);
		}
	});
	return data;
}
/**
* Updates the position of the popper, computing the new offsets and applying
* the new style.<br />
* Prefer `scheduleUpdate` over `update` because of performance reasons.
* @method
* @memberof Popper
*/
function update() {
	if (this.state.isDestroyed) return;
	var data = {
		instance: this,
		styles: {},
		arrowStyles: {},
		attributes: {},
		flipped: false,
		offsets: {}
	};
	data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
	data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
	data.originalPlacement = data.placement;
	data.positionFixed = this.options.positionFixed;
	data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
	data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
	data = runModifiers(this.modifiers, data);
	if (!this.state.isCreated) {
		this.state.isCreated = true;
		this.options.onCreate(data);
	} else this.options.onUpdate(data);
}
/**
* Helper used to know if the given modifier is enabled.
* @method
* @memberof Popper.Utils
* @returns {Boolean}
*/
function isModifierEnabled(modifiers, modifierName) {
	return modifiers.some(function(_ref) {
		var name = _ref.name;
		return _ref.enabled && name === modifierName;
	});
}
/**
* Get the prefixed supported property name
* @method
* @memberof Popper.Utils
* @argument {String} property (camelCase)
* @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
*/
function getSupportedPropertyName(property) {
	var prefixes = [
		false,
		"ms",
		"Webkit",
		"Moz",
		"O"
	];
	var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
	for (var i = 0; i < prefixes.length; i++) {
		var prefix = prefixes[i];
		var toCheck = prefix ? "" + prefix + upperProp : property;
		if (typeof document.body.style[toCheck] !== "undefined") return toCheck;
	}
	return null;
}
/**
* Destroys the popper.
* @method
* @memberof Popper
*/
function destroy() {
	this.state.isDestroyed = true;
	if (isModifierEnabled(this.modifiers, "applyStyle")) {
		this.popper.removeAttribute("x-placement");
		this.popper.style.position = "";
		this.popper.style.top = "";
		this.popper.style.left = "";
		this.popper.style.right = "";
		this.popper.style.bottom = "";
		this.popper.style.willChange = "";
		this.popper.style[getSupportedPropertyName("transform")] = "";
	}
	this.disableEventListeners();
	if (this.options.removeOnDestroy) this.popper.parentNode.removeChild(this.popper);
	return this;
}
/**
* Get the window associated with the element
* @argument {Element} element
* @returns {Window}
*/
function getWindow(element) {
	var ownerDocument = element.ownerDocument;
	return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	var isBody = scrollParent.nodeName === "BODY";
	var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	target.addEventListener(event, callback, { passive: true });
	if (!isBody) attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	scrollParents.push(target);
}
/**
* Setup needed event listeners used to update the popper position
* @method
* @memberof Popper.Utils
* @private
*/
function setupEventListeners(reference, options, state, updateBound) {
	state.updateBound = updateBound;
	getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
	var scrollElement = getScrollParent(reference);
	attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
	state.scrollElement = scrollElement;
	state.eventsEnabled = true;
	return state;
}
/**
* It will add resize/scroll events and start recalculating
* position of the popper element when they are triggered.
* @method
* @memberof Popper
*/
function enableEventListeners() {
	if (!this.state.eventsEnabled) this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
}
/**
* Remove event listeners used to update the popper position
* @method
* @memberof Popper.Utils
* @private
*/
function removeEventListeners(reference, state) {
	getWindow(reference).removeEventListener("resize", state.updateBound);
	state.scrollParents.forEach(function(target) {
		target.removeEventListener("scroll", state.updateBound);
	});
	state.updateBound = null;
	state.scrollParents = [];
	state.scrollElement = null;
	state.eventsEnabled = false;
	return state;
}
/**
* It will remove resize/scroll events and won't recalculate popper position
* when they are triggered. It also won't trigger `onUpdate` callback anymore,
* unless you call `update` method manually.
* @method
* @memberof Popper
*/
function disableEventListeners() {
	if (this.state.eventsEnabled) {
		cancelAnimationFrame(this.scheduleUpdate);
		this.state = removeEventListeners(this.reference, this.state);
	}
}
/**
* Tells if a given input is a number
* @method
* @memberof Popper.Utils
* @param {*} input to check
* @return {Boolean}
*/
function isNumeric(n) {
	return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
* Set the style to the given popper
* @method
* @memberof Popper.Utils
* @argument {Element} element - Element to apply the style to
* @argument {Object} styles
* Object with a list of properties and values which will be applied to the element
*/
function setStyles(element, styles) {
	Object.keys(styles).forEach(function(prop) {
		var unit = "";
		if ([
			"width",
			"height",
			"top",
			"right",
			"bottom",
			"left"
		].indexOf(prop) !== -1 && isNumeric(styles[prop])) unit = "px";
		element.style[prop] = styles[prop] + unit;
	});
}
/**
* Set the attributes to the given popper
* @method
* @memberof Popper.Utils
* @argument {Element} element - Element to apply the attributes to
* @argument {Object} styles
* Object with a list of properties and values which will be applied to the element
*/
function setAttributes(element, attributes) {
	Object.keys(attributes).forEach(function(prop) {
		if (attributes[prop] !== false) element.setAttribute(prop, attributes[prop]);
		else element.removeAttribute(prop);
	});
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by `update` method
* @argument {Object} data.styles - List of style properties - values to apply to popper element
* @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The same data object
*/
function applyStyle(data) {
	setStyles(data.instance.popper, data.styles);
	setAttributes(data.instance.popper, data.attributes);
	if (data.arrowElement && Object.keys(data.arrowStyles).length) setStyles(data.arrowElement, data.arrowStyles);
	return data;
}
/**
* Set the x-placement attribute before everything else because it could be used
* to add margins to the popper margins needs to be calculated to get the
* correct popper offsets.
* @method
* @memberof Popper.modifiers
* @param {HTMLElement} reference - The reference element used to position the popper
* @param {HTMLElement} popper - The HTML element used as popper
* @param {Object} options - Popper.js options
*/
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
	var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
	popper.setAttribute("x-placement", placement);
	setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
	return options;
}
/**
* @function
* @memberof Popper.Utils
* @argument {Object} data - The data object generated by `update` method
* @argument {Boolean} shouldRound - If the offsets should be rounded at all
* @returns {Object} The popper's position offsets rounded
*
* The tale of pixel-perfect positioning. It's still not 100% perfect, but as
* good as it can be within reason.
* Discussion here: https://github.com/FezVrasta/popper.js/pull/715
*
* Low DPI screens cause a popper to be blurry if not using full pixels (Safari
* as well on High DPI screens).
*
* Firefox prefers no rounding for positioning and does not have blurriness on
* high DPI screens.
*
* Only horizontal placement and left/right values need to be considered.
*/
function getRoundedOffsets(data, shouldRound) {
	var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
	var round = Math.round, floor = Math.floor;
	var noRound = function noRound(v) {
		return v;
	};
	var referenceWidth = round(reference.width);
	var popperWidth = round(popper.width);
	var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
	var isVariation = data.placement.indexOf("-") !== -1;
	var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
	var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
	var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
	var verticalToInteger = !shouldRound ? noRound : round;
	return {
		left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
		top: verticalToInteger(popper.top),
		bottom: verticalToInteger(popper.bottom),
		right: horizontalToInteger(popper.right)
	};
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by `update` method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function computeStyle(data, options) {
	var x = options.x, y = options.y;
	var popper = data.offsets.popper;
	var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
		return modifier.name === "applyStyle";
	}).gpuAcceleration;
	if (legacyGpuAccelerationOption !== void 0) console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
	var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
	var offsetParent = getOffsetParent(data.instance.popper);
	var offsetParentRect = getBoundingClientRect(offsetParent);
	var styles = { position: popper.position };
	var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
	var sideA = x === "bottom" ? "top" : "bottom";
	var sideB = y === "right" ? "left" : "right";
	var prefixedProperty = getSupportedPropertyName("transform");
	var left = void 0, top = void 0;
	if (sideA === "bottom") if (offsetParent.nodeName === "HTML") top = -offsetParent.clientHeight + offsets.bottom;
	else top = -offsetParentRect.height + offsets.bottom;
	else top = offsets.top;
	if (sideB === "right") if (offsetParent.nodeName === "HTML") left = -offsetParent.clientWidth + offsets.right;
	else left = -offsetParentRect.width + offsets.right;
	else left = offsets.left;
	if (gpuAcceleration && prefixedProperty) {
		styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
		styles[sideA] = 0;
		styles[sideB] = 0;
		styles.willChange = "transform";
	} else {
		var invertTop = sideA === "bottom" ? -1 : 1;
		var invertLeft = sideB === "right" ? -1 : 1;
		styles[sideA] = top * invertTop;
		styles[sideB] = left * invertLeft;
		styles.willChange = sideA + ", " + sideB;
	}
	data.attributes = _extends({}, { "x-placement": data.placement }, data.attributes);
	data.styles = _extends({}, styles, data.styles);
	data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
	return data;
}
/**
* Helper used to know if the given modifier depends from another one.<br />
* It checks if the needed modifier is listed and enabled.
* @method
* @memberof Popper.Utils
* @param {Array} modifiers - list of modifiers
* @param {String} requestingName - name of requesting modifier
* @param {String} requestedName - name of requested modifier
* @returns {Boolean}
*/
function isModifierRequired(modifiers, requestingName, requestedName) {
	var requesting = find(modifiers, function(_ref) {
		return _ref.name === requestingName;
	});
	var isRequired = !!requesting && modifiers.some(function(modifier) {
		return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	});
	if (!isRequired) {
		var _requesting = "`" + requestingName + "`";
		var requested = "`" + requestedName + "`";
		console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
	}
	return isRequired;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by update method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function arrow(data, options) {
	var _data$offsets$arrow;
	if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) return data;
	var arrowElement = options.element;
	if (typeof arrowElement === "string") {
		arrowElement = data.instance.popper.querySelector(arrowElement);
		if (!arrowElement) return data;
	} else if (!data.instance.popper.contains(arrowElement)) {
		console.warn("WARNING: `arrow.element` must be child of its popper element!");
		return data;
	}
	var placement = data.placement.split("-")[0];
	var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
	var isVertical = ["left", "right"].indexOf(placement) !== -1;
	var len = isVertical ? "height" : "width";
	var sideCapitalized = isVertical ? "Top" : "Left";
	var side = sideCapitalized.toLowerCase();
	var altSide = isVertical ? "left" : "top";
	var opSide = isVertical ? "bottom" : "right";
	var arrowElementSize = getOuterSizes(arrowElement)[len];
	if (reference[opSide] - arrowElementSize < popper[side]) data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	if (reference[side] + arrowElementSize > popper[opSide]) data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	data.offsets.popper = getClientRect(data.offsets.popper);
	var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
	var css = getStyleComputedProperty(data.instance.popper);
	var popperMarginSide = parseFloat(css["margin" + sideCapitalized]);
	var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
	var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
	sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
	data.arrowElement = arrowElement;
	data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
	return data;
}
/**
* Get the opposite placement variation of the given one
* @method
* @memberof Popper.Utils
* @argument {String} placement variation
* @returns {String} flipped placement variation
*/
function getOppositeVariation(variation) {
	if (variation === "end") return "start";
	else if (variation === "start") return "end";
	return variation;
}
/**
* Given an initial placement, returns all the subsequent placements
* clockwise (or counter-clockwise).
*
* @method
* @memberof Popper.Utils
* @argument {String} placement - A valid placement (it accepts variations)
* @argument {Boolean} counter - Set to true to walk the placements counterclockwise
* @returns {Array} placements including their variations
*/
function clockwise(placement) {
	var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
	var index = validPlacements.indexOf(placement);
	var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	return counter ? arr.reverse() : arr;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by update method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function flip(data, options) {
	if (isModifierEnabled(data.instance.modifiers, "inner")) return data;
	if (data.flipped && data.placement === data.originalPlacement) return data;
	var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
	var placement = data.placement.split("-")[0];
	var placementOpposite = getOppositePlacement(placement);
	var variation = data.placement.split("-")[1] || "";
	var flipOrder = [];
	switch (options.behavior) {
		case BEHAVIORS.FLIP:
			flipOrder = [placement, placementOpposite];
			break;
		case BEHAVIORS.CLOCKWISE:
			flipOrder = clockwise(placement);
			break;
		case BEHAVIORS.COUNTERCLOCKWISE:
			flipOrder = clockwise(placement, true);
			break;
		default: flipOrder = options.behavior;
	}
	flipOrder.forEach(function(step, index) {
		if (placement !== step || flipOrder.length === index + 1) return data;
		placement = data.placement.split("-")[0];
		placementOpposite = getOppositePlacement(placement);
		var popperOffsets = data.offsets.popper;
		var refOffsets = data.offsets.reference;
		var floor = Math.floor;
		var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
		var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
		var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
		var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
		var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
		var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
		var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
		var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
		var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
		var flippedVariation = flippedVariationByRef || flippedVariationByContent;
		if (overlapsRef || overflowsBoundaries || flippedVariation) {
			data.flipped = true;
			if (overlapsRef || overflowsBoundaries) placement = flipOrder[index + 1];
			if (flippedVariation) variation = getOppositeVariation(variation);
			data.placement = placement + (variation ? "-" + variation : "");
			data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
			data = runModifiers(data.instance.modifiers, data, "flip");
		}
	});
	return data;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by update method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function keepTogether(data) {
	var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
	var placement = data.placement.split("-")[0];
	var floor = Math.floor;
	var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
	var side = isVertical ? "right" : "bottom";
	var opSide = isVertical ? "left" : "top";
	var measurement = isVertical ? "width" : "height";
	if (popper[side] < floor(reference[opSide])) data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	if (popper[opSide] > floor(reference[side])) data.offsets.popper[opSide] = floor(reference[side]);
	return data;
}
/**
* Converts a string containing value + unit into a px value number
* @function
* @memberof {modifiers~offset}
* @private
* @argument {String} str - Value + unit string
* @argument {String} measurement - `height` or `width`
* @argument {Object} popperOffsets
* @argument {Object} referenceOffsets
* @returns {Number|String}
* Value in pixels, or original string if no values were extracted
*/
function toValue(str, measurement, popperOffsets, referenceOffsets) {
	var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	var value = +split[1];
	var unit = split[2];
	if (!value) return str;
	if (unit.indexOf("%") === 0) {
		var element = void 0;
		switch (unit) {
			case "%p":
				element = popperOffsets;
				break;
			default: element = referenceOffsets;
		}
		return getClientRect(element)[measurement] / 100 * value;
	} else if (unit === "vh" || unit === "vw") {
		var size = void 0;
		if (unit === "vh") size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		else size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		return size / 100 * value;
	} else return value;
}
/**
* Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
* @function
* @memberof {modifiers~offset}
* @private
* @argument {String} offset
* @argument {Object} popperOffsets
* @argument {Object} referenceOffsets
* @argument {String} basePlacement
* @returns {Array} a two cells array with x and y offsets in numbers
*/
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	var offsets = [0, 0];
	var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
	var fragments = offset.split(/(\+|\-)/).map(function(frag) {
		return frag.trim();
	});
	var divider = fragments.indexOf(find(fragments, function(frag) {
		return frag.search(/,|\s/) !== -1;
	}));
	if (fragments[divider] && fragments[divider].indexOf(",") === -1) console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
	var splitRegex = /\s*,\s*|\s+/;
	var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
	ops = ops.map(function(op, index) {
		var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
		var mergeWithPrevious = false;
		return op.reduce(function(a, b) {
			if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
				a[a.length - 1] = b;
				mergeWithPrevious = true;
				return a;
			} else if (mergeWithPrevious) {
				a[a.length - 1] += b;
				mergeWithPrevious = false;
				return a;
			} else return a.concat(b);
		}, []).map(function(str) {
			return toValue(str, measurement, popperOffsets, referenceOffsets);
		});
	});
	ops.forEach(function(op, index) {
		op.forEach(function(frag, index2) {
			if (isNumeric(frag)) offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
		});
	});
	return offsets;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by update method
* @argument {Object} options - Modifiers configuration and options
* @argument {Number|String} options.offset=0
* The offset value as described in the modifier description
* @returns {Object} The data object, properly modified
*/
function offset(data, _ref) {
	var offset = _ref.offset;
	var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
	var basePlacement = placement.split("-")[0];
	var offsets = void 0;
	if (isNumeric(+offset)) offsets = [+offset, 0];
	else offsets = parseOffset(offset, popper, reference, basePlacement);
	if (basePlacement === "left") {
		popper.top += offsets[0];
		popper.left -= offsets[1];
	} else if (basePlacement === "right") {
		popper.top += offsets[0];
		popper.left += offsets[1];
	} else if (basePlacement === "top") {
		popper.left += offsets[0];
		popper.top -= offsets[1];
	} else if (basePlacement === "bottom") {
		popper.left += offsets[0];
		popper.top += offsets[1];
	}
	data.popper = popper;
	return data;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by `update` method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function preventOverflow(data, options) {
	var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
	if (data.instance.reference === boundariesElement) boundariesElement = getOffsetParent(boundariesElement);
	var transformProp = getSupportedPropertyName("transform");
	var popperStyles = data.instance.popper.style;
	var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
	popperStyles.top = "";
	popperStyles.left = "";
	popperStyles[transformProp] = "";
	var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
	popperStyles.top = top;
	popperStyles.left = left;
	popperStyles[transformProp] = transform;
	options.boundaries = boundaries;
	var order = options.priority;
	var popper = data.offsets.popper;
	var check = {
		primary: function primary(placement) {
			var value = popper[placement];
			if (popper[placement] < boundaries[placement] && !options.escapeWithReference) value = Math.max(popper[placement], boundaries[placement]);
			return defineProperty({}, placement, value);
		},
		secondary: function secondary(placement) {
			var mainSide = placement === "right" ? "left" : "top";
			var value = popper[mainSide];
			if (popper[placement] > boundaries[placement] && !options.escapeWithReference) value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
			return defineProperty({}, mainSide, value);
		}
	};
	order.forEach(function(placement) {
		var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
		popper = _extends({}, popper, check[side](placement));
	});
	data.offsets.popper = popper;
	return data;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by `update` method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function shift(data) {
	var placement = data.placement;
	var basePlacement = placement.split("-")[0];
	var shiftvariation = placement.split("-")[1];
	if (shiftvariation) {
		var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
		var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
		var side = isVertical ? "left" : "top";
		var measurement = isVertical ? "width" : "height";
		var shiftOffsets = {
			start: defineProperty({}, side, reference[side]),
			end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
		};
		data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	}
	return data;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by update method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function hide(data) {
	if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) return data;
	var refRect = data.offsets.reference;
	var bound = find(data.instance.modifiers, function(modifier) {
		return modifier.name === "preventOverflow";
	}).boundaries;
	if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
		if (data.hide === true) return data;
		data.hide = true;
		data.attributes["x-out-of-boundaries"] = "";
	} else {
		if (data.hide === false) return data;
		data.hide = false;
		data.attributes["x-out-of-boundaries"] = false;
	}
	return data;
}
/**
* @function
* @memberof Modifiers
* @argument {Object} data - The data object generated by `update` method
* @argument {Object} options - Modifiers configuration and options
* @returns {Object} The data object, properly modified
*/
function inner(data) {
	var placement = data.placement;
	var basePlacement = placement.split("-")[0];
	var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
	var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
	var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
	popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
	data.placement = getOppositePlacement(placement);
	data.offsets.popper = getClientRect(popper);
	return data;
}
var isBrowser, timeoutDuration, debounce, isIE11, isIE10, classCallCheck, createClass, defineProperty, _extends, isFirefox, placements, validPlacements, BEHAVIORS, Defaults, Popper;
var init_popper = __esmMin((() => {
	isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
	timeoutDuration = function() {
		var longerTimeoutBrowsers = [
			"Edge",
			"Trident",
			"Firefox"
		];
		for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) return 1;
		return 0;
	}();
	debounce = isBrowser && window.Promise ? microtaskDebounce : taskDebounce;
	isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
	classCallCheck = function(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	};
	createClass = function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	defineProperty = function(obj, key, value) {
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		else obj[key] = value;
		return obj;
	};
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
	placements = [
		"auto-start",
		"auto",
		"auto-end",
		"top-start",
		"top",
		"top-end",
		"right-start",
		"right",
		"right-end",
		"bottom-end",
		"bottom",
		"bottom-start",
		"left-end",
		"left",
		"left-start"
	];
	validPlacements = placements.slice(3);
	BEHAVIORS = {
		FLIP: "flip",
		CLOCKWISE: "clockwise",
		COUNTERCLOCKWISE: "counterclockwise"
	};
	Defaults = {
		/**
		* Popper's placement.
		* @prop {Popper.placements} placement='bottom'
		*/
		placement: "bottom",
		/**
		* Set this to true if you want popper to position it self in 'fixed' mode
		* @prop {Boolean} positionFixed=false
		*/
		positionFixed: false,
		/**
		* Whether events (resize, scroll) are initially enabled.
		* @prop {Boolean} eventsEnabled=true
		*/
		eventsEnabled: true,
		/**
		* Set to true if you want to automatically remove the popper when
		* you call the `destroy` method.
		* @prop {Boolean} removeOnDestroy=false
		*/
		removeOnDestroy: false,
		/**
		* Callback called when the popper is created.<br />
		* By default, it is set to no-op.<br />
		* Access Popper.js instance with `data.instance`.
		* @prop {onCreate}
		*/
		onCreate: function onCreate() {},
		/**
		* Callback called when the popper is updated. This callback is not called
		* on the initialization/creation of the popper, but only on subsequent
		* updates.<br />
		* By default, it is set to no-op.<br />
		* Access Popper.js instance with `data.instance`.
		* @prop {onUpdate}
		*/
		onUpdate: function onUpdate() {},
		/**
		* List of modifiers used to modify the offsets before they are applied to the popper.
		* They provide most of the functionalities of Popper.js.
		* @prop {modifiers}
		*/
		modifiers: {
			/**
			* Modifier used to shift the popper on the start or end of its reference
			* element.<br />
			* It will read the variation of the `placement` property.<br />
			* It can be one either `-end` or `-start`.
			* @memberof modifiers
			* @inner
			*/
			shift: {
				/** @prop {number} order=100 - Index used to define the order of execution */
				order: 100,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: shift
			},
			/**
			* The `offset` modifier can shift your popper on both its axis.
			*
			* It accepts the following units:
			* - `px` or unit-less, interpreted as pixels
			* - `%` or `%r`, percentage relative to the length of the reference element
			* - `%p`, percentage relative to the length of the popper element
			* - `vw`, CSS viewport width unit
			* - `vh`, CSS viewport height unit
			*
			* For length is intended the main axis relative to the placement of the popper.<br />
			* This means that if the placement is `top` or `bottom`, the length will be the
			* `width`. In case of `left` or `right`, it will be the `height`.
			*
			* You can provide a single value (as `Number` or `String`), or a pair of values
			* as `String` divided by a comma or one (or more) white spaces.<br />
			* The latter is a deprecated method because it leads to confusion and will be
			* removed in v2.<br />
			* Additionally, it accepts additions and subtractions between different units.
			* Note that multiplications and divisions aren't supported.
			*
			* Valid examples are:
			* ```
			* 10
			* '10%'
			* '10, 10'
			* '10%, 10'
			* '10 + 10%'
			* '10 - 5vh + 3%'
			* '-10px + 5vh, 5px - 6%'
			* ```
			* > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
			* > with their reference element, unfortunately, you will have to disable the `flip` modifier.
			* > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
			*
			* @memberof modifiers
			* @inner
			*/
			offset: {
				/** @prop {number} order=200 - Index used to define the order of execution */
				order: 200,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: offset,
				/** @prop {Number|String} offset=0
				* The offset value as described in the modifier description
				*/
				offset: 0
			},
			/**
			* Modifier used to prevent the popper from being positioned outside the boundary.
			*
			* A scenario exists where the reference itself is not within the boundaries.<br />
			* We can say it has "escaped the boundaries" — or just "escaped".<br />
			* In this case we need to decide whether the popper should either:
			*
			* - detach from the reference and remain "trapped" in the boundaries, or
			* - if it should ignore the boundary and "escape with its reference"
			*
			* When `escapeWithReference` is set to`true` and reference is completely
			* outside its boundaries, the popper will overflow (or completely leave)
			* the boundaries in order to remain attached to the edge of the reference.
			*
			* @memberof modifiers
			* @inner
			*/
			preventOverflow: {
				/** @prop {number} order=300 - Index used to define the order of execution */
				order: 300,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: preventOverflow,
				/**
				* @prop {Array} [priority=['left','right','top','bottom']]
				* Popper will try to prevent overflow following these priorities by default,
				* then, it could overflow on the left and on top of the `boundariesElement`
				*/
				priority: [
					"left",
					"right",
					"top",
					"bottom"
				],
				/**
				* @prop {number} padding=5
				* Amount of pixel used to define a minimum distance between the boundaries
				* and the popper. This makes sure the popper always has a little padding
				* between the edges of its container
				*/
				padding: 5,
				/**
				* @prop {String|HTMLElement} boundariesElement='scrollParent'
				* Boundaries used by the modifier. Can be `scrollParent`, `window`,
				* `viewport` or any DOM element.
				*/
				boundariesElement: "scrollParent"
			},
			/**
			* Modifier used to make sure the reference and its popper stay near each other
			* without leaving any gap between the two. Especially useful when the arrow is
			* enabled and you want to ensure that it points to its reference element.
			* It cares only about the first axis. You can still have poppers with margin
			* between the popper and its reference element.
			* @memberof modifiers
			* @inner
			*/
			keepTogether: {
				/** @prop {number} order=400 - Index used to define the order of execution */
				order: 400,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: keepTogether
			},
			/**
			* This modifier is used to move the `arrowElement` of the popper to make
			* sure it is positioned between the reference element and its popper element.
			* It will read the outer size of the `arrowElement` node to detect how many
			* pixels of conjunction are needed.
			*
			* It has no effect if no `arrowElement` is provided.
			* @memberof modifiers
			* @inner
			*/
			arrow: {
				/** @prop {number} order=500 - Index used to define the order of execution */
				order: 500,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: arrow,
				/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
				element: "[x-arrow]"
			},
			/**
			* Modifier used to flip the popper's placement when it starts to overlap its
			* reference element.
			*
			* Requires the `preventOverflow` modifier before it in order to work.
			*
			* **NOTE:** this modifier will interrupt the current update cycle and will
			* restart it if it detects the need to flip the placement.
			* @memberof modifiers
			* @inner
			*/
			flip: {
				/** @prop {number} order=600 - Index used to define the order of execution */
				order: 600,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: flip,
				/**
				* @prop {String|Array} behavior='flip'
				* The behavior used to change the popper's placement. It can be one of
				* `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
				* placements (with optional variations)
				*/
				behavior: "flip",
				/**
				* @prop {number} padding=5
				* The popper will flip if it hits the edges of the `boundariesElement`
				*/
				padding: 5,
				/**
				* @prop {String|HTMLElement} boundariesElement='viewport'
				* The element which will define the boundaries of the popper position.
				* The popper will never be placed outside of the defined boundaries
				* (except if `keepTogether` is enabled)
				*/
				boundariesElement: "viewport",
				/**
				* @prop {Boolean} flipVariations=false
				* The popper will switch placement variation between `-start` and `-end` when
				* the reference element overlaps its boundaries.
				*
				* The original placement should have a set variation.
				*/
				flipVariations: false,
				/**
				* @prop {Boolean} flipVariationsByContent=false
				* The popper will switch placement variation between `-start` and `-end` when
				* the popper element overlaps its reference boundaries.
				*
				* The original placement should have a set variation.
				*/
				flipVariationsByContent: false
			},
			/**
			* Modifier used to make the popper flow toward the inner of the reference element.
			* By default, when this modifier is disabled, the popper will be placed outside
			* the reference element.
			* @memberof modifiers
			* @inner
			*/
			inner: {
				/** @prop {number} order=700 - Index used to define the order of execution */
				order: 700,
				/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
				enabled: false,
				/** @prop {ModifierFn} */
				fn: inner
			},
			/**
			* Modifier used to hide the popper when its reference element is outside of the
			* popper boundaries. It will set a `x-out-of-boundaries` attribute which can
			* be used to hide with a CSS selector the popper when its reference is
			* out of boundaries.
			*
			* Requires the `preventOverflow` modifier before it in order to work.
			* @memberof modifiers
			* @inner
			*/
			hide: {
				/** @prop {number} order=800 - Index used to define the order of execution */
				order: 800,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: hide
			},
			/**
			* Computes the style that will be applied to the popper element to gets
			* properly positioned.
			*
			* Note that this modifier will not touch the DOM, it just prepares the styles
			* so that `applyStyle` modifier can apply it. This separation is useful
			* in case you need to replace `applyStyle` with a custom implementation.
			*
			* This modifier has `850` as `order` value to maintain backward compatibility
			* with previous versions of Popper.js. Expect the modifiers ordering method
			* to change in future major versions of the library.
			*
			* @memberof modifiers
			* @inner
			*/
			computeStyle: {
				/** @prop {number} order=850 - Index used to define the order of execution */
				order: 850,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: computeStyle,
				/**
				* @prop {Boolean} gpuAcceleration=true
				* If true, it uses the CSS 3D transformation to position the popper.
				* Otherwise, it will use the `top` and `left` properties
				*/
				gpuAcceleration: true,
				/**
				* @prop {string} [x='bottom']
				* Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
				* Change this if your popper should grow in a direction different from `bottom`
				*/
				x: "bottom",
				/**
				* @prop {string} [x='left']
				* Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
				* Change this if your popper should grow in a direction different from `right`
				*/
				y: "right"
			},
			/**
			* Applies the computed styles to the popper element.
			*
			* All the DOM manipulations are limited to this modifier. This is useful in case
			* you want to integrate Popper.js inside a framework or view library and you
			* want to delegate all the DOM manipulations to it.
			*
			* Note that if you disable this modifier, you must make sure the popper element
			* has its position set to `absolute` before Popper.js can do its work!
			*
			* Just disable this modifier and define your own to achieve the desired effect.
			*
			* @memberof modifiers
			* @inner
			*/
			applyStyle: {
				/** @prop {number} order=900 - Index used to define the order of execution */
				order: 900,
				/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
				enabled: true,
				/** @prop {ModifierFn} */
				fn: applyStyle,
				/** @prop {Function} */
				onLoad: applyStyleOnLoad,
				/**
				* @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
				* @prop {Boolean} gpuAcceleration=true
				* If true, it uses the CSS 3D transformation to position the popper.
				* Otherwise, it will use the `top` and `left` properties
				*/
				gpuAcceleration: void 0
			}
		}
	};
	Popper = function() {
		/**
		* Creates a new Popper.js instance.
		* @class Popper
		* @param {Element|referenceObject} reference - The reference element used to position the popper
		* @param {Element} popper - The HTML / XML element used as the popper
		* @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
		* @return {Object} instance - The generated Popper.js instance
		*/
		function Popper(reference, popper) {
			var _this = this;
			var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
			classCallCheck(this, Popper);
			this.scheduleUpdate = function() {
				return requestAnimationFrame(_this.update);
			};
			this.update = debounce(this.update.bind(this));
			this.options = _extends({}, Popper.Defaults, options);
			this.state = {
				isDestroyed: false,
				isCreated: false,
				scrollParents: []
			};
			this.reference = reference && reference.jquery ? reference[0] : reference;
			this.popper = popper && popper.jquery ? popper[0] : popper;
			this.options.modifiers = {};
			Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function(name) {
				_this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
			});
			this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
				return _extends({ name }, _this.options.modifiers[name]);
			}).sort(function(a, b) {
				return a.order - b.order;
			});
			this.modifiers.forEach(function(modifierOptions) {
				if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
			});
			this.update();
			var eventsEnabled = this.options.eventsEnabled;
			if (eventsEnabled) this.enableEventListeners();
			this.state.eventsEnabled = eventsEnabled;
		}
		createClass(Popper, [
			{
				key: "update",
				value: function update$$1() {
					return update.call(this);
				}
			},
			{
				key: "destroy",
				value: function destroy$$1() {
					return destroy.call(this);
				}
			},
			{
				key: "enableEventListeners",
				value: function enableEventListeners$$1() {
					return enableEventListeners.call(this);
				}
			},
			{
				key: "disableEventListeners",
				value: function disableEventListeners$$1() {
					return disableEventListeners.call(this);
				}
			}
		]);
		return Popper;
	}();
	/**
	* The `referenceObject` is an object that provides an interface compatible with Popper.js
	* and lets you use it as replacement of a real DOM node.<br />
	* You can use this method to position a popper relatively to a set of coordinates
	* in case you don't have a DOM node to use as reference.
	*
	* ```
	* new Popper(referenceObject, popperNode);
	* ```
	*
	* NB: This feature isn't supported in Internet Explorer 10.
	* @name referenceObject
	* @property {Function} data.getBoundingClientRect
	* A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	* @property {number} data.clientWidth
	* An ES6 getter that will return the width of the virtual reference element.
	* @property {number} data.clientHeight
	* An ES6 getter that will return the height of the virtual reference element.
	*/
	Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;
}));
//#endregion
//#region node_modules/bootstrap/dist/js/bootstrap.min.js
var require_bootstrap_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	* Bootstrap v4.6.2 (https://getbootstrap.com/)
	* Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	*/
	(function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? e(exports, require_jquery_bundler_require_wrapper(), (init_popper(), __toCommonJS(popper_exports))) : "function" == typeof define && define.amd ? define([
			"exports",
			"jquery",
			"popper.js"
		], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper);
	})(exports, (function(t, e, n) {
		"use strict";
		function i(t) {
			return t && "object" == typeof t && "default" in t ? t : { default: t };
		}
		var o = i(e), a = i(n);
		function s(t, e) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
			}
		}
		function l(t, e, n) {
			return e && s(t.prototype, e), n && s(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
		}
		function r() {
			return r = Object.assign ? Object.assign.bind() : function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			}, r.apply(this, arguments);
		}
		function u(t, e) {
			return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
				return t.__proto__ = e, t;
			}, u(t, e);
		}
		var f = "transitionend";
		var d = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function(t) {
				do
					t += ~~(1e6 * Math.random());
				while (document.getElementById(t));
				return t;
			},
			getSelectorFromElement: function(t) {
				var e = t.getAttribute("data-target");
				if (!e || "#" === e) {
					var n = t.getAttribute("href");
					e = n && "#" !== n ? n.trim() : "";
				}
				try {
					return document.querySelector(e) ? e : null;
				} catch (t) {
					return null;
				}
			},
			getTransitionDurationFromElement: function(t) {
				if (!t) return 0;
				var e = o.default(t).css("transition-duration"), n = o.default(t).css("transition-delay");
				return parseFloat(e) || parseFloat(n) ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
			},
			reflow: function(t) {
				return t.offsetHeight;
			},
			triggerTransitionEnd: function(t) {
				o.default(t).trigger(f);
			},
			supportsTransitionEnd: function() {
				return Boolean(f);
			},
			isElement: function(t) {
				return (t[0] || t).nodeType;
			},
			typeCheckConfig: function(t, e, n) {
				for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
					var o = n[i], a = e[i], s = a && d.isElement(a) ? "element" : null === (l = a) || "undefined" == typeof l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
					if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ": Option \"" + i + "\" provided type \"" + s + "\" but expected type \"" + o + "\".");
				}
				var l;
			},
			findShadowRoot: function(t) {
				if (!document.documentElement.attachShadow) return null;
				if ("function" == typeof t.getRootNode) {
					var e = t.getRootNode();
					return e instanceof ShadowRoot ? e : null;
				}
				return t instanceof ShadowRoot ? t : t.parentNode ? d.findShadowRoot(t.parentNode) : null;
			},
			jQueryDetection: function() {
				if ("undefined" == typeof o.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
				var t = o.default.fn.jquery.split(" ")[0].split(".");
				if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
			}
		};
		d.jQueryDetection(), o.default.fn.emulateTransitionEnd = function(t) {
			var e = this, n = !1;
			return o.default(this).one(d.TRANSITION_END, (function() {
				n = !0;
			})), setTimeout((function() {
				n || d.triggerTransitionEnd(e);
			}), t), this;
		}, o.default.event.special[d.TRANSITION_END] = {
			bindType: f,
			delegateType: f,
			handle: function(t) {
				if (o.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
			}
		};
		var c = "bs.alert", h = o.default.fn.alert, g = function() {
			function t(t) {
				this._element = t;
			}
			var e = t.prototype;
			return e.close = function(t) {
				var e = this._element;
				t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
			}, e.dispose = function() {
				o.default.removeData(this._element, c), this._element = null;
			}, e._getRootElement = function(t) {
				var e = d.getSelectorFromElement(t), n = !1;
				return e && (n = document.querySelector(e)), n || (n = o.default(t).closest(".alert")[0]), n;
			}, e._triggerCloseEvent = function(t) {
				var e = o.default.Event("close.bs.alert");
				return o.default(t).trigger(e), e;
			}, e._removeElement = function(t) {
				var e = this;
				if (o.default(t).removeClass("show"), o.default(t).hasClass("fade")) {
					var n = d.getTransitionDurationFromElement(t);
					o.default(t).one(d.TRANSITION_END, (function(n) {
						return e._destroyElement(t, n);
					})).emulateTransitionEnd(n);
				} else this._destroyElement(t);
			}, e._destroyElement = function(t) {
				o.default(t).detach().trigger("closed.bs.alert").remove();
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this), i = n.data(c);
					i || (i = new t(this), n.data(c, i)), "close" === e && i[e](this);
				}));
			}, t._handleDismiss = function(t) {
				return function(e) {
					e && e.preventDefault(), t.close(this);
				};
			}, l(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.6.2";
				}
			}]), t;
		}();
		o.default(document).on("click.bs.alert.data-api", "[data-dismiss=\"alert\"]", g._handleDismiss(new g())), o.default.fn.alert = g._jQueryInterface, o.default.fn.alert.Constructor = g, o.default.fn.alert.noConflict = function() {
			return o.default.fn.alert = h, g._jQueryInterface;
		};
		var m = "bs.button", p = o.default.fn.button, _ = "active", v = "[data-toggle^=\"button\"]", y = "input:not([type=\"hidden\"])", b = ".btn", E = function() {
			function t(t) {
				this._element = t, this.shouldAvoidTriggerChange = !1;
			}
			var e = t.prototype;
			return e.toggle = function() {
				var t = !0, e = !0, n = o.default(this._element).closest("[data-toggle=\"buttons\"]")[0];
				if (n) {
					var i = this._element.querySelector(y);
					if (i) {
						if ("radio" === i.type) if (i.checked && this._element.classList.contains(_)) t = !1;
						else {
							var a = n.querySelector(".active");
							a && o.default(a).removeClass(_);
						}
						t && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(_)), this.shouldAvoidTriggerChange || o.default(i).trigger("change")), i.focus(), e = !1;
					}
				}
				this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), t && o.default(this._element).toggleClass(_));
			}, e.dispose = function() {
				o.default.removeData(this._element, m), this._element = null;
			}, t._jQueryInterface = function(e, n) {
				return this.each((function() {
					var i = o.default(this), a = i.data(m);
					a || (a = new t(this), i.data(m, a)), a.shouldAvoidTriggerChange = n, "toggle" === e && a[e]();
				}));
			}, l(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.6.2";
				}
			}]), t;
		}();
		o.default(document).on("click.bs.button.data-api", v, (function(t) {
			var e = t.target, n = e;
			if (o.default(e).hasClass("btn") || (e = o.default(e).closest(b)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
			else {
				var i = e.querySelector(y);
				if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
				"INPUT" !== n.tagName && "LABEL" === e.tagName || E._jQueryInterface.call(o.default(e), "toggle", "INPUT" === n.tagName);
			}
		})).on("focus.bs.button.data-api blur.bs.button.data-api", v, (function(t) {
			var e = o.default(t.target).closest(b)[0];
			o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
		})), o.default(window).on("load.bs.button.data-api", (function() {
			for (var t = [].slice.call(document.querySelectorAll("[data-toggle=\"buttons\"] .btn")), e = 0, n = t.length; e < n; e++) {
				var i = t[e], o = i.querySelector(y);
				o.checked || o.hasAttribute("checked") ? i.classList.add(_) : i.classList.remove(_);
			}
			for (var a = 0, s = (t = [].slice.call(document.querySelectorAll("[data-toggle=\"button\"]"))).length; a < s; a++) {
				var l = t[a];
				"true" === l.getAttribute("aria-pressed") ? l.classList.add(_) : l.classList.remove(_);
			}
		})), o.default.fn.button = E._jQueryInterface, o.default.fn.button.Constructor = E, o.default.fn.button.noConflict = function() {
			return o.default.fn.button = p, E._jQueryInterface;
		};
		var T = "carousel", w = "bs.carousel", C = o.default.fn[T], S = "active", N = "next", D = "prev", A = "slid.bs.carousel", I = ".active.carousel-item", k = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		}, O = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		}, j = {
			TOUCH: "touch",
			PEN: "pen"
		}, P = function() {
			function t(t, e) {
				this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
			}
			var e = t.prototype;
			return e.next = function() {
				this._isSliding || this._slide(N);
			}, e.nextWhenVisible = function() {
				var t = o.default(this._element);
				!document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
			}, e.prev = function() {
				this._isSliding || this._slide(D);
			}, e.pause = function(t) {
				t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
			}, e.cycle = function(t) {
				t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
			}, e.to = function(t) {
				var e = this;
				this._activeElement = this._element.querySelector(I);
				var n = this._getItemIndex(this._activeElement);
				if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) o.default(this._element).one(A, (function() {
					return e.to(t);
				}));
				else {
					if (n === t) return this.pause(), void this.cycle();
					var i = t > n ? N : D;
					this._slide(i, this._items[t]);
				}
			}, e.dispose = function() {
				o.default(this._element).off(".bs.carousel"), o.default.removeData(this._element, w), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
			}, e._getConfig = function(t) {
				return t = r({}, k, t), d.typeCheckConfig(T, t, O), t;
			}, e._handleSwipe = function() {
				var t = Math.abs(this.touchDeltaX);
				if (!(t <= 40)) {
					var e = t / this.touchDeltaX;
					this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
				}
			}, e._addEventListeners = function() {
				var t = this;
				this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", (function(e) {
					return t._keydown(e);
				})), "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", (function(e) {
					return t.pause(e);
				})).on("mouseleave.bs.carousel", (function(e) {
					return t.cycle(e);
				})), this._config.touch && this._addTouchEventListeners();
			}, e._addTouchEventListeners = function() {
				var t = this;
				if (this._touchSupported) {
					var e = function(e) {
						t._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
					}, n = function(e) {
						t._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
							return t.cycle(e);
						}), 500 + t._config.interval));
					};
					o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) {
						return t.preventDefault();
					})), this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", (function(t) {
						return e(t);
					})), o.default(this._element).on("pointerup.bs.carousel", (function(t) {
						return n(t);
					})), this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", (function(t) {
						return e(t);
					})), o.default(this._element).on("touchmove.bs.carousel", (function(e) {
						return function(e) {
							t.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t.touchStartX;
						}(e);
					})), o.default(this._element).on("touchend.bs.carousel", (function(t) {
						return n(t);
					})));
				}
			}, e._keydown = function(t) {
				if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
					case 37:
						t.preventDefault(), this.prev();
						break;
					case 39: t.preventDefault(), this.next();
				}
			}, e._getItemIndex = function(t) {
				return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
			}, e._getItemByDirection = function(t, e) {
				var n = t === N, i = t === D, o = this._getItemIndex(e), a = this._items.length - 1;
				if ((i && 0 === o || n && o === a) && !this._config.wrap) return e;
				var s = (o + (t === D ? -1 : 1)) % this._items.length;
				return -1 === s ? this._items[this._items.length - 1] : this._items[s];
			}, e._triggerSlideEvent = function(t, e) {
				var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(I)), a = o.default.Event("slide.bs.carousel", {
					relatedTarget: t,
					direction: e,
					from: i,
					to: n
				});
				return o.default(this._element).trigger(a), a;
			}, e._setActiveIndicatorElement = function(t) {
				if (this._indicatorsElement) {
					var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
					o.default(e).removeClass(S);
					var n = this._indicatorsElement.children[this._getItemIndex(t)];
					n && o.default(n).addClass(S);
				}
			}, e._updateInterval = function() {
				var t = this._activeElement || this._element.querySelector(I);
				if (t) {
					var e = parseInt(t.getAttribute("data-interval"), 10);
					e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
				}
			}, e._slide = function(t, e) {
				var n, i, a, s = this, l = this._element.querySelector(I), r = this._getItemIndex(l), u = e || l && this._getItemByDirection(t, l), f = this._getItemIndex(u), c = Boolean(this._interval);
				if (t === N ? (n = "carousel-item-left", i = "carousel-item-next", a = "left") : (n = "carousel-item-right", i = "carousel-item-prev", a = "right"), u && o.default(u).hasClass(S)) this._isSliding = !1;
				else if (!this._triggerSlideEvent(u, a).isDefaultPrevented() && l && u) {
					this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u;
					var h = o.default.Event(A, {
						relatedTarget: u,
						direction: a,
						from: r,
						to: f
					});
					if (o.default(this._element).hasClass("slide")) {
						o.default(u).addClass(i), d.reflow(u), o.default(l).addClass(n), o.default(u).addClass(n);
						var g = d.getTransitionDurationFromElement(l);
						o.default(l).one(d.TRANSITION_END, (function() {
							o.default(u).removeClass(n + " " + i).addClass(S), o.default(l).removeClass("active " + i + " " + n), s._isSliding = !1, setTimeout((function() {
								return o.default(s._element).trigger(h);
							}), 0);
						})).emulateTransitionEnd(g);
					} else o.default(l).removeClass(S), o.default(u).addClass(S), this._isSliding = !1, o.default(this._element).trigger(h);
					c && this.cycle();
				}
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this).data(w), i = r({}, k, o.default(this).data());
					"object" == typeof e && (i = r({}, i, e));
					var a = "string" == typeof e ? e : i.slide;
					if (n || (n = new t(this, i), o.default(this).data(w, n)), "number" == typeof e) n.to(e);
					else if ("string" == typeof a) {
						if ("undefined" == typeof n[a]) throw new TypeError("No method named \"" + a + "\"");
						n[a]();
					} else i.interval && i.ride && (n.pause(), n.cycle());
				}));
			}, t._dataApiClickHandler = function(e) {
				var n = d.getSelectorFromElement(this);
				if (n) {
					var i = o.default(n)[0];
					if (i && o.default(i).hasClass("carousel")) {
						var a = r({}, o.default(i).data(), o.default(this).data()), s = this.getAttribute("data-slide-to");
						s && (a.interval = !1), t._jQueryInterface.call(o.default(i), a), s && o.default(i).data(w).to(s), e.preventDefault();
					}
				}
			}, l(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.6.2";
				}
			}, {
				key: "Default",
				get: function() {
					return k;
				}
			}]), t;
		}();
		o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", P._dataApiClickHandler), o.default(window).on("load.bs.carousel.data-api", (function() {
			for (var t = [].slice.call(document.querySelectorAll("[data-ride=\"carousel\"]")), e = 0, n = t.length; e < n; e++) {
				var i = o.default(t[e]);
				P._jQueryInterface.call(i, i.data());
			}
		})), o.default.fn[T] = P._jQueryInterface, o.default.fn[T].Constructor = P, o.default.fn[T].noConflict = function() {
			return o.default.fn[T] = C, P._jQueryInterface;
		};
		var L = "collapse", R = "bs.collapse", x = o.default.fn[L], q = "show", F = "collapse", Q = "collapsing", B = "collapsed", H = "width", U = "[data-toggle=\"collapse\"]", M = {
			toggle: !0,
			parent: ""
		}, W = {
			toggle: "boolean",
			parent: "(string|element)"
		}, V = function() {
			function t(t, e) {
				this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + t.id + "\"],[data-toggle=\"collapse\"][data-target=\"#" + t.id + "\"]"));
				for (var n = [].slice.call(document.querySelectorAll(U)), i = 0, o = n.length; i < o; i++) {
					var a = n[i], s = d.getSelectorFromElement(a), l = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
						return e === t;
					}));
					null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(a));
				}
				this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
			}
			var e = t.prototype;
			return e.toggle = function() {
				o.default(this._element).hasClass(q) ? this.hide() : this.show();
			}, e.show = function() {
				var e, n, i = this;
				if (!(this._isTransitioning || o.default(this._element).hasClass(q) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
					return "string" == typeof i._config.parent ? t.getAttribute("data-parent") === i._config.parent : t.classList.contains(F);
				}))).length && (e = null), e && (n = o.default(e).not(this._selector).data(R)) && n._isTransitioning))) {
					var a = o.default.Event("show.bs.collapse");
					if (o.default(this._element).trigger(a), !a.isDefaultPrevented()) {
						e && (t._jQueryInterface.call(o.default(e).not(this._selector), "hide"), n || o.default(e).data(R, null));
						var s = this._getDimension();
						o.default(this._element).removeClass(F).addClass(Q), this._element.style[s] = 0, this._triggerArray.length && o.default(this._triggerArray).removeClass(B).attr("aria-expanded", !0), this.setTransitioning(!0);
						var l = "scroll" + (s[0].toUpperCase() + s.slice(1)), r = d.getTransitionDurationFromElement(this._element);
						o.default(this._element).one(d.TRANSITION_END, (function() {
							o.default(i._element).removeClass(Q).addClass("collapse show"), i._element.style[s] = "", i.setTransitioning(!1), o.default(i._element).trigger("shown.bs.collapse");
						})).emulateTransitionEnd(r), this._element.style[s] = this._element[l] + "px";
					}
				}
			}, e.hide = function() {
				var t = this;
				if (!this._isTransitioning && o.default(this._element).hasClass(q)) {
					var e = o.default.Event("hide.bs.collapse");
					if (o.default(this._element).trigger(e), !e.isDefaultPrevented()) {
						var n = this._getDimension();
						this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", d.reflow(this._element), o.default(this._element).addClass(Q).removeClass("collapse show");
						var i = this._triggerArray.length;
						if (i > 0) for (var a = 0; a < i; a++) {
							var s = this._triggerArray[a], l = d.getSelectorFromElement(s);
							null !== l && (o.default([].slice.call(document.querySelectorAll(l))).hasClass(q) || o.default(s).addClass(B).attr("aria-expanded", !1));
						}
						this.setTransitioning(!0), this._element.style[n] = "";
						var r = d.getTransitionDurationFromElement(this._element);
						o.default(this._element).one(d.TRANSITION_END, (function() {
							t.setTransitioning(!1), o.default(t._element).removeClass(Q).addClass(F).trigger("hidden.bs.collapse");
						})).emulateTransitionEnd(r);
					}
				}
			}, e.setTransitioning = function(t) {
				this._isTransitioning = t;
			}, e.dispose = function() {
				o.default.removeData(this._element, R), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
			}, e._getConfig = function(t) {
				return (t = r({}, M, t)).toggle = Boolean(t.toggle), d.typeCheckConfig(L, t, W), t;
			}, e._getDimension = function() {
				return o.default(this._element).hasClass(H) ? H : "height";
			}, e._getParent = function() {
				var e, n = this;
				d.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
				var i = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]", a = [].slice.call(e.querySelectorAll(i));
				return o.default(a).each((function(e, i) {
					n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
				})), e;
			}, e._addAriaAndCollapsedClass = function(t, e) {
				var n = o.default(t).hasClass(q);
				e.length && o.default(e).toggleClass(B, !n).attr("aria-expanded", n);
			}, t._getTargetFromElement = function(t) {
				var e = d.getSelectorFromElement(t);
				return e ? document.querySelector(e) : null;
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this), i = n.data(R), a = r({}, M, n.data(), "object" == typeof e && e ? e : {});
					if (!i && a.toggle && "string" == typeof e && /show|hide/.test(e) && (a.toggle = !1), i || (i = new t(this, a), n.data(R, i)), "string" == typeof e) {
						if ("undefined" == typeof i[e]) throw new TypeError("No method named \"" + e + "\"");
						i[e]();
					}
				}));
			}, l(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.6.2";
				}
			}, {
				key: "Default",
				get: function() {
					return M;
				}
			}]), t;
		}();
		o.default(document).on("click.bs.collapse.data-api", U, (function(t) {
			"A" === t.currentTarget.tagName && t.preventDefault();
			var e = o.default(this), n = d.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(n));
			o.default(i).each((function() {
				var t = o.default(this), n = t.data(R) ? "toggle" : e.data();
				V._jQueryInterface.call(t, n);
			}));
		})), o.default.fn[L] = V._jQueryInterface, o.default.fn[L].Constructor = V, o.default.fn[L].noConflict = function() {
			return o.default.fn[L] = x, V._jQueryInterface;
		};
		var z = "dropdown", K = "bs.dropdown", X = o.default.fn[z], Y = /* @__PURE__ */ new RegExp("38|40|27"), $ = "disabled", J = "show", G = "dropdown-menu-right", Z = "hide.bs.dropdown", tt = "hidden.bs.dropdown", et = "click.bs.dropdown.data-api", nt = "keydown.bs.dropdown.data-api", it = "[data-toggle=\"dropdown\"]", ot = ".dropdown-menu", at = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent",
			reference: "toggle",
			display: "dynamic",
			popperConfig: null
		}, st = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string",
			popperConfig: "(null|object)"
		}, lt = function() {
			function t(t, e) {
				this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
			}
			var e = t.prototype;
			return e.toggle = function() {
				if (!this._element.disabled && !o.default(this._element).hasClass($)) {
					var e = o.default(this._menu).hasClass(J);
					t._clearMenus(), e || this.show(!0);
				}
			}, e.show = function(e) {
				if (void 0 === e && (e = !1), !(this._element.disabled || o.default(this._element).hasClass($) || o.default(this._menu).hasClass(J))) {
					var n = { relatedTarget: this._element }, i = o.default.Event("show.bs.dropdown", n), s = t._getParentFromElement(this._element);
					if (o.default(s).trigger(i), !i.isDefaultPrevented()) {
						if (!this._inNavbar && e) {
							if ("undefined" == typeof a.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
							var l = this._element;
							"parent" === this._config.reference ? l = s : d.isElement(this._config.reference) && (l = this._config.reference, "undefined" != typeof this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && o.default(s).addClass("position-static"), this._popper = new a.default(l, this._menu, this._getPopperConfig());
						}
						"ontouchstart" in document.documentElement && 0 === o.default(s).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), o.default(this._menu).toggleClass(J), o.default(s).toggleClass(J).trigger(o.default.Event("shown.bs.dropdown", n));
					}
				}
			}, e.hide = function() {
				if (!this._element.disabled && !o.default(this._element).hasClass($) && o.default(this._menu).hasClass(J)) {
					var e = { relatedTarget: this._element }, n = o.default.Event(Z, e), i = t._getParentFromElement(this._element);
					o.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass(J), o.default(i).toggleClass(J).trigger(o.default.Event(tt, e)));
				}
			}, e.dispose = function() {
				o.default.removeData(this._element, K), o.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
			}, e.update = function() {
				this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
			}, e._addEventListeners = function() {
				var t = this;
				o.default(this._element).on("click.bs.dropdown", (function(e) {
					e.preventDefault(), e.stopPropagation(), t.toggle();
				}));
			}, e._getConfig = function(t) {
				return t = r({}, this.constructor.Default, o.default(this._element).data(), t), d.typeCheckConfig(z, t, this.constructor.DefaultType), t;
			}, e._getMenuElement = function() {
				if (!this._menu) {
					var e = t._getParentFromElement(this._element);
					e && (this._menu = e.querySelector(ot));
				}
				return this._menu;
			}, e._getPlacement = function() {
				var t = o.default(this._element.parentNode), e = "bottom-start";
				return t.hasClass("dropup") ? e = o.default(this._menu).hasClass(G) ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : o.default(this._menu).hasClass(G) && (e = "bottom-end"), e;
			}, e._detectNavbar = function() {
				return o.default(this._element).closest(".navbar").length > 0;
			}, e._getOffset = function() {
				var t = this, e = {};
				return "function" == typeof this._config.offset ? e.fn = function(e) {
					return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element)), e;
				} : e.offset = this._config.offset, e;
			}, e._getPopperConfig = function() {
				var t = {
					placement: this._getPlacement(),
					modifiers: {
						offset: this._getOffset(),
						flip: { enabled: this._config.flip },
						preventOverflow: { boundariesElement: this._config.boundary }
					}
				};
				return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), r({}, t, this._config.popperConfig);
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this).data(K);
					if (n || (n = new t(this, "object" == typeof e ? e : null), o.default(this).data(K, n)), "string" == typeof e) {
						if ("undefined" == typeof n[e]) throw new TypeError("No method named \"" + e + "\"");
						n[e]();
					}
				}));
			}, t._clearMenus = function(e) {
				if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = [].slice.call(document.querySelectorAll(it)), i = 0, a = n.length; i < a; i++) {
					var s = t._getParentFromElement(n[i]), l = o.default(n[i]).data(K), r = { relatedTarget: n[i] };
					if (e && "click" === e.type && (r.clickEvent = e), l) {
						var u = l._menu;
						if (o.default(s).hasClass(J) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && o.default.contains(s, e.target))) {
							var f = o.default.Event(Z, r);
							o.default(s).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), n[i].setAttribute("aria-expanded", "false"), l._popper && l._popper.destroy(), o.default(u).removeClass(J), o.default(s).removeClass(J).trigger(o.default.Event(tt, r)));
						}
					}
				}
			}, t._getParentFromElement = function(t) {
				var e, n = d.getSelectorFromElement(t);
				return n && (e = document.querySelector(n)), e || t.parentNode;
			}, t._dataApiKeydownHandler = function(e) {
				if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || o.default(e.target).closest(ot).length) : !Y.test(e.which)) && !this.disabled && !o.default(this).hasClass($)) {
					var n = t._getParentFromElement(this), i = o.default(n).hasClass(J);
					if (i || 27 !== e.which) {
						if (e.preventDefault(), e.stopPropagation(), !i || 27 === e.which || 32 === e.which) return 27 === e.which && o.default(n.querySelector(it)).trigger("focus"), void o.default(this).trigger("click");
						var a = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
							return o.default(t).is(":visible");
						}));
						if (0 !== a.length) {
							var s = a.indexOf(e.target);
							38 === e.which && s > 0 && s--, 40 === e.which && s < a.length - 1 && s++, s < 0 && (s = 0), a[s].focus();
						}
					}
				}
			}, l(t, null, [
				{
					key: "VERSION",
					get: function() {
						return "4.6.2";
					}
				},
				{
					key: "Default",
					get: function() {
						return at;
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return st;
					}
				}
			]), t;
		}();
		o.default(document).on(nt, it, lt._dataApiKeydownHandler).on(nt, ot, lt._dataApiKeydownHandler).on(et + " keyup.bs.dropdown.data-api", lt._clearMenus).on(et, it, (function(t) {
			t.preventDefault(), t.stopPropagation(), lt._jQueryInterface.call(o.default(this), "toggle");
		})).on(et, ".dropdown form", (function(t) {
			t.stopPropagation();
		})), o.default.fn[z] = lt._jQueryInterface, o.default.fn[z].Constructor = lt, o.default.fn[z].noConflict = function() {
			return o.default.fn[z] = X, lt._jQueryInterface;
		};
		var rt = "bs.modal", ut = o.default.fn.modal, ft = "modal-open", dt = "fade", ct = "show", ht = "modal-static", gt = "hidden.bs.modal", mt = "show.bs.modal", pt = "focusin.bs.modal", _t = "resize.bs.modal", vt = "click.dismiss.bs.modal", yt = "keydown.dismiss.bs.modal", bt = "mousedown.dismiss.bs.modal", Et = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Tt = {
			backdrop: !0,
			keyboard: !0,
			focus: !0,
			show: !0
		}, wt = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
			show: "boolean"
		}, Ct = function() {
			function t(t, e) {
				this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
			}
			var e = t.prototype;
			return e.toggle = function(t) {
				return this._isShown ? this.hide() : this.show(t);
			}, e.show = function(t) {
				var e = this;
				if (!this._isShown && !this._isTransitioning) {
					var n = o.default.Event(mt, { relatedTarget: t });
					o.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, o.default(this._element).hasClass(dt) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default(this._element).on(vt, "[data-dismiss=\"modal\"]", (function(t) {
						return e.hide(t);
					})), o.default(this._dialog).on(bt, (function() {
						o.default(e._element).one("mouseup.dismiss.bs.modal", (function(t) {
							o.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
						}));
					})), this._showBackdrop((function() {
						return e._showElement(t);
					})));
				}
			}, e.hide = function(t) {
				var e = this;
				if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
					var n = o.default.Event("hide.bs.modal");
					if (o.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
						this._isShown = !1;
						var i = o.default(this._element).hasClass(dt);
						if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), o.default(document).off(pt), o.default(this._element).removeClass(ct), o.default(this._element).off(vt), o.default(this._dialog).off(bt), i) {
							var a = d.getTransitionDurationFromElement(this._element);
							o.default(this._element).one(d.TRANSITION_END, (function(t) {
								return e._hideModal(t);
							})).emulateTransitionEnd(a);
						} else this._hideModal();
					}
				}
			}, e.dispose = function() {
				[
					window,
					this._element,
					this._dialog
				].forEach((function(t) {
					return o.default(t).off(".bs.modal");
				})), o.default(document).off(pt), o.default.removeData(this._element, rt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
			}, e.handleUpdate = function() {
				this._adjustDialog();
			}, e._getConfig = function(t) {
				return t = r({}, Tt, t), d.typeCheckConfig("modal", t, wt), t;
			}, e._triggerBackdropTransition = function() {
				var t = this, e = o.default.Event("hidePrevented.bs.modal");
				if (o.default(this._element).trigger(e), !e.isDefaultPrevented()) {
					var n = this._element.scrollHeight > document.documentElement.clientHeight;
					n || (this._element.style.overflowY = "hidden"), this._element.classList.add(ht);
					var i = d.getTransitionDurationFromElement(this._dialog);
					o.default(this._element).off(d.TRANSITION_END), o.default(this._element).one(d.TRANSITION_END, (function() {
						t._element.classList.remove(ht), n || o.default(t._element).one(d.TRANSITION_END, (function() {
							t._element.style.overflowY = "";
						})).emulateTransitionEnd(t._element, i);
					})).emulateTransitionEnd(i), this._element.focus();
				}
			}, e._showElement = function(t) {
				var e = this, n = o.default(this._element).hasClass(dt), i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
				this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && d.reflow(this._element), o.default(this._element).addClass(ct), this._config.focus && this._enforceFocus();
				var a = o.default.Event("shown.bs.modal", { relatedTarget: t }), s = function() {
					e._config.focus && e._element.focus(), e._isTransitioning = !1, o.default(e._element).trigger(a);
				};
				if (n) {
					var l = d.getTransitionDurationFromElement(this._dialog);
					o.default(this._dialog).one(d.TRANSITION_END, s).emulateTransitionEnd(l);
				} else s();
			}, e._enforceFocus = function() {
				var t = this;
				o.default(document).off(pt).on(pt, (function(e) {
					document !== e.target && t._element !== e.target && 0 === o.default(t._element).has(e.target).length && t._element.focus();
				}));
			}, e._setEscapeEvent = function() {
				var t = this;
				this._isShown ? o.default(this._element).on(yt, (function(e) {
					t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
				})) : this._isShown || o.default(this._element).off(yt);
			}, e._setResizeEvent = function() {
				var t = this;
				this._isShown ? o.default(window).on(_t, (function(e) {
					return t.handleUpdate(e);
				})) : o.default(window).off(_t);
			}, e._hideModal = function() {
				var t = this;
				this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
					o.default(document.body).removeClass(ft), t._resetAdjustments(), t._resetScrollbar(), o.default(t._element).trigger(gt);
				}));
			}, e._removeBackdrop = function() {
				this._backdrop && (o.default(this._backdrop).remove(), this._backdrop = null);
			}, e._showBackdrop = function(t) {
				var e = this, n = o.default(this._element).hasClass(dt) ? dt : "";
				if (this._isShown && this._config.backdrop) {
					if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), o.default(this._backdrop).appendTo(document.body), o.default(this._element).on(vt, (function(t) {
						e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide());
					})), n && d.reflow(this._backdrop), o.default(this._backdrop).addClass(ct), !t) return;
					if (!n) return void t();
					var i = d.getTransitionDurationFromElement(this._backdrop);
					o.default(this._backdrop).one(d.TRANSITION_END, t).emulateTransitionEnd(i);
				} else if (!this._isShown && this._backdrop) {
					o.default(this._backdrop).removeClass(ct);
					var a = function() {
						e._removeBackdrop(), t && t();
					};
					if (o.default(this._element).hasClass(dt)) {
						var s = d.getTransitionDurationFromElement(this._backdrop);
						o.default(this._backdrop).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
					} else a();
				} else t && t();
			}, e._adjustDialog = function() {
				var t = this._element.scrollHeight > document.documentElement.clientHeight;
				!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
			}, e._resetAdjustments = function() {
				this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
			}, e._checkScrollbar = function() {
				var t = document.body.getBoundingClientRect();
				this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
			}, e._setScrollbar = function() {
				var t = this;
				if (this._isBodyOverflowing) {
					var e = [].slice.call(document.querySelectorAll(Et)), n = [].slice.call(document.querySelectorAll(".sticky-top"));
					o.default(e).each((function(e, n) {
						var i = n.style.paddingRight, a = o.default(n).css("padding-right");
						o.default(n).data("padding-right", i).css("padding-right", parseFloat(a) + t._scrollbarWidth + "px");
					})), o.default(n).each((function(e, n) {
						var i = n.style.marginRight, a = o.default(n).css("margin-right");
						o.default(n).data("margin-right", i).css("margin-right", parseFloat(a) - t._scrollbarWidth + "px");
					}));
					var i = document.body.style.paddingRight, a = o.default(document.body).css("padding-right");
					o.default(document.body).data("padding-right", i).css("padding-right", parseFloat(a) + this._scrollbarWidth + "px");
				}
				o.default(document.body).addClass(ft);
			}, e._resetScrollbar = function() {
				var t = [].slice.call(document.querySelectorAll(Et));
				o.default(t).each((function(t, e) {
					var n = o.default(e).data("padding-right");
					o.default(e).removeData("padding-right"), e.style.paddingRight = n || "";
				}));
				var e = [].slice.call(document.querySelectorAll(".sticky-top"));
				o.default(e).each((function(t, e) {
					var n = o.default(e).data("margin-right");
					"undefined" != typeof n && o.default(e).css("margin-right", n).removeData("margin-right");
				}));
				var n = o.default(document.body).data("padding-right");
				o.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
			}, e._getScrollbarWidth = function() {
				var t = document.createElement("div");
				t.className = "modal-scrollbar-measure", document.body.appendChild(t);
				var e = t.getBoundingClientRect().width - t.clientWidth;
				return document.body.removeChild(t), e;
			}, t._jQueryInterface = function(e, n) {
				return this.each((function() {
					var i = o.default(this).data(rt), a = r({}, Tt, o.default(this).data(), "object" == typeof e && e ? e : {});
					if (i || (i = new t(this, a), o.default(this).data(rt, i)), "string" == typeof e) {
						if ("undefined" == typeof i[e]) throw new TypeError("No method named \"" + e + "\"");
						i[e](n);
					} else a.show && i.show(n);
				}));
			}, l(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.6.2";
				}
			}, {
				key: "Default",
				get: function() {
					return Tt;
				}
			}]), t;
		}();
		o.default(document).on("click.bs.modal.data-api", "[data-toggle=\"modal\"]", (function(t) {
			var e, n = this, i = d.getSelectorFromElement(this);
			i && (e = document.querySelector(i));
			var a = o.default(e).data(rt) ? "toggle" : r({}, o.default(e).data(), o.default(this).data());
			"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
			var s = o.default(e).one(mt, (function(t) {
				t.isDefaultPrevented() || s.one(gt, (function() {
					o.default(n).is(":visible") && n.focus();
				}));
			}));
			Ct._jQueryInterface.call(o.default(e), a, this);
		})), o.default.fn.modal = Ct._jQueryInterface, o.default.fn.modal.Constructor = Ct, o.default.fn.modal.noConflict = function() {
			return o.default.fn.modal = ut, Ct._jQueryInterface;
		};
		var St = [
			"background",
			"cite",
			"href",
			"itemtype",
			"longdesc",
			"poster",
			"src",
			"xlink:href"
		], Nt = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Dt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
		function At(t, e, n) {
			if (0 === t.length) return t;
			if (n && "function" == typeof n) return n(t);
			for (var i = new window.DOMParser().parseFromString(t, "text/html"), o = Object.keys(e), a = [].slice.call(i.body.querySelectorAll("*")), s = function(t, n) {
				var i = a[t], s = i.nodeName.toLowerCase();
				if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
				var l = [].slice.call(i.attributes), r = [].concat(e["*"] || [], e[s] || []);
				l.forEach((function(t) {
					(function(t, e) {
						var n = t.nodeName.toLowerCase();
						if (-1 !== e.indexOf(n)) return -1 === St.indexOf(n) || Boolean(Nt.test(t.nodeValue) || Dt.test(t.nodeValue));
						for (var i = e.filter((function(t) {
							return t instanceof RegExp;
						})), o = 0, a = i.length; o < a; o++) if (i[o].test(n)) return !0;
						return !1;
					})(t, r) || i.removeAttribute(t.nodeName);
				}));
			}, l = 0, r = a.length; l < r; l++) s(l);
			return i.body.innerHTML;
		}
		var It = "tooltip", kt = "bs.tooltip", Ot = o.default.fn.tooltip, jt = /* @__PURE__ */ new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Pt = [
			"sanitize",
			"whiteList",
			"sanitizeFn"
		], Lt = "fade", Rt = "show", xt = "show", qt = "out", Ft = "hover", Qt = "focus", Bt = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: "right",
			BOTTOM: "bottom",
			LEFT: "left"
		}, Ht = {
			animation: !0,
			template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"arrow\"></div><div class=\"tooltip-inner\"></div></div>",
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
			customClass: "",
			sanitize: !0,
			sanitizeFn: null,
			whiteList: {
				"*": [
					"class",
					"dir",
					"id",
					"lang",
					"role",
					/^aria-[\w-]*$/i
				],
				a: [
					"target",
					"href",
					"title",
					"rel"
				],
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
				img: [
					"src",
					"srcset",
					"alt",
					"title",
					"width",
					"height"
				],
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
				ul: []
			},
			popperConfig: null
		}, Ut = {
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
			customClass: "(string|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			whiteList: "object",
			popperConfig: "(null|object)"
		}, Mt = {
			HIDE: "hide.bs.tooltip",
			HIDDEN: "hidden.bs.tooltip",
			SHOW: "show.bs.tooltip",
			SHOWN: "shown.bs.tooltip",
			INSERTED: "inserted.bs.tooltip",
			CLICK: "click.bs.tooltip",
			FOCUSIN: "focusin.bs.tooltip",
			FOCUSOUT: "focusout.bs.tooltip",
			MOUSEENTER: "mouseenter.bs.tooltip",
			MOUSELEAVE: "mouseleave.bs.tooltip"
		}, Wt = function() {
			function t(t, e) {
				if ("undefined" == typeof a.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
				this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
			}
			var e = t.prototype;
			return e.enable = function() {
				this._isEnabled = !0;
			}, e.disable = function() {
				this._isEnabled = !1;
			}, e.toggleEnabled = function() {
				this._isEnabled = !this._isEnabled;
			}, e.toggle = function(t) {
				if (this._isEnabled) if (t) {
					var e = this.constructor.DATA_KEY, n = o.default(t.currentTarget).data(e);
					n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), o.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
				} else {
					if (o.default(this.getTipElement()).hasClass(Rt)) return void this._leave(null, this);
					this._enter(null, this);
				}
			}, e.dispose = function() {
				clearTimeout(this._timeout), o.default.removeData(this.element, this.constructor.DATA_KEY), o.default(this.element).off(this.constructor.EVENT_KEY), o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
			}, e.show = function() {
				var t = this;
				if ("none" === o.default(this.element).css("display")) throw new Error("Please use show on visible elements");
				var e = o.default.Event(this.constructor.Event.SHOW);
				if (this.isWithContent() && this._isEnabled) {
					o.default(this.element).trigger(e);
					var n = d.findShadowRoot(this.element), i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
					if (e.isDefaultPrevented() || !i) return;
					var s = this.getTipElement(), l = d.getUID(this.constructor.NAME);
					s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && o.default(s).addClass(Lt);
					var r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement, u = this._getAttachment(r);
					this.addAttachmentClass(u);
					var f = this._getContainer();
					o.default(s).data(this.constructor.DATA_KEY, this), o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s).appendTo(f), o.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new a.default(this.element, s, this._getPopperConfig(u)), o.default(s).addClass(Rt), o.default(s).addClass(this.config.customClass), "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
					var c = function() {
						t.config.animation && t._fixTransition();
						var e = t._hoverState;
						t._hoverState = null, o.default(t.element).trigger(t.constructor.Event.SHOWN), e === qt && t._leave(null, t);
					};
					if (o.default(this.tip).hasClass(Lt)) {
						var h = d.getTransitionDurationFromElement(this.tip);
						o.default(this.tip).one(d.TRANSITION_END, c).emulateTransitionEnd(h);
					} else c();
				}
			}, e.hide = function(t) {
				var e = this, n = this.getTipElement(), i = o.default.Event(this.constructor.Event.HIDE), a = function() {
					e._hoverState !== xt && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), o.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
				};
				if (o.default(this.element).trigger(i), !i.isDefaultPrevented()) {
					if (o.default(n).removeClass(Rt), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, o.default(this.tip).hasClass(Lt)) {
						var s = d.getTransitionDurationFromElement(n);
						o.default(n).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
					} else a();
					this._hoverState = "";
				}
			}, e.update = function() {
				null !== this._popper && this._popper.scheduleUpdate();
			}, e.isWithContent = function() {
				return Boolean(this.getTitle());
			}, e.addAttachmentClass = function(t) {
				o.default(this.getTipElement()).addClass("bs-tooltip-" + t);
			}, e.getTipElement = function() {
				return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
			}, e.setContent = function() {
				var t = this.getTipElement();
				this.setElementContent(o.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(t).removeClass("fade show");
			}, e.setElementContent = function(t, e) {
				"object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = At(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? o.default(e).parent().is(t) || t.empty().append(e) : t.text(o.default(e).text());
			}, e.getTitle = function() {
				var t = this.element.getAttribute("data-original-title");
				return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
			}, e._getPopperConfig = function(t) {
				var e = this;
				return r({}, {
					placement: t,
					modifiers: {
						offset: this._getOffset(),
						flip: { behavior: this.config.fallbackPlacement },
						arrow: { element: ".arrow" },
						preventOverflow: { boundariesElement: this.config.boundary }
					},
					onCreate: function(t) {
						t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
					},
					onUpdate: function(t) {
						return e._handlePopperPlacementChange(t);
					}
				}, this.config.popperConfig);
			}, e._getOffset = function() {
				var t = this, e = {};
				return "function" == typeof this.config.offset ? e.fn = function(e) {
					return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element)), e;
				} : e.offset = this.config.offset, e;
			}, e._getContainer = function() {
				return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container);
			}, e._getAttachment = function(t) {
				return Bt[t.toUpperCase()];
			}, e._setListeners = function() {
				var t = this;
				this.config.trigger.split(" ").forEach((function(e) {
					if ("click" === e) o.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
						return t.toggle(e);
					}));
					else if ("manual" !== e) {
						var n = e === Ft ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, i = e === Ft ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
						o.default(t.element).on(n, t.config.selector, (function(e) {
							return t._enter(e);
						})).on(i, t.config.selector, (function(e) {
							return t._leave(e);
						}));
					}
				})), this._hideModalHandler = function() {
					t.element && t.hide();
				}, o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, {
					trigger: "manual",
					selector: ""
				}) : this._fixTitle();
			}, e._fixTitle = function() {
				var t = typeof this.element.getAttribute("data-original-title");
				(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
			}, e._enter = function(t, e) {
				var n = this.constructor.DATA_KEY;
				(e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Qt : Ft] = !0), o.default(e.getTipElement()).hasClass(Rt) || e._hoverState === xt ? e._hoverState = xt : (clearTimeout(e._timeout), e._hoverState = xt, e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
					e._hoverState === xt && e.show();
				}), e.config.delay.show) : e.show());
			}, e._leave = function(t, e) {
				var n = this.constructor.DATA_KEY;
				(e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Qt : Ft] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = qt, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
					e._hoverState === qt && e.hide();
				}), e.config.delay.hide) : e.hide());
			}, e._isWithActiveTrigger = function() {
				for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
				return !1;
			}, e._getConfig = function(t) {
				var e = o.default(this.element).data();
				return Object.keys(e).forEach((function(t) {
					-1 !== Pt.indexOf(t) && delete e[t];
				})), "number" == typeof (t = r({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
					show: t.delay,
					hide: t.delay
				}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d.typeCheckConfig(It, t, this.constructor.DefaultType), t.sanitize && (t.template = At(t.template, t.whiteList, t.sanitizeFn)), t;
			}, e._getDelegateConfig = function() {
				var t = {};
				if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
				return t;
			}, e._cleanTipClass = function() {
				var t = o.default(this.getTipElement()), e = t.attr("class").match(jt);
				null !== e && e.length && t.removeClass(e.join(""));
			}, e._handlePopperPlacementChange = function(t) {
				this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
			}, e._fixTransition = function() {
				var t = this.getTipElement(), e = this.config.animation;
				null === t.getAttribute("x-placement") && (o.default(t).removeClass(Lt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this), i = n.data(kt), a = "object" == typeof e && e;
					if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this, a), n.data(kt, i)), "string" == typeof e)) {
						if ("undefined" == typeof i[e]) throw new TypeError("No method named \"" + e + "\"");
						i[e]();
					}
				}));
			}, l(t, null, [
				{
					key: "VERSION",
					get: function() {
						return "4.6.2";
					}
				},
				{
					key: "Default",
					get: function() {
						return Ht;
					}
				},
				{
					key: "NAME",
					get: function() {
						return It;
					}
				},
				{
					key: "DATA_KEY",
					get: function() {
						return kt;
					}
				},
				{
					key: "Event",
					get: function() {
						return Mt;
					}
				},
				{
					key: "EVENT_KEY",
					get: function() {
						return ".bs.tooltip";
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return Ut;
					}
				}
			]), t;
		}();
		o.default.fn.tooltip = Wt._jQueryInterface, o.default.fn.tooltip.Constructor = Wt, o.default.fn.tooltip.noConflict = function() {
			return o.default.fn.tooltip = Ot, Wt._jQueryInterface;
		};
		var Vt = "bs.popover", zt = o.default.fn.popover, Kt = /* @__PURE__ */ new RegExp("(^|\\s)bs-popover\\S+", "g"), Xt = r({}, Wt.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>"
		}), Yt = r({}, Wt.DefaultType, { content: "(string|element|function)" }), $t = {
			HIDE: "hide.bs.popover",
			HIDDEN: "hidden.bs.popover",
			SHOW: "show.bs.popover",
			SHOWN: "shown.bs.popover",
			INSERTED: "inserted.bs.popover",
			CLICK: "click.bs.popover",
			FOCUSIN: "focusin.bs.popover",
			FOCUSOUT: "focusout.bs.popover",
			MOUSEENTER: "mouseenter.bs.popover",
			MOUSELEAVE: "mouseleave.bs.popover"
		}, Jt = function(t) {
			var e, n;
			function i() {
				return t.apply(this, arguments) || this;
			}
			n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, u(e, n);
			var a = i.prototype;
			return a.isWithContent = function() {
				return this.getTitle() || this._getContent();
			}, a.addAttachmentClass = function(t) {
				o.default(this.getTipElement()).addClass("bs-popover-" + t);
			}, a.getTipElement = function() {
				return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
			}, a.setContent = function() {
				var t = o.default(this.getTipElement());
				this.setElementContent(t.find(".popover-header"), this.getTitle());
				var e = this._getContent();
				"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
			}, a._getContent = function() {
				return this.element.getAttribute("data-content") || this.config.content;
			}, a._cleanTipClass = function() {
				var t = o.default(this.getTipElement()), e = t.attr("class").match(Kt);
				null !== e && e.length > 0 && t.removeClass(e.join(""));
			}, i._jQueryInterface = function(t) {
				return this.each((function() {
					var e = o.default(this).data(Vt), n = "object" == typeof t ? t : null;
					if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n), o.default(this).data(Vt, e)), "string" == typeof t)) {
						if ("undefined" == typeof e[t]) throw new TypeError("No method named \"" + t + "\"");
						e[t]();
					}
				}));
			}, l(i, null, [
				{
					key: "VERSION",
					get: function() {
						return "4.6.2";
					}
				},
				{
					key: "Default",
					get: function() {
						return Xt;
					}
				},
				{
					key: "NAME",
					get: function() {
						return "popover";
					}
				},
				{
					key: "DATA_KEY",
					get: function() {
						return Vt;
					}
				},
				{
					key: "Event",
					get: function() {
						return $t;
					}
				},
				{
					key: "EVENT_KEY",
					get: function() {
						return ".bs.popover";
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return Yt;
					}
				}
			]), i;
		}(Wt);
		o.default.fn.popover = Jt._jQueryInterface, o.default.fn.popover.Constructor = Jt, o.default.fn.popover.noConflict = function() {
			return o.default.fn.popover = zt, Jt._jQueryInterface;
		};
		var Gt = "scrollspy", Zt = "bs.scrollspy", te = o.default.fn[Gt], ee = "active", ne = "position", ie = ".nav, .list-group", oe = {
			offset: 10,
			method: "auto",
			target: ""
		}, ae = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		}, se = function() {
			function t(t, e) {
				var n = this;
				this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o.default(this._scrollElement).on("scroll.bs.scrollspy", (function(t) {
					return n._process(t);
				})), this.refresh(), this._process();
			}
			var e = t.prototype;
			return e.refresh = function() {
				var t = this, e = this._scrollElement === this._scrollElement.window ? "offset" : ne, n = "auto" === this._config.method ? e : this._config.method, i = n === ne ? this._getScrollTop() : 0;
				this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
					var e, a = d.getSelectorFromElement(t);
					if (a && (e = document.querySelector(a)), e) {
						var s = e.getBoundingClientRect();
						if (s.width || s.height) return [o.default(e)[n]().top + i, a];
					}
					return null;
				})).filter(Boolean).sort((function(t, e) {
					return t[0] - e[0];
				})).forEach((function(e) {
					t._offsets.push(e[0]), t._targets.push(e[1]);
				}));
			}, e.dispose = function() {
				o.default.removeData(this._element, Zt), o.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
			}, e._getConfig = function(t) {
				if ("string" != typeof (t = r({}, oe, "object" == typeof t && t ? t : {})).target && d.isElement(t.target)) {
					var e = o.default(t.target).attr("id");
					e || (e = d.getUID(Gt), o.default(t.target).attr("id", e)), t.target = "#" + e;
				}
				return d.typeCheckConfig(Gt, t, ae), t;
			}, e._getScrollTop = function() {
				return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
			}, e._getScrollHeight = function() {
				return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
			}, e._getOffsetHeight = function() {
				return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
			}, e._process = function() {
				var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
				if (this._scrollHeight !== e && this.refresh(), t >= n) {
					var i = this._targets[this._targets.length - 1];
					this._activeTarget !== i && this._activate(i);
				} else {
					if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
					for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
				}
			}, e._activate = function(t) {
				this._activeTarget = t, this._clear();
				var e = this._selector.split(",").map((function(e) {
					return e + "[data-target=\"" + t + "\"]," + e + "[href=\"" + t + "\"]";
				})), n = o.default([].slice.call(document.querySelectorAll(e.join(","))));
				n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ee), n.addClass(ee)) : (n.addClass(ee), n.parents(ie).prev(".nav-link, .list-group-item").addClass(ee), n.parents(ie).prev(".nav-item").children(".nav-link").addClass(ee)), o.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
			}, e._clear = function() {
				[].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
					return t.classList.contains(ee);
				})).forEach((function(t) {
					return t.classList.remove(ee);
				}));
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this).data(Zt);
					if (n || (n = new t(this, "object" == typeof e && e), o.default(this).data(Zt, n)), "string" == typeof e) {
						if ("undefined" == typeof n[e]) throw new TypeError("No method named \"" + e + "\"");
						n[e]();
					}
				}));
			}, l(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.6.2";
				}
			}, {
				key: "Default",
				get: function() {
					return oe;
				}
			}]), t;
		}();
		o.default(window).on("load.bs.scrollspy.data-api", (function() {
			for (var t = [].slice.call(document.querySelectorAll("[data-spy=\"scroll\"]")), e = t.length; e--;) {
				var n = o.default(t[e]);
				se._jQueryInterface.call(n, n.data());
			}
		})), o.default.fn[Gt] = se._jQueryInterface, o.default.fn[Gt].Constructor = se, o.default.fn[Gt].noConflict = function() {
			return o.default.fn[Gt] = te, se._jQueryInterface;
		};
		var le = "bs.tab", re = o.default.fn.tab, ue = "active", fe = "fade", de = "show", ce = ".active", he = "> li > .active", ge = function() {
			function t(t) {
				this._element = t;
			}
			var e = t.prototype;
			return e.show = function() {
				var t = this;
				if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass(ue) || o.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
					var e, n, i = o.default(this._element).closest(".nav, .list-group")[0], a = d.getSelectorFromElement(this._element);
					if (i) {
						var s = "UL" === i.nodeName || "OL" === i.nodeName ? he : ce;
						n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1];
					}
					var l = o.default.Event("hide.bs.tab", { relatedTarget: this._element }), r = o.default.Event("show.bs.tab", { relatedTarget: n });
					if (n && o.default(n).trigger(l), o.default(this._element).trigger(r), !r.isDefaultPrevented() && !l.isDefaultPrevented()) {
						a && (e = document.querySelector(a)), this._activate(this._element, i);
						var u = function() {
							var e = o.default.Event("hidden.bs.tab", { relatedTarget: t._element }), i = o.default.Event("shown.bs.tab", { relatedTarget: n });
							o.default(n).trigger(e), o.default(t._element).trigger(i);
						};
						e ? this._activate(e, e.parentNode, u) : u();
					}
				}
			}, e.dispose = function() {
				o.default.removeData(this._element, le), this._element = null;
			}, e._activate = function(t, e, n) {
				var i = this, a = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? o.default(e).children(ce) : o.default(e).find(he))[0], s = n && a && o.default(a).hasClass(fe), l = function() {
					return i._transitionComplete(t, a, n);
				};
				if (a && s) {
					var r = d.getTransitionDurationFromElement(a);
					o.default(a).removeClass(de).one(d.TRANSITION_END, l).emulateTransitionEnd(r);
				} else l();
			}, e._transitionComplete = function(t, e, n) {
				if (e) {
					o.default(e).removeClass(ue);
					var i = o.default(e.parentNode).find("> .dropdown-menu .active")[0];
					i && o.default(i).removeClass(ue), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
				}
				o.default(t).addClass(ue), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d.reflow(t), t.classList.contains(fe) && t.classList.add(de);
				var a = t.parentNode;
				if (a && "LI" === a.nodeName && (a = a.parentNode), a && o.default(a).hasClass("dropdown-menu")) {
					var s = o.default(t).closest(".dropdown")[0];
					if (s) {
						var l = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
						o.default(l).addClass(ue);
					}
					t.setAttribute("aria-expanded", !0);
				}
				n && n();
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this), i = n.data(le);
					if (i || (i = new t(this), n.data(le, i)), "string" == typeof e) {
						if ("undefined" == typeof i[e]) throw new TypeError("No method named \"" + e + "\"");
						i[e]();
					}
				}));
			}, l(t, null, [{
				key: "VERSION",
				get: function() {
					return "4.6.2";
				}
			}]), t;
		}();
		o.default(document).on("click.bs.tab.data-api", "[data-toggle=\"tab\"], [data-toggle=\"pill\"], [data-toggle=\"list\"]", (function(t) {
			t.preventDefault(), ge._jQueryInterface.call(o.default(this), "show");
		})), o.default.fn.tab = ge._jQueryInterface, o.default.fn.tab.Constructor = ge, o.default.fn.tab.noConflict = function() {
			return o.default.fn.tab = re, ge._jQueryInterface;
		};
		var me = "bs.toast", pe = o.default.fn.toast, _e = "hide", ve = "show", ye = "showing", be = "click.dismiss.bs.toast", Ee = {
			animation: !0,
			autohide: !0,
			delay: 500
		}, Te = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		}, we = function() {
			function t(t, e) {
				this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
			}
			var e = t.prototype;
			return e.show = function() {
				var t = this, e = o.default.Event("show.bs.toast");
				if (o.default(this._element).trigger(e), !e.isDefaultPrevented()) {
					this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
					var n = function() {
						t._element.classList.remove(ye), t._element.classList.add(ve), o.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function() {
							t.hide();
						}), t._config.delay));
					};
					if (this._element.classList.remove(_e), d.reflow(this._element), this._element.classList.add(ye), this._config.animation) {
						var i = d.getTransitionDurationFromElement(this._element);
						o.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(i);
					} else n();
				}
			}, e.hide = function() {
				if (this._element.classList.contains(ve)) {
					var t = o.default.Event("hide.bs.toast");
					o.default(this._element).trigger(t), t.isDefaultPrevented() || this._close();
				}
			}, e.dispose = function() {
				this._clearTimeout(), this._element.classList.contains(ve) && this._element.classList.remove(ve), o.default(this._element).off(be), o.default.removeData(this._element, me), this._element = null, this._config = null;
			}, e._getConfig = function(t) {
				return t = r({}, Ee, o.default(this._element).data(), "object" == typeof t && t ? t : {}), d.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
			}, e._setListeners = function() {
				var t = this;
				o.default(this._element).on(be, "[data-dismiss=\"toast\"]", (function() {
					return t.hide();
				}));
			}, e._close = function() {
				var t = this, e = function() {
					t._element.classList.add(_e), o.default(t._element).trigger("hidden.bs.toast");
				};
				if (this._element.classList.remove(ve), this._config.animation) {
					var n = d.getTransitionDurationFromElement(this._element);
					o.default(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(n);
				} else e();
			}, e._clearTimeout = function() {
				clearTimeout(this._timeout), this._timeout = null;
			}, t._jQueryInterface = function(e) {
				return this.each((function() {
					var n = o.default(this), i = n.data(me);
					if (i || (i = new t(this, "object" == typeof e && e), n.data(me, i)), "string" == typeof e) {
						if ("undefined" == typeof i[e]) throw new TypeError("No method named \"" + e + "\"");
						i[e](this);
					}
				}));
			}, l(t, null, [
				{
					key: "VERSION",
					get: function() {
						return "4.6.2";
					}
				},
				{
					key: "DefaultType",
					get: function() {
						return Te;
					}
				},
				{
					key: "Default",
					get: function() {
						return Ee;
					}
				}
			]), t;
		}();
		o.default.fn.toast = we._jQueryInterface, o.default.fn.toast.Constructor = we, o.default.fn.toast.noConflict = function() {
			return o.default.fn.toast = pe, we._jQueryInterface;
		}, t.Alert = g, t.Button = E, t.Carousel = P, t.Collapse = V, t.Dropdown = lt, t.Modal = Ct, t.Popover = Jt, t.Scrollspy = se, t.Tab = ge, t.Toast = we, t.Tooltip = Wt, t.Util = d, Object.defineProperty(t, "__esModule", { value: !0 });
	}));
}));
//#endregion
export default require_bootstrap_min();

//# sourceMappingURL=bootstrap_dist_js_bootstrap__min.js.map