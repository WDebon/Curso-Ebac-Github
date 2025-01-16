import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/index_header.jsx';
import ImcResultado from './components/Calculadora/index_calculadora.jsx';

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')

  return (
    <div className='container'>
      <Header />
      <h2 className={styles.homeTitulo}>
        Calculadora IMC
      </h2> 
      <p className={styles.homeTexto}>
        Insira sua altura e peso para saber seu IMC
      </p>
      <div className={styles.valores}>
        <input className={styles.input} type="number" placeholder='Insira a sua altura em cm' required onBlur={(e) => setAltura(e.target.value)}/>
        <input className={styles.input} type="number" placeholder='Insira o seu peso em kg' required onBlur={(e) => setPeso(e.target.value)}/>
        <button className={styles.button} type='submit'>Calcular</button>
      </div>
      <ImcResultado altura={altura} peso={peso} />
      <footer className={styles.footer}>
        <div className={styles.nosAcompanhe}>
            <ul className={styles.socialLinks}>
                <li>
                    <a href="https://www.instagram.com/andre.soares.designer/" target='blank' title="Siga-nos no Instagram">
                        <img src="https://raw.githubusercontent.com/AndreDG88/tarefa_m28_react/refs/heads/main/src/images/instagram-icon.png" alt="Logo do Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/AndreDG88" target='blank' title="Siga-nos no GitHub">
                        <img src="https://raw.githubusercontent.com/AndreDG88/tarefa_m28_react/0fe66d598fefe04ea029fb19ddc84e269c66ac8e/src/images/github-icon.svg" alt="Logo do GitHub" />
                    </a>
                </li>
            </ul>
            <p>
                Página ficticia, apenas para fins de estudo em programação
            </p>
        </div>
        <div>
            <p>
                &copy; Calculadora de IMC - Todos os direitos reservados - 2024.
                Desenvolvido por André Soares
            </p>
        </div>
    </footer>
    </div>
  )
}

export default App
