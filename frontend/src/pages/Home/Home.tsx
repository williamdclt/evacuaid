import * as React from 'react';
import './Home.style.scss';

const Home: React.FunctionComponent = () => (
  <div>
    <h2 className="home__welcome">Hi John Doe</h2>
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
