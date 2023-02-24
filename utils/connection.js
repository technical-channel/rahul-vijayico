import { ethers } from "ethers";

export const getProvider = () => {
  let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:8545");
  return provider;
};
