import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.scss"
import GravatarImage from "../GravatarImage"

const IndexBlogEntry = ({ author, content, datetime, linkTo, tags, title }) => {
  return (
    <section className={styles.post}>
      <header>
        <GravatarImage styles={styles} />
        <h2 className={styles.entryTitle}>
          <Link to={linkTo}>{title}</Link>
        </h2>
        <p className={styles.entryMeta}>
          Posted on{" "}
          <a className="entry-date" href="date.html">
            {datetime}
          </a>{" "}
          | By{" "}
          <a className="entry-author" href="author.html">
            {author}
          </a>{" "}
          | Tags{" "}
          {tags.map(tag => (
            <a key={tag.title} className="label label-primary" href={tag.href}>
              {tag.title}
            </a>
          ))}
        </p>
      </header>
      <div className={styles.entryDescription}>{content}</div>
    </section>
  )
}
export default IndexBlogEntry
