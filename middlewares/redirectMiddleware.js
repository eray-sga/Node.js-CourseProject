
//eğer kullanıcı oturum açtysa login ve registera dönemeyecek
module.exports = (req, res, next) => {
  if(req.session.userID){
      return res.redirect('/')
  }
  next()
};
