import React from 'react'

function memo({ name }) {
    console.log('Rendering Memo Comp')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(memo)
