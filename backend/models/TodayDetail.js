const todayDetailsSchema = new mongoose.Schema({
    employeeId: {
      type: String,
      required: true
    },
    totalPresentTime: {
      type: Number,
      default: 0
    },
    totalAbsentTime: {
      type: Number,
      default: 0
    },
    totalExemption: {
      type: Number,
      default: 0
    },
    totalDeduction: {
      type: Number,
      default: 0
    }
  });

  module.exports = mongoose.model('daySdetails',todayDetailsSchema)