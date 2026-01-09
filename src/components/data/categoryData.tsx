import itemsData from "@/components/data/itemsData.json"
import { LuGamepad2, LuMonitor } from "react-icons/lu"
import { MdPhoneIphone } from "react-icons/md"

type Category = "home_appliance" | "work_device" | "gaming"

export type Item = {
    title: string
    icon: string
    power: number
    category: Category
    qty: number
    hrs: number
}

export const typedItemsData: Item[] = itemsData.map((item) => ({
  title: item.title,
  icon: item.icon,
  power: item.power,
  category: item.category as Category,
}))


export const categories: Category[] = ["home_appliance", "work_device", "gaming"]

export const categoryConfig: Record<
    Category,
    {
        label: string
        icon: React.ReactNode
    }
> = {
    home_appliance: {
        label: "Home Appliance",
        icon: <MdPhoneIphone className="size-4" />,
    },
    work_device: {
        label: "Work Device",
        icon: <LuMonitor className="size-4" />,
    },
    gaming: {
        label: "Gaming",
        icon: <LuGamepad2 className="size-4" />,
    },
}

export const grouped = typedItemsData.reduce<Record<Category, Item[]>>(
    (acc, item) => {
        acc[item.category].push(item)
        return acc
    }, {
    home_appliance: [],
    work_device: [],
    gaming: []
    }
)