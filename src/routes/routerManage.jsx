import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useMemo } from 'react'
import { RoutesPath } from './Routepath'


export const RouterManager = () =>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const route = useMemo (
        () => Object.keys(RoutesPath).map((path) => {
            const RouteComponent = RoutesPath[path];
            return(
                <Route key={path} path={path} element={<RouteComponent />} />
            )
        })
        
    )
    return(
        <BrowserRouter>
         <Routes>
            {route}
         </Routes>
        </BrowserRouter>
    )
}