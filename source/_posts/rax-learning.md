---
title: rax 学习
date: 2019-08-20 15:53:59
tags: frontend
---

rax 是一种 [DSL(domain special language)](https://www.cnblogs.com/feng9exe/p/10901595.html)  
rax 对自己的定义是 跨容器渲染引擎，所以其实现的能力也会存在容器差异。

rax 里面设置了一些自定义的事件  
1. onAppear
2. onPress  

rax 支持 facebook 的 [css-layout](https://github.com/facebook/css-layout#supported-attributes)

rax 里面的单位似乎是相对单位，1单位相当于屏幕宽度的 750 分之一

rax 因为是一个跨平台的框架，所以不是所有的css特性都支持。比如 rax 对于伪类的支持就比较有限。

rax 是跨平台的，所以在一些不同的场景下，会存在不一致的问题。比如在 weex 下对于样式的支持(似乎是不再支持使用变量生成css，
而支持通过 className prop 去指定，猜测可能和其渲染机制相关)。

rax 内部自己实现了 fetch api

通过 rax-cli 指定容器创建出来的 app 是通过 app.json 来进行配置的。
在指定的组件中，需要引入 createElement(rax)才能正确的进行编译。

rax 使用了 react 中很多的概念，但是其毕竟不是 react，所以当希望在其中直接使用 react 的时候，会报错。

rax 转译成的html中，可以看到元素上面都是统一使用 flex 布局的。

rax 中实现了 w3c 中标准的 iconfont，可以通过配置来实现对于一个码点的样式。

rax 中也存在 setState 这么一个概念，但是这个函数一直都为同步的

rax 中组件可以分为:
    1. 基础组件
    2. 布局组件
    3. 表单组件
    4. 提示反馈组件
    5. 数据展示组件
    6. 业务组件
    7. 创新体验组件

rax css style 支持列表
    https://rax.js.org/rax/guide/style-support

rax 的 className 只在 web 端生效，其他容器下是无法工作的。如果需要在特殊的容器下增强表现能力，需要对容器平台进行判断。

感悟:
    这是一个框架，基于 react 修改出来的框架，学习和使用的难度应该都不是很高，问题在于，为什么要学习和使用这个东西。
    在学习和使用的过程中，我可以更加深入的想到一些什么？从中总结出来一些什么东西。
    1. 有哪些被被以组件的形式抽出来了？
    2. 他们是怎么被抽出来的？
    3. 抽出来时，为了让他们具有跨容器一致性，他们被赋予了那些基础属性和方法？