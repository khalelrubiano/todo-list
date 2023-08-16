const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/note');
const cors = require('cors'); // Import the cors package

//express app
const app = express();

// Use the port specified in the environment variable 'PORT', or default to 3000
const port = /*process.env.PORT ||*/ 5000;

// Middleware to parse JSON data from the request body
app.use(express.json());
app.use(cors());

//mongodb connect to application string
const dbURI = 'mongodb+srv://jkarubiano:KZ9yLI2bgafHIeXW@tdms.s2g1mfj.mongodb.net/tdms?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((result) => {
        console.log('connected to db');
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    })
    .catch((err) => console.log(err));

//RETRIEVE DATA FROM DATABASE
// app.get('/api/items', async (req, res) => {
//     try {
//         const items = await Note.find(); // Fetch all items from the collection
//         res.json(items); // Send the retrieved items as the JSON response
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


app.get('/add-note', (req, res) => {

    const note = new Note({
        title: 'Grocery',
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ex ipsum exercitationem dolorum quidem earum saepe officiis quisquam quae tempore voluptate velit consequuntur, unde consectetur nam nostrum facilis quo necessitatibus?',
    });

    note.save()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
});













// const ride = new Promise((resolve, reject) => {
//     if (false) {
//         resolve('SUCCESS');
//     } else {
//         reject('FAILED');
//     }
// });

// ride.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });






