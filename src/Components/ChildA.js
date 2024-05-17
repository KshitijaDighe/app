
import ChildB from "./ChildB"

function ChildA(props) {
  return (
    <div>
      <ChildB kshitija={props.k}></ChildB>
    </div>
  );
}

export default ChildA
