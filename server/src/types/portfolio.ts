export type PortfolioIdType = {
  portfolioId: string;
};
export type PortfolioType = {
  portfolio: {
    portfolioId?: string;
    title: string;
    description: string;
    img: string;
    portfolioURL: string;
    skills: string[];
    userToken: string;
    specSheetId: string;
  };
};
export type PortfolioUpdateType = {
  portfolio: {
    portfolioId?: string;
    title: string;
    description: string;
    img: string;
    skills: string[];
    portfolioURL: string;
  };
};
