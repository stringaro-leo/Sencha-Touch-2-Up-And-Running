Ext.define('Chapter4DataViews.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        models: [],
        views: [],
        controllers: ['PhoneController']
    },
    isActive: function () {
        return Ext.os.is.Phone;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'indexview'
        });
    }
});

