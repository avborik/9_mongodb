const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');


const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car',carSchema);

// mongoose.save((err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// 

// Car.find({brand:"Ford"},(err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.find({_id:""},(err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.findByIdAndRemove({brand:'Ford'},(err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.remove({year:2000},(err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.update(
//     {_id:""},
//     {$set:{brand:"Nissan"}},
//     (err,doc)=>{
//         if(err) return console.log(err);
//         console.log(doc)
//     }
// )

// Car.findByIdAndUpdate("",
//     {$set:{brand:""}},
//     {new: false},
//     (err,doc)=>{
//         if(err) return console.log(err);
//         console.log(doc)
//     }
// )

// Car.findById("",(err,car)=>{
//     if(err) return console.log(err);

//     car.set({
//         brand: "Porche"
//     });
//     car.save((err,doc)=>{
//         if(err) return console.log(err);
//         console.log(doc)
//     })
// })

// Postman + react //

app.get('/api/movies',(req,res)=>{
    const movie = {
        name:"Fight club",
        gen:"Weird",
        stars:["Brad Pitt","Edward Norton"]
    }
    res.send(movie)
});

app.post('/api/movies',(req,res)=>{
    console.log(req.body)
    res.sendStatus(200)
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Started at port ${port}`)
})