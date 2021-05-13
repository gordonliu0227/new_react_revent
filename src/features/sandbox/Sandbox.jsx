import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import TestMap from "./testmap";
import TestPlaceInput from "./TestPlaceInput";
import { Decrement, Increment } from "./testReducer";

export default function SandBox() {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.async);
  const [target, setTarget] = useState(null);
  return (
    <>
      <h1> testing 123</h1>
      <h3>the data is : {data} </h3>
      <Button
        name="increment"
        loading={loading && target === "increment"}
        content="Increment"
        color="green"
        onClick={(e) => {
          dispatch(Increment(10));
          setTarget(e.target.name);
        }}
      />
      <Button
        name="decrement"
        loading={loading && target === "decrement"}
        content="Decrement"
        color="red"
        onClick={(e) => {
          dispatch(Decrement(10));
          setTarget(e.target.name);
        }}
      />

      <Button
        content="OPEN MODAL"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
      />

      <div>
        <TestPlaceInput />
      </div>

      <div>
        <TestMap />
      </div>
    </>
  );
}
