import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import style from "./style.css";
import BaseTemplate from "../../Layout/BaseTemplate";
import { useDispatch, useSelector } from "react-redux";
import { smeAvailabilityDataRequest } from "../../state/action/scheduleAction";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function AvailabiltyPage() {
  const [data, setData] = useState({
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
  });

  const [paginationData, setPaginationData] = useState({ page: 0, size: 10 });

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.scheduleReducer.isLoading);
  const fetchedData = useSelector((state) => state.scheduleReducer.data);

  const handleSearch = () => {
    dispatch(smeAvailabilityDataRequest({ ...data, ...paginationData }));
  };
  useEffect(() => {
    handleSearch();
  }, [paginationData]);

  return (
    <BaseTemplate>
      <div className="row g-0">
        <div className="col-12 align-items-center">
          <MagnifyingGlass size={32} />
          <span className="main-heading">
            SMEs Availability Status
          </span>
          <div className="bg-white my-4 p-3 rounded-2 portal-shadow-container">
            <div className="col-12 row g-0 justify-content-around">
              <div className="col-3">
                <div className="form-label">Select Month*</div>
                <input
                  type="month"
                  className="form-control"
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, month: e.target.value }));
                  }}
                  value={data?.month}
                />
              </div>
            </div>

            <div className="col-12 row g-0 mt-1 justify-content-around">
              <div className="col-3">
                <div className="form-label">From Date*</div>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, fromDate: e.target.value }));
                  }}
                  value={data?.fromDate}
                />
              </div>
              <div className="col-3">
                <div className="form-label">To Date*</div>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, toDate: e.target.value }));
                  }}
                  value={data?.toDate}
                />
              </div>
            </div>
            <div className="col-12 row g-0 mt-4 justify-content-around">
              <div className="col-3">
                <div className="form-label">From Time*</div>
                <input
                  type="time"
                  className="form-control"
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, fromTime: e.target.value }));
                  }}
                  value={data?.fromTime}
                />
              </div>
              <div className="col-3">
                <div className="form-label">To Time*</div>
                <input
                  type="time"
                  className="form-control"
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, toTime: e.target.value }));
                  }}
                  value={data?.toTime}
                />
              </div>
            </div>
            <div className="col-12 row g-0 mt-5 justify-content-end">
              <div className="col-7 row g-0 justify-content-end">
                <div
                  className="col-2 offset-1 btn btn-primary"
                  onClick={() => {
                    handleSearch();
                  }}
                >
                  <MagnifyingGlass size={25} /> Search
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white my-4 p-3 rounded-2 portal-shadow-container">
              <h6 className="my-3 text-end">
                {fetchedData?.data?.totalElements} Results Found
              </h6>
              <table
                className="table stock-table table-bordered table-hover "
                id="stockTable"
              >
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  {fetchedData?.data?.content?.map((row, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {fetchedData?.data ? (
                <div className="row g-0 justify-content-end">
                  <Stack spacing={2} className="w-auto">
                    <Pagination
                      count={fetchedData?.data?.totalPages}
                      variant="outlined"
                      shape="rounded"
                      onChange={(e,page)=>{setPaginationData(prev=>({...prev, page:page-1}))}}
                    />
                  </Stack>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
}

export default AvailabiltyPage;
