# angular-learn
angular-learn
---
##### [依赖注入](https://www.angular.cn/guide/dependency-injection) 
简称 DI,全称为 Dependency Injection, 依赖注入是指 当A对象中需要使用B对象的方法时, A会从外部源中获取依赖B, 而不是自己创建对象B, **依赖注入**是如何让应用变得灵活, 高效, 健壮, 以及可测试, 可维护
1. 创建一个最简单的可以注入的服务类 
```js
ng generate service heros
```
2. @Injectable 会将创建的类标记为可以注入的服务
```
@Injectable({
  providedIn: 'root'
})
//provideIn 是 从service位置将类注入到哪个供应商
```
3. 注入器树与服务实例
---
##### 具体实践
1. 全局单例模式: 在根模块注入服务, 或者创建服务时 provideIn 为 root
**注意** 在同步模块中注册的服务, 在他之后加入的模块可以使用同步模块中的已经注册的服务,并且是一个实例, 这就解释了 在module中引入HttpModule之后, 可以正常使用Http的原因
2. 多实例模式: 在@Component中注入服务, 这样的话服务就会跟随这个组件的**生命周期**保持一致,一起销毁,一起创建
3. 异步模块上的注射器, 异步模块中的 providers 只对自己模块可见, 这是因为 angular 会给异步模块单独创建注射器树
4. 注射器规则如下
    1. 如果组件内部配置了 providers，优先使用组件上的配置来创建注入对象；
    2. 否则向父层组件继续查找，父组件上找不到继续向所属的模块查找；
    3. 一直到查询到根模块 AppModule 里面的 providers 配置；
    4. 如果没有找到指定的服务，抛异常；
    5. 同步模块里面配置的 providers 是全局可见的，即使是很深的子模块里面配置的 providers，依然是全局可见的；
    6. 异步模块里面配置的 providers 只对本模块中的成员可见，这里的本质是，Angular 会给异步加载的模块创建独立的注射器树；
    7. 组件里面配置的 providers 对组件自身和所有子层组件可见；
    8. 注射器的生命周期与组件自身保持一致，当组件被销毁的时候，对应的注射器实例也会被销毁。
---
##### @Injectable 的作用
打包时会存储一些元信息, 在运行时会根据元信息解析服务, 如果不声明@Injectable的话, 会找不到这个服务, angular-cli 在生成文件的时候会默认加上@Injectable
##### 可以在类中手动用@Inject
source-code: angular_di/src/app/heros/inject.service.ts
**注意**
使用@Inject打包生成的代码会比@Injectable大很多，并不推荐使用
- 如何在简单对象中使用@Inject
source-code: angular_di/src/app/heros/my-config.ts
- 不想与父组件共用一个实例，怎样再生成一个实例
source-code: angular_di/src/app/heros/self.service.ts
```js
// parent-component
constructor(
    public idService: SelfService
  ){
    console.log("id service: ", idService, idService.id);
  }
// child-component
@Component({
  // code...
  providers: [SelfService]
})
export class HerosComponent implements OnInit {

  constructor(
    @Self() public id: SelfService //自己的service
  ) { }
```
##### Optional 会沿着组件树向上找，如果没有找到则返回null，如果组件树上有这个类就返回
##### @Self() @Optional() public optinal: OptinalService 含义
会在当前组件寻找服务，找不到就返回null
##### @SkipSelf() 跳过自身沿着Inject Tree往上找， @SkipSelf 和 @Optional 一起使用
##### @Host 
- 在组件内部查找依赖
- 建立投影组件的关联组件的关联
##### 手动注册
```
userService: UserService;
  constructor(
    public inject: Injector
  ) { }

  ngOnInit() {
    this.userService = this.inject.get(UserService);
    console.log(this.inject);
    console.log(this.userService);
  }

```
---
#### 多级注入器
**注入器**是指Injectable和Inject, 注入器传入元数据,决定他们是哪级供应商等一些基本信息, 配置提供商是指给注入器所在服务指定适用范围,在此范围内注入器可使用, 配置提供商的不同方法会导致 **编译包的大小差异**, **服务的范围**, **服务的生命周期**等
1. 当你在服务自身的@Injectable中指定服务商时,一般上适用于应用的根一级, 在打包时会进行摇树优化
2. NgModule级的提供商可以在自己的providers中指定服务, 还可以在服务内的provideIn中指定模块(不能指定AppModule)
  - 懒加载模块, 使用providers指定服务, 加载这个模块时, 就会用这儿的配置服务, 如果服务本身的 provideIn指向了 自己的懒加载模块, 如果该提供商没有被使用过, 那在打包编译的时候就会被摇树优化掉
  - 服务实例的生存周期取决于 **所依赖模块的生命周期**
3. 组件级提供商, 服务随着组件的生命周期
```js
import { Injectable } from '@angular/core';
import { HeroModule } from './hero.module';
import { HEROES } from './mock-heroes';

@Injectable({
  // we declare that this service should be created
  // by any injector that includes HeroModule.
  providedIn: HeroModule,// 'root'
})
export class HeroService {
  getHeroes() { return HEROES; }
}
// 通过provideIn注册 或者 通过NgModule来注册服务 这两种方式没有什么区别, 主要区别是 通过provideIn注册时可能会被摇树优化掉的, 在一些第三方库中, 当不确认用户是否使用时 使用provideIn注册即可
```
---
##### 组件注入器的应用
1. 组件 a, b, c都是用了 d 服务上的数据, e组件需要修改d服务上的数据, 这个时候就需要**服务隔离**, e组件自己注册d服务并使用
2. 编辑框的状态保存, 每个实例化组件都有私有服务,私有服务负责存储状态
