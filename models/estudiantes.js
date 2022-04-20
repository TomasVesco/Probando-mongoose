import mongoose from "mongoose";

const estudiantesColeccion = 'estudiantes';

const studentSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, require: true, max: 100},
    edad: {type: Number, require: true, max: 100},
    dni: {type: String, require: true, max: 100},
    curso: {type: String, require: true, max: 100},
    nota: {type: Number, require: true, max: 100},
    ingreso: {type: Boolean, require: true}
});

export const usuarios = mongoose.model(estudiantesColeccion, studentSchema);