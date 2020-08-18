// script.js
window.addEventListener('load', () => {
    let buttonGetContacts = document.querySelector('#buttonGetContacts');
    let contactList = document.querySelector('#contactList')

    buttonGetContacts.addEventListener('click', async () => {
        // send request to backend - to get all contacts
        // create DOM elements to show the contacts on the page
        const response = await fetch('/api/contacts', { method: 'GET' });
        const object = await response.json();  // motsvarar JSON.parse

        console.log('Fetch returned:', object);
        contactList.innerHTML = '';
        object.forEach(contact => {
            let li = document.createElement('li');
            li.innerHTML = `${contact.name} - ${contact.email}`;
            contactList.appendChild(li)
        })
    })
})
