import Header from '~/Layouts/components/Header/index';
import Sidebar from '~/Layouts/DefaultLayout/Sidebar/index';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
