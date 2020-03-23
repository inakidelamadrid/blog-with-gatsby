import React from "react"
import range from "lodash/range"
import "../styles/main.scss"
import IndexBlogEntry from "../components/IndexBlogEntry"
import Container, { PrimaryContent } from "../components/Container"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default () => (
  <Container>
    <PrimaryContent>
      <Header name="BorealSummit" />
      {range(5).map(n => (
        <IndexBlogEntry
          author="Paul Laros"
          content={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          }
          key={n}
          tags={[{ title: "HTML5", href: "tag.html" }]}
          title="Why should designers learn how to code"
          linkTo="/post"
        />
      ))}
      <Footer />
    </PrimaryContent>
  </Container>
)
