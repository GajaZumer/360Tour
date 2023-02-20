(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    return i(g);
    function i(p, q) {
        switch (p) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['startsWith']('photo'))
                        x = this['getByClassName']('PhotoPlayList');
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var B = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (B) {
                            w = B[0x1];
                            switch ('quiz.' + B[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var C = this['get']('data')['quiz'];
                        if (C) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, G[I]['id'], s), this);
                                        }
                                    } else {
                                        C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    C['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var L = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            L += C['getObjective'](G[I]['id'], s);
                                        }
                                    } else {
                                        L = C['getObjective'](w, s);
                                    }
                                } else {
                                    L = C['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        L += 0x1;
                                }
                                return L;
                            } catch (M) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var N = this['get']('data');
        N['updateText'](N['translateObjs'][f]);
    }
    function k(O) {
        var P = O['data']['nextSelectedIndex'];
        if (P >= 0x0) {
            var Q = O['source']['get']('items')[P];
            var R = function () {
                Q['unbind']('begin', R, this);
                j['call'](this);
            };
            Q['bind']('begin', R, this);
        }
    }
    function l(S) {
        return function (T) {
            if (S in T) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(U, V) {
        return function (W, X) {
            if (U == W && V in X) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(Y, Z, a0) {
        for (var a1 = 0x0; a1 < Y['length']; ++a1) {
            var a2 = Y[a1];
            var a3 = a2['get']('selectedIndex');
            if (a3 >= 0x0) {
                var a4 = Z['split']('.');
                var a5 = a2['get']('items')[a3];
                if (a0 !== undefined && !a0['call'](this, a5))
                    continue;
                for (var a6 = 0x0; a6 < a4['length']; ++a6) {
                    if (a5 == undefined)
                        return '';
                    a5 = 'get' in a5 ? a5['get'](a4[a6]) : a5[a4[a6]];
                }
                return a5;
            }
        }
        return '';
    }
    function o(a7, a8) {
        var a9 = a8['get']('player');
        return a9 !== undefined && a9['get']('viewerArea') == a7;
    }
}
var script = {"scripts":{"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"createTween":TDV.Tour.Script.createTween,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showWindow":TDV.Tour.Script.showWindow,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playAudioList":TDV.Tour.Script.playAudioList,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"startMeasurement":TDV.Tour.Script.startMeasurement,"setValue":TDV.Tour.Script.setValue,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"translate":TDV.Tour.Script.translate,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMapLocation":TDV.Tour.Script.setMapLocation,"clone":TDV.Tour.Script.clone,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"downloadFile":TDV.Tour.Script.downloadFile,"getKey":TDV.Tour.Script.getKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"openLink":TDV.Tour.Script.openLink,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initAnalytics":TDV.Tour.Script.initAnalytics,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeJS":TDV.Tour.Script.executeJS,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPixels":TDV.Tour.Script.getPixels,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce},"id":"rootPlayer","height":"100%","layout":"absolute","start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"history":{},"defaultLocale":"en","name":"Player537"},"children":["this.MainViewer"],"class":"Player","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"watermark":false,"backgroundColorRatios":[0],"propagateClick":false,"scrollBarMargin":2,"width":"100%","hash": "21d597858ab9586a63d3c1c38c1e07e229c64ab3b482679608453c46354950c6", "definitions": [{"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","progressBottom":10,"playbackBarHeadBorderSize":0,"subtitlesBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"minHeight":50,"minWidth":100,"progressOpacity":0.7,"toolTipPaddingBottom":4,"progressBackgroundColor":["#000000"],"playbackBarHeadShadow":true,"subtitlesFontFamily":"Arial","playbackBarProgressBorderSize":0,"progressBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","playbackBarRight":0,"playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"progressBarBorderRadius":2,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressRight":"33%","playbackBarHeadBorderColor":"#000000","width":"100%","height":"100%","progressBarBorderSize":0,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBottom":5,"playbackBarBackgroundOpacity":1,"class":"ViewerArea","toolTipFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"surfaceReticleColor":"#FFFFFF","subtitlesBottom":50,"toolTipPaddingLeft":6,"firstTransitionDuration":0,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarLeft":0,"toolTipPaddingTop":4,"progressBarBackgroundColorRatios":[0],"propagateClick":false,"toolTipFontSize":"1.11vmin","toolTipFontColor":"#606060","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"id":"MainViewer","progressHeight":2},{"label":trans('video_7BA685BF_7107_1967_4162_6037723F20E2.label'),"video":"this.videores_6110D417_710B_1F27_419F_FD6F1C98AAF5","data":{"label":"Vozi\u010dek za orodje Europlus I Unior Hand Tools"},"class":"Video","thumbnailUrl":"media/video_7BA685BF_7107_1967_4162_6037723F20E2_t.jpg","width":1280,"height":720,"id":"video_7BA685BF_7107_1967_4162_6037723F20E2"},{"class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","mode":"quality","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer"},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true,"id":"panorama_7DA92AAA_7108_EB69_41BC_093948688DF3_camera"},{"class":"PlayList","id":"playList_6219F606_7109_1B19_41D1_D2A021237B2A","items":[{"player":"this.MainViewerVideoPlayer","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_6219F606_7109_1B19_41D1_D2A021237B2A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_6219F606_7109_1B19_41D1_D2A021237B2A, 0)","media":"this.video_7BA685BF_7107_1967_4162_6037723F20E2","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}]},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7DA92AAA_7108_EB69_41BC_093948688DF3_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_7DA92AAA_7108_EB69_41BC_093948688DF3_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","colCount":24},{"height":1024,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_7DA92AAA_7108_EB69_41BC_093948688DF3_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12},{"height":512,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_7DA92AAA_7108_EB69_41BC_093948688DF3_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6}]}}],"label":trans('panorama_7DA92AAA_7108_EB69_41BC_093948688DF3.label'),"data":{"label":"IMG_20211011_122233_00_merged"},"hfovMax":130,"class":"Panorama","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_7DA92AAA_7108_EB69_41BC_093948688DF3_t.jpg","overlays":["this.overlay_7CFAC88B_710F_3728_41D8_EE4BD0DD0D73"],"hfovMin":"135%","adjacentPanoramas":[{"yaw":-172.2,"panorama":"this.panorama_7A137F4B_7108_E92F_41D1_28722041B956","class":"AdjacentPanorama","distance":100,"data":{"overlayID":"overlay_7CFAC88B_710F_3728_41D8_EE4BD0DD0D73"},"backwardYaw":8.21,"select":"this.overlay_7CFAC88B_710F_3728_41D8_EE4BD0DD0D73.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_7DA92AAA_7108_EB69_41BC_093948688DF3"},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7A137F4B_7108_E92F_41D1_28722041B956_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_7A137F4B_7108_E92F_41D1_28722041B956_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","colCount":24},{"height":1024,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_7A137F4B_7108_E92F_41D1_28722041B956_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12},{"height":512,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_7A137F4B_7108_E92F_41D1_28722041B956_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6}]}}],"label":trans('panorama_7A137F4B_7108_E92F_41D1_28722041B956.label'),"data":{"label":"vhod"},"hfovMax":130,"class":"Panorama","hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_7A137F4B_7108_E92F_41D1_28722041B956_t.jpg","overlays":["this.overlay_7E3D6EF8_7109_68E9_41D4_7F306022B521"],"hfovMin":"135%","adjacentPanoramas":[{"yaw":8.21,"panorama":"this.panorama_7DA92AAA_7108_EB69_41BC_093948688DF3","class":"AdjacentPanorama","distance":100,"data":{"overlayID":"overlay_7E3D6EF8_7109_68E9_41D4_7F306022B521"},"backwardYaw":-172.2,"select":"this.overlay_7E3D6EF8_7109_68E9_41D4_7F306022B521.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_7A137F4B_7108_E92F_41D1_28722041B956"},{"viewerArea":"this.MainViewer","displayPlayOverlay":true,"clickAction":"play_pause","class":"VideoPlayer","id":"MainViewerVideoPlayer","displayPlaybackBar":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true,"id":"panorama_7A137F4B_7108_E92F_41D1_28722041B956_camera"},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","colCount":24},{"height":1024,"width":6144,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12},{"height":512,"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6}]}}],"label":trans('panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565.label'),"thumbnailUrl":"media/panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565_t.jpg","hfov":360,"hfovMax":130,"data":{"label":"IMG_20211011_122800_00_merged"},"vfov":180,"class":"Panorama","id":"panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565","hfovMin":"135%"},{"class":"PlayList","id":"mainPlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_7A137F4B_7108_E92F_41D1_28722041B956_camera","media":"this.panorama_7A137F4B_7108_E92F_41D1_28722041B956","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_7DA92AAA_7108_EB69_41BC_093948688DF3_camera","media":"this.panorama_7DA92AAA_7108_EB69_41BC_093948688DF3","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565_camera","media":"this.panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}]},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true,"id":"panorama_7A15E6AE_7108_FB69_41C5_FD87301F2565_camera"},{"class":"VideoResource","height":720,"id":"videores_6110D417_710B_1F27_419F_FD6F1C98AAF5","width":1280,"levels":["this.videolevel_63EF851E_7109_1929_41D5_707A3EBED186"]},{"useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":50,"pitch":-0.08,"image":"this.AnimatedImageResource_621AC581_7109_191B_41DB_DB4245931BA1","yaw":-172.2,"vfov":10.5,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"data":{"label":"GoToVhod"},"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"GoToVhod","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_61D9D0BB_710B_176F_41D8_8ECBA5BF1A0D"],"class":"HotspotPanoramaOverlay","id":"overlay_7CFAC88B_710F_3728_41D8_EE4BD0DD0D73"},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"label":"GoToImg_20211011_122233_00_merged"},"useHandCursor":true,"maps":[],"items":[{"rotationX":0.08,"roll":-127.29,"distance":50,"pitch":2.38,"image":"this.res_61077F40_710B_6919_41D7_ED9E18C99883","yaw":8.21,"data":{"label":"GoToImg_20211011_122233_00_merged"},"vfov":10.5,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"scaleMode":"fit_inside"}],"id":"overlay_7E3D6EF8_7109_68E9_41D4_7F306022B521","areas":["this.HotspotPanoramaOverlayArea_7E435F05_7109_691B_41D1_62790901D958"]},{"type":"video/mp4","framerate":25,"url":trans('videolevel_63EF851E_7109_1929_41D5_707A3EBED186.url'),"width":1280,"bitrate":1167,"class":"VideoResourceLevel","height":720,"id":"videolevel_63EF851E_7109_1929_41D5_707A3EBED186","posterURL":trans('videolevel_63EF851E_7109_1929_41D5_707A3EBED186.posterURL')},{"rowCount":3,"colCount":3,"levels":[{"height":300,"width":300,"class":"ImageResourceLevel","url":"media/res_61066F3D_710B_696B_41C3_4D16E26825A8_0.png"}],"frameDuration":62,"finalFrame":"first","frameCount":9,"class":"AnimatedImageResource","id":"AnimatedImageResource_621AC581_7109_191B_41DB_DB4245931BA1"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_61D9D0BB_710B_176F_41D8_8ECBA5BF1A0D","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true},{"class":"ImageResource","id":"res_61077F40_710B_6919_41D7_ED9E18C99883","levels":[{"height":118,"width":118,"class":"ImageResourceLevel","url":"media/res_61077F40_710B_6919_41D7_ED9E18C99883_0.png"}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7E435F05_7109_691B_41D1_62790901D958","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var aa = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return aa;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.21.js.map
})();
//Generated with v2022.2.21, Tue Feb 21 2023