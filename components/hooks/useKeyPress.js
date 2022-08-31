import { useEffect } from "react";

//keyup
function useKeyPress(e) {
  useEffect(() => {
    window.addEventListener("keydown", e);
    return () => window.removeEventListener("keydown", e);
  }, [e]);
}
export default useKeyPress;
