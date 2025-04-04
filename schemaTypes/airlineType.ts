import {defineField, defineType} from 'sanity'

export const airlineType = defineType({
  name: 'airline',
  title: 'Airline',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alliance',
      title: 'Alliance',
      type: 'string',
      options: {
        list: ['Star Alliance', 'OneWorld', 'SkyTeam', 'None'],
      },
      description: 'Alliance that this airline belongs to',
    }),
    defineField({
      name: 'loyaltyProgram',
      title: 'Loyalty Program',
      type: 'string',
      description: "Name of airline's loyalty program",
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
  ],
})
