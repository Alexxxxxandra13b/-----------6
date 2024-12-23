import Message from './Message';
import ToggleSvet from './ToggleSvet';
import UserStatus from './UserStatus';
import Comment from './Comment';
import Admin from './Admin';
import Product from './Product';
import Warning from './Warning';
import ToggleTeni from './ToggleTeni';
import SubscribeButton from './SubscribeButton';
import Info from './Info';
import './App.css';

function App() {
  return (
    <div className="App">
      <Message />
      <ToggleSvet />
      <Admin />
      <UserStatus />
      <Warning />
      <ToggleTeni />
      <Comment />
      <SubscribeButton />
      <Info />
      <Product />
    </div>
  );
}

export default App;