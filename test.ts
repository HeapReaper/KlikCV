import Luna, { settings as lunaSettings } from '@/templates/Luna';
import Nova, { settings as novaSettings } from '@/templates/Nova';
import Orion, { settings as orionSettings } from '@/templates/Orion';

export function getTemplates(onlyNames = false) {
  const templates: Record<string, any> = {
    Luna: onlyNames ? 'Luna' : { component: Luna, settings: lunaSettings },
    Nova: onlyNames ? 'Nova' : { component: Nova, settings: novaSettings },
    Orion: onlyNames ? 'Orion' : { component: Orion, settings: orionSettings },
  };

  return templates;
}

console.log(getTemplates())
