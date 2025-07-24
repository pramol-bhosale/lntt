import React, { useEffect, useState } from "react";
import "./style.css";
import BaseTemplate from "../../Layout/BaseTemplate";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  reportsRequested,
  smeSuggestionsRequested,
} from "../../state/action/reports";

const Reports = () => {
  const [data, setData] = useState({ month: undefined, smeEmail: undefined });
  const fetchedData = useSelector((state) => state.reportsReducer?.data);
  const suggestion = useSelector(
    (state) =>
      state.reportsReducer?.suggestions?.data?.content || [
        { userName: "pramoo", id: "123423" },
      ]
  );
  const [isIndividualSmeSearch, setInidividualSmeSearch] = useState(false);
  const [tableData, setTableData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchedData?.data) {
      setTableData(
        Object.entries(fetchedData?.data).map((element) => ({
          sme: element[0],
          ...element[1],
        }))
      );
    }
  }, [fetchedData]);

  const handleSearch = () => {
    console.log("sme handle search");
    if (isIndividualSmeSearch) {
      dispatch(reportsRequested({ ...data }));
    } else {
      dispatch(reportsRequested({ month: data?.month }));
    }
  };

  const handleSuggestion = (text) => {
    if (text && text?.trim().length > 0) {
      dispatch(smeSuggestionsRequested({ searchText: text }));
    }
  };

  return (
    <BaseTemplate>
      <div>
        <h4>Generate Report</h4>
        <div className="bg-white my-4 p-3 rounded-2 portal-shadow-container">
          <div className="col-12 row g-0 gap-2 justify-content-end">
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
            <div className="col-4 row g-0 align-items-end">
              <div class="form-check w-50">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={isIndividualSmeSearch}
                  onChange={(e) => {
                    setInidividualSmeSearch(true);
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Get Individual Report
                </label>
              </div>
              <div class="form-check w-50">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={!isIndividualSmeSearch}
                  onChange={(e) => {
                    setInidividualSmeSearch(false);
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Get All Reports
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-12 row g-0 mt-2 justify-content-end gap-2 align-items-end">
            {isIndividualSmeSearch ? (
              <div className="col-3">
                <Autocomplete
                  id="search-input"
                  freeSolo
                  options={suggestion?.map((option) => option.userName)}
                  renderInput={(params) => (
                    <TextField {...params} label="Search SME ID" />
                  )}
                  onInputChange={(event, value, reason) => {
                    handleSuggestion(event?.target?.value);
                    setData((prev) => ({ ...prev, smeEmail: value }));
                  }}
                  onChange={(e, value) => {
                    setData((prev) => ({
                      ...prev,
                      smeEmail: value,
                      id: suggestion?.find(
                        (option) => option.userName === value
                      )?.id,
                    }));
                  }}
                />
              </div>
            ) : null}
            <div
              className="col-2  btn btn-primary"
              onClick={() => {
                handleSearch();
              }}
            >
              <MagnifyingGlass size={25} /> Search
            </div>
          </div>
          <div className="row g-0 mt-4">
            {tableData?.length > 0 ? (
              <table
                className="table stock-table table-bordered table-hover "
                id="stockTable"
              >
                <thead>
                  <tr>
                    <th>SME</th>
                    <th>Calendar Training</th>
                    <th>Blended</th>
                    <th>Adhoc Training </th>
                    <th>Byte Sized </th>
                    <th>Content Development</th>
                    <th>Evaluation</th>
                    <th>Skill Upgrade</th>
                    <th>Management</th>
                    <th>Time Off</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData?.map((row) => {
                    return (
                      <tr>
                        <td>{row["sme"]}</td>
                        <td>{row["Calendar Training"] || 0}</td>
                        <td>{row["Blended"] || 0}</td>
                        <td>{row["Adhoc Training"] || 0}</td>
                        <td>{row["Byte Sized"] || 0}</td>
                        <td>{row["Content Development"] || 0}</td>
                        <td>{row["Evaluation"] || 0}</td>
                        <td>{row["Skill Upgrade"] || 0}</td>
                        <td>{row["Management"] || 0}</td>
                        <td>{row["Time Off"] || 0}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Reports;
