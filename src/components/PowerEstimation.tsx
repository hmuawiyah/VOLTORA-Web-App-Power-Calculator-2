import { Separator } from "@radix-ui/react-separator"
import { Card, CardContent, CardHeader } from "./ui/card"
import { LuCalendar } from "react-icons/lu"
import { MdElectricBolt } from "react-icons/md"
import { useItemsStore } from "@/store/store"


const PowerEstimation = () => {
    const { items, selectedPrice, setPrice, selectedPriceNumber } = useItemsStore()
    const getPrice = useItemsStore(state => state.selectedPriceNumber)


    const totalkWh = items.reduce((acc, item) => acc + (item.power * item.hrs * item.qty), 0) / 1000



    return (
        <Card className="gap-2" id="my-node">
            <CardHeader>
                Power Estimation
            </CardHeader>
            <CardContent>
                <div className="flex justify-between gradient-date p-3 h-30 rounded-xl">

                    <div className="flex flex-col justify-between w-1/2">

                        <span className="flex items-center gap-2 text-sm"> <LuCalendar />Per Day </span>

                        <div className="flex flex-col">
                            <span className="text-sm"> {Number(totalkWh.toFixed(2)).toLocaleString('id-ID')} kWh </span>

                            <span className="text-lg font-semibold"> Rp {Math.round((totalkWh) * (getPrice().kwh ?? 0)).toLocaleString("id-ID")} </span>
                        </div>
                    </div>

                    <div className="flex w-1/2">
                        <div className="w-px h-full bg-gray-300 dark:bg-gray-300/50"></div>

                        <div className="flex flex-col justify-between ml-3">

                            <span className="flex items-center gap-2 text-sm"> <LuCalendar /> Per Month </span>

                            <div className="flex flex-col">
                                <span className="text-sm"> {Number((totalkWh * 30).toFixed(2)).toLocaleString('id-ID')} kWh </span>

                                <span className="text-lg font-semibold"> Rp {Math.round((totalkWh * 30) * (getPrice().kwh ?? 0)).toLocaleString("id-ID")} </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-between gradient-electric h-23 p-3 mt-4 rounded-xl">
                    <span className="flex items-center gap-2 text-xs lg:text-sm">
                        <MdElectricBolt /> Electricity rates
                    </span>

                    <div className="flex justify-between text-lg font-semibold">
                        <span>
                            Rp {Math.round(getPrice().kwh)?.toLocaleString("id-ID") ?? 0} /kWh
                        </span>
                        <span>
                            {getPrice() && (<> PLN {getPrice().title} {getPrice().va} VA </>)}
                        </span>
                    </div>
                </div>


                <Card className="w-full rounded-xl bg-secondary p-0! gap-0 shadow-none mt-4">
                    {items.length > 0 && items.map((item, i) => (
                        <div key={i}>
                            <div className="flex items-center justify-between px-5 py-4 text-xs lg:text-sm">
                                <span className="font-medium w-[35%]">{item.title}</span>
                                <span className="text-muted-foreground text-right w-[30%]">{Number((item.power * item.hrs * item.qty / 1000).toFixed(2)).toLocaleString('id-ID')} kWh</span>
                                <span className="font-medium text-right w-[30%]">Rp {Math.round(item.power * item.hrs * item.qty / 1000 * getPrice().kwh).toLocaleString("id-ID")}</span>
                            </div>
                            {i !== items.length - 1 && <hr />}
                        </div>
                    ))}
                </Card>


                <div className="text-muted/70 text-xs lg:text-sm mt-8">
                    <p>Electricy Rate Price on is per day</p>
                    <p>This calculation is only an estimate, not a fixed price</p>
                </div>

            </CardContent>

        </Card>

    )
}

export default PowerEstimation
