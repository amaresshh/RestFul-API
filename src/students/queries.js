const getAllStudents = 'SELECT * FROM students'
// $1 is like a variable thing
const getStudentsByID = 'SELECT * FROM students WHERE ID = $1'
const insertStudent =
  'INSERT INTO students (name, email, age, dob) values ($1, $2, $3, $4)'
const checkEmailExists = 'SELECT s FROM students s WHERE s.email = $1'
const deleteStudent = 'DELETE FROM students WHERE ID = $1'
const updateStudent =
  'UPDATE students SET name =  $1, email = $2, age = $3 WHERE id = $4'

module.exports = {
  getAllStudents,
  getStudentsByID,
  insertStudent,
  checkEmailExists,
  deleteStudent,
  updateStudent,
}
