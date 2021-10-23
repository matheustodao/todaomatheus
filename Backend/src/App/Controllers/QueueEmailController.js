const Queue = require('../Libs/Queue');

class QueueEmailController {
  async store(request, response) {
    const data = request.body;
    if (!(data.name && data.email && data.subject && data.description)) {
      return response.status(400).json({ error: 'Fields must be filled.' });
    }
    await Queue.add(data);

    response.json({ ok: 'Send Sucess.' });
  }
}

module.exports = new QueueEmailController();
