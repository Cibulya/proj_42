
import React, { useEffect, useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import startPreparation from "components/coffeeMachineFront/startPreparation";


const Drinks = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/coffees/")
           .then((response) => {
                if (response.ok) return response.json();
                throw new Error('Bad response');
            })

            .then((response) => { 
                let arrData = [];
                for (let i = 0; i < response.length; i++) {
                    arrData.push(response[i])
                }
                setData(arrData);
                console.log(arrData);
            })

            .catch((err) => console.error(err));
    }, []);

    const [alignment] = React.useState<string | null>('left');

    return (
        <ToggleButtonGroup
            className = "control__middle"
            value={alignment}
            exclusive
            onChange={() => startPreparation() }
        >
            {data && data.map((drinkData: object, index: number) => {
                let className = `drink ${data[index].name.toLowerCase()}`;
                return <ToggleButton value={data && data[index].name} className = {className}>
                    <img src= {data[index].picture} className = "drink__picture"/>
            </ToggleButton>
            })}
        </ToggleButtonGroup>
    );
};

export default Drinks;