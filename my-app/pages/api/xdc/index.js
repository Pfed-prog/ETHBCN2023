import { ethers, JsonRpcProvider, formatEther } from "ethers";

import { getContractInfo } from "@/utils/contracts";
import CoinsPair from "@/utils/contracts/CoinsPair.json";
import ERC20 from "@/utils/contracts/ERC20.json";

export default async function handler(req, res) {
  try {
    const { addressFactory, abiFactory } = getContractInfo();

    const provider = new JsonRpcProvider("https://rpc.xinfin.network");

    const contract = new ethers.Contract(addressFactory, abiFactory, provider);

    const Npairs = await contract.allPairsLength();

    const currentCount = Number(Npairs);
    // console.log(currentCount);

    let items = [];

    for (let i = currentCount; i > 0; i--) {
      const pairAddress = await contract.allPairs(i - 1);
      const Pair = new ethers.Contract(pairAddress, CoinsPair.abi, provider);

      const token0 = await Pair.token0();
      const token1 = await Pair.token1();

      const Token0 = new ethers.Contract(token0, ERC20.abi, provider);
      const Token1 = new ethers.Contract(token1, ERC20.abi, provider);

      const name0 = await Token0.name();
      const name1 = await Token1.name();

      const reserves = await Pair.getReserves();

      const reserves0 = Number(reserves[0]).toString();

      const reserves1 = formatEther(Number(reserves[1]).toString());

      const supply = formatEther(Number(await Pair.totalSupply()).toString());

      items.push({
        token0Address: token0,
        token1Address: token1,
        token0Name: name0,
        token1Name: name1,
        token0Reserves: reserves0,
        token1Reserves: reserves1,
        totalSupply: supply,
        pairAddress: pairAddress,
      });
    }

    res.status(200).json(items);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" + err });
  }
}
