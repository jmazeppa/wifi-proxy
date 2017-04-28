function FindProxyForURL(url, host) {
  var urls = [
    "*app-adforce.jp*",
    "*afl.rakuten.co.jp*",
    "*googleads.g.doubleclick.net*",
    "*microad.jp*",
    "*unthem.com*",
    "*tapone.jp*",
    "*media-rep.com*",
    "*gsspat.jp*",
    "*mediad2.jp*",
    "*nend.net*",
    "*i-mobile.co.jp*",
    "*ad.dmm.com*",
    "*clickadu.com*",
    "*tpc.googlesyndication.com*",
    "*mirmay.com*",
    "*mmaaxx.com*",
    "*as.criteo.com*",
    "*d.href.asia*",
    "*www.antennash.com*",
    "*le.nakanohito.jp*",
    "*biz.line.naver.jp*",
    "*image.with2.net*",
    "*ziyu.net*",
    "*ads.pixiv.org*",
    "*alxsite.com*",
    "*pagead2.googlesyndication.com*",
    "*fam-ad.com*",
    "*rare-gacha.com*",
    "*i.socdm.com*",
    "*i-mobile.co.jp*",
    "*ads.pixiv.org*",
    //"*gamewith.akamaized.net*",
    "*sprout-ad.com*",
    "*le.nakanohito.jp*",
    "*microad.net*",
    "*js1.nend.net*",
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
