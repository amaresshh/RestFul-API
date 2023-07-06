const { Router } = require('express')
const controller = require('./controllers')

const router = Router()

// router.get('/', (req, res) => {
//   res.send('Running Roter.....')
// })

router.get('/', controller.getAllStudents)
router.get('/:id', controller.getStudentsByID)

router.post('/', controller.insertStudent)
router.put('/:id', controller.updateStudent)
router.delete('/:id', controller.deleteStudent)

module.exports = router
