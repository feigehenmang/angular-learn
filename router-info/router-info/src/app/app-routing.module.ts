import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from './common/preload';

const routes: Routes = [
  {
    path: 'first-load',
    loadChildren: './first-load/first-load.module#FirstLoadModule',
    data: {
      title: '懒加载模块',
      preload: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
  routes,
    {
      enableTracing: false, // 记录路由器内部事件, 控制台 RouterEvent
      useHash: true, // 是否使用hash
      initialNavigation: true, // 为 false时, 首次进入无论是什么地址, 都不会加载, 重新出发才会加载
      errorHandler: (err) => { // 路由发生错误的捕捉函数
        console.log(err.message);
      },
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'ignore', // 当要去的页面和当前页面地址相同时要如何处理, 是 'reload' 还是 'ignore';
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
