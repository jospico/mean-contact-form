const contact = {};

const Contact = require('../models/contact')

contact.getContacts = async (req, res) => {
    const contacts = await Contact.find()
    res.json(contacts)
}
contact.createContact = async (req, res) => {
    const newContact = new Contact(req.body)
    
    await newContact.save()

    res.send({ message: 'Mensaje Enviado' })
}
contact.getContact = async (req, res) => {
    const contact = await Contact.findById( req.params.id )
    res.send(contact)
}
contact.editContact = async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Mensaje Actualizado" });
}
contact.deleteContacts = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({ status: "Mensaje Eliminado" });
}

module.exports = contact;