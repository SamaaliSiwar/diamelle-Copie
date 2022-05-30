import mongoose from "mongoose";

const commandeSchema= new mongoose.Schema({
          commandeItems: [
        {
          support: { type:String, required: true },
          supportprice: { type: Number, required: true },
          taille: { type: Number, required: true },
          or: { type: String, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          diamant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Diamant',
            required: true,
          },
        },
      ],
      laivraisonAddress: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        
      },
      paymentRecommandation: { type: String, required: true },
      itemsPrice: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Commande= mongoose.model('Commande',commandeSchema);
export default Commande;