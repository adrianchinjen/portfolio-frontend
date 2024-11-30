import '../../App.css';
import { AppRouter } from './router';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-df-light dark:bg-df-dark">
      <AppRouter />
    </div>
  );
}

export default App;
