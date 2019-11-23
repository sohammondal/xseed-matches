const app = require('./app');
const mongodb = require('./database');

// CONNECT TO THE MONGO DATABASE
mongodb.connect(process.env.MONGODB_URI);


// START THE SERVER
const listener = app.listen(3000, () => console.log('LISTENING ON PORT', listener.address().port));