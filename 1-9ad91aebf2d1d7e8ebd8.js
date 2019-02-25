(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return A});var r=a(0),i=a.n(r),n=a(6),o=a.n(n),s=a(153),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(156),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})},A=function(e){i.a.useContext;var t=i.a.useContext(f);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(165),i=a.n(r),n=a(166),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,c=s.scale},156:function(e,t,a){var r;e.exports=(r=a(159))&&r.default||r},157:function(e,t,a){"use strict";a(32);var r=a(0),i=a.n(r),n=a(154),o=a(160),s=a(155),l=o.a.main.withConfig({displayName:"layout__Contents",componentId:"sc-1xvv2zr-0"})(["margin-bottom:6em;a{transition:color 1s;}"]),c=o.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1xvv2zr-1"})(["text-align:center;font-size:0.75em;opacity:0.5;transition:opacity 1s;&:hover{opacity:1;}a{transition:color 1s;}"]);t.a=function(e){var t,a=e.location,r=e.title,o=e.children;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.a.createElement(n.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(n.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement(l,null,o),i.a.createElement(c,null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," &"," ",i.a.createElement("a",{href:"https://reactjs.org"},"React")))}},158:function(e,t,a){"use strict";var r=a(161),i=a(0),n=a.n(i),o=a(6),s=a.n(o),l=a(167),c=a.n(l),d=a(154),u="1025518380";function f(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,s=e.title;return n.a.createElement(d.StaticQuery,{query:u,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:r})}f.defaultProps={description:"",lang:"en",meta:[],keywords:[]},f.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.shape({name:s.a.string,content:s.a.string})),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=f},159:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),i=a.n(r),n=a(6),o=a.n(n),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Rem Lampa: On Web Development, Startups & Film Photography",description:"Rem Lampa is an engineer turned web developer.",author:"Rem Lampa"}}}}},164:function(e,t,a){"use strict";a(172);var r=a(174),i=a(0),n=a.n(i),o=a(154),s=a(175),l=a.n(s),c=a(160),d=a(155),u="487218607",f=c.a.div.withConfig({displayName:"bio__Wrapper",componentId:"dqgn4i-0"})(["display:flex;margin-bottom:",";"],Object(d.a)(2.5)),p=c.a.div.withConfig({displayName:"bio__Text",componentId:"dqgn4i-1"})(["font-size:0.85em;opacity:0.7;transition:opacity 1s;:hover{opacity:1;}p{margin-bottom:0.5em;}a{text-decoration:none;transition:color 1s;}"]);t.a=function(){return n.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement(f,null,n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement(p,null,n.a.createElement("p",null,"Written and maintained by ",n.a.createElement("strong",null,a),"."),n.a.createElement("p",null,"JavaScript Developer, Live Coder, Community Manager, Startup Founder, Film Photographer"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"twt")," ",n.a.createElement("a",{href:"https://medium.com/@"+r.medium},"med")," ",n.a.createElement("a",{href:"https://facebook.com/"+r.facebook},"fb")," ",n.a.createElement("a",{href:"https://linkedin.com/in/"+r.linkedin},"in")," ",n.a.createElement("a",{href:"https://github.com/"+r.github},"gh")," ",n.a.createElement("a",{href:"https://twitch.tv/"+r.twitch},"tv")," ",n.a.createElement("a",{href:"https://youtube.com/"+r.youtube},"yt")," ",n.a.createElement("a",{href:r.photography},"foto")," ",n.a.createElement("a",{href:"mailto://"+r.email},"@"))))},data:r})}},172:function(e,t,a){"use strict";a(173)("fixed",function(e){return function(){return e(this,"tt","","")}})},173:function(e,t,a){var r=a(11),i=a(16),n=a(17),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},174:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/57ee07994b0b52a4263ec11f5da5650f/d2d31/profile-pic.jpg",srcSet:"/static/57ee07994b0b52a4263ec11f5da5650f/d2d31/profile-pic.jpg 1x,\n/static/57ee07994b0b52a4263ec11f5da5650f/0b804/profile-pic.jpg 1.5x,\n/static/57ee07994b0b52a4263ec11f5da5650f/753c3/profile-pic.jpg 2x,\n/static/57ee07994b0b52a4263ec11f5da5650f/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Rem Lampa",social:{twitter:"remlampa",medium:"remlampa",facebook:"remlampa",linkedin:"remlampa",github:"remlampa",twitch:"remlampa",youtube:"remlampa",photography:"http://www.lansangan.com",email:"rem@remlampa.com"}}}}}},175:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(52)),s=r(a(162)),l=r(a(163)),c=r(a(0)),d=r(a(176)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},A=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){A.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),A.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+s+l+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,A=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E=e.itemProp,w="boolean"==typeof y?"lightgray":y,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:t,alt:this.state.isVisible?"":a,style:v,className:p};if(A){var j=A;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&c.default.createElement(g,(0,l.default)({src:j.base64},x)),j.tracedSVG&&c.default.createElement(g,(0,l.default)({src:j.tracedSVG},x)),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(g,{alt:a,title:t,src:j.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},j))}}))}if(h){var R=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete B.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(g,(0,l.default)({src:R.base64},x)),R.tracedSVG&&c.default.createElement(g,(0,l.default)({src:R.tracedSVG},x)),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(g,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=y;t.default=w},176:function(e,t,a){e.exports=a(177)()},177:function(e,t,a){"use strict";var r=a(178);function i(){}e.exports=function(){function e(e,t,a,i,n,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=i,a.PropTypes=a,a}},178:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=1-9ad91aebf2d1d7e8ebd8.js.map