import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['people', 'car', 'bus', 'bike', 'bird', 'cat', 'other'],
  datasets: [
    {
      label: 'object dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [10, 2, 2, 7, 3, 2, 1]
    }
  ]
};

class BarExample extends React.Component {

  render() {

    return (
      <div>

        <Bar
          data={data}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}


export default BarExample;

