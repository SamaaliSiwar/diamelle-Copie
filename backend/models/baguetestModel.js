
import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const baguetestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    categorie: { type: String, required: true },
    description: { type: String, required: true },
    masse: { type: Number, required: false },
    nbrpiere: { type: Number, required: false },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    displayhome:{ type:Boolean,required:false},
    choicecarat:{ type:Boolean,required:true},
    simpleproduct:{ type:Boolean,required:true},


    reviews: [reviewSchema],

  },
  {
    timestamps: true,
  }
);
const Baguetest = mongoose.model('Baguetest', baguetestSchema);

export default Baguetest;