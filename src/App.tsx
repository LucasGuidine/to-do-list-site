import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    try {
      var storedArray = localStorage.getItem("@List");
      var ourArray = JSON.parse(storedArray as string);
      if (ourArray) {
        setList(ourArray);
      }
    } catch (error) { }
  }, []);

  const UpdateList = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };

  const deleteItem = (id: number) => {

    const newListFilter = [...list].filter((item) => item.id !== id);

    setList(newListFilter);

    localStorage.setItem("@List", JSON.stringify(newListFilter));
  };

  const handleAddTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: Math.floor(Math.random() * 10000),
      name: taskName,
      done: false,
    });
    localStorage.setItem("@List", JSON.stringify(newList));
    var storedArray = localStorage.getItem("@List");
    var ourArray = JSON.parse(storedArray as string);
    setList(ourArray);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem
            deleteItem={deleteItem}
            updateList={UpdateList}
            item={item}
            key={index}
          />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
