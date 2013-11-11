var moodMusic = moodMusic || {};

moodMusic.model = moodMusic.model || {
    playlistMood:{},
    playlistPlace:{},
    nowPlaying:{}
};

moodMusic.model.playlistMood = {

    data:[
        {
            title:"Happy",
            track: "/tracks/9139993",
            query:{
                query:"happy, smile",
                orientation:"Horizontal",
                concept:"Bonding"
            },
            image:"http://cache3.asset-cache.net/gc/110396376-confetti-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=h2YvCxTAB91pHt%2b64Yj%2beWqoYvwtUKvzw7tik2UNCfzhZwuCnQQcOuB%2fIIu%2fKqgm"
        },

        {
            title:"Sad",
//            track: "/tracks/14799264",
            query:{
                query:"Sad",
                orientation:"Horizontal"
            },
            image:"http://cache1.asset-cache.net/gc/107429861-depressed-woman-in-pajamas-sitting-in-bed-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=KDAlTKuaxXKB7wd%2bQrKYsXLr7L7xZLuJsT9RMzqSEzToXDEAP7pCBZlZoASV8Fqc"
        },

        {
            title:"Hyper",
            track: "/tracks/107272769",
            query:{
                query:"Hyper",
                orientation:"Horizontal"
            },
            image:"http://cache2.asset-cache.net/gc/200199616-001-football-supporters-at-match-cheering-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=zepUFimFOf2%2fJFU4UvQlOfm1iprwozdd%2bXPYb66fslkT2Edf41AiXCZvqMxK41VoNyquBCLW4xpkMl9pfBoSRw%3d%3d"
        },

        {
            title:"Working Hard",
            track: "/tracks/9168086",
            query:{
                query:"busy",
                orientation:"Horizontal",
                concept:"Teamwork"
            },
            image:"http://cache3.asset-cache.net/gc/176637315-businessman-working-on-office-desk-while-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=6pZw29hp1xNe4Xajs5YyKEV%2fVfMz4f0iOkHDw9hhkTRc%2fWhmQC%2bA6bWVxJGCSUZf"
        }    ,

        {
            title:"Success",
            query:{
                query:"success",
                orientation:"Horizontal"
            },
            image:"http://cache2.asset-cache.net/gc/117144935-soap-box-racers-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=ZYmkSTo%2bGQoBgXjxeQNfRXeZgy0p%2bIYGO5mWGfIFmZ%2foDC7%2bY%2fXRkYc%2fj%2fK795kW"
        },


        {
            title:"Angry",
            track: "/tracks/119440349",

            query:{
                query:"angry",
                orientation:"Horizontal"
            },
            image:"http://cache3.asset-cache.net/gc/108876267-woman-is-shouting-into-phone-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=ho8VzuaDG33ErHIJYIQyN7Eym11BUseY%2fYvIZQOQs2h%2bWpu2IkH96cWHC%2fvcjh18j7Mktj8MerTbes8UvPQU%2fg%3d%3d"
        },


        {
            title:"Relaxed",
            query:{
                query:"relaxed",
                orientation:"Horizontal"
            },
            image:"http://cache4.asset-cache.net/gc/88689085-couple-sitting-on-sofa-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=GI8AvhAzSE9lKpxSy62NY6z33n3Z2tQpr6aDdy3aptUq4PnfE0boh6FWSI5EPtMy"
        },


        {
            title:"Guilty",
            track: "/tracks/12112462",
            query:{
                query:"guilty, one person, headshot",
                orientation:"Horizontal"
            },
            image:"http://cache3.asset-cache.net/gc/125144619-prison-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=7WO%2b1LDHkOHd%2b0mr8OdA5b%2ffgn41%2feWHW4zlHSiJOejxhdCEvcj2y2QvxS4ZgMFy"
        },

        {
            title:"Adventurous",
            query:{
                query:"Adventurous",
                orientation:"Horizontal"
            },
            image:"http://cache1.asset-cache.net/gc/155910091-wish-you-were-here-x-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=9H61fMrwgRu8nxOjkpDYDXHweqvNFKY2R6HWZQMI%2fGy8uPgEqO8GtJ%2b6cLYxDibE"
        },


        {
            title:"Silly",
            track: "/tracks/119440297",

            query:{
                query:"Silly",
                orientation:"Horizontal"
            },
            image:"http://cache3.asset-cache.net/gc/119676151-two-young-girls-pulling-faces-to-camera-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=6VQFwfBjdrsBCH6sLuzWRZrQUGn9PD77Lmm91po2T6GFunzpixMtphMIpn9PO6US"
        },


        {
            title:"Stressed",
            query:{
                query:"Stressed, Adults only",
                orientation:"Horizontal"
            },
            image:"http://cache1.asset-cache.net/gc/200564345-001-mature-business-man-with-closed-eyes-and-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=lTrGdh5PEJXdcMfl8eRtLVMXh5LtFPCJkhWuRS63xP4Oa2KqPx%2fqZuqPqzZtPyyR"
        },


        {
            title:"Tired",
            track: "/tracks/22308674",

            query:{
                query:"tired, feeling very tired",
                orientation:"Horizontal"
            },
            image:"http://cache4.asset-cache.net/gc/115456623-woman-sitting-on-sofa-yawning-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=g72iqVC5QNScE%2byn9C%2fi6C5z%2bv%2fM%2fdCGDeW7%2bwCRoiA3l5FSOkTwfibHxvLi6Mtb7NtwbRFvaI367jxSral7cA%3d%3d"
        },


        {
            title:"In Love",
            query:{
                query:"in love",
                orientation:"Horizontal"
            },
            image:"http://cache2.asset-cache.net/gc/167122558-young-mixed-race-couple-enjoying-together-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=1m17qRKjUPuWXjGZYMh%2fDVV7IiTivFPO4V%2bNIl5uQxPltNASJ3ek9kz08DhUYz6o"
        }

    ],

    getData:function () {
        return this.data;
    },

    update:function (partial) {
        _.extend(this.data, partial);
//        $('#main').trigger('moodMusic.model.playlistMood.update');
    }

};

