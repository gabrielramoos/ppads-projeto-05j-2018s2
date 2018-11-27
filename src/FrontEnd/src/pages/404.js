import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <h1>Erro 404</h1>
        <h3>Página não encontrada</h3>
        <span>
          <Link to="/">Voltar ao início</Link>
        </span>
      </div>
    </div>
  )
}

export default Error404
