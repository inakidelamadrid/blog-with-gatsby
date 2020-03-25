import React from "react"
import styles from "./styles.module.scss"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <p>
        © Ignacio De La Madrid {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className={styles.socialsFooter}>
        <a className="btn btn-twitter" href="/" title="Twitter">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a className="btn btn-linkedin" href="/" title="LinkedIn">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a className="btn btn-github" href="/" title="GitHub">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
