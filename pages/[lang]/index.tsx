import 'tailwindcss/tailwind.css'
import React from 'react'
import withLocale from '../../hocs/withLocale'
import styles from '../../styles/Dashboard.module.scss'
import MyHeader from '../../components/Header'

const IndexPage: React.FC = () => {
  return (
    <body className={styles.main_bg}>
      <MyHeader></MyHeader>
    </body>
  )
}

export default withLocale(IndexPage)
 