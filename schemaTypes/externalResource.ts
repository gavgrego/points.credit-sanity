import {defineField, defineType} from 'sanity'

export const externalResource = defineType({
  name: 'externalResource',
  title: 'External Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'resource',
      title: 'Resource',
      type: 'string',
    }),
  ],
})
