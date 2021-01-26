import React from "react";
import { Message } from "semantic-ui-react";

const MesageSemanticUI = ({ list }) => {
  let errors = [];
  for (const item in list) {
    // console.log(`${item}: ${list[item]}`);
    errors.push(list[item]);
  }
  return (
    <div>
      <Message
        error
        header="There was some errors with your inputs"
        list={errors}
      />
    </div>
  );
};

export default MesageSemanticUI;
