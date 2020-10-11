const yargs = require('yargs');
const contact = require('./contact');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        name: {
            describe: 'name of person',
            demandOption: true,
            type: 'string'   
        },
        email: {
            describe: 'email address',
            demandOption: true,
            type: 'string'
        },
        phone: {
            describe: 'phone number',
            demandOption: true,
            type: 'number'
        }
    },  
    handler: (argv) => {
        contact.addContact(argv.name, argv.email, argv.phone);
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        name: {
            describe: 'Remove contact',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
       contact.removeContact(argv.name)
    }
})

// Create a list command
yargs.command({
    command: 'list',
    describe: 'Listing of note',
    handler: () => {
        contact.listContact();
    }
})


// Create a read command
yargs.command({
    command: 'read',
    describe: 'Read a contact',
    builder: {
        name: {
            describe: 'Read contact',
            demmandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        contact.readContact(argv.name)
    }
})


yargs.parse();


