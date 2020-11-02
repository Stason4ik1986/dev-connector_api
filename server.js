const express = require('express');

const app = express();

// mongodb+srv://stas_cherednichenko:<password>@devconnector.yrto7.mongodb.net/<dbname>?retryWrites=true&w=majority
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));