require('dotenv/config');

const Queue = require('./App/Libs/Queue');
const RegistrationEmail = require('./App/Jobs/RegistrationEmail');

Queue.process(RegistrationEmail.handle);
