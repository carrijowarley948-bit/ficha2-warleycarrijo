const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use((req, res) =>{
    res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
