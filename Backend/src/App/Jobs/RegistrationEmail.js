const Mail = require('../Libs/Mail');

module.exports = {
  key: 'RegistrationEmail',
  handle: async ({ data }) => {
    const {
      name,
      email,
      subject,
      description,
    } = data;

    await Mail.sendMail({
      from: `${name} <${email}>`,
      to: 'Matheus Todao <todaomatheus@hotmail.com>',
      subject: `${subject}`,
      html: `${description}`,
    });
  },
};
