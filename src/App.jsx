import AppRoutes from "./routes/AppRoutes";
import AnalyticsTracker from "./components/AnalyticsTracker";

function App() {
  return (
    <>
      <AnalyticsTracker />
      <AppRoutes />
    </>
  );
}

export default App;