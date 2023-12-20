import Card from "@/sharecomponent/card/Card";
import Table from "@/sharecomponent/table/Table";
import React from "react";

const page = () => {
  const tableData = [
    {
      Name: "Akshay Pawar",
      EmailAddress: "akshay.pawar@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632544546",
    },
    {
      Name: "Om Rane",
      EmailAddress: "om.rane@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632545891",
    },
    {
      Name: "rohit verma",
      EmailAddress: "rohit.verma@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632515324",
    },
    {
      Name: "caleb felix",
      EmailAddress: "caleb.felix@nexsales.com",
      CompanyName: "Nexsales",
      title: "jr developer",
      Level: "fresher",
      Department: "Tech",
      PhoneNumber: "9632152346",
    },
  ];

  return (
    <>
      <div className="h-[800px] w-full  m-0 p-0">
        <div
          style={{ backgroundColor: "#F7FCFD" }}
          className=" shadow-xl ml-[60px] mt-[-410px] z-1 flex justify-center align-middle p-[10px]"
        >
          <div className="h-full w-full pt-[48px] pb-[48px]">
            <div>
              <div className="font-inter text-3xl font-medium ">
                <h1>Admin Dashboard</h1>
              </div>
              <div className="font-inter font-normal text-sm leading-6 text-tableHeading">
                <p>
                  Effortlessly Manage, Monitor and Modify: Your control center
                  for seamless oversight and optimization.
                </p>
              </div>
              <div className="pt-[32px] flex font-inter text-sm text-tableHeading ">
                <button className="p-[2px]">Users</button>
                <button className="p-[2px]">Requests</button>
              </div>
              <div className="pt-[10px]">
                <hr></hr>
              </div>
            </div>

            <div>
              <div className="flex justify-around pt-[32px] flex-wrap">
                <div>
                  <Card title={"Sign Up Initiated "} count={56} />
                </div>
                <div>
                  <Card title={"Sign UP Completed"} count={32} />
                </div>
                <div>
                  <Card title={"Log In Completed"} count={30} />
                </div>
                <div>
                  <Card title={"Request Raised"} count={12} />
                </div>
              </div>
            </div>

            <div className="h-[60px] flex items-center bg-white mt-[32px] shadow-lg">
              <h1 className="p-[15px] text-xl font-inter font-normal">Users</h1>
            </div>

            <div className="w-full flex flex-col p-5 bg-white mt-[1px]">
              <div className="shadow-lg">
                <Table data={tableData} className="p-[15px] w-full flex flex-wrap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
