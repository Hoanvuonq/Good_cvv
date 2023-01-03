import { useEffect, useRef } from 'react';

export function useOnClickOutside(node, handler) {
    const handlerRef = useRef(handler);
    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (node.current?.contains(event.target) ?? false) {
                return;
            }
            handler && handler(false);

            if (handlerRef.current) handlerRef.current();
        };
        document.addEventListener('pointerdown', listener);
        return () => {
            document.removeEventListener('pointerdown', listener);
        };
    }, [node, handler]);
}
