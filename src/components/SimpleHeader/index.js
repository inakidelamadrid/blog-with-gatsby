import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TitleAndDescription from "../TitleAndDescription"
import classNames from "classnames"
import styles from "./styles.module.scss"

const SimpleHeader = ({ isSidebarOpen, toggleSidebar, useSidebar = false }) => {
  return (
    <header className={styles.header}>
      <hgroup className={styles.titleAndDescription}>
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
      {useSidebar && (
        <div
          className={classNames("btn", "btn-primary", styles.bars)}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon
            icon={isSidebarOpen ? "chevron-right" : "chevron-left"}
          />
        </div>
      )}
    </header>
  )
}
export default SimpleHeader
