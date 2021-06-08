const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send({ message: 'Running'});
// });

app.listen(3001, () => {
    console.log('listening on port 3001');
});