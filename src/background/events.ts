import BigNumber from "bignumber.js";

export default {
  ping: () => {
    return {
      response: "pong",
      checksum: new BigNumber(123.4567),
    };
  },
};
