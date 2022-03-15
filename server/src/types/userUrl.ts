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

export type UrlType = {
  urlName: string;
  url: string;
};
