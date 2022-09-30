const ResponseHandler = ({ res, message, data = {}, next }) => {
  res.json({
    data,
    message,
    status: `SUCCESS`,
  });

  next();
};

module.exports = { ResponseHandler };
