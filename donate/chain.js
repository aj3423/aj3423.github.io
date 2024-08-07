var chains = [
  {
    chain: "Bitcoin",
    main_asset: "BTC",
    color: "orange",
    icon: "icon/btc.svg",
    wallet_address: "bc1qgr2x5qxry05y4wcrqrzhshw7l9ctv6hkzqdxqj",
    wallet_qr: "./qr/btc.png",
  },
  {
    chain: "Ethereum",
    main_asset: "ETH",
    tokens: ["USDT", "USDC"],
    token_standard: "ERC20",
    color: "gray",
    icon: "icon/eth.svg",
    wallet_address: "0x4D0e15DBC0296Fc5FE157A94DdA92542950DC6F4",
    wallet_qr: "./qr/eth.png",
  },
  {
    chain: "BSC",
    main_asset: "BNB",
    tokens: ["USDT", "USDC"],
    token_standard: "BEP20",
    color: "#f0b80a",
    icon: "icon/bsc.svg",
    wallet_address: "0x4D0e15DBC0296Fc5FE157A94DdA92542950DC6F4", // same as eth
    wallet_qr: "./qr/bsc.png",
  },
  {
    chain: "Solana",
    main_asset: "SOL",
    tokens: ["USDT", "USDC"],
    token_standard: "SPL",
    color: "Fuchsia",
    icon: "icon/sol.svg",
    wallet_address: "3Ek2x1Vt5u9J9yFkc2rXQUVHcVqxN7ZHkqDgXGLXmXm2",
    wallet_qr: "./qr/sol.png",
  },
  {
    chain: "Tron",
    main_asset: "TRX",
    tokens: ["USDT", "USDC"],
    token_standard: "TRC20",
    color: "salmon",
    icon: "icon/trc.svg",
    wallet_address: "TXVq31JeuxACJXGL6jfB771FcTrfgXXz6b",
    wallet_qr: "./qr/trx.png",
  },
  {
    chain: "Others",
    color: "#cccccc",
    icon: "icon/question.svg",
    wallet_qr: "./qr/no_choice.png",
  },
];
