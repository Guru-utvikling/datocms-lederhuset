const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `nyheter/${work.slug}`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsServicePage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
     result.data.allDatoCmsServicePage.edges.map(({ node: service_page }) => {
        createPage({
          path: `servicepages/${service_page.slug}`,
          component: path.resolve(`./src/templates/services.js`),
          context: {
            slug: service_page.slug,
          },
        })
      })
      resolve()
    })
  })
} 
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /material-ui-phone-number/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
