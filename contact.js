const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// Read Contact by name
const readContact = (name) => {
    const contacts = loadContacts();
    const readContact = contacts.find(contact => contact.name === name);

    if(!readContact)
    {
        console.log(chalk.bgRed('No Contact Found!'));
    }
    else
    {
        console.log(`${chalk.yellow('Name:')} ${chalk.blue.inverse(readContact.name)}`);
        console.log(`${chalk.yellow('Email:')} ${chalk.yellow.inverse(readContact.email)}`);
        console.log(`${chalk.yellow('Phone:')} ${chalk.magenta.inverse(readContact.phone)}`);
    }
}

// Add Contact
const addContact = (name, email, phone) => {
    const contacts = loadContacts();

    if(!validator.isEmail(email))
    {
        console.log(chalk.red.inverse('Email is not valid!'))
    }
    else
    {
        const duplicatePhone = contacts.find(contact => contact.phone === phone);
        const duplicateEmail = contacts.find(contact => contact.email === email);
    
        if(!duplicatePhone && ! duplicateEmail)
        {
            contacts.push({ 
                name: name, 
                email: email, 
                phone: phone 
            });
        
            storeContact(contacts);
            console.log(chalk.green.inverse('New contact has been Added!'));
        } 
        else 
        {
            console.log(chalk.red.inverse('This Person is already in the contacts!'))
        }
    }
}

// Store contact
const storeContact = (contacts) => {
    const dataJSON = JSON.stringify(contacts)
    fs.writeFileSync('contacts.json', dataJSON);
}

// Remove contact
const removeContact = (name) => {
    const contacts = loadContacts();

    const contactsToKeep = contacts.filter((contact) => contact.name !== name);

    if(contacts.length > contactsToKeep.length)
    {
        storeContact(contactsToKeep);
        console.log(chalk.green.inverse('Contact has been removed!'))
    }
    else
    {
        console.log(chalk.red.inverse('No Contact Found!'))
    }
}

// Contact list
const listContact = () => {
    const contacts = loadContacts();

    console.log(chalk.yellow.inverse(`Your Contacts total of : ${contacts.length}`));

    contacts.forEach(contact => {
        console.log(chalk.green.inverse(contact.name));
    })
}


// Load contacts
const loadContacts = () => {
    try 
    {
        const dataBuffer = fs.readFileSync('contacts.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } 
    catch (e) 
    {
        return [];
    }
}

module.exports = {
    addContact: addContact,
    listContact: listContact,
    removeContact: removeContact,
    readContact: readContact
}
