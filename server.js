const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1237;

// Middleware
app.use( (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
} )

app.use( express.static(__dirname + '/frontend') )

app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

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

// Ett RESTful API har GET+POST+PUT+DELETE
// GET /api/contact  ?id=x
app.get('/api/contact', (req, res) => {
    let id = Number(req.query.id)
    res.send( data[id] )
})
// POST /api/contact  (send contact in request body)
app.post('/api/contact', (req, res) => {
    // req.body -> { name, email }
    let newContact = { name: req.body.name, email: req.body.email };
    data.push(newContact);
    res.send('New contact added.');
})
// PUT /api/contact  (send changes in request body)
// lämnas som övning till den studerande
// DELETE /api/contact  ?id=x
// lämnas som övning till den studerande


// (error handling)


// Start server
app.listen(port, () => console.log('Server is listening on port ' + port));
