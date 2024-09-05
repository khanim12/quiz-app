import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
function NotFoundPage() {
  return (
    <div className="flex items-center justify-center  h-screen bg-red-700 w-screen">
      <h1 className="font-black text-9xl ">
        404
        <span >
          <WarningIcon style={{marginLeft:'15px'}} fontSize="195px"/>
        </span>
      </h1>
    </div>
  );
}

export default NotFoundPage;
