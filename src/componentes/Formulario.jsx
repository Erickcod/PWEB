import "./Estilos/formulario.css"
import { useState } from "react"
export function Formulario() {




    return (
        <section>
            <h1>Login</h1>

            <form className="formulario">
                <input type="text" />
                <input type="password" />
                <button>Iniciar sesion</button>
            </form>

        </section>
    )
}