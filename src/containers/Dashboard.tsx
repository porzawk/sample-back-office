import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {
  saleBreakDownDayData,
  top5SellerData,
  recentOrdersData,
} from "../constants";

const Dashboard = () => {
  const data = saleBreakDownDayData;
  const top5Selller = top5SellerData;
  const recentOrders = recentOrdersData;

  return (
    <div>
      {/* Title */}
      <span className="text-4xl font-extrabold text-black">Dashboard</span>
      {/* Cards */}
      <div className="grid grid-cols-4 gap-4">
        <WidgetItem title="Total Sales" value="323" status="up" />
        <WidgetItem title="Total Revenue" value="฿204,592" status="up" />
        <WidgetItem title="Total Clients" value="140" status="down" />
        <WidgetItem title="Cancelled Order" value="4" status="up" />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="h-[400px] sm:col-span-4 lg:col-span-4 xl:col-span-3">
          <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg">
            <span className="text-lg font-extrabold text-[#585858]">
              Sale breakdwon
            </span>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" includeHidden />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full h-full pt-6 bg-white border border-gray-200 rounded-lg sm:col-span-4 lg:col-span-4 xl:col-span-1">
          <span className="text-lg font-extrabold text-[#585858] p-6">
            Top 5 Selling
          </span>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Percent
                  </th>
                </tr>
              </thead>
              <tbody>
                {top5Selller.map((item, index) => (
                  <tr key={index} className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-2">฿{item.price}</td>
                    <td className="px-6 py-2">({item.percent})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg mt-4">
        <span className="text-lg font-extrabold text-[#585858] ">
          Recent Orders
        </span>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((item, index) => (
                <tr key={index} className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {item.orderId}
                    </a>
                  </th>
                  <td className="px-6 py-2">฿{item.product}</td>
                  <td className="px-6 py-2">{item.customer}</td>
                  <td className="px-6 py-2">{item.deliveryDate}</td>
                  <td className="px-6 py-2">฿{item.price}</td>
                  <td className="px-6 py-2">
                    {(() => {
                      switch (item.status) {
                        case "Delivered":
                          return (
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                              {item.status}
                            </span>
                          );
                        case "Cancelled":
                          return (
                            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                              {item.status}
                            </span>
                          );
                        case "Pending":
                          return (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                              {item.status}
                            </span>
                          );
                      }
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const WidgetItem = ({
  title,
  value,
  status,
}: {
  title: string;
  value: string;
  status: "up" | "down" | "ratio";
}) => {
  return (
    <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg sm:col-span-4 lg:col-span-2 2xl:col-span-1">
      <span className="text-lg font-extrabold text-[#585858] ">{title}</span>
      <div className="flex mt-4 justify-between">
        <span className="text-4xl font-bold text-[#303030] ">{value}</span>
        {status === "up" ? (
          <div className="flex text-[#49BD65]">
            <span className="text-2xl">11%</span>

            <AiOutlineArrowUp size={32} />
          </div>
        ) : status === "down" ? (
          <div className="flex text-[#F44D50]">
            <span className="text-2xl">11%</span>

            <AiOutlineArrowDown size={32} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dashboard;
