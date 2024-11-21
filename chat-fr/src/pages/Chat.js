import React, { useState } from "react";
import CustInput from "../components/CustInput";
import { dateFormatter } from "../utils/utils";

const Chat = () => {
  const [search, setSearch] = useState("");
  const [listMessages, setListMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Hey, how are you?",
      timestamp: "2024-01-10T09:00:00",
      isRead: true,
      seen: true,
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "I'm good! Just working on the new project. How about you?",
      timestamp: "2024-01-10T09:05:00",
      isRead: true,
      seen: true,
    },
    {
      id: 3,
      sender: "John Doe",
      message: "Same here. Making good progress on the frontend.",
      timestamp: "2024-01-10T09:10:00",
      isRead: false,
      seen: false,
    },
    {
      id: 4,
      sender: "Jane Smith",
      message: "That's great! Let's catch up in the team meeting later.",
      timestamp: "2024-01-10T09:15:00",
      isRead: false,
      seen: false,
    },
  ]);
  const [message, setMessage] = useState("");

  const [currentMessageList, setCurrentMessageList] = useState([
    {
      id: 1,
      message: "Hey there! How's your day going?",
      sender: "John Doe", 
      timestamp: "2024-01-10T09:00:00",
      isRead: true,
      seen: true,
    },
    {
      id: 2,
      message: "Hi! Pretty good, just finishing up some work. How about you?",
      sender: "Jane Smith",
      timestamp: "2024-01-10T09:05:00", 
      isRead: true,
      seen: true,
    },
    {
      id: 3,
      message: "Same here. Working on that new feature we discussed.",
      sender: "John Doe",
      timestamp: "2024-01-10T09:10:00",
      isRead: true,
      seen: true,
    },
    {
      id: 4,
      message: "Oh great! How's it coming along? Need any help?",
      sender: "Jane Smith",
      timestamp: "2024-01-10T09:15:00",
      isRead: true,
      seen: true,
    },
    {
      id: 5,
      message: "It's going well! Just stuck on one small bug.",
      sender: "John Doe",
      timestamp: "2024-01-10T09:20:00",
      isRead: true,
      seen: true,
    },
    {
      id: 6,
      message: "Want to hop on a quick call to look at it together?",
      sender: "Jane Smith",
      timestamp: "2024-01-10T09:25:00",
      isRead: true,
      seen: true,
    },
    {
      id: 7,
      message: "That would be great! Give me 5 minutes to wrap up.",
      sender: "John Doe",
      timestamp: "2024-01-10T09:30:00",
      isRead: true,
      seen: true,
    },
    {
      id: 8,
      message: "No problem! I'll set up the meeting link.",
      sender: "Jane Smith",
      timestamp: "2024-01-10T09:35:00",
      isRead: false,
      seen: false,
    },
    {
      id: 9,
      message: "Here's the link: meet.google.com/abc-defg-hij",
      sender: "Jane Smith",
      timestamp: "2024-01-10T09:36:00",
      isRead: false,
      seen: false,
    },
    {
      id: 10,
      message: "Perfect, joining in a minute!",
      sender: "John Doe",
      timestamp: "2024-01-10T09:38:00",
      isRead: false,
      seen: false,
    },
    {
      id: 11,
      message: "The bug was in the authentication flow - fixed now!",
      sender: "John Doe", 
      timestamp: "2024-01-10T10:15:00",
      isRead: false,
      seen: false,
    },
    {
      id: 12,
      message: "That's great! The call was really helpful.",
      sender: "Jane Smith",
      timestamp: "2024-01-10T10:17:00", 
      isRead: false,
      seen: false,
    },
    {
      id: 13,
      message: "Yeah, pair programming always helps debug faster!",
      sender: "John Doe",
      timestamp: "2024-01-10T10:20:00",
      isRead: false,
      seen: false,
    },
    {
      id: 14,
      message: "Should we schedule a follow-up tomorrow?",
      sender: "Jane Smith",
      timestamp: "2024-01-10T10:25:00",
      isRead: false,
      seen: false,
    },
    {
      id: 15,
      message: "Same time works for me!",
      sender: "John Doe",
      timestamp: "2024-01-10T10:27:00",
      isRead: false,
      seen: false,
    },
    {
      id: 16,
      message: "Perfect, I'll send a calendar invite.",
      sender: "Jane Smith", 
      timestamp: "2024-01-10T10:30:00",
      isRead: false,
      seen: false,
    },
    {
      id: 17,
      message: "Thanks! Looking forward to it.",
      sender: "John Doe",
      timestamp: "2024-01-10T10:32:00",
      isRead: false,
      seen: false,
    },
    {
      id: 18,
      message: "Calendar invite sent! See you tomorrow.",
      sender: "Jane Smith",
      timestamp: "2024-01-10T10:35:00",
      isRead: false,
      seen: false,
    },
    {
      id: 19,
      message: "Got it, thanks! Have a great rest of your day!",
      sender: "John Doe",
      timestamp: "2024-01-10T10:37:00",
      isRead: false,
      seen: false,
    },
    {
      id: 20,
      message: "You too! Bye for now! 👋",
      sender: "Jane Smith",
      timestamp: "2024-01-10T10:40:00",
      isRead: false,
      seen: false,
    }
  
   
  ]);
  return (
    <div className="chat-page">
      <div className="chat-page__header">
        <div className="chat-page__header-left">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "8px" }}
          >
            <path
              d="M5.33 4h21.34C28.51 4 30 5.49 30 7.33v13.34C30 22.51 28.51 24 26.67 24H8l-6 6V7.33C2 5.49 3.49 4 5.33 4z"
              fill="white"
              stroke="black"
            />
            <path
              d="M25 16H7M25 12H7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>Message</h1>
        </div>
        <div className="chat-page__header-right">
          <div className="profile-box">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="profile-box__avatar"
            >
              <circle cx="20" cy="16" r="6" fill="#9FA8DA" />
              <path
                d="M8 34C8 28.4772 12.4772 24 18 24H22C27.5228 24 32 28.4772 32 34V40H8V34Z"
                fill="#9FA8DA"
              />
            </svg>
            <span className="profile-box__status" />
          </div>
        </div>
      </div>
      <div className="chat-page__content">
        <div className="chat-page__content-left">
          <div className="chat-page__content-left-header">
            <div className="chat-page__content-left-header-left">
              <div className="chat-page__content-left-header-title">
                Customers messages
              </div>
              <div className="chat-page__content-left-header-menu">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="2" fill="black" />
                  <circle cx="19" cy="12" r="2" fill="black" />
                  <circle cx="5" cy="12" r="2" fill="black" />
                </svg>
              </div>
            </div>
            <div className="chat-page__content-left-header-search">
              <CustInput
                placeholder="Search messages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="chat-page__content-left-body">
            <div className="chat-page__content-left-body-item">
              {listMessages.map((message, index) => (
                <div
                  className="chat-page__content-left-body-item-message"
                  key={index}
                >
                  <div className="chat-page__content-left-body-item-message-avatar">
                    <img
                      src={
                        message.avatar || "https://via.placeholder.com/40x40"
                      }
                      alt={message.sender}
                      className="profile-box__avatar"
                    />
                  </div>
                  <div className="chat-page__content-left-body-item-message-content">
                    <div className="chat-page__content-left-body-item-message-sender">
                      <div className="sender-name">{message.sender}</div>
                      <div className="message-time">{message.time}</div>
                    </div>
                    <div className="chat-page__content-left-body-item-message-content-text">
                      <div className="message-text">{message.message}</div>
                      <div className="message-status">
                        {message.seen ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="chat-page__content-right">
          <div className="chat-page__content-right-header">
            <div className="chat-page__content-right-header-current-user">
              <div className="chat-page__content-right-header-current-user-avatar">
                <img
                  src="https://via.placeholder.com/40x40"
                  alt="current user"
                  className="profile-box__avatar"
                />
              </div>
              <div className="chat-page__content-right-header-current-user-name">
                <div className="sender-name">John Doe</div>
              </div>
              <div className="chat-page__content-right-header-current-user-menu">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="2" fill="black" />
                  <circle cx="19" cy="12" r="2" fill="black" />
                  <circle cx="5" cy="12" r="2" fill="black" />
                </svg>
              </div>
            </div>
          </div>
          <div className="chat-page__content-right-body">
            <div className="chat-page__content-right-body-message-textlist">
              {currentMessageList.map((message, index) => (
                <div
                  className={`chat-page__content-right-body-message-textlist-item ${
                    message.sender === "John Doe"
                      ? "chat-page__content-right-body-message-textlist-item-sent"
                      : "chat-page__content-right-body-message-textlist-item-received"
                  }`}
                  key={index}
                >
                  <div className="chat-page__content-right-body-message-textlist-item-sender">
                    {message.sender === "Jane Smith" ? "You" : message.sender}
                  </div>
                  <div className="chat-page__content-right-body-message-textlist-item-message">
                    {message.message}
                  </div>
                  <div className="chat-page__content-right-body-message-textlist-item-time">
                    {dateFormatter(new Date(message.timestamp), "HH:mm")}
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-page__content-right-body-message">
              <div className="chat-page__content-right-body-message-input">
                <CustInput
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
