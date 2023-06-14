import style from "./header.module.css"
import { FaSearch, FaWhatsapp } from "react-icons/fa"

const HeaderHome = ()=>{

    

    return(

        
        
        <>
        


        <header>

            <nav>
                <div className={style.logo}>

                        <img src={"https://faveni.edu.br/wp-content/uploads/sites/10/2019/07/logo.png"} alt="logo-faveni" /></div>

                    <div className={style.row}>

                        <a href="./">HOME</a>
                        <a href="#">PÓS-GRADUAÇÃO</a>
                        <a href="#">CAPACITAÇÃO</a>                        
                        <a className="whatsapp" href="https://api.whatsapp.com/send?phone=5517991736754">
                            <FaWhatsapp />FALE COM A GENTE</a>


                        


                    </div>
            </nav>


        </header>


        </>
    )
}

export default HeaderHome