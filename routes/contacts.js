import express from 'express';
const router = express.Router();

//Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
});

//Get a contact by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by ID ' + id);
});

//Create new contact
router.post('/create', (req, res) => {
    const newContact = req.body;
    res.send('New contact: ' + newContact);
});

//Update
router.put('/update/:id', (req, res) => {
    const id = req.param.id;
    const updateData = req.body;
    res.send('Contact with ID ' + id + ' updated to ' + updateData);
});

//Delete
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact with ID ' + id + ' deleted');
});


export default router;