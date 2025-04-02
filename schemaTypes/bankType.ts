import {defineField, defineType} from 'sanity'

export const bankType = defineType({
  name: 'bank',
  title: 'Bank',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'transferPartner',
      title: 'Transfer Partners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'partner',
              title: 'Partner',
              type: 'reference',
              to: [{type: 'airline'}, {type: 'hotel'}],
              validation: (rule) => rule.required(),
            },
            {
              name: 'transferRatio',
              title: 'Transfer Ratio',
              type: 'string',
              description: 'e.g., "1:1", "1:1.5", "2:1"',
              validation: (rule) => rule.required(),
            },
            {
              name: 'notes',
              title: 'Notes',
              type: 'text',
            },
          ],
        },
      ],
      description: 'Airlines and hotels that this bank can transfer points to',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description on which cards are transferable',
    }),
  ],
})
