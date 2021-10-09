import { useState, useEffect, useRef } from "react";
import "intersection-observer";
//Custom hook
export default function useNearScreen({
  distance = "6.25",
  externalRef,
  once = true,
}: {
  distance: string;
  externalRef?: React.RefObject<HTMLDivElement>;
  once?: boolean;
}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries: any) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: `${distance}%`,
    });

    element && observer.observe(element);

    //recordar que cuando se usa el return en el use effect cancela el efecto luego de usarlo.
    return () => observer.disconnect();
  });
  //isNearScreen retorna si es true (que se alcanzo el elemento) o false y fromref el elemento que se va a observar
  return { isNearScreen, fromRef, setShow };
}
