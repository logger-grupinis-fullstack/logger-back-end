const asyncHandler = require("express-async-handler");
const WorkTypeService = require("../services/workTypeService");

const workTypeService = new WorkTypeService();

const createWorkType = asyncHandler(async (req, res) => {
  try {
    const { name, description } = req.body;
    const userId = req.user._id;

    const workType = await workTypeService.createWorkType(
      name,
      description,
      userId,
    );
    req.user.workTypes.push(workType._id);
    await req.user.save();

    res.status(201).json(workType);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

const getWorkTypes = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const workTypes = await workTypeService.getWorkTypesByUserId(userId);
    res.status(200).json({ success: true, data: workTypes });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

const getAllWorkTypes = asyncHandler(async (req, res) => {
  try {
    const workTypes = await workTypeService.getAllWorkTypes();
    res.status(200).json({ success: true, data: workTypes });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

const updateWorkType = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const result = await workTypeService.updateWorkTypeById(id, updates);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

const deleteWorkType = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await workTypeService.deleteWorkTypeById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = {
  createWorkType,
  getWorkTypes,
  getAllWorkTypes,
  updateWorkType,
  deleteWorkType,
};
