type SocialLinksType = {
  githubUrl?: string;
  linkedinUrl?: string;
};

export const extractSocialLinks = (links: string[]): SocialLinksType => {
  const socialLinksObject: SocialLinksType = {};

  for (const link of links) {
    const match = link.match(/^(?:https?:\/\/)?(?:www\.)?([^/]+)(\/.*)?$/);

    if (match) {
      const domainName = match[1];

      const name = domainName.split('.')[0] + 'Url';

      socialLinksObject[name as keyof SocialLinksType] = link;
    }
  }

  return socialLinksObject;
};
