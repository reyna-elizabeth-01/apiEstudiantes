# API Estudiantes

API REST de ejemplo para gestionar estudiantes con Express.

## Instalación

```bash
npm install
```

## Uso

```bash
npm start
```

La API se ejecuta en `http://localhost:3000`.

## Endpoints

- `GET /` - Mensaje de bienvenida
- `GET /estudiantes` - Listar todos los estudiantes
- `GET /estudiantes/:id` - Obtener estudiante por ID
- `POST /estudiantes` - Crear nuevo estudiante
- `PUT /estudiantes/:id` - Actualizar estudiante existente
- `DELETE /estudiantes/:id` - Eliminar estudiante por ID

## Formato de creación / actualización

```json
{
  "nombre": "Nuevo Estudiante",
  "edad": 23,
  "correo": "nuevo@example.com"
}
```
