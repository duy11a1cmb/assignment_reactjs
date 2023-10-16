import { BrowserRouter as Router } from "react-router-dom";
import ContextProviderLayout from "./contexts/ContextProvider";
import "antd/dist/antd.min.css";
import PopupConfirm from "./components/popup/PopupConfirm";
import { ErrorBoundary } from "./components/bundary/ErrorBundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouters from "./config/appRouter";
import './baseStyle.scss'

function App() {
  return (
    <ContextProviderLayout>
      <ErrorBoundary>
        <ToastContainer />
        <PopupConfirm />
        <Router>
          <AppRouters />
        </Router>
      </ErrorBoundary>
    </ContextProviderLayout>
  );
}

export default App;
