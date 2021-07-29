export const resultsDropdown = (
  trigger: string | boolean,
  elementWrapper: React.RefObject<HTMLDivElement>
): void => {
  let count = 0;
  let parentHeight = elementWrapper.current?.getBoundingClientRect().height;
  let ulHeight =
    elementWrapper.current?.children[0]?.getBoundingClientRect().height;

  if (trigger) {
    //Update the height every render
    setTimeout(() => {
      ulHeight =
        elementWrapper.current?.children[0]?.getBoundingClientRect().height;
      parentHeight = elementWrapper.current?.getBoundingClientRect().height;
    }, 50);

    //Detect the distance of scroll bar and update the counter
    elementWrapper.current?.addEventListener("scroll", () => {
      count = elementWrapper.current!.scrollTop;
    });

    document.addEventListener("keydown", (e) => {
      elementWrapper.current?.focus();

      if (e.key === "ArrowDown") {
        if (ulHeight! - parentHeight! <= count) return;

        elementWrapper.current?.scroll(0, (count = count + 25));
      }

      if (e.key === "ArrowUp") {
        if (count <= 0) {
          count = 25;
        }
        elementWrapper.current?.scroll(0, (count = count - 25));
      }
    });
  }
};
