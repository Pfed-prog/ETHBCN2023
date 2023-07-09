import Factory from "@/utils/contracts/Factory.json";
import ERC20 from "@/utils/contracts/ERC20.json";
import CoinsPair from "@/utils/contracts/CoinsPair.json";

export function getContractInfo(chain) {
  return {
    addressFactory: "0xf1926218c9D7c198bB3A4A0fbA989e06a4a97267",
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

export function expandTo18Decimals(n) {
  return BigInt(n * 10 ** 18);
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
