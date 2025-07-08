import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { externalizationActivityRequested } from "../../state/action/externalizationAction";

const Form = ({ data, setData, handleSubmit, submitButton, isEditable }) => {
  const isLoading = useSelector((state) => state.scheduleReducer.isLoading);
  const fetchedActivityOptionList = useSelector(
    (state) => state.externalizationReducer.data?.activity
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(externalizationActivityRequested());
  }, []);

  return (
    <div>
      <div className="col-12 row g-0 mt-3 justify-content-around">
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
            step="2"
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
            step="2"
            className="form-control"
            onChange={(e) => {
              setData((prev) => ({ ...prev, toTime: e.target.value }));
            }}
            value={data?.toTime}
          />
        </div>
      </div>
      <div className="col-12 row g-0 mt-4 align-items-baseline justify-content-around">
        <div className="col-3">
          <div className="form-label">Activity</div>
          <Select
            options={fetchedActivityOptionList}
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                activityOption: e,
                activity: e.value,
              }));
            }}
            value={data?.activityOption}
          />
        </div>
        <div className="col-3">
          <div className="row g-0 align-items-center justify-content-between">
            <div className="form-label col-8">Description.</div>
          </div>
          <textarea
            rows={5}
            cols={30}
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
            value={data?.description}
          ></textarea>
        </div>
      </div>
      <div className="col-12 row g-0 mt-5 justify-content-end">
        <div className="col-7 row g-0 justify-content-end">
          <div
            className="col-3 offset-1 btn btn-primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            {submitButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
