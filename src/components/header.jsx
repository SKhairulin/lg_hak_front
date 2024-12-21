import { useContext, useEffect, useState } from 'react';
import { Context } from '../index'
import { ModalLogReg } from '../ui/modal/ModalLogReg';
import { typeLog, typeReg } from '../config/consts';
import { login, reg } from '../api/authAPI';
import { Notification } from '../ui/Notific/Notification';

export const Header = () => {
    const { user } = useContext(Context)
    const [showModal, setShowModal] = useState(false)
    const [typeWindow, setTypeWindow] = useState('')
    const [data, setData] = useState({ username: '', email: '', password: '' })
    const [notif, setNotif] = useState({ visible: false, message: '' })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const logRegAction = () => {
        if (typeWindow === typeLog)
            login({ username: data.username, password: data.password }).then(ans => {
                setNotif(prev => { return { visible: true, message: 'Успешно авторизован' } })
                user.setIsAuth(true)
                user.setUserName(data.username)
                setShowModal(false)
            })
                .catch(ans => setNotif(prev => { return { visible: true, message: 'Не удалось авторизоваться' } }))

        if (typeWindow === typeReg)
            reg({ username: data.username, password: data.password, email: data.email }).then(ans => {
                setNotif(prev => { return { visible: true, message: 'Регистрация прошла успешно' } })
                setShowModal(false)
            })
                .catch(ans => setNotif(prev => { return { visible: true, message: 'Не удалось зарегистрироваться' } }))

    }

    return (
        <>
            <header className="u-clearfix u-header u-sticky u-sticky-08cb u-header" id="sec-0ba6" style={{ position: 'relative', margin: 0, justifyContent: 'center' }}>
                <div className="" style={{ alignItems: 'center', width: '100%', display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
                    <div>
                        <a href="#" className="u-image u-logo" style={{ display: 'flex' }}>
                            <img src="images/default-logo.png" className="u-logo-image u-logo-image-1" />
                        </a>
                    </div>
                    <div>
                        <nav className="">
                            <div className="menu-collapse" style={{ fontSize: '1rem', letterSpacing: '0px' }}>
                                <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-hamburger-link u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                                </a>
                            </div>
                            <div className="u-nav-container">
                                <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item">
                                </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="./" style={{ padding: '10px 20px' }}>Главная</a>
                                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="" style={{ padding: '10px 20px' }}>Лендинг</a>
                                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="" style={{ padding: '10px 20px' }}>Контакты</a>
                                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="" style={{ padding: '10px 20px' }}>О нас</a>
                                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="" style={{ padding: '10px 20px' }}>Команда</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="u-nav-container-collapse">
                                <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                    <div className="u-inner-container-layout u-sidenav-overflow">
                                        <div className="u-menu-close"></div>
                                        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="">Страница 1</a>
                                        </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="./">Главная</a>
                                            </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="">Лендинг</a>
                                            </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="">Контакты</a>
                                            </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="">О нас</a>
                                            </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="">Команда</a>
                                            </li></ul>
                                    </div>
                                </div>
                                <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                            </div>
                        </nav>
                    </div>
                    <div>
                        {user.isAuth ? 
                        <div style={{display:'flex', alignContent:'center'}}>
                        Добро пожаловать, {user.userName}
                        <img src='images/exit.png' style={{marginLeft:'30px',width:'17px', height:'17px', cursor:'pointer'}}/>
                        </div>
                        :
                        <div>
                        <div className='u-nav-item'><a onClick={() => { setTypeWindow(typeLog); setShowModal(true) }} className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ marginRight: '20px', cursor: 'pointer' }} >Войти</a></div>
                        <div className='u-nav-item'><a onClick={() => { setTypeWindow(typeReg); setShowModal(true) }} className="u-nav-item u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" style={{ cursor: 'pointer' }}>Регистрация</a>
                        </div>
                        </div>
                        }
                        
                    </div>
                </div></header>

            <ModalLogReg
                show={showModal}
                onHide={() => setShowModal(false)}
                type={typeWindow}
                changeType={setTypeWindow}
                actionBtn={logRegAction}
                data={data}
                handleChange={handleChange}
            />

            <Notification message={notif.message} visible={notif.visible} duration={2000} setVis={vis => setNotif(prev => prev.visible = vis)} />
        </>
    )
}
