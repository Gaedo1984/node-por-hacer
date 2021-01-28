const opcCrear = {

    desc: {
        demand: true,
        alias: 'd'
    }
}

const opcAct = {

    desc: {
        demand: true,
        alias: 'd'
    },

    completado: {
        default: true,
        alias: 'c'
    }

}

const opcBorrar = {

    desc: {
        demand: true,
        alias: 'd'
    }

}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opcCrear)
    .command('actualizar', 'Actualiza una tarea por hacer', opcAct)
    .command('borrar', 'Borrar tarea', opcBorrar)
    .help()
    .argv;

module.exports = {

    argv
};