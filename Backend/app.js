const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const emailcheck = (req, res, next) => {
    console.log("emailcheck middleware called");
  if(!req.body.email){
    return res.status(400).json({
        error: 'Email is required'
    })
  }else{
    next();
  }
};

const passwordcheck = (req, res, next) => {
    console.log("passwordcheck middleware called");
  if(!req.body.password){
    return res.status(400).json({
        error: 'Password is required'
    })
    }else{
        next();
    }
};


app.post('/login', emailcheck , passwordcheck, (req,res) => {
    res.send('Login successful');
})


app.listen(port, () => { console.log("server running succesfully") });