const jwt = require("jsonwebtoken");
require("dotenv").config();
const Auth = async (req, res, next) => {

  try {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.ADMIN_LOGIN_SECRET_KEY, (err, decode) => {
          if (decode){

            next();
          }  
            
         else res.send({ message: "error accurse" });
        });
      
    } else {
      res.status(200).send({ message: "You are not authorized" });
    }
  } catch (error) {
    res.send({ message: "there is something wrong" });
  }
};

module.exports = {
  Auth,
};
