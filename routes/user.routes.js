const { Router} = require('express');
const { usuariosGet,
        usuariosPut, 
        usuariosPost,
        usuariosDelete,
        usuariosPatch} = require('../controller/user.controller');

const router =  Router();




// Para mostrar
    
router.get('/', usuariosGet );

// PUT: Actaluza datos
router.put('/', usuariosPut );

//Para crear los datos o recursos
router.post('/', usuariosPost );

// Para eliminar
router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );



    
    
    



module.exports = router;