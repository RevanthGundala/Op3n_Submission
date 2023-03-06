// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import {
  localhost,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  sepolia,
  baseGoerli,
} from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import Sidebar from "./components/Sidebar";
import InboxPage from "./pages/InboxPage";
import NewMessagePage from "./pages/NewMessagePage";
import ViewMessagePage from "./pages/ViewMessagePage";

const { chains, provider } = configureChains(
  [localhost, mainnet, polygon, optimism, arbitrum, sepolia, baseGoerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Op3n",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Router>
          <div className="abso">
            <div className="test">
              <ConnectButton />
            </div>
            <div className="App">
              <Sidebar />
              <section>
                <Routes>
                  <Route path="/" element={<InboxPage />} />
                  <Route path="/send" element={<NewMessagePage />} />
                  <Route
                    path="/view/:msgAddress"
                    element={<ViewMessagePage />}
                  />
                </Routes>
              </section>
            </div>
          </div>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
