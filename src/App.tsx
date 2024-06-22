import { Form } from './components/form';
import { Main } from './pages/main/index.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeAuthorizationStatus } from './shared/slices/authorization-slice.ts';
import { Store } from './app/type.ts';
function App() {
    const isAuthorizated = useSelector(
        (state: Store) => state.authorization.isAuthorizated,
    );
    const dispatch = useDispatch();

    if (localStorage.getItem('token')) {
        dispatch(changeAuthorizationStatus(true));
    }
    return <>{isAuthorizated ? <Main /> : <Form />}</>;
}

export default App;
