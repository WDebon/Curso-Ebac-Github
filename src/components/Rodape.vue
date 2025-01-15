<template>
    <footer id="social-links" class="p-5 mb-4 mt-4 rounded-3">
        <div class="nos-acompanhe">
            <ul class="social-links">
                <li>
                    <a href="https://www.instagram.com/andre.soares.designer/" title="Siga-nos no Instagram">
                        <img src="/src/images/instagram-icon.png" alt="Logo do Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/AndreDG88" title="Siga-nos no GitHub">
                        <img src="/src/images/github-icon.png" alt="Logo do GitHub" />
                    </a>
                </li>
            </ul>
            <p>
                Página ficticia, apenas para fins de estudo em programação
            </p>
        </div>
        <div>
            <p>
                &copy; Vamos Calcular um pouco? - Todos os direitos reservados - 2024.
                Desenvolvido por André Soares
            </p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: rgb(0, 43, 124);
    color: white;
    text-align: center;
    padding: 16px 0;
    margin-top: 32px;
}

.nos-acompanhe {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
}

.social-links img {
    height: 50px;
    margin-right: 8px;
}

.social-links li {
    display: inline;
    margin-right: 8px;
}

.social-links li a {
    text-decoration: none;
}
</style>