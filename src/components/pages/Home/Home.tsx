import { FC } from 'react'
import Layout from '../Layout/Layout'

import styles from './Home/Home.module.scss'

export const Home: FC = () => {
  return (
    <Layout>
      <div className={styles.bg}>Hello</div>
    </Layout>
    
    
  )
}
