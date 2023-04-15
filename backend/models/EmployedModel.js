const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
