import { InjectionToken } from '@angular/core';

export const MYCONFIG = {
    NAME: "ECP2.0",
    VERSION: "0.1"
};
export interface MyConfig {
    NAME: string;
    VERSION: string;
};
export const MYCONFIG_TOKEN = new InjectionToken<MyConfig>("my-config.ts");