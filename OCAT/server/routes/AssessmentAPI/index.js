/* eslint-disable sort-keys */
const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);

router.post(`/submit`, (req, res, next) => {
  try {
    const { assessment } = req.body;
    // call the submit function from the server/libs/AssessmentService
    AssessmentService.submit(assessment);
    res.status(201).json({
      status: `success`,
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get(`/list`, (req, res, next) => {
  try {
    // call the getList function from the server/libs/AssessmentService
    // return assessments to front-end
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
