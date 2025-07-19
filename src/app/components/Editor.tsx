'use client';

import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

const Editor = forwardRef(
  (
    {
      readOnly,
      defaultValue,
      onTextChange,
      onSelectionChange,
    }: any,
    ref: any
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      // Dynamically import Quill on client side
      let quillInstance: any;

      const loadEditor = async () => {
        const quillModule = await import('quill');
        const Quill = quillModule.default;

        if (!containerRef.current) return;

        const container = containerRef.current;
        const editorContainer = document.createElement('div');
        container.appendChild(editorContainer);

        const quill = new Quill(editorContainer, {
          theme: 'snow',
        });

        quillInstance = quill;
        ref.current = quill;

        if (defaultValueRef.current) {
          quill.setContents(defaultValueRef.current);
        }

        quill.on(Quill.events.TEXT_CHANGE, (...args: any[]) => {
          onTextChangeRef.current?.(...args);
        });

        quill.on(Quill.events.SELECTION_CHANGE, (...args: any[]) => {
          onSelectionChangeRef.current?.(...args);
        });
      };

      loadEditor();

      return () => {
        ref.current = null;
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    }, [ref]);

    useEffect(() => {
      ref.current?.enable?.(!readOnly);
    }, [readOnly, ref]);

    return <div ref={containerRef} />;
  }
);

Editor.displayName = 'Editor';

export default Editor;
