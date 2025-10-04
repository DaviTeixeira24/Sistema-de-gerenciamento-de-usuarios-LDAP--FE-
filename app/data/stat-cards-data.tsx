import { FaUserEdit, FaUsers, FaUserShield } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { SingleCard4 } from "../components/stats-cards";

export const statisticsCardData: SingleCard4[] = [
  {
    title: { text: "Total de Usuarios", className: "text-xl text-white" },
    description: {
      text: "Todos os usuarios registrados",
      className: "text-white",
    },
    value: { text: "200", className: "text-3xl text-white" },
    icon: <FaUsers />,
    colors: { bgColor: "bg-[#51A8DB]", iconColor: "text-white" },
    metricDelta: "+5%",
    positiveMetric: true,
    className: "bg-gradient-to-r from-[#51A8DB] to-[#1E6FA1] shadow-none",
    bottomArea: {
      icon: <ArrowRight />,
      text: "Ver todos os usuarios",
    },
  },
  {
    title: { text: "Administradores", className: "text-xl text-white" },
    description: {
      text: "Usuarios com acesso administrativo",
    },
    value: { text: "2", className: "text-3xl" },
    icon: <FaUserShield />,
    colors: { bgColor: "bg-[#51A8DB]", iconColor: "text-neutral-600" },
    metricDelta: "20%",
    positiveMetric: true,
    bottomArea: {
      icon: <ArrowRight />,
      text: "Ver administradores",
    },
  },
  {
    title: { text: "Secretárias", className: "text-xl text-white" },
    description: { text: "Usuarios com acesso de secretária" },
    value: { text: "3", className: "text-3xl" },
    icon: <FaUserEdit />,
    colors: { bgColor: "bg-[#51A8DB]", iconColor: "text-neutral-600" },
    metricDelta: "10%",
    positiveMetric: true,
    bottomArea: {
      icon: <ArrowRight />,
      text: "Ver secretárias",
    },
  },
];
