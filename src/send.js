const mailer = require('./mailer');
const templates = require('../templates/templates');
const reverseAddr = require('./reverseAddr');

async function sendNotification(options) {
  options.host = await reverseAddr(options.object);
  let templateToSend = templates[options.template];
  let mailOptions = {
    to: options.dest,
    subject: `${templateToSend.subject}: ${options.object} on ${options.host}`,
    text: `${templateToSend.subject}: ${options.object} on ${options.host} ${
      templateToSend.body
    } ${options.object} on ${options.host}`,
    html: `${templateToSend.subject}: <strong>${
      options.object
    }</strong> on <strong>${options.host}</strong><br><br>
     ${templateToSend.body} <strong>${options.object}</strong> on <strong>${
      options.host
    }</strong>`
  };
  mailer(mailOptions);
}

module.exports = sendNotification;
