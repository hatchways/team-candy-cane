const User = require("../models/User");
const Sitter = require("../models/Sitter");
const Request = require("../models/Request");

const asyncHandler = require("express-async-handler");

// @route POST /request/creat
exports.createRequest = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { sitterId } = req.params.sitterId;
  const { start, end } = req.body;

  try {
    const validateSchema = Joi.object({
      start: Joi.string().required(),
      end: Joi.string().required(),
    });

    const validateResult = await validateSchema.validate(req.body);

    if (validateResult.error) {
      return res.status(404).json({
        msg: validateResult.error.details[0].message,
      });
    }

    //check for existing owner
    const existingUser = await User.findOne({
      _id: userId,
    });
    if (!existingUser) {
      res.status(404);
      throw new Error("User doesn't exist");
    }

    //check for existing sitter
    const existingSitter = await Sitter.findOne({
      _id: sitterId,
    });
    if (!existingSitter) {
      return res.status(404).json({
        message: "Sitter does not exist!",
      });
    }

    const request = Request.create({
      user: userId,
      sitter: sitterId,
      start: new Date(start),
      end: new Date(end),
    });
  } catch (err) {
    res.status(400).json({
      msg: "something went wrong.. try again",
    });
  }
});
