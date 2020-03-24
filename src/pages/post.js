import React from "react"
import Container, { PrimaryContent } from "../components/Container"
import BlogEntry from "../components/BlogEntry"
import Header from "../components/Header"

const PostPage = props => {
  return (
    <Container>
      <PrimaryContent>
        <Header name="Borealsummit" />
        <BlogEntry />
      </PrimaryContent>
    </Container>
  )
}
export default PostPage
