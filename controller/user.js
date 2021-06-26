const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const pool = require("../config/db")

exports.create = (req,res) =>{

    pool.query(`INSERT INTO users (username,email,password) VALUES('${req.body.username}','${req.body.email}','${req.body.password}') RETURNING id, username, email`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).json(results.rows)
      })
}

exports.read = (req,res) =>{
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
}

exports.readById = (req,res) =>{
    pool.query(`SELECT * FROM users WHERE id='${req.params.id}'`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
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