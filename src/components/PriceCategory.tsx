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

const RadioPriceCategory = () => {

  const id = useId()

  const dataPriceCategory = [
    {
      title: "R-1",
      va: "900 VA",
      kwh: "Rp1.352/kWh"
    },
    {
      title: "R-2",
      va: "3.500 VA",
      kwh: "Rp1.699/kWh"
    },
    {
      title: "R-3",
      va: "6.600 VA",
      kwh: "Rp1.699/kWh"
    },
  ]

  return (
    <RadioGroup className='flex w-full' defaultValue='1'>

      {dataPriceCategory.map((val, i) => (
        <div key={i} className='
        bg-secondary 
        border
        hover:brightness-95F
        
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
            value={val.va}
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
            {/* peer-data[state=checked]:text-blue-300  */}
            <div className='flex w-full items-center justify-between text-xl font-medium'>
              <span className="text-base lg:text-lg xl:text-2xl">{val.title}</span>
            </div>
            <div className="">
              <p className='text-xs xl:text-sm'>
                {val.va}
              </p>
              <p className='text-xs xl:text-sm'>
                {val.kwh}
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
  return (
    <div>
      <Card>
        <CardHeader>
          Price Category
        </CardHeader>
        <CardContent className="flex justify-center w-full">
          <RadioPriceCategory />
        </CardContent>
      </Card>
    </div>
  )
}

export default PriceCategory
