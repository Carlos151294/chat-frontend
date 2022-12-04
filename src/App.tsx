import { SocketProvider } from "./context/socket/index";
import { ChatProvider } from "./context/chat/index";

function App() {
  return (
    <SocketProvider>
      <ChatProvider>
        <div className="App">Hello</div>
      </ChatProvider>
    </SocketProvider>
  );
}

export default App;
