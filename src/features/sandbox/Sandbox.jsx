import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { Decrement, Increment } from "./testReducer";

export default function SandBox() {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  return (
    <>
      <h1> testing 123</h1>
      <h3>the data is : {data} </h3>
      <Button
        content="Increment"
        color="green"
        onClick={() => dispatch(Increment(10))}
      />
      <Button
        content="Decrement"
        color="red"
        onClick={() => dispatch(Decrement(20))}
      />

      <Button
        content="OPEN MODAL"
        color="teal"
        onClick={() => dispatch(openModal({modalType:'TestModal', modalProps:{data}}))}
      />
    </>
  );
}
