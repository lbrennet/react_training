import React from "react";
import { atom, selector, useRecoilValue, useRecoilState } from "recoil";
//https://medium.com/@FabriceTavilla/recoil-le-futur-de-la-gestion-d%C3%A9tat-pour-les-applications-en-reactjs-32ce3eaaf1a7
//atoms sont des unités d'État
//Atom n'est rien d'autre qu'une fonction qui nous permet de stocker l'état.
//Il faut une clé et une valeur par défaut.
const itemsState = atom({
  key: "itemsState",
  default: [
    {
      description: "Merci de renseigner cette liste",
      done: false
    }
  ]
});
//un selector qui récupérera la valeur de l’état courant de
//l'atom
const unfinishedItemsState = selector({
  key: "unfinishedItemsState",
  get: ({ get }) => {
    const items = get(itemsState);

    return items.filter(item => item.done === false);
  }
});
//un selector qui récupérera la valeur de l’état courant de
//l'atom
const unfinishedItemsCountState = selector({
  key: "unfinishedItemsCountState",
  get: ({ get }) => {
    const items = get(unfinishedItemsState);

    return items.length;
  }
});

const List = () => {
  // un hook nommé useRecoilState pour accéder à la liste et lui appliquer des modifications
  // ou simplement le hook useRecoilValue pour extraire la liste uniquement.
  const unfinishedItemsCount = useRecoilValue(unfinishedItemsCountState);
  //useRecoilState prend un atom en entrée et retourne un tableau avec l'état
  //et la fonction setter pour modifier l'état.
  const [items, setItems] = useRecoilState(itemsState);
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setItems(
      items.concat({
        description: value,
        done: false
      })
    );

    setValue("");
  };

  return (
    <>
      You have {unfinishedItemsCount} unfinished tasks!!
      {items.map((item, i) => (
        <div key={i}>{item.description}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button disabled={!value}>Add</button>
      </form>
    </>
  );
};

export default List;
