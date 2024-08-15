import React from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessage';
import useListenMessages from '../../hooks/useListenMessage';

const Messages = () => {
  const { messages } = useGetMessage();
  useListenMessages()
  console.log("messages", messages);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {messages.length > 0 && messages.map((message) => {
        console.log(message._id); // Log the _id to check uniqueness
        return <Message key={message._id} message={message} />;
      })}

      {messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
