var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Camp number one", 
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg", 
        description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    },
    {
        name: "Camp number two",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg", 
        description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    },
    {
        name: "Camp number three", 
        image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg", 
     description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    },
    {
        name: "Camp number four", 
        image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg", 
        description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    },
    {
        name: "Camp number five", 
        image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg", 
        description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    },
    {
        name: "Camp number six", 
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg", 
        description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    },
    {
        name: "Camp number seven", 
    image: "https://farm3.staticflickr.com/2535/3823437635_c712decf64.jpg", 
    description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    },
    {
        name: "Camp number eight", 
        image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg", 
        description: "Bacon ipsum dolor amet ham hock porchetta turducken bacon jowl alcatra chuck turkey jerky picanha capicola swine. T-bone strip steak picanha, filet mignon tongue bresaola frankfurter beef ribs. Ball tip alcatra leberkas hamburger shankle chicken shank pig bacon turkey pork cow fatback. T-bone flank ribeye, short ribs fatback corned beef ground round kielbasa jowl ham hock salami kevin. Venison fatback jerky, leberkas alcatra turkey rump shankle pork swine tongue. Filet mignon tongue prosciutto leberkas pancetta bresaola meatball ribeye fatback tri-tip beef hamburger ground round. Tail fatback pork chop kielbasa strip steak bresaola, tri-tip spare ribs ribeye chuck chicken flank swine."
        
    }
    ];


function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err){
/*       if(err) {
           console.log(err);
       } else {
           console.log("remove campgrounds");
           // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                   console.log(err);
                } else {
                    console.log("created test data");
                    // add a few comments
                    Comment.create(
                        {
                            text: "This is wonderful place to camp",
                            author: "Homer Simpson"
                            
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });       
        });
       }*/
    });
}

module.exports = seedDB;