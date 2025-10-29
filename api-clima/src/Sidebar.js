import React from 'react';

   function Sidebar({ onCiudadChange }) {
     const handleSubmit = (e) => {
       e.preventDefault();
       onCiudadChange(e.target.ciudad.value);
     };

     return (
       <aside className="barra-lateral">
         <div className="contenedor-titulo">
           <div className="fondo-sol"></div>
           <h1>CLIMAS<br />AHORA</h1>
         </div>
         <div className="formulario-busqueda">
           <form id="form-ciudad" onSubmit={handleSubmit}>
             <img src="/IMAGENES/UBI.png" alt="Icono de ubicación" className="icono-ubicacion" />
             <label htmlFor="seleccion-ciudad" className="sr-only">Seleccionar ciudad</label>
             <select id="seleccion-ciudad" name="ciudad">
               <option value="cancun">Cancún</option>
               <option value="madrid">Madrid</option>
               <option value="tokyo">Tokio</option>
               <option value="nueva-york">Nueva York</option>
             </select>
             <button type="submit">🔍</button>
           </form>
         </div>
       </aside>
     );
   }

   export default Sidebar;
