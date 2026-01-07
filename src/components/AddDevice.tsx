import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LuGamepad2, LuPlus } from "react-icons/lu";
import { MdPhoneIphone } from "react-icons/md";
import { Badge } from "./ui/badge";

export function AddDevice() {
  type Category = "gaming" | "gadget";

  type Item = {
    name: string;
    power: string;
    category: Category;
  };

  const categories: Category[] = ["gaming", "gadget"];

  const categoryConfig: Record<
    Category,
    { label: string; icon: React.ReactNode }
  > = {
    gaming: {
      label: "Gaming",
      icon: <LuGamepad2 className="size-4" />,
    },
    gadget: {
      label: "Gadget",
      icon: <MdPhoneIphone className="size-4" />,
    },
  };

  const data: Item[] = [
    { name: "PS5 Slim", power: "1200W", category: "gaming" },
    { name: "Xbox Series X", power: "1000W", category: "gaming" },
    { name: "iPhone 15", power: "20W", category: "gadget" },
  ];

//   const grouped = data.reduce<Record<Category, Item[]>>(
//     (acc, item) => {
//       acc[item.category].push(item);
//       return acc;
//     },
//     {
//       gaming: [],
//       gadget: [],
//     }
//   );

const grouped = data.reduce<Record<Category, Item[]>>(
    (acc, item) => {
        acc[item.category].push(item)
        return acc
    },{
        gaming: [],
        gadget: []
    }
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'primary'} className="flex justify-between w-full h-full px-6! LG rounded-xl shadow-md">
          <span className="text-base lg:text-lg">Add Device</span>
          <LuPlus className="size-5" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Choose Device</DialogTitle>

        <Input placeholder="search device..." />

        {categories.map((category) => (
          <div key={category} className="flex flex-col gap-4">
            <Badge className="flex items-center gap-2">
              {categoryConfig[category].icon}
              {categoryConfig[category].label}
            </Badge>

            {grouped[category].map((item, i) => (
              <Button key={i} variant="secondary" className="justify-between">
                <span>{item.name}</span>
                <span>{item.power}</span>
              </Button>
            ))}
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
