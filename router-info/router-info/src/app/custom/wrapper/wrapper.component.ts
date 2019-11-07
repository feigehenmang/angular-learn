import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ActiveComponent } from '../active/active.component';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef, // 获取到当前组件的容器视图访问权
    private componentFactoryResolver: ComponentFactoryResolver, // 获取组件生成工厂函数
  ) { }

  ngOnInit() {
    console.log(this.viewContainerRef);
    console.log(this.componentFactoryResolver);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ActiveComponent);
    const activeComponent: ComponentRef<ActiveComponent> = this.viewContainerRef.createComponent(componentFactory);
    activeComponent.instance.name = 'sad';
    activeComponent.instance.clickEv.subscribe(
      res => {
        console.log(res);
        // activeComponent.destroy();
      }
    );
  }

}
