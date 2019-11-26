////////////Puerto/////////////

process.env.PORT = process.env.PORT || 3000;


////////////Entorno/////////////
process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';


////////////Expira/////////////
process.env.EXPIRA_TOKEN = 60 * 60 * 60 * 60;

////////////Semilla/////////////

process.env.SEMILLA = process.env.NODE_ENV === 'DEV' ? 'secret' : process.env.SEMILLA_PROD;

////////////BaseDeDatos/////////////
//local: mongodb://localhost:27017/cafe

process.env.URLDB = process.env.NODE_ENV === 'DEV' ? 'mongodb://localhost:27017/cafe' : process.env.MONGO_URI;