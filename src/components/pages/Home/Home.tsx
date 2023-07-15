import { FC } from 'react'
import Layout from '../Layout/Layout'

import styles from './Home/Home.module.scss'

export const Home: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
          <div className="container">
            <div className='@[1760px]:underline'>

            <h1>Hellou</h1>
            </div>
          </div>
      </main>
    </Layout>
    
    
  )
}
