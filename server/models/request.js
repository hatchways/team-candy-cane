const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },

    sitter: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "sitter",
    },
    start: {
      type: mongoose.SchemaTypes.Date,
      required: true,
    },
    end: {
      type: mongoose.SchemaTypes.Date,
      required: true,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    declined: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = Request = mongoose.model("Request", requestSchema);
