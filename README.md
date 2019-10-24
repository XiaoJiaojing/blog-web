## 个人博客前端

### 项目制作流程

#### 一、框架的搭建

1. 项目是使用webpack 4.x 构建的
2. 首先创建一个 blog-web 的文件夹 ，然后 `npm init -y`初始化
3. 在根目录下创建 `dist`， `src` ， 两个目录
4. 在`src`下创建 `index.html` 和`index.js`两个文件，index.js是入口文件
5. webpack 4.x的配置

#### 二、页面内容的制作

##### 首页的制作

- 首页左侧导航栏制作

1. 在 `src`目录下建一个 App.vue 组件   是首页的内容，整个页面使用 bootstrap 做响应式布局
2. 首先左边导航栏区域，设置为固定定位 ，并且使用了font-awesome字体图标
3. 将左侧导航栏中的标签改造成 `router-link`，根据路由切换不同页面
4. 右边是内容区域，需要放置一个 `router-view`来展示路由匹配到的组件

- 右侧首页内容区域制作

1. 首先在 `src`下建`cmoponents`文件夹，在`cmoponents`文件夹下建 `Homepage.vue`组件，作为首页右边区域的内容
2. 获取数据使用 `vue-resource`， 使用`vue-resource`中的 `this.$http.get`获取数据，具体是：在`methods`中定义一个`getDocument`方法，里面通过`this.$http.get`，并传入`page=1`参数获取数据
3. 将获取到的数据绑定到 `data `的 `msg `身上
4. 使用 v-for 循环渲染每个`item`项

- 右侧首页 下一页功能的制作

1. 为 `Homepage.vue`组件中的  `下一页标签` 绑定一个点击事件
2. 点击的时候，先让 `page`的值加1，然后再重新调用一次`getDocument`

- 右侧首页中 阅读更多功能 的制作

1. 改造`Homepage.vue` 中的  `阅读更多` 标签为 `router-link`  ，并提供唯一的`id`标识
2. 创建`Detailpage.vue`组件，并将 `Homepage.vue`组件中传过来的 `id`绑定到`Detailpage.vue`组件的 `data`的 `id`上
3. 根据 `id`获取对应的数据，并渲染到页面
4. 渲染页面的时候，由于请求到的内容是 `markdown`的字符串，因此需要使用 `marked.js`来将其解析成 `html`结构，并使用`hightligh.js`对代码做高亮效果

##### 标签页的制作

1. 首先创建 `Tag.vue`组件
2. 然后通过 `this.$http.get`获取数据，并绑定到 `data`身上
3. 使用v-for 循环渲染每个 `item`项

- 点击标签标签，加载标签下的全部内容，实现分类 功能的实现

1. 将`Tag.vue`渲染出来的每个标签项改造成 ` router-link`，并将 `标签内容` 作为参数
2. 然后创建 `Classify.vue`组件，接收`Tag.vue`组件的参数，并绑定到`data`的 `tag`上
3. 在`Classify.vue`组件的 `methods` 中定义` getClassify`方法，内部使用`this.$http.get`，并传入 `tag`作为请求参数
4. 获取到数据后绑定到`data`  的 `classifyPage`上
5. 使用v-for 循环渲染每个 item 项

##### 关于页的制作

1. 对博客的简单总结的 页面 ，不涉及数据交互

##### 个人页面的制作

1.个人情况介绍，不涉及数据交互

