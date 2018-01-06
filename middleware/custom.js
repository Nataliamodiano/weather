// middleware to lowercase the users input
function lowerCase(req, res, next) {
  var address = req.query.address.toLowerCase();
  req.query.address = address;
  console.log("To Lowercase", address);
  next();
}

module.exports = { lowerCase }