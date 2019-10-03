const express = require("express")
const userRouter = require("./users/userRouter")
const postRouter = require('./posts/postRouter')
const Posts = require("./posts/postDb")
const Users = require("./users/userDb")

const {
  handleErrors,
  validateUserId,
  validatePost
} = require("./middleware/index")

const server = express()

server.use("/", express.json(), logger, userRouter)
server.use('/:id/posts', postRouter)

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} to ${req.path} at ${Date.now()} `)

  next()
}

module.exports = server
