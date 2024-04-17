const asyncHandler = require('express-async-handler');
const workDoneService = require('../services/workDoneService');

// create WorkDone// @route: POST /api/workDone

const createWorkDone = asyncHandler(async (req, res) => {
  const { workDoneId, projectId, description, startTime, endTime } = req.body;

  const userId = req.user.id;

  try {
    const workDone = await workDoneService.createWorkDone(
      workDoneId,
      projectId,
      description,
      startTime,
      endTime,
      userId
    );
    res
      .status(201)
      .json({ message: 'Work done created successfully', workDone });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Work done creation failed: ' + error.message });
  }
});

// get all workDone
// @route: GET /api/workDone

const getAllWorkDone = asyncHandler(async (req, res) => {
  try {
    const workDone = await workDoneService.getAllWorkDone();
    res
      .status(200)
      .json({ message: 'Work done fetched successfully', workDone });
  } catch (error) {
    res.status(400).json({ error: 'Work done fetch failed: ' + error.message });
  }
});

// Get WorkDone by user id
// @route: GET /api/workDone/user

const getWorkDoneByUserId = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  try {
    const workDone = await workDoneService.getWorkDoneByUserId(userId);
    res
      .status(200)
      .json({ message: 'Work types fetched successfully', workDone });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Work types fetch failed: ' + error.message });
  }
});

// update workDone by id
// @route: PUT /api/workDone/:id

const updateWorkDoneById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedWorkDone = await workDoneService.updateWorkDoneById(
      id,
      updates
    );
    res.status(200).json({
      message: 'Work done updated successfully',
      workDone: updatedWorkDone,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Failed to update work done: ' + error.message });
  }
});

// delete workDone by id
// @route: DELETE /api/workDone/:id

const deleteWorkDoneById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const result = await workDoneService.deleteWorkDoneById(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Work done not found' });
    }
    res.status(200).json({ message: 'Work done deleted successfully' });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Failed to delete work done: ' + error.message });
  }
});

module.exports = {
  createWorkDone,
  getAllWorkDone,
  getWorkDoneByUserId,
  updateWorkDoneById,
  deleteWorkDoneById,
};
