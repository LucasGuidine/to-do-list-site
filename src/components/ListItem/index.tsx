import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { BiTrashAlt as TrashIcon } from "react-icons/bi";

type Props = {
  item: Item;
  updateList: (id: number, done: boolean) => void;
  deleteItem: (id: number) => void;
};

export const ListItem = ({ item, updateList, deleteItem }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type={"checkbox"}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          updateList(item.id, e.target.checked);
        }}
      />
      <label>{item.name}</label>
      <C.IconConatiner
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        <TrashIcon color="#ff3834" size={20} />
      </C.IconConatiner>
    </C.Container>
  );
};
