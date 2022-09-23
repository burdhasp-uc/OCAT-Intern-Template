/* eslint-disable no-unused-vars */
/* eslint-disable sort-keys */
/* eslint-disable sort-destructure-keys/sort-destructure-keys */
const { submit } = require(`../../../../OCAT/server/libs/AssessmentService`);
const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
};

function calculateScore(assessmentData) {
  const {
    altercations,
    previousContact,
    ownerAltercation,
    playWellDogs,
    hissesStrangers,
  } = assessmentData;

  const score = altercations + previousContact + ownerAltercation + playWellDogs + hissesStrangers;
  return score;
}

function calculateRiskLevel(assessmentData) {
  let riskLevel = ``;
  const { score } = assessmentData;

  if (score <= 1) { riskLevel = `low`; }
  else if (score > 1 && score < 4) { riskLevel = `medium`; }
  else { riskLevel = `high`; }

  return riskLevel;
}
async function passAssessment(data) {
  const assessment = prepareData(data);

  savedAssessment = await newAssessments(assessment);

  return savedAssessment;
}

function newAssessments(assessment) {
  return Assessments.forge({
    cat_name: assessment.name,
    cat_date_of_birth: assessment.birthday,
    instrument: assessment.instrument,
    score: assessment.score,
    risk_level: assessment.riskLevel,
  }).save();
}

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};

module.exports = { passAssessment };
