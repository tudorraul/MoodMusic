var moodMusic = moodMusic || {};

$(function () {

    function renderPlaylistMood() {
        moodMusic.view.playlistMood.render(moodMusic.model.playlistMood);
    }

    function renderPlaylistPlace() {
        moodMusic.view.playlistPlace.render(moodMusic.model.playlistPlace);
    }

    function updatePlaylist(model, view) {
        function addImagesToModel(idx, images) {
            var partial = {};
            partial[idx] = {image:images[0]};
            model.update(partial);
            view.render(model);
        }

        $.each(model.getData(), function (idx, details) {

            moodMusic.getty.search(details.query,

                function (images) {
                    if (images && images.length > 0) {
//                        console.log("Search for " + JSON.stringify(details) + " returned " + images.length + " images")
                        addImagesToModel(idx, images);
                    }
                    else {
                        console.log("WARN empty image from Getty API, query: " + JSON.stringify(details))
                    }
                }
            )
        });

    }


    function soundCloudInit(){
        SC.initialize({
            client_id: "eec80be7411dcd4c8521af28ec71a90f"
        });
    }
    soundCloudInit();


    renderPlaylistMood();
    renderPlaylistPlace();

    // render views on update
    function enableGettyImageUpdate() {
//        $("#main").on("moodMusic.model.playlistMood.update", function () {
//            renderPlaylistMood();
//        });
//        $("#main").on("moodMusic.model.playlistPlace.update", function () {
//            renderPlaylistPlace();
//        });
        $("#main").on("moodMusic.model.nowPlaying.update", function () {
            moodMusic.view.nowPlaying.render(moodMusic.model.nowPlaying)
        });
        $("#main").on("gettySecurityToken", function () {
            updatePlaylist(moodMusic.model.playlistMood, moodMusic.view.playlistMood);
            updatePlaylist(moodMusic.model.playlistPlace, moodMusic.view.playlistPlace);
        });
    }
//    enableGettyImageUpdate();

    moodMusic.getty.createSessionToken();

//    _.delay(enableGettyImageUpdate, 500);
});

