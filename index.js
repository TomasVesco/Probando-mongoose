import mongoose from 'mongoose';
import * as model from './models/estudiantes.js';

CRUD()

async function CRUD() {
    try {

        const URL = 'mongodb://localhost:27017/colegio';
        await mongoose.connect(URL);

        console.log('Base de datos conectada');     

        const estudiantes = [
            {
                nombre: 'Pedro',
                apellido: 'Mei',
                edad: 21,
                dni: '31155898',
                curso: '1A',
                nota: 7
            },            
            {
                nombre: 'Ana',
                apellido: 'Gonzalez',
                edad: 32,
                dni: '27651878',
                curso: '1A',
                nota: 8
            },            
            {
                nombre: 'José',
                apellido: 'Picos',
                edad: 29,
                dni: '34554398',
                curso: '2A',
                nota: 6
            },            
            {
                nombre: 'Lucas',
                apellido: 'Blanco',
                edad: 22,
                dni: '30355874',
                curso: '3A',
                nota: 10
            },            
            {
                nombre: 'María',
                apellido: 'García',
                edad: 36,
                dni: '29575148',
                curso: '1A',
                nota: 9
            },            
            {
                nombre: 'Federico',
                apellido: 'Perez',
                edad: 41,
                dni: '320118321',
                curso: '2A',
                nota: 5
            },            
            {
                nombre: 'Tomas',
                apellido: 'Sierra',
                edad: 19,
                dni: '38654790',
                curso: '2B',
                nota: 4
            },            
            {
                nombre: 'Carlos',
                apellido: 'Fernandéz',
                edad: 33,
                dni: '26935670',
                curso: '3B',
                nota: 2
            },            
            {
                nombre: 'Fabio',
                apellido: 'Pieres',
                edad: 39,
                dni: '4315388',
                curso: '1B',
                nota: 9
            },            
            {
                nombre: 'Daniel',
                apellido: 'Gallo',
                edad: 25,
                dni: '37923460',
                curso: '3B',
                nota: 2
            }
        ];
        
        // await model.usuarios.insertMany(estudiantes);
        
        // let lecturaDeUsuarios = await model.usuarios.find({});
        // console.log(lecturaDeUsuarios);



        /* ---------------------------------- */
        /*         ORDEN ALFABETICO           */
        /* ---------------------------------- */
        // const ordenAflabetico = await model.usuarios.find({},{"nombre": 1, "_id": false}).sort({"nombre": 1, "rating": 1});
        // console.log(ordenAflabetico);
        
        

        /* ---------------------------------- */
        /*              MÁS JOVEN             */
        /* ---------------------------------- */
        // const masJoven = await model.usuarios.find({},{"nombre": 1, "_id": false}).sort({"edad": 1, "rating": 1}).limit(1);
        // console.log(masJoven);



        /* ---------------------------------- */
        /*     Estudiantes del curso '2A'     */
        /* ---------------------------------- */
        // const curso2A = await model.usuarios.find({"curso": "2A"});
        // console.log(curso2A);



        /* ---------------------------------- */
        /*    Segundo estudiante más joven    */
        /* ---------------------------------- */
        // const segundoMasJoven = await model.usuarios.find({}).sort({"edad": 1, "rating": 1}).skip(1).limit(1);
        // console.log(segundoMasJoven); 
        


        /* ---------------------------------- */
        /*   Nombre, apellido y curso (Z-A)   */
        /* ---------------------------------- */
        // const nombreApellidoCursoZA = await model.usuarios.find({},{"nombre": 1, "apellido": 1, "curso": 1, "_id": false}).sort({"apellido": 1, "rating": -1});
        // console.log(nombreApellidoCursoZA);



        /* ---------------------------------- */
        /*     Estudiantes con nota (10)      */
        /* ---------------------------------- */
        // const estudiantesConNota10 = await model.usuarios.find({"nota": 10});
        // console.log(estudiantesConNota10);



        /* -------------------------------------------------------- */
        /*   Promedio de notas todo los alumnos y del curso '1A'    */
        /* -------------------------------------------------------- */
        // const totalNotas = await model.usuarios.find({},{"nota": 1, "_id": false});
        // const totalNotas1A = await model.usuarios.find({"curso": "1A"},{"nota": 1, "_id": false});

        // const notas = {
        //     sumaTotalNotas: 0,
        //     totalAlumnos: 0,
        //     promedioTotal: 0,
        //     sumaNotasA1: 0,
        //     totalAlumnos1A: 0,
        //     promedioCurso1A: 0,
        // }
          
        // totalNotas.forEach(e => {
        //     notas.totalAlumnos+= 1;
        //     notas.sumaTotalNotas+= e.nota;
        // });

        // notas.promedioTotal = notas.sumaTotalNotas / notas.totalAlumnos;

        // totalNotas1A.forEach(e => {
        //     notas.totalAlumnos1A+= 1;
        //     notas.sumaNotasA1+= e.nota;
        // })

        // notas.promedioCurso1A = notas.sumaNotasA1 / notas.totalAlumnos1A;

        // console.log(notas);



        /* -------------------------------------------------------- */
        /*          Update del DNI de un usuario por su ID          */
        /* -------------------------------------------------------- */
        // await model.usuarios.updateOne({"_id": '625a4ef65922a4d73d5cddf8'},{$set: {'dni': 20355875}});



        /* -------------------------------------------------------- */
        /*  Update a todos los documentos de la coleccion usuarios  */
        /* -------------------------------------------------------- */
        // await model.usuarios.updateMany({},{$set: {'ingreso': false}});



        /* -------------------------------------------------------- */
        /*          Update del DNI de un usuario por su ID          */
        /* -------------------------------------------------------- */
        // await model.usuarios.updateMany({'curso': '1A'},{$set: {'ingreso': true}});



        /* -------------------------------------------------------- */
        /*         Listar estudiantes aprobados (nota > 4)          */
        /* -------------------------------------------------------- */
        // let aprobados = await model.usuarios.find({'nota': {$gt: 3}},{'_id': false, '__v': false});
        // console.log(aprobados);



        /* -------------------------------------------------------- */
        /*         Listar estudiantes que hayan ingresado           */
        /* -------------------------------------------------------- */
        // let estudiantesIngresados = await model.usuarios.find({'ingreso': true},{'_id': false, '__V': false});
        // console.log(estudiantesIngresados);



        /* -------------------------------------------------------- */
        /*        Borrarndo los estudiantes con ingreso true        */
        /* -------------------------------------------------------- */
        // await model.usuarios.deleteMany({'ingreso': true});



        /* -------------------------------------------------------- */
        /*                 Colección con timestamp                  */
        /* -------------------------------------------------------- */
        // let lecturaDeUsuarios = await model.usuarios.find({},{'__v': false});

        // lecturaDeUsuarios.forEach(e => console.log(`${e} Fecha de creacion: ${e._id.getTimestamp()}`));

    }catch(err) {
        console.log(err);
    }
}