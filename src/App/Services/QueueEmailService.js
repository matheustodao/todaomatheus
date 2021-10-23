import HttpClient from './utils/HttpClient';

class QueueEmailService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async addNewQueueEmail(data) {
    return this.httpClient.post('/queues/emails', data);
  }
}

export default new QueueEmailService();
