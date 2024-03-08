import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AuthLayout } from '../../layouts/auth-layout/AuthLayout'
import { MainLayout } from '../../layouts/main-layout/MainLayout'

import { Home } from '../../pages/home/Home'
import { FigurinePage } from '../../pages/figurine/FigurinePage'
import { FigurinePageCreate } from '../../pages/figurine-create/FigurinePageCreate'
import { FigurineOnlyReadProperties } from '../../pages/figurine-only-read/Figurine-only-read'
import { FigurineProperties } from '../../pages/figurine-edit-properties/Figurine-edit-properties'
import { PlayerPage } from '../../pages/player/PlayerPage'
import { PlayerOnlyReadProperties } from'../../pages/player-only-read/Player-only-read'
import { PlayerPageCreate } from '../../pages/player-create/PlayerPageCreate'
import { PlayerProperties } from '../../pages/player-edit-property/Player-edit-properties'

import { PointOfSalePage } from '../../pages/pointOfSalePage/PointOfSalePage'
import { ErrorPage } from '../../pages/error-page/ErrorPage'
import { Login } from '../../pages/login/Login'
import { ProtectedRoutes } from '../guards/protected-routes/ProtectedRoutes'
import { PointOfSaleEditPage } from '../../pages/pointOfSale-edit/PointOfSaleEditPage'
import { PointOfSaleDetailPage } from '../../pages/pointOfSale-read/PointOfSaleDetailPage'
import { PointOfSaleCreatePage } from'../../pages/pointOfSale-create/PointOfSaleCreatePage'

export const PrincipalRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path = "/auth" element = { <AuthLayout /> }>
            <Route exact path = "/auth/login" element = { <Login /> }/>
          </Route>
          <Route element = { <ProtectedRoutes /> }>
            <Route exact path = "/" element = { <MainLayout /> }>
              <Route exact path = "/home" element = { <Home /> } />
              <Route exact path = "/figurines" element = { <FigurinePage /> } />
              <Route exact path = "/figurine-properties/:id" element = { <FigurineOnlyReadProperties /> } />
              <Route exact path = "/edit-figurine/:id" element = { <FigurineProperties /> } />
              <Route exact path = "/create-figurine" element = { <FigurinePageCreate /> } />
              <Route exact path = "/players" element = { <PlayerPage /> } />
              <Route exact path = "/player-properties/:id" element = { <PlayerOnlyReadProperties /> } />
              <Route exact path = "/edit-player/:id" element = { <PlayerProperties /> } />
              <Route exact path = "/create-player" element = { <PlayerPageCreate /> } />              
              <Route exact path = "/point-of-sales" element = { <PointOfSalePage /> } />
              <Route exact path = "/create-point-of-sales" element = { <PointOfSaleCreatePage /> } />
              <Route exact path = "/detail-point-of-sales/:id" element = { <PointOfSaleDetailPage /> } />
              <Route exact path = "/edit-point-of-sales/:id" element = { <PointOfSaleEditPage /> } />
              <Route exact path = "*" element = { <ErrorPage /> } />
            </Route>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}