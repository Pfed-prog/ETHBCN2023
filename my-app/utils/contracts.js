import Factory from "@/utils/contracts/Factory.json";
import ERC20 from "@/utils/contracts/ERC20.json";
import CoinsPair from "@/utils/contracts/CoinsPair.json";

export function getContractInfo(chain) {
  return {
    addressFactory: "0xb4BbeC5107FfFafc947912E7a05e871A312798bf",
    abiFactory: Factory.abi,
  };
}

export function getERC20() {
  return {
    abiERC20: ERC20.abi,
  };
}

export function getPair() {
  return {
    abiPair: CoinsPair.abi,
  };
}
