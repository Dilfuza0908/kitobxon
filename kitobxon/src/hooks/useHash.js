import { useState, useEffect } from "react";

export default function useHash() {
  const [hash, setHash] = useState(location.hash.slice(1) || "bosh");
  useEffect(() => {
    const onChange = () => {
      setHash(location.hash.slice(1) || "bosh");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}