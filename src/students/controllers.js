const pool = require('../../db')
const queries = require('./queries')

const getAllStudents = (req, res) => {
  pool.query(queries.getAllStudents, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getStudentsByID = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getStudentsByID, [id], (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const insertStudent = (req, res) => {
  const { name, email, age, dob } = req.body
  // Check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length !== 0) {
      res.send('Email Already Exists')
    } else {
      // If email does not exists add new student
      pool.query(
        queries.insertStudent,
        [name, email, age, dob],
        (error, results) => {
          if (error) throw error
          res.status(201).send('New Student inserted Successfully !!')
        },
      )
      // console.log(req)
    }
  })
}

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getStudentsByID, [id], (error, results) => {
    const noOfStudent = results.rows.length
    if (noOfStudent === 0) {
      res.send('No Student Found !!')
    } else {
      pool.query(queries.deleteStudent, [id], (error, results) => {
        if (error) throw error
        res.status(200).send(`Student with ID: ${id} deleted !!`)
      })
    }
  })
}

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getStudentsByID, [id], (error, results) => {
    const noOfStudent = results.rows.length
    // Checks whether id exists or not
    if (noOfStudent === 0) {
      res.send('No Student Found !!')
    } else {
      // If id exists then update
      const { name, email, age } = req.body
      pool.query(
        queries.updateStudent,
        [name, email, age, id],
        (error, result) => {
          if (error) throw error
          res.status(200).send(`Updation of ID ${id} completed`)
        },
      )
    }
  })
}

module.exports = {
  getAllStudents,
  getStudentsByID,
  insertStudent,
  deleteStudent,
  updateStudent,
}
