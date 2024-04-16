const express = require('express');
const router = express.Router();

const {
  createWorkDone,
  getAllWorkDone,
  getWorkDoneByUserId,
  updateWorkDoneById,
  deleteWorkDoneById,
} = require('../controllers/workDoneController.js');
const protect = require('../middleware/authMiddleware.js');

// @ /api/workDone

router.post('/', protect, createWorkDone);
router.get('/', protect, getAllWorkDone);
router.get('/user', protect, getWorkDoneByUserId);
router.put('/:id', protect, updateWorkDoneById);
router.delete('/:id', protect, deleteWorkDoneById);

module.exports = router;
