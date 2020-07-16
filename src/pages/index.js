import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <h1>{props.uri}</h1>
  </Layout>
)

export default IndexPage
