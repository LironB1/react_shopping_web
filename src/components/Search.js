// import React from 'react'
// import AddToCartButton from "./AddToCartButton"
// import { Container, Button, Item } from 'semantic-ui-react'
// import {  useState } from "react";



// function Search(resulte,addToCart) {
//     const [showAddItem, setShowAddItem] = useState(false);


//   return (
// <Container>
//         <Item.Group relaxed>
//     <Item>
//       <Item.Image size='small'  src={'http://localhost:8000/static'+resulte.image} alt={resulte.name} />

//       <Item.Content verticalAlign='middle'>
//         <Item.Header>{resulte.name}</Item.Header>
//         <Item.Description>{resulte.description}</Item.Description>
//         <Item.Extra>
//           <h4>{resulte.price}</h4>
        
          
//           <Button variant="primary" onClick={() => {setShowAddItem(!showAddItem)}}>{showAddItem ? "Close" : "Add To Cart"}</Button>
//       {showAddItem && <AddToCartButton productId={resulte.id} addToCart={addToCart} />}        </Item.Extra>
//       </Item.Content>

//     </Item>
//     </Item.Group>
    
//     </Container>  )
// }

// export default Search

import React from 'react'
import AddToCartButton from "./AddToCartButton"
import { Container, Button, Item } from 'semantic-ui-react'
import { useState } from "react";

function Search({ result, addToCart }) {
  const [showAddItem, setShowAddItem] = useState(false);

  return (
    <Container>
      <Item.Group relaxed>
        <Item>
          <Item.Image size='small' src={'http://localhost:8000/static' + result.image} alt={result.name} />
          <Item.Content verticalAlign='middle'>
            <Item.Header>{result.name}</Item.Header>
            <Item.Description>{result.description}</Item.Description>
            <Item.Extra>
              <h4>{result.price}</h4>
              <Button variant="primary" onClick={() => { setShowAddItem(!showAddItem) }}>{showAddItem ? "Close" : "Add To Cart"}</Button>
              {showAddItem && <AddToCartButton productId={result.id} addToCart={addToCart} />}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default Search;
