import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import ClayChart from '@clayui/charts';

export default function ChartComponent() {
    const [active, setActive] = useState(false);

    const COLUMNS = [
        ["data1", 100, 20, 30],
        ["data2", 20, 70, 100]
    ];
    const COLUMNS_2 = [
        ["data1", 10, 50, 60],
        ["data2", 70, 30, 10]
    ];

    return (
        <div>
            <button onClick={ () => setActive(val => !val) }>{ "Change Data" }</button>

            <ClayChart
                data={ {
                    columns: active ? COLUMNS : COLUMNS_2,
                    type: "bar"
                } }
            />
        </div>
    );
};