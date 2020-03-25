import React from "react"
import styles from "./styles.module.scss"
import GravatarImage from "../GravatarImage"

const defaultImage = (
  <img
    src="https://source.unsplash.com/random/850x400"
    className={styles.imgResponsive}
  />
)
const BlogEntry = ({ description, title, image = defaultImage }) => {
  return (
    <>
      {image}
      <section className={styles.post}>
        <header className="entry-header">
          <GravatarImage styles={styles}/>
          <h2 className={styles.entryTitle}>
            <a href="single.html">{title}</a>
          </h2>
          <p className={styles.entryMeta}>
            Posted on{" "}
            <a className="entry-date" href="date.html">
              July 19, 2013
            </a>{" "}
            | By{" "}
            <a className={styles.entryAuthor} href="author.html">
              Paul Laros
            </a>{" "}
            | Tags{" "}
            <a className="label label-danger" href="tag.html">
              CSS3
            </a>
          </p>
        </header>
        <div
          className={styles.entryDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </section>
    </>
  )
}
export default BlogEntry
