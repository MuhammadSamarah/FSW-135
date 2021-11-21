const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')


commentRouter.get("/" , (req, res, next) => {
    Comment.find((err, commentsList) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(commentsList)
    })
})


commentRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) =>{
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


commentRouter.delete("/:commentId", (req,res, next) => {
    Comment.findOneAndDelete( { _id: req.params.commentId}, (err, deletedComment)  =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted comment ${deletedComment}`)
    })
})


commentRouter.put("/:commentId", (req,res, next) => {
    Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, {new: true}, (err, updatedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedItem)
    })
})


commentRouter.get('/search/byIssue', (req, res, next) =>{
    const {issue} = req.query
   
    Comment.find(
        {issue: issue},
        (err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(comments)
        }
    )
})
commentRouter.get('/search/byUser', (req, res, next) =>{
    let userId = req.user._id
    Comment.find({user : userId},
        (err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(comments)
        }
    )
})
module.exports = commentRouter