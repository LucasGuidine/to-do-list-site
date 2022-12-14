import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";

type Props = {
  item: Item;
  updateList: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, updateList }: Props) => {
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
    </C.Container>
  );
};
