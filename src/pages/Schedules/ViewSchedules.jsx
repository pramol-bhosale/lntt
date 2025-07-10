import React, { useEffect, useState } from "react";
import style from "./style.css";

import { Calendar, Pencil, Trash } from "@phosphor-icons/react";
import BaseTemplate from "../../Layout/BaseTemplate";
import { useDispatch, useSelector } from "react-redux";
import { scheduleForCurrentUserRequested } from "../../state/action/scheduleAction";
import ScheduleConfirmationModal from "./ScheduleConfirmationModal";
import {
  SCHEDULE_DELETE_MODAL,
  SCHEDULE_UPDATE_MODAL,
} from "../../utils/Constants";
import { Pagination, Stack } from "@mui/material";

function ViewSchedules() {
  const getCurrentMonth = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;

    month = String(month).padStart(2, "0");

    const formattedMonth = `${year}-${month}`;
    return formattedMonth;
  };

  const [month, setMonth] = useState(getCurrentMonth());
  const [modalData, setModalData] = useState({
    open: false,
    type: null,
    data: {},
  });

  const [paginationData, setPaginationData] = useState({ page: 0, size: 10 });

  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.scheduleReducer?.data);

  const isLoading = useSelector((state) => state.scheduleReducer.isLoading);

  useEffect(() => {
    if (!modalData.open) {
      dispatch(scheduleForCurrentUserRequested({ month, ...paginationData }));
    }
  }, [month, paginationData, modalData]);

  return (
    <BaseTemplate>
      <>
        <ScheduleConfirmationModal
          type={modalData?.type}
          modalData={modalData}
          setModalData={setModalData}
        />
        <div className="row g-0">
          <div className="col-12 align-items-center">
            <Calendar size={32} weight="fill" />{" "}
            <span className="main-heading">Schedules</span>
            <div className="col-12 card mt-5">
              <div className="card-body">
                <div className="col-12 row g-0 justify-content-end ">
                  <div className="col-6 row g-0 align-items-center justify-content-end">
                    <div className="form-label col-auto">Select Month*</div>
                    <div className="ms-1 col-4">
                      <input
                        type="month"
                        className="form-control"
                        onChange={(e) => {
                          setMonth(e.target.value);
                        }}
                        value={month}
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-0 mt-4">
                  <table
                    className="table stock-table table-bordered table-hover "
                    id="stockTable"
                  >
                    <thead>
                      <tr>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>From Time</th>
                        <th>To Time</th>
                        <th>Activity</th>
                        <th>Short Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fetchedData?.data?.content?.map((row) => {
                        return (
                          <tr>
                            <td>{row.fromDate}</td>
                            <td>{row.toDate}</td>
                            <td>{row.fromTime}</td>
                            <td>{row.toTime}</td>
                            <td>{row.activity?.name}</td>
                            <td>{row.description}</td>
                            <td>
                              <div className="row g-0">
                                <div
                                  className="col-auto"
                                  onClick={() => {
                                    setModalData({
                                      open: true,
                                      data: {
                                        ...row,
                                        activity: row.activity?.id,
                                        activityOption: {
                                          label: row.activity?.name,
                                          value: row.activity?.id,
                                        },
                                      },
                                      type: SCHEDULE_UPDATE_MODAL,
                                    });
                                  }}
                                >
                                  <Pencil
                                    size={20}
                                    weight="fill"
                                    className="app-icon"
                                  />
                                </div>
                                <div
                                  className="offset-2 col-auto"
                                  onClick={() => {
                                    setModalData({
                                      open: true,
                                      data: {
                                        ...row,
                                        activity: row.activity?.id,
                                        activityOption: {
                                          label: row.activity?.name,
                                          value: row.activity?.id,
                                        },
                                      },
                                      type: SCHEDULE_DELETE_MODAL,
                                    });
                                  }}
                                >
                                  <Trash
                                    size={20}
                                    weight="fill"
                                    className="app-icon"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {fetchedData?.data ? (
                  <div className="row g-0 justify-content-end">
                    <Stack spacing={2} className="w-auto">
                      <Pagination
                        count={fetchedData?.data?.totalPages}
                        variant="outlined"
                        shape="rounded"
                        page={paginationData?.page + 1}
                        onChange={(e, page) => {
                          setPaginationData((prev) => ({
                            ...prev,
                            page: page - 1,
                          }));
                        }}
                      />
                    </Stack>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </>
    </BaseTemplate>
  );
}

export default ViewSchedules;
