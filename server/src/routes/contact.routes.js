const { Router } = require('express')
const router = Router()

const contact = require('../controllers/contact.controller.js')

router.get("/", contact.getContacts);
router.post("/", contact.createContact);
/*router.get("/:id", contact.getContact);
router.put("/:id", contact.updateContact);
router.delete("/:id", contact.deleteContact);*/

module.exports = router;