"use client"

import { Card, CardContent } from "./ui/card"
import { Switch } from '@/components/ui/switch'
import { LuSun, LuMoon, LuShare2, LuDownload } from "react-icons/lu"
import { Button } from "./ui/button"

import * as htmlToImage from "html-to-image"
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image"

const Setting = () => {

    const handleDownload = () => {
        htmlToImage
            .toJpeg(document.getElementById('my-node'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    return (
        <>
            <div className='flex items-center justify-between gap-3'>
                <div className="flex items-center gap-2">
                    <LuSun className="size-4.5 md:size-5" />
                    <Switch
                        className='
                                focus-visible:border-ring-sky-600 dark:focus-visible:border-ring-sky-400 focus-visible:ring-sky-600/20 data-[state=checked]:bg-[#2f83df] dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:bg-sky-400
                                '
                        aria-label='Success Switch'
                        defaultChecked
                    />
                    <LuMoon className="size-4.5 md:size-5" strokeWidth={1.7} />
                </div>

                <div className="flex gap-2">
                    <Button variant={'primary'} size={'sm'}>
                        <LuShare2 />  <span className="hidden sm:inline">Share</span>
                    </Button>
                    <Button variant={'primary'} size={'sm'} onClick={handleDownload}>
                        <LuDownload />  <span className="hidden sm:inline">Download</span>
                    </Button>
                </div>

            </div>
        </>
    )
}

export default Setting
