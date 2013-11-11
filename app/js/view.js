var moodMusic = moodMusic || {};

moodMusic.view = moodMusic.view || {
    abstractPlaylist:{},
    playlistPlace:{},
    playlistMood:{},
    nowPlaying:{}
};

moodMusic.view.abstractPlaylist = {

    renderCard:function (idx, details) {
        var tpl2 = '<div class="moodCard">' +
            '<div class="image" style="background-image: url(\'<%= imageUrl %>\')">' +
            '<div class="text"><%= text %></div>' +
            '</div>' +
            '</div>';
        return _.template(tpl2, {
            imageUrl:details.image,
            text:details.title
        });
    },

    attachClickToNowPlaying:function (idx, model) {
        var moodCard = $(this.containerId + " .moodCard")[idx];
        $(moodCard).on("click", function () {
            $('#nowPlaying').removeClass("inactive");
            $('#placesPlaylist').addClass("inactive");
            $('#moodPlaylist').addClass("inactive");

            moodMusic.view.nowPlaying.render(model);
        });
    },

    render:function (model) {
        var content = "";
        var self = this;

        $.each(model.getData(),
            function (idx, details) {
                content += moodMusic.view.abstractPlaylist.renderCard(idx, details);
                $(self.containerId).html(content);

            });

        $.each(model.getData(),
            function (idx, details) {
                self.attachClickToNowPlaying(idx, details);
            });
    }
};

moodMusic.view.playlistMood = _.extend({containerId:'#moodPlaylist'}, moodMusic.view.abstractPlaylist);

moodMusic.view.playlistPlace = _.extend({containerId:'#placesPlaylist'}, moodMusic.view.abstractPlaylist);

moodMusic.view.nowPlaying = {

    containerId:'#nowPlaying',

    tpl:'<div class="bigImage" style="background-image: url(<%= imageUrl %>)">' +
        '<div class="text"><%= title %></div>' +
        '</div>',

    sound:null,

    displayResult:function (model) {
        $(this.containerId).html(_.template(this.tpl, {
            imageUrl:model.image,
            title:model.title
        }));

    },

    render:function (model) {
        var self = this;

        self.play(model.track)

//        self.displayResult(model);

        var verticalQuery = _.extend({},model.query);
        verticalQuery.query.orientation = "Vertical";
        moodMusic.getty.search(verticalQuery,

            function (images) {
                if (images && images.length > 0) {
                    model.image = images[0]
                }
                else {
                    console.log("WARN empty image from Getty API, query: " + JSON.stringify(model))
                }
                self.displayResult(model);
            }
        );
    },

    play: function(track){
        var self = this;
        SC.stream(track || "/tracks/9139993", function(sound){
            self.stop();
            self.sound = sound;
            sound.play();
        });

    },

    stop:function(){
        if(this.sound){
            this.sound.stop();
        }
    }
}
;