moodMusic.model.playlistPlace = {

    data:[
        {
            title:"Wake Up",
            track: "/tracks/119439987",

            query:{
                query:"in bed wake up",
                orientation:"Horizontal"
            },
            image:"http://cache2.asset-cache.net/gc/163391563-young-girl-rubbing-eyes-in-bed-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=5Ebt2fFFufNtdmIJMo%2bMISTLDhfvMxM2UR2e3cTBGjah0uP0yG3MSmNSW4ccCkXe"
        },


        {
            title:"Getting Ready",
            query:{
                query:"brushing teeth mirror",
                orientation:"Horizontal"
            },
            image:"http://cache3.asset-cache.net/gc/175139724-couple-brushing-their-teeth-together-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=PwALNt9%2fLMrBGfY3oNFkaAuhJjT4uUS8KC4T5rju4RnYP%2fNyHsoqlM2p84x9j4y8"
        },


        {
            title:"Commuting to Work",
            query:{
                query:"commuting to work",
                orientation:"Horizontal"
            },
            image:"http://cache1.asset-cache.net/gc/164285382-squeeze-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=sAEiVjxyT5TflyrJNs1hcPgiwNgV3nhDIPcMVYFoVssbDeEKNO9PXHKvtzreDOA9"
        },


        {
            title:"Office Work",
            track: "/tracks/119439804",
            query:{
                query:"working in the office computer",
                orientation:"Horizontal"
            },
            image:"http://cache2.asset-cache.net/gc/172027208-man-using-laptop-with-cityscape-in-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=bZa55Z8DtVYHojQ5n%2bTTYAuZKVHKecjWTHyslfow7vWfDl7OmxrJ3He96CBCJG8T"
        },


        {
            title:"Exercise",
            track: "/tracks/67660503",
            query:{
                query:"exercising",
                orientation:"Horizontal"
            },
            image:"http://cache4.asset-cache.net/gc/157015901-morning-workout-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=jO3fr2eIDNQ0meSNaxMfvCcZxXwfUHHV88VtZcTb16hdrvhfnxvdvoFsPIi6SusMGrAoTl4qWfUkjsQ9n7sZ4g%3d%3d"
        },


        {
            title:"Relaxing in the Evening",
            query:{
                query:"relax in the evening",
                orientation:"Horizontal"
            },
            image:"http://cache1.asset-cache.net/gc/107428780-man-feeding-wife-sushi-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=3BANURp%2fjHbp8q6LdbTVP8KlDmBTywOLda70UExJHV%2b4B"
        },


        {
            title:"Dinner Party",
            query:{
                query:"adult dinner party",
                orientation:"Horizontal"
            },
            image:"http://cache3.asset-cache.net/gc/200438937-004-group-of-people-gathered-around-dinner-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=vnNMp09eC8YAwV0PfBsUzsK1Q0YXS"
        },


        {
            title:"Party Party",
            query:{
                query:"house party",
                orientation:"Horizontal"
            },
            image:"http://cache2.asset-cache.net/gc/83688870-girls-dancing-at-a-party-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=7IOOK9FOWJEQGxDGQVuOhl2b7HPlN%2bGSArXgcoAl%2bIHheJWR80L2x4iR7MxzsQ7Q"
        },


        {
            title:"Trying to Sleep",
            query:{
                query:"in bed trying to sleep, one person",
                orientation:"Horizontal"
            },
            image:"http://cache1.asset-cache.net/gc/142627131-businessman-in-bed-with-clothes-on-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=HZ%2fIUtGR56Sk6ETwr7FX3v3PavDFUQpKu2Q1oWpmoil6G04NvQORVPNvj5wx3vus"
        }

    ],

    getData:function () {
        return this.data;
    },

    update:function (partial) {
        _.extend(this.data, partial);
        $('#main').trigger('moodMusic.model.playlistPlace.update');
    }

};

moodMusic.model.nowPlaying = {
    data:{
        title:"Wake Up",
        query:{
            query:"in bed wake up",
            orientation:"Vertical"
        },
        image:"http://cache2.asset-cache.net/gc/163391563-young-girl-rubbing-eyes-in-bed-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=5Ebt2fFFufNtdmIJMo%2bMISTLDhfvMxM2UR2e3cTBGjah0uP0yG3MSmNSW4ccCkXe"
    },

    getData:function () {
        return this.data;
    },

    update:function (data) {
        this.data = data;
        $('#main').trigger('moodMusic.model.nowPlaying.update');
    }
};