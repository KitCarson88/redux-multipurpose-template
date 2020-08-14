export interface SecureStorageState
{
    infos: {
        favouriteTests: any[]
    }
}

export const INITIAL_STATE_SECURE_STORAGE: SecureStorageState = {
    infos: {
        favouriteTests: null
    }
};
