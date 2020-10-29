const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    companyName: {
        type: String,
        required: true
      }, 
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    category: {
        type: String,
        required: true
      },
      msg: {
        type: String,
        required: true
      },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const Contact = mongoose.model('Contact', ContactSchema);
  
  module.exports = Contact;