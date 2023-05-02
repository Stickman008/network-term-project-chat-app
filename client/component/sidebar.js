"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Sidebar({ userId }) {

  const [conversations, setConversations] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Bob' },
  ]);

  const [activeConversation, setActiveConversation] = useState(conversations[0]);

  return (
    <ListGroup>
      {conversations.map((conversation, index) => (
        <ListGroupItem
          key={index}
          active={conversation.id === activeConversation?.id}
          onClick={() => setActiveConversation(conversation)}
        >
          {conversation.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}