"use client";

import { ReactNode } from "react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { Card } from "@/components/ui/card";
import { FaChartLine, FaMoneyBill, FaWallet } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";

type TextAndClassNameBase = { text?: string; className?: string };
type TitleType = Omit<TextAndClassNameBase, "text"> & {
  text: string;
};

// This is going to be for the whole single card component
type SingleCardBase = {
  title: TitleType;
  description: Partial<TextAndClassNameBase>;
  value: TitleType;
  metricDelta?: string;
  positiveMetric?: boolean;
  showMetrics?: boolean;
  icon: ReactNode;
  className?: string;
  colors?: {
    bgColor?: string;
    iconColor?: string;
  };
  bottomArea?: {
    text?: string;
    className?: string;
    icon?: ReactNode;
    onClick?: () => void;
  };
  isLoading?: boolean;
  isGrid?: boolean;
  showIcons?: boolean;
  layoutOrientation?: "vertical" | "horizontal";
};

// Omitting the properties below to use in the cards array
export type SingleCard4 = Omit<
  SingleCardBase,
  "isGrid" | "isLoading" | "layoutOrientation"
>;

type StatCards4Props = {
  cards?: SingleCard4[];
  isGrid?: boolean;
  columns?: number;
  showMetricDelta?: boolean;
  className?: string;
  cardClassName?: string;
  isLoading?: boolean;
  showIcons?: boolean;
  layoutOrientation?: "vertical" | "horizontal";
};

const DEFAULT_CARDS: SingleCard4[] = [
  {
    className: "bg-primary border-none",
    title: { text: "Crypto Wallet", className: "text-xl" },
    description: { text: "Digital assets", className: "" },
    value: { text: "$879", className: "" },
    icon: <FaWallet />,
    colors: { bgColor: " bg-white/40", iconColor: "text-white" },
    metricDelta: "0.05",
    positiveMetric: false,
    bottomArea: { icon: <ArrowRight />, text: "View Transactions" },
  },
  {
    title: { text: "Savings Account", className: "" },
    description: { text: "Steady growth" },
    value: { text: "$12,567" },
    icon: <FaMoneyBill />,
    colors: { bgColor: "bg-neutral-100", iconColor: "text-neutral-600" },
    metricDelta: "0.15",
    positiveMetric: true,
    bottomArea: { icon: <ArrowRight />, text: "View Summary" },
  },
  {
    title: { text: "Checking Account", className: "" },
    description: { text: "Daily transactions" },
    value: { text: "$4,250" },
    icon: <FaChartLine />,
    colors: { bgColor: "bg-neutral-100", iconColor: "text-neutral-600" },
    metricDelta: "0.85",
    positiveMetric: true,
    bottomArea: { icon: <ArrowRight />, text: "View Details" },
  },
];

export default function StatCards4({
  cards = DEFAULT_CARDS,
  isGrid = false,
  columns = 2,
  className = "",
  showMetricDelta = true,
  isLoading = false,
  showIcons = true,
}: StatCards4Props) {
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(
    columns,
    4
  )} gap-4 ${className}`;

  const flexClass = `flex flex-wrap sm:flex-nowrap gap-4 max-lg:flex-col w-full ${className}`;

  return (
    <div className={isGrid ? gridClass : flexClass}>
      {cards.map((card, index) => {
        const mergedTitle: TitleType = {
          text: card.title.text ?? "",
          className: card.title.className ?? "text-xl",
        };

        const mergedDescription: TextAndClassNameBase = {
          text: card.description.text ?? "",
          className: card.description.className ?? "",
        };

        const mergedValue: TitleType = {
          text: card.value.text ?? "-",
          className: card.value.className ?? "",
        };
        return (
          <SingleCard
            key={index}
            card={{
              ...card,
              title: mergedTitle,
              description: mergedDescription,
              value: mergedValue,
              isLoading,
              showIcons,
              showMetrics: showMetricDelta,
            }}
          />
        );
      })}
    </div>
  );
}

function SingleCard({ card }: { card: SingleCardBase }) {
  const {
    icon = <Skeleton className="w-5 h-5 rounded-full" />,
    title,
    value,
    className,
    colors = { bgColor: "bg-primary/10", iconColor: "text-primary" },
    isLoading,
    description = {},
    isGrid,
    metricDelta = "0.00",
    showIcons,
    bottomArea,
    positiveMetric = true,
    showMetrics,
  } = card;

  return (
    <div className={isGrid ? "w-full" : "w-full sm:w-auto sm:flex-1"}>
      <Card className={`rounded-xl overflow-hidden ${className || ""}`}>
        <div className={`p-5 ${bottomArea && "pb-0"}`}>
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {showIcons && (
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${colors.bgColor} ${colors.iconColor}`}
                >
                  {isLoading ? (
                    <Skeleton className="w-5 h-5 rounded-full" />
                  ) : (
                    icon
                  )}
                </div>
              )}
              <div className="flex flex-col gap-0">
                <div>
                  {isLoading ? (
                    <Skeleton className="w-24 h-4" />
                  ) : (
                    <span
                      className={`    font-semibold leading-tight  ${title.className}`}
                    >
                      {title.text}
                    </span>
                  )}
                </div>
                <span className="text-[13px] opacity-65">
                  {isLoading ? (
                    <Skeleton className="w-32 h-3 mt-2" />
                  ) : (
                    <span className={`${description.className}`}>
                      {description.text || ""}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Value */}
          <div className="pt-2 flex items-end gap-3">
            <span className="text-3xl font-bold">
              {isLoading ? (
                <Skeleton className="w-16 h-6" />
              ) : (
                <span className={`${value.className}`}>{value.text}</span>
              )}
            </span>
            <div className="flex">
              {showMetrics && metricDelta && (
                <div
                  className={`flex items-center gap-1 text-xs font-medium px-[4px] py-[2px] mb-[5px] rounded-full ${
                    positiveMetric
                      ? "text-green-700 bg-green-50"
                      : "text-red-700 bg-red-50"
                  }`}
                >
                  {isLoading ? (
                    <Skeleton className="w-8 h-3" />
                  ) : (
                    <>
                      <span className="text-[10px]">
                        {positiveMetric ? "+" : ""}
                        {metricDelta}%
                      </span>
                      {positiveMetric ? (
                        <MdArrowUpward className="w-3 h-3" />
                      ) : (
                        <MdArrowDownward className="w-3 h-3" />
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        {bottomArea && (
          <div
            onClick={bottomArea.onClick}
            className={`flex hover:cursor-pointer border-t-[1px] px-5 py-2 mt-4 items-center 
            justify-between dark:bg-neutral-800 bg-neutral-50 ${
              bottomArea.className || ""
            }`}
          >
            <div className="text-xs">
              {isLoading ? <Skeleton className="w-20 h-3" /> : bottomArea.text}
            </div>
            <div className="text-gray-400">
              {isLoading ? (
                <Skeleton className="w-4 h-4 rounded-full" />
              ) : (
                bottomArea.icon || <ArrowRight />
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
