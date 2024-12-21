import { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { MAIN_ROUTE } from './consts';

const AppRouter = observer(()=>{                                                         //Переход по страницам
    const {user} = useContext(Context);

    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>                     //Авторизованные пользователи только по авторизованным маршрутам
                <Route  key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>}  exact/>
            )}
            <Route path="*" element={<Navigate to ={MAIN_ROUTE} />}/>           
        </Routes>                                                               //Другие маршруты не воспримаются, возврат на главную страницу
    )
})

export default AppRouter;