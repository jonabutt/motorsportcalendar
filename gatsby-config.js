module.exports = {
  siteMetadata: {
    siteUrl: "https://motorsportcalendar.net",
    URL: "https://motorsportcalendar.net",
    title: "motorsportcalendar",
    author: "Jonathan Buttigieg",
    description: "Find dates for motorsport practice and qualification and races for F1, MOTOGP, WEC, IndyCar"
  },
  plugins: [
    
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "motorsportcalendar.net",
        short_name: "motorsportcalendar",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/images/icon.png",
      }
    },
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-YQM5RC43GZ",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    //"gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "calendars",
        path: "./src/calendars/",
      },
      __key: "calendars",
    }
    ,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
    
  ],
};
