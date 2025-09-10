import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        // build a clean URL (no #id, no trailing slash)
        let cleanPath = location.pathname + location.search;

        // remove trailing slash except for home "/"
        if (cleanPath !== "/" && cleanPath.endsWith("/")) {
          cleanPath = cleanPath.slice(0, -1);
        }

        // replace URL without reloading
        window.history.replaceState(null, "", cleanPath);

        // console.log("Cleaned URL:", cleanPath);
      }
    }
  }, [location]);
}
