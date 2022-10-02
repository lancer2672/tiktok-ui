import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/components/Layouts';
import HeaderOnly from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
