const request=require('request');
const cheerio =require('cheerio');


request('http://anyPermittedWebsite.com',(err,response,html)=>{

if(!err && response.statusCode==200){
  const $ = cheerio.load(html);
 //console.log(response)
  const siteHead =$('.site-heading');
  console.log(siteHead.html());
  console.log(siteHead.text());

// const output=siteHead.find('h1').text() ;
// const output2=siteHead.children('h1').next().text() ;
// const output3=siteHead.children('h1').parent().text() ;

// console.log(output);
// console.log(output2);
// console.log(output3);

 $('.nav-item a').each( (i,li)=>{

    const list =$(li).text();
    const link =$(li).attr('href');

    console.log(link);
    console.log(list);


} )






}else{
    console.log(err);
}

});