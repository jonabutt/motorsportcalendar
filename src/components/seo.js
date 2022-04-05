import React from "react"
import {Helmet} from "react-helmet"
import { StaticQuery,graphql } from "gatsby"

const detailsQuery = graphql`
query ss{
    site {
      siteMetadata {
        URL
        author
        description
        siteUrl
        title
      }
    }
  }
  
`


export const Seo = ({description,keywords,title,url,author}) => {
    return (
        <StaticQuery query={detailsQuery}
        render={data=>{
            const metaDescription = description || data.site.siteMetadata.description
            const metaTitle = title || data.site.siteMetadata.title
            const metaAuthor = author || data.site.siteMetadata.author
            const metaKeywords = keywords || ["F1 calendar","F1 next race","F1 schedule","MOTOGP calendar","MOTOGP next race","MOTOGP schedule"]
            return (
                <Helmet title={title} meta={[
                 {
                     name:"description",
                     content:metaDescription
                 },
                 {
                    name:"author",
                    content:metaAuthor
                },
                 {
                    name:"og:title",
                    content:metaTitle
                },
                {
                    name:"og:description",
                    content:metaDescription
                },
                {
                    name:"og:type",
                    content:"website"
                },
            ].concat(
                metaKeywords && metaKeywords.length > 0 ? {
                    name:'keywords',
                    content:metaKeywords.join(', '),
                }:[]
            )} />
            )
        }}
         />
    )
}

export default Seo