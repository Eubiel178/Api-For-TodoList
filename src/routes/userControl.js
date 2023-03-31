const { Router } = require("express");
const UserModel = require("../models/user.model");

const router = Router();

router.post("/users", async (request, response) => {
  try {
    const { email, password, password_confirmation } = request.body;

    const allUser = await UserModel.find();

    const checkAlreadyExists = allUser.filter((element) => {
      if (element.email === email) {
        return element;
      }
    });

    if (checkAlreadyExists.length > 0) {
      response.status(400).json({
        status: "ERROR",
        message: "There is already a user with this email",
      });
    } else if (password === password_confirmation) {
      const { body } = request;
      await UserModel.create(body);

      response.status(200).json({ status: "OK" });
    } else {
      response.status(400).json({
        status: "ERROR",
        message:
          "Check that the password field is the same as password_confirmation",
      });
    }
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error.msg });
  }
});

router.post("/authenticate", async (request, response) => {
  try {
    const { body } = request;
    const user = await UserModel.find(body);

    if (user.length > 0) {
      response.status(200).json({ _id: user[0]._id });
    } else {
      response
        .status(400)
        .json({ status: "ERROR", error: "Incorrect email or password" });
    }
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error.msg });
  }
});

router.patch("/users/:id", async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const { id } = request.params;
    const { body } = request;

    await UserModel.findByIdAndUpdate(id, body);

    response.status(200).json({ status: "OK" });
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error.msg });
  }
});

router.get("/users/:id", async (request, response) => {
  try {
    const user = await UserModel.findById(request.params.id);
    if (user.name) {
      const userData = {
        name: user.name,
        email: user.email,
        _id: user._id,
        img: user.img,
      };

      response.status(200).json(userData);
    }
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error.msg });
  }
});

router.delete("/users/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const user = await UserModel.findByIdAndDelete(id);

    response.status(200).json({ status: "OK" });
  } catch (error) {
    response.status(500).json({ status: "ERROR", error: error.msg });
  }
});

module.exports = router;
