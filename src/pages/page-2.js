import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" />
    <h1>{props.uri}</h1>
    {console.log(props)}
  </Layout>
)

export default SecondPage
