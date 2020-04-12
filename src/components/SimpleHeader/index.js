import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TitleAndDescription from "../TitleAndDescription"
import styles from "./styles.module.scss"

const SimpleHeader = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <hgroup className="pull-left">
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={data => <TitleAndDescription data={data} />}
        />
      </hgroup>
      <div className="btn btn-primary pull-right" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={"bars"} />
      </div>
    </header>
  )
}
export default SimpleHeader
