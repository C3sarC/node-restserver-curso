////////////Puerto/////////////

process.env.PORT = process.env.PORT || 3000;


////////////Entorno/////////////
process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';


////////////BaseDeDatos/////////////
//local: mongodb://localhost:27017/cafe
//remoto: mongodb+srv://adminCC:qfcWg67vS6EjBTwr@cluster0-s0zir.mongodb.net/test

let urlDB = process.env.NODE_ENV === 'DEV' ? 'mongodb://localhost:27017/cafe' : 'mongodb+srv://adminCC:qfcWg67vS6EjBTwr@cluster0-s0zir.mongodb.net/test';

process.env.URLDB = urlDB;