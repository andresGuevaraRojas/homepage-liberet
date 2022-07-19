import style from "./Modal.module.css";
function Modal({show,title,children}){    
    return (
        show&&
        <div className={style.container}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.body}>
                {children}
            </div>
        </div>
    )
}
export default Modal;