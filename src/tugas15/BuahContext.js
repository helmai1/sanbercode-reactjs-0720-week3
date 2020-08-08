
import React, { useState, createContext } from "react";

export const BuahContext = createContext();

export const BuahProvider = props => {
  const [dataBuah, setDataBuah] = useState(null);
  const [idBuah, setIdBuah] = useState(0);
  const [input, setInput] = useState({
		name: "",
		price: "",
        weight: "",
  })
  const [status, setStatus] = useState("create")
  
  return (
    <BuahContext.Provider value={[dataBuah, setDataBuah, idBuah, setIdBuah, input, setInput, status, setStatus]}>
      {props.children}
    </BuahContext.Provider>
  );
};