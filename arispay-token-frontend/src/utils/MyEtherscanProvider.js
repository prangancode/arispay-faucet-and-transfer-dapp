import { EtherscanProvider } from "ethers";

export default class MyEtherscanProvider extends EtherscanProvider {
  // eslint-disable-next-line no-useless-constructor
  constructor(networkish, apiKey) {
    super(networkish, apiKey);
  }

  async getHistory(address, startBlock, endBlock) {
    const params = {
      action: "txlist",
      address,
      startblock: startBlock == null ? 0 : startBlock,
      endblock: endBlock == null ? 99999999 : endBlock,
      sort: "asc",
    };

    return this.fetch("account", params);
  }
}
