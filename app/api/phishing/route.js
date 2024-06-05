
const getdomain = (url) =>{
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/:?#]+)/;
    const match = url.match(regex);
    if (match) {
      let domain = match[1];
      let parts = domain.split('.');
      // Check if domain has more than two parts and is not an IP address
      if (parts.length > 2 && isNaN(parts[0])) {
        domain = parts.slice(-2).join('.');
      }
      return domain;
    }
    return null;
  };

  const whois = async (link) =>{
    const domain = getdomain(link);
    const url = `https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=${domain}&format=json&_forceRefresh=0`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_TOKEN,
        'X-RapidAPI-Host': 'zozor54-whois-lookup-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  const phishing = async (link) =>{
    const url = `https://exerra-phishing-check.p.rapidapi.com/?url=${link}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_TOKEN,
        'X-RapidAPI-Host': 'exerra-phishing-check.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.data.isScam;
    } catch (error) {
      console.error(error);
    }
  }
export const POST = async (req,res) =>{
    const data = await req.json();
    const phish_result = await phishing(data.link);
    const whois_result = await whois(getdomain(data.link))
    const result = {phishing:phish_result, whois:whois_result}
    return new Response(JSON.stringify(result), {status:200})
}