import {defineField, defineType} from 'sanity'

export const transferBonusType = defineType({
  name: 'transferBonus',
  title: 'Transfer Bonus',
  type: 'document',
  fields: [
    defineField({
      name: 'bank',
      title: 'Bank',
      type: 'reference',
      to: [{type: 'bank'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'partner',
      title: 'Transfer Partner',
      type: 'reference',
      to: [{type: 'airline'}, {type: 'hotel'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bonusRatio',
      title: 'Bonus Ratio',
      type: 'string',
      description: 'e.g., "20%", "30%", "50%"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'calculatedRatio',
      title: 'Calculated Ratio',
      type: 'string',
      description: 'The calculated ratio including bonus, e.g., "1:1.2", "1:1.5", "1:3"',
    }),
    defineField({
      name: 'baseTransferRatio',
      title: 'Base Transfer Ratio',
      type: 'string',
      description: 'The regular transfer ratio without bonus, e.g., "1:1", "1:1.5", "2:1"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
      description: 'Additional information about the transfer bonus',
    }),
  ],
  preview: {
    select: {
      bankName: 'bank.name',
      partnerName: 'partner.name',
      bonusRatio: 'bonusRatio',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({bankName, partnerName, bonusRatio, startDate, endDate}) {
      const now = new Date()
      const start = startDate ? new Date(startDate) : null
      const end = endDate ? new Date(endDate) : null

      const isActive = start && end && now >= start && now <= end
      const status = isActive ? '🟢 Active' : '⚪ Inactive'

      return {
        title: `${bankName || 'Unknown Bank'} → ${partnerName || 'Unknown Partner'} (${bonusRatio})`,
        subtitle: `${status} | ${start || 'No start'} to ${end || 'No end'}`,
      }
    },
  },
})
