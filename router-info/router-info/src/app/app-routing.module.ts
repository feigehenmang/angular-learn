import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer, UrlTree } from '@angular/router';
import { PreloadAllModules } from './common/preload';
import { PageNotFundComponent } from './common/page-not-fund/page-not-fund.component';
import { AuthGuard } from './common/auth.guard';
const routes: Routes = [
  {
    path: 'first-load',
    loadChildren: './first-load/first-load.module#FirstLoadModule',
    data: {
      title: '懒加载模块',
      preload: true
    },
    canActivate: [AuthGuard]
    // outlet: 'popo'
  },
  {
    path: 'template',
    loadChildren: './template/template.module#TemplateModule',
    data: {
      title: '懒加载模块',
      preload: false
    },
  },
  {
    path: 'custom',
    loadChildren: './custom/custom.module#CustomModule',
    data: {
      title: '懒加载模块',
      preload: false
    },
  },
  {
    path: '**',
    component: PageNotFundComponent
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
      scrollPositionRestoration: 'top', // top 推荐配置
      /**
       * 'disabled' | 'enabled' | 'top'
       *  配置是否需要在导航回来的时候恢复滚动位置
       *  disable 什么都不做
       *  top, 每次都将滚动设置归0,
       *  enable 当向后导航时，滚动到以前的滚动位置。当向前导航时，如果提供了锚点，则自动滚动到那个锚点，否则把滚动位置设置为 [0, 0]。该选项将来会变成默认值。
       */
      anchorScrolling: 'enabled', // 配置当url中带有片段(#)时路由器是否滚动到那个元素, enabled为滚动到该元素, disabled为不处理
      scrollOffset: () => { // 没什么用
        return [0, 0];
      },
      paramsInheritanceStrategy: 'always', // 定义如何把父路由的参数, 数据和解析出的数据合并到子路由, 有效选项包括: emptyOnly always
      malformedUriErrorHandler: (err: URIError, urlSerializer: UrlSerializer, url: string) => {
        console.log(err, urlSerializer, url);
        return new UrlTree();
      },
      urlUpdateStrategy: 'eager', // 定义路由器合适更新浏览器的url, 是先更新url再导航(eager) 还是导航完毕之后更新(deferred)
      relativeLinkResolution: 'corrected' // 启用 BUG 补丁，纠正空路径组件的相对链接解析问题。
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
