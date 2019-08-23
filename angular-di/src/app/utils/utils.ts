type anyArr = Array<any>;
interface Utils {
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
}
// 自定义返回对象接口
interface CustomResponse {
    successful: boolean;
    resultValue: object;
}
export const utils: Utils = {
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
    validateRes(res: CustomResponse): boolean {
        if (res.successful && utils.validateNull(res.resultValue)){
            return true;
        }
        return false;
    }
};
