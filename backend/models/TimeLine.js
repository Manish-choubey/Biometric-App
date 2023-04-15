const timelineSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  punches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Punch'
    }
  ],
  edges: [
    {
      type: {
        type: String,
        enum: ['presence', 'absence'],
        required: true
      },
      start: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Punch',
        required: true
      },
      end: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Punch',
        required: true
      },
      deductions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Deduction'
        }
      ],
      exemptions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Exemption'
        }
      ]
    }
  ]
});

const Timeline = mongoose.model('Timeline', timelineSchema);
