"use client";

import { MenuContext } from "@/context/menu.context";
import { useContext } from "react";

export const Menu = (): JSX.Element => {
  const { menu } = useContext(MenuContext);

  return (
    <ul>
      {menu && menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
    </ul>
  );
};