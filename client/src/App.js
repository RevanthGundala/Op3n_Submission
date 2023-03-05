// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, sepolia } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import Sidebar from './components/Sidebar';
import ConnectPage from './pages/ConnectPage';
import InboxPage from './pages/InboxPage';
import NewMessagePage from './pages/NewMessagePage';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, sepolia],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Op3n",
  chains,
});

const wagmiClient = createClient({
  // autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Router>
          <div className="App">
            <Sidebar />
            <section>
              <Routes>
                <Route path='/connect' element={<ConnectPage />} />
                <Route path='/' element={<InboxPage />} />
                <Route path='/send' element={<NewMessagePage />} />
              </Routes>
            </section>
          </div>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
