import React, { useContext, useEffect } from 'react';
import { Context } from '../../../index.js';

function Logout() {
    const { setIsAuthorized, setUser } = useContext(Context);

    useEffect(() => {
        setUser(false);
        setIsAuthorized(false);
        window.location.href = '/';
    }, [setIsAuthorized, setUser]);

    return null; // Render nothing since this component is for side effects only
}

export default Logout;
