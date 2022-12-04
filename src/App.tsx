import { SocketProvider } from "./context/socket/index";
import { ChatProvider } from "./context/chat/index";
import MessagesPage from "./pages/MessagesPage";

function App() {
  return (
    <SocketProvider>
      <ChatProvider>
        <MessagesPage />
      </ChatProvider>
    </SocketProvider>
  );
}

export default App;
