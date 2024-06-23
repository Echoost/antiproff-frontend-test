import './index.css';
import { useLoaderData, useNavigate, Params } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import store from '../../app/store';
import { Button } from '../../components/button';
import { singleUserApi } from '../../shared/api/single-user-api';
import { User } from '../../shared/api/type';
import { changeAuthorizationStatus } from '../../shared/slices/authorization-slice';

interface LoaderData {
    data: User;
}

export const contactLoader = async ({ params }: { params: Params<string> }) => {
    if (!params?.contactId) {
        throw new Error('contactId is required');
    }
    try {
        const promise = await store.dispatch(
            singleUserApi.endpoints.getUser.initiate(params.contactId),
        );
        const data = promise?.data?.data;
        return { data };
    } catch (error) {
        console.log(error);
    }
};

export const Contact = () => {
    const { data } = useLoaderData() as LoaderData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBack = () => {
        navigate(-1);
    };

    const handleLogout = () => {
        navigate(-1);
        localStorage.removeItem('token');
        dispatch(changeAuthorizationStatus(false));
    };

    return (
        <>
            <header className="contact-header">
                <div className="contact-wrapper">
                    <Button
                        className="contact-back-button"
                        primary
                        onClick={handleBack}
                    >
                        Назад
                    </Button>
                    <img
                        className="contact-back-button-mobile"
                        src="/icons/arrow-back-mobile.svg"
                        alt="back button"
                        onClick={handleBack}
                    />
                    <div className="contact-information">
                        <img
                            className="contact-image"
                            src={data.avatar}
                            alt={`${data.first_name}'s image`}
                        />
                        <div className="contact-text">
                            <div className="contact-name">
                                {data.first_name} {data.last_name}
                            </div>
                            <div className="contact-position">Партнер</div>
                        </div>
                    </div>
                    <Button
                        className="contact-logout-button"
                        primary
                        onClick={handleLogout}
                    >
                        Выход
                    </Button>
                    <img
                        className="contact-logout-button-mobile"
                        src="/icons/logout-mobile.svg"
                        alt="logout button"
                        onClick={handleLogout}
                    />
                </div>
            </header>
            <div className="contact-main">
                <div className="contact-text-block">
                    <div className="contact-description">
                        Клиенты видят в нем эксперта по вопросам разработки
                        комплексных решений финансовых продуктов, включая такие
                        аспекты, как организационная структура, процессы,
                        аналитика и ИТ-компоненты. Он помогает клиентам лучше
                        понимать структуру рисков их бизнеса, улучшать процессы
                        за счет применения новейших технологий и увеличивать
                        продажи, используя самые современные аналитические
                        инструменты.
                    </div>
                    <div className="contact-description">
                        В работе с клиентами недостаточно просто решить
                        конкретную проблему или помочь справиться с трудностями.
                        Не менее важно уделять внимание обмену знаниями: "Один
                        из самых позитивных моментов — это осознание того, что
                        ты помог клиенту перейти на совершенно новый уровень
                        компетентности, уверенность в том, что после окончания
                        проекта у клиента есть все необходимое, чтобы дальше
                        развиваться самостоятельно".
                    </div>
                    <div className="contact-description">
                        Помимо разнообразных проектов для клиентов финансового
                        сектора, Сорин ведет активную предпринимательскую
                        деятельность. Он является совладельцем сети клиник
                        эстетической медицины в Швейцарии, предлагающей
                        инновационный подход к красоте, а также инвестором
                        других бизнес-проектов.
                    </div>
                </div>
                <div className="contact-contacts">
                    <div className="contact-email">
                        <img src="/icons/email.svg" alt="email icon" />
                        <p>{data.email}</p>
                    </div>
                    <div className="contact-phone">
                        <img src="/icons/phone.svg" alt="phone icon" />
                        <a
                            className="contact-phone-link"
                            href="tel:+7 (954) 333-44-55"
                        >
                            +7 (954) 333-44-55
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
