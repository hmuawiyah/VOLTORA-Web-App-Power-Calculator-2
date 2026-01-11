import { create } from "zustand"
import type { Item, BaseItem } from "@/components/data/dataCategory"
import { dataPriceCategory } from "@/components/data/dataPriceCategory"

type Store = {
    items: Item[]
    addItem: (newItem: BaseItem) => void
    removeItem: (index: number) => void
    resetItems: () => void
    addQty: (index: number) => void
    decreaseQty: (index: number) => void
    setQty: (value: number, index: number) => void
    addHrs: (index: number) => void
    decreaseHrs: (index: number) => void
    setHrs: (value: number, index: number) => void

    selectedPrice: string
    selectedPriceNumber: () => any
    setPrice: (value: string) => void

    search: string
    setSearch: (value: string) => void

}

export const useItemsStore = create<Store>(
    (set, get) => ({
        items: [],

        addItem: (newItem) =>
            set(state => ({
                items: [...state.items, { ...newItem, qty: 1, hrs: 1 }]
            })),

        removeItem: (index) =>
            set(state => ({
                items: state.items.filter((_, i) => i !== index)
            })),

        resetItems: () =>
            set(state => ({
                items: []
            })),

        addQty: (index) =>
            set(state => ({
                items: state.items.map((item, i) =>
                    i === index
                        ? { ...item, qty: item.qty + 1 }
                        : item
                ),
            })),

        decreaseQty: (index) =>
            set(state => ({
                items: state.items
                    .map((item, i) => (
                        i === index
                            ? { ...item, qty: item.qty - 1 }
                            : item
                    ))
                    .filter(item => item.qty > 0)
            })),

        setQty: (value, index) =>
            set(state => ({
                items: state.items.map((item, i) => (
                    i === index
                        ? { ...item, qty: value }
                        : item
                ))
            })),

        addHrs: (index) =>
            set(state => ({
                items: state.items
                    .map((item, i) => (
                        i === index
                            ? { ...item, hrs: (item.hrs ?? 0) + 1 }
                            : item
                    ))
            })),

        decreaseHrs: (index) =>
            set(state => ({
                items: state.items
                    .map((item, i) => (
                        i === index
                            ? { ...item, hrs: item.hrs - 1 }
                            : item
                    ))
                    .filter(item => item.hrs > 0)
            })),

        setHrs: (value, index) =>
            set(state => ({
                items: state.items.map((item, i) => (
                    i === index
                        ? { ...item, hrs: value }
                        : item
                ))
            })),

        selectedPrice: "",

        selectedPriceNumber: () => {
            const { selectedPrice } = get()
            return (
                dataPriceCategory.find(v => v.title === selectedPrice) ?? ""
            )
        },

        setPrice: (value) =>
            set(state => ({
                selectedPrice: value
            })),

        search: "",
        
        setSearch: (value) =>
            set(() => ({
                search: value
            }))

    })
)