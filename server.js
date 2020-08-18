const express = require('express');
const app = express();
const port = 1237;

// Middleware
app.use( express.static(__dirname + '/frontend') )

// Routes

// (error handling)


// Start server
app.listen(port, () => console.log('Server is listening on port ' + port));
