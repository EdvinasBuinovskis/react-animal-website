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
            res.status(404).send({ message: 'Animal Not Found' });
        }
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
            res.status(201).send({ message: 'New Animal Added', animal: createdAnimal });
        } else {
            res.status(500).send({ message: ' Error in Adding Animal.' });
        }
    })
);

animalRouter.put('/:id', isAuth, isAdmin,
    expressAsyncHandler(async (req, res) => {
        const animalId = req.params.id;
        const animal = await Animal.findById(animalId);
        if (animal) {
            animal.name = req.body.name || animal.name;
            animal.category = req.body.category || animal.category;
            animal.image = req.body.image || animal.image;
            animal.status = req.body.status || animal.status;
            animal.description = req.body.description || animal.description;
            animal.telNum = req.body.telNum || animal.telNum;
            const updatedAnimal = await animal.save();
            res.send({ message: 'Animal Updated', animal: updatedAnimal });
        } else {
            res.status(404).send({ message: 'Animal Not Found' });
        }
    })
);

animalRouter.delete('/:id', isAuth, isAdmin,
    expressAsyncHandler(async (req, res) => {
        const animal = await Animal.findById(req.params.id);
        if (animal) {
            const deleteAnimal = await animal.remove();
            res.send({ message: 'Animal Deleted', animal: deleteAnimal });
        }
        else {
            res.status(404).send({ message: 'Animal Not Found' });
        }
    })
);

export default animalRouter;