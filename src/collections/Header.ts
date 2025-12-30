import { CollectionConfig } from 'payload'

export const header: CollectionConfig = {
  slug: 'header',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navigations',
      type: 'array',
      fields: [
        {
          name: 'navigation',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
    {
      name: 'rightSideNavigation',
      type: 'array',
      fields: [
        {
          name: 'navigations',
          type: 'array',
          fields: [
            {
              name: 'navigation',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'text',
        },
      ],
    },
  ],
}
