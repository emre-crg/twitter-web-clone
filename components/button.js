import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './button.module.css'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

function Button({ full = false, children, className, ...props }) {
  const PolyButton = props.href ? LinkButton : BaseButton

  return (
    <PolyButton
      className={cn(styles.button, full && styles.fullWitdth, className)}
      {...props}
    >
      {children}
    </PolyButton>
  )
}

export default Button
