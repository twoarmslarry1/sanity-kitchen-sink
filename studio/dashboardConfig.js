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
                  buildHookId: '60b658db9956e2575e858147',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cuakw2wo',
                  apiId: '92be8575-e8cb-4d70-af2f-19e2f2d434a6'
                },
                {
                  buildHookId: '60b658dbebf3caa2cdf89a62',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dcnh6tdn',
                  apiId: '22d14cf8-dff0-4968-95e6-70069976c607'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/twoarmslarry1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dcnh6tdn.netlify.app', category: 'apps'}
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
