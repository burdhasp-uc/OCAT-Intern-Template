/* eslint-disable no-console */
/* eslint-disable sort-keys */
/* eslint-disable sort-keys */
const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);
const router = require(`express`).Router();

router.post(`/submit`, (req, res, next) => {
  try {
    const { assessment } = req.body;
    AssessmentService.submit(assessment);
    // call the submit function from the server/libs/AssessmentService
    res.status(201).json({
      status: `success`,
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    next(error);
    console.log(`error`);
  }
});

router.get(`/list`, (req, res, next) => {
  try {
    // AssessmentService.getList(assessments);
    // call the getList function from the server/libs/AssessmentService
    // return assessments to front-end
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
