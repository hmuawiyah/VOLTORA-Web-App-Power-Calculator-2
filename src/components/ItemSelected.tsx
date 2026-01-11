"use client"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { useItemsStore } from "@/store/store"

import { LuMonitorOff, LuGamepad2, LuMinus, LuPlus, LuTrash2 } from "react-icons/lu"
import { Input } from "./ui/input"

import { Item, categories, categoryConfig, grouped } from "@/components/data/dataCategory"

const InputPlusMinus = ({ inputtype, index, inputvalue }: { inputtype: string, index: number, inputvalue: number }) => {

  const { addQty, decreaseQty, setQty, addHrs, decreaseHrs, setHrs } = useItemsStore()

  return (
    <div className="flex justify-between items-center border rounded-lg bg-secondary w-1/2">

      <div className="flex justify-between items-center w-fit" >
        <Button variant={"ghost"} size={"sm"}
          onClick={() => {
            inputtype == "qty" && decreaseQty(index)
            inputtype == "hrs" && decreaseHrs(index)
          }}
        >
          <LuMinus className="size-3 font-black" strokeWidth={3} />
        </Button>

        <input type="number" value={inputtype === "qty" ? inputvalue : inputvalue} onChange={(e) => {
          if (inputtype === "qty") setQty(Number(e.target.value), index)
          if (inputtype === "hrs") setHrs(Number(e.target.value), index)
        }} className="h-9 w-full text-center" />

        <Button variant={"ghost"} size={"sm"}
          onClick={() => {
            if (inputtype === "qty") addQty(index)
            if (inputtype === "hrs") addHrs(index)
          }}
        >
          <LuPlus className="size-3 font-black" strokeWidth={3} />
        </Button>
      </div>

      <span className="text-xs lg:text-sm font-semibold w-auto mx-4 hidden lg:block">
        {inputtype === "qty" ? "quantity" : "hours/day"}
      </span>
      <span className="text-xs lg:text-sm font-semibold w-auto mx-3 block lg:hidden">
        {inputtype === "qty" ? "qty" : "hrs"}
      </span>

    </div>
  )
}

export const NoDataItemSelected = () => {
  return (
    <>
      <Card>
        <CardContent>

          <div className="flex flex-col justify-center items-center w-full py-4">
            <div className="flex justify-center items-center w-18 h-auto aspect-square rounded-full bg-secondary mb-5">
              <LuMonitorOff className="size-8" strokeWidth={1.3} />
            </div>
            <span className="text-xl font-semibold">There’s no device added</span>
            <span className="text-muted">lets add a new device</span>
          </div>

        </CardContent>
      </Card>
    </>
  )
}

const ItemSelected = () => {

  const { items, addItem, removeItem } = useItemsStore()
  const getPrice = useItemsStore(state => state.selectedPriceNumber)

  return (
    <div className="flex flex-col gap-5">
      {items.map((item, i) => (

        <Card className="gap-0" key={i}>
          <CardHeader className="flex justify-between items-center">
            <span>
              {item.title}
            </span>

            <Button className="flex items-center justify-center bg-red-200 hover:bg-red-400 w-8 h-auto aspect-square rounded-full"
            onClick={() => removeItem(i)}>
              <LuTrash2 className="text-red-800 size-4" />
            </Button>

          </CardHeader>
          <CardContent className="flex flex-col justify-between h-35">
            <div className="flex items-center gap-2 mt-2">

              <Badge variant={item.category} className="">{categoryConfig[item.category].icon} {categoryConfig[item.category].label}</Badge>

              <span className="text-muted text-xs lg:text-base">{item.power} W</span>
            </div>

            <div className="">
              <span className="flex justify-end text-muted text-xs lg:text-base mb-2">Rp {(item.power * item.hrs * item.qty / 1000 * 30 * getPrice().kwh).toLocaleString("id-ID")} /mth</span>
              <div className="flex gap-3">

                <InputPlusMinus inputtype="qty" index={i} inputvalue={item.qty ?? ""} />
                <InputPlusMinus inputtype="hrs" index={i} inputvalue={item.hrs ?? ""} />

              </div>
            </div>

          </CardContent>
        </Card>

      ))}
    </div>
  )
}

export default ItemSelected



