const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json()) 
app.use(morgan('dev')) 

//Conect DB
mongoose.connect('mongodb+srv://voter-1:Kibeth13!@cluster0.pvl01.mongodb.net/RockTheVote',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  ()=> console.log("Connected to the DB")
)

app.use("/auth", require("./routes/authRouter.js"));
app.use('/issue', require("./routes/issueRouter"));
app.use('/comment', require("./routes/commentRouter"));
app.use('/user', require("./routes/userRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => { 
    console.log("The App is listening on port 9000")
});