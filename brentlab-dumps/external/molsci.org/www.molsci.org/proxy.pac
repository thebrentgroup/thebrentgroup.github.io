function FindProxyForURL(url,host)
{
	if (isPlainHostName(host) || dnsDomainIs(host,".molsci.org"))
		return "DIRECT";
	else
	return "PROXY 169.230.242.225:8118; DIRECT";
}
