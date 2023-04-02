import { AiOutlineDashboard } from "react-icons/ai";

const categories = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
];

const saleBreakDownDayData = [
  {
    name: "01 Mar",
    total: 10,
  },
  {
    name: "02 Mar",
    total: 20,
  },
  {
    name: "03 Mar",
    total: 15,
  },
  {
    name: "04 Mar",
    total: 13,
  },
  {
    name: "05 Mar",
    total: 10,
  },
  {
    name: "06 Mar",
    total: 10,
  },
  {
    name: "07 Mar",
    total: 10,
  },
  {
    name: "08 Mar",
    total: 10,
  },
  {
    name: "09 Mar",
    total: 10,
  },
  {
    name: "10 Mar",
    total: 10,
  },
  {
    name: "11 Mar",
    total: 10,
  },
  {
    name: "12 Mar",
    total: 10,
  },
  {
    name: "13 Mar",
    total: 10,
  },
  {
    name: "14 Mar",
    total: 10,
  },
  {
    name: "15 Mar",
    total: 10,
  },
];

const recentOrdersData = [
  {
    orderId: "#SK001",
    product: "Iphone 7",
    customer: "Mobile Shop",
    deliveryDate: "04-03-2023",
    price: "15,000",
    status: "Delivered",
  },
  {
    orderId: "#SK001",
    product: "Iphone 7",
    customer: "Mobile Shop",
    deliveryDate: "04-03-2023",
    price: "15,000",
    status: "Cancelled",
  },
  {
    orderId: "#SK001",
    product: "Iphone 7",
    customer: "Mobile Shop",
    deliveryDate: "04-03-2023",
    price: "15,000",
    status: "Pending",
  },
  {
    orderId: "#SK001",
    product: "Iphone 7",
    customer: "Mobile Shop",
    deliveryDate: "04-03-2023",
    price: "15,000",
    status: "Delivered",
  },
  {
    orderId: "#SK001",
    product: "Iphone 7",
    customer: "Mobile Shop",
    deliveryDate: "04-03-2023",
    price: "15,000",
    status: "Delivered",
  },
];

const top5SellerData = [
  { name: "Iphone 7", price: "15,000", percent: "50%" },
  { name: "Iphone 8", price: "15,000", percent: "20%" },
  { name: "Iphone x", price: "15,000", percent: "10%" },
  { name: "Iphone 11", price: "15,000", percent: "10%" },
  { name: "Iphone 12", price: "15,000", percent: "10%" },
];

export { categories, saleBreakDownDayData, top5SellerData, recentOrdersData };
