import "./styles.css";
import { useState } from "react";

function C(props) {
  const [ch, uch] = useState("fromchild");
  let a = "andkjkdemkmdkmek";
  const { b, o, uo } = props;
  uo("didjnjnjsnjknjnsj");
  console.log(o);
  function c(ch, uch) {
    // let z1=ch;
    // let z2=uch;
    b(ch, uch);
  }
  return (
    <>
      <button onClick={c}>child click </button>
    </>
  );
}

export default function App() {
  const [o, uo] = useState("parents value");
  // const [ch, uch] = useState("fromchild");

  // }
  function b(z1, z2) {
    //  uch("hhhhhhh")
    //   uch()
    //  console.log("sdjbc")
    // console.log(a);

    function uch() {}
    uch("jsdf");
  }

  return (
    <div className="App">
      <h1> {o} </h1>
      <p>{""}</p>

      <C b={b} o={o} uo={uo} />

      <button onClick={b}>click parent</button>
    </div>
  );
}

//so we can only pass usestate properties from parent to child..
//and we cannot pass usestate properties from child to parent
// we can only pass data from child to parent
