const asyncHandler = require('express-async-handler');
const workDoneService = require('../services/workDoneService');

// create WorkDone// @route: POST /api/workDone

const createWorkType = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const userId = req.user.id;

  try {
    const workType = await workTypeService.createWorkType(
      name,
      description,
      userId
    );
    res
      .status(201)
      .json({ message: 'Work type created successfully', workType });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Work type creation failed: ' + error.message });
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

// update workType by id
// @route: PUT /api/workTypes/:id

const updateWorkTypeById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedWorkType = await workTypeService.updateWorkTypeById(
      id,
      updates
    );
    res.status(200).json({
      message: 'Work type updated successfully',
      workType: updatedWorkType,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Failed to update work type: ' + error.message });
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
