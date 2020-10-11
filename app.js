const fs = require('fs');

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
        
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
       
    }
})

// Create a list command
yargs.command({
    command: 'list',
    describe: 'Listing of note',
    handler: () => {
        
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
      
    }
})

yargs.parse();


