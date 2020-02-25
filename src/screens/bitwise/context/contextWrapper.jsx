import React, { useContext } from 'react';

import BitwiseProvider from './bitwiseProvider';

function BitwiseProviderWrapper({children}) {
    return (
        <BitwiseProvider>
            {children}
        </BitwiseProvider>
    );
}

export default BitwiseProviderWrapper;


