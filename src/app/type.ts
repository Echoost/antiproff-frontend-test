export interface FavouriteList {
    id: string;
}

export interface Authorization {
    isAuthorizated: boolean;
}

export type Store = {
    favouriteList: FavouriteList[];
    authorization: Authorization;
};
