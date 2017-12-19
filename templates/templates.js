const mailbox_spam_en = {
  subject: 'Outgoing spam from',
  body:
    'Hi, looks like one of your mailboxes is sending out spam. Please make sure to promptly reset the password for:',
  description:
    'Suitable for sending a notification when a mailbox is sending out spam'
};

const mailbox_spam_it = {
  subject: 'Possibile spam in uscita da',
  body:
    'Sembra che la casella di posta stia facendo spam in uscita. Per favore, resetta subito la password per:',
  description:
    'Utile per notificare un utente quando una casella di posta sta inviando spam'
};

const fake_reg_en = {
  subject: 'Fake registrations on your website',
  body:
    'Hi, looks like your website is being abused by a bot: one or more contact form are not protected with a CAPTCHA. Please,consider adding one to prevent bogus registrations.',
  description:
    'Suitable for sending a notification when a website is being abused by a bot'
};

const fake_reg_it = {
  subject: 'Registrazioni fake',
  body:
    'Sembra che uno o più form di contatto presenti su questo sito web siano privi di un meccanismo di protezione. I bot possono approfittare di questa situazione eseguendo registrazioni per utenti inesistenti. Questo causa la fuoriuscita di email verso indirizzi che potrebbero non aver richiesto la registrazione. Verifica che i form di contatto sul sito siano dotati di un CAPTCHA abbastanza forte:',
  description:
    'Utile per notificare un utente quando un sito web viene abusato dai bot (registrazioni fake su Joomla)'
};

module.exports = {
  mailbox_spam_en,
  mailbox_spam_it,
  fake_reg_en,
  fake_reg_it
};
