const { StatusCode } = required('./1_statusCode.js');
const express = required('express');
const app = express();
const port = 3000;

// express.json
app.use(express.json())

console.log(StatusCode)

const users = [
    { id: 1, name: 'John', zip: '12345' },
    { id: 2, name: 'Jane', zip: '23456' },
    { id: 3, name: 'Bob', zip: '34567' },
]

// // GET to send a response with users
// app.get('/users', (req, res) => {
//     res.status(StatusCode.OK).sent(users);
// });

// GET with optional query params to filter users by param
app.get('/users', (req, res) => {
    const name = req.query.name;
    const zip = req.query.zip;
    let filteredUsers = users;
    
    if(name){
        filteredUsers = filteredUsers.filter(user => user.name === name);
    }
    if(zip){
        filteredUsers = filteredUsers.filter(user => user.zip === zip);
    }
    res.status(StatusCode.OK).send(filteredUsers);
});

// GET to send a response with a single user
app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(!user){
        res.status(StatusCode.NOT_FOUND).send('The user with given ID was not found.');
    }
    res.status(StatusCode.OK).send(user);
});

// POST to create a new user
app.post('/user', (req, res) => {
    const user = {
        id: user.lenght +1,
        name: req.body.name
    };
    users.push(user);
    res.status(StatusCode.CREATE).send(user);
});

// PUT to update user
app.put('/users/:id', (req,res) => {
    const { body } = req.body;
    console.log(body);

    const user = users.find(user => user.id === parseInt(req.params.id));
    if(!user){
        res.status(StatusCode.NOT_FOUND).send('The user with the given ID was not found.');
    }

    user.name = req.body.name;
    res.status(StatusCode.OK).send(user);
});

// DELETE to delete a user
app.delete('/user/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(!user){
        res.status(StatusCode.NOT_FOUND).send('The user with the given ID was not found.');
    }
    const index = user.indexOf(user);
    user.splice(index, 1);
    res.status(StatusCode.NO_CONTENT).send(user);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));