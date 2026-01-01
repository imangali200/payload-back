import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'


import { Users } from './collections/Users'
import { Media } from './collections/Media'
import {Hero} from './collections/Hero'
import {Companies} from './collections/Companies'
import { ourServices } from './collections/ourServices'
import { informations } from './collections/informations'
import {header} from './collections/Header'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media,Hero,Companies,ourServices,informations,header],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  
  sharp,
  plugins: [
    vercelBlobStorage({
    collections: {
      media: true,
    },
    token: process.env.BLOB_READ_WRITE_TOKEN!,
  }),
  ],
    cors: [
    'http://localhost:3000',           
    'https://miro-six-sand.vercel.app',    
  ],
  csrf: [
  'http://localhost:3000',
  'https://miro-six-sand.vercel.app',
],
})

