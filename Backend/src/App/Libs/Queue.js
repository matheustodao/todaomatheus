const Queue = require('bull');
const redisConfig = require('../../configs/redis');

const { RegistrationEmail } = require('../Jobs/index');

const emailQueue = new Queue(RegistrationEmail.key, { redis: redisConfig });

module.exports = emailQueue;
