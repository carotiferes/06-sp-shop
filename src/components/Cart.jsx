import { useContext /* or use in React >=19 */ } from "react"; // used to consume Contexts
// use is more flexible than useContext, for example, it is a hook that can be used inside an IF
import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext); // when value changes, component function gets re-executed

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

/* ANOTHER OPTION (NOT THE BEST) IS TO USE CONSUMER FOR THE CONTEXT:
return (
		<CartContext.Consumer> 
      { (cartCtx) => {
        const totalPrice = cartCtx.items.reduce(
					(acc, item) => acc + item.price * item.quantity,
					0
				);
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return (
					<div id="cart">
						{cartCtx.items.length === 0 && <p>No items in cart!</p>}
						{cartCtx.items.length > 0 && (
							<ul id="cart-items">
								{items.map((item) => {
									const formattedPrice = `$${item.price.toFixed(2)}`;

									return (
										<li key={item.id}>
											<div>
												<span>{item.name}</span>
												<span> ({formattedPrice})</span>
											</div>
											<div className="cart-item-actions">
												<button
													onClick={() => onUpdateItemQuantity(item.id, -1)}
												>
													-
												</button>
												<span>{item.quantity}</span>
												<button
													onClick={() => onUpdateItemQuantity(item.id, 1)}
												>
													+
												</button>
											</div>
										</li>
									);
								})}
							</ul>
						)}
						<p id="cart-total-price">
							Cart Total: <strong>{formattedTotalPrice}</strong>
						</p>
					</div>
				);
      }}
			
		</CartContext.Consumer>
	);
 */