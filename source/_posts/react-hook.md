---
title: react-hook 学习
date: 2019-08-26 14:39:10
tags: frontend
---

## hook 基础知识

hooks 本质是一些特殊的函数，为你的函数组件注入特殊功能。它们的目的是不在使用class，而统一是哟 function 组件。  
一个常识是，在大中型项目中，react组件难以往往是难以直接复用的，其原因之一就是class组件具有状态(state)。

react 官方之前推荐两种方式来做组件复用: [高阶组件（Higher-Order Components）][HOC] && [渲染属性（Render Props）][RenderProps]  
同时react 的class 中存在一些生命周期钩子函数，这些钩子函数的存在也不利于组件的复用。  
react 的class中还有一个this问题。例如: 存在多个具有共同部分的表格组件，但是它们之间也存在一些不同的地方需要在实例化的时候制定。  
将其共同部分抽出为一个基础表格组件，特殊部分使用HOC的形式分别重写。但是因为基础表格组件自身也是通过引用三方的表格组件加上业务定制产生的。  
所以这时，你会发现存在这样的一个调用连: 三方表格组件 -> 基础表格组件 -> 特殊实例化组件。这里的this绑定就会变得混乱不堪。  

有状态组件通常会把一些带有副作用的操作放到的生命周期中， 比如发起 ajax 来请求数据
useEffect 类似于 componentDidMount 和 componentDidUpdate  
直观的来看，react-hook 似乎是将 class 中原有的一些生命周期和功能抽出来，方便函数组件以乐高积木的形式来集成这些功能。  

相关代码测试在 [react-hook][hook-test]

## todo liss
1. 列出 hooks 新添的函数列表和简要说明、官方文档地址。

## hook 注意事项
1. react 规定 hook 需要写在函数的最外层，不能写在 if/else 分支内部。[此点存疑，测试的时候没有发现这个问题]  

## hook 的内部实现机制

-- 暂时不知道

参考文章:
1. [30分钟精通React今年最劲爆的新特性——React Hooks](https://segmentfault.com/a/1190000016950339)
2. [使用 State(状态) Hook](http://react.html.cn/docs/hooks-state.html)
3. [一篇看懂 React Hooks](https://zhuanlan.zhihu.com/p/50597236)


[hook-test]: https://github.com/weisiwu/webpack-pack-test/tree/react-hook
[HOC]: https://reactjs.org/docs/higher-order-components.html
[RenderProps]: https://reactjs.org/docs/render-props.html