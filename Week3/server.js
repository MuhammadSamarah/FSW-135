const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json()) 
app.use(morgan('dev')) 

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/RockTheVote');
    console.log("Connected to the DB")
}

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