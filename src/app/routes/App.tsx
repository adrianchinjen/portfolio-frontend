import '../../App.css';
import { AppRouter } from './router';

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <AppRouter />
    </div>
  );
}

export default App;
