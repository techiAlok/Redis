const express = require('express');
const Redis = require('ioredis');
const mongoose = require('mongoose');


const app = express();


const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');


app.get('/redis', async (req, res)=>{
  try{
    const reply = await redis.ping();
    res.json({redis: reply});
  }catch(error){
    console.log(error);
  }
});

app.get('/mongo', async (req, res)=>{
  try{
    const url = process.env.MONGO_URL || 'mongodb://localhost:27017/redis';
    if(mongoose.connection.readyState === 0){
      await mongoose.connect(url);
    }
    res.json({mongo: 'connected', database: mongoose.connection.name});
  }catch(error){
    res.status(500).json({error: error.message});
  }
})

app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});