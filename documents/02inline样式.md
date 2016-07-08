> touch src/config-style.js

<br>

	export default {
	    imageWidth: 640,
	    imageHeight: 420
	}

<br>

> src/app.js

<br>

	import configStyles from './config-style'
	<Carousel showIndex={this.state.showIndex} nav={this.renderNav()} width={configStyles.imageWidth}>
	...

<br>

> touch src/frame-styles.js

<br>

	import config from './config-style';
	
	export default {
	    root: {
	        maxWidth: '100%',
	        width: config.imageWidth,
	        margin: '50px auto'
	    }
	}

<br>

> src/frame.js

<br>

	import React from 'react'
	import styles from './frame-styles'
	
	export default function Frame({ children }) {
	  return <div style={styles.root}>{children}</div>
	}

<br>

> touch src/carousel-styles.js

<br>

	import config from './config-style'
	    
	export default {
	    root: {
	        position: 'relative',
	        overflow: 'hidden',
	        height: config.imageHeight
	    }
	}

<br>

> src/carousel.js

<br>

	import styles from './carousel-styles'
	function Carousel(props) {
	  return (
	    <div style={styles.root}>
	      {renderSlides(props)}
	      {props.nav}
	    </div>
	  )
	}

<br>

> touch src/slide-styles.js

<br>

	import config from './config-style'
	    
	const footerHeight = 110
	
	export default {
	    root: {
	        position: 'absolute',
	        top: 0,
	        transition: 'all .6s'
	    },
	    footer: {
	        position: 'absolute',
	        top: config.imageHeight - footerHeight,
	        left: 0,
	        width: '100%',
	        height: footerHeight,
	        padding: 15,
	        background: 'rgba(0, 0, 0, .3)',
	        color: '#fff',
	        textShadow: '1px 1px 0 rgba(0, 0, 0, .6)',
	        fontFamily: 'Aria',
	        fontSize: 14,
	        lineHeight: '1.4em',
	        boxSizing: 'border-box'
	    },
	    title: {
	        margin: '0 0 10px 0'
	    }
	}

<br>

> src/slide.js

<br>

	import React from 'react'
	import styles from './slide-styles'
	
	...
	
	function Slide(props) {
	  return (
	    <article style={{...styles.root, ...props.style }}>
	      <img src={props.image} alt={props.title} />
	      <footer style={styles.footer}>
	        <h2 style={styles.title}>{props.title}</h2>
	        <div>{props.children}</div>
	      </footer>
	    </article>
	  )
	}


<br>

> touch src/nav-styles.js

<br>

	import config from './config-style'
	    
	const btn = {
	    flex: 1,
	    height: config.imageHeight,
	    padding: 20,
	    fontSize: 50,
	    background: 'transparent',
	    color: '#fff',
	    textShadow: '1px 1px 3px rgba(0, 0, 0, .6)',
	    border: 'none',
	    outline: 0,
	    cursor: 'pointer',
	    userSelect: 'none'
	}
	
	const prev ={
	    ...btn,
	    textAlign: 'left'
	}
	
	const next = {
	    ...btn,
	    textAlign: 'right'
	}
	
	const hidden = {
	    visibility: 'hidden'
	}
	
	export default {
	    root:{
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        width: '100%',
	        display: 'flex'
	    },
	    prev: prev,
	    next: next,
	    prevHidden: {
	        ...prev,
	        ...hidden
	    },
	    nextHidden: {
	        ...next,
	        ...hidden
	    }
	}

<br>

> src/nav.js

<br>

	import React from 'react'
	import styles from './nav-styles'
	
	const { func, bool } = React.PropTypes
	
	
	function getPrevStyles(props){
	    return props.hasPrevious ? styles.prev : styles.prevHidden
	}
	
	function getNextStyles(props){
	    return props.hasNext ? styles.next : styles.nextHidden
	}
	
	function Nav(props) {
	  return (
	    <div style={styles.root}>
	      <button style={getPrevStyles(props)} onClick={props.onPrevious}>&#10094;</button>
	      <button style={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
	    </div>
	  )
	}

<br>

> localhost: 3000

<br>





