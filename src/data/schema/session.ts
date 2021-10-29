import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({});

const Session = mongoose.model('Session', SessionSchema);

export default Session;
