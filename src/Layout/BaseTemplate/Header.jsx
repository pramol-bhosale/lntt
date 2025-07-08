import {
  ArrowCircleLeft,
  Power,
} from "@phosphor-icons/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="col-10 header-container py-2">
      <div className="row g-0">
        <div className="col-12 row g-0 py-2 align-items-center justify-content-between">
          <div className="col-1 ps-3 back-icon" title="Back">
            <ArrowCircleLeft
              size={32}
              onClick={() => {
                window.history.back();
              }}
            />
          </div>
          <div
            className="col-1 back-icon"
            title="Logout"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            <Power size={23} />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
