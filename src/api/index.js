import axios from 'axios';
import { GET_HOLIDAYS } from '../constants/api';

const API_KEY = process.env.REACT_APP_API_KEY;
const request = axios.create({});

export default {
  /**
   * @param {Object} args
   * @param {string} args.startDate
   * @param {string} args.endDate
   * @returns {object} {Promise<getHolidays>}
   */
  async getHolidays(args) {
    try {
      const data = await request.post(GET_HOLIDAYS, {
        apiKey: API_KEY,
        ...args,
      });

      if (data.data.error) {
        return null;
      }

      return data.data;
    } catch (err) {
      return null;
    }
  },
};
