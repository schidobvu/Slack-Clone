import React from "react";
import styled from "styled-components";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

const SideBarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter channel name");
    if (channelName) {
      // addDoc(collection(db, "rooms"), {
      //   name: channelName,
      // });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span># </span>
          {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
};

export default SideBarOption;

const SideBarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340335;
  }

  > h3 {
    font-weight: 500;
  }
`;
const SideBarOptionChannel = styled.h3`
  padding: 10px;
  font-weight: 300;
`;
