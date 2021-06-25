import "./app.scss";
import Chats from "./components/chats/Chats";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="container">
      <div className="appContainer">
        <Chats />
        <Chat />
      </div>
    </div>
  );
}

export default App;
