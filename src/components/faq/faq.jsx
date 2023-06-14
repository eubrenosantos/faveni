import { FiArrowRightCircle, FiArrowDownCircle  } from "react-icons/fi"
import style from "./faq.module.css"
import { useState } from "react"

const Faq = (props)=>{

    const [ visibliAll, setVisibliAll] = useState(false)

    const handleClick = ()=>{

        setVisibliAll(visibliAll ? false : true)
    }

    return(
        <>


            <div onClick={handleClick} className={style.faq}>
                <span>{props.title}{visibliAll ? <FiArrowRightCircle /> : <FiArrowDownCircle />}</span>

                {visibliAll && <div className={style.contenteFaq}>

                    {props.content}

                </div>}

                
                
        </div>

            

        </>
    )


}

export default Faq
