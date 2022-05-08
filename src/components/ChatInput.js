import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  console.log(channelId);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return;
    }
    setDoc(doc(db, "rooms", channelId), {
      messages: input,
      timestamp: serverTimestamp(),
      user: "Sonny sangha",
      userImage:
        "https://th.bing.com/th/id/OIP.0gdX_HciAxgal3Q0cCl61QHaFj?pid=ImgDet&rs=1",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <FormContainer>
        <InputContainer
          placeholder="Type a message"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </FormContainer>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
`;
const FormContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  > button {
    display: none !important;
  }
`;
const InputContainer = styled.input`
  position: fixed;
  bottom: 30px;
  width: 60%;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 20px;
  outline: none;
`;
