(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(e,o,t){"use strict";t.r(o);var n=t("mXGw"),r=t.n(n),l=t("FN78"),i=t("6p84"),s=t("2Fzb"),a=t("1CDh"),c=t("s20r"),d=t.n(c),u=t("hDBU"),p=t("6mFX"),h=t.n(p),f=t("0VMN"),m=t.n(f),S=t("iSf/"),g={_currentlyFocusedNode:null,currentlyFocusedField:function(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput:function(e){null!==e&&(this._currentlyFocusedNode=e,document.activeElement!==e&&S.a.focus(e))},blurTextInput:function(e){null!==e&&(this._currentlyFocusedNode=null,document.activeElement===e&&S.a.blur(e))}},y=function(){g.blurTextInput(g.currentlyFocusedField())},b=t("Tcjm"),R=t("KAlO"),w=t.n(R),v=t("dGft"),E=t("wht2"),T=t.n(E),H=v.canUseDOM?window:{devicePixelRatio:void 0,innerHeight:void 0,innerWidth:void 0,screen:{height:void 0,width:void 0}},x={},C={},O=function(){function e(){}return e.get=function(e){return w()(x[e],"No dimension set for key "+e),x[e]},e.set=function(e){e&&(v.canUseDOM?w()(!1,"Dimensions cannot be set in the browser"):(x.screen=e.screen,x.window=e.window))},e._update=function(){x.window={fontScale:1,height:H.innerHeight,scale:H.devicePixelRatio||1,width:H.innerWidth},x.screen={fontScale:1,height:H.screen.height,scale:H.devicePixelRatio||1,width:H.screen.width},Array.isArray(C.change)&&C.change.forEach(function(e){return e(x)})},e.addEventListener=function(e,o){C[e]=C[e]||[],C[e].push(o)},e.removeEventListener=function(e,o){Array.isArray(C[e])&&(C[e]=C[e].filter(function(e){return e!==o}))},e}();O._update(),v.canUseDOM&&window.addEventListener("resize",T()(O._update,16),!1);var _={OS:"web",select:function(e){return"web"in e?e.web:e.default}},k=t("1XU+"),M=t.n(k),D={},I={Mixin:{scrollResponderMixinGetInitialState:function(){return{isTouching:!1,lastMomentumScrollBeginTime:0,lastMomentumScrollEndTime:0,observedScrollSinceBecomingResponder:!1,becameResponderWhileAnimating:!1}},scrollResponderHandleScrollShouldSetResponder:function(){return this.state.isTouching},scrollResponderHandleStartShouldSetResponder:function(){return!1},scrollResponderHandleStartShouldSetResponderCapture:function(e){return this.scrollResponderIsAnimating()},scrollResponderHandleResponderReject:function(){M()(!1,"ScrollView doesn't take rejection well - scrolls anyway")},scrollResponderHandleTerminationRequest:function(){return!this.state.observedScrollSinceBecomingResponder},scrollResponderHandleTouchEnd:function(e){var o=e.nativeEvent;this.state.isTouching=0!==o.touches.length,this.props.onTouchEnd&&this.props.onTouchEnd(e)},scrollResponderHandleResponderRelease:function(e){this.props.onResponderRelease&&this.props.onResponderRelease(e);var o=g.currentlyFocusedField();this.props.keyboardShouldPersistTaps||null==o||e.target===o||this.state.observedScrollSinceBecomingResponder||this.state.becameResponderWhileAnimating||(this.props.onScrollResponderKeyboardDismissed&&this.props.onScrollResponderKeyboardDismissed(e),g.blurTextInput(o))},scrollResponderHandleScroll:function(e){this.state.observedScrollSinceBecomingResponder=!0,this.props.onScroll&&this.props.onScroll(e)},scrollResponderHandleResponderGrant:function(e){this.state.observedScrollSinceBecomingResponder=!1,this.props.onResponderGrant&&this.props.onResponderGrant(e),this.state.becameResponderWhileAnimating=this.scrollResponderIsAnimating()},scrollResponderHandleScrollBeginDrag:function(e){this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(e)},scrollResponderHandleScrollEndDrag:function(e){this.props.onScrollEndDrag&&this.props.onScrollEndDrag(e)},scrollResponderHandleMomentumScrollBegin:function(e){this.state.lastMomentumScrollBeginTime=Date.now(),this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(e)},scrollResponderHandleMomentumScrollEnd:function(e){this.state.lastMomentumScrollEndTime=Date.now(),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(e)},scrollResponderHandleTouchStart:function(e){this.state.isTouching=!0,this.props.onTouchStart&&this.props.onTouchStart(e)},scrollResponderHandleTouchMove:function(e){this.props.onTouchMove&&this.props.onTouchMove(e)},scrollResponderIsAnimating:function(){return Date.now()-this.state.lastMomentumScrollEndTime<16||this.state.lastMomentumScrollEndTime<this.state.lastMomentumScrollBeginTime},scrollResponderGetScrollableNode:function(){return this.getScrollableNode?this.getScrollableNode():Object(b.a)(this)},scrollResponderScrollTo:function(e,o,t){if("number"==typeof e)console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");else{var n=e||D;e=n.x,o=n.y,t=n.animated}var r=this.scrollResponderGetScrollableNode(),l=e||0,i=o||0;"function"==typeof r.scroll?r.scroll({top:i,left:l,behavior:t?"smooth":"auto"}):(r.scrollLeft=l,r.scrollTop=i)},scrollResponderScrollWithoutAnimationTo:function(e,o){console.warn("`scrollResponderScrollWithoutAnimationTo` is deprecated. Use `scrollResponderScrollTo` instead"),this.scrollResponderScrollTo({x:e,y:o,animated:!1})},scrollResponderZoomTo:function(e,o){"ios"!==_.OS&&w()("zoomToRect is not implemented")},scrollResponderFlashScrollIndicators:function(){},scrollResponderScrollNativeHandleToKeyboard:function(e,o,t){this.additionalScrollOffset=o||0,this.preventNegativeScrollOffset=!!t,S.a.measureLayout(e,Object(b.a)(this.getInnerViewNode()),this.scrollResponderTextInputFocusError,this.scrollResponderInputMeasureAndScrollToKeyboard)},scrollResponderInputMeasureAndScrollToKeyboard:function(e,o,t,n){var r=O.get("window").height;this.keyboardWillOpenTo&&(r=this.keyboardWillOpenTo.endCoordinates.screenY);var l=o-r+n+this.additionalScrollOffset;this.preventNegativeScrollOffset&&(l=Math.max(0,l)),this.scrollResponderScrollTo({x:0,y:l,animated:!0}),this.additionalOffset=0,this.preventNegativeScrollOffset=!1},scrollResponderTextInputFocusError:function(e){console.error("Error measuring text field: ",e)},componentWillMount:function(){this.keyboardWillOpenTo=null,this.additionalScrollOffset=0},scrollResponderKeyboardWillShow:function(e){this.keyboardWillOpenTo=e,this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(e)},scrollResponderKeyboardWillHide:function(e){this.keyboardWillOpenTo=null,this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(e)},scrollResponderKeyboardDidShow:function(e){e&&(this.keyboardWillOpenTo=e),this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(e)},scrollResponderKeyboardDidHide:function(e){this.keyboardWillOpenTo=null,this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide(e)}}},W=t("cq6H"),B=t("W0B4");function z(){return(z=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var A=function(e){return{nativeEvent:{contentOffset:{get x(){return e.target.scrollLeft},get y(){return e.target.scrollTop}},contentSize:{get height(){return e.target.scrollHeight},get width(){return e.target.scrollWidth}},layoutMeasurement:{get height(){return e.target.offsetHeight},get width(){return e.target.offsetWidth}}},timeStamp:Date.now()}},V=function(e){var o,t;function n(){for(var o,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(o=e.call.apply(e,[this].concat(n))||this)._debouncedOnScrollEnd=T()(o._handleScrollEnd,100),o._state={isScrolling:!1,scrollLastTick:0},o._createPreventableScrollHandler=function(e){return function(t){o.props.scrollEnabled?e&&e(t):t.preventDefault()}},o._handleScroll=function(e){e.persist(),e.stopPropagation();var t=o.props.scrollEventThrottle;o._debouncedOnScrollEnd(e),o._state.isScrolling?o._shouldEmitScrollEvent(o._state.scrollLastTick,t)&&o._handleScrollTick(e):o._handleScrollStart(e)},o._setViewRef=function(e){o._viewRef=e},o}t=e,(o=n).prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t;var i=n.prototype;return i.setNativeProps=function(e){this._viewRef&&this._viewRef.setNativeProps(e)},i.render=function(){var e=this.props,o=e.scrollEnabled,t=e.style,n=(e.alwaysBounceHorizontal,e.alwaysBounceVertical,e.automaticallyAdjustContentInsets,e.bounces,e.bouncesZoom,e.canCancelContentTouches,e.centerContent,e.contentInset,e.contentInsetAdjustmentBehavior,e.contentOffset,e.decelerationRate,e.directionalLockEnabled,e.endFillColor,e.indicatorStyle,e.keyboardShouldPersistTaps,e.maximumZoomScale,e.minimumZoomScale,e.onMomentumScrollBegin,e.onMomentumScrollEnd,e.onScrollBeginDrag,e.onScrollEndDrag,e.overScrollMode,e.pinchGestureEnabled,e.removeClippedSubviews,e.scrollEventThrottle,e.scrollIndicatorInsets,e.scrollPerfTag,e.scrollsToTop,e.showsHorizontalScrollIndicator),i=e.showsVerticalScrollIndicator,s=(e.snapToInterval,e.snapToAlignment,e.zoomScale,function(e,o){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["scrollEnabled","style","alwaysBounceHorizontal","alwaysBounceVertical","automaticallyAdjustContentInsets","bounces","bouncesZoom","canCancelContentTouches","centerContent","contentInset","contentInsetAdjustmentBehavior","contentOffset","decelerationRate","directionalLockEnabled","endFillColor","indicatorStyle","keyboardShouldPersistTaps","maximumZoomScale","minimumZoomScale","onMomentumScrollBegin","onMomentumScrollEnd","onScrollBeginDrag","onScrollEndDrag","overScrollMode","pinchGestureEnabled","removeClippedSubviews","scrollEventThrottle","scrollIndicatorInsets","scrollPerfTag","scrollsToTop","showsHorizontalScrollIndicator","showsVerticalScrollIndicator","snapToInterval","snapToAlignment","zoomScale"])),a=!1===n||!1===i;return r.a.createElement(l.a,z({},s,{onScroll:this._handleScroll,onTouchMove:this._createPreventableScrollHandler(this.props.onTouchMove),onWheel:this._createPreventableScrollHandler(this.props.onWheel),ref:this._setViewRef,style:[t,!o&&j.scrollDisabled,a&&j.hideScrollbar]}))},i._handleScrollStart=function(e){this._state.isScrolling=!0,this._state.scrollLastTick=Date.now()},i._handleScrollTick=function(e){var o=this.props.onScroll;this._state.scrollLastTick=Date.now(),o&&o(A(e))},i._handleScrollEnd=function(e){var o=this.props.onScroll;this._state.isScrolling=!1,o&&o(A(e))},i._shouldEmitScrollEvent=function(e,o){var t=Date.now()-e;return o>0&&t>=o},n}(n.Component);V.defaultProps={scrollEnabled:!0,scrollEventThrottle:0},V.propTypes={};var j=W.a.create({scrollDisabled:{touchAction:"none"},hideScrollbar:{scrollbarWidth:"none"}}),N=t("4qQV");function P(){return(P=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function L(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(o){F(e,o,t[o])})}return e}function F(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var K={},G=m()({displayName:"ScrollView",propTypes:L({},N.a,{contentContainerStyle:N.a.style,horizontal:B.bool,keyboardDismissMode:Object(B.oneOf)(["none","interactive","on-drag"]),onContentSizeChange:B.func,onScroll:B.func,pagingEnabled:B.bool,refreshControl:B.element,scrollEnabled:B.bool,scrollEventThrottle:B.number,stickyHeaderIndices:Object(B.arrayOf)(B.number),style:N.a.style}),mixins:[I.Mixin],getInitialState:function(){return this.scrollResponderMixinGetInitialState()},flashScrollIndicators:function(){this.scrollResponderFlashScrollIndicators()},setNativeProps:function(e){this._scrollViewRef&&this._scrollViewRef.setNativeProps(e)},getScrollResponder:function(){return this},getScrollableNode:function(){return Object(b.a)(this._scrollViewRef)},getInnerViewNode:function(){return Object(b.a)(this._innerViewRef)},scrollTo:function(e,o,t){if("number"==typeof e)console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");else{var n=e||K;o=n.x,e=n.y,t=n.animated}this.getScrollResponder().scrollResponderScrollTo({x:o||0,y:e||0,animated:!1!==t})},scrollToEnd:function(e){var o=!1!==(e&&e.animated),t=this.props.horizontal,n=this.getScrollResponder(),r=n.scrollResponderGetScrollableNode(),l=t?r.scrollWidth:0,i=t?0:r.scrollHeight;n.scrollResponderScrollTo({x:l,y:i,animated:o})},scrollWithoutAnimationTo:function(e,o){void 0===e&&(e=0),void 0===o&&(o=0),console.warn("`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead"),this.scrollTo({x:o,y:e,animated:!1})},render:function(){var e=this.props,o=e.contentContainerStyle,t=e.horizontal,n=e.onContentSizeChange,i=e.refreshControl,s=e.stickyHeaderIndices,a=e.pagingEnabled,c=(e.keyboardDismissMode,e.onScroll,function(e,o){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["contentContainerStyle","horizontal","onContentSizeChange","refreshControl","stickyHeaderIndices","pagingEnabled","keyboardDismissMode","onScroll"])),d={};n&&(d={onLayout:this._handleContentOnLayout});var u=!t&&Array.isArray(s),p=u||a?r.a.Children.map(this.props.children,function(e,o){var t=u&&s.indexOf(o)>-1;return null!=e&&(t||a)?r.a.createElement(l.a,{style:W.a.compose(t&&U.stickyHeader,a&&U.pagingEnabledChild)},e):e}):this.props.children,h=r.a.createElement(l.a,P({},d,{children:p,collapsable:!1,ref:this._setInnerViewRef,style:W.a.compose(t&&U.contentContainerHorizontal,o)})),f=t?U.baseHorizontal:U.baseVertical,m=t?U.pagingEnabledHorizontal:U.pagingEnabledVertical,S=L({},c,{style:[f,a&&m,this.props.style],onTouchStart:this.scrollResponderHandleTouchStart,onTouchMove:this.scrollResponderHandleTouchMove,onTouchEnd:this.scrollResponderHandleTouchEnd,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onScroll:this._handleScroll,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderReject:this.scrollResponderHandleResponderReject}),g=V;return w()(void 0!==g,"ScrollViewClass must not be undefined"),i?r.a.cloneElement(i,{style:S.style},r.a.createElement(g,P({},S,{ref:this._setScrollViewRef,style:f}),h)):r.a.createElement(g,P({},S,{ref:this._setScrollViewRef}),h)},_handleContentOnLayout:function(e){var o=e.nativeEvent.layout,t=o.width,n=o.height;this.props.onContentSizeChange(t,n)},_handleScroll:function(e){"on-drag"===this.props.keyboardDismissMode&&y(),this.scrollResponderHandleScroll(e)},_setInnerViewRef:function(e){this._innerViewRef=e},_setScrollViewRef:function(e){this._scrollViewRef=e}}),q={flexGrow:1,flexShrink:1,transform:[{translateZ:0}],WebkitOverflowScrolling:"touch"},U=W.a.create({baseVertical:L({},q,{flexDirection:"column",overflowX:"hidden",overflowY:"auto"}),baseHorizontal:L({},q,{flexDirection:"row",overflowX:"auto",overflowY:"hidden"}),contentContainerHorizontal:{flexDirection:"row"},stickyHeader:{position:"sticky",top:0,zIndex:10},pagingEnabledHorizontal:{scrollSnapType:"x mandatory"},pagingEnabledVertical:{scrollSnapType:"y mandatory"},pagingEnabledChild:{scrollSnapAlign:"start"}}),Z=G,X=t("oaGM"),J=t("crBz"),Y=t("sWhC"),Q=new h.a,$=function(e){var o=e.children,t=e.title,r=e.subtitle,s=e.shouldRestoreScrollPosition,a=e.showBackLink,c=i.d(),p=Object(u.default)(c,2),h=p[0],f=p[1],m=null!=h&&h.width>700;n.useEffect(function(){document.title=null!=t?d()(t)?t.join():t:"Arrow Research"},[t]);var S=i.e(function(e){return{width:m?700:350}},[m]),g=i.f(function(e){return{root:{backgroundColor:e.backgroundColor,flexGrow:1},children:{alignItems:"flex-start",paddingBottom:80},header:{alignItems:"center"},wrapper:{alignItems:"center",flexBasis:0}}}),y=n.useMemo(function(){return n.createElement(te,{showBackLink:a,title:t,subtitle:r})},[a,t,r]),b=n.useMemo(function(){return n.createElement(ee,{layoutStyle:S})},[S]),R=n.useRef(null);n.useEffect(function(){if(Q.has(window.location.pathname)){var e=Q.get(window.location.pathname);s?null!=R.current&&R.current.scrollTo({y:e,x:0,animated:!1}):Q.set(window.location.pathname,0)}},[]);var w=n.useCallback(function(e){var o=e.nativeEvent.contentOffset.y;Q.set(window.location.pathname,o)});return n.createElement(l.a,{ref:f,style:g.root},n.createElement(Z,{ref:R,scrollEventThrottle:100,onScroll:w,contentContainerStyle:g.wrapper},n.createElement(l.a,{style:[S,g.header]},y),n.createElement(l.a,{style:[S,g.children]},o)),b)},ee=function(e){var o=e.layoutStyle,t=i.f(function(e){return{root:{alignItems:"center",paddingVertical:20,borderTopWidth:1,borderTopColor:e.dimmedColor},wrapper:{flexDirection:"row",alignItems:"center"},credit:{flexGrow:1},creditText:{color:e.labelColor,fontSize:"10pt",fontWeight:"600"},creditTextEm:{color:e.labelColor,fontWeight:"900"}}}),r=s.i();return n.createElement(l.a,{style:t.root},n.createElement(l.a,{style:[t.wrapper,o]},n.createElement(l.a,{style:t.credit},n.createElement(X.a,{style:t.creditText},"by ",n.createElement(X.a,{style:t.creditTextEm},"ARROW"),"RESEARCH")),r.lightTheme===r.darkTheme?null:n.createElement(i.b,null)))},oe=function(){i.g();var e=i.f(function(e){return{rootView:{alignItems:"center"},textView:{flexDirection:"row"},titleText:{color:e.titleColor,fontSize:"16pt",fontWeight:"600"},titleTextBold:{color:e.titleColor,fontSize:"16pt",fontWeight:"900"}}});return n.createElement(n.Fragment,null,n.createElement(l.a,{style:e.rootView},n.createElement(Y.a,{width:180})))},te=function(e){var o=e.title,t=e.subtitle,r=e.showBackLink,s=i.f(function(e){return{root:{paddingTop:50,paddingBottom:50},backLink:{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"10pt",fontWeight:"700",textDecorationLine:"none"},titleRoot:{paddingTop:50,paddingBottom:10,flexDirection:"row"},titleText:{color:e.titleColor,fontSize:"22pt",fontWeight:"600"},titleTextBold:{color:e.titleColor,fontSize:"22pt",fontWeight:"900"}}}),a=null;return a=null!=o?n.createElement(X.a,{style:s.titleText},o):n.createElement(oe,null),n.createElement(l.a,{style:s.root},r?n.createElement(i.a,{href:"/",style:s.backLink},n.createElement(J.ArrowLeft,{size:16})," BACK HOME"):null,n.createElement(l.a,{style:s.titleRoot},a),t)};o.default=function(e){var o=s.g(function(e){return{me:{paddingVertical:50}}});return n.createElement($,{shouldRestoreScrollPosition:e.shouldRestoreScrollPosition},n.createElement(l.a,{style:o.me},n.createElement(a.a,null,n.createElement("p",null,n.createElement("em",null,"ARROW"),"RESEARCH is a group of software engineers who do love working on challenging projects. We specialize in building products for ",n.createElement("em",null,"data management")," and ",n.createElement("em",null,"development tools"),". We know how to incrementally improve ",n.createElement("em",null,"legacy systems")," without disruptions."),n.createElement("p",null,"We prioritize working on robust and maintainable software and therefore our technology of choice is ",n.createElement("em",null,"ReasonML/OCaml"),". We also have expertise in working with ",n.createElement("em",null,"JavaScript"),","," ",n.createElement("em",null,"Python"),", ",n.createElement("em",null,"Erlang"),", ",n.createElement("em",null,"C")," programming languages."),n.createElement("p",null,"Contact us at"," ",n.createElement("em",null,n.createElement(a.b,{href:"mailto:hello@arrowresearch.net"},"hello@arrowresearch.net")),"."))))}},TqC3:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])}},[["TqC3","5d41","9da1"]]]);