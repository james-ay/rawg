import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { ParentPlatform } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: ParentPlatform | null) => void;
  selectedPlatform: ParentPlatform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error, isLoading } = usePlatform();

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name ? selectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() =>
                platform.name === selectedPlatform?.name
                  ? onSelectPlatform(null)
                  : onSelectPlatform(platform)
              }
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
