import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { dataPriceCategory } from "./data/dataPriceCategory"
import { useItemsStore } from "@/store/store"
const RadioPriceCategory = () => {

  const id = useId()
  const { selectedPrice, setPrice, selectedPriceNumber } = useItemsStore()

  return (
    <RadioGroup className='flex w-full' defaultValue='1' onValueChange={(value) => setPrice(value)}>

      {dataPriceCategory.map((val, i) => (
        <div key={i} className='
        bg-secondary 
        border
        hover:brightness-95
        
        has-data-[state=checked]:bg-linear-to-t 
        has-data-[state=checked]:from-[#449DFF]
        has-data-[state=checked]:to-[#2F83DF]
        has-data-[state=checked]:text-white
        has-data-[state=checked]:transition-all
        
        has-focus-visible:ring-ring/50 
        has-focus-visible:ring-[3px]
        relative w-full h-23 md:h-30 rounded-xl p-2 md:p-3 shadow-xs outline-none 
        '>
          <RadioGroupItem
            value={String(val.title)}
            id={val.title}
            className='peer sr-only'
            aria-label='plan-radio-basic'
            aria-describedby={`${id}-1-description`}
          />

          <Label htmlFor={val.title} className='
          flex flex-col justify-between items-start after:absolute after:inset-0 h-full cursor-pointer
          
          [&_p]:text-muted-foreground
        peer-data-[state=checked]:text-white
        peer-data-[state=checked]:[&_p]:text-white
          '>
            <div className='flex w-full items-center justify-between text-xl font-medium'>
              <span className="text-base lg:text-lg xl:text-2xl">{val.title}</span>
            </div>
            <div className="">
              <p className='text-xs xl:text-sm'>
                {(val.va).toLocaleString('id-ID')} VA
              </p>
              <p className='text-xs xl:text-sm'>
                Rp {(val.kwh).toLocaleString('id-ID')}/kWh
              </p>
            </div>
          </Label>
        </div>
      )
      )}
    </RadioGroup>
  )
}

const PriceCategory = () => {
  
  const { selectedPrice, setPrice, selectedPriceNumber } = useItemsStore()
  const getPrice = useItemsStore(state => state.selectedPriceNumber)

  return (
    <div>
      <Card>
        <CardHeader>
          Price Category
        </CardHeader>
        <CardContent className="flex justify-center w-full">
          <RadioPriceCategory />
        </CardContent>
          {/* <Button onClick={() => alert(String(selectedPrice))}>selectedPrice</Button>
          <Button onClick={() => alert(getPrice().kwh)}>getPrice()</Button> */}
      </Card>
    </div>
  )
}

export default PriceCategory
