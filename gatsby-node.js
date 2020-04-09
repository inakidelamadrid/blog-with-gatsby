const path = require("path")

const createTagPages = (createPage, posts) => {
  const tagIndexTemplate = path.resolve("src/templates/tagIndex.js");

  let  postsByTag = {}

  posts.forEach(({node}) => {
    const tags = node.frontmatter.tags;
    if(tags){
      tags.forEach(tag => {
        if(!postsByTag[tag]){
          postsByTag[tag] = []
        }
        postsByTag[tag].push(node);
      })
    }
  })

  const tags = Object.keys(postsByTag).sort();
  createPage({
    path: "/tags",
    component: tagIndexTemplate,
    context:{
      tags,
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")

  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: {order: ASC, fields: [frontmatter___date]}
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  createTagPages(createPage, posts);

  posts.forEach(({ node }, index) => {
    const path = node.frontmatter.path

    createPage({
      path,
      component: blogPostTemplate,
      context: {
        pathSlug: path,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}
