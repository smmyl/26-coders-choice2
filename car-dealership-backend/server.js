const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Cars = require('./models/cars')
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

app.get('/cars/:id', (req, res)=>{
    Cars.findById(req.params.id)
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
    .then((updatedCars) => res.json(updatedCars))
});

app.listen(3000, ()=>{
    console.log('listening...');
});


mongoose.connect('mongodb://localhost:27017/cardealership')
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
})