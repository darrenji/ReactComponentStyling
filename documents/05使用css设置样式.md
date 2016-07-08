> touch config.css

<br>

	:root{
	    --imageWidth: 640px;
	    --imageHeight: 420px;
	}

<br>

> touch src/styles/base.css

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

> touch src/styles/index.css

<br>
	
	@import "./../config.css";
	@import "./base.css";

<br>

> src/app.js

<br>

	import css from './styles/index.css'
	render() {
	  const imageWidth = 640
	return (
	  
	  <Frame>
	    <Carousel showIndex={this.state.showIndex} nav={this.renderNav()} width={imageWidth}>

<br>

> touch src/styles/frame.css

<br>

	.dft_frame{
	    max-width: 100%;
	    margin: 50px auto;
	    width: var(--imageWidth);
	}

<br>

> src/styles/index.css

<br>

	@import "./../config.css";
	@import "./base.css";
	@import "./frame.css";

<br>

> src/frame.js

<br>

	import React from 'react'
	import styles from './frame-styles'
	    
	import Radium from 'radium'
	
	function Frame({ children }) {
	  return <div className="dft_frame">{children}</div>
	}
	
	export default Frame

<br>

> touch src/styles/carousel.css

<br>

	.dft_carousel{
	    position: relative;
	    overflow: hidden;
	    height: var(--imageHeight);
	}

<br>

> src/styles/index.css

<br>

	@import "./../config.css";
	@import "./base.css";
	@import "./frame.css";
	@import "./carousel.css";

<br>

> src/carousel.js

<br>

	function Carousel(props) {
	  return (
	    <div className="dft_carousel">
	      {renderSlides(props)}
	      {props.nav}
	    </div>
	  )
	}
	
	export default Carousel

<br>

> touch src/styles/slide.css

<br>

	.dft_slide_footer{
	    position: absolute;
	    top: cal(var(--imageHeight) - var(--footerHeight));
	    left:0;
	    width: 100%;
	    height: var(--footerHeight);
	    padding: 15px;
	    background: rgba(0, 0, 0, .3);
	    color: #fff;
	    text-shadow: 1px 1px 0 rgba(0, 0, 0, .6)
	}
	
	.dft_slide{
	    position: absolute;
	    top: 0;
	    transition: all .6s;
	}
	
	.dft_slide_footer_title{
	    margin: 0 0 10px 0;
	}
	
	:root{
	    --footerHeight: 110px;
	}

<br>

> src/styles/index.css

<br>


	@import "./../config.css";
	@import "./base.css";
	@import "./frame.css";
	@import "./carousel.css";
	@import "./slide.css";

<br>

> src/slide.js

<br>

	
	function Slide(props) {
	  return (
	    <article style={props.style} className="dft_slide">
	      <img src={props.image} alt={props.title} />
	      <footer className="dft_slide_footer">
	        <h2 className="dft_slide_footer_title">{props.title}</h2>
	        <div>{props.children}</div>
	      </footer>
	    </article>
	  )
	}
	
	export default Slide

<br>

> touch src/styles/nav.css

<br>


	.dft_nav{
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    display: flex;
	}
	
	.dft_nav_btn{
	    flex: 1;
	    height: var(--imageHeight);
	    font-size: 50px;
	    background: transparent;
	    border: none;
	    color: #fff;
	    text-shadow: 1px 1px 3px rgba(0, 0, 0, .6);
	    padding: 20px;
	    vertical-align: top;
	    cursor: pointer;
	    user-select: none;
	    outline: 0;
	}
	
	.dft_nav_btn-prev{
	    text-align: left;
	}
	
	.dft_nav_btn-next{
	    text-align: right;
	}

<br>

> src/index.css

<br>

	@import "./../config.css";
	@import "./base.css";
	@import "./frame.css";
	@import "./carousel.css";
	@import "./slide.css";
	@import "./nav.css";

<br>

> src/nav.js

<br>

	function getPrevStyles(props){
	    return 'dft_nav_btn dft_nav_btn-prev';
	}
	
	function getNextStyles(props){
	    return 'dft_nav_btn dft_nav_btn-next';
	}
	
	function Nav(props) {
	  return (
	    <div className="dft_nav">
	      <button className={getPrevStyles(props)} onClick={props.onPrevious}>&#10094;</button>
	      <button className={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
	    </div>
	  )
	}
	
	export default Nav

<br>

> npm install classnames --save-dev

<br>

> ctlr + c

<br>

> npm start

<br>

> src/nav.js

<br>

	import classnames from 'classnames'
	
	const { func, bool } = React.PropTypes
	
	
	function getPrevStyles(props){
	    return classnames('dft_nav_btn dft_nav_btn-prev',{
	        'dft_nav_btn-hidden': !props.hasPrevious
	    });
	}
	
	function getNextStyles(props){
	    return classnames('dft_nav_btn dft_nav_btn-next', {
	        'dft_nav_btn-hidden': !props.hasNext
	    })
	}
	
	function Nav(props) {
	  return (
	    <div className="dft_nav">
	      <button className={getPrevStyles(props)} onClick={props.onPrevious}>&#10094;</button>
	      <button className={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
	    </div>
	  )
	}

<br>

> src/styles/nav.css

<br>


	.dft_nav{
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    display: flex;
	}
	
	.dft_nav_btn{
	    flex: 1;
	    height: var(--imageHeight);
	    font-size: 50px;
	    background: transparent;
	    border: none;
	    color: #fff;
	    text-shadow: 1px 1px 3px rgba(0, 0, 0, .6);
	    padding: 20px;
	    vertical-align: top;
	    cursor: pointer;
	    user-select: none;
	    outline: 0;
	
	}
	
	.dft_nav_btn:hover{
	    transition: all .5s;
	    color: #8c9ea3;
	}
	
	.dft_nav_btn-prev{
	    text-align: left;
	}
	
	.dft_nav_btn-next{
	    text-align: right;
	}
	
	.dft_nav_btn-hidden{
	    display: hidden;
	}

<br>











