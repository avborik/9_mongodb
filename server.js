const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url,(err,db)=>{
//     if(err){
//         console.log('could not connect');
//     }
//     console.log('connected !!!')
//     db.close();
// })

// MongoClient.connect(url,(err,db)=>{

//     const cars = [
//         {model:"VW",year:"2017"},
//         {model:"Nissan",year:"1997"}
//     ];

//     db.collection('Cars').insertMany(cars,(err,res)=>{
//         if(err){
//             return console.log(`Cannot insert: ${err}`)
//         }
//         console.log(res.ops)
//     })

//     db.close();
// })

MongoClient.connect(url,(err,db)=>{

    // db.collection('Cars').findOne({year:'2017'}),{model:0},(err,doc)=>{
    //     console.log(doc);
    // }

    // db.collection('Cars').deleteMany({year:'1997'},(err,doc)=>{
    //     console.log(doc)
    // })

    // db.collection('Cars').deleteOne({year:'1997'},(err,doc)=>{
    //     console.log(doc)
    // })

    // db.collection('Cars').findOneAndDelete({year:'1997'},(err,doc)=>{
    //     console.log(doc)
    // })

    db.collection('Cars').findOneAndUpdate(
        {
            name:"Steve"
        },
        {
            $set:{
                lastname:"Stevenson"
            },
            $inc:{
                age:+2
            }
        },
        {
            upsert:true,
            returnOriginal:true
        },
        (err,doc)=>{
            console.log(doc)
        }
        )



    db.close();

    // db.collection('Cars').find({year:'1997'}).skip(1).limit(1).sort({"_id":-1}).toArray().then(data=>{
    //     console.log(data)
    // });
    // db.close();

    // db.collection('Cars').find().toArray((err,docs)=>{
    //     console.log(data)
    // });
})