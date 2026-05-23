import React, { useRef, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';

export const CodeEditor = ({ code, onChange, language }) => {
  const editorRef = useRef(null);

  const handleEditorMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border border-cyan-500/20">
      <Editor
        height="100%"
        language={language}
        value={code}
        onChange={(value) => onChange(value || '')}
        onMount={handleEditorMount}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          fontFamily: 'Fira Code, monospace',
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          lineNumbers: 'on',
          padding: { top: 16, bottom: 16 }
        }}
      />
    </div>
  );
};
