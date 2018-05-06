(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{62:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"spring-security-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-security-使用","aria-hidden":"true"}},[t._v("#")]),t._v(" Spring Security 使用")]),a("h2",{attrs:{id:"增加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 增加依赖")]),a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-security"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h2",{attrs:{id:"response-多了三个头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-多了三个头","aria-hidden":"true"}},[t._v("#")]),t._v(" response 多了三个头")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("X-Content-Type-Options:nosniff\nX-Frame-Options:DENY\nX-XSS-Protection:1; mode=block\n")])]),a("h2",{attrs:{id:"指定认证方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定认证方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 指定认证方式")]),a("p",[t._v("使用basic认证和普通的页面输入认证，只能选一种，否则返回401的时候还会重定向到登录页面。")]),a("ul",[a("li",[t._v("basis 认证")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("httpBasic")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("and")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("ul",[a("li",[t._v("页面认证")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("formLogin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loginPage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/login"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("permitAll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("and")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("完整：")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnableWebSecurity")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WebSecurityConfig")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WebSecurityConfigurerAdapter")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configure")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpSecurity http"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" Exception "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),a("span",{attrs:{class:"token comment"}},[t._v("// 先放开")]),t._v("\n    \thttp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("authorizeRequests")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("anyRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("permitAll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \t\n"),a("span",{attrs:{class:"token comment"}},[t._v("//        http")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//            .authorizeRequests()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('//                .antMatchers("/", "/home","/resources/**", "/favicon.ico").permitAll()')]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//                .anyRequest()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//                .authenticated()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//                .and()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//                // basic返回401 ，【不能】配置loginpage")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//                .httpBasic()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//                .and()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//              // 不是http认证的时候，返回302，需要配置loginPage链接")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("////            .formLogin()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('////                .loginPage("/login")')]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("////                .permitAll()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("////                .and()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//            .logout()")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//                .permitAll();")]),t._v("\n        \n        "),a("span",{attrs:{class:"token comment"}},[t._v("//http.csrf().disable();")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("configure")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AuthenticationManagerBuilder auth"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" Exception "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        auth\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("inMemoryAuthentication")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("withUser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"xwjie"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("password")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"xwjie"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("roles")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"USER"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"修改-x-frame-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-x-frame-options","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 X-Frame-Options")]),a("p",[t._v("spring security 默认的 "),a("code",[t._v("X-Frame-Options")]),t._v(" 是 "),a("code",[t._v("deny")]),t._v(" ，修改为 "),a("code",[t._v("SAMEORIGIN")]),t._v(" ，否则连h2都无法嵌入显示了。如下：")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("headers")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("frameOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sameOrigin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);