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
    debug: process.env.ERUDA_DEBUG,
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

  api.addEntryImports(() => {
    return [
      {
        source: 'eruda',
        specifier: 'eruda',
      },
    ];
  });

  api.addEntryCodeAhead(() => {
    return `const params = new URLSearchParams(window.location.search);
    const hash = new URLSearchParams(window.location.hash);
    if (params.get('ERUDA_DEBUG') || hash.get('ERUDA_DEBUG')) {
      eruda.init(${JSON.stringify(option.init)});
      eruda.scale(${option.scale});
      eruda.position(${JSON.stringify(option.position)})
      ${option.tools.forEach((cb: any) => `eruda.add(${cb})`)};
    }`;
  });

  if (option.debug) {
    api.addEntryCodeAhead(() => {
      return `window.eruda = eruda.init(${JSON.stringify(option.init)});
      eruda.scale(${option.scale});
      eruda.position(${JSON.stringify(option.position)});
      ${option.tools.forEach((cb: any) => `eruda.add(${cb})`)}`;
    });
  }
}
