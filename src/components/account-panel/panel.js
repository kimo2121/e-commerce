import React from "react";
import { Link } from "react-router-dom";
import { AccountInfo, Assets, MyOrders, ProgramCenter } from "./panel-data";
import PanelLinks from "./panel-links";
function AccountPanel() {
  return (
    <div className="my-account-panel">
      <span to="/account" className="account-panel-link">
        My Account
      </span>
      <div className="account-divider"></div>
      <div className="my-acc">
        {MyOrders.map((item) => (
          <PanelLinks
            key={item.id}
            to={item.to}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
      <span to="/account" className="account-panel-link">
        Manage Settings
      </span>
      <div className="settings-divider"></div>
      <br />
      <div className="sett-info">
        {AccountInfo.map((item) => (
          <PanelLinks
            to={item.to}
            key={item.id}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
      <span to="/account" className="account-panel-link">
        Program Center
      </span>
      <div className="program-divider"></div>
      <br />
      <div className="prog-center">
        {ProgramCenter.map((item) => (
          <PanelLinks
            to={item.to}
            key={item.id}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default AccountPanel;
