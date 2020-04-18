import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MediaListener } from "../Media"
import TitleAndDescription from "../TitleAndDescription"
import classNames from "classnames"
import styles from "./styles.module.scss"

const SimpleHeader = ({ isSidebarOpen, toggleSidebar, useSidebar = false }) => {
  return (
    <header className={styles.header}>
      <MediaListener>
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
      </MediaListener>
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
