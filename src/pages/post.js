import React from "react"
import { Link } from "gatsby"
import Container, { PrimaryContent } from "../components/Container"
import BlogEntry from "../components/BlogEntry"
import Footer from "../components/Footer"
import Header from "../components/Header"

const PostPage = props => {
  return (
    <Container>
      <PrimaryContent>
        <Link to="/">
          <Header name="Borealsummit" />
        </Link>
        <BlogEntry />
        <Footer />
      </PrimaryContent>
    </Container>
  )
}
export default PostPage
