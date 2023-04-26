import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="navbar">
        <div className="links-div">
          <a href="#projeto">1 - Projetos</a>
          <a href="#sobre">2 - Sobre</a>
        </div>
      </div>
      <div className="home-page-container">
        <div className="home-introduction">
          {" "}
          <p
            className="see-more"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Olá,me chamo
          </p>
          <h1
            className="see-more"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Antônio de Pádua
          </h1>
          <p
            className="see-more"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            {" "}
            e sou front-end web developer.
          </p>
        </div>
        <div
          className="see-more"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <a href="#projeto">Meus projetos</a>
        </div>
        <div className="project-container" id="projeto">
          <div className="project">
            <div
              className="pj-img"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-mirror="false"
              data-aos-once="false"
            >
              <img src="https://github.com/de-Padua/BugTracker/blob/main/how-to-use/home.JPG?raw=true" />
            </div>
            <div>
              <h3>Flash</h3>
              <div className="tecs">
                <p>React</p>
                <p>Javascript</p>
                <p>Firebase</p>
              </div>
              <p className="project-description">
                Flash é um software web de compartilhamento de falhas com
                equipes, cujo propósito é ser utilizado em um contexto restrito
                a empresas. O aplicativo é completamente responsivo e oferece um
                feed de atualizações de atividades, notificando quando um
                usuário reporta, comenta ou resolve uma falha.
              </p>
              <div className="links-proj">
                <a
                  href="https://github.com/de-Padua/BugTracker"
                  target="_blank"
                >
                  Source code
                </a>
                <a href="https://flashbugtracker.netlify.app/" target="_blank">
                  {" "}
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" project-container" id="projeto">
          <div className="project projet-2">
            <div
              className="pj-img"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <img src="/shout.JPG" />
            </div>
            <div>
              <h3>Hiders</h3>
              <div className="tecs">
                <p>React</p>
                <p>Javascript</p>
              </div>
              <p className="project-description">
                Trata-se de um front-end completo para um e-commerce, que
                oferece todas as funcionalidades esperadas em um ambiente de
                comércio eletrônico, incluindo a possibilidade de criar
                usuários, salvar os itens no carrinho de compras dos usuários,
                filtrar produtos por categoria e disponibilizar uma página
                pessoal para cada usuário.
              </p>
              <div className="links-proj">
                <a
                  href="https://github.com/de-Padua/HidersEcommerce"
                  target="_blank"
                >
                  Source code
                </a>
                <a
                  href="https://de-padua.github.io/HidersEcommerce/"
                  target="_blank"
                >
                  {" "}
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" project-container" id="projeto">
          <div className="project projet-2">
            <div
              className="pj-img"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <img src="/asdasd.JPG" />
            </div>
            <div>
              <h3>CoiNFT</h3>
              <div className="tecs">
                <p>Javascript</p>
              </div>
              <p className="project-description">
                Trata-se de uma aplicação online que busca informações
                atualizadas sobre as diversas moedas virtuais disponíveis no
                mercado. Essa plataforma permite ao usuário acessar informações
                relevantes, tais como cotação em tempo real, histórico de
                preços, gráficos e outras estatísticas relevantes para o mercado
                de criptomoedas. Além disso, o web app permite ao usuário salvar
                as criptomoedas favoritas e monitorá-las em uma lista
                personalizada.
                <br />
              </p>
              <div className="links-proj">
                <a href="https://github.com/de-Padua/CNFT_" target="_blank">
                  Source code
                </a>
                <a href="https://de-padua.github.io/CNFT_/" target="_blank">
                  {" "}
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" project-container" id="projeto">
          <div className="project projet-2">
            <div
              className="pj-img"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <img src="/moviecolor.JPG" />
            </div>
            <div>
              <h3>MovieCAP</h3>
              <div className="tecs">
                <p>Javascript</p>
              </div>
              <p className="project-description">
                Moviecap é uma plataforma online que permite aos usuários buscar
                e encontrar informações sobre diversos filmes, séries e atores.
                Através dessa aplicação, os usuários podem explorar um vasto
                catálogo de títulos, bem como descobrir novos filmes, séries e
                atores que possam ser do seu interesse. Uma das principais
                funcionalidades do site é a busca por filmes, que permite ao
                usuário filtrar sua pesquisa por gênero, ano, elenco, diretor e
                outras categorias relevantes.
              </p>
              <div className="links-proj">
                <a href="https://github.com/de-Padua/Movie-Cap" target="_blank">
                  Source code
                </a>
                <a href="https://de-padua.github.io/Movie-Cap/" target="_blank">
                  {" "}
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sobre">
        <div>
          <h1>Sobre mim</h1>
          <p>
            Sou desenvolvedor web com conhecimentos em várias tecnologias,
            incluindo JavaScript, React, CSS, Bootstrap e Firebase. Essas
            habilidades me capacitam a criar e manter aplicativos e sites de
            alta qualidade, que são funcionais, esteticamente agradáveis e
            eficientes. Além disso, também possuo alto conhecimento em inglês, o
            que é uma habilidade valiosa em um ambiente de trabalho cada vez
            mais globalizado. Com essas habilidades e conhecimentos, eu estou
            preparado para enfrentar os desafios do mercado de desenvolvimento
            web.
            <br />
          </p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width={"60px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={"50px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                width={"50px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                width={"50px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                width={"50px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                width={"50px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                width={"50px"}
              />
            </div>
          </div>
          <h2>Tools</h2>
          <div className="skills-container">
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                width={"50px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                width={"50px"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="sobre">
        <div className="contact-container">
          <div>
            <h2>Contato</h2>
            <p>
              Sinta-se livre para me contatar pelo meu linkedin,qualquer
              mensagem é bem vinda.
            </p>
            <img
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/ant%C3%B4nio-de-p%C3%A1dua-36a530254/";
              }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              width={"50px"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
