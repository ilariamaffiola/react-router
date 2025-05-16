import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
const DefaultLayout = () => {
  return (
    <>
        <header>
            <MainNavbar />
        </header>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    </>
)}

export default DefaultLayout
