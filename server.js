const express = require('express');
const app = express();
const port = 1237;

// Middleware
app.use( express.static(__dirname + '/frontend') )

// Data (ska hämtas från databas i normala fall)
// Person-objekt: { name, email }
let data = [
    { name: 'Nisse', email: 'nisse@exempel.se' },
    { name: 'Anna', email: 'ananas@exempel.se' }
];

// Routes
// GET /api/contacts -> ska returnera alla kontakter
app.get('/api/contacts', (req, res) => {
    res.send(data);
})

// TODO: lägg till flera routes, för GET/POST/PUT/DELETE


// (error handling)


// Start server
app.listen(port, () => console.log('Server is listening on port ' + port));
