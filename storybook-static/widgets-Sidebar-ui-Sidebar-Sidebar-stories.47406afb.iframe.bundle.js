"use strict";(self.webpackChunkcourse_ulbi=self.webpackChunkcourse_ulbi||[]).push([[248],{"./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Sidebar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js"),ThemeSwitcher=__webpack_require__("./src/shared/ui/ThemeSwitcher/index.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx");const LangSwitcher=({className})=>{const{t,i18n}=(0,es.Bd)();return(0,jsx_runtime.jsx)(Button.$,{onClick:()=>{i18n.changeLanguage("ru"===i18n.language?"en":"ru")},theme:Button.o.CLEAR,className:(0,classNames.x)("",{},[className]),children:t("Язык")})};LangSwitcher.__docgenInfo={description:"",methods:[],displayName:"LangSwitcher",props:{className:{required:!1,tsType:{name:"string"},description:""}}};var PageError=__webpack_require__("./src/widgets/PageError/ui/PageError.tsx");class ErrorBoundary extends react.Component{constructor(props){super(props),this.state={hasError:!1}}static getDerivedStateFromError(error){return{hasError:!0}}componentDidCatch(error,errorInfo){console.log(error,errorInfo)}render(){const{hasError}=this.state,{children}=this.props;return hasError?(0,jsx_runtime.jsx)(react.Suspense,{fallback:"",children:(0,jsx_runtime.jsx)(PageError.A,{})}):children}}ErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const BugButton=({className})=>{const[error,setError]=(0,react.useState)(!1),{t}=(0,es.Bd)();return(0,react.useEffect)((()=>{if(error)throw new Error}),[error]),(0,jsx_runtime.jsx)(Button.$,{onClick:()=>{setError((prev=>!prev))},className:(0,classNames.x)("",{},[className]),children:t("Вызвать ошибку")})};BugButton.__docgenInfo={description:"",methods:[],displayName:"BugButton",props:{className:{required:!1,tsType:{name:"string"},description:""}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Sidebar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Sidebar_module.A,options);const Sidebar_Sidebar_module=Sidebar_module.A&&Sidebar_module.A.locals?Sidebar_module.A.locals:void 0,Sidebar=({className})=>{const[collapsed,setCollapsed]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{"data-testid":"sidebar",className:(0,classNames.x)(Sidebar_Sidebar_module.sidebar,{[Sidebar_Sidebar_module.collapsed]:collapsed},[className]),children:[(0,jsx_runtime.jsx)(Button.$,{"data-testid":"sidebar-toggle",onClick:()=>{setCollapsed((prev=>!prev))},children:"toggler"}),(0,jsx_runtime.jsx)(BugButton,{}),(0,jsx_runtime.jsxs)("div",{className:Sidebar_Sidebar_module.switchers,children:[(0,jsx_runtime.jsx)(ThemeSwitcher.H,{}),(0,jsx_runtime.jsx)(LangSwitcher,{className:Sidebar_Sidebar_module.lang})]})]})};Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{className:{required:!1,tsType:{name:"string"},description:""}}};var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx");const Sidebar_stories={title:"widgets/Sidebar",component:Sidebar},Light={decorators:[(0,ThemeDecorator.n)(ThemeProvider.Sx.LIGHT)]},Dark={decorators:[(0,ThemeDecorator.n)(ThemeProvider.Sx.DARK)]},__namedExportsOrder=["Light","Dark"];Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  decorators: [ThemeDecorator(Theme.LIGHT)]\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",...Dark.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__button--PGwt3{color:var(--primary-color);cursor:pointer}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;margin:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;background:none;outline:none;color:var(--primary-color);border:1px solid var(--primary-color)}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACI,0BAAA,CACA,cAAA,CAGJ,kDACI,SAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGJ,oDACI,iBAAA,CACA,eAAA,CACA,YAAA,CACA,0BAAA,CACA,qCAAA",sourcesContent:[".button {\r\n    color: var(--primary-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.clear {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n}\r\n\r\n.outline {\r\n    padding: 10px 15px;\r\n    background: none;\r\n    outline: none;\r\n    color: var(--primary-color);\r\n    border: 1px solid var(--primary-color);\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"src-shared-ui-Button-Button-module__button--PGwt3",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-PageError-ui-PageError-module__pageError--EEPCk{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}","",{version:3,sources:["webpack://./src/widgets/PageError/ui/PageError.module.scss"],names:[],mappings:"AAAA,6DACI,UAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA",sourcesContent:[".pageError {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={pageError:"src-widgets-PageError-ui-PageError-module__pageError--EEPCk"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Sidebar-ui-Sidebar-Sidebar-module__sidebar--uBS7N{height:calc(100vh - var(--navbar-height));width:var(--sidebar-width);background-color:var(--inverted-bg-color);position:relative;transition:width .3s ease}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC{width:var(--sidebar-width-collapsed)}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw{width:100%;position:absolute;bottom:20px;display:flex;justify-content:center}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ{margin-left:15px}","",{version:3,sources:["webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss"],names:[],mappings:"AAAA,+DACI,yCAAA,CACA,0BAAA,CACA,yCAAA,CACA,iBAAA,CACA,yBAAA,CAGJ,iEACI,oCAAA,CAGJ,iEACI,UAAA,CACA,iBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CAGJ,4DACI,gBAAA",sourcesContent:[".sidebar {\r\n    height: calc(100vh - var(--navbar-height));\r\n    width: var(--sidebar-width);\r\n    background-color: var(--inverted-bg-color);\r\n    position: relative;\r\n    transition: width 0.3s ease;\r\n}\r\n\r\n.collapsed {\r\n    width: var(--sidebar-width-collapsed);\r\n}\r\n\r\n.switchers {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.lang {\r\n    margin-left: 15px;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={sidebar:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__sidebar--uBS7N",collapsed:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC",switchers:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw",lang:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=(cls,mods={},additional=[])=>[cls,...additional.filter(Boolean),...Object.entries(mods).filter((([_A,value])=>Boolean(value))).map((([className])=>className))].join(" ")},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,o:()=>ThemeButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0;var ThemeButton;!function(ThemeButton){ThemeButton.CLEAR="clear",ThemeButton.OUTLINE="outline"}(ThemeButton||(ThemeButton={}));const Button=props=>{const{className,theme,children,...otherProps}=props;return(0,jsx_runtime.jsx)("button",{className:(0,classNames.x)(Button_Button_module.button,{},[className,Button_Button_module[theme]]),...otherProps,children})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"ThemeButton"},description:""}},composes:["ButtonHTMLAttributes"]}},"./src/shared/ui/ThemeSwitcher/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>_ui_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__.H});var _ui_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx")},"./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>ThemeSwitcher});var _g,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const theme_light=function SvgThemeLight(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:800,height:800,viewBox:"0 0 64 64"},props),_g||(_g=react.createElement("g",{fillRule:"evenodd",clipRule:"evenodd"},react.createElement("path",{fill:"#394240",d:"M32 14.002c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18m0 34c-8.837 0-16-7.164-16-16s7.163-16 16-16 16 7.164 16 16-7.163 16-16 16M63 31H53a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2M11.457 36.469l-3.863 1.035a1 1 0 0 0-.707 1.227c.143.533.69.85 1.225.705l3.863-1.035a1 1 0 1 0-.518-1.932M49.32 22a1 1 0 0 0 1.367.365l8.66-5A.996.996 0 0 0 59.712 16a.996.996 0 0 0-1.365-.365l-8.66 5A1 1 0 0 0 49.32 22M17.858 46.143a1 1 0 0 0-1.414 0l-2.828 2.828a.999.999 0 1 0 1.414 1.414l2.828-2.828a1 1 0 0 0 0-1.414M42 14.68c.479.275 1.09.113 1.367-.367l5-8.66A1 1 0 0 0 48 4.287a1 1 0 0 0-1.365.365l-4.999 8.662A1 1 0 0 0 42 14.68M26.824 51.318a1.004 1.004 0 0 0-1.225.707l-1.035 3.863a1.001 1.001 0 0 0 1.932.518l1.035-3.863a1 1 0 0 0-.707-1.225M32 12a1 1 0 0 0 1.002-1V1a1 1 0 1 0-2.001 0l.001 10c0 .553.447 1 .998 1M38.402 52.025a1 1 0 0 0-1.225-.707 1 1 0 0 0-.707 1.225l1.035 3.863a1.001 1.001 0 0 0 1.932-.518zM20.637 14.312a1 1 0 1 0 1.731-1l-5-8.66a1.001 1.001 0 0 0-1.733 1zM47.558 46.141a1.003 1.003 0 0 0-1.414 0 1 1 0 0 0 0 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414zM4.654 17.365l8.662 4.998a.999.999 0 0 0 .999-1.73l-8.661-5A1 1 0 0 0 4.287 16a1 1 0 0 0 .367 1.365M52.027 38.4l3.863 1.035a1 1 0 1 0 .518-1.932l-3.863-1.035a.999.999 0 1 0-.518 1.932M12 32a1 1 0 0 0-.998-1.002L1 31c-.552 0-1 .445-1 1 .001.551.448 1 1.001 1l10.001-.002A1 1 0 0 0 12 32M52.545 27.529l3.863-1.035a1 1 0 1 0-.518-1.932l-3.863 1.035a1 1 0 1 0 .518 1.932"}),react.createElement("circle",{cx:32,cy:32,r:16,fill:"#F9EBB2"}),react.createElement("path",{fill:"#394240",d:"M14.68 42a1 1 0 0 0-1.365-.369l-8.661 5.002a1 1 0 1 0 1 1.732l8.66-5.002A.996.996 0 0 0 14.68 42M46.144 17.855a1 1 0 0 0 1.414 0l2.828-2.828a.997.997 0 0 0-.002-1.414.996.996 0 0 0-1.412 0l-2.828 2.828a1 1 0 0 0 0 1.414M22 49.32a1 1 0 0 0-1.365.363l-5 8.664a.998.998 0 1 0 1.732.998l4.998-8.662A.995.995 0 0 0 22 49.32M37.178 12.68a1.003 1.003 0 0 0 1.225-.707l1.035-3.863a1 1 0 0 0-1.932-.518l-1.035 3.863a1 1 0 0 0 .707 1.225M32 52a.997.997 0 0 0-1 .998l.002 10.004c0 .549.443.998.998.998.553 0 1-.449 1.001-1l-.003-10.002A.996.996 0 0 0 32 52M25.6 11.973a1 1 0 0 0 1.225.707c.532-.141.846-.691.707-1.225l-1.035-3.863a1 1 0 1 0-1.932.518zM43.363 49.686a1 1 0 0 0-1.73.999l5.004 8.66a.994.994 0 0 0 1.363.367c.479-.277.642-.889.367-1.367zM16.443 17.855a.995.995 0 0 0 1.414 0 1.003 1.003 0 0 0 0-1.414l-2.828-2.828a1 1 0 0 0-1.414 1.414zM59.348 46.633l-8.663-4.998a.995.995 0 0 0-1.363.367.997.997 0 0 0 .364 1.363l8.664 5A.996.996 0 0 0 59.713 48c.275-.48.111-1.09-.365-1.367M11.974 25.598 8.11 24.562a1 1 0 0 0-.518 1.934l3.863 1.033a1 1 0 0 0 .519-1.931M32 20.002a1 1 0 1 0 0 2c5.522 0 10 4.477 10 10a1 1 0 1 0 2 0c0-6.627-5.373-12-12-12"}))))};var _path;function theme_dark_extends(){return theme_dark_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},theme_dark_extends.apply(null,arguments)}const theme_dark=function SvgThemeDark(props){return react.createElement("svg",theme_dark_extends({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{stroke:"#1C274C",strokeLinecap:"round",strokeWidth:1.5,d:"M7.285 10.333a5 5 0 1 0 3.049-3.049M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.223l-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222"})))};var ThemeContext=__webpack_require__("./src/app/providers/ThemeProvider/lib/ThemeContext.ts"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.tsx"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx");const ThemeSwitcher=({className})=>{const{theme,toggleTheme}=(0,ThemeProvider.DP)();return(0,jsx_runtime.jsx)(Button.$,{onClick:toggleTheme,theme:Button.o.CLEAR,className:(0,classNames.x)("",{},[className]),children:theme===ThemeContext.Sx.LIGHT?(0,jsx_runtime.jsx)(theme_light,{width:30,height:30}):(0,jsx_runtime.jsx)(theme_dark,{width:30,height:30})})};ThemeSwitcher.__docgenInfo={description:"",methods:[],displayName:"ThemeSwitcher",props:{className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/widgets/PageError/ui/PageError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>PageError});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageError_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PageError_module.A,options);const ui_PageError_module=PageError_module.A&&PageError_module.A.locals?PageError_module.A.locals:void 0;var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx");const PageError=({className})=>{const{t}=(0,es.Bd)();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)(ui_PageError_module.pageError,{},[className]),children:[t("Что-то пошло не так"),(0,jsx_runtime.jsx)(Button.$,{onClick:()=>{location.reload()},children:t("Обновить страницу")})]})})};PageError.__docgenInfo={description:"",methods:[],displayName:"PageError",props:{className:{required:!1,tsType:{name:"string"},description:""}}}}}]);