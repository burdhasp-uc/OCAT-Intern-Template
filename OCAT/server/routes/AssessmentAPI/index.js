/* eslint-disable no-console */
const router = require(`express`).Router();
const { ResponseHandler } = require(`../../utils`);
const { AssessmentService } = require(`../../libs`);

router.post(`/submit`, (req, res, next) => {
  try {
    const { assessment } = req.body;
    AssessmentService.submit(assessment);
    // call the submit function from the server/libs/AssessmentService
    ResponseHandler({
      message: `Successfully submitted assessment`,
      res,
    });
  } catch (error) {
    next(error);
  }
});

router.get(`/list`, async (req, res, next) => {
  try {
    // call the getList function from the server/libs/AssessmentService
    // return assessments to front-end
    const { assessments } = await AssessmentService.getList();

    ResponseHandler({
      data: { assessments },
      message: `Got all assessments to view.`,
      res,
    });

    // res.status(201).json({
    //   data: assessments,
    //   status: `success`,
    // });
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
