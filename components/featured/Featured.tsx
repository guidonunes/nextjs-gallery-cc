import React from 'react'
import Image from 'next/image'
import { Artwork } from '../../utils/utils'

import styles from './Featured.module.css'




export default function Featured( { objectID, primaryImage, title, artistDisplayName, objectDate}: Artwork ) {

  return (
    <div className={styles.featured}>
      <Image
        className={styles.featuredImage}
        src={primaryImage == '' ? '/blank.jpg' : primaryImage}
        alt={title}
        width={500}
        height={500}
/>
      <div className={styles.featuredDetails}>
        <h2 className={styles.title}>{title}</h2>
        <p>{objectID}</p>
        <p>{artistDisplayName}</p>
        <p>{objectDate}</p>
      </div>

    </div>
  );
}
