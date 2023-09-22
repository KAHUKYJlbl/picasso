import { Navigate } from 'react-router-dom';

import { AppRoute } from '../../../app/provider/router';

const MainPage = (): JSX.Element => <Navigate to={AppRoute.Posts} />;

export default MainPage;
