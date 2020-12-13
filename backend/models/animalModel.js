import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    telNum: { type: String, required: true }
}, {
    timestamps: true
});

const Animal = mongoose.model("Animal", animalSchema);
export default Animal;



