import express, { json, urlencoded } from 'express';
const app = express();
// Llamamos a la biblioteca path para poder unir archivos
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtenemos una función de exhbs
import { create } from 'express-handlebars';
import cors from 'cors';
import moment from 'moment'; // Importar Moment.js
import cookieParser from 'cookie-parser';

// Importamos las rutas
import apiProductos from './routes/productos.routes.js';
import vistasRoutes from './routes/vistas.routes.js';
import carro from './routes/carro.routes.js';
import apiUsuario from './routes/usuario.routes.js';
import ventasRoutes from './routes/ventas.routes.js';


// Ruta de autenticación
import authRoutes from './routes/auth.routes.js';

// En caso de utilizar envío entre servidores
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//
app.use(cookieParser());

// Unión de archivos estáticos y rutas dinámicas
app.use(express.static(join(__dirname, 'public')));

// Inicio de rutas
app.use(apiProductos);
app.use(vistasRoutes);
app.use(carro);
app.use(apiUsuario);
app.use(ventasRoutes);

// Agrega las rutas de autenticación al middleware de la aplicación
app.use(authRoutes);

// Asignamos la unión de los archivos views
app.set("views", join(__dirname, "views/"));

// Configuración de motor hbs
const hbs = create({
  // Se define la página principal que contendrá todo
  defaultLayout: "main",
  // Definimos y unimos los layouts y partials
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  // Definimos la extensión a utilizar
  extname: ".handlebars",
  // Registramos la función de ayuda formatDate en Handlebars
  helpers: {
    formatDate: function (date) {
      return moment(date).format('DD/MM/YYYY');
    },
  },
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
  },
});

app.engine(".handlebars", hbs.engine);
app.set("view engine", ".handlebars");

export default app;

