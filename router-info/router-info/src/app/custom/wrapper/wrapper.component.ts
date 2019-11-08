import {
    Component,
    OnInit,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    Injector,
    ApplicationRef,
    ViewChild,
    TemplateRef
  } from '@angular/core';
import { ActiveComponent } from '../active/active.component';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import { createCustomElement } from '@angular/elements';
import { anchorDef } from '@angular/core/src/view';
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @ViewChild('temp') temp: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  dataSource = [
    {
      name: 'sad',
      age: 10,
      id: 1
    },
    {
      name: '123',
      age: 10,
      id: 2
    },
    {
      name: 's2131ad',
      age: 10,
      id: 3
    }
  ];
  title = 'Wrapper';
  constructor(
    private viewContainerRef: ViewContainerRef, // 获取到当前组件的容器视图访问权
    private componentFactoryResolver: ComponentFactoryResolver, // 获取组件生成工厂函数
    private inject: Injector,
    private applicationRef: ApplicationRef
  ) { }

  ngOnInit() {
    // console.log(this.vc);
    // anchorDef
    const result = this.vc.createEmbeddedView<any>(this.temp, { item: {after: '后缀', prefix: '前缀'}});
    console.log(result);
    // console.log(this.viewContainerRef);
    // console.log(this.componentFactoryResolver);
    // console.log(customElements);
    // console.log(this.inject);
    const Active = createCustomElement(ActiveComponent, {injector: this.inject});
    // console.log(Active);
    customElements.define('app-diy', Active);
    // this.loadComponent();
    // this.create();
  }

  create() {
    const popup = document.createElement('app-diy');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(ActiveComponent);
    const popupComponentRef = factory.create(this.inject, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.clickEv.subscribe((res) => {
      console.log(res);
    });

    // Set the message
    popupComponentRef.instance.name = '123';

    // Add to the DOM
    document.body.appendChild(popup);
  }

  loadComponent() {
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
