import {defineField, defineType} from 'sanity'

export const commentType = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Comment Content',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'post',
      title: 'Related Post',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'userId',
      title: 'User ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'userDisplayName',
      title: 'User Display Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'userDisplayName',
      subtitle: 'content',
    },
  },
})
