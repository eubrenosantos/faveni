import "./style.css";
import Boot from "./components/boot/Boot";
import Faq from "./components/faq/faq";
import HeaderHome from "./components/header/headerHome";
import Curso from "./components/cursos/cursos";
import { ApiCursos } from "./helpers/api";
import { funcoes } from "./helpers/fun";
import Popoup from "./components/popoup/popoup";
import { useEffect, useState } from "react";
const app = () => {
  const [cursos, setCursos] = useState(ApiCursos);
  const [visiblyPopoup, setVisiblyPopoup] = useState(false);
  const [contentPopoup, setContentPopoup] = useState({});
  
  const changeSetCursosName = () => {
    let txt = document.querySelector("#filternamecurso").value;
    setCursos(funcoes.FilterCursosName(txt));
  };
  const changeSetCursosCategoria = () => {
    let txt = document.querySelector("#categoriafilter").value;
    setCursos(funcoes.FilterCursosCategory(txt));
  };
  const changeSetCursosCarga = () => {
    let txt = document.querySelector("#cargahorariafiltro").value;
    setCursos(funcoes.FilterCursosCargaHoraria(txt));
  };



  

  return (
    <>
      {visiblyPopoup && (
        <Popoup content={contentPopoup} setVisivel={setVisiblyPopoup} />
      )}

      <Boot/>

      <HeaderHome />

      <div className="cursers">
        <h1>Nossos Cursos</h1>

        <div className="filters">
          <label>
            Buscar por nome
            <input
              id="filternamecurso"
              onChange={changeSetCursosName}
              type="text"
              placeholder="Digite o nome do curso"
            />
          </label>

          <label>
            Buscar por categoria
            <select onChange={changeSetCursosCategoria} id="categoriafilter">
              <option value="">Selecione o tipo de curso</option>
              <optgroup label="Capacitação">
                <option value="capacitacao"> Capacitação</option>
                <option value="capacitacao-120-horas">
                  {" "}
                  • Capacitação – 120 horas
                </option>
                <option value="capacitacao-180-horas">
                  {" "}
                  • Capacitação – 180 horas
                </option>
                <option value="capacitacao-240-horas">
                  {" "}
                  • Capacitação – 240 horas
                </option>
                <option value="capacitacao-320-horas">
                  {" "}
                  • Capacitação – 320 horas
                </option>
                <option value="capacitacao-40-horas">
                  {" "}
                  • Capacitação – 40 horas
                </option>
                <option value="capacitacao-80-horas">
                  {" "}
                  • Capacitação – 80 horas
                </option>
              </optgroup>
              <optgroup label="Graduação">
                <option value="graduacao"> Graduação</option>
                <option value="graduacao-ead"> • Graduação EAD</option>
                <option value="graduacao-presencial">
                  {" "}
                  • Graduação Presencial
                </option>
                <option value="2-graduacao-presencial">
                  {" "}
                  • 2° Graduação Presencial
                </option>
              </optgroup>
              <optgroup label="Pós-Graduação">
                <option value="pos-graduacao"> Pós-Graduação</option>
                <option value="pos-graduacao-ead-em-agricultura-silvicultura-pesca-e-veterinaria">
                  {" "}
                  • Agricultura, Silvicultura, Pesca e Veterinária
                </option>
                <option value="pos-graduacao-ead-em-negocios-administracao-e-direito">
                  {" "}
                  • Negócios, Administração e Direito
                </option>
                <option value="pos-graduacao-ead-em-ciencias-naturais-matematica-e-estatistica">
                  {" "}
                  • Ciências Naturais, Matemática e Estatística
                </option>
                <option value="pos-graduacao-ead-em-educacao">
                  {" "}
                  • Educação
                </option>
                <option value="pos-graduacao-ead-em-engenharia-producao-e-construcao">
                  {" "}
                  • Engenharia, Produção e Construção
                </option>
                <option value="pos-graduacao-ead-em-artes-e-humanidades">
                  {" "}
                  • Artes e Humanidades
                </option>
                <option value="pos-graduacao-ead-em-saude-e-bem-estar">
                  {" "}
                  • Saúde e Bem-Estar
                </option>
                <option value="pos-graduacao-em-servicos"> • Serviços</option>
                <option value="pos-graduacao-ead-em-engenharia-de-seguranca-do-trabaho">
                  {" "}
                  • Engenharia de Segurança do Trabalho
                </option>
                <option value="pos-graduacao-ead-os-20-cursos-mais-vendidos">
                  {" "}
                  • Os 20 Cursos Mais Vendidos
                </option>
                <option value="pos-graduacao-ead-em-ciencias-sociais-comunicacao-e-informacao">
                  {" "}
                  • Ciências Sociais, Comunicação e Informação
                </option>
                <option value="pos-graduacao-ead-em-computacao-e-tecnologias-da-informacao-e-comunicacao-tic">
                  {" "}
                  • Computação e Tecnologias da Informação e Comunicação (TIC)
                </option>
              </optgroup>
            </select>
          </label>
          <label>
            Carga horária
            <select id="cargahorariafiltro" onChange={changeSetCursosCarga}>
              <option value=""> Selecione a carga horária</option>
              <option value="1000-horas"> 1000 Horas</option>
              <option value="120-horas"> 120 Horas</option>
              <option value="180-horas"> 180 Horas</option>
              <option value="20-horas-complementares">
                {" "}
                20 Horas complementares
              </option>
              <option value="240-horas"> 240 Horas</option>
              <option value="2700-horas"> 2700 Horas</option>
              <option value="3100-horas"> 3100 Horas</option>
              <option value="320-horas"> 320 Horas</option>
              <option value="3320-horas"> 3320 Horas</option>
              <option value="3400-horas"> 3400 Horas</option>
              <option value="3500-horas"> 3500 Horas</option>
              <option value="360-horas"> 360 Horas</option>
              <option value="3700-horas"> 3700 Horas</option>
              <option value="3820-horas"> 3820 Horas</option>
              <option value="40-horas"> 40 Horas</option>
              <option value="400-horas"> 400 Horas</option>
              <option value="420-horas"> 420 Horas</option>
              <option value="4320-horas"> 4320 Horas</option>
              <option value="450-horas"> 450 Horas</option>
              <option value="4620-horas"> 4620 Horas</option>
              <option value="500-horas"> 500 Horas</option>
              <option value="5120-horas"> 5120 Horas</option>
              <option value="520-horas"> 520 Horas</option>
              <option value="530-horas"> 530 Horas</option>
              <option value="580-horas"> 580 Horas</option>
              <option value="600-horas"> 600 Horas</option>
              <option value="620-horas"> 620 Horas</option>
              <option value="630-horas"> 630 Horas</option>
              <option value="640-horas"> 640 Horas</option>
              <option value="660-horas"> 660 Horas</option>
              <option value="680-horas"> 680 Horas</option>
              <option value="700-horas"> 700 Horas</option>
              <option value="720-horas"> 720 Horas</option>
              <option value="740-horas"> 740 Horas</option>
              <option value="750-horas"> 750 Horas</option>
              <option value="760-horas"> 760 Horas</option>
              <option value="780-horas"> 780 Horas</option>
              <option value="80-horas"> 80 Horas</option>
              <option value="800-horas"> 800 Horas</option>
              <option value="840-horas"> 840 Horas</option>
              <option value="880-horas"> 880 Horas</option>
            </select>
          </label>
        </div>

        <div className="listCursesr">
          {cursos.map((value, index) => {
            return (
              <Curso
                setConteudo={setContentPopoup}
                click={setVisiblyPopoup}
                key={index}
                background={value.Capa}
                content={value}
              />
            );
          })}
        </div>
      </div>
      <div className="cursers aaaa">
        <h1>A FACULDADE FAVENI</h1>

        <div className="roww">
          <iframe
            width="500px"
            height="315"
            src="https://www.youtube.com/embed/-OFrMUhXTYQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <div className="columnn">
            <span>
              No que se refere a excelência em educação a Faculdade FAVENI
              desenvolve as suas atividades direcionadas a formação de
              profissionais dotados de competências e habilidades necessárias a
              inserção e permanência no mercado de trabalho, contribuindo para a
              evolução da humanidade. Se destaca a qualidade ensino comprovada
              pelos resultados do ENADE e avaliações dos cursos pelo MEC.
              Ofertando cursos de Capacitação, Graduação Presencial, Graduação
              EAD e Pós-Graduação EAD. A Faculdade de Venda Nova do Imigrante –
              FAVENI, é dirigido pelo Empreendedor e Educador Leandro Xavier
              Timóteo e faz parte do Grupo Educacional FAVENI, composto
              atualmente por 8 faculdades. O Grupo possui vasta experiência,
              atuando no segmento educacional com mais de 200 mil alunos e 100
              polos espalhados em todo o Brasil.
            </span>
            <button>Saber Mais</button>
          </div>
        </div>
      </div>
      <div className="cursers">
        <h1>Dúvidas frequentes</h1>

        <Faq
          title="A FAVENI É RECONHECIDA PELO MEC?"
          content="Sim! Credenciamento EAD: Portaria MEC N° 31 de 10 de janeiro de 2020. Além disso, de acordo com o Cadastro Nacional de Cursos e Instituições de Educação Superior (e-MEC), a Faveni é nota máxima (5) no Conceito Institucional EaD de 2019!"
        />

        <Faq
          title="COMO FUNCIONAM OS CURSOS DE PÓS-GRADUAÇÃO?"
          content="Os cursos de pós-graduação EAD são oferecidos pela Faculdade FAVENI na modalidade online. Você pode estudar de acordo com o seu tempo disponível"
        />

        <Faq
          title="QUAIS SÃO OS PRÉ-REQUISITOS PARA QUE EU POSSA FAZER MINHA PÓS-GRADUAÇÃO?"
          content="De acordo com ao Resolução Nº 01 do MEC de 06 de abril de 2018, para que o candidato esteja apto a cursar uma pós-graduação EAD, basta possuir um curso de Graduação ofertado por uma Instituição reconhecida pelo MEC."
        />

        <Faq
          title="É POSSÍVEL CONCLUIR EM 6 MESES?"
          content="Para conclusão do curso em 6 meses é necessário que o aluno não tenha nenhuma pendência, ou seja, ele deverá ter sido aprovado em todas as disciplinas do curso, a documentação deve ter sido toda entregue, o TCC aprovado, e as mensalidades pagas para a emissão do Certificado."
        />

        <Faq
          title="EM QUANTO TEMPO OBTENHO O MEU CERTIFICADO?"
          content="O Prazo de emissão de Certificado será em 15 dias úteis após a conclusão."
        />
      </div>
    </>
  );
};
export default app;
