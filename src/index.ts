// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

export default function(api: IApi) {
  const { eruda = {} } = api.userConfig;

  const option = {
    init: {},
    scale: 2,
    position: {},
    tools: [],
    ...eruda,
  };

  api.describe({
    key: 'eruda',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  });

  if (option.hidden) return;

  if (process.env.NODE_ENV === 'development' || option.debug) {
    api.addEntryImports(() => {
      return [
        {
          source: 'eruda',
          specifier: 'eruda',
        },
      ];
    });

    api.addEntryCodeAhead(() => {
      return `window.eruda = eruda.init(${JSON.stringify(
        option.init,
      )});eruda.scale(${option.scale});eruda.position(${JSON.stringify(
        option.position,
      )});${option.tools.forEach((cb: any) => `eruda.add(${cb})`)}`;
    });
  }
}
