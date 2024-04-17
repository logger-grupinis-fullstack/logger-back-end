const asyncHandler = require('express-async-handler');
const workTypeService = require('../services/workTypeService');

// create WorkType
// @route: POST /api/workTypes

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

// get all workTypes
// @route: GET /api/workTypes

const getAllWorkTypes = asyncHandler(async (req, res) => {
  try {
    const workTypes = await workTypeService.getAllWorkTypes();
    res
      .status(200)
      .json({ message: 'Work types fetched successfully', workTypes });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Work types fetch failed: ' + error.message });
  }
});

// Get WorkTypes by user id
// @route: GET /api/workTypes/user

const getWorkTypesByUserId = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  try {
    const workTypes = await workTypeService.getWorkTypesByUserId(userId);
    res
      .status(200)
      .json({ message: 'Work types fetched successfully', workTypes });
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
    res
      .status(200)
      .json({
        message: 'Work type updated successfully',
        workType: updatedWorkType,
      });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Failed to update work type: ' + error.message });
  }
});

// delete any workType by workType id
// @route: DELETE /api/workTypes/:id

const deleteWorkTypeById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const result = await workTypeService.deleteWorkTypeById(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Work type not found' });
    }
    res.status(200).json({ message: 'Work type deleted successfully' });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Failed to delete work type: ' + error.message });
  }
});

module.exports = {
  createWorkType,
  getAllWorkTypes,
  getWorkTypesByUserId,
  updateWorkTypeById,
  deleteWorkTypeById,
};
