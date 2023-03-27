const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Cars = require('./Models/Cars')
const cors = require('cors')

app.use(express.json()); 
app.use(cors())


// app.get('/cars', (req, res) =>{
//     res.send('Hello World')
// })
app.post('/cars', (req, res)=>{
    Cars.create(req.body)
    .then((createdCars)=>{
        res.json(createdCars)
    })
});

app.get('/cars', (req, res)=>{
    Cars.find({})
    .then((foundCars) => {
        res.json(foundCars)
    })
});

app.delete('/cars/:id', (req, res)=>{
    Cars.findByIdAndRemove(req.params.id)
    .then((deletedCars)=> {
        res.json(deletedCars)
    })
});

app.put('/cars/:id', (req, res)=>{
    Cars.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedCars)=>res.json(updatedCars))
});

app.listen(3002, ()=>{
    console.log('listening...');
});


mongoose.connect('mongodb+srv://Trophy23:Twan@cluster0.dnshspp.mongodb.net/?retryWrites=true&w=majority').then(() => {
   console.log('conneciton with mongo established')
})