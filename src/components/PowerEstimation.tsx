import { Separator } from "@radix-ui/react-separator"
import { Card, CardContent, CardHeader } from "./ui/card"
import { LuCalendar } from "react-icons/lu"
import { MdElectricBolt } from "react-icons/md"

const PowerEstimation = () => {


    const data = [
        { name: "Playstation 5 Slim", kwh: "351 kWh", price: "Rp 35.401" },
        { name: "Television 32”", kwh: "4310 kWh", price: "Rp 38.892" },
        { name: "Air Conditioner", kwh: "132 kWh", price: "Rp 250.309" },
    ]

    return (
        <Card className="gap-2">
            <CardHeader>
                Power Estimation
            </CardHeader>
            <CardContent>
                <div className="flex justify-between border bg-linear-to-t from-[#fff7e620] to-[#fff7e6] rounded-xl p-3 h-30">

                    <div className="flex flex-col justify-between w-1/2">

                        <span className="flex items-center gap-2 text-sm"> <LuCalendar />Per Day </span>

                        <div className="flex flex-col">
                            <span className="text-sm"> 231 kWh </span>

                            <span className="text-lg font-semibold"> Rp 23.401 </span>
                        </div>
                    </div>

                    <div className="flex w-1/2">
                        <div className="w-px h-full bg-gray-300"></div>

                        <div className="flex flex-col justify-between ml-3">

                            <span className="flex items-center gap-2 text-sm"> <LuCalendar/> Per Month </span>

                            <div className="flex flex-col">
                                <span className="text-sm"> 231 kWh </span>

                                <span className="text-lg font-semibold"> Rp 23.401 </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-between border bg-linear-to-t from-[#d3e8ff20] to-[#d3e8ff] h-23 p-3 mt-4 rounded-xl">
                    <span className="flex items-center gap-2 text-xs lg:text-sm">
                        <MdElectricBolt /> Electricity rates
                    </span>

                    <div className="flex justify-between text-lg font-semibold">
                        <span>
                            Rp1.699/kWh
                        </span>
                        <span>
                            PLN R-2 3.500 VA
                        </span>
                    </div>
                </div>


                <Card className="w-full rounded-xl bg-secondary p-0! gap-0 shadow-none mt-4">
                    {data.map((item, i) => (
                        <div key={i}>
                            <div className="flex items-center justify-between px-5 py-4 text-xs lg:text-sm">
                                <span className="font-medium w-[35%]">{item.name}</span>
                                <span className="text-muted-foreground text-right w-[30%]">{item.kwh}</span>
                                <span className="font-medium text-right w-[30%]">{item.price}</span>
                            </div>
                            {i !== data.length - 1 && <hr />}
                        </div>
                    ))}
                </Card>


                <div className="text-muted/70 text-xs lg:text-sm mt-8">
                    {/* <p>Electricity rates: Rp1.699/kWh (PLN R-2 3.500 VA)</p> */}
                    <p>This calculation is only an estimate, not a fixed price</p>
                </div>

            </CardContent>

        </Card>

    )
}

export default PowerEstimation
