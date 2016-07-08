import React from 'react'
import styles from './frame-styles'
    
import Radium from 'radium'
    
import css from './frame.css'
import styleable from 'react-styleable'

function Frame(props) {
  return <div className={props.css.root}>{props.children}</div>
}

export default styleable(css)(Frame)