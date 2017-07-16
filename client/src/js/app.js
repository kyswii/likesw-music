(function () {
        var Router = Backbone.Router.extend({
        routes: {
            '': "home",
            'library': 'library',
            'foryou': 'foryou',
            'messages': 'messages',
            'explore': 'explore'
        },

        home: function () {
            
            homeRender();
        },

        library: function() {
            
            libraryRender();              
        },

        foryou: function () {
            
            foryouRender();
        },

        messages: function () {

            messagesRender();
        },

        explore: function () {
            
            exploreRender();
        }
    });

    new Router();
    Backbone.history.start();
}());