const App = () => {
  const [color, setColor] = React.useState("");
  const stringToColor = str => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var color = "#";
    for (var i = 0; i < 3; i++) {
      var value = hash >> i * 8 & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    setColor(color);
    return color;
  };
  const textColor = color === "#000000" && "#ffffff";
  return /*#__PURE__*/(
    React.createElement("div", { className: "background", style: { background: color } }, /*#__PURE__*/
    React.createElement("h2", { style: { color: textColor } }, "What color is your name? "), /*#__PURE__*/
    React.createElement("input", {
      placeholder: "Your name",
      type: "text",
      onChange: e => stringToColor(e.target.value) }), /*#__PURE__*/

    React.createElement("p", { style: { color: textColor } }, color)));


};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));