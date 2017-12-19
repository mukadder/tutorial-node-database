const nodemailer = require('nodemailer');
const chalk = require('chalk');
const { TRANSPORTER_OPTIONS, SENDER } = require('../config/config');

function mailer(options) {
  let transporter = nodemailer.createTransport(TRANSPORTER_OPTIONS);
  // Append the sender address
  options.from = SENDER;
  // Send the message
  transporter.sendMail(
    options,
    (error, info) =>
      error
        ? console.err(chalk.red('Error!'))
        : console.log(
            `${chalk.green('Message sent!')}\n${chalk.yellow('Recipient: ')} ${
              options.to
            }`
          )
  );
}

module.exports = mailer;
