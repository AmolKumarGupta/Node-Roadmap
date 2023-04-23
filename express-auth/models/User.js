const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(SALT_FACTOR, function (saltErr, salt) {
      if (saltErr) {
        return next(saltErr);
      } else {
        bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) {
            return next(err);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    return callback(isMatch);
  });
};

module.exports = new mongoose.model("User", UserSchema);
