import { CollectionConfig } from 'payload'

export const informations: CollectionConfig = {
  slug: 'informations',
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
        name:'img',
        type:'upload',
        relationTo:'media'
    },{
        name:'isImageRight',
        type:'checkbox'
    }
  ],
}
