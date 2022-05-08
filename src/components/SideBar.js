import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SideBarOption from "./SideBarOption";
import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const SideBar = () => {
  const [channels] = useCollection(collection(db, "rooms"));
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>PAPA FAM HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Sonny Sangha
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>

      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & Reactions" />
      <SideBarOption Icon={Drafts} title="Saved items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SideBarOption Icon={PeopleAlt} title=" People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SideBarOption
          key={doc.id}
          id={doc.id}
          selectChannel
          title={doc.data().name}
        />
      ))}
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: #fff;
    border-radius: 999px;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
  }
`;
