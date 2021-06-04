export default {
  widgets: [
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
                  buildHookId: '60ba227914b1243e2fd0effc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1bh3hrz9',
                  apiId: '752a3b26-77ee-4d83-a07d-c7dd650709cd'
                },
                {
                  buildHookId: '60ba22798649852b97479b91',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2pik9zk1',
                  apiId: 'c57749a6-59d3-4b27-b543-56ddd984ae29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/apgoodier/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2pik9zk1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
