export const useLink = (href: string) => {
  const isExternalUrl = !href.startsWith('/');

  return {
    href,
    target: isExternalUrl ? '_blank' : undefined,
    rel: isExternalUrl ? 'noopener noreferrer' : undefined,
  };
};
