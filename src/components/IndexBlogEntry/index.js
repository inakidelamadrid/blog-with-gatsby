import React from "react"
import styles from "./styles.module.scss"

const defaultImage = (
  <img
    className={styles.entryAvatar}
    alt="Paul Laros"
    height="52"
    width="52"
    src="http://www.gravatar.com/avatar/ea67e860739cd91fe40b6797e97e6820.jpg?s=52"
  />
)
const IndexBlogEntry = ({
  author,
  content,
  tags,
  title,
  image = defaultImage,
}) => {
  return (
    <section className={styles.post}>
      <header>
        {image}
        <h2 className={styles.entryTitle}>
          <a href="single.html">{title}</a>
        </h2>
        <p className={styles.entryMeta}>
          Posted on{" "}
          <a className="entry-date" href="date.html">
            July 2, 2013
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
