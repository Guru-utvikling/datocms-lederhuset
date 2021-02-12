const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const nyheters = await graphql(`
  {
    allDatoCmsNyheter {
      edges {
        node {
          slug
        }
      }
    }
  }
  `).then((res) => res.data)

  nyheters.allDatoCmsNyheter.edges.forEach(({ node: nyheter }) => {
    createPage({
      path: `nyheters/${nyheter.slug}`,
      component: path.resolve(`./src/templates/nyheters.js`),
      context: {
        slug: nyheter.slug,
      },
    })
  })

  const servicePages = await graphql(`
    {
      allDatoCmsServicePage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((res) => res.data)

  servicePages.allDatoCmsServicePage.edges.forEach(({ node: service_page }) => {
    createPage({
      path: `servicepages/${service_page.slug}`,
      component: path.resolve(`./src/templates/services.js`),
      context: {
        slug: service_page.slug,
      },
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
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    }
  })
}
