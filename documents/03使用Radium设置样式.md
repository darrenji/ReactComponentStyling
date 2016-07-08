> npm install radium --save-dev

<br>

> touch app/styles.js

<br>

	export default {
	    '*':{
	        boxSizing: 'border-box'
	    },
	    html: {
	        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
	        fontSize: 14,
	        lineHeight: '1.4em',
	        backgroundColor: '#1D272F'
	    }
	}

<br>

> src/app.js

<br>

	import styles from './app-styles'
	import { Style } from 'radium'
	
	<Frame>
		<Style rules={styles} />
		<Carousel showIndex={this.state.showIndex} nav={this.renderNav()} width={configStyles.imageWidth}>
		...


<br>

> src/frame-styles.js

<br>

	import config from './config-style';
	
	export default {
	    root: {
	        position: 'relative',
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
	    
	import Radium from 'radium'
	
	function Frame({ children }) {
	  return <div style={styles.root}>{children}</div>
	}
	
	export default Radium(Frame)
以上，Radium对Frame这个组件进行了包裹。

<br>

> src/carousel-styles.js

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
	import Radium from 'radium'
	
	function Carousel(props) {
	  return (
	    <div style={styles.root}>
	      {renderSlides(props)}
	      {props.nav}
	    </div>
	  )
	}

	export default Radium(Carousel)

<br>

> src/slide-styles.js

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

	import styles from './slide-styles'
	import Radium from 'radium'
	
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
	
	export default Radium(Slide)

<br>

> src/nav-styles.js

<br>

	import config from './config-style'
	import Radium from 'radium'
	    
	//这里体现Radium的优势了  
	const pulse = Radium.keyframes({
	    '0%':{
	        transform: 'scale3d(1,1,1)'
	    },
	    '15%':{
	        transform: 'scale3d(1.05,1.05,1.05)'
	    },
	    '100%':{
	        transform: 'scale3d(1,1,1)'
	    }
	}, 'Nav')
	    
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
	    userSelect: 'none',
	    animation: `${pulse} 4s 2s infinite`,
	    
	    ':hover':{
	        transition: 'all 1s',
	        color: '#8c9ea3'
	    }
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

	import styles from './nav-styles'
	import Radium from 'radium'
	
	function Nav(props) {
	  return (
	    <div style={styles.root}>
	      <button key="prev" style={getPrevStyles(props)} onClick={props.onPrevious}>&#10094;</button>
	      <button key="next" style={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
	    </div>
	  )
	}
	
	export default Radium(Nav)

<br>

