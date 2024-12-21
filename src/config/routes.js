import { MainPage } from "../components/mainPage"
import { PersAccTrainer } from "../components/persAcc/persAccTrainer"
import { PersAccVisitor } from "../components/persAcc/persAccVisitor"
import { ACCTRAINER_ROUTE, MAIN_ROUTE, PERSACC_ROUTE } from "./consts"

export const authRoutes = [
    {
        path: PERSACC_ROUTE,
        Component: PersAccVisitor
    },
    {
        path: ACCTRAINER_ROUTE,
        Component: PersAccTrainer
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
]