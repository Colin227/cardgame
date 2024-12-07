export interface Card {
    id: string,
    title: string,
    displayed: boolean, // Is card face up? 
}

// Basic placeholder card list
export const cards: Card[] = [
    {id: '0', title: '0', displayed: true},
    {id: '1', title: '1', displayed: true},
    {id: '2', title: '2', displayed: true},
    {id: '3', title: '3', displayed: true},
    {id: '4', title: '4', displayed: true},
    {id: '5', title: '5', displayed: true},
]