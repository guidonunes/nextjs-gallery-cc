import React from 'react'
import ArtGallery from '../components/gallery/ArtGallery'

import styles from './page.module.css'
import LoadingGallery from '@/components/featured/LoadingGallery';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<LoadingGallery />}>
        <ArtGallery />
      </Suspense>
    </main>
  );
}
