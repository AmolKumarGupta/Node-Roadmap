const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("User", UserSchema);
