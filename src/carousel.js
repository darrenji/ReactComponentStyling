import React from 'react'
import styles from './carousel-styles'
import Radium from 'radium'
    
import css from './carousel.css'
import styleable from 'react-styleable'

const { node, number } = React.PropTypes

function renderSlides(props) {
  return React.Children.map(props.children, (slide, i) => {
    return React.cloneElement(slide, {
      style: {
        ...slide.props.style,
        width: props.width,
        left: props.width * (i - props.showIndex)
      }
    })
  })
}

function Carousel(props) {
  return (
    <div className={props.css.root}>
      {renderSlides(props)}
      {props.nav}
    </div>
  )
}

Carousel.propTypes = {
  nav: node.isRequired,
  showIndex: number,
  width: number
}

export default styleable(css)(Carousel)
