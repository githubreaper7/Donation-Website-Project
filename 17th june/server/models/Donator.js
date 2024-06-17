import mongoose from 'mongoose';

const DonatorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true }
});

const DonatorModel = mongoose.model("Donator", DonatorSchema);
export { DonatorModel as Donator };
