const express = require("express");
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');

app.use(express.json()); 
app.use(morgan('dev')) ;


mongoose.connect('mongodb+srv://voter-1:Kibeth13!@cluster0.pvl01.mongodb.net/RockTheVote',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  ()=> console.log("Connected to the DB")
);

app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}));
app.use('/auth', require("./routes/authRouter.js"));
app.use('/api/issue', require("./routes/issueRouter"));
app.use('/api/comment', require("./routes/commentRouter"));
app.use('/api/user', require("./routes/userRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
    if(err.name === "Unauthorized Error"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
});

app.listen(9000, () => { 
    console.log("The App is listening on port 9000")
});