import React from "react"
import classNames from "classnames"

import styles from "./styles.module.scss"

const SecondaryContent = ({ children, open }) => {
  const showKlass = open ? styles.shown : styles.hidden;

  return (
    <div className={classNames(styles.sidebar, "col-sm-3", showKlass)}>
      {children}
    </div>
  )
}
export default SecondaryContent
