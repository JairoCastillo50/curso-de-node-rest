const { response } = require('express');



const usuariosGet =(req, res = response) =>  {

    res.json({

        msg: 'Get API-Controller'


    });
}

  // PUT: Actaluza datos

const usuariosPut = (req, res) =>  {
    res.json({

        msg: ' PUT API-Controller'


    });
}



const usuariosPost = (req, res) =>{

    const body = req.body;
    //const {nombre, edad} = req.body; se puede sacar solo lo datos que se requieren
    res.json({

        msg: ' POST API - Controller',
        body


    });
}

const usuariosDelete =(req, res) => {
    res.json({

        msg: ' DELETE API - Controller'


    });
}


const usuariosPatch = (req, res) => {
    res.json({

        msg: ' PATCH API - Controller'


    });
}

module.exports ={

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete



}