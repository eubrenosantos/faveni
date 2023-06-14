import { useEffect, useState } from "react";
import style from "./boot.module.css";
import {} from "react-icons";
import { TbMessageChatbot, TbSend } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import MessageBoot from "./message";

const Boot = (props) => {
  const [message, setMessage] = useState([]);
  const [showBoot, setShowBoot] = useState(false);
  const scrollToEnd = () => {
    const div = document.querySelector("#messageBoot");
    const lastElement = div.lastElementChild;
    if (lastElement) {
      lastElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const changeListMsn = (creator, mensagem) => {
    if (mensagem) {
      setMessage((prevMessage) => [
        ...prevMessage,
        {
          creator: creator,
          message: mensagem,
        },
      ]);

      if (creator) {
        BootResponde(mensagem);
        document.querySelector("#usermsn").value = "";
        scrollToEnd();
      }
      scrollToEnd();
    } else {
      return;
    }
  };

  const BootResponde = (pergunta) => {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "Agora seu nome é Jaque e você é uma ia da falcudade faveni rio preto, você está aqui para responder dúvidas dos clientes da faculdade e ajudalos no que for preciso, e você será o mais genitl e acolhedora possível e tentará responder todas as dúvidas que eles tiverem",
          },
          {
            role: "user",
            content:
              "Cursos disponiveis: SERVIÇO SOCIAL LETRAS(Português, Inglês e Espanhol) DIREITO GEOGRAFIA HISTÓRIA FILOSOFIA ARTES VISUAIS ENFERMAGEM FÍSICA QUÍMICA MATEMÁTICA EDUCAÇÃO FÍSICA EDUCAÇÃO ESPECIAL SOCIOLOGIA BIOLOGIA PEDAGOGIA Engenharia Ciências ",
          },
          {
            role: "user",
            content: `Nossos diferenciasi: 'Cursos com nota máxima no MEC', 'Faculdade com selo de excelência no Reclame Aqui
', 'Estude em qualquer lugar no Brasil
', 'Cursos 100% online EAD
' , 'Cursos intensivos de qualidade
'  `,
          },

          { role: "user", content: pergunta },
        ],
        temperature: 0.3,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        changeListMsn(false, response.choices[0].message.content);
      })
      .catch((error) => console.error(error));
  };

  const HandleClickShowAndHide = () => {
    setShowBoot(showBoot ? false : true);
  };

  return (
    <>
      {!showBoot && (
        <div onClick={HandleClickShowAndHide} className={style.bootCircle}>
          <TbMessageChatbot />
        </div>
      )}
      {showBoot && (
        <div className={style.ChatBoot}>
          <div className={style.HeaderChatBoot}>
            <div className={style.rowww}>
              <img src={props.img} />

              <span>{props.name}</span>
            </div>

            <IoIosClose onClick={HandleClickShowAndHide} />
          </div>

          <div id="messageBoot" className={style.messageBoot}>
            {message.map((value, index) => {
              return (
                <MessageBoot
                  key={index}
                  creator={value.creator}
                  meesage={value.message}
                />
              );
            })}
          </div>

          <div className={style.inputs}>
            <input id="usermsn" type="text" placeholder="Digite aqui..." />

            <TbSend
              onClick={() =>
                changeListMsn(true, document.querySelector("#usermsn").value)
              }
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Boot;
