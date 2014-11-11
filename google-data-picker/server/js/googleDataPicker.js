function setupGooglePicker() {
    var developerKey    = 'AIzaSyAuRxhX_uey5t-Bbnrfe1vf3dqPlhmVPKo';
    var clientId        = '1091683352607-kl2liocgfgm8pe7iti320m25mbai3i0d.apps.googleusercontent.com';
    var scope           = ['https://www.googleapis.com/auth/photos'];
    var pickerApiLoaded = false;
    var oauthToken;

    // googlePickerApiをロードする．googlePickerを利用するには，まずこれでApiをロードする必要がある．
    // oauth認証が必要ないpickerであれば，これを呼ぶだけで利用できる．
    var googlePickerApiLoad = function () {
        var d = new $.Deferred();

        // 既にロード済みの場合は再びロードしない
        if (pickerApiLoaded) {
            d.resolve();
        } else {
            gapi.load( 'picker', {'callback': function() {
                pickerApiLoaded = true;
                d.resolve();
            }});
        }

        return d.promise();
    };
    // googlePickerのoAuth認証が必要な場合はこれを呼ぶ．
    var googlePickerApiAuth = function () {
        var d = new $.Deferred();

        // 既にアクセストークンを得ている場合は再び認証しない．
        if (oauthToken) {
            d.resolve();
        } else {
            gapi.load( 'auth', {'callback': d.resolve} );
        }

        return d.promise();
    };
    // ユーザ認証画面を出す場合にこれを呼ぶ．
    var googlePickerUserAuth = function () {
        var d = new $.Deferred();

        // 既にアクセストークンを得ている場合は再び認証しない．
        if (oauthToken) {
            d.resolve(oauthToken, developerKey);
        } else {
            window.gapi.auth.authorize(
                {
                    'client_id' : clientId,
                    'scope'     : scope,
                    'immediate' : false
                },
                function (authResult) {
                    if (authResult && !authResult.error) {
                        oauthToken = authResult.access_token;
                        d.resolve(oauthToken, developerKey);
                    }
            });
        }

        return d.promise();
    };

    // picker開くボタン押されるとこれが呼ばれます
    // $self: クリックされたボタン
    // createBuilder: builderを作って返す ボタンごとに有効にするサービス切り替えるためにここをコールバックみたいにしてる
    var clicked = function($self, createBuilder) {
        $self.prop('disabled', true);

        var googlePickerCallback = function (res) {
            $self.prop('disabled', false);
            // Hatena.Diary.LOG([ 'googlePickerCallback', res ]);
            if (res.action !== google.picker.Action.PICKED) return;

            // var editor = Hatena.Diary.Editor.Support.currentEditor;

            var lines = [];
            for (var i = 0, len = res.docs.length; i < len; i++) {
                var doc = res.docs[i];

                var html;
                var div;
                if (doc.type === 'video') {
                    html = $('<div/>').append(
                        $('<iframe width="420" height="315" frameborder="0" allowfullscreen></iframe>').
                            attr('src', doc.embedUrl),
                        $('<br/>'),
                        $('<a/>').attr('href', doc.url).text(doc.name)
                    ).html();
                } else if (doc.type === 'photo') {
                    div = $('<div/>');

                    var url = doc.thumbnails[doc.thumbnails.length - 1].url;
                    // if (url.match(/\/s\d+\/[^\/+]$/)) {
                    //     // URL内にs+数字
                    //     // /s400/ → /s1280/
                    //     url = url.replace(/\/s\d+\//, '/s1280/');
                    // } else {
                    //     // /s1280/aaa.jpg
                    //     var fragments = url.split(/\//);
                    //     fragments.splice(fragments.length - 1, 0, 's1280');
                    //     url = fragments.join('/');
                    // }

                    var img = $('<img/>').addClass('magnifiable').attr({src: url, itemprop: 'image'});
                    var span = $('<span/>').attr({itemtype: 'http://schema.org/Photograph', itemscope: 'itemscope'});
                    div.append(span.append(img));

                    html = div.html();
                } else if (doc.embedUrl) {
                    html = $('<div/>').append(
                        $('<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>').
                            attr('src', doc.embedUrl),
                        $('<br/>'),
                        $('<a/>').attr('href', doc.url).text(doc.name)
                    ).html();
                } else {
                    div = $('<div/>');
                    var thumbnail, icon, link;
                    var thumbnailUrl = doc.thumbnails && doc.thumbnails[doc.thumbnails.length - 1].url;
                    if (thumbnailUrl) {
                        thumbnail = $('<img/>').attr({ src: thumbnailUrl, alt: doc.name || '' });
                        if (doc.url) {
                            thumbnail = $('<a/>').attr('href', doc.url).append(thumbnail);
                        }
                    } else if (doc.iconUrl) {
                        icon = $('<img/>').attr({ src: doc.iconUrl, alt: '' });
                    }
                    if (doc.name && doc.url) {
                        link = $('<a/>').attr('href', doc.url).text(doc.name);
                    }

                    if (thumbnail) div.append(thumbnail);
                    if (thumbnail && link) div.append($('<br/>'));
                    if (icon) div.append(icon);
                    if (link) div.append(link);

                    html = div.html();
                }

                lines.push(html);
            }
            // IE9でGoogle Pickerから挿入しようとすると
            // 「internet exploreはクロスサイトスクリプトを防止するために、このページを変更しました」
            // と表示されて挿入できないので (tinymce.focus()できなくて、doc.selection.createRange()で落ちる)
            // 一旦bodyにfocusを当ててから挿入する
            if (navigator.userAgent.indexOf('MSIE') >= 0 && $('#syntax').val() === 'html') {
                $('body').trigger('focus');
            }
            console.log(lines)
            // editor.insertLines(lines);
        };

        var launchGooglePicker = function () {alert('')
            var builder = createBuilder();
                builder.setCallback(googlePickerCallback);
                builder.setOrigin('http://test.haroopress.com');

            var picker = builder.build();
            picker.setVisible(true);
        };

        if (typeof google === 'undefined') {
            $('<script src="http://www.google.com/jsapi"></script>').appendTo(document.getElementsByTagName('head')[0]);
            var googleTimer = setInterval(function () {
                if (typeof google === 'undefined') return;
                clearTimeout(googleTimer);

                launchGooglePicker();
            }, 20);
        } else {
            launchGooglePicker();
        }
    };

    // タブを表示した時に，google picker apiのロードを行う．
    // $('#editor-google-picker').on('show', function() {
        googlePickerApiLoad()
            .done( googlePickerApiAuth ); // ユーザの情報を利用するのでauth必要
    // });

    // ピッカー表示ボタンがクリックされた時に，ユーザの認証を行う．
    $('#launch-google-picker').click(function () {
        googlePickerUserAuth()
            .done( function(oauthToken, developerKey) {
                clicked($(this), function() {
                    var builder;
                    builder = new google.picker.PickerBuilder().
                        enableFeature(google.picker.Feature.MULTISELECT_ENABLED).
                        addView(google.picker.ViewId.PHOTOS).
                        addView(new google.picker.PhotosView().setType('camerasync')).
                        addView(google.picker.ViewId.PHOTO_UPLOAD).
                        addView(google.picker.ViewId.YOUTUBE).
                        addView(google.picker.ViewId.WEBCAM).
                        addView(google.picker.ViewId.VIDEO_SEARCH).
                        addView(google.picker.ViewId.MAPS).
                        addView(google.picker.ViewId.RECENTLY_PICKED).
                        setLocale('ja').
                        setOAuthToken(oauthToken).
                        setDeveloperKey(developerKey);
                    return builder;
                });
            });
    });

    $('#launch-youtube').click(function () {
        googlePickerApiLoad()
            .done( function () {
                clicked($(this), function() {
                    var builder = new google.picker.PickerBuilder().
                        enableFeature(google.picker.Feature.MULTISELECT_ENABLED).
                        setLocale('ja').
                        addView(google.picker.ViewId.VIDEO_SEARCH);
                    return builder;
                });
            });
    });
};