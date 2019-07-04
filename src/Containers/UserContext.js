import { createContext } from 'react';

const UserContext = createContext({
    message: '',
    title: '',
    toggle: () => { }
});

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext as default };
