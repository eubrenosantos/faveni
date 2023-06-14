const Curso = (props)=>{

    const style = {
        background: `url(${props.background}), var(--green-500)`
    }

    const handleCLick = () => {

        props.setConteudo(props.content)
        props.click(true)
        
        

    }

    return(

        
        <>

        
            

        <div onClick={handleCLick} style={style} className="Curso">

            <div className="contenteCurso">
                    <span>{props.content.Categoria}</span>

                    <p>{props.content.Nome}</p>

            </div>


        </div>
        </>
    )
}

export  default Curso 