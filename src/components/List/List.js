import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function List({ children, title }) {
  const [active, setActive] = useState(false);
  console.log({ active });

  return (
    <div>
      <div>
        {/* <hr /> */}

        <div
          // to={window.location.pathname}
          style={{ color: "black" }}
          onClick={() => setActive(!active)}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{title} </p>
            <p className="plus">
              <Link to={window.location.pathname} style={{ color: "black" }}>
                {active ? "-" : "+"}
              </Link>
            </p>
          </div>
          {active && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
}
