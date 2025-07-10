import { Calendar, FloppyDisk, Trash } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import {
  RESET_FORM_POPUP_CODE,
  RESET_SCHEDULED_REDUCER_DATA,
} from "../../utils/Constants";
import style from "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { scheduleCreateRequested } from "../../state/action/scheduleAction";
import { externalizationActivityRequested } from "../../state/action/externalizationAction";
import BaseTemplate from "../../Layout/BaseTemplate";
import Form from "./Form";
import CustomModal from "../../components/Modal";

function ScheduleCreatePage() {
  const dispatch = useDispatch();
  const [month, setMonth] = useState();

  const isLoading = useSelector((state) => state.scheduleReducer.isLoading);
  const creationResponse = useSelector((state) => state.scheduleReducer.data);
  const [open, setOpen] = useState(false);
  const [acknowledgeMsg, setAcknowledgeMsg] = useState({
    status: null,
    msg: <></>,
  });

  const generateResponse = (data) => {
    if (data?.fromDate === data?.toDate) {
      setAcknowledgeMsg({
        status: true,
        msg: (
          <div>
            <h4>Submission Received</h4>
            <hr />
            <p className="my-3">
              SME Submitted data for <strong>{data?.fromDate}</strong> from{" "}
              <strong>{data?.fromTime}</strong> to
              <strong>{data?.toTime}</strong>
            </p>
            <div className="text-end">
              <button
                className="btn btn-secondary mt-2"
                onClick={() => {
                  setData({ ...initialFormData });
                  setOpen(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        ),
      });
    } else {
      setAcknowledgeMsg({
        status: true,
        msg: (
          <div>
            <h4>Submission Received</h4>
            <hr />
            <p className="my-3">
              SME Submitted data for <strong>{data?.fromDate}</strong> to{" "}
              <strong>{data?.toDate}</strong> and timing from{" "}
              <strong>{data?.fromTime}</strong> to
              <strong>{data?.toTime}</strong>
            </p>
            <div className="text-end">
              <button
                className="btn btn-secondary mt-2"
                onClick={() => {
                  setData({ ...initialFormData });
                  setOpen(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        ),
      });
    }
    setOpen(true);
  };

  useEffect(() => {
    dispatch({ type: RESET_SCHEDULED_REDUCER_DATA });
  }, []);
  useEffect(() => {
    if (creationResponse?.status) {
      generateResponse(creationResponse?.data);
    }else{
      setOpen(false);
    }
  }, [creationResponse]);

  const initialFormData = {
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
    activity: "",
    description: "",
  };

  const [data, setData] = useState({ ...initialFormData });

  useEffect(() => {
    dispatch(externalizationActivityRequested());
  }, []);

  const handleSubmit = () => {
    dispatch(scheduleCreateRequested({ ...data }));
  };

  return (
    <BaseTemplate>
      <CustomModal
        open={open}
        onClose={() => {
          setData({ ...initialFormData });
          setOpen(false);
        }}
        classNames={"w-auto"}
      >
        {acknowledgeMsg.msg}
      </CustomModal>
      <div className="row g-0">
        <div className="col-12 align-items-center">
          <Calendar size={32} weight="fill" />{" "}
          <span className="main-heading">Add Schedule Information</span>
          <div className="bg-white p-4 my-4 rounded-2 portal-shadow-container">
            <div className="col-12 row g-0 justify-content-end ">
              <div className="col-3">
                <div className="form-label">Select Month*</div>
                <input
                  type="month"
                  className="form-control"
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                />
              </div>
            </div>
            <hr />
            {month ? (
              <Form
                data={data}
                setData={setData}
                handleSubmit={handleSubmit}
                submitButton={
                  <>
                    <FloppyDisk size={25} weight="fill" /> Save
                  </>
                }
              />
            ) : null}
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
}

export default ScheduleCreatePage;
