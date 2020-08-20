// script.js
window.addEventListener('load', () => {
    let buttonGetContacts = document.querySelector('#buttonGetContacts');
    let contactList = document.querySelector('#contactList')
    let inputName = document.querySelector('#inputName')
    let inputEmail = document.querySelector('#inputEmail')
    let buttonAdd = document.querySelector('#buttonAdd')

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

    buttonAdd.addEventListener('click', async () => {
        let name = inputName.value;
        let email = inputEmail.value;
        let data = { name, email };
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const text = await response.text();
        console.log(text);
    })

})
