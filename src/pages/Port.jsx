import React from "react";
import { createPortal } from "react-dom";
import './Port.css'
function Port({ children }) {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,document.getElementById("modal-root")

  );
}

export default Port;
