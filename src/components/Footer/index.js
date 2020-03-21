import React from "react"
import styles from './styles.module.scss'

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <p>© Von 2013. All right reserved.</p>
      <div className={styles.socialsFooter}>
        <a className="btn btn-facebook" href="#" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="btn btn-twitter" href="#" title="Twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="btn btn-linkedin" href="#" title="LinkedIn">
          <i className="fa fa-linkedin"></i>
        </a>
        <a className="btn btn-flickr" href="#" title="Flickr">
          <i className="fa fa-flickr"></i>
        </a>
        <a className="btn btn-pinterest" href="#" title="Pinterest">
          <i className="fa fa-pinterest"></i>
        </a>
        <a className="btn btn-tumblr" href="#" title="Tumblr">
          <i className="fa fa-tumblr"></i>
        </a>
        <a className="btn btn-dropbox" href="#" title="Dropbox">
          <i className="fa fa-dropbox"></i>
        </a>
        <a className="btn btn-google-plus" href="#" title="Google+">
          <i className="fa fa-google-plus"></i>
        </a>
        <a className="btn btn-instagram" href="#" title="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a className="btn btn-github" href="#" title="GitHub">
          <i className="fa fa-github"></i>
        </a>
        <a className="btn btn-bitbucket" href="#" title="Bitbucket">
          <i className="fa fa-bitbucket"></i>
        </a>
        <a className="btn btn-vk" href="#" title="VK">
          <i className="fa fa-vk"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
