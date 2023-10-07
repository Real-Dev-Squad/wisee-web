export const setFocusToNewBlock = (position: number) => {
  setTimeout(() => {
    const elements = document.querySelectorAll("[contenteditable]");
    const newBlock = elements[position] as HTMLElement;

    newBlock.focus();
  }, 0);
};
