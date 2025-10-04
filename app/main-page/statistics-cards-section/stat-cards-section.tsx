import StatCards4 from "@/app/components/stats-cards";
import { statisticsCardData } from "@/app/data/stat-cards-data";
import React from "react";

function StatCardsSection() {
  return (
    <div>
      <StatCards4
        showMetricDelta={false}
        className="p-7 pt-7"
        cards={statisticsCardData}
      />
    </div>
  );
}

export default StatCardsSection;
