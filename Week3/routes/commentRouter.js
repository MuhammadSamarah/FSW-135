const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')


commentRouter.get("/", (req, res, next) => {
  Comment.find((err, commentsList) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(commentsList)
  }
)})



commentRouter.post("/", (req, res, next) => {
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})



commentRouter.get("/:commentId", (req, res, next) => {
  Comment.findOne({_id: req.params.commentId}, (err, foundComment) => {
    if(err){ 
      res.status(500)
      return next(err)
    }
    return res.status(200).send(foundComment)
})
})




commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete( {_id: req.params.commentId}, (err, deletedComment) => {
    if(err){ 
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted comment from ${deletedComment.user} on ${deletedComment.issue} from the database`)
  })
})
 


commentRouter.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, {new: true}, (err, updatedItem) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(updatedItem)
  })
})


commentRouter.get('/search/byIssue', (req, res, next)=>{
    const {issue} = req.query
    const pattern = new RegExp(issue)
    Comment.find(
      {issue: {$regex: pattern, $options: 'i'} },
      (err, comments) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(comments)
      }
    )
  })


module.exports = commentRouter