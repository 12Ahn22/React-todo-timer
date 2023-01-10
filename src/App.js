import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './page/Main';
import Time from './page/Time';
import ToDo from './page/ToDo';
import './App.css';
import Layout from './components/UI/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="time" element={<Time />} />
        <Route path="todo" element={<ToDo />} />
        {/* 없는 URL 접근 시, /로 이동 */}
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default App;
