const express = require('express')
const cors = require('cors'); 





class Server{


        constructor(){

            this.app = express();
            this.port = process.env.PORT;
            this.middlewares();
            this.usuariosPath = '/api/usuarios';
            this.routes();

        }

        routes(){

            // Para mostrar

            this.app.use(this.usuariosPath, require('../routes/user.routes'));
            /*
            this.app.get(this.usuariosPath, '../routes/user.routes' );

            // PUT: Actaluza datos
            this.app.put('/', );

            //Para crear los datos o recursos
            this.app.post('/', );

            // Para eliminar
            this.app.delete('/', );
            
            this.app.patch('/',  );
            */

        }
        
        middlewares(){

            // Cors

            this.app.use(cors());

            // Lectura y paseo del Body - cualquier informacion la serializa o pasa a formato JSON 

            this.app.use(express.json ());

          //Directorio publico
          
          this.app.use(express.static('public'));
          

        }



      listen(){

        this.app.listen (this.port, () =>{

            console.log('Servidor corriendo en puerto:',`${this.port}` )
        });

    }




}

module.exports = Server