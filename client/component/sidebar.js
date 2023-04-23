import '../app/chat/[chatId]/page.css' ; 


export default function page({userId}) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-16 bg-light sidebar">
            <div className="sidebar">
              <ul className="nav flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link active">Chat 1</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">Chat 2</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link active">Chat 3</a>
              </li>
                {/* {chats.map((chat) => (
                  <li key={chat.id} className="nav-item">
                    <a
                      href="#"
                      className={`nav-link ${selectedChat && selectedChat.id === chat.id ? 'active' : ''}`}
                      onClick={() => handleChatSelect(chat.id)}
                    >
                      {chat.name}
                    </a>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            {/* <h4>{selectedChat ? selectedChat.name : 'Select a chat'}</h4> */}
            {/* {selectedChat && (
              <div>
                <div className="card mb-3">
                  <div className="card-body">
                    <ChatWindow messages={selectedChat.messages} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <div className="card">
                      <div className="card-header">Send a Message</div>
                      <div className="card-body">
                        <ChatInput onSubmit={handleChatSubmit} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    

      // <li key={userId}>
      //   <a
      //     // href={`/dashboard/chat/${chatHrefConstructor(
      //     //   sessionId,
      //     //   friend.id
      //     // )}`}
      //     className='text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
      //     {userId}
      //     {1 ? (
      //       <div className='bg-indigo-600 font-medium text-xs text-white w-4 h-4 rounded-full flex justify-center items-center'>
      //         {userId}
      //       </div>
      //     ) : null}
      //   </a>
      // </li>

      // <div class="container-fluid">
      //   <div class="row">
      //     <div class="col-md-3 bg-light sidebar">
      //       <div class="sidebar-sticky">
      //         <h5 class="mb-3">Chats</h5>
      //         <ul class="nav flex-column">
      //           <li class="nav-item">
      //             <a href="#" class="nav-link active">Chat 1</a>
      //           </li>
      //           <li class="nav-item">
      //             <a href="#" class="nav-link">Chat 2</a>
      //           </li>
      //           <li class="nav-item">
      //             <a href="#" class="nav-link">Chat 3</a>
      //           </li>
      //           <li class="nav-item">
      //             <a href="#" class="nav-link">Chat 4</a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //     {/* <div class="col-md-9">
      //       <div class="my-4">
      //         <h4>Select a chat</h4>
      //       </div>
      //     </div> */}
      //   </div>
      // </div>

    );
  }