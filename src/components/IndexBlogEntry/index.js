import React from "react"
const defaultImage = (
  <img
    class="entry-avatar"
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
    <section class="post">
      <header class="entry-header">
        {image}
        <h2 class="entry-title">
          <a href="single.html">{title}</a>
        </h2>
        <p class="entry-meta">
          Posted on{" "}
          <a class="entry-date" href="date.html">
            July 2, 2013
          </a>{" "}
          | By{" "}
          <a class="entry-author" href="author.html">
            {author}
          </a>{" "}
          | Tags{" "}
          {tags.map(tag => (
            <a class="label label-primary" href={tag.href}>
              {tag.title}
            </a>
          ))}
        </p>
      </header>
      <div class="entry-description">{content}</div>
    </section>
  )
}
export default IndexBlogEntry
