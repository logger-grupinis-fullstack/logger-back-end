const express = require('express')
const router = express.Router()

const {
    createWorkType,
    getWorkTypes,
    getAllWorkTypes,
    updateWorkType,
    deleteWorkType,
} = require('../controllers/workTypeController.js')
const protect = require('../middleware/authMiddleware.js')

router.post('/', protect, createWorkType)
router.get('/:id/all', protect, getWorkTypes)
router.get('/all', protect, getAllWorkTypes)
router.put('/:id', updateWorkType)
router.delete('/:id', deleteWorkType)

module.exports = router