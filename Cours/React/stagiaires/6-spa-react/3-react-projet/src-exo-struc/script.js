function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}console.clear();

const {
  useState,
  useEffect,
  useReducer,
  useLayoutEffect,
  useRef } =
React;

const states = {
  IDLE: "IDLE",
  HOVERING: "HOVERING",
  UPLOADING: "UPLOADING",
  SUCCESS: "SUCCESS" };


const events = {
  MOUSEENTER: "MOUSEENTER",
  MOUSELEAVE: "MOUSELEAVE",
  CLICK: "CLICK",
  SUCCESS: "SUCCESS",
  RESET: "RESET" };


const uploaderMachine = {
  initial: states.IDLE,
  states: {
    [states.IDLE]: {
      on: {
        [events.CLICK]: states.UPLOADING,
        [events.MOUSEENTER]: states.HOVERING } },


    [states.HOVERING]: {
      on: {
        [events.CLICK]: states.UPLOADING,
        [events.MOUSELEAVE]: states.IDLE } },


    [states.UPLOADING]: {
      on: { [events.UPLOADED]: states.SUCCESS } },

    [states.SUCCESS]: {
      on: {
        [events.CLICK]: states.IDLE,
        [events.RESET]: states.IDLE } } } };





function uploaderReducer(state, event) {
  return (
    uploaderMachine.states[state] &&
    uploaderMachine.states[state].on[event] ||
    state);

}

/* ---------------------------------- */

function Progress(props) {
  const { duration } = props;
  const valueRef = useRef(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      valueRef.current = valueRef.current + 1;
      setValue(valueRef.current);
    }, duration / 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    React.createElement("progress", { min: 0, max: 100, value: value }));

}

const TIMEOUT = 2000;

function FileUploader() {
  const [state, dispatch] = useReducer(
  uploaderReducer,
  uploaderMachine.initial);


  useEffect(() => {
    switch (state) {
      case states.UPLOADING:
        setTimeout(() => dispatch(events.UPLOADED), TIMEOUT);
        break;
      case states.SUCCESS:
        setTimeout(() => dispatch(events.RESET), TIMEOUT);
        break;}

  }, [state]);

  const showProgress = [states.UPLOADING, states.SUCCESS].includes(state);

  return (
    React.createElement("div", {
      className: "file-uploader",
      "data-state": state,
      onMouseEnter: () => dispatch("MOUSEENTER"),
      onMouseLeave: () => dispatch("MOUSELEAVE"),
      onClick: () => dispatch("CLICK") },

    React.createElement(CloudIcon, { state: state }),

    React.createElement("div", { className: "message" },
    React.createElement("strong", {
      "data-hidden": ![states.IDLE, states.HOVERING].includes(state) }, "Upload"),


    React.createElement("strong", {
      "data-hidden": ![states.UPLOADING].includes(state), className: "message-uploading" }, "Uploading"),

    React.createElement("strong", {
      "data-hidden": ![states.SUCCESS].includes(state), className: "message-done" }, "Done!")),


    React.createElement("div", { className: "progress", "data-hidden": !showProgress },
    showProgress && React.createElement(Progress, { duration: TIMEOUT }))));



}

function CloudIcon({ state }) {

  const svgDisplayProps = {
    viewBox: "0 0 32 32",
    width: "100",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    strokeMiterlimit: "1.5" };


  return (
    React.createElement("div", { className: "cloud-icon" },
    React.createElement("svg", _extends({ className: "cloud", "data-hidden": "false" }, svgDisplayProps),
    React.createElement("path", { d: "M18 22h6.001A5.003 5.003 0 0029 17a4.997 4.997 0 00-3.117-4.634 5.503 5.503 0 00-7.789-3.813 7 7 0 00-13.082 3.859A5.007 5.007 0 002 17c0 2.761 2.232 5 4.999 5H13" })),

    React.createElement("svg", _extends({
      className: "line",
      "data-hidden": [states.UPLOADING, states.HOVERING].includes(state) },
    svgDisplayProps),
    React.createElement("path", { d: "M18 22h-5" })),

    React.createElement("svg", _extends({
      className: "arrow",
      "data-hidden": ![states.UPLOADING, states.HOVERING].includes(state) },
    svgDisplayProps),

    React.createElement("path", { d: "M15.5 15.151v11.824-11.824z" }),
    React.createElement("path", { d: "M12.075 18.34l3.425-3.528 3.425 3.528" })),

    React.createElement("svg", _extends({
      className: "check",
      "data-hidden": ![states.SUCCESS].includes(state) },
    svgDisplayProps),
    React.createElement("path", {
      d: "M11.4 15.787l3.426 2.553 5.774-5.556" }))));



}

/* ---------------------------------- */

function App() {
  return (
    React.createElement("div", { className: "app" },
    React.createElement(FileUploader, null)));


}

ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));