<<<<<<< HEAD
# React-router项目实践

1. 分组
一共七个link

（１）引导页　４
（２）登录　2
（３）首页展示　20
（４）推荐　　7
（５）发布  1
（６）个人  6

一　切图
 赵策：　(1) (6)
 张静利：(3)
 张斯曼：(3)
 江蓉：(4)
 
二　分配任务
=======
# React-router路由实践
### 项目

### 1. Router,hashHistory,Route

```js
import { Router, Route, hashHistory } from 'react-router'nent={Repos}/>
  <Route path="/about" component={About}/>
</Router>
```
### 2、嵌套路由

Route组件还可以嵌套。

```js
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Route>
</Router>
```
用户访问/repos时，会先加载App组件，然后在它的内部再加载Repos组件。

```js
<App>
  <Repos/>
</App>
```

App组件要写成下面的样子。

```js
export default React.createClass({
  render() {
    return <div>
      {this.props.children}
    </div>
  }
})
```

#### 子路由也可以不写在Router组件里面，单独传入Router组件的routes属性。

```js
let routes = <Route path="/" component={App}>
  <Route path="/repos" component={Repos}/>
  <Route path="/about" component={About}/>
</Route>;

<Router routes={routes} history={browserHistory}/>
```
### 3、IndexRedirect 组件
IndexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件。
```js
<Route path="/" component={App}>
  ＜IndexRedirect to="/welcome" />
  <Route path="welcome" component={Welcome} />
  <Route path="about" component={About} />
</Route>
```

上面代码中，用户访问根路径时，将自动重定向到子组件welcome。

### 4、Link

Link组件用于取代<a>元素，生成一个链接，允许用户点击后跳转到另一个路由。它基本上就是<a>元素的React 版本，可以接收Router的状态。

```js
render() {
  return <div>
    <ul role="nav">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/repos">Repos</Link></li>
    </ul>
  </div>
}
```
#### active

如果希望当前的路由与其他路由有不同样式，这时可以使用Link组件的activeStyle属性。

```js
<Link to="/about" activeStyle={{color: '#663399'}}>About</Link>
<Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>
```
另一种做法是，使用activeClassName指定当前路由的Class。

```js

<Link to="/about" activeClassName="active">About</Link>
<Link to="/repos" activeClassName="active">Repos</Link>
```
#### IndexLink组件会使用路径的精确匹配。

```js
<IndexLink to="/" activeClassName="active">
  Home
</IndexLink>
```
#### 另一种方法是使用Link组件的onlyActiveOnIndex属性，也能达到同样效果。

```js
<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
  Home
</Link>
```

实际上，IndexLink就是对Link组件的onlyActiveOnIndex属性的包装

### 5、表单处理

Link组件用于正常的用户点击跳转，但是有时还需要表单跳转、点击按钮跳转等操作。这些情况怎么跟React Router对接呢？

下面是一个表单。
```js
<form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="userName"/>
  <input type="text" placeholder="repo"/>
  <button type="submit">Go</button>
</form>
```

#### 第一种方法是使用browserHistory.push
```js
import { browserHistory } from 'react-router'

// ...
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    browserHistory.push(path)
  },
```

#### 第二种方法是使用context对象。

```js
export default React.createClass({

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    // ...
    this.context.router.push(path)
  },
})
```
>>>>>>> 579d1de302bbd846931750dd1b8fd58ad02ec62a
