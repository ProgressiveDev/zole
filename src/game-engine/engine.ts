import { playingCards } from './cards'
import * as config from './config'
import _ from 'lodash'

export interface PlayingCard {
    symbol: string
    suit: string
}

export class Deck {
    allCards
    undealtCards: PlayingCard[]
    constructor() {
        this.allCards = playingCards
        this.undealtCards = this.getAllCardsList()
        this.getAllCardsList()
    }
    shuffle() {}

    getAllCardsList() {
        const cards: PlayingCard[] = []
        this.allCards.forEach((cardSuit) => {
            cards.push(
                ...cardSuit.symbols.map((symbol) => {
                    return { symbol, suit: cardSuit.suit }
                })
            )
        })
        return cards
    }
}

class Player {}

class Table {}
