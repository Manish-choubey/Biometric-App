const exemptionSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  });
  
  const Exemption = mongoose.model('Exemption', exemptionSchema);
  