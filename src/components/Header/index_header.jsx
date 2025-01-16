import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
            <h1 className={styles.headerTitulo}>Como está o seu IMC?</h1>
            <p className={styles.headerTexto}>
                IMC é a sigla para Índice de Massa Corporal, uma fórmula que calcula o peso ideal de uma pessoa com base na sua altura e peso. O IMC é uma ferramenta recomendada pela Organização Mundial de Saúde (OMS) para classificar a composição corporal de um indivíduo.
            </p>
            <p className={styles.headerTexto}>
                O IMC é calculado dividindo o peso do indivíduo pela sua altura elevada ao quadrado. O resultado do cálculo indica se a pessoa está abaixo, acima ou no peso ideal, e pode ser usado para estimar a quantidade de gordura corporal e identificar riscos à saúde.
            </p>
            <p className={styles.headerTexto}>
            O IMC foi criado no século XIX pelo matemático belga Lambert Adolphe Quételet. É uma ferramenta simples usada na saúde, mas não considera fatores como idade ou composição corporal.
            </p>
            </div>
            <img className={styles.headerImg} src="https://raw.githubusercontent.com/AndreDG88/tarefa_m28_react/refs/heads/main/src/images/imagem_header_site-imc.png" alt="lolo site IMC" />
        </header>
    )
}

export default Header;