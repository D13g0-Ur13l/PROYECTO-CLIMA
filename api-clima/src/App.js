import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';  // Importa el componente Sidebar
import WeatherDisplay from './WeatherDisplay';  // Importa el componente WeatherDisplay

function App() {
  // Estado para la ciudad seleccionada
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('cancun');
  // Estado para la hora actual
  const [horaActual, setHoraActual] = useState('');

  // Base de datos local (igual que antes)
  const climaDatos = {
    "cancun": {
      nombre: "Cancún",
      actual: { temp: "25°C", icono: "LLUVIA.png" },
      pronostico: [
        { hora: "15:00", temp: "25°C", icono: "LLUVIA.png" },
        { hora: "16:00", temp: "30°C", icono: "SOLEADO.png" },
        { hora: "17:00", temp: "25°C", icono: "LLUVIA.png" }
      ]
    },
    "madrid": {
      nombre: "Madrid",
      actual: { temp: "20°C", icono: "NUBLADO.png" },
      pronostico: [
        { hora: "15:00", temp: "20°C", icono: "NUBLADO.png" },
        { hora: "16:00", temp: "22°C", icono: "SOL_NUBE.png" },
        { hora: "17:00", temp: "23°C", icono: "SOLEADO.png" }
      ]
    },
    "tokyo": {
      nombre: "Tokio",
      actual: { temp: "28°C", icono: "SOL_NUBE.png" },
      pronostico: [
        { hora: "15:00", temp: "28°C", icono: "SOL_NUBE.png" },
        { hora: "16:00", temp: "27°C", icono: "NUBLADO.png" },
        { hora: "17:00", temp: "26°C", icono: "LLUVIA.png" }
      ]
    },
    "nueva-york": {
      nombre: "Nueva York",
      actual: { temp: "18°C", icono: "SOLEADO.png" },
      pronostico: [
        { hora: "15:00", temp: "18°C", icono: "SOLEADO.png" },
        { hora: "16:00", temp: "19°C", icono: "SOL_NUBE.png" },
        { hora: "17:00", temp: "17°C", icono: "NUBLADO.png" }
      ]
    }
  };

  // Función para generar fecha/hora
  const actualizarHora = () => {
    const now = new Date();
    const opciones = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return now.toLocaleDateString('es-ES', opciones);
  };

  // useEffect para actualizar la hora
  useEffect(() => {
    const interval = setInterval(() => {
      setHoraActual(actualizarHora());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Función para obtener datos del clima
  const mostrarClima = (ciudadKey) => {
    return climaDatos[ciudadKey] || climaDatos['cancun'];  // Fallback a Cancún si no existe
  };

  // Manejador para cambiar ciudad (pasado a Sidebar)
  const handleCiudadChange = (nuevaCiudad) => {
    setCiudadSeleccionada(nuevaCiudad);
  };

  // Obtener datos de la ciudad actual
  const datosClima = mostrarClima(ciudadSeleccionada);

  return (
    <div className="contenedor-clima">
      <Sidebar onCiudadChange={handleCiudadChange} />  {/* Pasa la función como prop */}
      <WeatherDisplay datosClima={datosClima} horaActual={horaActual} />  {/* Pasa datos como props */}
    </div>
  );
}

export default App;