import React from 'react';
import styles from './Order.module.css';

const order = (props) => {
  // Case 1:
  // let ingredientsOutput = '';
  // for (const [key, value] of Object.entries(props.ingredients)) {
  //   ingredientsOutput += key + '(' + value + ') ';
  // }

  // Case 2:
  let ingredients = [];
  for (const key in props.ingredients) {
    ingredients.push({
      name: key,
      amount: props.ingredients[key],
    });
  }
  const ingredientsOutput = ingredients.map((ig, i) => (
    <span
      key={i}
      style={{
        margin: '0 8px',
        textTransform: 'capitalize',
        border: '1px solid #ccc',
        padding: '5px',
      }}
    >
      {ig.name}({ig.amount})
    </span>
  ));

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
