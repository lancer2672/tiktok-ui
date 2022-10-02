import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoutes } from './Routes/index';
import { Fragment } from 'react';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App"></div>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.component></route.component>
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
