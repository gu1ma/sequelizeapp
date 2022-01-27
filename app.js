const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./database/models')

app.get('/', (req, res) => {
    return res.send({ server: 'running' })
});

app.get('/create-user', async (req, res) => {
    //console.log('db', db['User'].create());
    const User = db['User'];

    try {
        const newUser = await User.create({
            username: 'jose@2022',
            email: 'jose@gmail.com',
            password: '654321',
            birthDate: '1990-12-12'
        })
        return res.send({ 'newUser': newUser});
    } catch (e) {
        console.log(e.message);
        return res.send({ 'Error': e.message});
    }
});

app.get('/list-users', async (req, res) => {
    const User = db['User'];
    const Users = await User.findAll();
    
    return res.send(Users);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))