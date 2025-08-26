export function getTemplates(onlyNames: boolean = false) {
  // @ts-ignore
  const templates = import.meta.glob('../templates/*.tsx', { eager: true });

  return Object.fromEntries(
    Object.entries(templates).map(([path, module]) => {
      const name = path.split('/').pop()?.replace('.tsx', '') as string;
      if (onlyNames) {
        return [name];
      }
      return [
        name,
        {
          Component: (module as any).default,
          settings: (module as any).settings || {},
        },
      ];
    })
  );
}
