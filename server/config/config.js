////////////Puerto/////////////

process.env.PORT = process.env.PORT || 3000;


////////////Entorno/////////////
process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';


////////////BaseDeDatos/////////////
//local: mongodb://localhost:27017/cafe

let urlDB = process.env.NODE_ENV === 'DEV' ? 'mongodb://localhost:27017/cafe' : process.env.MONGO_URI;

process.env.URLDB = urlDB;