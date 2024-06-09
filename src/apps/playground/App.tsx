import './App.css';
import { useState } from 'react';
import { components } from '@ony3000/experimental-ui';
import { Button } from '@ony3000/experimental-ui/components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>
        console에 HMR 실패 에러가 뜨면 화면 새로고침 해보기
        <br />
        새로고침 해도 변경사항이 반영되지 않으면 개발서버 재시작하기
      </p>
      <div>
        <h2>import test</h2>
        <div>
          <h3>root entry point에서 가져오기</h3>
          <components.Button>Lorem ipsum</components.Button>
        </div>
        <div>
          <h3>
            <code>/components</code> entry point에서 가져오기
          </h3>
          <Button>dolor sit amet</Button>
        </div>
      </div>
    </>
  );
}

export default App;
