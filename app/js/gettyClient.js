var moodMusic = moodMusic || {};

moodMusic.getty = moodMusic.getty || {
    securityToken:null,

    createSessionToken:function () {
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
            async:false,
            success:function (data) {
                var token = data.CreateSessionResult.Token;
//                console.log("Getty token: " + token);

                moodMusic.getty.securityToken = token;

                $("#main").trigger("gettySecurityToken", [token]);
            }
        });
    },

    search:function (q, callback) {
        var searchPhrase = q.query;

        var orientationFilter = "";
        if (q.orientation) {
            orientationFilter = ' "Orientations": ["' + q.orientation + '"],';
        }

        var keywordFilter = "";
        if (q.concept) {
            keywordFilter = '"KeywordIds": ["' + q.concept + '"],';
        }

        var resultLength = "1";
        if (q.resultLength) {
            resultLength = g.resultLength;
        }

        var request = "{\n" +
            "    \"RequestHeader\":{\n" +
            "        \"Token\": \"" + moodMusic.getty.securityToken + "\",\n" +
            "        \"CoordinationId\":\"\"\n" +
            "    },\n" +
            "    \"SearchForImagesRequestBody\":{\n" +
            "        \"Filter\":{\n" + orientationFilter +
//                '             ProductOfferings": ["EasyAccess"],'+
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
            "        \"Query\":{\n" + keywordFilter +
            "            \"SearchPhrase\": \"" + searchPhrase + "\",\n" +
            "            \"KeywordIds\":[\n" +
            "                \"\"\n" +
            "            ],\n" +
            "            \"SpecificPersons\":[\n" +
            "                \"\"\n" +
            "            ]\n" +
            "        },\n" +
            "        \"ResultOptions\":{\n" +
            "            \"IncludeKeywords\":false,\n" +
            "            \"ItemCount\":" + resultLength + ",\n" +
            "            \"ItemStartNumber\":1,\n" +
            "            \"RefinementOptionsSet\":\"\",\n" +
            "            \"CreativeSortOrder\":\"mostpopular\"\n" +
            "        }\n" +
            "    }\n" +
            "}";

        $.ajax({
            url:"https://connect.gettyimages.com/v2/search/SearchForImages",
            type:"POST",
            contentType:"application/json",
            data:request,
            async:false,
            success:function (data) {
                var result = [];

                if (data && data.SearchForImagesResult && data.SearchForImagesResult.Images) {
                    var images = data.SearchForImagesResult.Images;

                    $.each(images, function (i, val) {
//                        result.push(val.UrlThumb);
//                        result.push(val.UrlPreview);
                        result.push(val.UrlComp);
                    });
                }
//                console.log("Getty images for query: " + JSON.stringify(q) + "" + JSON.stringify(result));

                callback(result);
            }
        });
    }

};
