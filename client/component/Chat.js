"use client";

import { useState, useEffect, useRef } from "react";
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Chat(props) {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessageHandler = () => {
    console.log(`Sending [${messageText}] to chat [${props.chatId}]`);

    // TODO implemnt api for sending message

    // Add to current Chatwindow messages
    const newMessage = { text: messageText, userId: props.currentUserId };
    setMessages([...messages, newMessage]);

    // Clear Chatbox
    setMessageText("");
  };

  const handleTextChange = (event) => {
    setMessageText(event.target.value);
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
            value={messageText}
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

