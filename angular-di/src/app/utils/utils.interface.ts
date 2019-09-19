export type anyArr = Array<any>;
// 自定义返回对象接口
export interface CustomResponse {
    successful: boolean;
    resultValue: object;
}
export interface Utils {
    // 判断当前宿主环境是否是浏览器;
    inBrowser: boolean;
    // 检测当前环境是否可以使用对象的 __proto__ 属性
    hasProto: boolean;
    // 获取ua
    ua: string;
    // 是否是ie浏览器 http://useragentstring.com/pages/useragentstring.php?name=Internet+Explorer
    isIE: boolean;
    // 是否是ie9
    isIE9: boolean;
    // 是否是 edge
    isEdge: boolean;
    // 是否是chrome
    isChrome: boolean;
    // 检测字符串是否以下划线_或者$开头
    isReserved: (str: string) => boolean;
    // 获取指定字符串字节数
    getBytes: (str: string) => number;
    // 获取指定范围随机数
    getRandom: (n: number, m: number) => number;
    // 获取随机颜色 rgba形式
    getRandomColor: (opacity: number) => string;
    /**
     * validateNull 校验参数是否为空
     * @param param 要校验的东西
     * @return 为空返回true, 否则返回false
     */
    validateNull: (param: any) => boolean;
    /**
     * uniqeCustom 自定义去重
     * @param arr 要去重的数组
     * @param cb 回调函数, 根据判断控制去重结果
     * @return 数组
     */
    uniqeCustom: (arr: anyArr, cb: (prev: anyArr, next: any, currIndex: number) => anyArr) => anyArr;
    /**
     * deepClone 深拷贝
     * @param target 要拷贝的东西
     * @return 返回新对象
     */
    deepClone: (target: Array<any> | object | {}) => Array<any> | object | {};
    /**
     * validateRes 校验返回值 各个项目需具体配置
     * @param res 自己项目定义的返回值类型
     * @return 是否符合规范
     */
    validateRes: (res: CustomResponse) => boolean;
    formatDate: (oldDate: Date, fmt: string) => string;
    padLeftZero: (str: string) => string;
}

type DomEdit = (target, node) => void;
export interface DomUtils {
    // 整个 domUtils获取过的dom对象
    domCache: object;
    // 获取dom对象, selector用法和querySelector一样
    query: (selector: string) => object;
    // 判断字符串 是否以 . 或者 # 开头, 1 为 ., 2 为 #, 0 为其他
    getSelectorType: (selector: string) => number;
    push: DomEdit;
    unshift: DomEdit;
    append: DomEdit;
    insert: DomEdit;
}

export enum insertMode {
    push = 'beforeend',
    unshift = 'afterbegin',
    append = 'afterend',
    insert = 'beforebegin'
}


