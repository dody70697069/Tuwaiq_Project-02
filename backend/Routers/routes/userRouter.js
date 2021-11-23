const express = require("express");
const userRouter = express.Router();
const {getUser,getAllUser,updateUser,addNewUser, loginUser} = require("../controllers/user");

const { user } = require("./data");
userRouter.get('/',getAllUser);
userRouter.get('/:id',getUser);
userRouter.post('/',addNewUser);
userRouter.post('/login', loginUser);
userRouter.put('/user',updateUser);
module.exports={userRouter};
