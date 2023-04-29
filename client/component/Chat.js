"use client";

import { useState, useEffect, useRef } from "react";
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io.connect("http://localhost:5000");

export default function Chat(props) {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageBuffer, setMessageBuffer] = useState([]);
  const messagesEndRef = useRef(null);

  // useEffect(() => {
  //   const paresString = async (string) => await JSON.parse(string);
  //   const user = localStorage.getItem("user");

  //   setActive(false);
  //   paresString(user)
  //     .then((User) => setUser(User))
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const displayMessage = () => {
    let texts = [];
    messageBuffer.forEach((event) => {
      const { content, sender, _id: messageId } = event;
      if (content.text) {
        const { text } = content;
        texts.push({ text, sender, messageId });
      }
        texts.push({ value, sender, messageId });
      }
    );
    setMessages([...texts]);
  };

  useEffect(() => {
    displayMessage();
  }, [messageBuffer]);

  socket.on("receive-message", (mess) => {
    console.log(mess);
    setMessageBuffer([...messageBuffer, mess]);
  });

  const sendMessageHandler = () => {
    console.log(`Sending [${messageInput}] to chat [${props.chatId}]`);

    // TODO implemnt api for sending message

    // Add to current Chatwindow messages
    const newMessage = { text: messageInput, userId: props.currentUserId };
    // console.log(props.currentUserId, newMessage.userId);
    let data = newMessage
    socket.emit("send-message", data, props.chatId)
    setMessages([...messages, newMessage]);

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
          <div key={index} className={message.userId === props.currentUserId ? "text-right mb-3" : "text-left mb-3"}>
            <span className={message.userId === props.currentUserId ? "p-2 bg-primary text-white rounded" : "p-2 bg-light rounded"}>
              {message.text}
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

