import React from 'react'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import Github from '../assets/github.png'

function Login() {
  return (
    <div className='login'>
      <h1 className="title">Escolha um método de login</h1>

      <div className="wrapper">

        <div className="left">
          <button className="btn google">
            <img src={Google} alt="" />
            Google
          </button>
          <button className="btn facebook">
            <img src={Facebook} alt="" />
            Facebook
          </button>
          <button className="btn github">
            <img src={Github} alt="" />
            GitHub
          </button>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OU</div>
        </div>
        <div className="right">
          <input type="text" name="" id="" placeholder='Usuário' />
          <input type="password" name="" id="" placeholder='Senha' />

          <button className='btn'>Entrar</button>
        </div>
      </div>
    </div>
  )
}

export default Login