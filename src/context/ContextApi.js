import { createContext, useState } from "react";
import data from "../Data";

export const ContextApi = createContext();

export default function AppContextProvider({ children }) {
  const [Page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(data.length);
  const [isopen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const value = {
    Page,
    setPage,
    totalPages,
    pageHandler,
    isopen,
    setIsOpen,
    menu,
    setMenu,
  };

  function pageHandler(p) {
    setPage(p);
  }

  return <ContextApi.Provider value={value}>{children}</ContextApi.Provider>;
}
