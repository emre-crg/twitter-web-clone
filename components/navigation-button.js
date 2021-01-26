import React from 'react'
import cn from 'classnames'

import styles from './navigation-button.module.css'

import Button from './button'

function NavigationButton({
  notify,
  selected,
  children,
  className,
  ...props
}) {
  return (
    <Button
      className={cn(
        styles.navButton,
        className,
        selected && styles.navButtonSelected
      )}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavigationButton
