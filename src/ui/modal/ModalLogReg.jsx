import { typeLog, typeReg } from "../../config/consts"
import Modal from 'react-modal';
import './LogRegStyle.css'

export const ModalLogReg = ({show, onHide, type,changeType, actionBtn, data, handleChange}) => {
    return (
    <Modal 
        isOpen={show} 
        onRequestClose={onHide} 
        ariaHideApp={false}
        className="modal"
        overlayClassName="overlay"
      >
        {type === typeLog ?
            <>
                <h2>Вход</h2>
                <div className="modalForm">
                <label>
                    Имя пользователя:
                    <input type="text" name='username' value={data.username} onChange={e=>handleChange(e)}/>
                </label>
                <label>
                    Пароль:
                    <input type="password" name='password' value={data.password} onChange={e=>handleChange(e)}/>
                </label>
                <div>Нет учетной записи? <a onClick={()=>changeType(typeReg)} style={{cursor:'pointer'}}>Зарегистрироваться</a></div>
                <div className="button-container">
                    <button className="submitButton" onClick={()=>actionBtn()}>Войти</button>
                    <button onClick={onHide} className="closeButton">Закрыть</button>
                </div>
                
                </div>
            </>
            :
            type === typeReg ?
            <>
             <h2>Регистрация</h2>
                <div className="modalForm">
                <label>
                    Имя пользователя:
                    <input type="text" name="username" placeholder="Имя пользователя" value={data.username} onChange={e=>handleChange(e)}/>
                </label>
                <label>
                    Электронная почта:
                    <input type="email" name="email"  placeholder="example@mail.ru" value={data.email} onChange={e=>handleChange(e)}/>
                </label>
                <label>
                    Пароль:
                    <input type="password" name="password"  placeholder="******" value={data.password} onChange={e=>handleChange(e)}/>
                </label>
                <div>Есть учетная запись? <a onClick={()=>changeType(typeLog)} style={{cursor:'pointer'}}>Войти</a></div>
                <div className="button-container">

                    <button className="submitButton" onClick={()=>actionBtn()}>Регистрация</button>
                    <button onClick={onHide} className="closeButton">Закрыть</button>
                </div>
                
                </div>
            </>
            :
            ''
        }
        
        
      </Modal>
    )
}