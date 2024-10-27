import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import useGetCompanies from "@/hooks/useGetCompanies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setsearchCompanyByText } from "@/redux/companySlice";

const Companies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useGetCompanies();
  const [input, setinput] = useState("");
  useEffect(() => {
    dispatch(setsearchCompanyByText(input));
  }, [input]);
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="max-w-6xl mx-auto my-10">
          <div className="flex items-center justify-between my-5">
            <Input
              className="w-fit"
              placeholder="Filter by name"
              onChange={(e) => setinput(e.target.value)}
            />
            <Button
              className=" bg-[#6C48C5]"
              onClick={() => navigate("/admin/companies/create")}
            >
              New Company
            </Button>
          </div>
          <CompaniesTable />
        </div>
      </div>
    </>
  );
};

export default Companies;