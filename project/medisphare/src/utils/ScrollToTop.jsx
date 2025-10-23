import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = ({ behavior = "auto" }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jika ada hash (anchor) -> coba scroll ke element dengan id tersebut
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior });
        return;
      }
    }

    // Default: scroll ke paling atas setiap kali pathname berubah
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
};

export default ScrollTop;
