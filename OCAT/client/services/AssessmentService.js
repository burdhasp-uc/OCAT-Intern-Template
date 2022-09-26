/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import Axios from '../utils/http.config';

export class AssessmentService {
  static async submit(assessment) {
    console.log(assessment);
    try {
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      const response = await Axios.post(`/assessment/submit`, { assessment });
      return response.data;
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }


  static getList() {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.METHOD(`/assessment/list`, {
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
