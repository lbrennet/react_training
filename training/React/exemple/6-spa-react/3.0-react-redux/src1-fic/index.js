
//Redux
//liste des actions types
//Une action est un simple objet JS qui a pour
//seule contrainte d’avoir une propriété
const HANDLE_CHANGE = 'HANDLECHANGE';

//initialisation des valeurs
const defaultState = {
  firstName: "John",
  lastName: "Doe",
  chairs: true,
  tables: true };
  //initialisation des valeurs

//actions
const handleChange = event => {
  const { name, value, type } = event.target;
  return {
    type: HANDLE_CHANGE,
    value,
    name,
    input: type };

};
// affecte  les nouvelles valeurs du formulaire
//reducer
//Un réducteur (reducer) est une fonction ,
//qui prend en paramètre un état et une action, pour retourner un (nouvel) état:
const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      let newState = Object.assign({}, state);
      action.input === "checkbox" ? newState[action.name] = !newState[action.name] :
      newState[action.name] = action.value;
      return newState;
    default:
      return state;}

};
//mise a jour ou non du store
//Le store Redux est l’objet javascript qui contient l’état immuable d’une application.
//Toute modification du store doit passer par un reducer qui va générer un nouvel état.
//On crée un store avec la fonction createStore et en paramètre un réducteur capable de gérer les actions

const store = Redux.createStore(formReducer);

//React-Redux

//mapStateToProps, fonctions qui  parcourir le  state  de l'application et les  actions  à dispatcher,
//et qui vont mettre à jour le  store

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    chairs: state.chairs,
    tables: state.tables };
};
//mapDispatchToProps, une fonctions qui  passe aux  props  d'un component React
// dispach qui prend en paramètre une action et exécute le reducer qui va,
// mettre à jour le store avec un nouvel état.

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => {
      dispatch(handleChange(event));
    } };

};


//React
const Form = props => {
  return (
    React.createElement("div", null,
      React.createElement("form", null,
        React.createElement("input", { type: "text", name: "firstName", value: props.firstName, onChange: () => props.handleChange(event), placeholder: "First Name" }),
        React.createElement("input", { type: "text", name: "lastName", value: props.lastName, onChange: () => props.handleChange(event), placeholder: "Last Name" }), React.createElement("br", null),
        React.createElement("input", { type: "checkbox", name: "chairs", checked: props.chairs, onChange: () => props.handleChange(event) }), "Chairs",
        React.createElement("input", { type: "checkbox", name: "tables", checked: props.tables, onChange: () => props.handleChange(event) }), "Tables",
        React.createElement("br", null),
        React.createElement("button", { type: "submit" }, "Submit"),
        React.createElement("h4", null, props.tables ? 'Tables' : " "),
      	React.createElement("h4", null, props.chairs ? 'Chairs' : " "),
      	React.createElement("p", null, props.lastName ? props.lastName : " "),
      	React.createElement("p", null, props.firstName ? props.firstName : " "),
	)));

};

const connect = ReactRedux.connect;
const Provider = ReactRedux.Provider;
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Form);

//Pour donner accès au store au différents composants d’une application React,
//Redux propose le composant Provider
//via un HOC
const AppWrapper = () => {
  return (
    React.createElement(Provider, { store: store },
    React.createElement(ConnectedComponent, null)));

};

ReactDOM.render(React.createElement(AppWrapper, null), document.querySelector('#root'));
