'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { LuGamepad2, LuPlus, LuMonitor  } from "react-icons/lu"
import { MdPhoneIphone } from "react-icons/md"
import { Badge } from "./ui/badge"

import { useItemsStore } from "@/store/store"

import { categories, categoryConfig, grouped } from "@/components/data/categoryData"

export function AddDevice() {
  
  const { items, addItem, removeItem } = useItemsStore()

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
        <Button onClick={()=>alert(JSON.stringify(items))}>items</Button>

        <Input placeholder="search device..." />

        <hr />

        <div className="overflow-y-auto h-[250] md:h-[400]">

          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-4 mb-4">
              <Badge variant={category} className="flex items-center gap-2">
                {categoryConfig[category].icon}
                {categoryConfig[category].label}
              </Badge>


              {grouped[category].map((item, i) => (
                <Button key={i} variant="secondary" className="justify-between" onClick={() => addItem(item)}>
                  <span>{item.title}</span>
                  <span>{item.power}</span>
                </Button>
              ))}
            </div>
          ))}

        </div>

      </DialogContent>
    </Dialog>
  )
}
