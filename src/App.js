import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './page/Main';
import Time from './page/Time';
import ToDo from './page/ToDo';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="time" element={<Time />} />
      <Route path="todo" element={<ToDo />} />
      {/* 없는 URL 접근 시, /로 이동 */}
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
