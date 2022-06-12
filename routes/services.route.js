const { Router } = require( 'express')
const { ServiceController } = require("../controllers/services.contorller")

const router = Router()

router.post('/service', ServiceController.postService)
router.get('/service', ServiceController.getService)
router.get('/service/:id', ServiceController.getServiceById)
router.get('service/doc/:id',ServiceController.getServiceDocId )


module.exports = router;