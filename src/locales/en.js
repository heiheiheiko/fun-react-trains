import { flatten } from "../lib/objectHelper";

const locales = {
  pages: {
    world: "World",
    finnland: "Finnland"
  },

  aside: {
    trainFilterForm: {
      placeholder: "filter by train number..."
    },
    mapCenterLabel: {
      latitude: "Lat",
      longitude: "Long"
    }
  },

  actions: {
    apply: "apply"
  }
}

export default flatten(locales);
