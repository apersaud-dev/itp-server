import mongoose, { Schema } from 'mongoose';

const SessionSchema = new mongoose.Schema({
  total_reps: {
    type: Schema.Types.Number,
    required: true,
  },
  reps_per_set: {
    type: Schema.Types.Number,
    required: true,
  },
  total_sets: {
    type: Schema.Types.Number,
    required: true,
  },
  compleatedTotalReps: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Session = mongoose.model('Session', SessionSchema);

export default Session;
