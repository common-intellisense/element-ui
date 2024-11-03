import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function elementUi2() {
  return {
    uiName: 'element-ui2',
    map: getPropsMap(),
    lib: 'element-ui',
  }
}

export function elementUi2Components(isZh?: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: true,
    prefix: 'el',
    lib: 'element-ui',
    isReact: false,
    directives: directives.elementUi2,
  }
}
