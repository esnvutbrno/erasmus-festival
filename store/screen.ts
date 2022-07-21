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

    scrollTo() {
        this.ref.scrollIntoView({behavior: "smooth", block: "center"})
    }
}

export const FOOD = new Screen('food', 60)
export const STAGE = new Screen('stage', 100)
export const CHILL = new Screen('chill', 60)
export const CLUBS = new Screen('clubs', 60)

export const SCREENS: Record<string, Screen> = {FOOD, STAGE, CHILL, CLUBS}

export const TOTAL_WIDTH = _.sumBy(Object.values(SCREENS), 'width');