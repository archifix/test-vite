import React from "react"
import Layout from "../Layout/Layout"

import styles from "./Documents.module.scss"

export const Documents = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <div className="container">Documents</div>;
      </div>
    </Layout>
  )
}
