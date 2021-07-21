const timelineData = [
{
  text: 'Decouverte',
  date: 'premiere 1/2 journée',
  category: {
    tag: 'chap 1',
    color: '#FFDB14' },

  link: {
    url: 'https://sbrunet.fr/react/',
    text: 'sbrunet en ligne' } },


{
  text: 'Started the Weekly Coding Challenge program',
  date: 'March 04 2019',
  category: {
    tag: 'blog',
    color: '#e17b77' },

 },


{
  text: 'Got 1.000 followers on Twitter',
  date: 'March 07 2019',
  category: {
    tag: 'twitter',
    color: '#1DA1F2' },

  link: {
    url: 'https://twitter.com/florinpop1705',
    text: 'See profile' } },


{
  text:
  'I published my first article in the FreeCodeCamp Medium Publication',
  date: 'March 18 2019',
  category: {
    tag: 'medium',
    color: '#018f69' },

  link: {
    url:
    'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
    text: 'Check it out here' } },


{
  text: 'Over 12.000 views in a single day on my Medium posts',
  date: 'April 05 2019',
  category: {
    tag: 'medium',
    color: '#018f69' },

  link: {
    url: 'https://medium.com/@popflorin1705',
    text: 'See profile' } }];




const TimelineItem = ({ data }) =>
React.createElement("div", { className: "timeline-item" },
React.createElement("div", { className: "timeline-item-content" },
React.createElement("span", { className: "tag", style: { background: data.category.color } },
data.category.tag),

React.createElement("time", null, data.date),
React.createElement("p", null, data.text),
data.link &&
React.createElement("a", {
  href: data.link.url,
  target: "_blank",
  rel: "noopener noreferrer" },

data.link.text),

React.createElement("span", { className: "circle" })));

const Timeline = () =>
timelineData.length > 0 &&
React.createElement("div", { className: "timeline-container" },
timelineData.map((data, idx) =>
React.createElement(TimelineItem, { data: data, key: idx })));


const App = () => React.createElement(React.Fragment, null,
React.createElement("h1", null, "React Timeline"),
React.createElement(Timeline, null));


ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
