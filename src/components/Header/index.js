import React from "react"
import styles from './styles.module.scss'

const Header = ({name}) => {
  return (
    <header className={styles.header}>
      <hgroup className="pull-left">
        <h1 className={styles.siteTitle}>
          <a rel="home" title={name} href="/">
            <i className="fa fa-lemon-o"></i> {name}
          </a>
        </h1>
      </hgroup>
      <div id="togglesidebar" className="btn btn-primary pull-right">
        <i className="fa fa-bars"></i>
      </div>
    </header>
  )
}
export default Header
