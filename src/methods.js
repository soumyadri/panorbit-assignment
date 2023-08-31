export const parseUrl = (url) => {
      const parsedUrl = new URL(url);

      return {
            pathname: parsedUrl.pathname,
            search: parsedUrl.search,
            hash: parsedUrl.hash
      };
}