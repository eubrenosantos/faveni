import style from "./header.module.css"
import { FaSearch } from "react-icons/fa"
const HeaderHome = ()=>{

    

    return(

        
        
        <>
        


        <header>

            <nav>
                <div className={style.logo}>

                        <img src={"https://faveni.edu.br/wp-content/uploads/sites/10/2019/07/logo.png"} alt="logo-faveni" /></div>

                    <div className={style.row}>

                        <a href="#">HOME</a>
                        <a href="#">PÓS-GRADUAÇÃO</a>
                        <a href="#">CAPACITAÇÃO</a>
                        <a href="#">CONTATO</a>

                        <div className={style.search}>
                            <FaSearch/>
                            <input type="text" name="" id="search"  placeholder="O que está buscando?"/>
                        </div>


                    </div>
            </nav>


        </header>


        </>
    )
}

export default HeaderHome