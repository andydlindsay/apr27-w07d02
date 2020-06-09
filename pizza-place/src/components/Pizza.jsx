import React from 'react';
import ToppingForm from './ToppingForm';

const Pizza = () => {
  const [pizza, setPizza] = React.useState({
    toppings: ['cheese'],
    crust: 'thick'
  });

  const sentFromChild = (newTopping) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      };
    });
  };

  const onChangeCrust = (newCrust) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        crust: newCrust
      };
    });
  };

  return (
    <div className="pizza">
      <h2>Create your own pizza!</h2>

      <div>
        <label htmlFor="crust">Change Crust</label>
        <input 
          type="text"
          id="crust"
          value={pizza.crust}
          onChange={(event) => onChangeCrust(event.target.value)}
        />
      </div>

      <ToppingForm sentFromChild={sentFromChild} />

      <h4>Toppings:</h4>
      { pizza.toppings.map((topping, index) => {
        return (<p key={index}>{topping}</p>);
      }) }
      <h4>Crust type: {pizza.crust}</h4>
    </div>
  );
};

export default Pizza;
