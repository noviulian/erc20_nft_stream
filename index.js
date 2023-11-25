import Moralis from "moralis";
import abi from "./abi.json" assert { type: "json" };

async function main() {
    Moralis.start({
        apiKey: "your_key",
    });
    const response = await Moralis.Streams.add({
        description: "ERC20 and NFT transfers",
        webhookUrl: "https://webhook.site/580e0817-983e-40b2-9c39-afbd962e1178",
        chains: ["0x5"],
        tag: "erc20_nft_transfers",
        allAddresses: false,
        includeNativeTxs: false,
        includeContractLogs: true,
        includeInternalTxs: false,
        includeAllTxLogs: false,
        topic0: [
            "Transfer(address,address,uint256)",
            "TransferSingle(address,address,address,uint256,uint256)",
            "TransferBatch(address,address,address,uint256[],uint256[])",
        ],
        abi: abi,
    });
}

main().then(() => console.log("stream created"));
