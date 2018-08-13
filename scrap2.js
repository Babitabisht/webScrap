const request=require('request');

const cheerio=require('cheerio');

const fs=require('fs');
const writeStream=fs.createWriteStream('post.csv');

writeStream.write(`Title,Link,Date \n` );

request('http://anyPermittedWebsite.com',(error,response,html)=>{

//console.log(response);
//console.log(html);

if(!error && response.statusCode==200){

    const $ =cheerio.load(html);

    $('.post-preview').each( (i,li)=>{

const title=$(li)
.find('.post-title')
.text()
.replace(/\s\s+/g,'');


const link =$(li).find('a').attr('href');

const date= $(li).find('.post-date')
.text().replace(/,/,'');


writeStream.write(`${title},${link},${date}`);

    } )
     
    console.log('Done dana Done !!!');


}else{
    console.log(error);
}


});