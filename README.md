# Climas Ahora - App del Tiempo

Una aplicación web del clima desarrollada en React, convertida desde una versión original en HTML, CSS y JavaScript. Muestra el clima actual y pronóstico por horas para varias ciudades, con un diseño responsivo y moderno.

## Características

- **Selección de Ciudad**: Elige entre Cancún, Madrid, Tokio y Nueva York.
- **Clima Actual**: Muestra temperatura, icono del clima y hora actualizada en tiempo real.
- **Pronóstico por Horas**: Visualiza el pronóstico para las próximas horas.
- **Diseño Responsivo**: Adaptable a dispositivos móviles y escritorio.
- **Interfaz Moderna**: Gradientes, sombras y animaciones suaves.

## Tecnologías Utilizadas

- **React**: Framework para la interfaz de usuario.
- **CSS**: Estilos personalizados con diseño responsivo.
- **JavaScript**: Lógica para manejo de estado y eventos.
- **Create React App**: Herramienta para inicializar el proyecto.

## Instalación

1. **Clona el repositorio**:
git clone https://github.com/tu-usuario/climas-ahora.git cd climas-ahora

2. **Instala las dependencias**:
npm install

3. **Inicia el servidor de desarrollo**:
npm start
La aplicación se abrirá en `http://localhost:3000`.

## Uso

- Selecciona una ciudad en el menú desplegable de la barra lateral.
- Haz clic en el botón "🔍" para actualizar el clima.
- La hora se actualiza automáticamente cada segundo.
- En móvil, el diseño se adapta para una mejor experiencia.

## Estructura del Proyecto
climas-ahora/ ├── public/ │ ├── IMAGENES/ # Imágenes del clima (SOL.png, LLUVIA.png, etc.) │ └── index.html # Archivo HTML base ├── src/ │ ├── App.js # Componente principal │ ├── App.css # Estilos globales │ ├── Sidebar.js # Componente de la barra lateral │ ├── WeatherDisplay.js # Componente de la sección de clima │ └── index.js # Punto de entrada de React ├── package.json # Dependencias y scripts └── README.md # Este archivo



## Contribución

Este proyecto es para fines escolares. Si deseas contribuir:
1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcion`).
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva función'`).
4. Push a la rama (`git push origin feature/nueva-funcion`).
5. Abre un Pull Request.

## Licencia

Este proyecto es de uso educativo y no tiene licencia específica. Siéntete libre de usarlo para aprender.

## Autor

Desarrollado por [Tu Nombre] como proyecto escolar. Basado en una app original en HTML/CSS/JS, convertida a React.
