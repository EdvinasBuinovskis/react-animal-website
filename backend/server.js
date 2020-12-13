import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/animal-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.get('/api/animals/:id', (req, res) => {
    const animal = data.animals.find(x => x._id === req.params.id);
    if (animal) {
        res.send(animal);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

app.get('/api/animals', (req, res) => {
    res.send(data.animals);
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});