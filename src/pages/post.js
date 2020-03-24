import React from "react"
import { Link } from "gatsby"
import Container, { PrimaryContent } from "../components/Container"
import BlogEntry from "../components/BlogEntry"
import Header from "../components/Header"

const PostPage = props => {
  return (
    <Container>
      <PrimaryContent>
        <Link to="/">
          <Header name="Borealsummit" />
        </Link>
        <BlogEntry />
      </PrimaryContent>
    </Container>
  )
}
export default PostPage
