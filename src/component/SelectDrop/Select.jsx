import React, { useState } from "react";
import "../SelectDrop/Select.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";


const Select = ({ data, placeholder ,icon}) => {


  const [isOpen, setisOpen] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [listData, setListData] = useState(data)
  const [listData2, setListData2] = useState(data)

  // const listOptions = [
  //   "All Categories",
  //   "Milks and Dairies",
  //   "Wines and Drinks",
  //   "Clothing & Beauty",
  //   "Fresh Seafood",
  //   "Pet Foods & Toy",
  //   "Fast foot",
  //   "Baking Material",
  //   "Vegetable",
  //   "Fresh Fruit",
  //   "Break and Juice",
  // ];
  
  
  const handleOpenClick = () => {
    setisOpen(!isOpen);
  };


  const handleCloseClick = (index, name) => {
    setselectedIndex(index);
    setisOpen(!isOpen);
    setSelectedItem(name);
  };

  const filterList =(e) =>{
      const keyboard = e.target.value.toLowerCase();
      
      const list = listData2.filter((item) => {
        return item.toLowerCase().includes(keyboard);
      })
      // to remove duplicate
       const list2 = list.filter((item, index) => list.indexOf(item) === index);


      setListData(list2);
  }



  return (
    <ClickAwayListener onClickAway={() => setisOpen(false)}>
      <div className="selectDrop min-w-[145px] max-w-[146px] py-1 text-sm font-medium cursor-pointer relative flex">
        {icon}
        <span onClick={handleOpenClick} className="openSelect block px-10px whitespace-nowrap overflow-hidden w-[100px]">
          {selectedItem}
          <ExpandMoreIcon className="arrow absolute right-1" />
        </span>
        {isOpen === true && (
          <div className="selectDrop w-[180px] h-auto absolute top-[100%] -left-2 z-[100] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-[#fff] p-2 ">
            <div className="searchField">
              <input
                type="text"
                className="focus:bg-blue-400 w-full h-[30px]  outline-none border-2 border-[#2dbd7a7e] bg-transparent p-2 font-normal"
                placeholder="Search here"
                onChange={filterList}
              />
            </div>

            <ul className="searchResults">
            <li
                    key={0}
                    onClick={() => handleCloseClick(0, placeholder)}
                    className={`${selectedIndex === 0 ? "active" : ""} `}
                  >
                    {placeholder}
                  </li>
              {listData.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleCloseClick(index+1, item)}
                    className={`${selectedIndex === index + 1 ? "active" : ""} `}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
