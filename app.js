const yargs = require('yargs');
const chalk = require('chalk');
const sendNotification = require('./src/send');
const listTemplates = require('./src/list');

const argv = yargs
  // Defining the commands exposed by our application
  .command('send', 'Send a email notification', {
    object: {
      describe: 'The object of the notification, eg: a website, a mailbox',
      demand: true,
      alias: 'O'
    },
    template: {
      describe: 'The name of the template you want to use',
      demand: true,
      alias: 'T'
    },
    dest: {
      describe: 'The recipient of the notification',
      demand: true,
      alias: 'D'
    }
  })
  .command('list', 'List all the available templates')
  .help().argv;

const command = yargs.argv._[0];

switch (command) {
  case 'send':
    sendNotification(({ object, template, dest } = argv));
    break;
  case 'list':
    const availableTemplates = listTemplates();
    console.log(chalk.yellow('--- Available templates ---'));
    for (let key in availableTemplates) {
      console.log(
        `* ${chalk.green(key)}: ${availableTemplates[key].description}`
      );
    }
    console.log(chalk.yellow('---------------------------'));
    break;
  default:
    console.log('Command not recognized');
    break;
}
