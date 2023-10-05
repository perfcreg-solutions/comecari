// components/SkeletonLoader.tsx
import React from 'react';
import styles from './SkeletonLoader.module.css';

export default function SkeletonLoader() {
    return(
        <div className={styles.skeletonLoader}>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
        </div>
    )
}
