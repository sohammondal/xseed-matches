const app = require('./app');
const mongodb = require('./database');

// CONNECT TO THE MONGO DATABASE
mongodb.connect(process.env.MONGODB_URI);


// START THE SERVER
const listener = app.listen(process.env.PORT || 3000, () => console.log('\x1b[32m%s\x1b[0m', 'LISTENING ON PORT', listener.address().port));