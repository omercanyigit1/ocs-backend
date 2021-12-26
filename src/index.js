const express = require('express');
require('./db/mongoose');
const cors = require('cors');

const athletesRouter = require('./routers/Athlete');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(athletesRouter);

app.listen(port, () => {
    console.log('Server is running... ' +port);
});
