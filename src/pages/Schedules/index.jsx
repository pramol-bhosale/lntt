import { Calendar, FloppyDisk, Trash } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { RESET_FORM_POPUP_CODE } from "../../utils/Constants";
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
  const [openResponse, setOpenResponse] = useState(false);

  useEffect(()=>{
    if(creationResponse.status){

    }
  },[creationResponse]);

  const [data, setData] = useState({
    fromDate: "",
    toDate: "",
    fromTime: "",
    toTime: "",
    activity: "",
    description: "",
  });

  useEffect(() => {
    dispatch(externalizationActivityRequested());
  }, []);

  const handleSubmit = () => {
    dispatch(scheduleCreateRequested({ ...data }));
  };

  return (
    <BaseTemplate>
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
