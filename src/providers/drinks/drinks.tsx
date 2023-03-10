import React, { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import startPreparation from 'components/coffeeMachineFront/startPreparation';
import { MsgNoResourcesPropsType } from 'components/coffeeMachineFront/addIndicators';

interface Drink {
  name: string;
  recipe: string;
  picture: string;
  size: string;
  index: string;
}

const Drinks = ({ msgNoResources, enjoy, choose }: MsgNoResourcesPropsType) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://guiseppe-production.up.railway.app/coffees/')
      .then((response) => {
        if (response.ok) return response.json();
      })

      .then((response) => {
        const arrData = [];
        for (let i = 0; i < response.length; i++) {
          arrData.push(response[i]);
        }
        setData(arrData);
      })

      .catch((err) => console.error(err));
  }, []);

  const [alignment] = React.useState<string | null>('left');

  return (
    <ToggleButtonGroup
      className="control__middle hidden"
      value={alignment}
      exclusive
      onChange={() => startPreparation(msgNoResources, enjoy, choose)}
    >
      {data &&
        data.map((drinkData: Drink) => {
          const className = `drink ${drinkData.name.toLowerCase()}`;
          return (
            <ToggleButton
              key={drinkData.index}
              value={data && drinkData.name}
              className={className}
              data-size={drinkData.size}
              name={drinkData.recipe}
            >
              <img src={drinkData.picture} className="drink__picture" />
            </ToggleButton>
          );
        })}
    </ToggleButtonGroup>
  );
};

export default Drinks;
