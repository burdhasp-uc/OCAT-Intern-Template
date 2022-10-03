const ResponseHandler = ({ res, message, data = {} }) => {
  res.json({
    data,
    message,
    status: `SUCCESS`,
  });
};

module.exports = { ResponseHandler };
