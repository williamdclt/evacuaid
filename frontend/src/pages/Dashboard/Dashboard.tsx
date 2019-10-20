import * as React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@blueprintjs/core';
import { Doughnut } from 'react-chartjs-2';
import { getRating } from '../../services/networking/rating';
import { PATHS } from 'routes';
import { Link as RouterLink } from 'react-router-dom';
import Button from 'components/Button';

import './Dashboard.style.scss';
import { ChartData } from 'chart.js';
import { RootState } from 'redux/types';

const Dashboard: React.FunctionComponent = () => {
  const [rating, setRating] = React.useState<number>();
  const userData: any = useSelector((state: RootState) =>
    state.form && state.form.user ? state.form.user.values : null,
  );
  const address = userData
    ? `${userData.addressLine1 || ''} ${userData.addressLine2 || ''} ${userData.countyOrState ||
        ''} ${userData.postCode || ''}`
    : '';
  React.useEffect(
    () => {
      setTimeout(() => (address ? getRating(address).then(setRating) : setRating(24)), 1000);
    },
    [address, setRating],
  );

  const data: ChartData = {
    datasets: [
      {
        data: [rating || 0, rating ? 100 - rating : 100],
        backgroundColor: ['#5eb7b7', '#edf8f6'],
        hoverBackgroundColor: ['#96d1c7', '#edf8f6'],
        borderColor: ['#edf8f6', '#edf8f6'],
        borderWidth: [0, 0],
      },
    ],
  };

  const evacuaidDonate = () => {
    console.log("test")
    // @ts-ignore
      var stripe = Stripe('pk_test_AEvwREWMkPYMecGclbzXDc3v00WeSmfw68');
        stripe.redirectToCheckout({
          items: [{sku: 'sku_G1iTf1DWmzGsRS', quantity: 1}],
          successUrl: 'https://evacuaid.me/dashboard',
          cancelUrl: 'https://evacuaid.me/dashboard',
        })
        .then(() => null);
  }

  return (
    <div className="container-fluid">
      <div className="row mb-lg">
        <div className="col-6">
          <h2 className="page-title">My Dashboard</h2>
          <div className="mb-md">
            <a href="javascript:$zopim.livechat.window.show();">
              <Button>+&nbsp;&nbsp;Report a Crisis</Button>
            </a>
          </div>
          <div className="mb-md">
            <Icon icon="warning-sign" color="#5eb7b7" iconSize={24} />
            &nbsp;
            <strong>Current status:</strong> <span className="bold">Inactive</span>
          </div>
          <p className="mb-md">
            There are no reported crisis in your area, nor are there evacuees looking for help.
          </p>
        </div>
        <div className="col-6">
          <div className="home__risk">
            <div className="home__risk__chart">
              <div className="home__risk__score">
                {rating !== undefined ? rating + '%' : 'Loading'}
              </div>
              <Doughnut data={data} options={{ cutoutPercentage: 90 }} />
            </div>
            <div className="home__risk__caption">Current wildfire risk in your area</div>
          </div>
        </div>
      </div>
      <div className="home__portal">
        <div className="home__portal__item">View collectives near me</div>
        <div className="home__portal__item">My offer for accommodation</div>
        <div className="home__portal__item">The resources I need</div>
        <div className="home__portal__item">The resources I can provide</div>
        <RouterLink className="home__portal__item" to={PATHS.EVENTS}>
          Live Events
        </RouterLink>
        <RouterLink className="home__portal__item" to={PATHS.BOT}>
          EvacuBot 🤖
        </RouterLink>
        <div className="home__portal__item" onClick={() => evacuaidDonate()}>Donate to your collective</div>
      </div>
    </div>
  );
};

export default Dashboard;
