import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoutes } from './Routes/index';
import { Fragment } from 'react';
import DefaultLayout from './Layouts/DefaultLayout';
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
                    console.log(route.path, route.layout == null);
                    console.log(route.path, route.layout === null);
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
