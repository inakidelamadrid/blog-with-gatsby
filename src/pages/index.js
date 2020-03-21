import React from "react"
import "../styles/main.scss"
import IndexBlogEntry from "../components/IndexBlogEntry"
export default () => (
  <div>
    <IndexBlogEntry
      author="Paul Laros"
      content={
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      }
      tags={[{ title: "HTML5", href: "tag.html" }]}
      title="Why should designers learn how to code"
    />
    <p>Hello mundo!</p>
  </div>
)
