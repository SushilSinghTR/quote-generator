function generator(){
    var quotes={
        "sushil kr":"समय और जरुरत बलदते ही सब के चेहरे बेनकाब हो जाते है पता नहीं या तो हम में कुछ कमी आ जाती है या वो Acting अच्छी करने लगते है I",
        "ajay":"खुदा ने बहुत सी अच्छी चीज बनाई है उस में एक हमारा दिमाग भी है बस उसे Use करने के लिए बता देता तो हम भी करोड़पति बन जाते I",
        "SRK":"ज़िंदगी और Swimming में एक चीज Common है तैर गए तो पार नहीं तो बीच मझदार I ",
        "Sandeep":"किसान की भी क्या दुविधा छत टपकी है उसकी फिर भी बारिश की दुआ करता है I"

    }

    var authors=Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random()*authors.length)]

     var quote=quotes[author]

     document.getElementById("quote").innerHTML=quote;

     document.getElementById("author").innerHTML=author;



} 