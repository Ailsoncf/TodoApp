import React from 'react'
import './menustyle.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
        <div className="cabecalho">
            <div className='logo'>
            <a>
                <i></i> TodoApp
            </a>
            </div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to='/todos'>
                            Tarefas
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
            <aside className="autenticacao">
                <a href="#login">Login</a>
                <a href="#registar" className="botao destaque">Registrar</a>
            </aside>
        </div>
  )
}

export default Menu