/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import HttpClient from './utils/HttpClient';

class QueueEmailService {
  constructor() {
    // this.httpClient = new HttpClient('http://localhost:3001');
  }

  async addNewQueueEmail(data) {
    // return this.httpClient.post('/queues/emails', data);
    return null;
  }
}

export default new QueueEmailService();
