// * usereducer
import { createContext, useContext, useReducer } from "react";

//*menyimpan state
const TotalPriceContext = createContext(null);
//*menyimpan action
const TotalPriceDispatchContext = createContext(null);

//*reducer menerima action,mengubah state,mengembalikan state baru
const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unkwon action: " + action.type);
    }
  }
};
export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

//*custom hooks
export function useTotalPrice() {
  return useContext(TotalPriceContext);
}
export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
