const asyncHandler = require("express-async-handler");

// create WorkType
// @route: POST /api/workTypes

const createWorkType = asyncHandler(async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400).json({
        success: false,
        error: "Please provide both name and description.",
      });
      return;
    }

    const workType = await WorkType.create({
      name: name,
      description: description,
      user: req.user._id,
    });

    req.user.workTypes.push(workType._id);
    await req.user.save();

    res.status(201).json({ success: true, data: workType });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// update workType by id
// @route: PUT /api/workTypes/:id

const updateWorkType = async function (req, res) {
  try {
    const workType = await WorkType.findById(req.params.id);
    if (!workType) {
      res.status(404).json({ success: false, error: "Work type not found." });
      return;
    }

    if (req.body.name) {
      workType.name = req.body.name;
    }
    if (req.body.description) {
      workType.description = req.body.description;
    }

    const result = await workType.save();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// delete any saving by saving ID
// @route: DELETE /api/workTypes/:id

const deleteWorkType = async function (req, res) {
  try {
    const workType = await WorkType.findById(req.params.id);
    if (!workType) {
      res.status(404).json({ success: false, error: "Work type not found." });
      return;
    }
    const result = await WorkType.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { createWorkType, updateWorkType, deleteWorkType };
