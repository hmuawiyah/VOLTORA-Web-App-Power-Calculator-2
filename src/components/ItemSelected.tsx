'use client'

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { LuMonitorOff, LuGamepad2, LuMinus, LuPlus, LuTrash2 } from "react-icons/lu"
import { Input } from "./ui/input"

const InputPlusMinus = () => {
  return (
    <div className="flex justify-between items-center border rounded-lg bg-secondary w-1/2">

      <div className="flex justify-between items-center w-fit">
        <Button variant={'ghost'} size={'sm'}>
          <LuPlus className="size-3 font-black" strokeWidth={3} />
        </Button>

        <input type="number" className="h-9 w-full text-center" />

        <Button variant={'ghost'} size={'sm'}>
          <LuMinus className="size-3 font-black" strokeWidth={3} />
        </Button>
      </div>

      <span className="text-xs lg:text-sm font-semibold w-auto mx-3 lg:mx-6">Qty</span>

    </div>
  )
}

export const NoDataItemSelected = () => {
  return (
    <>
      <Card>
        <CardContent>

          <div className="flex flex-col justify-center items-center w-full">
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
  return (
    <div>
      <Card className="gap-0">
        <CardHeader className="flex justify-between items-center">
          <span>
            Playstation 5 Slim
          </span>

          <Button className="flex items-center justify-center bg-red-200 hover:bg-red-400 w-8 h-auto aspect-square rounded-full">
            <LuTrash2 className="text-red-800 size-4" />
          </Button>

        </CardHeader>
        <CardContent className="flex flex-col justify-between h-35">
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="default" className="text-xs lg:text-sm text-primary bg-[#FFFAC6]"><LuGamepad2 className="size-4!" /> Gaming</Badge>
            <span className="text-muted text-xs lg:text-base">250 Watt</span>
          </div>

          <div className="">
            <span className="flex justify-end text-muted text-xs lg:text-base mb-2">Rp 147.359/mth</span>
            <div className="flex gap-3">

              <InputPlusMinus />
              <InputPlusMinus />

            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default ItemSelected



