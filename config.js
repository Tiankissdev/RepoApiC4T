const mongoose = require ("mongoose");
const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/users_prueba");
        console.log("Conexion Exitosa");
    } catch (error) {
        console.error("Error de conexion a la base de datos", error)
    }
};

module.exports = dbconnect