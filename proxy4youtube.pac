function FindProxyForURL(url, host) {
  var urls = [
  //  "*.*sn-\S{4,}-\S{3}[0-9]\.googlevideo\.com*"
    "*sn-*-*.googlevideo.com*",
  // www.youtube.com/get_midroll_info
    "*.youtube.com/get_midroll_info*",
    "*googleads.g.doubleclick.net*"
  ];
  for (var i = 0; i < urls.length; i++)
  {
    if (shExpMatch(url, urls[i]))
    {
      return "PROXY 8.8.8.8:53";
    }
  }

  return "DIRECT";
}
