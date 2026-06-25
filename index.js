// Modulo express
const express = require('express');

//Generando nuestro objeto de express
const app = express();

app.use(express.json()); // Middleware para parsear JSON en las solicitudes 

// Simulando una base de datos de estudiantes con un array de objetos
const estudiantes = [
    { id: 1, nombre: 'Juan Perez', edad: 20, correo: 'juan.perez@example.com' },
    { id: 2, nombre: 'María Ruiz', edad: 22, correo: 'maria.ruiz@example.com' },
    { id: 3, nombre: 'Pedro García', edad: 21, correo: 'pedro.garcia@example.com'},
    { id: 4, nombre: 'Roberto López', edad: 25, correo: 'roberto.lopez@example.com'},
    { id: 5, nombre: 'Rosa Chávez', edad: 75, correo: 'rosa.chavez@example.com'}
];

//Puerto de por defecto
//Servidor = http://localhost:3000

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000" );
});

// Comado para ejecutar el servidor en la terminal: node index.js

//Creando una ruta para el endpoint /estudiantes
// Creando ruta principal (http: get , post, put, delete, patch)
// req = request (solicitud del cliente)
// res = response (respuesta del servidor)  
app.get('/', (req, res) => {
    // Enviando una respuesta al cliente
    res.send('Hola, bienvenido a mi API de estudiantes');
});

// Endpoint o ruta para obtener todos los estudiantes
app.get('/estudiantes', (req, res) => {
    res.status(200).json(estudiantes);
});

// Endpoint para obtener un estudiante por su ID
app.get('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);     
    const estudiante = estudiantes.find(e => e.id === id);
    
    if (!estudiante) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    
    res.status(200).json(estudiante);
});

// Endpoint para crear un nuevo estudiante
app.post('/estudiantes', (req, res) => {
    const { nombre, edad, correo } = req.body;  
    const nuevoEstudiante = { id: estudiantes.length + 1, nombre, edad, correo };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});     

// Endpoint para actualizar un estudiante existente
app.put('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(e => e.id === id);                                                      
    if (!estudiante) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }           
    const { nombre, edad, correo } = req.body;
    estudiante.nombre = nombre || estudiante.nombre;
    estudiante.edad = edad || estudiante.edad;
    estudiante.correo = correo || estudiante.correo;
    res.status(200).json(estudiante);
});

// Endpoint para eliminar un estudiante
app.delete('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = estudiantes.findIndex(e => e.id === id);      
    if (index === -1) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
    }       
    estudiantes.splice(index, 1);
    res.status(204).send();
});   