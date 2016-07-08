//向前向后按钮

import React from 'react'
import styles from './nav-styles'
import Radium from 'radium'
    
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

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Nav
