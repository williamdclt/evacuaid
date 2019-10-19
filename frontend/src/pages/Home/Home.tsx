import * as React from 'react';
import { Icon } from '@blueprintjs/core';
import { Doughnut } from 'react-chartjs-2';
import './Home.style.scss';
import { ChartData } from 'chart.js';

const data: ChartData = {
  datasets: [
    {
      data: [12, 100 - 12],
      backgroundColor: ['#5eb7b7', '#edf8f6'],
      hoverBackgroundColor: ['#96d1c7', '#edf8f6'],
      borderColor: ['#edf8f6', '#edf8f6'],
      borderWidth: [0, 0],
    },
  ],
};

const Home: React.FunctionComponent = () => (
  <div className="container-fluid">
    <div className="row mb-lg">
      <div className="col-6">
        <h2 className="page-title">My Dashboard</h2>
        <div className="mb-md">
          <Icon icon="warning-sign" color="#5eb7b7" iconSize={24} />
          &nbsp;
          <strong>Current status:</strong> <span className="bold">inactive</span>
        </div>
        <p className="mb-md">
          There are no reported crisis in your area, nor are there evacuees looking for help.
        </p>
      </div>
      <div className="col-6">
        <div className="home__risk">
          <div className="home__risk__chart">
            <div className="home__risk__score">13.6%</div>
            <Doughnut data={data} options={{ cutoutPercentage: 90 }} />
          </div>
          <div className="home__risk__caption">Current wildfire risk in your area</div>
        </div>
      </div>
    </div>
    <div className="home__portal">
      <div className="home__portal__item">
        Current status:
        <br />
        Inactive
      </div>
      <div className="home__portal__item">View collectives near me</div>
      <div className="home__portal__item">Preventing the spread of wildfire</div>
      <div className="home__portal__item">View or update my personal address</div>
      <div className="home__portal__item">View or update other details</div>
      <div className="home__portal__item home__portal__item--placeholder" />
    </div>
  </div>
);

export default Home;
