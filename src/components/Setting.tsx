
import { Card, CardContent } from "./ui/card"
import { Switch } from '@/components/ui/switch'
import { LuSun, LuMoon, LuShare2, LuDownload } from "react-icons/lu"
import { Button } from "./ui/button"


const Setting = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <div className='flex items-center justify-between gap-3'>
                        <div className="flex items-center gap-2">
                            <LuSun className="size-5" />
                            <Switch
                                className='
                                focus-visible:border-ring-sky-600 dark:focus-visible:border-ring-sky-400 focus-visible:ring-sky-600/20 data-[state=checked]:bg-[#2f83df] dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:bg-sky-400
                                '
                                aria-label='Success Switch'
                                defaultChecked
                            />
                            <LuMoon className="size-5" strokeWidth={1.7} />
                        </div>

                        <div className="flex gap-2">
                            <Button variant={'primary'} size={'sm'}>
                                <LuShare2 /> Share
                            </Button>
                            <Button variant={'primary'} size={'sm'}>
                                <LuDownload /> Download
                            </Button>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Setting
