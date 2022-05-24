import { useState } from 'react';

import { Button } from './components/Button';

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="text-center pt-8">
      <h1 className="block font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>

      <p className="text-base py-2">Button click {state} times</p>

      <Button onClick={() => setState(state + 1)}>Click me</Button>
    </div>
  );
}

export { App };
