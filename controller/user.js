const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10)
const pool = require("../config/db")

exports.create = (req,res) =>{
  let hashedPassword = bcrypt.hashSync(req.body.password, salt);
  pool.query(`INSERT INTO users (username,email,password) VALUES('${req.body.username}','${req.body.email}','${hashedPassword}') RETURNING id,username, email,password`, (error, results) => {
      if (error) {
        res.status(200).json({
          msg:"a user not created!",
          error:true,
          success:false,
          data:error
        })
      }
      res.status(201).json({
        msg:"a user created!",
        error:false,
        success:true,
        data:results.rows[0]
      })
    })
}

exports.login = (req,res) =>{
  pool.query(`SELECT * FROM users WHERE username='${req.body.username}' OR email='${req.body.email}'`, (error, results) => {
      if (error) {
        res.status(200).json({
          msg:"login not success!",
          error:true,
          success:false,
          data:error
        })
      }
      if(bcrypt.compareSync(req.body.password, results.rows[0].password)){
        const token = jwt.sign({
          id:results.rows[0].id,
        },
      process.env.SECRET_KEY,{expiresIn: 86400})
        res.status(201).json({
          msg:"login success!",
          error:false,
          success:true,
          data:token
        })
      }else{
        res.status(201).json({
          msg:"login failed, wrong password!",
          error:true,
          success:false,
          data:[]
        })
      }
    })
}

exports.read = (req,res) =>{
    pool.query('SELECT id,username,email FROM users', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json({
          msg:"data retrieved!",
          error:false,
          success:true,
          data:results.rows
        })
      })
}

exports.readById = (req,res) =>{
    pool.query(`SELECT * FROM users WHERE id='${req.params.id}'`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json({
          msg:"a data retrieved!",
          error:false,
          success:true,
          data:results.rows
        })
      })
}

exports.updateById = (req,res) =>{
    res.status(201).send({
        msg:"User Updated!"
    })
}

exports.delete = (req,res) =>{
    res.status(201).send({
        msg:"User Deleted!"
    })
}