import React from 'react';
import lluvia from './IMAGENES/LLUVIA.png';
import soleado from './IMAGENES/SOLEADO.png';
import nublado from './IMAGENES/NUBLADO.png';
import solNube from './IMAGENES/SOL_NUBE.png';

function WeatherDisplay({ datosClima, horaActual }) {
  const getIcono = (icono) => {
    switch (icono) {
      case 'LLUVIA.png': return lluvia;
      case 'SOLEADO.png': return soleado;
      case 'NUBLADO.png': return nublado;
      case 'SOL_NUBE.png': return solNube;
      default: return lluvia;
    }
  };

  return (
    <section className="mostrar-clima">
      <div className="clima-actual">
        <h2 id="nombre-ciudad">{datosClima.nombre}</h2>
        <p id="hora-actual">{horaActual}</p>
        <img id="icono-clima-actual" src={getIcono(datosClima.actual.icono)} alt={`Clima actual en ${datosClima.nombre}`} className="icono-clima-grande" />
        <p className="temperatura" id="temp-actual">{datosClima.actual.temp}</p>
      </div>
      <div className="pronostico" id="lista-pronostico">
        {datosClima.pronostico.map((p, index) => (
          <div key={index} className="hora-pronostico">
            <p className="hora">{p.hora}</p>
            <img src={getIcono(p.icono)} alt={`Clima ${p.hora}`} className="icono-clima-pequeno" />
            <p className="temp-peq">{p.temp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeatherDisplay;