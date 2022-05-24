# 学习笔记

## CSS

### 浮动和清除浮动

```css
.wrap {
  border: 1px solid #000;
}
.wrap::after {
  content: "";
  height:0;
  display: block;
  clear: both;
}
.left {
  width: 100px;
  height: 100px;
  float: left;
  background: red;
}
.right {
  width: 100px;
  height: 100px;
  float: left;
  background: yellow;
}
```

* [块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

> 块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
