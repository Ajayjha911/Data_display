import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";
import Data from "./Data.json";

import React, { Component } from "react";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [Data.published],
        datasets: [
          {
            label: "Forcast Year",
            data: [],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
        <Bubble data={this.state.chartData} options={{}} />
      </div>
    );
  }
}
