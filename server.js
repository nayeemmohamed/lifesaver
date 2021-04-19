var express = require('express');
var moment = require('moment');
var app=express()

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser1:dbuser1@cluster0.9lzkt.mongodb.net/lifesaver?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


let collectionProfiles;
client.connect(err => {
  collectionProfiles = client.db("lifesaver").collection("profiles");
  // perform actions on the collection object
  console.log('DB Connected')
  //client.close();
});


const getAllProfiles = (res)=>{
    if(collectionProfiles){
        collectionProfiles.find().toArray(function(err,result){
            if(err) throw err;
            res.send(result);
        })
    }
}


app.get("/getAllProfiles",function(req,res){
    getAllProfiles(res);
})


app.use(express.static(__dirname + '/public'));

var printMessage  = function(message){
    console.log('[Server] ' + moment().format()+' '+message)
}

var port = 8080;
app.listen(port);
printMessage("Listening on port: "+port);