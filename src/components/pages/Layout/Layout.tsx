import { FC, PropsWithChildren } from 'react'
import Header from './Header'

 const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
    <Header />
    <div className='container'>{children}</div>
    {/* <Footer /> */}
    </>
  )
}
export default Layout
