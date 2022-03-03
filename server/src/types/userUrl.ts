export type UrlDataCreateType = {
  urlData: {
    userId: string;
    urlName: string;
    url: string;
  };
};
export type UrlDataAddType = {
  urlData: {
    urlId: string;
    urlName: string;
    url: string;
  };
};

export type UrlDataRemoveType = {
  urlData: {
    urlId: string;
    userUrlsId: string;
  };
};
