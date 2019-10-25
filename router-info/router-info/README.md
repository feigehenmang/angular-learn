#### Router 详解
1. Router 是 支撑前端单页面SPA的重要Api, 主要分两种风格: history 和 hash
2. Angular中的路由核心: `import { RouterModule, Routes} from "@angular/router"`
3. Angular的 Router 是以服务的形式存在的, 需要我们配置一个 Routes 对象, 传入RouterModule才会生效. (tips: 如何自定义module, 并且传递参数);
