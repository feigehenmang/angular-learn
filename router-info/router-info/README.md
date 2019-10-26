#### Router 详解
1. Router 是 支撑前端单页面SPA的重要Api, 主要分两种风格: history 和 hash
2. Angular中的路由核心: `import { RouterModule, Routes} from "@angular/router"`
3. Angular的 Router 是以服务的形式存在的, 需要我们配置一个 Routes 对象, 传入RouterModule才会生效. (tips: 如何自定义module, 并且传递参数);
4. 在constructor参数声明时发生了什么
    1. 首先constructor中的声明是将对象实例化交给了Angular去执行, 在这儿的声明的都是服务, 这是依赖注入比较重要的一趴
5. reslove, 在路由中配置的data只可以传一些静态参数, 如果想要动态, 就用到了 reslove, 具体使用请看 /src/app/common/id-reslove.service 以及 /src/app/first-load/first-load-routing
    - 路由器的这个 Resolve 接口是可选的。IdResloveService 没有继承自某个基类。路由器只要找到了这个方法，就会调用它
    - 要依赖路由器调用此守卫。不必关心用户用哪种方式导航离开，这是路由器的工作。你只要写出这个类，等路由器从那里取出它就可以了。
6. 常见路由配置;
```ts
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
```
    - 第四个路由中的空路径（''）表示应用的默认路径，当 URL 为空时就会访问那里，因此它通常会作为起点。 这个默认路由会重定向到 URL /heroes，并显示 HeroesListComponent。
    - 最后一个路由中的 ** 路径是一个通配符。当所请求的 URL 不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由。 这个特性可用于显示“404 - Not Found”页，或自动重定向到其它路由。
    - 路由的定义顺序, 路由使用匹配者优先的策略来匹配路由, 所以, 具体路由放在通用路由的前面, 在上面的配置中，带静态路径的路由被放在了前面，后面是空路径路由，因此它会作为默认路由。而通配符路由被放在最后面，这是因为它能匹配上每一个 URL，因此应该只有在前面找不到其它能匹配的路由时才匹配它。
    - 路由出口 router-outlet
    - 路由链接 router-link属性
    - routerLinkActive, 路由器的激活状态, 会从父路由一直影响到子路由, 设置: routerLinkActiveOptions, 会精确匹配
    - 路由器状态: 当导航完成时, 路由器会构建出一个ActiveRoute组成的树, 他表示路由器当前的状态, 你可以在应用中的任何地方通过Router服务和routerState属性来访问当前的RouterState值,RouterState 中的每个 ActivatedRoute 都提供了从任意激活路由开始向上或向下遍历路由树的一种方式，以获得关于父、子、兄弟路由的信息。
    - 激活的路由(ActivatedRoute)

属性 | 说明
--- | ---
url | 路由路径的 Observable 对象，是一个由路由路径中的各个部分组成的字符串数组。
data | 一个Observable对象, 其中包括路由配置项中的data, 也包括resolve解析出来的值
paramMap | 一个Observable对象, 一个 Observable，其中包含一个由当前路由的必要参数和可选参数组成的map对象。用这个 map 可以获取来自同名参数的单一值或多重值。 相当于params
queryParamMap | 一个Observable对象, 其中包含一个对所有路由都有效的查询参数组成的map对象。 用这个 map 可以获取来自查询参数的单一值或多重值。
fragment | 一个适用于所有路由的 URL 的 fragment（片段）的 Observable。
outlet | 要把该路由渲染到的 RouterOutlet 的名字。对于无名路由，它的路由名是 primary，而不是空串。
routeConfig | 用于该路由的路由配置信息，其中包含原始路径。
parent | 当该路由是一个子路由时，表示该路由的父级 ActivatedRoute。
firstChild | 包含该路由的子路由列表中的第一个 ActivatedRoute。
children | 包含当前路由下所有已激活的子路由。
params | 即将废弃
queryParams | 即将废弃
---
    - params 和 paramMap的区别
        1. 都是做了一件事, 都是一个Observable对象
        2. paramMap基于Map封装, 功能更强力, 可以使用 for of循环等Map操作方法