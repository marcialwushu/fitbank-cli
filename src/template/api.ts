export const api = `
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.BASEURL,
  headers: {
    'Authorization': 'Bearer'+ \$\{ localStorage.getItem('tokenAccess')\}\'
  }
})`