import { ChatEngine } from "react-chat-engine";
import "../src/App.css"

import ChatFeed from "./components/ChatFeed.jsx";

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="3c8f17bd-c377-4bbd-814b-ffbbd7a1e3ed"
            userName="ammarasc74"
            userSecret="12345"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}
export default App;