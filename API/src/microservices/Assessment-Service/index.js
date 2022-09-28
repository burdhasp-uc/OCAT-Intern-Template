/* eslint-disable no-console */
/* eslint-disable require-await */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-keys */
const { submit } = require(`../../../../OCAT/server/libs/AssessmentService`);
/* eslint-disable no-unused-vars */
const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {

  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  Assessments.forge({
    cat_name: assessment.data.name,
    cat_date_of_birth: assessment.data.date,
    score: assessment.score,
    risk_level: assessment.riskLevel,
    created_at: assessment.createdAt,
  }).save(); };

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
