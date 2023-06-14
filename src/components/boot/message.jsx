import style from "./boot.module.css"

const MessageBoot = (props) => {

    const estilo = {
        backgroundColor: props.creator ? "var(--green-500)" : "var(--white-500)",
        borderRadius: props.creator ? "10px 10px 0 10px" : "10px 10px 10px 0",
        color: props.creator ? "var(--white-500)" : "var(--black-300)",
        alignSelf: props.creator ? "end" : "start",

    }

    return (
        <>

            <div style={estilo} className={style.message}>

                {props.meesage}

            </div>

        </>
    )

}

export default MessageBoot