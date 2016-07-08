React如何设置样式呢？本案例实践了几种设置样式的方式。

# 通过js设置样式 #

carousel-styles.js

	import config from './config-style'
	    
	export default {
	    root: {
	        position: 'relative',
	        overflow: 'hidden',
	        height: config.imageHeight
	    }
	}

<br>

carousel.js

	import styles from './carousel-styles'
	function Carousel(props) {
	  return (
	    <div style={styles.root}>
	      {renderSlides(props)}
	      {props.nav}
	    </div>
	  )
	}

# 通过css设置样式 #

需要让webpack编译css。首先安装如下packages:

> npm install style-loader --save-dev
> npm install css-loader cssnext-loader --save-dev

webpack.config.js或webpack.config.dev.js配置大致是：

	  module: {
	    loaders: [{
	      test: /\.js$/,
	      loaders: ['babel'],
	      include: path.join(__dirname, 'src')
	    }, {
	      test: /\.jpg/, 
	      loader: 'file'
	    },{
	        test: /\.css/,
	        loaders: ['style', 'css', 'cssnext']
	    }]
	  }
以上，在`loaders: ['style', 'css', 'cssnext']`中，cssnext代表的是cssnext-loader，首先运行，css代表的是css-loader接着运行，style代表style-loader最后运行，把css输出到页面上。

接着，在application级别的组件中引用样式：

	import css from './styles/index.css'

index.css中包含了所有样式：

	@import "./../config.css";
	@import "./base.css";
	@import "./frame.css";
	@import "./carousel.css";

以carousel.css举例来说：

	.dft_carousel{
	    position: relative;
	    overflow: hidden;
	    height: var(--imageHeight);
	}

最后carousel.js中使用其对应的carousel.css样式：


	function Carousel(props) {
	  return (
	    <div className="dft_carousel">
	      {renderSlides(props)}
	      {props.nav}
	    </div>
	  )
	}
	
	export default Carousel

# 通过css module设置样式 #

放在最后，却是最重要的，也是推荐的做法。

> npm install style-loader --save-dev
> npm install css-loader cssnext-loader --save-dev
> npm install react-styleable --save-dev

webpack.config.js或webpack.config.dev.js配置大致是：


	  module: {
	    loaders: [{
	      test: /\.js$/,
	      loaders: ['babel'],
	      include: path.join(__dirname, 'src')
	    }, {
	      test: /\.jpg/, 
	      loader: 'file'
	    },{
	        test: /\.css/,
	        loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']
	    }]
	  }
- local: selector name
- `hash:base64:5` generated hash, sbustring 5 chars

carousel.css

	@import "./config.css";
	
	.root {
	    position: absolute;
	    overflow: hidden;
	    height: var(--imageHeight);
	    width: var(--imageWidth);
	}

carousel.js

	import css from './carousel.css'
	import styleable from 'react-styleable'
	
	function Carousel(props) {
	  return (
	    <div className={props.css.root}>
	      {renderSlides(props)}
	      {props.nav}
	    </div>
	  )
	}
	
	export default styleable(css)(Carousel)

- `carousel.css`是一个css module，可以导入导出
- 使用`react-styleable`就像给Carousel组件外面包裹上了一层，为其增加了一个props.css属性