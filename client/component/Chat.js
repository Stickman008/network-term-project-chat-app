"use client";

import { useState, useEffect, useRef } from "react";
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchMessages, sendMessage } from "@/logic/message";

const socket = io.connect("http://localhost:5000");

export default function Chat(props) {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageBuffer, setMessageBuffer] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchMessages(props.chatId).then((data) => {
      // console.log(data);
      let texts = [];
      data.forEach((e) => {
        const { content, sender, _id } = e;
        texts.push({ content, sender, _id });
      })
      setMessageBuffer([...texts]);
    }).catch((err) => {
      console.error(err);
    });
    socket.emit("join-room", props.chatId);
  }, []);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const displayMessage = () => {
    let texts = [];
    messageBuffer.forEach((mess) => {
      const { content, sender, _id } = mess;
      texts.push({ content, sender, _id });
    });
    setMessages([...texts]);
  };

  useEffect(() => {
    displayMessage();
  }, [messageBuffer]);

  socket.on("receive-message", (mess) => {
    setMessageBuffer([...messageBuffer, mess]);
  });

  const sendMessageHandler = () => {
    // TODO implemnt api for sending message

    const newMessage = { content: messageInput, sender: props.currentUserId, chat: props.chatId };
    let data = newMessage
    socket.emit("send-message", data, props.chatId)
    setMessageBuffer([...messageBuffer, data]);
    sendMessage(props.currentUserId, props.chatId, messageInput);
    // Clear Chatbox
    setMessageInput("");
  };

  const handleTextChange = (event) => {
    setMessageInput(event.target.value);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === props.currentUserId ? "text-right mb-3" : "text-left mb-3"}>
            <span className={message.sender === props.currentUserId ? "p-2 bg-primary text-white rounded" : "p-2 bg-light rounded"}>
              {message.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <InputGroup className="mb-3">
          <FormControl
            // style={{ boxShadow: 'none', maxWidth: '500px' }}
            style={{ boxShadow: 'none' }}
            placeholder="Type a message..."
            aria-label="Type a message..."
            value={messageInput}
            onChange={handleTextChange}
          />
          <Button variant="primary" id="button-addon2" onClick={sendMessageHandler}>
            Send
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

