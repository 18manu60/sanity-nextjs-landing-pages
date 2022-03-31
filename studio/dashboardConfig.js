export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '624573e6160cf32a3e4ec7e8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2qhjm5e6',
                  apiId: '58395a2e-437b-46b7-b21c-3e7a718d2112'
                },
                {
                  buildHookId: '624573e777c6aa256a3d10df',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dexj5xnr',
                  apiId: 'eaba45d8-6a2d-45e5-a1e5-f72b6112f82d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/18manu60/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dexj5xnr.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
