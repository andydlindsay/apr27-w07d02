import React from 'react';

const ToppingForm = (props) => {
  const [newTopping, setNewTopping] = React.useState('');

  const onAddTopping = () => {
    props.sentFromChild(newTopping);
    setNewTopping('');
  };

  return (
    <div className="topping-form">
      <h3>Add Topping Form</h3>
      <div>
        <label htmlFor="new-topping">New Topping</label>
        <input 
          type="text"
          id="new-topping"
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button
          onClick={onAddTopping}
        >Add Topping</button>
      </div>
    </div>
  )
};

export default ToppingForm;
