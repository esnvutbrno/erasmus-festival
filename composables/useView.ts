import {Router} from "vue-router";
import {navigateTo, useRouter} from "#imports";
import {ALL_SCREENS, Screen} from '~/store/screen'
import _ from "lodash";

class View {
    public constructor(
        protected router: Router
    ) {

    }

    async goTo(screen: Screen) {
        await navigateTo({hash: '#' + screen.name})
        screen.goTo()
    }

    screenByName(name: string) {
        return _.find(ALL_SCREENS, {name})
    }
}

export const useView = () => {
    return new View(useRouter())
}
