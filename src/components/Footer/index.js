import React from "react"
import styles from "./styles.module.scss"
import "../../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <p>© Von 2013. All right reserved.</p>
      <div className={styles.socialsFooter}>
        <a className="btn btn-twitter" href="/" title="Twitter">
          <FontAwesomeIcon icon={['fab', 'twitter']}/>
        </a>
        <a className="btn btn-linkedin" href="/" title="LinkedIn">
          <i className="fa fa-linkedin"></i>
        </a>
        <a className="btn btn-google-plus" href="/" title="Google+">
          <i className="fa fa-google-plus"></i>
        </a>
        <a className="btn btn-instagram" href="/" title="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a className="btn btn-github" href="/" title="GitHub">
          <i className="fa fa-github"></i>
        </a>
        <a className="btn btn-bitbucket" href="/" title="Bitbucket">
          <i className="fa fa-bitbucket"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
