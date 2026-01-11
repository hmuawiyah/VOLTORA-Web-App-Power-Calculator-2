"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { useItemsStore } from "@/store/store"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Card, CardContent } from "./ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

import { LuSun, LuMoon, LuShare2, LuDownload } from "react-icons/lu"
import { FaGithub } from "react-icons/fa6"
import * as htmlToImage from "html-to-image"
import { encodeShareState } from "@/lib/shareCode"


const Setting = () => {
    const { items, selectedPrice } = useItemsStore()

    const handleShare = async () => {
        const state = {
            items,
            selectedPrice,
        }

        const code = encodeShareState(state)
        const url = `${location.origin}?code=${code}`

        await navigator.clipboard.writeText(url)
        alert("Link copied 🔥")
    }


    const handleDownload = async () => {
        const node = document.getElementById("my-node")
        if (!node) return

        const dataUrl = await htmlToImage.toJpeg(node, { quality: 1 })

        const link = document.createElement("a")
        link.download = "power-estimation.jpeg"
        link.href = dataUrl
        link.click()
    }

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
        <>
            <div className="flex items-center justify-between gap-3">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href={"https://github.com/hmuawiyah"} target={"_blank"}>
                                <Button variant={"secondary"} size={"sm"}>
                                    <FaGithub />  <span className="hidden sm:inline">Github</span>
                                </Button>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="flex gap-1">
                                <span className="hidden sm:inline">Theme</span>
                                <LuSun
                                    className={`size-4.5 md:size-5 ${theme === "light" ? "text-yellow-500" : "text-muted-foreground"
                                        }`}
                                />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    <div className="flex items-center gap-2">
                                        <LuSun
                                            className={`size-4.5 md:size-5 ${theme === "light" ? "text-yellow-500" : "text-muted-foreground"
                                                }`}
                                        />

                                        <Switch
                                            checked={theme === "dark"}
                                            onCheckedChange={(v) => setTheme(v ? "dark" : "light")}
                                            className="
                                            data-[state=unchecked]:bg-gray-300
                                            data-[state=checked]:bg-[#3589E5]
                                            "
                                            aria-label="Theme Switch"
                                        />

                                        <LuMoon
                                            className={`size-4.5 md:size-5 ${theme === "dark" ? "text-[#3589E5]" : "text-muted-foreground"
                                                }`}
                                            strokeWidth={1.7}
                                        />

                                    </div>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant={"primary"} size={"sm"} onClick={handleShare}>
                                <LuShare2 />  <span className="hidden sm:inline">Share</span>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant={"primary"} size={"sm"} onClick={handleDownload}>
                                <LuDownload />  <span className="hidden sm:inline">Download</span>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {/* 
                <div className="flex gap-2">



                </div> */}

            </div >
        </>
    )
}

export default Setting
