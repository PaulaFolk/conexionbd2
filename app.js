console.log('es una app con node');

var mysql = require('mysql2');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Decide01$',
    database: 'utn'
});

conexion.connect(function (error) {
    if (error) {
        console.log('se produjo un error en la conexión' + error.stack);
        return;
    }
    console.log('la conexión a la BD está ok');

});

conexion.query('select * from alumno', function (error,resultados) {
    if (error) {
        console.log('se produjo un error en la conexión' + error.stack);
        return;
    }

    resultados.forEach(resultado => {
        console.log(resultado);
    });
});

conexion.query('select * from empleado', function (error,resultados) {
    if (error) {
        console.log('se produjo un error en la conexión' + error.stack);
        return;
    }

    resultados.forEach(resultado => {
        console.log(resultado);
    });
});

conexion.query('select nombre, apellido from empleados', function (error,resultados) {
    if (error) {
        console.log('se produjo un error en la conexión' + error.stack);
        return;
    }

    resultados.forEach(resultado => {
        console.log(resultado);
    });
});

conexion.end();