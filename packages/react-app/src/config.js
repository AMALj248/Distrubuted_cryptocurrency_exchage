import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xD15Bf5d7fE568022709d877f09dF79FA151D726D"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/T76qMKAJlenC2z6_w8iNFgRfjf7GjAaY",
  },
};