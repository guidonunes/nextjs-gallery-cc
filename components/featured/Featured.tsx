import React from 'react'
import Image from 'next/image'
import { Artwork } from '../../utils/utils'

import styles from './Featured.module.css'
import StoredComments from '../comment/StoredComments';




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

        <p>{artistDisplayName}</p>
        <p>{objectDate}</p>
      </div>
      <div className={styles.comments_section}>
        <h3>Comments:</h3>
        <br />

        <StoredComments id={objectID} />
      </div>

    </div>
  );
}
