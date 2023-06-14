import { useEffect, useState } from "react";
import style from "./boot.module.css";
import { } from "react-icons";
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
      return
    }
  };

  const BootResponde = (pergunta) => {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "responda tudo em portugues, de uma forma dinamica e fluida e seja muit simpático",
          },
          {
            role: "user",
            content:
              "Agora seu nome é Jaque e sua função é tirar todas as dúvidas e ajudar os clientes da Faveni",
          },
          {
            role: "user",
            content:
              "responda tudo em portugues e de uma forma dinamica e fluida",
          },
          { role: "user", content: pergunta }
        ],
        temperature: 0.6,
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
              <img src="https://media.licdn.com/dms/image/D4D03AQFkwIVUj3P0qA/profile-displayphoto-shrink_100_100/0/1680559130777?e=1692230400&v=beta&t=zXvMcYvV8GN69k52qJDqxHsfFmYpPp3BcaFqi0XIjKA" />

              <span>Breno Santos</span>
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
