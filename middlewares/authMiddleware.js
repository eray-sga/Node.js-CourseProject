const User = require("../models/User");

//eğer kullanıcı oturum açmadıysa logine yönlendirecek
module.exports = (req, res, next) => {
  User.findById(req.session.userID, (err, user) => {
    if (err || !user) return res.redirect("/login");
    next();
  });
};
