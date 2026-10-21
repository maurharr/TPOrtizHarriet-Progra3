# HardZone - Sistema de Autoservicio
![](public/img/tienda_hardzone.png)

## Descripción del Proyecto
**HardZone** es un sistema completo de autoservicio para la venta de hardware y perifericos, desarrollado como Trabajo Integrador Final de la materia de Programación III de la Tecnicatura en Programación de la Universidad Tecnologica Nacional (UTN). 

El sistema simula un e-commerce con estilo de autoservicio (similar a los terminales de comida rapida), donde los clientes pueden:
- Seleccionar los productos de manera autónoma y rapida.
- Gestionar su carrito de compras.
- Finalizar la compra y recibir un ticket.

## Caracteristicas Principales
### Parte del Cliente 🛒
- Pantalla de Bienvenida: Registro del nombre del cliente.
- Selección de Categorias: Visualización de las categorias disponibles.
- Catálogo de Productos: Visualización de productos de hardware filtrados por la categoria seleccionada.
- Carrito de Compras: Gestión de productos con cantidades variables.
- Generación de Ticket: Ticket digital descargable en PDF.
- Modo Claro/Oscuro: Tema personalizable persistente.
- Diseño Responsive: Adaptado para móviles y escritorio.

### Parte del Administrador 👮🏻
- Sistema de Login: Autenticación.
- Dashboard: Panel de control con listado completo de productos.
- Alta de Productos: Formulario para agregar nuevos productos.
- Modificación de Productos: Edición de datos e imágenes.
- Baja Lógica: Activación/desactivación de productos.
- Gestión de Ventas: Visualización del historial de ventas.

## Tecnologías Utilizadas
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express 5
- Base de datos: SQLite con Sequelize ORM
- Vistas: EJS
- Seguridad: bcryptjs, jsonwebtoken, cookie-parser
- Archivos y reportes: Multer, PDFKit
- Configuración y herramientas: dotenv, Nodemon, Prettier

## Instalación y uso
```
npm install
# Crear un archivo .env con las variables necesarias
npm run dev     # modo desarrollo (nodemon)
npm start       # modo producción
```
El backend estará disponible en `http://localhost:3000`

## Uso del Sistema
### Como Cliente
1. Ingresar el nombre en la pantalla de bienvenida.
2. Seleccionar que categoria ver.
3. Seleccionar el producto que quiera comprar.
4. Seleccionar cantidad de unidades.
5. Una vez seleccionado el producto, puede seguir seleccionando productos, inclusive retroceder y entrar a otra categoria, o ir a finalizar compra.
6. Revisar el carrito y confirmar la compra.
7. Descargar el ticket en PDF.
8. Finalizar.

### Como Administrador
- Acceder a `http://localhost:3000/login`
- Ingresar las credenciales.
- Gestionar productos desde el dashboard.
- Ver historial de ventas.
- Cerrar sesión.

## Autores
- Mauricio Harriet
- Julián Ortiz

## Licencia
Este proyecto fue desarrollado con fines educativos como parte del curso de Programación III.

## Agradecimientos
- Universidad Tecnológica Nacional (UTN)
- Profesores de Programación III
- Compañeros de cursada
