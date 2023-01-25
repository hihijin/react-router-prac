import './App.css';

import React from 'react';

import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';

//import { Link, Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
      <div className='main'>
        <nav>
          <ul>
            <li className='contents'>
              <Link to="/"><button>Home</button></Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
            </li>
            <li className='contents'>
              <Link to="/mypage"><button>MyPage</button></Link>
            </li>
            <li className='contents'>
              <Link to="/dashboard"><button>Dashboard</button></Link>
            </li>
          </ul>
        </nav>

         <Routes>
          <Route path="/" element={<Home />} /> 
					{/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route path="/mypage" element={<MyPage />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
  );
}

// Home 컴포넌트
function Home() {
  return <h1>Home</h1>;
}

// MyPage 컴포넌트
function MyPage() {
  return <h1>MyPage</h1>;
}

// Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>;
}

/*
팁 : 만약 사용자가 지정된 주소인 “/’, “/mypage”, “/dashboard” 이외의 주소로 접근하게 되면 의도한 화면이 보이지 않을 수 있습니다.
이럴 때 사용할 수 있는 속성이 path=”*” 입니다. 지정되지 않은 주소로 접근할 시에는 이 속성이 설정되어 있는 컴포넌트를 보여주게 됩니다.
*/
/*
React Router에서 <a> 요소가 아닌 <Link>를 사용하는 이유가 있나요? <a> 요소는 페이지를 전환하는 과정에서 페이지를 불러오기 때문에 다시 처음부터 렌더링을 시킵니다.
즉, 새로고침 현상이 일어나게 되죠.하지만 <Link> 컴포넌트는 페이지 전환을 방지하는 기능이 내장되어 있기 때문에 SPA를 구현할 수 있습니다.
*/
export default App;
