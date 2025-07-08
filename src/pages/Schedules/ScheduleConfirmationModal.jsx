import React, { useEffect, useState } from "react";
import CustomModal from "../../components/Modal";
import {
  SCHEDULE_DELETE_MODAL,
  SCHEDULE_UPDATE_MODAL,
} from "../../utils/Constants";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import {
  scheduleDeleteRequested,
  scheduleUpdateRequested,
} from "../../state/action/scheduleAction";
import { FloppyDisk, Trash } from "@phosphor-icons/react";

const ScheduleConfirmationModal = ({ type, modalData, setModalData }) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(modalData?.data);
  }, [modalData]);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.scheduleReducer.isLoading);

  const handleUpdate = () => {
    console.log(data);
    dispatch(scheduleUpdateRequested({ ...data }));
  };

  const handleDelete = () => {
    dispatch(scheduleDeleteRequested({ ...data }));
  };

  return (
    <CustomModal
      open={modalData.open}
      onClose={() => {
        setModalData((prev) => ({ ...prev, open: false }));
      }}
    >
      {type === SCHEDULE_UPDATE_MODAL && (
        <>
          <h5>Update Schedule Information</h5>
          <Form
            data={data}
            setData={setData}
            isEditable={true}
            handleSubmit={() => {
              handleUpdate();
            }}
            submitButton={
              <>
                <FloppyDisk size={25} weight="fill" /> Update
              </>
            }
          />
        </>
      )}
      {type === SCHEDULE_DELETE_MODAL && (
        <>
          <h5>Delete Schedules</h5>
          <Form
            data={data}
            setData={setData}
            isEditable={false}
            handleSubmit={() => {
              handleDelete();
            }}
            submitButton={
              <>
                <Trash size={25} weight="fill" /> Delete
              </>
            }
          />
        </>
      )}
    </CustomModal>
  );
};

export default ScheduleConfirmationModal;
