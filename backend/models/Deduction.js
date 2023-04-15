const deductionSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  });
  
  const Deduction = mongoose.model('Deduction', deductionSchema);
  