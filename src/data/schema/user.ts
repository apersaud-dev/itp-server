import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  single_set_max: {
    type: [Schema.Types.Number],
    required: false,
  },
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session',
      required: false,
    },
  ],
});

const User = mongoose.model('User', UserSchema);

export default User;
