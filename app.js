const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer.js');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.desc);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {

            console.log('====Listado de tareas===='.green);
            console.log('Descripción: ', tarea.descripcion);
            console.log('Estado     : ', tarea.completado);
            console.log('========================='.green);

        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.desc, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.desc);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido');
}