const { Router } = require( 'express' )
const router = Router()
const { SellGet, SellPost, SellDelete } = require( '../Controllers/Sell_Products_Controller' )

//--------- Routes ---------\\
router.get( '/list', SellGet )

router.post( '/insert', SellPost )

router.delete( '/delete/:id', SellDelete )
//--------- Routes ---------\\

module.exports = router
