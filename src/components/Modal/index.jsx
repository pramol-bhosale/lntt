import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";

function CustomModal({ open, onClose, children, classNames }) {
  return (
    <Modal open={open} onClose={() => onClose()}>
      <div className={`bg-white p-4 w-75 position-absolute top-50 start-50 translate-middle rounded-3 ${classNames}`}>
        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;
