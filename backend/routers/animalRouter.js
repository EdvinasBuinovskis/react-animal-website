import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Animal from '../models/animalModel.js';
import { isAdmin, isAuth } from '../utils.js';

const animalRouter = express.Router();

animalRouter.get('/',
    expressAsyncHandler(async (req, res) => {
        const animals = await Animal.find({});
        res.send(animals);
    })
);

animalRouter.post('/', isAuth, isAdmin,
    expressAsyncHandler(async (req, res) => {
        const animal = new Animal({
            name: req.body.name,
            category: req.body.category,
            image: req.body.image,
            status: req.body.status,
            description: req.body.description,
            telNum: req.body.telNum
        });
        const createdAnimal = await animal.save();
        if (createdAnimal) {
            res.status(201).send({ message: 'New Animal Added', data: createdAnimal });
        }
        else {
            res.status(500).send({ message: ' Error in Adding Animal.' });
        }
    })
);

animalRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        //await Animal.remove({});
        const createdAnimals = await Animal.insertMany(data.animals);
        res.send({ createdAnimals });
    })
);

animalRouter.get('/:id',
    expressAsyncHandler(async (req, res) => {
        const animal = await Animal.findById(req.params.id);
        if (animal) {
            res.send(animal);
        }
        else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

export default animalRouter;