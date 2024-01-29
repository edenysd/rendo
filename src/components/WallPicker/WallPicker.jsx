import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const WallPicker = ({
  selectedWall,
  handleChangeSelectedWall,
  wallsList,
  ...props
}) => {
  return (
    <div className={props.className}>
      <Select.Root
        onValueChange={(newSelectedWall) => {
          handleChangeSelectedWall(newSelectedWall);
        }}
        value={selectedWall?.name || ""}
      >
        <Select.Trigger className="mr-3 inline-flex h-[35px] w-full items-center justify-between gap-[5px] rounded bg-white px-[15px] text-[15px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 sm:w-[200px]">
          <Select.Value placeholder="Select a wall…" />
          <Select.Icon className="text-violet11">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="z-20 overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-between bg-white text-violet11">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                {wallsList.map((wall) => (
                  <SelectItem value={wall.name} key={wall.name}>
                    {wall.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <button
        className="inline-flex h-[35px] items-center justify-center rounded bg-white px-[15px] text-[15px] font-medium leading-[35px] text-red-500 outline-1 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        onClick={() => {
          handleChangeSelectedWall(null);
        }}
      >
        Clear Selection
      </button>
    </div>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={
          "relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[15px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none"
        }
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default WallPicker;
