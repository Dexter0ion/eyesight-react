import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'person',
		'other',
		'table'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class DoughnutExample extends React.Component {

  render() {

    return (
			<div>
			<Doughnut data={data} />
		</div>
    );
  }
}


export default DoughnutExample;


