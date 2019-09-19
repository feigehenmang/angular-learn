import { Utils, DomUtils, insertMode } from './utils.interface';

const inBrowser = typeof window !== 'undefined';
const ua = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = ua && /msie|trident/.test(ua);
const isIE9 = ua && ua.indexOf('msie 9.0') > 0;
const isEdge = ua && ua.indexOf('edge/') > 0;
const isChrome = ua && /chrome\/\d+/.test(ua) && !isEdge;
export const domUtils: DomUtils = {
    domCache: {},
    getSelectorType: (selector) => {
        const c = selector.charCodeAt(0);
        return c === 46 ? 1 : c === 35 ? 2 : 0;
    },
    query: (selector) => {
        if (domUtils.domCache[selector]) {
            return domUtils[selector];
        } else {
            const target = document.querySelector(selector);
            if (target) {
                domUtils[selector] = target;
                return target;
            }
            const type = domUtils.getSelectorType(selector);
            let el = null;
            if (type) {
                el = document.createElement(selector);
            } else {
                el = document.createElement('div');
                type === 1 ? el.className = selector.substring(1) : el.id = selector.substring(1);
            }
            return el;
        }
    },
    push: (target, node) => target.insertAdjacentElement(insertMode.push, node),
    unshift: (target, node) => target.insertAdjacentElement(insertMode.unshift, node),
    append: (target, node) => target.insertAdjacentElement(insertMode.append, node),
    insert: (target, node) => target.insertAdjacentElement(insertMode.insert, node)
};
export const utils: Utils = {
    inBrowser,
    hasProto: '__proto__' in {},
    ua,
    isIE,
    isIE9,
    isEdge,
    isChrome,
    isReserved: (str) => {
        const c = (str + '').charCodeAt(0); // charCodeAt(index) 获取到字符串第index位的unicode编码  可以用来区别汉字和其他内容  汉字unicode小于等于256
        return c === 0x24 || c === 0x5f;
    },
    getBytes: (str) => str.split('').reduce((prev, next) => (!(Number((next + '').charAt(0)) <= 256) ? prev + 2 : prev + 1), 0),
    getRandom: (n, m) => parseInt(Math.random() * (m - n) + n + '', 10),
    getRandomColor: (opacity) => {
        opacity = opacity <= 1 ? opacity : (opacity / 100);
        return `rgba(${utils.getRandom(0, 256)},${utils.getRandom(0, 256)},${utils.getRandom(0, 256)},${opacity})`;
    },
    validateNull: (val) => {
        if (typeof val === 'boolean') {
            return false;
        }
        if (val instanceof Array) {
            if (val.length === 0) {
                return true;
            }
        } else if (val instanceof Object) {
            if (JSON.stringify(val) === '{}') {
                return true;
            }
        } else {
            if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') {
                return true;
            }
        }
        return false;
    },
    uniqeCustom: (arr, cb) => {
        return arr.reduce(cb, new Array());
    },
    deepClone: (obj) => {
        const result = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    result[key] = utils.deepClone(obj[key]);
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    },
    validateRes(res): boolean {
        if (res.successful && utils.validateNull(res.resultValue)) {
            return true;
        }
        return false;
    },
    formatDate:  (oldDate, fmt) => {
        let date = new Date();
        if (typeof oldDate === 'string' || typeof oldDate === 'number') {
            date = new Date(+oldDate);
        } else {
            date = oldDate;
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        const o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };

        for (const k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                const str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : utils.padLeftZero(str));
            }
        }
        return fmt;
    },
    padLeftZero: (str) => {
      return ('00' + str).substr(str.length);
    }
};
// console.log(utils);
