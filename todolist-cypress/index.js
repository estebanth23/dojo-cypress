const tasks = require('./routes/tasks');
const tests = require('./routes/test');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/tasks', tasks);

if(process.env.NODE_ENV === 'test') {
    app.use('/api/test', tests);
}


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`))