(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(0),r=a.n(n),i=a(217),o=a(225),A=a(222),c=a(223),l=a(218);t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title,m=t.site.siteMetadata.subTitle,s=t.allMarkdownRemark.edges;return r.a.createElement(A.a,{location:a,title:n,subTitle:m},r.a.createElement(c.a,{title:"Home",keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(o.a,null),s.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},r.a.createElement(i.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),r.a.createElement("small",null,t.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))};var m="4269431907"},217:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),i=a(70),o=a.n(i);a.d(t,"a",function(){return o.a});a(219),a(10).default.enqueue;var A=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(A.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},218:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(228),r=a.n(n),i=a(229),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var A=new r.a(o.a);var c=A.rhythm,l=A.scale},219:function(e,t,a){var n;e.exports=(n=a(220))&&n.default||n},220:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(102);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},222:function(e,t,a){"use strict";a(18);var n=a(0),r=a.n(n),i=a(217),o=a(221),A=a(218),c=o.a.main.withConfig({displayName:"layout__Contents",componentId:"sc-1lwsgif-0"})(["margin-bottom:6em;a{transition:color 1s;}.gatsby-highlight{margin:2rem 0;}hr{margin-top:5rem;}"]),l=o.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1lwsgif-1"})(["text-align:center;font-size:0.75em;opacity:0.5;transition:opacity 1s;&:hover{opacity:1;}a{transition:color 1s;}"]);t.a=function(e){var t,a=e.location,n=e.title,o=e.subTitle,m=e.children;return t="/"===a.pathname?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:Object.assign({},Object(A.b)(1.5),{marginTop:0,marginBottom:Object(A.a)(.25)})},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("h3",{style:{marginBottom:Object(A.a)(1.5),marginTop:0}},o)):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(A.a)(.25)}},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("h5",{style:{marginTop:0}},o)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(A.a)(24),padding:Object(A.a)(1.5)+" "+Object(A.a)(.75)}},r.a.createElement("header",null,t),r.a.createElement(c,null,m),r.a.createElement(l,null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," &"," ",r.a.createElement("a",{href:"https://reactjs.org"},"React")))}},223:function(e,t,a){"use strict";var n=a(224),r=a(0),i=a.n(r),o=a(230),A=a.n(o),c=a(217),l="966423438";function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,m=e.title;return i.a.createElement(c.b,{query:l,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(A.a,{htmlAttributes:{lang:a},title:m,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:m},{property:"og:description",content:n},{property:"og:url",content:e.site.siteMetadata.siteUrl},{property:"og:type",content:"website"},{property:"og:image",content:e.site.siteMetadata.image.src},{property:"og:image:height",content:e.site.siteMetadata.image.height},{property:"og:image:width",content:e.site.siteMetadata.image.width},{property:"og:image:alt",content:e.site.siteMetadata.image.alt},{property:"fb:app_id",content:e.site.siteMetadata.facebook.appId},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:m},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={description:"",lang:"en",meta:[],keywords:[]},t.a=m},224:function(e){e.exports={data:{site:{siteMetadata:{title:"Rem Lampa",description:"Rem Lampa is an engineer turned web developer.",siteUrl:"https://www.remlampa.com",author:"Rem Lampa",image:{src:"https://www.remlampa.com/profile-pic.jpg",height:"513",width:"513",alt:"Rem Lampa"},facebook:{appId:"475047029994711"}}}}}},225:function(e,t,a){"use strict";a(226);var n=a(227),r=a(0),i=a.n(r),o=a(217),A=a(232),c=a.n(A),l=a(221),m=a(233),s=a(234),p=a(235),d=a(218),g="2150127054",u=l.a.div.withConfig({displayName:"bio__Wrapper",componentId:"sc-7zztae-0"})(["display:flex;margin-bottom:",";"],Object(d.a)(2.5)),h=l.a.div.withConfig({displayName:"bio__Text",componentId:"sc-7zztae-1"})(["font-size:0.85em;opacity:0.7;transition:opacity 1s;:hover{opacity:1;}p{margin-bottom:0.5em;}a{text-decoration:none;transition:color 1s;}"]),f=l.a.p.withConfig({displayName:"bio__SocialLinks",componentId:"sc-7zztae-2"})(["font-size:1.3em;opacity:0.8;a{margin-right:0.5em;}"]);t.a=function(){return i.a.createElement(o.b,{query:g,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement(u,null,i.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement(h,null,i.a.createElement("p",null,"Written and maintained by ",i.a.createElement("strong",null,a),"."),i.a.createElement("p",null,"JavaScript Developer, Live Coder, Community Manager, Startup Founder, Film Photographer"),i.a.createElement(f,null,i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},i.a.createElement(m.a,{icon:s.h})),i.a.createElement("a",{href:"https://medium.com/@"+n.medium},i.a.createElement(m.a,{icon:s.f})),i.a.createElement("a",{href:"https://facebook.com/"+n.facebook},i.a.createElement(m.a,{icon:s.b})),i.a.createElement("a",{href:"https://linkedin.com/in/"+n.linkedin},i.a.createElement(m.a,{icon:s.e})),i.a.createElement("a",{href:"https://github.com/"+n.github},i.a.createElement(m.a,{icon:s.c})),i.a.createElement("a",{href:"https://twitch.tv/"+n.twitch},i.a.createElement(m.a,{icon:s.g})),i.a.createElement("a",{href:"https://youtube.com/"+n.youtube},i.a.createElement(m.a,{icon:s.i})),i.a.createElement("a",{href:n.photography},i.a.createElement(m.a,{icon:s.a})),i.a.createElement("a",{href:"https://instagram.com/"+n.instagram},i.a.createElement(m.a,{icon:s.d})),i.a.createElement("a",{href:"mailto:"+n.email},i.a.createElement(m.a,{icon:p.a})))))},data:n})}},227:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAEFAgME/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAHWdr5XoPGNoDdYHn//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADESEjMTL/2gAIAQEAAQUCoGWZcCU+yARF7ccZ1P/EABcRAQEBAQAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8BDIcn/8QAFxEBAQEBAAAAAAAAAAAAAAAAAhARMv/aAAgBAgEBPwFLFH1P/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREQUQAgMf/aAAgBAQAGPwJWMBfYdaGP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAIRAxUWH/2gAIAQEAAT8hZ9gmzh2xW1JBxheqGjLpizap/9oADAMBAAIAAwAAABAo137/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxBIH//EABoRAAICAwAAAAAAAAAAAAAAAAABETFBYYH/2gAIAQIBAT8QfryQU8FR/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITFhQXGBodH/2gAIAQEAAT8QB365Y+oI1A0xhgDbUxchG7riAAFwZAvpCsb5IKVp2QipSizwxK2gg13n/9k=",width:50,height:50,src:"/static/57ee07994b0b52a4263ec11f5da5650f/9b664/profile-pic.jpg",srcSet:"/static/57ee07994b0b52a4263ec11f5da5650f/9b664/profile-pic.jpg 1x,\n/static/57ee07994b0b52a4263ec11f5da5650f/06a10/profile-pic.jpg 1.5x,\n/static/57ee07994b0b52a4263ec11f5da5650f/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Rem Lampa",social:{twitter:"remlampa",medium:"remlampa",facebook:"remlampa",linkedin:"remlampa",github:"remlampa",twitch:"remlampa",youtube:"remlampa",photography:"http://www.lansangan.com",instagram:"remlampa",email:"rem@remlampa.com"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b8febdc30ef0639c2901.js.map