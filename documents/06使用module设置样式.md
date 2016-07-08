> webpack.config.dev.js

<br>

	loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']

- local: selector name
- hash:base64:5 generated hash, sbustring 5 chars
- 

<br>

> npm install react-styleable --save-dev

<br>

> ctrl + c
> npm start

<br>

**css module的工作原理大致是：**

1、编写css

	.link {
		text-decoration:none;
	}
	.btn {
		border: none;
		background: orange;
	}

2、编译

	.link---5x98a {
		text-decoration: none;
	}

	.btn---99a0f{
		border: none;
		ackground: orange;
	}

3、使用

	import css from './my-stylesheet.css'
	function MyCompoent(){
		return <button className={css.btn}>Push</button>
	}
实际上，在页面中的呈现是：

	<button class="btn---99a0f">Push</button>

**css样式相互引用**

default-link.css

	.link{
		color: orange;
	}

my-component.css

	.link {
		composes: link from './default-link.css';
		color: pink;
	}

> touch src/app.css

<br>

	* {
	    box-sizing: border-box;
	}
	
	html{
	    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	    font-size: 14px;
	    line-height: 1.4em;
	    background-color: #1D272F;
	}

<br> 

> src/config.css

<br>

	:root{
	    --imageWidth: 640px;
	    --imageHeight: 420px;
	}

<br>

> src/app.js

<br>

	import css from './app.css'

<br>

> touch src/frame.css

<br>

	@import "./config.css";
	
	.root{
	    max-width: 100%;
	    margin: 50px auto;
	    width: var(--imageWidth);
	}

<br>


	import css from './frame.css'
	import styleable from 'react-styleable'
	
	function Frame(props) {
	  return <div className={props.css.root}>{props.children}</div>
	}
	
	export default styleable(css)(Frame)

- `./frame.css`被看做是module,可以import过来
- styleable让Frame多了个一个props.css属性

<br>

> touch src/carousel.css

<br>

	@import "./config.css";
	
	.root {
	    position: absolute;
	    overflow: hidden;
	    height: var(--imageHeight);
	    width: var(--imageWidth);
	}

<br>

> src/carousel.js

<br>

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

<br>

> touch src/slide.css

<br>


	@import "./config.css";
	
	:root{
	    --footerHeight: 110px;
	}
	
	.root {
	    position: absolute;
	    top: 0;
	    transition: all .6s;
	}
	
	.footer{
	    position: absolute;
	    top: calc(var(--imageHeight) - var(--footerHeight));
	    left: 0;
	    width: 100%;
	    height: var(--footerHeight);
	    padding: 15px;
	    background: rgba(0, 0, 0, .3);
	    color:#fff;
	    text-shadow: 1px 1px 0 rgba(0, 0, 0, .6);
	}
	
	.title{
	    margin: 0 0 10px 0;
	}

<br>

> src/slide.js

<br>

	import styleable from 'react-styleable'
	import css from './slide.css'
	
	function Slide(props) {
	  return (
	    <article style={props.style} className={props.css.root}>
	      <img src={props.image} alt={props.title} />
	      <footer className={props.css.footer}>
	        <h2 className={props.css.title}>{props.title}</h2>
	        <div>{props.children}</div>
	      </footer>
	    </article>
	  )
	}
	
	export default styleable(css)(Slide)

<br>

略......





