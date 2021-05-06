import React from "react";
import ModalWrapper from "../../app/common/modals/ModalWrapper";

export default function TestModal({ data }) {
  return (
    <ModalWrapper size="mini" header="Test modal">
      <div> the date is :{data}</div>
    </ModalWrapper>
  );
}
