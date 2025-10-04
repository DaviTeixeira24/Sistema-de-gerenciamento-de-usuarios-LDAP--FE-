"use client";

import NavBarSection from "./main-page/nav-bar-section/nav-bar-section";
import React, { ReactNode, useState } from "react";
import StatCardsSection from "./main-page/statistics-cards-section/stat-cards-section";

function page() {
  return (
    <div>
      <NavBarSection />
      <StatCardsSection />
    </div>
  );
}

export default page;
