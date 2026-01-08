import { create } from "zustand"

type Items = any

type Store = {
    items: Items[]
    addItem: (newItem: Items) => void
    removeItem: (index: number) => void
    resetItems: () => void
}

export const useItemsStore = create<Store>(
    set => ({
        items: [],

        addItem: (newItem) =>
            set(state => ({
                items: [...state.items, newItem]
            })),

        removeItem: (index) =>
            set(state => ({
                items: state.items.filter((_, i) => i !== index)
            })),

        resetItems: () =>
            set(state => ({
                items: []
            }))
    })
)