import { useState } from "react"
import style from "./popoup.module.css"
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa"
const Popoup = (props) => {


    const handleClick = () => {

        window.open('https://api.whatsapp.com/send?phone=5517991736754', '_blank');
    }
    function closePopoup() {

        document.querySelector("#Popoup").addEventListener("click", e => {
            if (e.srcElement.id === "Popoup") {
                props.setVisivel(false)
            } else {

                return
            }
        })

    }








    return (



        <>




            <div onClick={closePopoup} id="Popoup" className={style.popoup}>

                <div className={style.popoupContente}>

                    <span>{props.content.Categoria}</span>
                    <h1>{props.content.Nome}</h1>
                    <p>{props.content.Descricao}</p>


                    <div className={style.feature}><FaCheckCircle />Plataforma EAD disponível 24hs</div>

                    <div className={style.feature}><FaCheckCircle /> Professores renomados
                    </div>

                    <div className={style.feature}><FaCheckCircle />Autorizados pelo MEC
                    </div>

                    <button onClick={handleClick} className={style.whatsapp}>
                        <FaWhatsapp /> Informações pelo Whatsapp
                    </button>





                </div>

            </div>

        </>

    )
}
export default Popoup