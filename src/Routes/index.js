import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/components/Layouts';
import HeaderOnly from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
