const errObj = (code, message) => ({ code, message });

const errMid = (err, _req, res, _next) => {
  // console.log(err);
  if (err) {
    return res.status(err.code || 500).json(err.message);
    }
  // next();
}

module.exports = { errMid, errObj };
