import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "../config/analytics";
import { trackMetaPageView } from "../config/metaPixel";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
    trackMetaPageView();
  }, [location]);

  return null;
}

export default AnalyticsTracker;