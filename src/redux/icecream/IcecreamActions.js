import { BUY_ICECREAM } from "./IcecreamConstants";

export const buyIcecream = function (number) {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};
