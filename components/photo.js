import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({
  src = 'https://avatars2.githubusercontent.com/u/49869820?s=460&u=bfa470168cd4c283f6f7f4d6cbd87a6d82659154&v=4',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt}></img>
    </div>
  )
}

export default Photo
