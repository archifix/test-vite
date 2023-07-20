import { FC, PropsWithChildren } from 'react'
import Header from './Header'
import Navigation from './Navigation'

 const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
    <Header />
    <Navigation/>
    <>{children}</>
    {/* <Footer /> */}
    </>
  )
}
export default Layout
