export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e172c9551b7d70828a64e93',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wu4ndv9m',
                  apiId: '86b8baf1-fe17-416b-9b2f-cb186ddb8422'
                },
                {
                  buildHookId: '5e172c9651d6131976075c09',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yqws1zfz',
                  apiId: 'f1f96f18-dd49-4abf-9f05-47e6ef67b022'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arvindgemini/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yqws1zfz.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
