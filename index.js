import mongoose from 'mongoose';
import * as model from './models/users.js';

CRUD()

async function CRUD() {
    try {

        const URL = 'mongodb://localhost:27017/ecommerce';
        let rta = await mongoose.connect(URL);
        console.log('Base de datos conectada');

        let products = await model.usuarios.find({});
        console.log(products);
        

    }catch(err) {
        console.log(err);
    }
}