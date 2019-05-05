import React from 'react';
import { Doughnut } from 'react-chartjs-2';

//functional component
const DougnutTarget = (props) => {
    return (
        <div>
            {props.data ? (

                <Doughnut data={props.data} />
            ) : null}

        </div>
    );
}
export default DougnutTarget;