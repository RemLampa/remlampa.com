(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});n(17);var a=n(0),r=n.n(a),o=n(209),i=n(231),c=n(218),s=n(214),l=n(215),u=n(210);t.default=function(e){var t=e.data,n=e.pageContext,a=e.location,m=t.markdownRemark,p=t.site.siteMetadata.title,d=n.previous,A=n.next,f={identifier:m.id,title:m.frontmatter.title};return r.a.createElement(s.a,{location:a,title:p},r.a.createElement(l.a,{title:m.frontmatter.title,description:m.excerpt}),r.a.createElement("h1",null,m.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},m.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.html}}),r.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),r.a.createElement(c.a,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:"5em"}},r.a.createElement("li",null,d&&r.a.createElement(o.a,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),r.a.createElement("li",null,A&&r.a.createElement(o.a,{to:A.fields.slug,rel:"next"},A.frontmatter.title," →"))),r.a.createElement(i.DiscussionEmbed,{shortname:"remlampa",config:f}))};var m="2761936148"},209:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),o=n(65),i=n.n(o);n.d(t,"a",function(){return i.a});n(211),n(8).default.enqueue;var c=r.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:n,render:a||o,staticQueryData:e})})}},210:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l});var a=n(221),r=n.n(a),o=n(222),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var s=c.rhythm,l=c.scale},211:function(e,t,n){var a;e.exports=(a=n(212))&&a.default||a},212:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),o=n(95);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},214:function(e,t,n){"use strict";n(17);var a=n(0),r=n.n(a),o=n(209),i=n(213),c=n(210),s=i.a.main.withConfig({displayName:"layout__Contents",componentId:"sc-1lwsgif-0"})(["margin-bottom:6em;a{transition:color 1s;}.gatsby-highlight{margin:2rem 0;}hr{margin-top:5rem;}"]),l=i.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1lwsgif-1"})(["text-align:center;font-size:0.75em;opacity:0.5;transition:opacity 1s;&:hover{opacity:1;}a{transition:color 1s;}"]);t.a=function(e){var t,n=e.location,a=e.title,i=e.children;return t="/"===n.pathname?r.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},r.a.createElement("header",null,t),r.a.createElement(s,null,i),r.a.createElement(l,null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," &"," ",r.a.createElement("a",{href:"https://reactjs.org"},"React")))}},215:function(e,t,n){"use strict";var a=n(216),r=n(0),o=n.n(r),i=n(223),c=n.n(i),s=n(209),l="911020353";function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,u=e.title;return o.a.createElement(s.b,{query:l,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{property:"og:image",content:e.site.siteMetadata.image.src},{property:"og:image:height",content:e.site.siteMetadata.image.height},{property:"og:image:width",content:e.site.siteMetadata.image.width},{property:"og:image:alt",content:e.site.siteMetadata.image.alt},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={description:"",lang:"en",meta:[],keywords:[]},t.a=u},216:function(e){e.exports={data:{site:{siteMetadata:{title:"Rem Lampa: On Web Development, Startups & Film Photography",description:"Rem Lampa is an engineer turned web developer.",author:"Rem Lampa",image:{src:"https://www.remlampa.com/profile-pic.jpg",height:"513",width:"513",alt:"Rem Lampa"}}}}}},218:function(e,t,n){"use strict";n(219);var a=n(220),r=n(0),o=n.n(r),i=n(209),c=n(225),s=n.n(c),l=n(213),u=n(226),m=n(228),p=n(229),d=n(210),A="2150127054",f=l.a.div.withConfig({displayName:"bio__Wrapper",componentId:"sc-7zztae-0"})(["display:flex;margin-bottom:",";"],Object(d.a)(2.5)),h=l.a.div.withConfig({displayName:"bio__Text",componentId:"sc-7zztae-1"})(["font-size:0.85em;opacity:0.7;transition:opacity 1s;:hover{opacity:1;}p{margin-bottom:0.5em;}a{text-decoration:none;transition:color 1s;}"]),g=l.a.p.withConfig({displayName:"bio__SocialLinks",componentId:"sc-7zztae-2"})(["font-size:1.3em;opacity:0.8;a{margin-right:0.5em;}"]);t.a=function(){return o.a.createElement(i.b,{query:A,render:function(e){var t=e.site.siteMetadata,n=t.author,a=t.social;return o.a.createElement(f,null,o.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:n,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement(h,null,o.a.createElement("p",null,"Written and maintained by ",o.a.createElement("strong",null,n),"."),o.a.createElement("p",null,"JavaScript Developer, Live Coder, Community Manager, Startup Founder, Film Photographer"),o.a.createElement(g,null,o.a.createElement("a",{href:"https://twitter.com/"+a.twitter},o.a.createElement(u.a,{icon:m.h})),o.a.createElement("a",{href:"https://medium.com/@"+a.medium},o.a.createElement(u.a,{icon:m.f})),o.a.createElement("a",{href:"https://facebook.com/"+a.facebook},o.a.createElement(u.a,{icon:m.b})),o.a.createElement("a",{href:"https://linkedin.com/in/"+a.linkedin},o.a.createElement(u.a,{icon:m.e})),o.a.createElement("a",{href:"https://github.com/"+a.github},o.a.createElement(u.a,{icon:m.c})),o.a.createElement("a",{href:"https://twitch.tv/"+a.twitch},o.a.createElement(u.a,{icon:m.g})),o.a.createElement("a",{href:"https://youtube.com/"+a.youtube},o.a.createElement(u.a,{icon:m.i})),o.a.createElement("a",{href:a.photography},o.a.createElement(u.a,{icon:m.a})),o.a.createElement("a",{href:"https://instagram.com/"+a.instagram},o.a.createElement(u.a,{icon:m.d})),o.a.createElement("a",{href:"mailto:"+a.email},o.a.createElement(u.a,{icon:p.a})))))},data:a})}},220:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAEFAgME/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAHWdr5XoPGNoDdYHn//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADESEjMTL/2gAIAQEAAQUCoGWZcCU+yARF7ccZ1P/EABcRAQEBAQAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8BDIcn/8QAFxEBAQEBAAAAAAAAAAAAAAAAAhARMv/aAAgBAgEBPwFLFH1P/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREQUQAgMf/aAAgBAQAGPwJWMBfYdaGP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAIRAxUWH/2gAIAQEAAT8hZ9gmzh2xW1JBxheqGjLpizap/9oADAMBAAIAAwAAABAo137/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxBIH//EABoRAAICAwAAAAAAAAAAAAAAAAABETFBYYH/2gAIAQIBAT8QfryQU8FR/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITFhQXGBodH/2gAIAQEAAT8QB365Y+oI1A0xhgDbUxchG7riAAFwZAvpCsb5IKVp2QipSizwxK2gg13n/9k=",width:50,height:50,src:"/static/57ee07994b0b52a4263ec11f5da5650f/9b664/profile-pic.jpg",srcSet:"/static/57ee07994b0b52a4263ec11f5da5650f/9b664/profile-pic.jpg 1x,\n/static/57ee07994b0b52a4263ec11f5da5650f/06a10/profile-pic.jpg 1.5x,\n/static/57ee07994b0b52a4263ec11f5da5650f/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Rem Lampa",social:{twitter:"remlampa",medium:"remlampa",facebook:"remlampa",linkedin:"remlampa",github:"remlampa",twitch:"remlampa",youtube:"remlampa",photography:"http://www.lansangan.com",instagram:"remlampa",email:"rem@remlampa.com"}}}}}},224:function(e,t,n){"use strict";n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var r=this,o=arguments,i=n&&!a;window.clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(r,o)},t),i&&e.apply(r,o)}}},231:function(e,t,n){"use strict";n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n(232),r=n(233),o=n(235);t.CommentCount=a.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},232:function(e,t,n){"use strict";n(134),n(91),n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=(a=o)&&a.__esModule?a:{default:a},c=n(224);var s=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},233:function(e,t,n){"use strict";n(234),n(66),n(92),n(13),n(134),n(91),n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=(a=o)&&a.__esModule?a:{default:a};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},234:function(e,t,n){"use strict";var a=n(4),r=n(19),o=n(35),i=n(140),c=n(70),s=n(7),l=n(94).f,u=n(97).f,m=n(9).f,p=n(146).trim,d=a.Number,A=d,f=d.prototype,h="Number"==o(n(54)(f)),g="trim"in String.prototype,b=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,o=(t=g?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var i,s=t.slice(2),l=0,u=s.length;l<u;l++)if((i=s.charCodeAt(l))<48||i>r)return NaN;return parseInt(s,a)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(h?s(function(){f.valueOf.call(n)}):"Number"!=o(n))?i(new A(b(t)),n,d):b(t)};for(var y,w=n(10)?l(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)r(A,y=w[E])&&!r(d,y)&&m(d,y,u(A,y));d.prototype=f,f.constructor=d,n(12)(a,"Number",d)}},235:function(e,t,n){"use strict";n(134),n(91),n(90),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=(a=o)&&a.__esModule?a:{default:a},c=n(224);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b7a8829deead878fcd00.js.map