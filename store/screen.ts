import _ from 'lodash'

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
        this.ref.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
    }
}


export const FOOD = new Screen('food', 100)
export const BANDS = new Screen('bands', 100)
export const STAGE = new Screen('stage', 100)
export const CHILL = new Screen('chill', 100)
export const CLUBS = new Screen('clubs', 100)

export const FLAG_PARADE = new Screen('flag-parade', 100)
export const FESTIVAL_INFO = new Screen('festival-info', 100)

export const ALL_SCREENS: Record<string, Screen> = {FOOD, BANDS, STAGE, CHILL, CLUBS, FLAG_PARADE, FESTIVAL_INFO}
export const TOP_SCREENS: Record<string, Screen> = {FOOD, BANDS, STAGE, CHILL, CLUBS}

export const TOTAL_WIDTH = _.sumBy(Object.values(TOP_SCREENS), 'width');
