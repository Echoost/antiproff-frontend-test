import './index.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { useLazyGetUsersQuery } from '../../shared/api/users-api';
import { changeAuthorizationStatus } from '../../shared/slices/authorization-slice';
import { changeFavouritesStatus } from '../../shared/slices/favourites-slice';
import { User } from '../../shared/api/type';
import { FavouriteList, Store } from '../../app/type';

export const Main = () => {
    const [getUsers, { data: team }] = useLazyGetUsersQuery();
    const [isShowed, setIsShowed] = useState(false);
    const favouriteList = useSelector((state: Store) => state.favouriteList);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers(8);
    }, [getUsers]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(changeAuthorizationStatus(false));
    };

    const handleMore = () => {
        getUsers(12);
        setIsShowed(true);
    };

    const handleFavourite = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        const id = (event.target as HTMLImageElement).id;
        dispatch(changeFavouritesStatus(id));
    };

    const isFavourite = (id: string) => {
        return favouriteList.some((item: FavouriteList) => item.id == id);
    };

    return (
        <>
            <header className="main-header">
                <div className="main-button">
                    <Button
                        className="main-logout-button"
                        onClick={handleLogout}
                        primary
                        margin="32px 80px 0 0"
                    >
                        Выход
                    </Button>
                    <img
                        className="main-logout-button-mobile"
                        src="../src/assets/icons/logout-mobile.svg"
                        alt="logout button"
                        onClick={handleLogout}
                    />
                </div>
                <h1 className="main-title">Наша команда</h1>
                <p className="main-description">
                    Это опытные специалисты, хорошо разбирающиеся во всех
                    задачах, которые ложатся на их плечи, и умеющие находить
                    выход из любых, даже самых сложных ситуаций.
                </p>
            </header>
            <div className="main-cards">
                {team?.data.map((card: User) => (
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`contacts/${card.id}`}
                        key={card.id}
                        className="main-card"
                    >
                        <img className="main-image" src={card.avatar} />
                        <p className="main-card-name">
                            {card.first_name} {card.last_name}
                        </p>

                        <img
                            id={card.id.toString()}
                            onClick={handleFavourite}
                            className="main-card-like"
                            src={
                                isFavourite(card.id)
                                    ? '../src/assets/icons/like-active.svg'
                                    : '../src/assets/icons/like.svg'
                            }
                        />
                    </Link>
                ))}
            </div>
            {!isShowed && (
                <div className="main-more">
                    <Button
                        onClick={handleMore}
                        width="170px"
                        margin="56px 0 0 0"
                    >
                        Показать еще
                    </Button>
                </div>
            )}
        </>
    );
};
