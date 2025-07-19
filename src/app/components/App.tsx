'use client';

import React, { useRef, useState, useEffect } from 'react';
import Editor from './Editor';

const App = () => {
  const [Delta, setDelta] = useState<any>(null);
  const [range, setRange] = useState<any>();
  const [lastChange, setLastChange] = useState<any>();
  const [readOnly, setReadOnly] = useState(false);
  const quillRef = useRef<any>(null);

  useEffect(() => {
    import('quill').then((quillModule) => {
      const Quill = quillModule.default;
      setDelta(() => Quill.import('delta'));
    });
  }, []);

  if (!Delta) {
    return <div>Loading editor...</div>;
  }

  return (
    <div>
      <Editor
        ref={quillRef}
        readOnly={readOnly}
        defaultValue={
          new Delta()
            .insert('Hello')
            .insert('\n', { header: 1 })
            .insert('Some ')
            .insert('initial', { bold: true })
            .insert(' ')
            .insert('content', { underline: true })
            .insert('\n')
        }
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      />
      <div className="controls">
        <label>
          Read Only:{' '}
          <input
            type="checkbox"
            checked={readOnly}
            onChange={(e) => setReadOnly(e.target.checked)}
          />
        </label>
        <button
          className="controls-right"
          type="button"
          onClick={() => alert(quillRef.current?.getLength())}
        >
          Get Content Length
        </button>
      </div>
      <div className="state">
        <div className="state-title">Current Range:</div>
        {range ? JSON.stringify(range) : 'Empty'}
      </div>
      <div className="state">
        <div className="state-title">Last Change:</div>
        {lastChange ? JSON.stringify(lastChange.ops) : 'Empty'}
      </div>
    </div>
  );
};

export default App;
