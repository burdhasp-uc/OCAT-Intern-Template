import axios from 'axios';
import Axios from '../utils/http.config';

export class AssessmentService {
  static async submit(assessment) {
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


  static async getList() {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      const response = await axios.get(`/assessment/list`);
      return response.data;
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
