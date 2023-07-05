import React from 'react'
import styles from '@/app/page.module.css'
interface Props {}

const page = (props: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <code className={styles.code}>page</code>
      </div>
    </main>
  )
}

export default page
