const TaskModel = require("../models/task.model");
const { Router } = require("express");

const router = Router();

router.post("/list", async (request, response) => {
  try {
    const { body } = request;

    const task = await TaskModel.create(body);

    response.status(200).json({ status: "OK" });
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error });
  }
});

router.get("/list/user-id/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const list = await TaskModel.find({
      userID: id,
    });

    response.status(200).json(list);
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error });
  }
});

router.patch("/list/task-id/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { body } = request;

    const task = await TaskModel.findByIdAndUpdate(id, body);

    response.status(200).json({ status: "OK" });
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error });
  }
});

router.delete("/list/task-id/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const task = await TaskModel.findByIdAndDelete(id);

    response.status(200).json({ status: "OK" });
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error });
  }
});

module.exports = router;
