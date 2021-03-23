import React from 'react';
import { graphql, Link } from 'gatsby';

const about = ({data}) => (
  <React.Fragment>
    <h2>{data.site.siteMetadata.title}</h2>
    <div>{data.site.siteMetadata.description}</div>
    <Link to="/">Back to home</Link>
  </React.Fragment>
)

export const query = graphql `
    query MyQuery {
        site {
        siteMetadata {
            author
            description
            title
        }
        }
    }
`

export default about;