'use client';

import React, { useState } from 'react'

const OperatorLookUp = () => {
    const [operator, setOperator] = useState<string>("");

    return (
        <div className='flex flex-col items-center'>
            <h1>Operator Look Up</h1>
            <h3>Enter a javascript operator to learn more about it:</h3>

            <div>
                <input></input>
            </div>
        </div>
    )
}

export default OperatorLookUp