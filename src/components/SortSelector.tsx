import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By:
      </MenuButton>
      <MenuList>
        <MenuItem>a</MenuItem>
        <MenuItem>b</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
