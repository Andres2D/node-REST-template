const { Router } = require('express');
const router = Router();

const { 
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
} = require('../controllers/user');

router.get('', usersGet);          
router.put('', usersPut);         
router.post('', usersPost);   
router.delete('', usersDelete);          
router.patch('', usersPatch);          

module.exports = router; 