// import { InjectionToken } from '@angular/core';
export class MyConfig {
    NAME: string;
    VERSION: string;
};
export const MYCONFIG: MyConfig = {
    NAME: 'ECP2.0',
    VERSION: '0.1'
};

// export const MYCONFIG_TOKEN = new InjectionToken<MyConfig>('my-config.ts');