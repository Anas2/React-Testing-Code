import React, { memo } from 'react';

function UseMemoChild({forChild ,fun}) {
    console.log("Child Component Called...");
    
    return (
        <div>
            <h1>Hello From Child</h1>
        </div>
    );
}

export default memo(UseMemoChild);