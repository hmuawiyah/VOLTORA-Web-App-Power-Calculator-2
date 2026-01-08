"use client"

import { AddDevice } from "@/components/AddDevice"
import ItemSelected, { NoDataItemSelected } from "@/components/ItemSelected"
import PowerEstimation from "@/components/PowerEstimation"
import PriceCategory from "@/components/PriceCategory"
import Setting from "@/components/Setting"
import { Button } from "@/components/ui/button"

import { useItemsStore } from "@/store/store"
import Image from "next/image"
import { LuRotateCcw } from "react-icons/lu"
// import itemsData from "@/components/data/itemsData.json"

export default function Home() {

  const { items, addItem, removeItem, resetItems } = useItemsStore()

  return (
    <div className="flex flex-wrap justify-between lg:min-h-[150vh] mx-5 md:mx-20 xl:mx-40 mt-18 gap-5 md:gap-0">

      <div className="flex flex-col w-full lg:w-[49%] gap-5">
        <PriceCategory />

        <div className="flex h-18 gap-3">
          <div className="w-fit h-full aspect-square">
            <Button variant={'secondary'} className="flex bg-white flex-col gap-2 lg:gap-1 w-full h-full rounded-xl shadow-md"
              onClick={() => resetItems()}>
              <LuRotateCcw className="size-4 lg:size-5" />
              <span className="text-xs lg:text-base"> Reset </span>
            </Button>
          </div>

          <div className="w-full h-full">
            <AddDevice />
          </div>
        </div>
        {items.length == 0
          ? <NoDataItemSelected />
          : <ItemSelected />
        }
      </div>

      <div className="w-full lg:w-[49%] ">
        <div className="static md:sticky flex flex-col top-18 gap-5">
          <PowerEstimation />
          {/* <Setting /> */}
        </div>
      </div>

    </div>
  )
}
