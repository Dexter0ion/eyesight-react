import React from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const API = 'http://94.191.13.184:5000/api/'
//const API = 'http://0.0.0.0:5000/api/'
const DEFAULT_QUERY = 'classid'

class BarExample extends React.Component {

  state = {
    bardata: {
      labels: [],
      datasets: [
        {
        }
      ]
    }
  }

  getIdList = () => {
    axios.get(API + DEFAULT_QUERY)
      .then(res => {
        const idlist = Array.from(res.data.idlist);
        console.log(idlist)
        console.log(typeof (idlist))
        this.setState({ idlist })

        var bardata={
          labels: [],
          datasets: [
            {
              label: 'object dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: []
            }
          ]
        }
        for (var key in idlist) {
          console.log(key)
          bardata['labels'].push(idlist[key].name)
          bardata['datasets'][0]['data'].push(idlist[key].cnt)
          console.log(bardata)
        }
        this.setState({ bardata })
      })
      .catch(error => {
        console.log("Error occured while fetching data")
        console.log(error)
      })
  }

  componentDidMount() {
    this.getIdList();
}

  render() {

    return (
      <div>

        <Bar
          data={this.state.bardata}
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

