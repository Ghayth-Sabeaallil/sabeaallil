import { j as e } from "./index-Ce68PiiK.js";
function r({ text: s, handleClick: n }) {
  return e.jsx(e.Fragment, {
    children: e.jsx("button", { onClick: n, className: "btn", children: s }),
  });
}
const l = () => {
  const s = () => {};
  return e.jsx(e.Fragment, {
    children: e.jsx("main", {
      id: "home-section",
      children: e.jsxs("div", {
        className: "container",
        children: [
          e.jsx("div", {
            className: "left-div",
            children: e.jsxs("div", {
              className: "circle-shadow",
              children: [
                e.jsx("img", {
                  className: "pic",
                  src: "./pic.jpeg",
                  alt: "pic",
                }),
                e.jsxs("ul", {
                  className: "menu",
                  children: [
                    e.jsx("li", {
                      children: e.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://github.com/Ghayth-Sabeaallil",
                        children: e.jsx("img", { src: "./github.svg" }),
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://www.linkedin.com/in/ghayth-sabeaallil/",
                        children: e.jsx("img", { src: "./linkedin.svg" }),
                      }),
                    }),
                    e.jsx("li", {
                      children: e.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "mailto:ghaessesa58@gmail.com",
                        children: e.jsx("img", { src: "./at.svg" }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "right-div",
            children: [
              e.jsx("h1", { className: "name", children: "GHAYTH SABEAALLIL" }),
              e.jsx("div", {
                className: "subtext",
                children: e.jsxs("div", {
                  className: "typing-text",
                  children: [
                    "  </ ",
                    e.jsx("span", { children: "Front" }),
                    " ",
                    e.jsx("span", { children: "End" }),
                    " ",
                    e.jsx("span", { children: "Developer" }),
                    " ",
                    ">",
                  ],
                }),
              }),
              e.jsx(r, { text: "See my Resums", handleClick: s }),
            ],
          }),
        ],
      }),
    }),
  });
};
export { l as default };
