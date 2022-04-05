const path = require('path')

module.exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions

    const scheduleTemplate = path.resolve('./src/templates/schedule.js')

    const response = await graphql(`
        query{
            allFile(filter: { extension: {eq: "json"}}) {
            edges {
                node {
                name
                }
            }
            }
        }
        `)

    response.data.allFile.edges.forEach((edge)=>{
    
        createPage({
            component: scheduleTemplate,
            path: `/schedule/${edge.node.name}`,
            context: {
                type:{"in": edge.node.name}                
            }
        })
    });
    
}