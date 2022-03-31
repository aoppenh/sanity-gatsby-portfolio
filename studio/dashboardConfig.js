export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624501e57e84b81f2f111e77',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zkukd4zt',
                  apiId: '06e1c1a4-392a-4905-89e3-a676d0fbb6f4'
                },
                {
                  buildHookId: '624501e5a08dba1ee186dd5d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5s23v3ny',
                  apiId: 'ebc3e659-9806-416f-97ca-8ef48e049f48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aoppenh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5s23v3ny.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
