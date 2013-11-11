function gettySearch(q, callback) {

    function createSessionToken(callback) {
        var request = "{\n" +
            "  \"RequestHeader\": {\n" +
            "    \"Token\": \"\",\n" +
            "    \"CoordinationId\": \"\"\n" +
            "    },\n" +
            "  \"CreateSessionRequestBody\": {\n" +
            "    \"SystemId\": \"10799\",\n" +
            "    \"SystemPassword\": \"vMK8LPFBcaA0JWug3VReKcN45TtzCVtqWjnuLcHbyF0=\",\n" +
            "    \"UserName\": \"seedhacklon_api\",\n" +
            "    \"UserPassword\": \"HJARZH1p7awxi68\",\n" +
            "    }\n" +
            "}";

        $.ajax({
            url:"https://connect.gettyimages.com/v1/session/CreateSession",
            type:"POST",
            contentType:"application/json",
            data:request,
            success:function (data) {
                var token = data.CreateSessionResult.Token;
                console.log("Getty token: " + token);
                callback(token);
            }
        });
    }

    function search(q, token, callback) {
        var request = "{\n" +
                "    \"RequestHeader\":{\n" +
                "        \"Token\": \"" + token + "\",\n" +
                "        \"CoordinationId\":\"\"\n" +
                "    },\n" +
                "    \"SearchForImagesRequestBody\":{\n" +
                "        \"Filter\":{\n" +
                "            \"FileTypes\":[\n" +
                "                \"\"\n" +
                "            ],\n" +
                "            \"GraphicStyles\":[\n" +
                "                \"\"\n" +
                "            ],\n" +
                "            \"ImageFamilies\":[\n" +
                "                \"creative\"\n" +
                "            ]\n" +
                "        },\n" +
                "        \"Language\":\"\",\n" +
                "        \"Query\":{\n" +
                "            \"SearchPhrase\": \"" + q.query + "\",\n" +
                "            \"KeywordIds\":[\n" +
                "                \"\"\n" +
                "            ],\n" +
                "            \"SpecificPersons\":[\n" +
                "                \"\"\n" +
                "            ]\n" +
                "        },\n" +
                "        \"ResultOptions\":{\n" +
                "            \"IncludeKeywords\":false,\n" +
                "            \"ItemCount\":10,\n" +
                "            \"ItemStartNumber\":1,\n" +
                "            \"RefinementOptionsSet\":\"\",\n" +
                "            \"CreativeSortOrder\":\"mostpopular\"\n" +
                "        }\n" +
                "    }\n" +
                "}"
            ;

        $.ajax({
            url:"https://connect.gettyimages.com/v2/search/SearchForImages",
            type:"POST",
            contentType:"application/json",
            data:request,
            success:function (data) {
                var images = data.SearchForImagesResult.Images;

                var result = [];
                console.log("each " + $.each(images, function (i, val) {
                    result.push(val.UrlThumb);
                }));

                callback(result);
            }
        });
    }

    return createSessionToken(function (token) {
        search(q, token, function (images) {
            callback(images);
        })
    });
}

gettySearch({
    query:"happy, smile",
    orientation:"Horizontal",
    concept:"Bounding"
}, function (images) {

    var content = "";
    $.each(images, function (i, val) {
        console.log(JSON.stringify(val))
        content += "<img src=" + val + "/> ";
    });

    $('#main').html(content);
    console.log(content);
});