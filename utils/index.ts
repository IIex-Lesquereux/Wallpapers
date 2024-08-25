export const download = (src: string, name: string) => {
  const a = document.createElement("a");
  const body = document.body;
  a.href = src;
  a.download = name;
  a.style.display = "none";
  body.appendChild(a);
  a.click();
  body.removeChild(a);
};
