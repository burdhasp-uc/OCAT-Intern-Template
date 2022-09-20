// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(assessment) {
    try {
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url

      return Axios.post(`/api/assessment/submit`, { assessment })
        .then(response => response.data);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

  // const BASE_URL = "/api/assessment/submit";
  // export const saveAssessment = async (assessment) => {
  //  try {
  //    const response = await axios.post(BASE_URL, assessment);
  //  } catch (err) {
  //    console.log(err);
  //  }
  // };

  static getList() {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.METHOD(`/some-url`, {
        params: {
        },
      })
        .then(response => response.data.data.assessment);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
