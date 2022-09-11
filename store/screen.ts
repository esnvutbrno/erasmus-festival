import _ from 'lodash'

import {scrollIntoView} from "seamless-scroll-polyfill";


export class Screen {
    public ref: HTMLElement = null

    constructor(
        public readonly name: string,
        public readonly width: number
    ) {
    }

    get id() {
        return `view-${this.name}`
    }

    get elAttrs() {
        return {
            style: {flexBasis: `${this.width}vw`},
            id: this.id,
            ref: (ref) => this.ref = ref
        }
    }

    goTo() {
        scrollIntoView(this.ref, {behavior: "smooth", block: "start", inline: "start"})
    }
}


export const FOOD = new Screen('food', 100)
export const BANDS = new Screen('bands', 100)
export const STAGE = new Screen('stage', 100)
export const CHILL = new Screen('chill', 100)
export const CLUBS = new Screen('clubs', 100)

export const PARTNERS = new Screen('partners', 100)

export const FLAG_PARADE = new Screen('flag-parade', 100)
export const FESTIVAL_INFO = new Screen('festival-info', 100)
export const FESTIVAL_MAP = new Screen('festival-map', 100)
export const FESTIVAL_PROGRAMME = new Screen('festival-programme', 100)
export const FESTIVAL_TEAM = new Screen('festival-team', 100)

export const ALL_SCREENS: Record<string, Screen> = {FOOD, BANDS, STAGE, CHILL, //CLUBS, PARTNERS, FLAG_PARADE, FESTIVAL_INFO, FESTIVAL_MAP, FESTIVAL_PROGRAMME, FESTIVAL_TEAM}
export const TOP_SCREENS: Record<string, Screen> = {FOOD, BANDS, STAGE, //CHILL, //CLUBS}

export const TOTAL_WIDTH = _.sumBy(Object.values(TOP_SCREENS), 'width');
