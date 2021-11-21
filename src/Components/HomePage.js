import BelowHeader from './Sliders/BelowHeader.components';
import Premiers from './Sliders/Premiers.components';
import OnlineStreamingEvents from './Sliders/OnlineSE.components';
import OutdoorEvents from './Sliders/OutdoorEve.components';
import Entertainment from './Sliders/entertainment.components';
import LaughterEvents from './Sliders/Laugh.components';
import PopEvents from './Sliders/pop.compenents';
import SportsEvents from './Sliders/topgamesports.components';


function HomePage() {
    return (
      <>
        <BelowHeader/>
        <Entertainment/>
        <Premiers/>
        <OnlineStreamingEvents/>
        <OutdoorEvents/>
        <LaughterEvents/>
        <PopEvents/>
        <SportsEvents/>
      </>
    );
  }
  
  export default HomePage;