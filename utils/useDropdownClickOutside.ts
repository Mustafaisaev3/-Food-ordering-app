import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

export default function useOnDropdownClickOutside<T extends HTMLElement = HTMLElement>(
  InnerRef: RefObject<T>,
  handler: (event: Event) => void,
) {
  useEffect(
    () => {
      const listener = (event: Event) => {
        const el = InnerRef?.current
        if (!el || el.contains((event?.target as Node) || null)) {
          return
        }
        handler(event);
      };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

      return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
      };
    },
    [InnerRef, handler]
  );
}