function FindProxyForURL(url, host) {
  var urls = [
    "*app-adforce.jp*",
    "*afl.rakuten.co.jp*",
    "*googleads.g.doubleclick.net*",
    "*microad.jp*",
    "*unthem.com*",
    "*tapone.jp*",
    "*tpc.googlesyndication.com*",
    "*d.amoad.com*"
  ];
  for (var i = 0; i < urls.length; i++)
  {
    if (shExpMatch(url, urls[i]))
    {
      return "PROXY 8.8.8.8:53";
    }
  }

//  var domains = [
//    "googleads.g.doubleclick.net",
//    "d.amoad.com"
//  ];
//  for (var i = 0; i < domains.length; i++)
//  {
//    if (dnsDomainIs(url, domains[i]))
//    {
//      return "PROXY 8.8.8.8:53";
//      //return "PROXY 127.0.0.1:53";
//    }
//  }

  return "DIRECT";
}
