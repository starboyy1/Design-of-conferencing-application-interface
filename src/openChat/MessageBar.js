// ChatInputBar.js
import React, { useRef, useState } from 'react';
import styles from './ChatInputBar.module.css';
import attachIcon from '../Images/attach.png';
import cameraIcon from '../Images/Camera.png';
import micIcon from '../Images/Mic.png';
import Sendicon from './Sendicon';

function ChatInputBar() {
  const [inputText, setInputText] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAttachClick = () => {
    fileInputRef.current.click(); // Open file dialog
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File selected:', file); // Handle the uploaded file here
    }
  };

  return (
    <div className={styles.chatInputBar}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type here..."
          className={styles.inputField}
          value={inputText}
          onChange={handleInputChange}
        />
        <img
          src={attachIcon}
          alt="Attach"
          className={styles.iconAttach}
          onClick={handleAttachClick} // Trigger file input on click
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <img src={cameraIcon} alt="Camera" className={styles.iconCamera} />
      </div>
      <div
        style={{
          backgroundColor: '#FF6500',
          display: 'flex',
          alignItems: 'center',
          height: '38px',
          width: '38px',
          marginLeft: '5px',
        }}
      >
        {inputText ? (
          <Sendicon />
        ) : (
          <img src={micIcon} alt="Microphone" className={styles.iconMic} />
        )}
      </div>
    </div>
  );
}

export default ChatInputBar;
