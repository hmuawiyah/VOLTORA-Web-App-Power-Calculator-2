import { AddDevice } from "@/components/AddDevice";
import ItemSelected, { NoDataItemSelected } from "@/components/ItemSelected";
import PowerEstimation from "@/components/PowerEstimation";
import PriceCategory from "@/components/PriceCategory";
import Setting from "@/components/Setting";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuRotateCcw } from "react-icons/lu";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-between mx-5 md:mx-20 xl:mx-40 mt-13 gap-5">

      <div className="flex flex-col w-full lg:w-[49%] gap-5">
        <PriceCategory />

        <div className="flex h-18 gap-3">
          <div className="w-fit h-full aspect-square">
            <Button variant={'secondary'} className="flex bg-white flex-col gap-2 lg:gap-1 w-full h-full rounded-xl shadow-md">
              <LuRotateCcw className="size-4 lg:size-5" />
              <span className="text-xs lg:text-base"> Reset </span>
            </Button>
          </div>

          <div className="w-full h-full">
            <AddDevice />
          </div>
        </div>

        <ItemSelected />
        <NoDataItemSelected />
      </div>

      <div className="flex flex-col w-full lg:w-[49%] gap-5">
        <PowerEstimation />
        <Setting />
      </div>

    </div>
  );
}
