import {Router} from "vue-router";
import {navigateTo, useNuxtApp, useRouter} from "#imports";
import {ALL_SCREENS, Screen} from '~/store/screen'
import _ from "lodash";
import {App} from "vue";
import Gtag from "vue-gtag-next";

class View {
    public constructor(
        protected router: Router,
        protected vueApp: App<Element>
    ) {

    }

    async goTo(screen: Screen) {
        await navigateTo({hash: '#' + screen.name})
        screen.goTo()

        // @ts-ignore
        // const gtag: Gtag = useNuxtApp().vueApp.$gtag;
        // @ts-ignore
        // gtag.pageview({page_location: '#' + screen.name})
    }

    screenByName(name: string) {
        return _.find(ALL_SCREENS, {name})
    }
}

export const useView = () => {
    return new View(useRouter(), useNuxtApp().vueApp)
}
