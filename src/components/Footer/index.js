import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styles from "./styles.module.scss"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ActualFooter = ({ githubURL, linkedinURL, twitterURL }) => (
  <footer className={styles.footer}>
    <p>
      © Ignacio De La Madrid {new Date().getFullYear()}. All rights reserved.
    </p>
    <div className={styles.socialsFooter}>
      <a
        className="btn btn-twitter"
        href={twitterURL}
        title="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a
        className="btn btn-linkedin"
        href={linkedinURL}
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
      <a
        className="btn btn-github"
        href={githubURL}
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
    </div>
  </footer>
)
const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            githubURL
            linkedinURL
            twitterURL
          }
        }
      }
    `}
    render={data => <ActualFooter {...data.site.siteMetadata} />}
  />
)

export default Footer
