import { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'buttonText',
      type: 'text',
    },
    {
      name: 'statistics',
      type: 'group',
      fields: [
        {
          name: 'start',
          type: 'number',
        },
        {
          name: 'reviewsNumber',
          type: 'text',
        },
        {
            name:'images',
            type:'array',
            fields:[{
                name:'img',
                type:'upload',
                relationTo:'media'
            }
            ]
        }
      ],
    },
  ],
}
