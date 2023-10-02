"use client";

import React, { useState } from "react";
import "./tabs.css";
import FirstTab from "../allTabs/firstTab";
import SecondTab from "../allTabs/secondTab";

const AppTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <>
      <div>
        <h3>Explore by Category</h3>
        <p>
          Explore our category and collect thousand of amazing arts from the
          awesome artist.
        </p>
      </div>
      <div className="mainTab">
        <div className="Tabs">
          <ul className="nav">
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
             All Categories
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              Collectibles
            </li>

            <li
              className={activeTab === "tab3" ? "active" : ""}
              onClick={handleTab1}
            >
             Art
            </li>
            <li
              className={activeTab === "tab4" ? "active" : ""}
              onClick={handleTab2}
            >
             Photography
            </li>


            <li
              className={activeTab === "tab5" ? "active" : ""}
              onClick={handleTab1}
            >
            Utility
            </li>
            <li
              className={activeTab === "tab6" ? "active" : ""}
              onClick={handleTab2}
            >
             Domain Names
            </li>


            <li
              className={activeTab === "tab7" ? "active" : ""}
              onClick={handleTab1}
            >
             Metaverse
            </li>
            <li
              className={activeTab === "tab8" ? "active" : ""}
              onClick={handleTab2}
            >
              Games
            </li>
          </ul>
          <div className="outlet">
            {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppTab;
