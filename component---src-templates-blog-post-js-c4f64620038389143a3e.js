(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(32);var n=a(0),r=a.n(n),i=a(154),o=a(194),A=a(169),c=a(161),l=a(162),s=a(155);t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,m=t.markdownRemark,u=t.site.siteMetadata.title,d=a.previous,p=a.next,g={identifier:m.id,title:m.frontmatter.title};return r.a.createElement(c.a,{location:n,title:u},r.a.createElement(l.a,{title:m.frontmatter.title,description:m.excerpt}),r.a.createElement("h1",null,m.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(s.b)(-.2),{display:"block",marginBottom:Object(s.a)(1),marginTop:Object(s.a)(-1)})},m.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.html}}),r.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)}}),r.a.createElement(A.a,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:"5em"}},r.a.createElement("li",null,d&&r.a.createElement(i.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),r.a.createElement("li",null,p&&r.a.createElement(i.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))),r.a.createElement(o.DiscussionEmbed,{shortname:"remlampa",config:g}))};var m="2761936148"},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return d}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(153),c=a.n(A);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return A.withPrefix}),a.d(t,"navigate",function(){return A.navigate}),a.d(t,"push",function(){return A.push}),a.d(t,"replace",function(){return A.replace}),a.d(t,"navigateTo",function(){return A.navigateTo});var l=a(156),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var u=r.a.createContext({}),d=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(178),r=a.n(n),i=a(179),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var A=new r.a(o.a);var c=A.rhythm,l=A.scale},156:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},158:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(54),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},161:function(e,t,a){"use strict";a(32);var n=a(0),r=a.n(n),i=a(154),o=a(160),A=a(155),c=o.a.main.withConfig({displayName:"layout__Contents",componentId:"sc-1lwsgif-0"})(["margin-bottom:6em;a{transition:color 1s;}"]),l=o.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1lwsgif-1"})(["text-align:center;font-size:0.75em;opacity:0.5;transition:opacity 1s;&:hover{opacity:1;}a{transition:color 1s;}"]);t.a=function(e){var t,a=e.location,n=e.title,o=e.children;return t="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(A.b)(1.5),{marginBottom:Object(A.a)(1.5),marginTop:0})},r.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(A.a)(24),padding:Object(A.a)(1.5)+" "+Object(A.a)(.75)}},r.a.createElement("header",null,t),r.a.createElement(c,null,o),r.a.createElement(l,null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," &"," ",r.a.createElement("a",{href:"https://reactjs.org"},"React")))}},162:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),o=a(4),A=a.n(o),c=a(180),l=a.n(c),s=a(154),m="1025518380";function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,A=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:A,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:A},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={description:"",lang:"en",meta:[],keywords:[]},u.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.arrayOf(A.a.shape({name:A.a.string,content:A.a.string})),keywords:A.a.arrayOf(A.a.string),title:A.a.string.isRequired},t.a=u},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Rem Lampa: On Web Development, Startups & Film Photography",description:"Rem Lampa is an engineer turned web developer.",author:"Rem Lampa"}}}}},169:function(e,t,a){"use strict";a(170);var n=a(172),r=a(0),i=a.n(r),o=a(154),A=a(173),c=a.n(A),l=a(177),s=a.n(l),m=a(160),u=a(155),d="487218607",p=m.a.div.withConfig({displayName:"bio__Wrapper",componentId:"sc-7zztae-0"})(["display:flex;margin-bottom:",";"],Object(u.a)(2.5)),g=m.a.div.withConfig({displayName:"bio__Text",componentId:"sc-7zztae-1"})(["font-size:0.85em;opacity:0.7;transition:opacity 1s;:hover{opacity:1;}p{margin-bottom:0.5em;}a{text-decoration:none;transition:color 1s;}"]);t.a=function(){return i.a.createElement(o.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement(p,null,i.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(u.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement(g,null,i.a.createElement("p",null,"Written and maintained by ",i.a.createElement("strong",null,a),"."),i.a.createElement("p",null,"JavaScript Developer, Live Coder, Community Manager, Startup Founder, Film Photographer"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"twt")," ",i.a.createElement("a",{href:"https://medium.com/@"+n.medium},"med")," ",i.a.createElement("a",{href:"https://facebook.com/"+n.facebook},"fb")," ",i.a.createElement("a",{href:"https://linkedin.com/in/"+n.linkedin},"in")," ",i.a.createElement("a",{href:"https://github.com/"+n.github},"gh")," ",i.a.createElement("a",{href:"https://twitch.tv/"+n.twitch},"tv")," ",i.a.createElement("a",{href:"https://youtube.com/"+n.youtube},"yt")," ",i.a.createElement("a",{href:n.photography},"foto")," ",i.a.createElement("span",null,i.a.createElement(s.a,{email:n.email},"mail")))))},data:n})}},172:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAEFAgME/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAHWdr5XoPGNoDdYHn//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADESEjMTL/2gAIAQEAAQUCoGWZcCU+yARF7ccZ1P/EABcRAQEBAQAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8BDIcn/8QAFxEBAQEBAAAAAAAAAAAAAAAAAhARMv/aAAgBAgEBPwFLFH1P/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREQUQAgMf/aAAgBAQAGPwJWMBfYdaGP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAIRAxUWH/2gAIAQEAAT8hZ9gmzh2xW1JBxheqGjLpizap/9oADAMBAAIAAwAAABAo137/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxBIH//EABoRAAICAwAAAAAAAAAAAAAAAAABETFBYYH/2gAIAQIBAT8QfryQU8FR/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITFhQXGBodH/2gAIAQEAAT8QB365Y+oI1A0xhgDbUxchG7riAAFwZAvpCsb5IKVp2QipSizwxK2gg13n/9k=",width:50,height:50,src:"/static/57ee07994b0b52a4263ec11f5da5650f/d2d31/profile-pic.jpg",srcSet:"/static/57ee07994b0b52a4263ec11f5da5650f/d2d31/profile-pic.jpg 1x,\n/static/57ee07994b0b52a4263ec11f5da5650f/0b804/profile-pic.jpg 1.5x,\n/static/57ee07994b0b52a4263ec11f5da5650f/753c3/profile-pic.jpg 2x,\n/static/57ee07994b0b52a4263ec11f5da5650f/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Rem Lampa",social:{twitter:"remlampa",medium:"remlampa",facebook:"remlampa",linkedin:"remlampa",github:"remlampa",twitch:"remlampa",youtube:"remlampa",photography:"http://www.lansangan.com",email:"rem@remlampa.com"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c4f64620038389143a3e.js.map