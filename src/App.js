import React, { useState } from "react";
import axios from "axios";
import GlobalStyle from "./styles/global";
import SideBar from "./sidebar";
import Carousel from "react-elastic-carousel";
import {
  FaNodeJs,
  FaMagento,
  FaReact,
  FaWordpress,
  FaPhp,
  FaWhatsapp,
} from "react-icons/fa";

import {
  Main,
  Title,
  Wrapper,
  Col,
  Colbg,
  Line,
  MyForm,
  MyInput,
  MyTextarea,
  MyButton,
  Item,
  List,
} from "./styles/styles";

import * as Yup from "yup";

import videomp4 from "./assets/PersonTypingFast.mp4";
import videoogg from "./assets/PersonTypingFast.ogg";

const schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Formato Inválido").required("Campo obrigatório"),
  message: Yup.string().min(3).required("Campo obrigatório"),
});

function App() {
  const [resp, setResp] = useState();

  function handleSubmit(data) {
    axios
      .post("https://getform.io/f/58759563-8cc0-4e4a-a6f5-1512b6f6c35c", data, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        setResp("Enviado");
      })
      .catch(function (error) {
        setResp(error);
      });
  }

  return (
    <>
      <GlobalStyle />
      <div id="outer-container">
        <div id="App">
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <Main id="page-wrap">
            <section>
              <img
                src="/imgs/splendyweb-logo.png"
                className="logo"
                alt="Logo Splendy Web"
              />
              <Line />
              <Wrapper>
                <Colbg>
                  <video width="100%" autoPlay="autoplay" muted>
                    <source src={videomp4} type="video/mp4" />
                    <source src={videoogg} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                </Colbg>
                <Colbg>
                  <Title id="sobre">Sobre</Title>
                  <p>
                    Existem muitas empresas e profissionais que procuram uma
                    forma de explorar o potencial da web, mas encontram
                    dificuldades para encontrar o parceiro ideal que possa
                    apresentar caminhos simples e objetivos para o sucesso no
                    mundo virtual. Vamos te ajudar!
                  </p>
                  <p>
                    Produzimos websites institucionais, sistemas web, e-commerce
                    e apps com foco em Small Business. Projetos baseados nas
                    plataformas de referência do mercado e com ótimo
                    custo-benefício.
                  </p>
                </Colbg>
              </Wrapper>
            </section>
            <Line />
            <section>
              <List>
                <li>
                  <FaMagento size={50} color={"#ccc"} />
                </li>
                <li>
                  <FaWordpress size={50} color={"#ccc"} />
                </li>
                <li>
                  <FaNodeJs size={50} color={"#ccc"} />
                </li>
                <li>
                  <FaReact size={50} color={"#ccc"} />
                </li>
                <li>
                  <FaPhp size={50} color={"#ccc"} />
                </li>
              </List>
            </section>
            <Line />
            <section>
              <Title id="jobs">Jobs</Title>
              <br />
              <Carousel itemsToShow={1}>
                <Item>Em breve</Item>
                <Item>Em breve</Item>
              </Carousel>
            </section>
            <Line />
            <section>
              <Wrapper>
                <Col>
                  <Title id="contato">Contato</Title>
                  <p>
                    Entre contato para saber mais sobre o que podemos fazer para
                    ajudar seu negócio. Se precisar desenvolver um novo projeto
                    ou apenas ajustar alguns pontos, ou ainda, se o projeto
                    precisar de consultoria para funcionar corretamente, fale
                    conosco.
                  </p>
                  <p>Para consultas rápidas fale direto pelo Whattsapp.</p>
                  <div className="flex">
                    <FaWhatsapp size={24} color={"#4fce5d"} />
                    <span className="whattsapp">(47) 9.8886.7898</span>
                  </div>
                </Col>
                <Col>
                  {resp ? (
                    <h3 class="message">Mensagem enviada</h3>
                  ) : (
                    <MyForm schema={schema} onSubmit={handleSubmit}>
                      <MyInput name="name" placeholder="Informe seu nome" />
                      <MyInput name="email" placeholder="Informe seu email" />
                      <MyTextarea
                        name="message"
                        placeholder="Informe sua mensagem"
                        rows="5"
                      ></MyTextarea>
                      <MyButton type="submit">Enviar</MyButton>
                    </MyForm>
                  )}
                </Col>
              </Wrapper>
            </section>
          </Main>
        </div>
      </div>
    </>
  );
}

export default App;
