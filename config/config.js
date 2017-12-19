const SENDER = '"Hitesh" hht179@gmail.com';

const TRANSPORTER_OPTIONS = {
  host: 'mail.example.com',
  port: 25,
  secure: false,
  auth: {
    user: 'USER',
    pass: 'PASSWORD'
  }
};

module.exports = {
  TRANSPORTER_OPTIONS,
  SENDER
};
