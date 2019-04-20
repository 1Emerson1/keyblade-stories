const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
 
module.exports = function (app) {
 
  const controller = require('../controllers/controller');
 
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
 
  app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail], controller.signup);
 
  app.post('/api/auth/signin', controller.signin);
 
  app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);

  app.get('/api/test/allUsers', controller.getUsers);

  app.post('/api/test/createUser', controller.createUser);
 
}