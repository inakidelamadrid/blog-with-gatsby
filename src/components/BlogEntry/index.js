import React from "react"
import map from "lodash/map"
import styles from "./styles.module.scss"
import GravatarImage from "../GravatarImage"
import Tag from "../Tag"

const defaultImage = (
  <img
    src="https://source.unsplash.com/random/850x400"
    className={styles.imgResponsive}
  />
)
const BlogEntry = ({
  datetime,
  description,
  tags,
  title,
  image = defaultImage,
}) => {
  const styledTags = map(tags, tagName => <Tag tagName={tagName} />)

  return (
    <>
      {image}
      <section className={styles.post}>
        <header className="entry-header">
          <GravatarImage styles={styles} />
          <h2 className={styles.entryTitle}>
            <a href="single.html">{title}</a>
          </h2>
          <p className={styles.entryMeta}>
            Posted on{" "}
            <a className="entry-date" href="date.html">
              {datetime}
            </a>{" "}
            | By{" "}
            <a className={styles.entryAuthor} href="author.html">
              Ignacio De La Madrid
            </a>{" "}
            | Tags {styledTags}
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
