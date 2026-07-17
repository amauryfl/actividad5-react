import { useState } from 'react'
import productoImagen from './assets/productos.svg'

const opcionesPorCategoria = {
  tecnologia: ['Laptop', 'Monitor', 'Teclado'],
  hogar: ['Mesa', 'Silla', 'Lámpara'],
  deportes: ['Balón', 'Raqueta', 'Bicicleta'],
}

function App() {
  const [categoria, setCategoria] = useState('')
  const [producto, setProducto] = useState('')

  const manejarCategoria = (evento) => {
    setCategoria(evento.target.value)
    setProducto('')
  }

  const productosDisponibles = categoria ? opcionesPorCategoria[categoria] : []

  return (
    <main className="pagina">
      <section className="tarjeta">
        <img
          className="logo"
          src="/logo-actividad5.svg"
          alt="Logo cargado desde la carpeta public"
        />

        <h1>Actividad 5: selección de productos</h1>

        <p className="descripcion">
          Aplicación React con imágenes desde las carpetas public y src,
          además de un select dependiente de otro select.
        </p>

        <img
          className="imagen-productos"
          src={productoImagen}
          alt="Ilustración importada desde src/assets"
        />

        <div className="formulario">
          <div className="campo">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" value={categoria} onChange={manejarCategoria}>
              <option value="">Seleccione una categoría</option>
              <option value="tecnologia">Tecnología</option>
              <option value="hogar">Hogar</option>
              <option value="deportes">Deportes</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="producto">Producto</label>
            <select
              id="producto"
              value={producto}
              onChange={(evento) => setProducto(evento.target.value)}
              disabled={!categoria}
            >
              <option value="">
                {categoria
                  ? 'Seleccione un producto'
                  : 'Primero seleccione una categoría'}
              </option>

              {productosDisponibles.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="resultado" aria-live="polite">
          {producto ? (
            <>
              <h2>Selección realizada</h2>
              <p>Categoría: <strong>{categoria}</strong></p>
              <p>Producto: <strong>{producto}</strong></p>
            </>
          ) : (
            <p>Seleccione una categoría y luego un producto.</p>
          )}
        </div>

        <footer>
          Amaury Francisco Leonardo · Matrícula 25-1128
        </footer>
      </section>
    </main>
  )
}

export default App
