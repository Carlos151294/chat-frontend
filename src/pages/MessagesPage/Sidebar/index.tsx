import Divider from '@mui/material/Divider';

import ConversationsList from "./ConversationsList";
import "./index.css";

const SiderBar = () => (
  <aside className="sidebar">
    <h1>Messages</h1>
    <Divider />
    <ConversationsList conversations={[{ author: 'Ray'}, {author: 'Thom'}, {author: 'Harry'}, { author: 'Ray'}, {author: 'Thom'}, {author: 'Harry'}, { author: 'Ray'}, {author: 'Thom'}, {author: 'Harry'}]} />
  </aside>
);

export default SiderBar;
