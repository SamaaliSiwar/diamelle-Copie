
import mongoose from 'mongoose';


const diamantSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    clarity: { type: String, required: true },
    shape: { type: String, required: true },
    carat: { type: Number, required: true },
    couleur: { type: String, required: true },
    cut: { type: String, required: true },

    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Diamant = mongoose.model('Diamant', diamantSchema);

export default Diamant;