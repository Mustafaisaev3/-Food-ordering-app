import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  InnerRef: RefObject<T>,
  RootRef: RefObject<T> | null,
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

      if (RootRef || RootRef !== null) {
        RootRef?.current?.addEventListener('mousedown', listener);
        RootRef?.current?.addEventListener('touchstart', listener);
      } else {
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
      }

      return () => {
        if (RootRef || RootRef !== null) {
          RootRef?.current?.removeEventListener('mousedown', listener);
          RootRef?.current?.removeEventListener('touchstart', listener);
        } else {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        }
      };
    },
    [InnerRef, RootRef, handler]
  );
}