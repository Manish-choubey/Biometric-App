const punchSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['face-scan', 'fingerprint'],
      required: true
    },
    time: {
      type: Date,
      required: true
    },
    machineId: {
      type: String,
      required: true
    },
    isManuallyEdited: {
      type: Boolean,
      default: false
    }
  });
  
  const Punch = mongoose.model('Punch', punchSchema);
  