import axios from 'axios';

const BASE_URL = 'https://amgmqmmo4b.execute-api.eu-central-1.amazonaws.com/prod'; // hosted in aws_re-srp-test

export function getListings() {
  return axios(`${BASE_URL}/listings`);
}
