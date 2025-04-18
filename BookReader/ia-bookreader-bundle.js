/*! For license information please see ia-bookreader-bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[68],{4497:function(e,t,n){n(2675),n(9463),n(2259),n(5700),n(3418),n(3792),n(4782),n(9572),n(2010),n(8130),n(2811),n(875),n(6099),n(825),n(7495),n(8781),n(7764),n(2953);var r=n(420);function o(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}Object.create,Object.create;var i,a,s=n(9696);class l{parseValue(e){return("string"!=typeof e||"false"!==e&&"0"!==e)&&Boolean(e)}}l.shared=new l;class c{parseValue(e){if("number"==typeof e)return e;if("boolean"==typeof e)return;const t=parseFloat(e);return Number.isNaN(t)?void 0:t}}c.shared=new c;class u{parseValue(e){return c.shared.parseValue(e)}}u.shared=new u;class d{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if("string"!=typeof e)return;const t=e.match(/\[([0-9]{4})\]/);return!t||t.length<2?void 0:this.parseJSDate(t[1])}parseJSDate(e){if("string"!=typeof e)return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+1e3*r.getTimezoneOffset()*60)),r}}d.shared=new d;class h{parseValue(e){if("number"==typeof e)return e;if("boolean"==typeof e)return;const t=e.split(":");let n;return n=1===t.length?this.parseNumberFormat(t[0]):this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map(((n,r)=>{const o=parseFloat(n);if(Number.isNaN(o))return t=!0,0;const i=60**(e.length-1-r);return o*Math.floor(i)})).reduce(((e,t)=>e+t),0);return t?void 0:n}}h.shared=new h;class p{parseValue(e){if("string"==typeof e)return e}}p.shared=new p;class f{parseValue(e){if("string"==typeof e)return e}}f.shared=new f;class m{parseValue(e){return String(e)}}m.shared=new m;class v{constructor(e,t){this.values=[],this.parser=e,this.rawValue=t,this.processRawValue()}get value(){return this.values.length>0?this.values[0]:void 0}processRawValue(){void 0!==this.rawValue&&(Array.isArray(this.rawValue)?this.rawValue.forEach((e=>{this.parseAndPersistValue(e)})):this.parseAndPersistValue(this.rawValue))}parseAndPersistValue(e){const t=this.parser.parseValue(e);void 0!==t&&this.values.push(t)}}class y extends v{constructor(e){super(l.shared,e)}}class b extends v{constructor(e){super(d.shared,e)}}class g extends v{constructor(e){super(h.shared,e)}}class k extends v{constructor(e){super(c.shared,e)}}class w extends v{constructor(e){super(m.shared,e)}}class S extends v{constructor(e){super(u.shared,e)}}class C extends v{constructor(e){super(p.shared,e)}}class x{constructor(e){this.rawMetadata=e,this.identifier=e.identifier,this.addeddate=e.addeddate?new b(e.addeddate):void 0,this.publicdate=e.publicdate?new b(e.publicdate):void 0,this.indexdate=e.indexdate?new b(e.indexdate):void 0,this.audio_codec=e.audio_codec?new w(e.audio_codec):void 0,this.audio_sample_rate=e.audio_sample_rate?new k(e.audio_sample_rate):void 0,this.collection=e.collection?new w(e.collection):void 0,this.collections_raw=e.collections_raw?new w(e.collections_raw):void 0,this.collection_size=e.collection_size?new S(e.collection_size):void 0,this.contributor=e.contributor?new w(e.contributor):void 0,this.coverage=e.coverage?new w(e.coverage):void 0,this.creator=e.creator?new w(e.creator):void 0,this.date=e.date?new b(e.date):void 0,this.description=e.description?new w(e.description):void 0,this.downloads=e.downloads?new k(e.downloads):void 0,this.duration=e.duration?new g(e.duration):void 0,this.files_count=e.files_count?new k(e.files_count):void 0,this.item_count=e.item_count?new k(e.item_count):void 0,this.item_size=e.item_size?new S(e.item_size):void 0,this.language=e.language?new w(e.language):void 0,this.length=e.length?new g(e.length):void 0,this.lineage=e.lineage?new w(e.lineage):void 0,this.mediatype=e.mediatype?new C(e.mediatype):void 0,this.month=e.month?new k(e.month):void 0,this.noindex=e.noindex?new y(e.noindex):void 0,this.notes=e.notes?new w(e.notes):void 0,this.num_favorites=e.num_favorites?new k(e.num_favorites):void 0,this.num_reviews=e.num_reviews?new k(e.num_reviews):void 0,this.runtime=e.runtime?new g(e.runtime):void 0,this.scanner=e.scanner?new w(e.scanner):void 0,this.source=e.source?new w(e.source):void 0,this.start_localtime=e.start_localtime?new b(e.start_localtime):void 0,this.start_time=e.start_time?new b(e.start_time):void 0,this.stop_time=e.stop_time?new b(e.stop_time):void 0,this.subject=e.subject?new w(e.subject):void 0,this.taper=e.taper?new w(e.taper):void 0,this.title=e.title?new w(e.title):void 0,this.track=e.track?new k(e.track):void 0,this.transferer=e.transferer?new w(e.transferer):void 0,this.type=e.type?new w(e.type):void 0,this.uploader=e.uploader?new w(e.uploader):void 0,this.utc_offset=e.utc_offset?new k(e.utc_offset):void 0,this.venue=e.venue?new w(e.venue):void 0,this.week=e.week?new k(e.week):void 0,this.year=e.year?new b(e.year):void 0}}class O{constructor(e){this.name=e.name,this.source=e.source,this.btih=e.btih,this.md5=e.md5,this.format=e.format,this.mtime=e.mtime,this.crc32=e.crc32,this.sha1=e.sha1,this.original=e.original,this.title=e.title,this.length=e.length?h.shared.parseValue(e.length):void 0,this.size=e.size?u.shared.parseValue(e.size):void 0,this.height=e.height?c.shared.parseValue(e.height):void 0,this.width=e.width?c.shared.parseValue(e.width):void 0,this.track=e.track?c.shared.parseValue(e.track):void 0,this.external_identifier=e["external-identifier"],this.creator=e.creator,this.album=e.album}}class j{constructor(e){this.reviewbody=e.reviewbody,this.reviewtitle=e.reviewtitle,this.reviewer=e.reviewer,this.reviewdate=d.shared.parseValue(e.reviewdate),this.createdate=d.shared.parseValue(e.createdate),this.stars=e.stars?parseFloat(e.stars):void 0}}class B{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=null===(t=e.files)||void 0===t?void 0:t.map((e=>new O(e))),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new x(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=null===(n=e.reviews)||void 0===n?void 0:n.map((e=>new j(e)))}}class L{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map((e=>new x(e))),this.aggregations=e.aggregations}}class E{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new L(e.response)}}!function(e){e.networkError="SearchService.NetworkError",e.itemNotFound="SearchService.ItemNotFound",e.decodingError="SearchService.DecodingError",e.searchEngineError="SearchService.SearchEngineError"}(i||(i={}));class P extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class M{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new E(t.success)}}async fetchMetadata(e){var t;const n=await this.searchBackend.fetchMetadata(e);return n.error?n:void 0===(null===(t=n.success)||void 0===t?void 0:t.metadata)?{error:new P(i.itemNotFound)}:{success:new B(n.success)}}}M.default=new M(new class{constructor(e="archive.org"){this.baseUrl=e}async performSearch(e){const t=e.asUrlSearchParams.toString(),n=`https://${this.baseUrl}/advancedsearch.php?${t}`;return this.fetchUrl(n)}async fetchMetadata(e){const t=`https://${this.baseUrl}/metadata/${e}`;return this.fetchUrl(t)}async fetchUrl(e){let t;try{t=await fetch(e)}catch(e){const t=e instanceof Error?e.message:e;return this.getErrorResult(i.networkError,t)}try{const e=await t.json(),n=e.error;if(n){const t=e.forensics;return this.getErrorResult(i.searchEngineError,n,t)}return{success:e}}catch(e){const t=e instanceof Error?e.message:e;return this.getErrorResult(i.decodingError,t)}}getErrorResult(e,t,n){return{error:new P(e,t,n)}}}),function(e){e.Asc="asc",e.Desc="desc"}(a||(a={}));var I=r.qy`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="ellipsesTitleID ellipsesDescID"
>
  <title id="ellipsesTitleID">Ellipses icon</title>
  <desc id="ellipsesDescID">An illustration of text ellipses.</desc>
  <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>
</svg>
`;class A extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return I}}customElements.define("ia-icon-ellipses",A);const z=r.AH`42px`,T=r.AH`var(--menuWidth, 320px)`,D=r.AH`var(--animationTiming, 200ms)`;var _=r.AH`
  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .animate {
    transition: transform ${D} ease-out;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${T};
    padding: 0.5rem 0.5rem 0 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: var(--primaryTextColor);
    background: var(--menuSliderBg);
    transform: translateX(calc(${T} * -1));
  }

  .menu > button.close {
    right: 0.7rem;
  }

  button {
    cursor: pointer;
  }

  header {
    margin: 0 0 0.5rem 0;
  }

  header * {
    margin: 0;
    display: inline-block;
  }
  header button {
    cursor: pointer;
  }

  header.with-secondary-action .details {
    width: 80%;
  }

  header .details {
    font-weight: bold;
    width: 88%;
  }

  header .custom-action > *,
  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    --iconWidth: var(--menuSliderHeaderIconWidth);
    --iconHeight: var(--menuSliderHeaderIconHeight);
  }

  header .custom-action,
  button.close {
    position: absolute;
  }
  button.close {
    right: 0.5rem;
  }

  button.close * {
    float: right;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${z};
    z-index: 1;
    transform: translateX(calc(${T} * -1));
    transition: transform ${D} ease-out;
    background: var(--activeButtonBg);
    border-right: 0.2rem solid;
    border-color: var(--subpanelRightBorderColor);
    padding: 0.5rem 0 0 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .open {
    transform: translateX(0);
  }

  .menu-list {
    padding: 0;
    margin: 0;
    list-style: none;
    background: var(--menuSliderBg);
  }
  .menu-list li {
    margin-bottom: 0.2rem;
  }

  .content > section {
    overflow: auto;
    overscroll-behavior: contain;
  }
`,$=r.qy`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="collapseSidebarTitleID collapseSidebarDescID"
>
  <title id="collapseSidebarTitleID">Collapse sidebar</title>
  <desc id="collapseSidebarDescID">A circle with a left pointing chevron</desc>
  <path d="m9 0c4.9705627 0 9 4.02943725 9 9 0 4.9705627-4.0294373 9-9 9-4.97056275 0-9-4.0294373-9-9 0-4.97056275 4.02943725-9 9-9zm1.6976167 5.28352881c-.365258-.3556459-.9328083-.37581056-1.32099801-.06558269l-.09308988.0844372-3 3.08108108-.08194436.09533317c-.27484337.36339327-.26799482.87009349.01656959 1.22592581l.084491.09308363 3 2.91891889.09533796.0818904c.3633964.2746544.8699472.2677153 1.2256839-.0167901l.093059-.0844712.0818904-.095338c.2746544-.3633964.2677153-.8699472-.0167901-1.2256839l-.0844712-.093059-2.283355-2.2222741 2.3024712-2.36338332.0819252-.09530804c.2997677-.39632298.2644782-.96313393-.1007797-1.31877983z" fill-rule="evenodd" class="fill-color" />
</svg>
`;class H extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return $}}customElements.define("ia-icon-collapse-sidebar",H);var q=r.AH`
  a {
    display: inline-block;
    text-decoration: none;
  }

  .menu-item {
    display: inline-flex;
    width: 100%;
    padding: 0;
    font-size: 1.6rem;
    text-align: left;
    background: transparent;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  button.menu-item {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  .label {
    display: var(--menuButtonLabelDisplay, none);
    padding: 0;
    font-weight: 400;
    color: var(--primaryTextColor);
    text-align: left;
    vertical-align: middle;
    margin-left: 1rem;
  }

  .menu-details {
    color: var(--primaryTextColor);
    display: inline-block;
    margin-left: 0.5rem;
    font-style: italic;
    font-size: 1.5rem;
  }

  .menu-item > .icon {
    position: relative;
    display: inline-flex;
    z-index: 2;
    min-width: 4.2rem;
    max-width: 4.2rem;
    height: 4.2rem;
    vertical-align: middle;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .menu-item.selected .icon {
    background-color: var(--activeButtonBg);
    border-radius: 1rem 0 0 1rem;
  }

  .icon .fill-color {
    fill: #999;
  }

  .icon.active .fill-color {
    fill: #fff;
  }
`;let R=class extends r.WF{constructor(){super(...arguments),this.icon="",this.href="",this.label="",this.menuDetails="",this.buttonId="",this.selected=!1,this.followable=!1}static get styles(){return q}onClick(e){e.preventDefault(),this.dispatchMenuTypeSelectedEvent()}dispatchMenuTypeSelectedEvent(){this.dispatchEvent(new CustomEvent("menuTypeSelected",{bubbles:!0,composed:!0,detail:{id:this.buttonId}}))}get buttonClass(){return this.selected?"selected":""}get iconClass(){return this.selected?"active":""}get menuItem(){return r.qy`
      <span class="icon ${this.iconClass}"> ${this.icon} </span>
      <span class="label">${this.label}</span>
      <span class="menu-details">${this.menuDetails}</span>
    `}get linkButton(){return r.qy`
      <a
        href="${this.href}"
        class="menu-item ${this.buttonClass}"
        @click=${this.followable?void 0:this.onClick}
        >${this.menuItem}</a
      >
    `}get clickButton(){return r.qy`
      <button class="menu-item ${this.buttonClass}" @click=${this.onClick}>
        ${this.menuItem}
      </button>
    `}render(){return this.href?this.linkButton:this.clickButton}};o([(0,s.MZ)({type:String})],R.prototype,"icon",void 0),o([(0,s.MZ)({type:String})],R.prototype,"href",void 0),o([(0,s.MZ)({type:String})],R.prototype,"label",void 0),o([(0,s.MZ)({type:String})],R.prototype,"menuDetails",void 0),o([(0,s.MZ)({type:String})],R.prototype,"buttonId",void 0),o([(0,s.MZ)({type:Boolean})],R.prototype,"selected",void 0),o([(0,s.MZ)({type:Boolean})],R.prototype,"followable",void 0),R=o([(0,s.EM)("menu-button")],R);const F={closeDrawer:"menuSliderClosed"};let N=class extends r.WF{constructor(){super(...arguments),this.menus=[],this.open=!1,this.manuallyHandleClose=!1,this.selectedMenu="",this.selectedMenuAction=r.s6,this.animateMenuOpen=!1}static get styles(){return _}updated(){const{actionButton:e}=this.selectedMenuDetails||{};e!==this.selectedMenuAction&&(this.selectedMenuAction=e||r.s6)}setSelectedMenu({detail:e}){const{id:t}=e;this.selectedMenu=this.selectedMenu===t?"":t;const{actionButton:n}=this.selectedMenuDetails||{};this.selectedMenuAction=n||r.s6}closeMenu(){this.manuallyHandleClose||(this.open=!1);const{closeDrawer:e}=F,t=new CustomEvent(e,{detail:this.selectedMenuDetails});this.dispatchEvent(t)}get selectedMenuDetails(){return this.menus.find((e=>e.id===this.selectedMenu))}get selectedMenuComponent(){const e=this.selectedMenuDetails;return e&&(null==e?void 0:e.component)?e.component:r.qy``}get sliderDetailsClass(){return`${this.animateMenuOpen?"animate":""} ${this.open?"open":""}`}get selectedMenuClass(){return this.selectedMenu?"open":""}get menuItems(){return this.menus.map((e=>r.qy`
        <li>
          <menu-button
            @menuTypeSelected=${this.setSelectedMenu}
            .icon=${e.icon}
            .label=${e.label}
            .menuDetails=${e.menuDetails}
            .buttonId=${e.id}
            .selected=${e.id===this.selectedMenu}
            .followable=${e.followable}
            .href=${e.href}
          ></menu-button>
        </li>
      `))}get renderMenuHeader(){const{label:e="",menuDetails:t=""}=this.selectedMenuDetails||{},n=this.selectedMenuAction?"with-secondary-action":"",o=this.selectedMenuAction?r.qy`<span class="custom-action">${this.selectedMenuAction}</span>`:r.s6;return r.qy`
      <header class="${n}">
        <div class="details">
          <h3>${e}</h3>
          <span class="extra-details">${t}</span>
        </div>
        ${o} ${this.closeButton}
      </header>
    `}get closeButton(){return r.qy`
      <button
        class="close"
        aria-label="Close this menu"
        @click=${this.closeMenu}
      >
        <ia-icon-collapse-sidebar></ia-icon-collapse-sidebar>
      </button>
    `}render(){return r.qy`
      <div class="main">
        <div class="menu ${this.sliderDetailsClass}">
          ${this.closeButton}
          <ul class="menu-list">
            ${this.menuItems}
          </ul>
          <div
            class="content ${this.selectedMenuClass}"
            @menuTypeSelected=${this.setSelectedMenu}
          >
            ${this.renderMenuHeader}
            <section>
              <div class="selected-menu">${this.selectedMenuComponent}</div>
            </section>
          </div>
        </div>
      </div>
    `}};o([(0,s.MZ)({type:Array})],N.prototype,"menus",void 0),o([(0,s.MZ)({type:Boolean})],N.prototype,"open",void 0),o([(0,s.MZ)({type:Boolean})],N.prototype,"manuallyHandleClose",void 0),o([(0,s.MZ)({type:String})],N.prototype,"selectedMenu",void 0),o([(0,s.MZ)({type:Object})],N.prototype,"selectedMenuAction",void 0),o([(0,s.MZ)({type:Boolean})],N.prototype,"animateMenuOpen",void 0),N=o([(0,s.EM)("ia-menu-slider")],N);let Z=class extends r.WF{constructor(){super(...arguments),this.loaderMessage=""}get bookIconSvg(){return r.JW`
      <g class="bookIcon" transform="matrix(1 0 0 -1 28 67.362264)">
        <path d="m44.71698 31.6981124v-29.99320678s-18.0956599.30735848-18.6322637-.7171698c-.0633962-.12226414-1.890566-.59207545-2.9745282-.59207545-1.3228302 0-3.5122641 0-4.1286791.74547168-.9707547 1.17452827-18.82811278.71660375-18.82811278.71660375v30.040754l1.83849052.7867924.29094339-28.48188608s15.94981097.15339622 17.09094297-1.10716978c.8145283-.90056602 4.997547-.91641507 5.3450942-.3526415.9611321 1.55716977 14.7101883 1.31716978 17.6077354 1.45981128l.3266038 28.22830118z"/>
        <path d="m40.1129424 33.5957539h-12.8337733c-1.8690565 0-3.1098112-.7545283-3.9299999-1.6279245v-26.70452764l1.2362264-.00792453c.4584906.72962262 3.0922641 1.39415091 3.0922641 1.39415091h10.1298111s1.0381131.01754717 1.5141509.47377357c.5643396.54056602.7913207 1.36981129.7913207 1.36981129z"/>
        <path d="m17.3354713 33.5957539h-12.8337733v-25.37660316s0-.75283017.49358489-1.14113205c.52867924-.41433961 1.3415094-.42849055 1.3415094-.42849055h10.59905631s2.2075471-.52698112 3.0928301-1.39415091l1.2.00792453v26.74245214c-.8201886.8581132-2.0530188 1.59-3.8932074 1.59"/>
      </g>
    `}get icon(){return this.bookIconSvg}get loader(){return r.JW`
    <svg
      height="100"
      viewBox="0 0 100 100"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="item-loading"
    >
      <title id="item-loading">Currently loading viewer.</title>
      <desc>Please wait while we load theater.</desc>
      <g fill="#333" fill-rule="evenodd" class="book-icon">
        ${this.icon}
        <path
          class="ring"
          d="m17.8618849 11.6970233c18.5864635-15.59603144 45.6875867-15.59603102 64.2740497.000001 1.9271446 1.6170806 2.1785128 4.4902567.5614466 6.4174186-1.6170661 1.9271618-4.4902166 2.1785323-6.4173612.5614517-15.1996922-12.75416882-37.3625282-12.75416916-52.5622206-.000001-15.19969387 12.7541707-19.04823077 34.5805019-9.1273354 51.7641499 9.9208955 17.183646 30.7471499 24.7638499 49.3923323 17.9774983 18.6451823-6.7863521 29.7266014-25.9801026 26.2811129-45.5206248-.436848-2.4775114 1.2174186-4.8400696 3.6949079-5.2769215 2.4774893-.4368518 4.8400264 1.2174296 5.2768744 3.694941 4.2132065 23.8945096-9.3373563 47.3649806-32.137028 55.6634567-22.799672 8.2984758-48.2663986-.9707372-60.39785211-21.9832155-12.1314534-21.012481-7.42539173-47.7021198 11.16107351-63.2981544z"
          fill-rule="nonzero"
        />
      </g>
    </svg>
    `}render(){const e=this.loaderMessage?r.qy`<h2>${this.loaderMessage}</h2>`:r.s6;return r.qy`
      <div class="place-holder">
        ${e} ${this.loader}
        <h3>Loading viewer</h3>
      </div>
    `}static get styles(){return r.AH`
      .place-holder {
        width: 30%;
        margin: auto;
        text-align: center;
        color: var(--primaryTextColor);
      }

      .place-holder {
        position: relative;
      }

      .place-holder svg {
        display: block;
        width: 60%;
        max-width: 100px;
        height: auto;
        margin: auto;
      }

      svg * {
        fill: var(--primaryTextColor);
      }

      svg .ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
        display: block; // transform won't work on inline style
      }

      @keyframes rotate {
        0% {
          -moz-transform: rotate(-360deg);
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
        }
      }
    `}};o([(0,s.MZ)({type:String})],Z.prototype,"loaderMessage",void 0),Z=o([(0,s.EM)("ia-itemnav-loader")],Z);let W=class extends r.WF{constructor(){super(...arguments),this.identifier=""}emitLoaded(){this.dispatchEvent(new CustomEvent("loadingStateUpdated",{detail:{loaded:!0}}))}updated(e){e.has("identifier")&&this.emitLoaded()}get downloadUrl(){return`/download/${this.identifier}`}render(){return r.qy`
      <section>
        <h2>THERE IS NO PREVIEW AVAILABLE FOR THIS ITEM</h2>
        <p>
          This item does not appear to have any files that can be experienced on
          Archive.org. <br />
          Please download files in this item to interact with them on your
          computer.
        </p>
        <a href=${this.downloadUrl}>Show all files</a>
      </section>
    `}static get styles(){return r.AH`
      :host {
        color: var(--primaryTextColor, #fff);
        text-align: center;
      }
      section {
        width: 100%;
        margin: 5%;
        padding: 0 5%;
      }
      p {
        font-size: 1.4rem;
      }
      a {
        color: var(--primaryTextColor, #fff);
        background-color: rgb(25, 72, 128);
        min-height: 35px;
        cursor: pointer;
        line-height: normal;
        border-radius: 0.4rem;
        text-align: center;
        vertical-align: middle;
        font-size: 1.4rem;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        display: inline-block;
        padding: 0.85rem 1.2rem;
        border: 1px solid rgb(197, 209, 223);
        white-space: nowrap;
        appearance: auto;
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
      }
    `}};o([(0,s.MZ)({type:String})],W.prototype,"identifier",void 0),W=o([(0,s.EM)("ia-no-theater-available")],W);let U=class extends r.WF{constructor(){super(...arguments),this.viewAvailable=!0,this.baseHost="archive.org",this.signedIn=!1,this.menuContents=[],this.menuShortcuts=[],this.viewportInFullscreen=null,this.menuOpened=!1,this.loaded=!1,this.openMenuState="shift"}disconnectedCallback(){this.removeResizeObserver()}updated(e){if(e.has("sharedObserver")){const t=e.get("sharedObserver");null==t||t.removeObserver(this.resizeObserverConfig),this.setResizeObserver()}}handleResize(e){const{width:t}=e.contentRect;this.openMenuState=t<=600?"overlay":"shift"}setResizeObserver(){var e,t;null===(e=this.sharedObserver)||void 0===e||e.addObserver(this.resizeObserverConfig),null===(t=this.sharedObserver)||void 0===t||t.addObserver({target:this.headerSlot,handler:{handleResize:({contentRect:e})=>{e.height&&this.requestUpdate()}}})}removeResizeObserver(){var e;null===(e=this.sharedObserver)||void 0===e||e.removeObserver(this.resizeObserverConfig)}get resizeObserverConfig(){return{handler:this,target:this.frame}}get loaderTitle(){return this.viewportInFullscreen?"Internet Archive":""}get loadingArea(){return r.qy`
      <div class="loading-area">
        <div class="loading-view">
          <ia-itemnav-loader
            .loaderMessage=${this.loaderTitle}
          ></ia-itemnav-loader>
        </div>
      </div>
    `}slotChange(e,t){var n;const r=null===(n=e.target.assignedNodes())||void 0===n?void 0:n[0];this.dispatchEvent(new CustomEvent("slotChange",{detail:{slot:r,type:t}})),this.requestUpdate()}render(){var e,t;const n=this.loaded?"":"hidden",o=(null===(t=null===(e=this.headerSlot)||void 0===e?void 0:e.assignedNodes()[0])||void 0===t?void 0:t.offsetHeight)||0;return r.qy`
      <div id="frame" class=${this.menuClass}>
        <slot
          name="header"
          style=${`height: ${o}px`}
          @slotchange=${e=>this.slotChange(e,"header")}
        ></slot>
        <div class="menu-and-reader">
          ${this.shouldRenderMenu?this.renderSideMenu:r.s6}
          <div id="reader" class=${n}>
            ${this.renderViewport}
          </div>
          ${this.loaded?r.s6:this.loadingArea}
        </div>
      </div>
    `}get noTheaterView(){var e,t;return r.qy`<ia-no-theater-available
      .identifier=${null===(t=null===(e=this.item)||void 0===e?void 0:e.metadata)||void 0===t?void 0:t.identifier}
      @loadingStateUpdated=${this.loadingStateUpdated}
    ></ia-no-theater-available>`}get renderViewport(){if(!this.viewAvailable)return this.noTheaterView;const e=this.loaded?"opacity: 1;":"opacity: 0;";return r.qy`
      <div slot="main" style=${e}>
        <slot
          name="main"
          @slotchange=${e=>this.slotChange(e,"main")}
        ></slot>
      </div>
    `}loadingStateUpdated(e){const{loaded:t}=e.detail;this.loaded=null!=t&&t}manageViewportFullscreen(e){const t=!!e.detail.isFullScreen;this.viewportInFullscreen=t||null;const n=new CustomEvent("fullscreenToggled",{detail:e.detail});this.dispatchEvent(n)}get shouldRenderMenu(){var e;return!!(null===(e=this.menuContents)||void 0===e?void 0:e.length)}toggleMenu(){this.menuOpened=!this.menuOpened}closeMenu(){this.menuOpened=!1}setOpenMenu(e){const{id:t}=e.detail;this.openMenu=t!==this.openMenu?t:void 0}setMenuContents(e){const t=[...e.detail];this.menuContents=t}setMenuShortcuts(e){this.menuShortcuts=[...e.detail]}manageSideMenuEvents(e){const{menuId:t,action:n}=e.detail;t&&("open"===n?this.openShortcut(t):"toggle"===n&&(this.openMenu=t,this.toggleMenu()))}get menuToggleButton(){return r.qy`
      <button
        class="toggle-menu"
        @click=${this.toggleMenu}
        title="Toggle theater side panels"
      >
        <div>
          <ia-icon-ellipses
            style="width: var(--iconWidth); height: var(--iconHeight);"
          ></ia-icon-ellipses>
        </div>
      </button>
    `}get selectedMenuId(){return this.openMenu||""}get renderSideMenu(){const e=this.menuOpened?"":"hidden";return r.qy`
      <nav>
        <div class="minimized">${this.shortcuts} ${this.menuToggleButton}</div>
        <div id="menu" class=${e}>
          <ia-menu-slider
            .menus=${this.menuContents}
            .selectedMenu=${this.selectedMenuId}
            @menuTypeSelected=${this.setOpenMenu}
            @menuSliderClosed=${this.closeMenu}
            manuallyHandleClose
            open
          ></ia-menu-slider>
        </div>
      </nav>
    `}openShortcut(e=""){this.openMenu=e,this.menuOpened=!0}get shortcuts(){const e=this.menuShortcuts.map((({icon:e,id:t})=>"fullscreen"===t?r.qy`${e}`:r.qy`
        <button class="shortcut ${t}" @click="${()=>this.openShortcut(t)}">
          ${e}
        </button>
      `));return r.qy`<div class="shortcuts">${e}</div>`}get menuClass(){var e,t;const n=(null===(e=this.menuContents)||void 0===e?void 0:e.length)||(null===(t=this.menuShortcuts)||void 0===t?void 0:t.length);return`${this.menuOpened&&n?"open":""} ${this.viewportInFullscreen?"fullscreen":""} ${this.openMenuState}`}static get styles(){const e=r.AH`var(--menuWidth, 320px)`,t=r.AH`var(--animationTiming, 200ms)`,n=r.AH`transform ${t} ease-out`,o=r.AH`var(--theaterMenuMargin, 42px)`,i=r.AH`var(--theaterBgColor, #000)`;return r.AH`
      :host,
      #frame,
      .menu-and-reader {
        position: relative;
        overflow: hidden;
        display: block;
      }

      :host,
      #frame,
      .loading-area,
      .loading-view {
        min-height: inherit;
        height: inherit;
      }

      slot {
        display: block;
        width: 100%;
      }

      slot * {
        display: block;
        height: inherit;
      }

      #frame {
        background-color: ${i};
        color-scheme: dark;
        display: flex;
        flex-direction: column;
      }

      #frame.fullscreen {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
      }

      .loading-view {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading-area {
        width: 100%;
      }

      ia-itemnav-loader {
        display: block;
        width: 100%;
      }

      .hidden {
        display: none !important;
      }

      button {
        cursor: pointer;
        padding: 0;
        border: 0;
      }

      .menu-and-reader {
        position: relative;
        display: flex;
        flex: 1;
      }

      nav button {
        background: none;
      }

      nav .minimized {
        background: rgba(0, 0, 0, 0.7);
        padding-top: 6px;
        position: absolute;
        width: ${o};
        z-index: 2;
        left: 0;
        border-bottom-right-radius: 5%;
      }

      nav .minimized button {
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin-bottom: 0.2rem;
        margin: auto;
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: ${o};
        height: ${o};
      }

      nav .minimized button.toggle-menu > * {
        border: 2px solid var(--iconStrokeColor);
        border-radius: var(--iconWidth);
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin: auto;
      }

      ia-icon-ellipses {
        width: var(--iconWidth);
        height: var(--iconHeight);
      }

      #menu {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        overflow: hidden;
        transform: translateX(-${e});
        width: ${e};
        transform: translateX(calc(${e} * -1));
        transition: ${n};
      }

      #reader {
        position: relative;
        z-index: 1;
        transform: translateX(0);
        width: 100%;
        display: flex;
      }

      #reader > * {
        width: 100%;
        display: flex;
        flex: 1;
      }

      .open.overlay #reader {
        transition: none;
      }

      .open #menu {
        width: ${e};
        transform: translateX(0);
        transition: ${n};
      }

      .open.shift #reader {
        width: calc(100% - ${e});
        margin-left: ${e};
        transition: ${n};
      }
    `}};o([(0,s.MZ)({type:Object,converter:e=>e&&"string"==typeof e?new B(JSON.parse(atob(e))):e})],U.prototype,"item",void 0),o([(0,s.MZ)({type:Boolean,reflect:!0})],U.prototype,"viewAvailable",void 0),o([(0,s.MZ)({type:String})],U.prototype,"baseHost",void 0),o([(0,s.MZ)({type:Boolean})],U.prototype,"signedIn",void 0),o([(0,s.MZ)({type:Array})],U.prototype,"menuContents",void 0),o([(0,s.MZ)({type:Array})],U.prototype,"menuShortcuts",void 0),o([(0,s.MZ)({type:Boolean,reflect:!0,attribute:!0})],U.prototype,"viewportInFullscreen",void 0),o([(0,s.MZ)({type:Boolean,reflect:!0})],U.prototype,"menuOpened",void 0),o([(0,s.MZ)({type:String,reflect:!0})],U.prototype,"openMenu",void 0),o([(0,s.MZ)({attribute:!1})],U.prototype,"modal",void 0),o([(0,s.MZ)({attribute:!1})],U.prototype,"sharedObserver",void 0),o([(0,s.MZ)({type:Boolean,reflect:!0,attribute:!0})],U.prototype,"loaded",void 0),o([(0,s.wk)()],U.prototype,"openMenuState",void 0),o([(0,s.P)("#frame")],U.prototype,"frame",void 0),o([(0,s.P)('slot[name="header"]')],U.prototype,"headerSlot",void 0),o([(0,s.P)('slot[name="main"]')],U.prototype,"mainSlot",void 0),U=o([(0,s.EM)("iaux-item-navigator")],U);var V=r.qy`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="shareTitleID shareDescID"
>
  <title id="shareTitleID">Share icon</title>
  <desc id="shareDescID">A square with an arrow arcing out from the center of the square</desc>
  <g class="fill-color">
    <path d="M70.6784759,10 L70.6784759,21.3240186 C64.5020053,21.66334 58.9104278,22.5826126 53.9037433,24.0818363 C48.8970588,25.5810601 44.8495989,27.4085163 41.7613636,29.5642049 C38.6731283,31.7198935 35.9982175,34.0552229 33.736631,36.5701929 C31.4750446,39.085163 29.8217469,41.5657574 28.776738,44.011976 C27.7317291,46.4581947 26.9173351,48.6848525 26.3335561,50.6919494 C25.7497772,52.6990464 25.4088681,54.3324462 25.3108289,55.592149 L25.2372995,57.4085163 C29.0296346,54.1661122 33.1751337,51.5524507 37.6737968,49.5675316 C42.1724599,47.5826126 46.2934492,46.3118208 50.0367647,45.7551564 C53.7800802,45.1984919 57.2571301,44.8713684 60.4679144,44.7737858 C63.6786988,44.6762031 66.1831551,44.7726769 67.9812834,45.0632069 L70.6784759,45.499002 L70.6784759,57.4051896 L100,33.3765802 L70.6784759,10 Z M76.4438503,62.4883566 L82.8609626,57.1157685 C82.9099822,57.0669772 82.9946524,57.0303837 83.1149733,57.005988 C83.2352941,56.9815924 83.4536542,56.9571967 83.7700535,56.9328011 C84.0864528,56.9084054 84.3905971,56.9449989 84.6824866,57.0425815 C84.9743761,57.1401641 85.217246,57.2854291 85.4110963,57.4783766 C85.6049465,57.671324 85.7263815,57.8409847 85.7754011,57.9873586 L85.8489305,58.2035928 L85.8489305,90 L0,90 L0,17.910845 L43.1784759,17.910845 C43.2765152,17.9596363 43.410205,18.0317143 43.5795455,18.1270792 C43.7488859,18.222444 43.9438503,18.4519849 44.1644385,18.8157019 C44.3850267,19.1794189 44.469697,19.5542249 44.4184492,19.9401198 C44.4184492,20.2794411 44.3092692,20.582169 44.0909091,20.8483034 C43.872549,21.1144378 43.6664439,21.3206919 43.4725936,21.4670659 L43.1818182,21.6134398 C40.557041,23.06609 38.2954545,24.396762 36.3970588,25.6054558 L30.7820856,29.8170326 L11.5274064,29.8170326 L11.5274064,78.1669993 L74.1811497,78.1669993 L74.1811497,65.5355955 C74.1811497,65.1009093 74.3995098,64.6407186 74.8362299,64.1550233 L76.4438503,62.4883566 Z" id="Shape"></path>
  </g>
</svg>
`;class G extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return V}}customElements.define("ia-icon-share",G);var Y=r.qy`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="twitterTitleID twitterDescID">
  <title id="twitterTitleID">Twitter icon</title>
  <desc id="twitterDescID">The Twitter logo, a cartoon bird</desc>
  <path d="m31.5297453 8.76273313c-.3135031.40766104-.7447036.83083673-1.2936015 1.26952707-.5488979.4386904-.9169698.7837578-1.1042157 1.0352022.1562166 2.319709-.1417719 4.5297454-.8939653 6.6301092-.7521935 2.1003638-1.8023754 3.9182538-3.1505457 5.45367-1.3481704 1.5354162-2.9627648 2.8284828-4.8437835 3.8791996-1.8810186 1.0507169-3.8321207 1.7483416-5.8533062 2.092874s-4.1215493.2894286-6.30109136-.1653114c-2.17954205-.45474-4.2092874-1.3401455-6.08923604-2.6562165 2.72737.4697196 5.67408517-.2514445 8.8401455-2.1634924-3.0719024-.7521935-4.88979241-2.2881447-5.45367-4.6078537 1.12882516.0631287 1.86550396.0631287 2.21003638 0-2.91568586-1.2850417-4.38904344-3.3693558-4.42007276-6.2529424.21934517.0310293.53284828.1487267.94050931.3530922s.78375775.3060133 1.12829017.3049433c-.81532206-.7211641-1.41076396-1.9045581-1.7863257-3.5501819-.37556173-1.64562376-.17173122-3.17355015.61149155-4.58377912 1.81789001 1.88101862 3.6908838 3.36989086 5.61898138 4.46661672 1.92809757 1.0967259 4.22426707 1.7547614 6.88850847 1.9741066-.2503745-1.1908838-.1722662-2.32719882.2343248-3.40894502.4065911-1.0817462 1.0416221-1.93612241 1.9050931-2.56312861.863471-.62700621 1.8114702-1.0817462 2.8439975-1.36421999 1.0325272-.28247378 2.0827091-.27444896 3.1505456.02407447s1.9767815.87042585 2.726835 1.71570726c1.3791997-.37663172 2.6802911-.87845068 3.9032742-1.50545688-.0310293.37663171-.1407019.74470361-.3290178 1.1042157-.1883158.35951209-.3530922.62593623-.4943291.79927242s-.3841216.4317355-.728654.77519795c-.3445324.34346244-.5638776.57832227-.6580355.70457949.2193452-.09415792.6895998-.23539482 1.410764-.42371067.7211641-.18831586 1.2069334-.39214638 1.4573079-.61149155 0 .44350524-.1567516.86668093-.4702547 1.27434196z" class="fill-color" />
</svg>
`;class J extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Y}}customElements.define("ia-icon-twitter",J);var X=r.qy`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="facebookTitleID facebookDescID">
  <title id="facebookTitleID">Facebook icon</title>
  <desc id="facebookDescID">A lowercase f</desc>
  <path d="m30.91057 19.2442068.2670004-5.3339402h-5.7329237c-.0890001-3.4962895.25183-5.42243459 1.0224903-5.77843514.3560005-.17800028.8004955-.28925046 1.333485-.33375053s1.0442346-.0520853 1.5337353-.02275571c.4895008.02932959 1.045246.01466479 1.6672356-.04399439.0890001-1.59997977.1335002-3.24445961.1335002-4.93343953-2.1633102-.20732987-3.6742898-.28115953-4.5329389-.22148898-2.8146294.17800028-4.7847688 1.25965538-5.9104183 3.2449653-.1780003.3256596-.3261653.68873971-.444495 1.08924034-.1183298.40050062-.2144095.76358074-.2882391 1.08924034-.0738297.32565959-.125915.7848194-.1562559 1.37747942-.030341.59266002-.052591 1.04474028-.0667501 1.35624078-.0141592.3115005-.0217444.8449956-.0227558 1.6004854v1.5777298h-3.8229605v5.3339401h3.8669549v14.622824h5.8224296c0-.3560006-.0146648-1.6819003-.0439944-3.9776994-.0293296-2.295799-.0515796-4.2957737-.0667501-5.9999241s-.0075853-3.2525506.0227557-4.6452005h5.4219289z" class="fill-color" />
</svg>
`;class Q extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return X}}customElements.define("ia-icon-facebook",Q);var K=r.qy`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="tumblrTitleID tumblrDescID">
  <title id="tumblrTitleID">Tumblr icon</title>
  <desc id="tumblrDescID">A lowercase letter t</desc>
  <path d="m8.50321407 8.54544475v5.32088575c.15641786.0310693.6819176.0310693 1.57649923 0 .8945816-.0310693 1.3574071.0160703 1.3884764.1414189.0942792 1.5695354.1333837 3.2253149.1173133 4.9673385-.0160703 1.7420236-.0316049 3.3426283-.0466039 4.8018141s.2046288 2.824628.6588835 4.0963267c.4542546 1.2716986 1.1999178 2.2209194 2.2369897 2.8476622 1.2556283.784232 2.9896167 1.207953 5.2019653 1.271163 2.2123485.0632099 4.1659648-.2506972 5.8608487-.9417213-.0310693-.3449764-.0230341-1.4045467.0241055-3.1787109.0471397-1.7741643-.0080351-2.75499-.1655244-2.9424772-3.5472571 1.0360005-5.697467.6904885-6.4506298-1.0365361-.7220934-1.6638147-.8635123-4.9909084-.4242566-9.981281v-.046604h6.7318605v-5.32088568h-6.7318605v-6.54383772h-4.0497228c-.2828378 1.28669763-.6122795 2.35376743-.9883252 3.20120941-.3760457.84744199-.98029 1.60060471-1.812733 2.25948817-.832443.65888347-1.87594303 1.01993018-3.1305 1.08314014z" class="fill-color" />
</svg>
`;class ee extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return K}}customElements.define("ia-icon-tumblr",ee);var te=r.qy`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pinterestTitleID pinterestDescID">
  <title id="pinterestTitleID">Pinterest icon</title>
  <desc id="pinterestDescID">A stylized letter p</desc>
  <path d="m11.9051049 30.5873434.653491-1.0742755.4207845-.839975c.2805229-.591861.5371377-1.2533214.7698443-1.9843813.2327065-.7310599.4659444-1.6029125.6997135-2.6155579.2337692-1.0126455.4128151-1.752206.5371377-2.2186817.0308151.030815.0775689.0855382.1402615.1641697.0626927.0786314.1094465.1333547.1402615.1641697.1243227.1870153.2178304.311338.280523.372968 1.1210293.964829 2.3817888 1.4631823 3.7822785 1.4950599 1.4939973 0 2.8790795-.3426843 4.1552465-1.0280529 2.1166733-1.1826593 3.6733633-3.1128487 4.6700699-5.7905679.4048457-1.1518444.6848374-2.5996192.8399751-4.3433245.1243226-1.587505-.0781002-3.0974411-.6072685-4.5298084-.903199-2.36638128-2.5528653-4.20306294-4.948999-5.51004497-1.276167-.65349101-2.5990879-1.05833667-3.9687625-1.21453696-1.525875-.21783034-3.1293188-.17107651-4.8103315.14026149-2.7701643.52916833-5.02709913 1.743174-6.77080442 3.64201699-1.99235065 2.14748836-2.98852598 4.62225355-2.98852598 7.42429545 0 2.9571797.9494215 5.0584455 2.84826449 6.3037975l.83997504.4207845c.12432268 0 .22526845.0154075.3028373.0462225s.1551377.0074381.23270656-.0701308c.07756885-.0775688.13229208-.1243226.16416969-.1402614s.07066204-.0860696.11635328-.2103923c.04569124-.1243226.07703756-.2098609.09403895-.2566147.01700139-.0467539.04834771-.1476996.09403895-.3028373s.06906816-.2486454.07013074-.280523l.14026149-.5132295c.06269263-.311338.09403895-.5291684.09403895-.653491-.03081502-.1243227-.12432268-.2799917-.28052297-.467007-.15620029-.1870154-.23376915-.2959305-.23270656-.3267455-.62267599-.8096914-.9494215-1.7904592-.98023652-2.9423035-.03081502-1.55669.28052297-2.9731185.93401399-4.24928547 1.18265932-2.45882635 3.17501002-3.93741618 5.97705192-4.43576949 1.6183201-.311338 3.1356943-.25661476 4.5521228.16416969 1.4164285.42078446 2.5135496 1.09765239 3.2913633 2.03060379.8405063 1.02752164 1.3229208 2.28828114 1.4472435 3.78227848.1243227 1.4004897-.0313463 2.9725872-.467007 4.7162925-.3740306 1.3696746-.9186065 2.5528653-1.6337275 3.5495719-.9967066 1.245352-2.0863896 1.8834355-3.269049 1.9142505-1.7118277.0626926-2.7547568-.6375522-3.1287874-2.1007345-.0935077-.4664757 0-1.2134744.2805229-2.240996.7469987-2.5842117 1.1359055-3.9384788 1.1667206-4.0628015.1870153-1.0275216.2024228-1.7904591.0462225-2.2888124-.1870153-.65349104-.5759222-1.15928246-1.1667205-1.51737429-.5907984-.35809182-1.2756357-.39687625-2.054512-.11635327-1.1826594.43566067-1.9610044 1.40048968-2.335035 2.89448706-.311338 1.306982-.2491767 2.6299028.186484 3.9687625 0 .0626926.0313463.1402615.094039.2327065.0626926.0924451.0940389.1700139.0940389.2327066 0 .0935076-.0313463.2491766-.0940389.467007-.0626927.2178303-.094039.3580918-.094039.4207844-.0935076.4356607-.3038999 1.3308903-.6311767 2.6856887-.3272768 1.3547985-.5838915 2.3897582-.7698443 3.1048793-.7778136 3.2068876-1.12049796 5.5881451-1.02805289 7.1437725l.37296809 2.7558194c.653491-.591861 1.2294131-1.2299445 1.7277664-1.9142505z" class="fill-color" />
</svg>
`;class ne extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return te}}customElements.define("ia-icon-pinterest",ne);var re=r.qy`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`;class oe extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return re}}customElements.define("ia-icon-email",oe);var ie=r.qy`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="linkTitleID linkDescID">
  <title id="linkTitleID">Link icon</title>
  <desc id="linkDescID">Two chain links linked together</desc>
  <path d="m7.80511706 12.3659763c1.2669254-2.2579539 4.09819784-2.9949938 6.41200864-1.7733458l.2295791.12871 1.6067188.9559859 3.5467013-6.31849361c1.2682451-2.26030597 4.104098-2.99652769 6.4192376-1.76952182l.2223501.12488594 3.2168204 1.91103915c2.2770002 1.3527136 3.1866331 4.21502324 2.0564431 6.51290984l-.1198433.2278304-5.2002499 9.2680474c-1.2669254 2.2579539-4.0981978 2.9949938-6.4120086 1.7733458l-.2295791-.12871-1.6096554-.9558482-3.5437647 6.3183559c-1.2682451 2.260306-4.104098 2.9965277-6.41923761 1.7695218l-.22235013-.1248859-3.21682032-1.9110392c-2.27700024-1.3527136-3.18663314-4.2150232-2.05644312-6.5129098l.11984332-.2278304zm13.93955474-5.73311741-3.563271 6.35055051c1.889633 1.4530595 2.5776248 4.0429866 1.5410255 6.156875l-.1223014.2328355-.4183304.7430134 1.6096554.9558483c1.1431442.6791157 2.5155496.3977368 3.1667361-.5628389l.0921501-.1491451 5.2002498-9.2680474c.5752467-1.0252226.2110342-2.4011579-.8559335-3.14755806l-.1742742-.11247814-3.2168203-1.91103915c-1.1402863-.67741793-2.5086889-.39913772-3.1618387.55564729zm-11.79500786 7.00714351-5.20024982 9.2680474c-.57524673 1.0252226-.21103426 2.4011579.85593348 3.1475581l.17427416.1124781 3.21682032 1.9110392c1.14028632.6774179 2.50868892.3991377 3.16183872-.5556473l.0970474-.1563368 3.5622708-6.3513198c-1.8888875-1.4532134-2.5764504-4.042623-1.5400057-6.1561456l.1222818-.2327956.4153938-.7428758-1.6067188-.9559859c-1.1431442-.6791157-2.5155496-.3977368-3.1667361.5628389zm6.97653866 1.5796652-.3817806.6812386c-.5117123.9119895-.2800268 2.1014993.528439 2.8785267l.382717-.6803391c.5119098-.9123415.2798478-2.1024176-.5293754-2.8794262z" class="fill-color" />
</svg>
`;class ae extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return ie}}customElements.define("ia-icon-link",ae);const se=e=>{const t=e.currentTarget,n=t.querySelector("textarea"),r=t.querySelector("small");n.select(),document.execCommand("copy"),n.blur(),r.classList.add("visible"),clearTimeout(r.timeout),r.timeout=setTimeout((()=>r.classList.remove("visible")),4e3)},le=r.qy`<ia-icon-share
  style="width: var(--iconWidth); height: var(--iconHeight);"
></ia-icon-share>`;let ce=class extends r.WF{constructor(){super(...arguments),this.baseHost="archive.org",this.creator="",this.description="",this.embedOptionsVisible=!1,this.identifier="",this.sharingOptions=[],this.type="",this.renderHeader=!1,this.fileSubPrefix=""}updated(e){e.has("sharingOptions")&&!this.sharingOptions.length&&this.loadProviders()}loadProviders(){let e=`https://${this.baseHost}/details/${this.identifier}`;this.fileSubPrefix&&(e+=`/${this.fileSubPrefix}`);const t=[this.description,this.creator,"Free Download, Borrow, and Streaming","Internet Archive"].filter(Boolean).join(" : ");this.sharingOptions=[{name:"Twitter",icon:r.qy`<ia-icon-twitter></ia-icon-twitter>`,url:`https://twitter.com/intent/tweet?${new URLSearchParams({url:e,text:t,via:"internetarchive"})}`},{name:"Facebook",icon:r.qy`<ia-icon-facebook></ia-icon-facebook>`,url:`https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({u:e})}`},{name:"Tumblr",icon:r.qy`<ia-icon-tumblr></ia-icon-tumblr>`,url:`https://www.tumblr.com/widgets/share/tool/preview?${new URLSearchParams({posttype:"link",canonicalUrl:e,title:t})}`},{name:"Pinterest",icon:r.qy`<ia-icon-pinterest></ia-icon-pinterest>`,url:`http://www.pinterest.com/pin/create/button/?${new URLSearchParams({url:e,description:t})}`},{name:"Email",icon:r.qy`<ia-icon-email></ia-icon-email>`,url:`mailto:?${new URLSearchParams({subject:t,body:e})}`}]}get iframeEmbed(){return`<iframe\n      src="https://${this.baseHost}/embed/${this.identifier}"\n      width="560" height="384" frameborder="0"\n      webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen\n    ></iframe>`}get bbcodeEmbed(){return`[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`}get helpURL(){return`https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`}get header(){const e=r.qy`<header><h3>Share this ${this.type}</h3></header>`;return this.renderHeader?e:r.s6}render(){return r.qy`
      ${this.header}
      <main>
        ${this.sharingOptions.map((e=>r.qy` <a class="share-option" href="${e.url}" target="_blank">
              ${e.icon} ${e.name}
            </a>`))}
        <details>
          <summary class="share-option">
            <ia-icon-link></ia-icon-link>
            Get an embeddable link
          </summary>
          <div class="embed">
            <h4>Embed</h4>
            <div class="code" @click=${se}>
              <textarea readonly>${this.iframeEmbed}</textarea>
              <small>Copied to clipboard</small>
            </div>
            <h4>
              Embed for wordpress.com hosted blogs and archive.org item
              &lt;description&gt; tags
            </h4>
            <div class="code" @click=${se}>
              <textarea readonly>${this.bbcodeEmbed}</textarea>
              <small>Copied to clipboard</small>
            </div>
            <p>
              Want more?
              <a href=${this.helpURL}
                >Advanced embedding details, examples, and help</a
              >!
            </p>
          </div>
        </details>
      </main>
    `}get providerIcon(){return r.qy`<ia-icon-share
      style="width: var(--iconWidth); height: var(--iconHeight);"
    ></ia-icon-share>`}static get styles(){return r.AH`
      :host {
        display: block;
        height: 100%;
        overflow-y: auto;
        font-size: 1.4rem;
        box-sizing: border-box;
      }

      header {
        display: flex;
        align-items: baseline;
      }

      h3 {
        padding: 0;
        margin: 0 1rem 0 0;
        font-size: 1.6rem;
      }

      h4 {
        font-size: 1.4rem;
      }

      main {
        padding: 1rem 0;
      }

      .share-option {
        display: block;
        padding: 0.5rem 0;
        font-size: 1.6rem;
        text-decoration: none;
        color: var(--shareLinkColor);
        cursor: pointer;
      }

      .share-option > * {
        display: inline-block;
        padding: 0.2rem;
        margin-right: 1rem;
        vertical-align: middle;
        border: 1px solid var(--shareIconBorder);
        border-radius: 7px;
        background: var(--shareIconBg);
      }

      /* Hide the triangle that appears on details tags */
      summary::marker {
        content: '';
      }

      summary::-webkit-details-marker {
        display: none;
      }

      .embed {
        padding-right: 5px;
      }

      .embed a {
        color: var(--shareLinkColor);
      }

      .code {
        position: relative;
      }

      textarea {
        display: block;
        width: 100%;
        height: 120px;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        resize: none;
        cursor: pointer;
        font:
          normal 1.4rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaColor, #fff);
        background: var(--textareaBg, #151515);
      }

      small {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        padding: 0.5rem 1rem;
        box-sizing: border-box;
        font:
          normal 1.2rem/2rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaBg, #151515);
        background: var(--textareaColor, #fff);
        opacity: 0;
        transition: opacity 300ms linear;
      }
      small.visible {
        opacity: 1;
      }
    `}};o([(0,s.MZ)({type:String})],ce.prototype,"baseHost",void 0),o([(0,s.MZ)({type:String})],ce.prototype,"creator",void 0),o([(0,s.MZ)({type:String})],ce.prototype,"description",void 0),o([(0,s.MZ)({type:Boolean})],ce.prototype,"embedOptionsVisible",void 0),o([(0,s.MZ)({type:String})],ce.prototype,"identifier",void 0),o([(0,s.MZ)({type:Array})],ce.prototype,"sharingOptions",void 0),o([(0,s.MZ)({type:String})],ce.prototype,"type",void 0),o([(0,s.MZ)({type:Boolean})],ce.prototype,"renderHeader",void 0),o([(0,s.MZ)({type:String})],ce.prototype,"fileSubPrefix",void 0),ce=o([(0,s.EM)("iaux-in-share-panel")],ce),n(6033);var ue=n(6681),de=n(1091),he=ue.ge.I,pe=function(){return document.createComment("")},fe=function(e,t,n){var r,o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===n){var a=o.insertBefore(pe(),i),s=o.insertBefore(pe(),i);n=new he(a,s,e,e.options)}else{var l,c=n._$AB.nextSibling,u=n._$AM,d=u!==e;if(d&&(null===(r=n._$AQ)||void 0===r||r.call(n,e),n._$AM=e,void 0!==n._$AP&&(l=e._$AU)!==u._$AU&&n._$AP(l)),c!==i||d)for(var h=n._$AA;h!==c;){var p=h.nextSibling;o.insertBefore(h,i),h=p}}return n},me=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return e._$AI(t,n),e},ve={},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ve;return e._$AH=t},be=function(e){var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);for(var n=e._$AA,r=e._$AB.nextSibling;n!==r;){var o=n.nextSibling;n.remove(),n=o}};function ge(e){return ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ge(e)}function ke(e,t){if(e){if("string"==typeof e)return we(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?we(e,t):void 0}}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ce(r.key),r)}}function Ce(e){var t=function(e,t){if("object"!=ge(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=ge(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ge(t)?t:t+""}function xe(e,t,n){return t=je(t),function(e,t){if(t&&("object"==ge(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Oe()?Reflect.construct(t,n||[],je(e).constructor):t.apply(e,n))}function Oe(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Oe=function(){return!!e})()}function je(e){return je=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},je(e)}function Be(e,t){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Be(e,t)}var Le=function(e,t,n){for(var r=new Map,o=t;o<=n;o++)r.set(e[o],o);return r},Ee=(0,de.u$)(function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=xe(this,t,[e]),e.type!==de.OA.CHILD)throw Error("repeat() can only be used in text expressions");return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Be(e,t)}(t,e),function(e,t,n){return t&&Se(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"ct",value:function(e,t,n){var r;void 0===n?n=t:void 0!==t&&(r=t);var o,i=[],a=[],s=0,l=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ke(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(e);try{for(l.s();!(o=l.n()).done;){var c=o.value;i[s]=r?r(c,s):s,a[s]=n(c,s),s++}}catch(e){l.e(e)}finally{l.f()}return{values:a,keys:i}}},{key:"render",value:function(e,t,n){return this.ct(e,t,n).values}},{key:"update",value:function(e,t){var n,r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||ke(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,3),o=r[0],i=r[1],a=r[2],s=function(e){return e._$AH}(e),l=this.ct(o,i,a),c=l.values,u=l.keys;if(!Array.isArray(s))return this.ut=u,c;for(var d,h,p=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],f=[],m=0,v=s.length-1,y=0,b=c.length-1;m<=v&&y<=b;)if(null===s[m])m++;else if(null===s[v])v--;else if(p[m]===u[y])f[y]=me(s[m],c[y]),m++,y++;else if(p[v]===u[b])f[b]=me(s[v],c[b]),v--,b--;else if(p[m]===u[b])f[b]=me(s[m],c[b]),fe(e,f[b+1],s[m]),m++,b--;else if(p[v]===u[y])f[y]=me(s[v],c[y]),fe(e,s[m],s[v]),v--,y++;else if(void 0===d&&(d=Le(u,y,b),h=Le(p,m,v)),d.has(p[m]))if(d.has(p[v])){var g=h.get(u[y]),k=void 0!==g?s[g]:null;if(null===k){var w=fe(e,s[m]);me(w,c[y]),f[y]=w}else f[y]=me(k,c[y]),fe(e,s[m],k),s[g]=null;y++}else be(s[v]),v--;else be(s[m]),m++;for(;y<=b;){var S=fe(e,f[b+1]);me(S,c[y]),f[y++]=S}for(;m<=v;){var C=s[m++];null!==C&&be(C)}return this.ut=u,ye(e,f),ue.c0}}])}(de.WL));const Pe=r.qy`
  <svg
    name="sort-asc"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.661538"
        transform="matrix(1 0 0 -1 0 18.692308)"
      />
    </g>
  </svg>
`,Me=r.qy`
  <svg
    name="sort-desc"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.661538"
      />
    </g>
  </svg>
`,Ie=r.qy`
  <svg
    name="sort-neutral"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#fff" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill-rule="nonzero"
      />
      <circle cx="13" cy="9" r="2" />
    </g>
  </svg>
`,Ae=r.qy`
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="volumesTitleID volumesDescID"
  >
    <title id="volumesTitleID">Viewable Files</title>
    <g fill="#ffffff">
      <path
        fill="#ffffff"
        d="m9.83536396 0h10.07241114c.1725502.47117517.3378411.76385809.4958725.87804878.1295523.11419069.3199719.1998337.5712586.25692905.2512868.05709534.4704647.08564301.6575337.08564301h.2806036v15.24362526h-4.3355343v3.8106985h-4.44275v3.7250554h-12.01318261c-.27306495 0-.50313194-.085643-.69020098-.256929-.18706903-.1712861-.30936193-.3425721-.36687867-.5138581l-.06449694-.2785477v-14.2159091c0-.32815965.08627512-.5922949.25882537-.79240577.17255024-.20011086.34510049-.32150776.51765073-.36419068l.25882537-.0640244h3.36472977v-2.54767184c0-.31374722.08627513-.57067627.25882537-.77078714.17255025-.20011086.34510049-.32150776.51765074-.36419068l.25882536-.06402439h3.36472978v-2.56929047c0-.32815964.08627512-.5922949.25882537-.79240576.17255024-.20011087.34510049-.31430156.51765073-.34257207zm10.78355264 15.6294346v-13.53076498c-.2730649-.08536585-.4456152-.16380266-.5176507-.23531042-.1725502-.1424612-.2730649-.27078714-.3015441-.38497783v13.36031043h-9.87808272c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144124-.08962561.006929-.13988296.0640244-.05025735.0570953-.07538603.1427383-.07538603.256929s.02149898.210643.06449694.289357c.04299795.078714.08599591.1322062.12899387.1604767l.06449693.0216187h10.71905571zm-10.2449613-2.4412417h7.98003v-11.60421286h-7.98003zm1.6827837-9.41990022h4.6153002c.1725502 0 .3199718.05349224.4422647.16047672s.1834393.23891353.1834393.39578714c0 .15687362-.0611464.28519956-.1834393.38497783s-.2697145.1496674-.4422647.1496674h-4.6153002c-.1725503 0-.3199719-.04988913-.4422647-.1496674-.1222929-.09977827-.1834394-.22810421-.1834394-.38497783 0-.15687361.0611465-.28880266.1834394-.39578714.1222928-.10698448.2697144-.16047672.4422647-.16047672zm-6.08197737 13.50997782h7.72120467v-.8131929h-3.79610541c-.27306495 0-.49950224-.085643-.67931188-.256929-.17980964-.1712861-.29847284-.3425721-.35598958-.5138581l-.06449694-.2785477v-10.02023282h-2.82530086zm6.77217827-11.36890243h3.2139578c.1295522 0 .240956.05709534.3342113.17128603.0932554.11419069.139883.24972284.139883.40659645 0 .15687362-.0466276.28880267-.139883.39578714-.0932553.10698448-.2046591.16047672-.3342113.16047672h-3.2139578c-.1295523 0-.2373264-.05349224-.3233223-.16047672-.0859959-.10698447-.1289938-.23891352-.1289938-.39578714 0-.15687361.0429979-.29240576.1289938-.40659645s.19377-.17128603.3233223-.17128603zm-11.15043132 15.11557653h7.69942646v-.7491685h-3.79610539c-.25854616 0-.48135376-.0892462-.66842279-.2677384-.18706904-.1784922-.30936193-.3605876-.36687868-.546286l-.06449694-.2569291v-10.04101994h-2.80352266zm14.62237682-4.5606985h-.8191949v2.1410754h-9.89986085s-.04299796.0285477-.12899387.085643c-.08599592.0570954-.12201369.1427384-.10805331.2569291 0 .1141907.01786928.210643.05360784.289357.03573856.0787139.07538603.125.1189424.138858l.06449694.0432373h10.71905575v-2.9542683zm-4.3991936 3.8106985h-.8191949v2.077051h-9.8563045c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144125-.08962561.0105321-.13988296.0748337-.05025735.0643015-.07538603.1607538-.07538603.289357 0 .1141906.02149898.2070399.06449694.2785476.04299795.0715078.08599591.1141907.12899387.1280488l.06449693.0216186h10.69811519v-2.8686252z"
      />
    </g>
  </svg>
`;let ze=class extends r.WF{constructor(){super(...arguments),this.fileListRaw=[],this.fileListSorted=[],this.sortOrderBy="default"}render(){return r.qy`<div class="sort-multi-file-list">${this.sortButton}</div>`}get sortButton(){return{default:r.qy`
        <button
          class="sort-by neutral-icon"
          aria-label="Sort volumes in initial order"
          @click=${()=>this.sortVolumes("title_asc")}
        >
          ${Ie}
        </button>
      `,title_asc:r.qy`
        <button
          class="sort-by asc-icon"
          aria-label="Sort volumes in ascending order"
          @click=${()=>this.sortVolumes("title_desc")}
        >
          ${Pe}
        </button>
      `,title_desc:r.qy`
        <button
          class="sort-by desc-icon"
          aria-label="Sort volumes in descending order"
          @click=${()=>this.sortVolumes("default")}
        >
          ${Me}
        </button>
      `}[this.sortOrderBy]}sortVolumes(e){this.sortOrderBy=e;let t=[];t=this.fileListRaw.sort(((t,n)=>"title_asc"===e?t.title.localeCompare(n.title):"title_desc"===e?n.title.localeCompare(t.title):t.orig_sort-n.orig_sort)),this.dispatchEvent(new CustomEvent("fileListSorted",{detail:{sortType:e,sortedFiles:t},bubbles:!0,composed:!0})),this.fileListSorted=t}static get styles(){return r.AH`
      button.sort-by {
        padding: 0px;
        background-color: transparent;
        border: 0px;
        --iconWidth: var(--menuSliderHeaderIconWidth);
        --iconHeight: var(--menuSliderHeaderIconHeight);
      }
    `}};o([(0,s.MZ)({type:Array})],ze.prototype,"fileListRaw",void 0),o([(0,s.MZ)({type:Array})],ze.prototype,"fileListSorted",void 0),o([(0,s.MZ)({type:String,reflect:!0})],ze.prototype,"sortOrderBy",void 0),ze=o([(0,s.EM)("iaux-in-sort-files-button")],ze);let Te=class extends r.WF{constructor(){super(...arguments),this.baseHost="archive.org",this.sortOrderBy="default",this.subPrefix="",this.fileList=[],this.addSortToUrl=!1}firstUpdated(){const e=this.shadowRoot.querySelector(".content.active");setTimeout((()=>{(null==e?void 0:e.scrollIntoViewIfNeeded)?null==e||e.scrollIntoViewIfNeeded(!0):null==e||e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}),350)}volumeItemWithImageTitle(e){const t=this.fileUrl(e);return r.qy`
      <li class="content active">
        <div class="separator"></div>
        <a class="container" href="${t}">
          <div class="image">
            <img src="${e.image}" alt="preview" />
          </div>
          <div class="text">
            <p class="item-title">${e.title}</p>
            <small>by: ${e.author}</small>
          </div>
        </a>
      </li>
    `}fileUrl(e){const t=`//${this.baseHost}${e.url_path}`;let n=t;return this.addSortToUrl&&(n="default"===this.sortOrderBy?`${t}`:`${t}?sort=${this.sortOrderBy}`),n}get pdfLabel(){return r.qy`<span class="pdf-label"
      ><span class="sr-only">view this</span> PDF</span
    >`}fileLi(e){var t;const n=this.subPrefix===e.file_subprefix?" active":"",o=this.fileUrl(e),i=(null!==(t=e.file_source)&&void 0!==t?t:"").match(/^[^+]+\.pdf$/i);return r.qy`
      <li>
        <div class="separator"></div>
        <div class="content${n}">
          <a href=${o}>
            <p class="item-title">
              ${e.title}${i?this.pdfLabel:r.s6}
            </p>
          </a>
        </div>
      </li>
    `}get fileListTemplate(){const e=Ee(this.fileList,(e=>null==e?void 0:e.file_prefix),this.fileLi.bind(this));return r.qy`
      <ul>
        ${e}
        <div class="separator"></div>
      </ul>
    `}render(){return r.qy` ${this.fileList.length?this.fileListTemplate:r.s6} `}static get styles(){return r.AH`
      :host {
        display: block;
        overflow-y: auto;
        box-sizing: border-box;
        color: var(--primaryTextColor);
        margin-top: 14px;
        margin-bottom: 2rem;
        --activeBorderWidth: 2px;
      }

      a {
        color: #ffffff;
        text-decoration: none;
      }

      img {
        width: 35px;
        height: 45px;
      }

      ul {
        padding: 0;
        list-style: none;
        margin: var(--activeBorderWidth) 0.5rem 1rem 0;
      }

      ul > li:first-child .separator {
        display: none;
      }

      li {
        cursor: pointer;
        position: relative;
      }

      li .content {
        padding: 2px 0 4px 2px;
        border: var(--activeBorderWidth) solid transparent;
        padding: 0.2rem 0 0.4rem 0.2rem;
      }

      li .content.active {
        border: var(--activeBorderWidth) solid #538bc5;
      }

      li.content a {
        display: flex;
      }

      small {
        font-style: italic;
        white-space: initial;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item-title {
        margin-block-start: 0em;
        margin-block-end: 0em;
        font-size: 14px;
        font-weight: bold;
        word-wrap: break-word;
        padding-left: 5px;
      }

      .separator {
        background-color: var(--secondaryBGColor);
        width: 98%;
        margin: 1px auto;
        height: 1px;
      }

      .text {
        padding-left: 10px;
      }

      .icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: 0.7rem;
        border: 1px solid var(--primaryTextColor);
        border-radius: 2px;
        background: var(--activeButtonBg) 50% 50% no-repeat;
      }

      .pdf-label {
        border: 1px solid;
        padding: 2px 5px;
        border-radius: 20px;
        display: inline-block;
        margin-left: 5px;
        font-size: 0.9rem;
      }

      .pdf-label .sr-only {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }
    `}};o([(0,s.MZ)({type:String})],Te.prototype,"baseHost",void 0),o([(0,s.MZ)({type:String})],Te.prototype,"sortOrderBy",void 0),o([(0,s.MZ)({type:String})],Te.prototype,"subPrefix",void 0),o([(0,s.MZ)({type:Array})],Te.prototype,"fileList",void 0),o([(0,s.MZ)({type:Boolean,reflect:!0})],Te.prototype,"addSortToUrl",void 0),Te=o([(0,s.EM)("iaux-in-viewable-files-panel")],Te),n(3851),n(1278),n(3500),n(8706),n(2008),n(113),n(2712),n(4554),n(9085),n(9432),n(1761),n(5746);class De{constructor(e){var t,n,r,o,i,a,s;this.title=null==e?void 0:e.title,this.subtitle=null==e?void 0:e.subtitle,this.headline=null==e?void 0:e.headline,this.message=null==e?void 0:e.message,this.headerColor=null!==(t=null==e?void 0:e.headerColor)&&void 0!==t?t:"#55A183",this.bodyColor=null!==(n=null==e?void 0:e.bodyColor)&&void 0!==n?n:"#f5f5f7",this.showProcessingIndicator=null!==(r=null==e?void 0:e.showProcessingIndicator)&&void 0!==r&&r,this.processingImageMode=null!==(o=null==e?void 0:e.processingImageMode)&&void 0!==o?o:"complete",this.showCloseButton=null===(i=null==e?void 0:e.showCloseButton)||void 0===i||i,this.showHeaderLogo=null===(a=null==e?void 0:e.showHeaderLogo)||void 0===a||a,this.closeOnBackdropClick=null===(s=null==e?void 0:e.closeOnBackdropClick)||void 0===s||s}}const _e=Object.freeze({processing:"processing",complete:"complete"});class $e extends r.WF{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=_e.processing}render(){return r.qy`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const e=r.AH`var(--activityIndicatorCheckmarkColor, #31A481)`,t=r.AH`var(--activityIndicatorCompletedRingColor, #31A481)`,n=r.AH`var(--activityIndicatorLoadingRingColor, #333333)`,o=r.AH`var(--activityIndicatorLoadingDotColor, #333333)`;return r.AH`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${n};
      }

      #activity-dots {
        fill: ${o};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}}window.customElements.define("ia-activity-indicator",$e);var He=r.qy`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="closeTitleID closeDescID"
>
  <title id="closeTitleID">Close icon</title>
  <desc id="closeDescID">A line drawing of an X</desc>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`,qe=r.qy`
<svg
  class="ia-logo"
  viewBox="0 0 27 30"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="logoTitleID logoDescID"
>
  <title id="logoTitleID">Internet Archive logo</title>
  <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <mask id="mask-2" class="fill-color">
      <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
    </mask>
    <use class="fill-color" xlink:href="#path-1"></use>
    <g mask="url(#mask-2)" class="fill-color">
      <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
    </g>
  </g>
</svg>
`;let Re=class extends r.WF{constructor(){super(...arguments),this.config=new De}render(){return r.qy`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?r.qy`<div class="logo-icon">${qe}</div>`:r.s6}
            ${this.config.title?r.qy`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?r.qy`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator?"":"hidden"}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>
              ${this.config.headline?r.qy` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?r.qy` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return r.qy`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${He}
      </button>
    `}static get styles(){const e=r.AH`var(--modalLogoSize, 6.5rem)`,t=r.AH`var(--processingImageSize, 7.5rem)`,n=r.AH`var(--modalCornerRadius, 1rem)`,o=r.AH`var(--modalBorder, 2px solid black)`,i=r.AH`var(--modalBottomMargin, 2.5rem)`,a=r.AH`var(--modalTopMargin, 5rem)`,s=r.AH`var(--modalHeaderBottomPadding, 0.5em)`,l=r.AH`var(--modalBottomPadding, 2rem)`,c=r.AH`var(--modalScrollOffset, 5px)`,u=r.AH`var(--modalTitleFontSize, 1.8rem)`,d=r.AH`var(--modalSubtitleFontSize, 1.4rem)`,h=r.AH`var(--modalHeadlineFontSize, 1.6rem)`,p=r.AH`var(--modalMessageFontSize, 1.4rem)`,f=r.AH`var(--modalTitleLineHeight, normal)`,m=r.AH`var(--modalSubtitleLineHeight, normal)`,v=r.AH`var(--modalHeadlineLineHeight, normal)`,y=r.AH`var(--modalMessageLineHeight, normal)`;return r.AH`
      .processing-logo {
        margin: auto;
        width: ${t};
        height: ${t};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${n};
        width: 100%;
        margin-top: ${a};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${n}) calc(${n}) 0 0;
        border: ${o};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${s};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${u};
        font-weight: bold;
        line-height: ${f};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${d};
        line-height: ${m};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${n}) calc(${n});
        border: ${o};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${c}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${i}));
        min-height: 5rem;
        padding: 0 0 calc(${c}) 0;
      }

      .headline {
        font-size: ${h};
        font-weight: bold;
        text-align: center;
        line-height: ${v};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${p};
        line-height: ${y};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${e};
        height: ${e};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${e} * 0.65);
        height: calc(${e} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      slot::slotted(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `}};var Fe;o([(0,s.MZ)({type:Object})],Re.prototype,"config",void 0),Re=o([(0,s.EM)("modal-template")],Re),function(e){e.Open="open",e.Closed="closed"}(Fe||(Fe={}));class Ne{constructor(e){this.windowResizeThrottler=function(e,t,n){var r,o=n||{},i=o.noTrailing,a=void 0!==i&&i,s=o.noLeading,l=void 0!==s&&s,c=o.debounceMode,u=void 0===c?void 0:c,d=!1,h=0;function p(){r&&clearTimeout(r)}function f(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];var s=this,c=Date.now()-h;function f(){h=Date.now(),t.apply(s,o)}function m(){r=void 0}d||(l||!u||r||f(),p(),void 0===u&&c>e?l?(h=Date.now(),a||(r=setTimeout(u?m:f,e))):f():!0!==a&&(r=setTimeout(u?m:f,void 0===u?e-c:e)))}return f.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;p(),d=!n},f}(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case Fe.Open:this.startResizeListener(),this.stopDocumentScroll();break;case Fe.Closed:this.stopResizeListener(),this.resumeDocumentScroll()}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let Ze=class extends r.WF{constructor(){super(...arguments),this.mode=Fe.Closed,this.hostBridge=new Ne(this),this.closeOnBackdropClick=!0}render(){return r.qy`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=Fe.Closed}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return t=this,n=void 0,o=function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=Fe.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,s)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=r.AH`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=r.AH`var(--modalBackdropZindex, 1000)`,n=r.AH`var(--modalWidth, 32rem)`,o=r.AH`var(--modalMaxWidth, 95%)`,i=r.AH`var(--modalZindex, 2000)`;return r.AH`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${e};
        width: 100%;
        height: 100%;
        z-index: ${t};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${i};
        width: ${n};
        max-width: ${o};
      }
    `}};o([(0,s.MZ)({type:String,reflect:!0})],Ze.prototype,"mode",void 0),o([(0,s.MZ)({type:Object})],Ze.prototype,"customModalContent",void 0),o([(0,s.MZ)({type:Object})],Ze.prototype,"hostBridge",void 0),o([(0,s.P)("modal-template")],Ze.prototype,"modalTemplate",void 0),Ze=o([(0,s.EM)("modal-manager")],Ze);var We=r.qy`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="searchTitleID searchDescID"
>
  <title id="searchTitleID">Search icon</title>
  <desc id="searchDescID">Search for something.</desc>
  <path
    class="fill-color"
    fill="none"
    d="m17.0555551 41.3194459c0-12.7430552 10.3541664-23.1027772 23.0847216-23.1027772 12.7166664 0 23.0777773 10.359722 23.0777773 23.1027772 0 12.7361108-10.3611109 23.0986106-23.0777773 23.0986106-12.7305552 0-23.0847216-10.3624998-23.0847216-23.0986106zm-17.24305512 0c0 22.2916661 18.04583292 40.3472213 40.32777672 40.3472213 8.9208332 0 17.145833-2.9319449 23.8194439-7.8527776l24.1513883 24.0777771c1.2125 1.1402778 2.8430555 1.8430556 4.6374999 1.8430556 3.7444443 0 6.7805554-3.0361111 6.7805554-6.7791665 0-2.0652778-.9222222-3.9069444-2.3736111-5.1499999l-23.718055-23.7458328c4.4152777-6.4791665 7.0152776-14.3055552 7.0152776-22.7402772 0-22.2791661-18.0458328-40.34861006-40.312499-40.34861006-22.2819438 0-40.32777672 18.06944396-40.32777672 40.34861006z" />
</svg>
`;class Ue extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return We}}function Ve(e){return Ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ve(e)}function Ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ye(r.key),r)}}function Ye(e){var t=function(e,t){if("object"!=Ve(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Ve(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Ve(t)?t:t+""}function Je(e,t,n){return t=Qe(t),function(e,t){if(t&&("object"==Ve(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Xe()?Reflect.construct(t,n||[],Qe(e).constructor):t.apply(e,n))}function Xe(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Xe=function(){return!!e})()}function Qe(e){return Qe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Qe(e)}function Ke(e,t){return Ke=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ke(e,t)}customElements.define("ia-icon-search",Ue),n(2062);var et=function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Je(this,t,[e])).et=ue.s6,e.type!==de.OA.CHILD)throw Error(n.constructor.directiveName+"() can only be used in child bindings");return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ke(e,t)}(t,e),function(e,t,n){return t&&Ge(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"render",value:function(e){if(e===ue.s6||null==e)return this.ft=void 0,this.et=e;if(e===ue.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;var t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}])}(de.WL);et.directiveName="unsafeHTML",et.resultType=1;var tt,nt,rt,ot,it,at,st,lt,ct,ut,dt,ht,pt,ft,mt,vt,yt,bt,gt,kt,wt,St=(0,de.u$)(et),Ct=(0,r.AH)(tt||(rt=["data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTMgMTAiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNC4zMzMzMzMzMyAxMC00LjMzMzMzMzMzLTQuMTY2NjY2NjcgMS43MzMzMzMzMy0xLjY2NjY2NjY2IDIuNiAyLjUgNi45MzMzMzMzNy02LjY2NjY2NjY3IDEuNzMzMzMzMyAxLjY2NjY2NjY3eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"],ot||(ot=rt.slice(0)),tt=Object.freeze(Object.defineProperties(rt,{raw:{value:Object.freeze(ot)}})))),xt=(0,r.AH)(nt||(nt=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbGxlZGJ5PSJjbG9zZVRpdGxlSUQgY2xvc2VEZXNjSUQiPjxwYXRoIGQ9Ik0yOS4xOTIgMTAuODA4YTEuNSAxLjUgMCAwMTAgMi4xMkwyMi4xMjIgMjBsNy4wNyA3LjA3MmExLjUgMS41IDAgMDEtMi4xMiAyLjEyMWwtNy4wNzMtNy4wNy03LjA3IDcuMDdhMS41IDEuNSAwIDAxLTIuMTIxLTIuMTJsNy4wNy03LjA3My03LjA3LTcuMDdhMS41IDEuNSAwIDAxMi4xMi0yLjEyMUwyMCAxNy44NzhsNy4wNzItNy4wN2ExLjUgMS41IDAgMDEyLjEyMSAweiIgY2xhc3M9ImZpbGwtY29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="]))),Ot=(0,r.AH)(it||(it=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  .ia-button {\n    min-height: 3rem;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    color: var(--primaryTextColor);\n    line-height: normal;\n    border-radius: .4rem;\n    text-align: center;\n    vertical-align: middle;\n    font-size: 1.4rem;\n    font-family: inherit;\n    display: inline-block;\n    padding: .6rem 1.2rem;\n    border: 1px solid transparent;\n\n    white-space: nowrap;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  .ia-button.link,\n  .ia-button.external {\n    min-height: unset;\n    text-decoration: none;\n  }\n\n  .ia-button:disabled,\n  .ia-button.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  .ia-button.transparent {\n    background-color: transparent;\n  }\n  \n  .ia-button.slim {\n    padding: 0;\n  }\n\n  .ia-button.primary {\n    background-color: var(--primaryCTAFill);\n    border-color: var(--primaryCTABorder);\n  }\n\n  .ia-button.cancel {\n    background-color: var(--primaryErrorCTAFill);\n    border-color: var(--primaryErrorCTABorder);\n  }\n\n  .ia-button.external {\n    background: var(--secondaryCTAFill);\n    border-color: var(--secondaryCTABorder);\n  }\n"])));function jt(e){return jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jt(e)}function Bt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Lt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Et(r.key),r)}}function Et(e){var t=function(e,t){if("object"!=jt(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=jt(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==jt(t)?t:t+""}function Pt(e,t,n){return t=It(t),function(e,t){if(t&&("object"==jt(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Mt()?Reflect.construct(t,n||[],It(e).constructor):t.apply(e,n))}function Mt(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Mt=function(){return!!e})()}function It(e){return It=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},It(e)}function At(e,t){return At=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},At(e,t)}var zt,Tt,Dt,_t,$t=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Pt(this,t)).results=[],e.query="",e.queryInProgress=!1,e.renderHeader=!1,e.renderSearchAllFiles=!1,e.displayResultImages=!1,e.errorMessage="",e.bindBookReaderListeners(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&At(e,t)}(t,e),function(e,t,n){return t&&Lt(e.prototype,t),n&&Lt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"updated",value:function(){this.focusOnInputIfNecessary()}},{key:"bindBookReaderListeners",value:function(){document.addEventListener("BookReader:SearchCallback",this.setResults.bind(this))}},{key:"focusOnInputIfNecessary",value:function(){this.results.length||this.shadowRoot.querySelector("input[type='search']").focus()}},{key:"setResults",value:function(e){var t=e.detail;this.results=t.results}},{key:"setQuery",value:function(e){this.query=e.currentTarget.value,this.query||this.cancelSearch()}},{key:"performSearch",value:function(e){e.preventDefault();var t=e.currentTarget.querySelector('input[type="search"]');t&&t.value&&this.dispatchEvent(new CustomEvent("bookSearchInitiated",{bubbles:!0,composed:!0,detail:{query:this.query}}))}},{key:"selectResult",value:function(e){this.dispatchEvent(new CustomEvent("resultSelected",{bubbles:!0,composed:!0,detail:{match:e}})),this.dispatchEvent(new CustomEvent("closeMenu",{bubbles:!0,composed:!0}))}},{key:"cancelSearch",value:function(){this.queryInProgress=!1,this.dispatchSearchCanceled()}},{key:"dispatchSearchCanceled",value:function(){this.dispatchEvent(new Event("bookSearchCanceled"))}},{key:"resultsCount",get:function(){var e=this.results.length;return e?(0,r.qy)(at||(at=Bt(["<p>("," result",")</p>"])),e,e>1?"s":""):r.s6}},{key:"headerSection",get:function(){var e=(0,r.qy)(st||(st=Bt(["<header>\n      <h3>Search inside</h3>\n      ","\n    </header>"])),this.resultsCount);return this.renderHeader?e:r.s6}},{key:"searchMultipleControls",get:function(){var e=(0,r.qy)(lt||(lt=Bt(['\n      <input name="all_files" id="all_files" type="checkbox" />\n      <label class="checkbox" for="all_files">Search all files</label>\n    '])));return this.renderSearchAllFiles?e:r.s6}},{key:"loadingIndicator",get:function(){return(0,r.qy)(ct||(ct=Bt(['\n      <div class="loading">\n        <ia-activity-indicator mode="processing"></ia-activity-indicator>\n        <p>Searching</p>\n        <button class="ia-button external cancel-search" @click=',">Cancel</button>\n      </div>\n    "])),this.cancelSearch)}},{key:"resultsSet",get:function(){var e=this,t=this.displayResultImages?"show-image":"";return(0,r.qy)(ut||(ut=Bt(['\n      <ul class="results ','">\n        ',"\n      </ul>\n    "])),t,this.results.map((function(t){return(0,r.qy)(dt||(dt=Bt(["\n            <li @click=",">\n              ","\n              <h4>",'</h4>\n              <p class="page-num">Page ',"</p>\n              <p>","</p>\n            </li>\n          "])),e.selectResult.bind(e,t),t.cover?(0,r.qy)(ht||(ht=Bt(['<img src="','" />'])),t.cover):r.s6,t.title||r.s6,t.displayPageNumber,St(t.html))})))}},{key:"searchForm",get:function(){return(0,r.qy)(pt||(pt=Bt(['\n      <form action="" method="get" @submit=',">\n        <fieldset>\n          ",'\n          <input\n            type="search"\n            name="query"\n            alt="Search inside this book."\n            @keyup=',"\n            @search=","\n            .value=","\n          />\n        </fieldset>\n      </form>\n    "])),this.performSearch,this.searchMultipleControls,this.setQuery,this.setQuery,this.query)}},{key:"setErrorMessage",get:function(){return(0,r.qy)(ft||(ft=Bt(['\n      <p class="error-message">',"</p>\n    "])),this.errorMessage)}},{key:"searchCTA",get:function(){return(0,r.qy)(mt||(mt=Bt(['<p class="search-cta"><em>Please enter text to search for</em></p>'])))}},{key:"render",value:function(){var e=!(this.queryInProgress||this.errorMessage||this.queryInProgress||this.results.length);return(0,r.qy)(vt||(vt=Bt(["\n      ","\n      ",'\n      <div class="results-container">\n        ',"\n        ","\n        ","\n        ","\n      </div>\n    "])),this.headerSection,this.searchForm,this.queryInProgress?this.loadingIndicator:r.s6,this.errorMessage?this.setErrorMessage:r.s6,this.results.length?this.resultsSet:r.s6,e?this.searchCTA:r.s6)}}],[{key:"properties",get:function(){return{results:{type:Array},query:{type:String},queryInProgress:{type:Boolean},renderHeader:{type:Boolean},renderSearchAllFiles:{type:Boolean},displayResultImages:{type:Boolean},errorMessage:{type:String}}}},{key:"styles",get:function(){var e=(0,r.AH)(yt||(yt=Bt(["var(--searchResultText, #adaedc)"]))),t=(0,r.AH)(bt||(bt=Bt(["var(--searchResultBg, #272958)"]))),n=(0,r.AH)(gt||(gt=Bt(["var(--searchResultBorder, #adaedc)"]))),o=(0,r.AH)(kt||(kt=Bt(["(--tertiaryBGColor, #333)"]))),i=(0,r.AH)(wt||(wt=Bt(["\n      :host {\n        display: block;\n        height: 100%;\n        padding: 1.5rem 1rem 2rem 0;\n        overflow-y: auto;\n        font-size: 1.4rem;\n        box-sizing: border-box;\n      }\n\n      mark {\n        padding: 0 .2rem;\n        color: ",";\n        background: ",";\n        border: 1px solid ",';\n        border-radius: 2px;\n      }\n\n      h3 {\n        padding: 0;\n        margin: 0 1rem 0 0;\n        font-size: 2rem;\n      }\n\n      header {\n        display: flex;\n        align-items: center;\n        padding: 0 2rem 0 0;\n      }\n      header p {\n        padding: 0;\n        margin: 0;\n        font-size: 1.2rem;\n        font-weight: bold;\n        font-style: italic;\n      }\n\n      fieldset {\n        padding: 0 0 1rem 0;\n        border: none;\n      }\n\n      [type="checkbox"] {\n        display: none;\n      }\n\n      label {\n        display: block;\n        text-align: center;\n      }\n\n      label.checkbox {\n        padding-bottom: .5rem;\n        font-size: 1.6rem;\n        line-height: 150%;\n        vertical-align: middle;\n      }\n\n      label.checkbox:after {\n        display: inline-block;\n        width: 14px;\n        height: 14px;\n        margin-left: .7rem;\n        content: "";\n        border-radius: 2px;\n      }\n      :checked + label.checkbox:after {\n        background-image: url(\'','\');\n      }\n\n      label.checkbox[for="all_files"]:after {\n        background: ',' 50% 50% no-repeat;\n        border: 1px solid var(--primaryTextColor);\n      }\n\n      [type="search"] {\n        color: var(--primaryTextColor);\n        border: 1px solid var(--primaryTextColor);\n        -webkit-appearance: textfield;\n        width: 100%;\n        height: 3rem;\n        padding: 0 1.5rem;\n        box-sizing: border-box;\n        font: normal 1.6rem "Helvetica qNeue", Helvetica, Arial, sans-serif;\n        border-radius: 1.5rem;\n        background: transparent;\n      }\n      [type="search"]:focus {\n        outline: none;\n      }\n      [type="search"]::-webkit-search-cancel-button {\n        width: 18px;\n        height: 18px;\n        -webkit-appearance: none;\n        appearance: none;\n        -webkit-mask: url(\'',"') 0 0 no-repeat;\n        mask: url('","') 0 0 no-repeat;\n        -webkit-mask-size: 100%;\n        mask-size: 100%;\n        background: #fff;\n      }\n\n      p.page-num {\n        font-weight: bold;\n        padding-bottom: 0;\n      }\n\n      p.search-cta {\n        text-align: center;\n      }\n\n      .results-container {\n        padding-bottom: 2rem;\n      }\n\n      ul {\n        padding: 0 0 2rem 0;\n        margin: 0;\n        list-style: none;\n      }\n\n      ul.show-image li {\n        display: grid;\n      }\n\n      li {\n        cursor: pointer;\n        grid-template-columns: 30px 1fr;\n        grid-gap: 0 .5rem;\n      }\n\n      li img {\n        display: block;\n        width: 100%;\n      }\n\n      li h4 {\n        grid-column: 2 / 3;\n        padding: 0 0 2rem 0;\n        margin: 0;\n        font-weight: normal;\n      }\n\n      li p {\n        grid-column: 2 / 3;\n        padding: 0 0 1.5rem 0;\n        margin: 0;\n        font-size: 1.2rem;\n      }\n\n      .loading {\n        text-align: center;\n      }\n\n      .loading p {\n        padding: 0 0 1rem 0;\n        margin: 0;\n        font-size: 1.2rem;\n      }\n\n      ia-activity-indicator {\n        display: block;\n        width: 40px;\n        height: 40px;\n        margin: 0 auto;\n      }\n    "])),e,t,n,Ct,o,xt,xt);return[Ot,i]}}])}(r.WF);function Ht(e){return Ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ht(e)}function qt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Rt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ft(r.key),r)}}function Ft(e){var t=function(e,t){if("object"!=Ht(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Ht(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Ht(t)?t:t+""}customElements.define("ia-book-search-results",$t);var Nt,Zt,Wt,Ut,Vt,Gt,Yt,Jt,Xt,Qt,Kt,en={query:"",results:[],resultsCount:0,queryInProgress:!1,errorMessage:""},tn=function(){return function(e,t,n){return t&&Rt(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t){var n=t.onProviderChange,o=t.bookreader;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.onBookSearchInitiated=this.onBookSearchInitiated.bind(this),this.onSearchStarted=this.onSearchStarted.bind(this),this.onSearchRequestError=this.onSearchRequestError.bind(this),this.onSearchResultsClicked=this.onSearchResultsClicked.bind(this),this.onSearchResultsChange=this.onSearchResultsChange.bind(this),this.onSearchResultsCleared=this.onSearchResultsCleared.bind(this),this.searchCanceledInMenu=this.searchCanceledInMenu.bind(this),this.bindEventListeners=this.bindEventListeners.bind(this),this.getMenuDetails=this.getMenuDetails.bind(this),this.getComponent=this.getComponent.bind(this),this.updateMenu=this.updateMenu.bind(this),this.onProviderChange=n,this.bookreader=o,this.icon=(0,r.qy)(zt||(zt=qt(['<ia-icon-search style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-search>']))),this.label="Search inside",this.menuDetails=this.getMenuDetails(),this.id="search",this.component=this.getComponent(),this.bindEventListeners()}),[{key:"getMenuDetails",value:function(){var e=en,t=e.resultsCount,n=e.query;if(e.queryInProgress||!n)return r.s6;var o=1===t?"result":"results";return(0,r.qy)(Tt||(Tt=qt(["("," ",")"])),t,o)}},{key:"bindEventListeners",value:function(){var e=this;window.addEventListener("BookReader:SearchStarted",this.onSearchStarted),window.addEventListener("BookReader:SearchCallback",this.onSearchResultsChange),window.addEventListener("BookReader:SearchCallbackEmpty",(function(t){e.onSearchRequestError(t,"noResults")})),window.addEventListener("BookReader:SearchCallbackNotIndexed",(function(t){e.onSearchRequestError(t,"notIndexed")})),window.addEventListener("BookReader:SearchCallbackError",(function(t){e.onSearchRequestError(t)})),window.addEventListener("BookReader:SearchResultsCleared",(function(){e.onSearchResultsCleared()})),window.addEventListener("BookReader:SearchCanceled",(function(t){e.onSearchCanceled(t)}))}},{key:"onSearchCanceled",value:function(){en={query:"",results:[],resultsCount:0,queryInProgress:!1,errorMessage:""},this.updateMenu({searchCanceled:!0}),this.bookreader.urlPlugin&&this.updateSearchInUrl()}},{key:"onSearchStarted",value:function(e){var t=e.detail.props,n=t.term,r=void 0===n?"":n,o=t.instance;o&&(this.bookreader=o),en.query=r,en.results=[],en.resultsCount=0,en.queryInProgress=!0,en.errorMessage="",this.updateMenu()}},{key:"onBookSearchInitiated",value:function(e){var t=e.detail;en.query=t.query,this.bookreader.search(en.query)}},{key:"onSearchRequestError",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",o=e.detail.props,i=o.instance,a=o.results;i&&(this.bookreader=i);var s={noResults:"0 results",notIndexed:"This book hasn't been indexed for searching yet.  We've just started indexing it,\n       so search should be available soon.  Please try again later.  Thanks!",default:"Sorry, there was an error with your search.  Please try again."},l=null!==(t=s[n])&&void 0!==t?t:s.default;en.query=(null==a?void 0:a.q)||"",en.results=[],en.resultsCount=0,en.queryInProgress=!1,en.errorMessage=(0,r.qy)(Dt||(Dt=qt(['<p class="error">',"</p>"])),l),this.updateMenu()}},{key:"onSearchResultsChange",value:function(e){var t=e.detail.props,n=void 0===t?{}:t,r=n.instance,o=void 0===r?null:r,i=n.results,a=void 0===i?[]:i;o&&(this.bookreader=o);var s=a.matches||[],l=s.length,c=a.q;en={results:s,resultsCount:l,query:c,queryInProgress:!1,errorMessage:""},this.updateMenu()}},{key:"searchCanceledInMenu",value:function(){this.bookreader._plugins.search.cancelSearchRequest()}},{key:"onSearchResultsCleared",value:function(){en={query:"",results:[],resultsCount:0,queryInProgress:!1,errorMessage:""},this.updateMenu({openMenu:!1}),this.bookreader._plugins.search.searchView.clearSearchFieldAndResults(!1),this.bookreader.urlPlugin&&this.updateSearchInUrl()}},{key:"updateSearchInUrl",value:function(){this.bookreader.urlPlugin&&(this.bookreader.urlPlugin.pullFromAddressBar(),en.query?this.bookreader.urlPlugin.setUrlParam("q",en.query):this.bookreader.urlPlugin.removeUrlParam("q"))}},{key:"updateMenu",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.menuDetails=this.getMenuDetails(),this.component=this.getComponent(),this.onProviderChange(this.bookreader,e)}},{key:"getComponent",value:function(){var e=en,t=e.query,n=e.results,o=e.queryInProgress,i=e.errorMessage;return(0,r.qy)(_t||(_t=qt(["\n    <ia-book-search-results\n      .query=","\n      .results=","\n      .errorMessage=","\n      ?queryInProgress=","\n      ?renderSearchAllFiles=","\n      @resultSelected=","\n      @bookSearchInitiated=","\n      @bookSearchResultsCleared=","\n      @bookSearchCanceled=","\n    ></ia-book-search-results>\n  "])),t,n,i,o,!1,this.onSearchResultsClicked,this.onBookSearchInitiated,this.onSearchResultsCleared,this.searchCanceledInMenu)}},{key:"onSearchResultsClicked",value:function(e){var t=e.detail;this.bookreader._plugins.search.jumpToMatch(t.match.matchIndex)}}])}(),nn=r.qy`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="downloadTitleID downloadDescID"
>
  <title id="downloadTitleID">Download icon</title>
  <desc id="downloadDescID">An arrow pointing downward at an empty document tray</desc>
  <g class="fill-color">

    <path d="m50 80 33.3333333-43.3333333h-20v-36.6666667h-26.6666666v36.6666667h-20zm50 20v-13.3333333h-100v13.3333333z"/>
  </g>
</svg>
`;class rn extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return nn}}function on(e){return on="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},on(e)}function an(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function sn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ln(r.key),r)}}function ln(e){var t=function(e,t){if("object"!=on(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=on(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==on(t)?t:t+""}function cn(e,t,n){return t=dn(t),function(e,t){if(t&&("object"==on(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,un()?Reflect.construct(t,n||[],dn(e).constructor):t.apply(e,n))}function un(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(un=function(){return!!e})()}function dn(e){return dn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},dn(e)}function hn(e,t){return hn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},hn(e,t)}customElements.define("ia-icon-dl",rn);var pn,fn,mn=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=cn(this,t)).downloads=[],e.expiration=0,e.renderHeader=!1,e.isBookProtected=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hn(e,t)}(t,e),function(e,t,n){return t&&sn(e.prototype,t),n&&sn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"formatsCount",get:function(){var e=this.downloads.length;return e?(0,r.qy)(Nt||(Nt=an(["<p>"," format","</p>"])),e,e>1?"s":""):(0,r.qy)(Zt||(Zt=an([""])))}},{key:"loanExpiryMessage",get:function(){return this.expiration?(0,r.qy)(Wt||(Wt=an(["<h2>These files will expire in "," days.</h2>"])),this.expiration):(0,r.qy)(Ut||(Ut=an([""])))}},{key:"renderDownloadOptions",value:function(){return this.downloads.map((function(e){return(0,r.qy)(Vt||(Vt=an(['\n        <li>\n          <a class="ia-button link primary" href="','">Get ',"</a>\n          ","\n        </li>\n      "])),e.url,e.type,e.note?(0,r.qy)(Gt||(Gt=an(["<p>","</p>"])),e.note):(0,r.qy)(Yt||(Yt=an([""]))))}))}},{key:"hasLCPOption",get:function(){var e=/^(LCP)/g;return this.downloads.some((function(t){var n;return null===(n=t.type)||void 0===n?void 0:n.match(e)}))}},{key:"header",get:function(){return this.renderHeader?(0,r.qy)(Jt||(Jt=an(["\n      <header>\n        <h3>Downloadable files</h3>\n        ","\n      </header>\n    "])),this.formatsCount):r.s6}},{key:"installLCPSoftwareMsg",get:function(){return(0,r.qy)(Xt||(Xt=an(['\n    <p>For LCP downloads, make sure you have LCP software such as <a href="https://thorium.edrlab.org/" rel="noopener noreferrer nofollow" target="_blank">Thorium (desktop)</a>, <a href="https://apps.apple.com/us/app/cantook-by-aldiko/id1476410111" rel="noopener noreferrer nofollow" target="_blank">Cantook (iOS)</a> or <a href="https://play.google.com/store/apps/details?id=com.aldiko.android" rel="noopener noreferrer nofollow" target="_blank">Cantook (Android)</a> installed on your device.</p>\n  '])))}},{key:"render",value:function(){return(0,r.qy)(Qt||(Qt=an(["\n      ","\n      ","\n      <ul>","</ul>\n      ","\n    "])),this.header,this.loanExpiryMessage,this.renderDownloadOptions(),this.hasLCPOption?this.installLCPSoftwareMsg:r.s6)}}],[{key:"properties",get:function(){return{downloads:{type:Array},expiration:{type:Number},renderHeader:{type:Boolean},isBookProtected:{type:Boolean}}}},{key:"styles",get:function(){var e=(0,r.AH)(Kt||(Kt=an(["\n      :host {\n        display: block;\n        height: 100%;\n        padding: 1.5rem 0;\n        overflow-y: auto;\n        font-size: 1.4rem;\n        box-sizing: border-box;\n      }\n\n      a.close ia-icon {\n        --iconWidth: 18px;\n        --iconHeight: 18px;\n      }\n      a.close {\n        justify-self: end;\n      }\n\n      header {\n        display: flex;\n        align-items: center;\n        padding: 0 2rem;\n      }\n      header p {\n        padding: 0;\n        margin: 0;\n        font-size: 1.2rem;\n        font-weight: bold;\n        font-style: italic;\n      }\n      header div {\n        display: flex;\n        align-items: baseline;\n      }      \n\n      h2 {\n        font-size: 1.6rem;\n      }\n\n      h3 {\n        padding: 0;\n        margin: 0 1rem 0 0;\n        font-size: 1.4rem;\n      }\n\n      ul {\n        padding: 0;\n        margin: 0;\n        list-style: none;\n      }\n\n      p {\n        margin: .3rem 0 0 0;\n      }\n\n      li,\n      ul + p {\n        padding-bottom: 1.2rem;\n        font-size: 1.2rem;\n        line-height: 140%;\n      }\n    "])));return[Ot,e]}}])}(r.WF);function vn(e){return vn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vn(e)}function yn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function bn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function gn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,kn(r.key),r)}}function kn(e){var t=function(e,t){if("object"!=vn(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=vn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==vn(t)?t:t+""}customElements.define("ia-book-downloads",mn);var wn={pdf:{type:"Encrypted Adobe PDF",url:"#",note:"PDF files contain high quality images of pages."},lcppdf:{type:"Get LCP PDF",url:"#",note:"PDF files contain high quality images of pages."},lcpepub:{type:"Get LCP ePub",url:"#",note:"ePub files are smaller in size, but may contain errors."},epub:{type:"Encrypted Adobe ePub",url:"#",note:"ePub files are smaller in size, but may contain errors."}},Sn={pdf:"PDF",epub:"ePub",lcppdf:"LCP PDF",lcpepub:"LCP ePub"},Cn=function(){return function(e,t,n){return t&&gn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t){var n,o=t.bookreader;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.icon=(0,r.qy)(pn||(pn=bn(['<ia-icon-dl style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-dl>']))),this.label="Downloadable files",this.menuDetails="",this.downloads=[],this.id="downloads",this.component="",this.isBookProtected=(null==o||null===(n=o.options)||void 0===n?void 0:n.isProtected)||!1}),[{key:"update",value:function(e){this.computeAvailableTypes(e),this.component=this.menu,this.component.isBookProtected=this.isBookProtected;var t=1===this.downloads.length?"":"s";this.menuDetails="(".concat(this.downloads.length," format").concat(t,")")}},{key:"computeAvailableTypes",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).reduce((function(t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return yn(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yn(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],2),r=n[0],o=void 0===r?"":r,i=n[1],a=void 0===i?"":i,s=o.toLowerCase(),l=wn[s]||null;if(l){var c=e.isBookProtected?wn[s].type:Sn[s],u=Object.assign({},l,{url:a,type:c});t.push(u)}return t}),[]);this.downloads=t}},{key:"menu",get:function(){return(0,r.qy)(fn||(fn=bn(["<ia-book-downloads .downloads=","></ia-book-downloads>"])),this.downloads)}}])}(),xn=(n(8598),r.qy`
<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="visualAdjustmentTitleID visualAdjustmentDescID"
>
  <title id="visualAdjustmentTitleID">Visual adjustment</title>
  <desc id="visualAdjustmentDescID">A circle with its left hemisphere filled</desc>
  <path class="fill-color" d="m12 0c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12-12-5.372583-12-12 5.372583-12 12-12zm0 2v20l.2664041-.0034797c5.399703-.1412166 9.7335959-4.562751 9.7335959-9.9965203 0-5.5228475-4.4771525-10-10-10z" fill-rule="evenodd" />
</svg>
`);class On extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return xn}}customElements.define("ia-icon-visual-adjustment",On);var jn=r.qy`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-minusTitleID magnify-minusDescID"
>
  <title id="magnify-minusTitleID">Zoom out</title>
  <desc id="magnify-minusDescID">Take a look further.</desc>
  <g
    class="fill-color"
    fill="none"
    fill-rule="nonzero"
  >
    <path d="m2.3239824 87.3815869 25.8938394-23.8143095c-4.5929593-6.6937643-6.889439-14.1059452-6.889439-22.2365428 0-7.1360431 1.7567382-13.7186647 5.2702146-19.7478649 3.5134763-6.0292002 8.2852035-10.8003118 14.3151815-14.31333499 6.029978-3.51302314 12.6134488-5.26953471 19.7504125-5.26953471s13.7204346 1.75651157 19.7504126 5.26953471c6.029978 3.51302319 10.8017051 8.28413479 14.3151815 14.31333499 3.5134763 6.0292002 5.2702145 12.6118218 5.2702145 19.7478649s-1.7567382 13.7324143-5.2702145 19.7891137c-3.5134764 6.0566994-8.2852035 10.8415607-14.3151815 14.3545838-6.029978 3.5130232-12.6134489 5.2695347-19.7504126 5.2695347-8.5762743 0-16.3217363-2.5723212-23.2363861-7.7169637l-26.3063807 24.2302349c-1.27200216 1.1618413-2.76631826 1.742762-4.48294825 1.742762-1.826641 0-3.38971397-.6496687-4.68921892-1.949006s-1.94925743-2.8622087-1.94925743-4.688614c0-1.9364022.7746608-3.5955208 2.3239824-4.9773557zm58.3436469-19.9162976c7.1919692 0 13.3331041-2.5585716 18.4234048-7.6757149s7.635451-11.2712357 7.635451-18.4622772-2.5451503-13.3313843-7.635451-18.4210284-11.2314356-7.6344661-18.4234048-7.6344661-13.3331042 2.544822-18.4234049 7.6344661-7.635451 11.2299869-7.635451 18.4210284 2.5451503 13.3451339 7.635451 18.4622772 11.2314357 7.6757149 18.4234049 7.6757149zm-14.9374313-21.3256316h31.2878163v-9.5422233h-31.2878163z"/>
  </g>
</svg>
`;class Bn extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return jn}}customElements.define("ia-icon-magnify-minus",Bn);var Ln,En,Pn,Mn,In,An,zn,Tn=r.qy`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-plusTitleID magnify-plusDescID"
>
  <title id="magnify-plusTitleID">Zoom in</title>
  <desc id="magnify-plusDescID">Take a look closer.</desc>
  <g
    class="fill-color"
    fill="none"
    fill-rule="nonzero"
  >
    <path d="m2.40305276 87.4017263 25.81133064-23.7730295c-4.5356618-6.5723551-6.8034928-14.000283-6.8034928-22.2837838 0-7.1236734 1.7429868-13.6948847 5.2289603-19.7136338 3.4859736-6.0187491 8.2577006-10.7953163 14.3151813-14.32970144 6.0574806-3.53438517 12.6547027-5.30157776 19.7916662-5.30157776 10.8429591 0 20.0964884 3.85236545 27.760588 11.5570964 7.6640996 7.7047309 11.4950036 16.9684802 11.4927136 27.791248 0 10.8799585-3.8309059 20.1574336-11.4927136 27.8324254-7.6618077 7.6749917-16.915337 11.5124876-27.760588 11.5124876-8.6312796 0-16.431747-2.5678624-23.4014021-7.7035871l-26.1413636 24.188234c-1.21699671 1.2147305-2.73881553 1.8220957-4.56545649 1.8220957s-3.3897139-.6485425-4.68921882-1.9456276c-1.29950493-1.297085-1.94925739-2.8572473-1.94925739-4.6804867 0-1.8781426.80216353-3.5343852 2.4064906-4.9687279zm58.34020784-19.878343c7.1369635 0 13.264347-2.5678623 18.3821503-7.7035871 5.1178034-5.1357247 7.676705-11.2928753 7.676705-18.4714518s-2.5589016-13.3082755-7.676705-18.3890972c-5.1178033-5.0808217-11.2451868-7.6212325-18.3821503-7.6212325-7.2469746 0-13.4156121 2.5404108-18.5059127 7.6212325s-7.6354509 11.2105207-7.6354509 18.3890972 2.5589016 13.3357271 7.676705 18.4714518c5.1178033 5.1357248 11.2726895 7.7035871 18.4646586 7.7035871zm-13.3594607-21.8685793h10.206958v10.1879511h7.2194718v-10.1879511h10.206958v-7.206028h-10.206958v-10.187951h-7.2194718v10.187951h-10.206958z"/>
  </g>
</svg>
`;class Dn extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Tn}}function _n(e){return _n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_n(e)}function $n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Hn(e){return function(e){if(Array.isArray(e))return qn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return qn(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qn(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Rn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Fn(r.key),r)}}function Fn(e){var t=function(e,t){if("object"!=_n(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=_n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_n(t)?t:t+""}function Nn(e,t,n){return t=Wn(t),function(e,t){if(t&&("object"==_n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Zn()?Reflect.construct(t,n||[],Wn(e).constructor):t.apply(e,n))}function Zn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Zn=function(){return!!e})()}function Wn(e){return Wn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Wn(e)}function Un(e,t){return Un=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Un(e,t)}customElements.define("ia-icon-magnify-plus",Dn);var Vn,Gn,Yn=function(e){return"visualAdjustment".concat(e)},Jn={optionChange:Yn("OptionChanged"),zoomIn:Yn("ZoomIn"),zoomOut:Yn("ZoomOut")},Xn=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Nn(this,t)).activeCount=0,e.options=[],e.renderHeader=!1,e.showZoomControls=!0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Un(e,t)}(t,e),function(e,t,n){return t&&Rn(e.prototype,t),n&&Rn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"firstUpdated",value:function(){this.activeCount=this.activeOptions.length,this.emitOptionChangedEvent()}},{key:"activeOptions",get:function(){return this.options.reduce((function(e,t){return t.active?[].concat(Hn(e),[t.id]):e}),[])}},{key:"prepareEventDetails",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{options:this.options,activeCount:this.activeCount,changedOptionId:e}}},{key:"emitOptionChangedEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.prepareEventDetails(e);this.dispatchEvent(new CustomEvent(Jn.optionChange,{bubbles:!0,composed:!0,detail:t}))}},{key:"emitZoomIn",value:function(){this.dispatchEvent(new CustomEvent(Jn.zoomIn))}},{key:"emitZoomOut",value:function(){this.dispatchEvent(new CustomEvent(Jn.zoomOut))}},{key:"changeActiveStateFor",value:function(e){var t=Hn(this.options),n=t.find((function(t){return t.id===e}));n.active=!n.active,this.options=t,this.activeCount=this.activeOptions.length,this.emitOptionChangedEvent(n.id)}},{key:"setRangeValue",value:function(e,t){var n=Hn(this.options);n.find((function(t){return t.id===e})).value=t,this.options=Hn(n)}},{key:"rangeSlider",value:function(e){var t=this;return(0,r.qy)(Ln||(Ln=$n(["\n      <div class=",'>\n        <input\n          type="range"\n          name="','_range"\n          min=',"\n          max=","\n          step=","\n          .value=","\n          @input=","\n          @change=","\n        />\n        <p>","%</p>\n      </div>\n    "])),"range".concat(e.active?" visible":""),e.id,e.min||0,e.max||100,e.step||1,e.value,(function(n){return t.setRangeValue(e.id,n.target.value)}),(function(){return t.emitOptionChangedEvent()}),e.value)}},{key:"adjustmentCheckbox",value:function(e){var t=this,n="adjustment_".concat(e.id);return(0,r.qy)(En||(En=$n(['<li>\n      <label for="','">\n        <span class="name">','</span>\n        <input\n          type="checkbox"\n          name="','"\n          id="','"\n          @change=',"\n          ?checked=",'\n        />\n        <span class="icon"></span>\n      </label>\n      ',"\n    </li>"])),n,e.name,n,n,(function(){return t.changeActiveStateFor(e.id)}),e.active,void 0!==e.value?this.rangeSlider(e):r.s6)}},{key:"headerSection",get:function(){var e=this.activeCount?(0,r.qy)(Pn||(Pn=$n(["<p>("," active)</p>"])),this.activeCount):r.s6,t=(0,r.qy)(Mn||(Mn=$n(["<header>\n      <h3>Visual adjustments</h3>\n      ","\n    </header>"])),e);return this.renderHeader?t:r.s6}},{key:"zoomControls",get:function(){return(0,r.qy)(In||(In=$n(['\n      <h4>Adjust zoom</h4>\n      <button class="zoom_out" @click=',' title="zoom out">\n        <ia-icon-magnify-minus></ia-icon-magnify-minus>\n      </button>\n      <button class="zoom_in" @click=',' title="zoom in">\n        <ia-icon-magnify-plus></ia-icon-magnify-plus>\n      </button>\n    '])),this.emitZoomOut,this.emitZoomIn)}},{key:"render",value:function(){return(0,r.qy)(An||(An=$n(["\n      ","\n      <ul>\n        ","\n      </ul>\n      ","\n    "])),this.headerSection,Ee(this.options,(function(e){return e.id}),this.adjustmentCheckbox.bind(this)),this.showZoomControls?this.zoomControls:r.s6)}}],[{key:"properties",get:function(){return{activeCount:{type:Number},options:{type:Array},renderHeader:{type:Boolean},showZoomControls:{type:Boolean}}}},{key:"styles",get:function(){return(0,r.AH)(zn||(zn=$n(['\n    :host {\n      display: block;\n      height: 100%;\n      overflow-y: auto;\n      font-size: 1.4rem;\n      box-sizing: border-box;\n    }\n\n    header {\n      display: flex;\n      align-items: baseline;\n    }\n\n    h3 {\n      padding: 0;\n      margin: 0 1rem 0 0;\n      font-size: 1.6rem;\n    }\n\n    header p {\n      padding: 0;\n      margin: 0;\n      font-size: 1.2rem;\n      font-weight: bold;\n      font-style: italic;\n    }\n\n    ul {\n      padding: 1rem 2rem 0 0;\n      list-style: none;\n      margin-top: 0;\n    }\n\n    [type="checkbox"] {\n      display: none;\n    }\n\n    label {\n      display: flex;\n      justify-content: space-between;\n      align-items: baseline;\n      font-size: 1.4rem;\n      font-weight: bold;\n      line-height: 150%;\n      vertical-align: middle;\n    }\n\n    .icon {\n      display: inline-block;\n      width: 14px;\n      height: 14px;\n      margin-left: .7rem;\n      border: 1px solid var(--primaryTextColor);\n      border-radius: 2px;\n      background: var(--activeButtonBg) 50% 50% no-repeat;\n    }\n    :checked + .icon {\n      background-image: url(\'',"');\n    }\n\n    .range {\n      display: none;\n      padding-top: .5rem;\n    }\n    .range.visible {\n      display: flex;\n    }\n\n    .range p {\n      margin-left: 1rem;\n    }\n\n    h4 {\n      padding: 1rem 0;\n      margin: 0;\n      font-size: 1.4rem;\n    }\n\n    button {\n      -webkit-appearance: none;\n      appearance: none;\n      border: none;\n      border-radius: 0;\n      background: transparent;\n      outline: none;\n      cursor: pointer;\n      --iconFillColor: var(--primaryTextColor);\n      --iconStrokeColor: var(--primaryTextColor);\n      height: 4rem;\n      width: 4rem;\n    }\n\n    button * {\n      display: inline-block;\n    }"])),Ct)}}])}(r.WF);function Qn(e){return Qn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qn(e)}function Kn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function er(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function tr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nr(r.key),r)}}function nr(e){var t=function(e,t){if("object"!=Qn(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Qn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Qn(t)?t:t+""}customElements.define("ia-book-visual-adjustments",Xn);var rr,or,ir=[{id:"brightness",name:"Adjust brightness",active:!1,min:0,max:150,step:1,value:100},{id:"contrast",name:"Adjust contrast",active:!1,min:0,max:150,step:1,value:100},{id:"invert",name:"Invert colors (dark mode)",active:!1},{id:"grayscale",name:"Convert to grayscale",active:!1}],ar=function(){return function(e,t,n){return t&&tr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.onProviderChange,o=t.bookreader;this.onProviderChange=n,this.bookContainer=o.refs.$brContainer,this.bookreader=o,this.onAdjustmentChange=this.onAdjustmentChange.bind(this),this.optionUpdateComplete=this.optionUpdateComplete.bind(this),this.updateOptionsCount=this.updateOptionsCount.bind(this),this.onZoomIn=this.onZoomIn.bind(this),this.onZoomOut=this.onZoomOut.bind(this),this.activeCount=0,this.icon=(0,r.qy)(Vn||(Vn=er(['<ia-icon-visual-adjustment style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-visual-adjustment>']))),this.label="Visual Adjustments",this.menuDetails=this.updateOptionsCount(),this.id="adjustment",this.component=(0,r.qy)(Gn||(Gn=er(["\n      <ia-book-visual-adjustments\n        .options=","\n        @visualAdjustmentOptionChanged=","\n        @visualAdjustmentZoomIn=","\n        @visualAdjustmentZoomOut=","\n      ></ia-book-visual-adjustments>\n    "])),ir,this.onAdjustmentChange,this.onZoomIn,this.onZoomOut)}),[{key:"onZoomIn",value:function(){this.bookreader.zoom(1)}},{key:"onZoomOut",value:function(){this.bookreader.zoom(-1)}},{key:"onAdjustmentChange",value:function(e){var t=e.detail,n={brightness:function(e){return"brightness(".concat(e,"%)")},contrast:function(e){return"contrast(".concat(e,"%)")},grayscale:function(){return"grayscale(100%)"},invert:function(){return"invert(100%)"}},r=t.options.reduce((function(e,t){var r="".concat(t.active?n[t.id](t.value):"");return r?[].concat(function(e){return function(e){if(Array.isArray(e))return Kn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Kn(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Kn(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),[r]):e}),[]).join(" ");this.bookContainer.css("filter",r),this.optionUpdateComplete(e)}},{key:"optionUpdateComplete",value:function(e){this.activeCount=e.detail.activeCount,this.updateOptionsCount(e),this.onProviderChange()}},{key:"updateOptionsCount",value:function(){this.menuDetails="(".concat(this.activeCount," active)")}}])}();function sr(e){return sr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sr(e)}function lr(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function cr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ur(r.key),r)}}function ur(e){var t=function(e,t){if("object"!=sr(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=sr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==sr(t)?t:t+""}function dr(e,t,n){return t=pr(t),function(e,t){if(t&&("object"==sr(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,hr()?Reflect.construct(t,n||[],pr(e).constructor):t.apply(e,n))}function hr(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(hr=function(){return!!e})()}function pr(e){return pr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},pr(e)}function fr(e,t){return fr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},fr(e,t)}var mr,vr,yr=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),dr(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fr(e,t)}(t,e),function(e,t,n){return t&&cr(e.prototype,t),n&&cr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"render",value:function(){var e=this;return(0,r.qy)(rr||(rr=lr(['\n      <div>\n        <button class="delete" @click=',">Delete</button>\n        <button @click=",">Cancel</button>\n      </div>\n    "])),(function(){return e.deleteAction({detail:{id:"".concat(e.pageID)}})}),(function(){return e.cancelAction()}))}}],[{key:"styles",get:function(){return(0,r.AH)(or||(or=lr(['\n      div {\n        display: flex;\n        justify-content: center;\n        padding-top: 2rem;\n      }\n\n      button {\n        appearance: none;\n        padding: 0.5rem 1rem;\n        margin: 0 .5rem;\n        box-sizing: border-box;\n        font: 1.3rem "Helvetica Neue", Helvetica, Arial, sans-serif;\n        color: var(--primaryTextColor);\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        background: var(--primaryCTAFill);\n      }\n\n      .delete {\n        background: var(--primaryErrorCTAFill);\n      }\n    '])))}},{key:"properties",get:function(){return{cancelAction:{type:Function},deleteAction:{type:Function},pageID:{type:String}}}}])}(r.WF);function br(e){return br="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},br(e)}function gr(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function kr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,wr(r.key),r)}}function wr(e){var t=function(e,t){if("object"!=br(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=br(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==br(t)?t:t+""}function Sr(e,t,n){return t=xr(t),function(e,t){if(t&&("object"==br(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Cr()?Reflect.construct(t,n||[],xr(e).constructor):t.apply(e,n))}function Cr(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Cr=function(){return!!e})()}function xr(e){return xr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},xr(e)}function Or(e,t){return Or=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Or(e,t)}customElements.define("delete-modal-actions",yr);var jr,Br=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Sr(this,t)).state="hollow",e.side=void 0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Or(e,t)}(t,e),function(e,t,n){return t&&kr(e.prototype,t),n&&kr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("bookmarkButtonClicked"))}},{key:"title",get:function(){return"".concat("hollow"===this.state?"Add":"Remove"," bookmark")}},{key:"render",value:function(){var e=this.side||"right";return(0,r.qy)(mr||(mr=gr(["\n      <button title="," @click="," class=",">\n        <icon-bookmark state=","></icon-bookmark>\n      </button>\n    "])),this.title,this.handleClick,e,this.state)}}],[{key:"styles",get:function(){return(0,r.AH)(vr||(vr=gr(["\n      button {\n        -webkit-appearance: none;\n        appearance: none;\n        outline: 0;\n        border: none;\n        padding: 0;\n        height: 4rem;\n        width: 4rem;\n        background: transparent;\n        cursor: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 16 24' width='16'%3E%3Cg fill='%23333' fill-rule='evenodd'%3E%3Cpath d='m15 0c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1zm-2 2h-10c-.51283584 0-.93550716.38604019-.99327227.88337887l-.00672773.11662113v18l6-4.3181818 6 4.3181818v-18c0-.51283584-.3860402-.93550716-.8833789-.99327227z'/%3E%3Cpath d='m8.75 6v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\"), pointer;\n        position: relative;\n      }\n      button > * {\n        display: block;\n        position: absolute;\n        top: 0.2rem;\n      }\n      button.left > * {\n        left: 0.2rem;\n      }\n\n      button.right > * {\n        right: 0.2rem;\n      }\n    "])))}},{key:"properties",get:function(){return{side:{type:String},state:{type:String}}}}])}(r.WF);function Lr(e){return Lr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lr(e)}function Er(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Pr(r.key),r)}}function Pr(e){var t=function(e,t){if("object"!=Lr(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Lr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Lr(t)?t:t+""}function Mr(e,t,n){return t=Ar(t),function(e,t){if(t&&("object"==Lr(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Ir()?Reflect.construct(t,n||[],Ar(e).constructor):t.apply(e,n))}function Ir(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Ir=function(){return!!e})()}function Ar(e){return Ar=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ar(e)}function zr(e,t){return zr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},zr(e,t)}customElements.define("bookmark-button",Br),n(6412),n(8125),n(4423),n(4490),n(739),n(8940),n(4731),n(479),n(3362),n(1699),n(5440);var Tr,Dr,_r,$r,Hr,qr,Rr,Fr,Nr,Zr=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Mr(this,t)).url="https://archive.org/account/login",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&zr(e,t)}(t,e),function(e,t,n){return t&&Er(e.prototype,t),n&&Er(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"render",value:function(){return(0,r.qy)(jr||(jr=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n      <p>A free account is required to save and access bookmarks.</p>\n      <a class="ia-button link primary" href="','">Log in</a>\n    '])),this.url)}}],[{key:"properties",get:function(){return{url:{type:String}}}},{key:"styles",get:function(){return Ot}}])}(r.WF);function Wr(e){return Wr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wr(e)}function Ur(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Vr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Gr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Vr(Object(n),!0).forEach((function(t){Yr(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Yr(e,t,n){return(t=eo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jr(){Jr=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),s=new P(r||[]);return o(a,"_invoke",{value:j(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",m="completed",v={};function y(){}function b(){}function g(){}var k={};c(k,a,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(M([])));S&&S!==n&&r.call(S,a)&&(k=S);var C=g.prototype=y.prototype=Object.create(k);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,a,s){var l=d(e[o],e,i);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==Wr(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function j(t,n,r){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var l=B(s,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var c=d(t,n,r);if("normal"===c.type){if(o=r.done?m:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=m,r.method="throw",r.arg=c.arg)}}}function B(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,B(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(Wr(t)+" is not iterable")}return b.prototype=g,o(C,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=c(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,l,"GeneratorFunction")),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},x(O.prototype),c(O.prototype,s,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new O(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(C),c(C,l,"Generator"),c(C,a,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=M,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}function Xr(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function Qr(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){Xr(i,r,o,a,s,"next",e)}function s(e){Xr(i,r,o,a,s,"throw",e)}a(void 0)}))}}function Kr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eo(r.key),r)}}function eo(e){var t=function(e,t){if("object"!=Wr(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Wr(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Wr(t)?t:t+""}function to(e,t,n){return t=ro(t),function(e,t){if(t&&("object"==Wr(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,no()?Reflect.construct(t,n||[],ro(e).constructor):t.apply(e,n))}function no(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(no=function(){return!!e})()}function ro(e){return ro=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ro(e)}function oo(e,t){return oo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},oo(e,t)}customElements.define("bookmarks-login",Zr);var io,ao={endpoint:"/services/bookmarks.php",headers:{"Content-Type":"application/json"},delete:function(e){return fetch("".concat(this.endpoint,"?identifier=").concat(this.identifier,"&page_num=").concat(e),{credentials:"same-origin",method:"DELETE",headers:this.headers})},get:function(e){return fetch("".concat(this.endpoint,"?identifier=").concat(this.identifier,"&page_num=").concat(e),{credentials:"same-origin",method:"GET",headers:this.headers})},getAll:function(){return fetch("".concat(this.endpoint,"?identifier=").concat(this.identifier),{credentials:"same-origin",method:"GET",headers:this.headers})},post:function(e){return this.sendBookmarkData(e,"POST")},put:function(e){return this.sendBookmarkData(e,"POST")},sendBookmarkData:function(e,t){var n={note:e.note,color:e.color};return fetch("".concat(this.endpoint,"?identifier=").concat(this.identifier,"&page_num=").concat(e.id),{credentials:"same-origin",method:t,headers:this.headers,body:JSON.stringify({notes:n})})}},so=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=to(this,t)).bookmarks=[],e.bookreader={},e.editedBookmark={},e.modal=void 0,e.loginOptions={loginClicked:function(){},loginUrl:""},e.displayMode="bookmarks",e.bookmarkColors=[{id:0,className:"red"},{id:1,className:"blue"},{id:2,className:"green"}],e.defaultColor=e.bookmarkColors[0],e.api=ao,e.deleteModalConfig=new De({title:"Delete Bookmark",headline:"This bookmark contains a note. Deleting it will permanently delete the note. Are you sure?",headerColor:"#194880"}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&oo(e,t)}(t,e),function(e,t,n){return t&&Kr(e.prototype,t),n&&Kr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"updated",value:function(e){e.has("displayMode")&&this.updateDisplay(),this.emitBookmarksChanged()}},{key:"setup",value:function(){this.api.identifier=this.getIdentifier(),"login"!==this.displayMode&&(this.fetchUserBookmarks(),this.setBREventListeners())}},{key:"getIdentifier",value:function(){return this.bookreader.bookId!==this.bookreader.subPrefix?"".concat(this.bookreader.bookId,"/").concat(this.bookreader.subPrefix):this.bookreader.bookId}},{key:"updateDisplay",value:function(){"bookmarks"===this.displayMode&&this.fetchUserBookmarks()}},{key:"fetchUserBookmarks",value:(o=Qr(Jr().mark((function e(){return Jr().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.api.identifier){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.fetchBookmarks();case 4:this.initializeBookmarks();case 5:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"setBREventListeners",value:function(){var e=this;["3PageViewSelected"].forEach((function(t){window.addEventListener("BookReader:".concat(t),(function(t){setTimeout((function(){e.renderBookmarkButtons()}),100)}))})),["pageChanged","1PageViewSelected","2PageViewSelected"].forEach((function(t){window.addEventListener("BookReader:".concat(t),(function(t){setTimeout((function(){e.renderBookmarkButtons(),e.markActiveBookmark()}),100)}))})),["zoomOut","zoomIn","resize"].forEach((function(t){window.addEventListener("BookReader:".concat(t),(function(){e.renderBookmarkButtons()}))}))}},{key:"initializeBookmarks",value:function(){this.renderBookmarkButtons(),this.markActiveBookmark(!0),this.emitBookmarksChanged()}},{key:"formatBookmark",value:function(e){var n=e.leafNum,r=void 0===n?"":n,o=e.notes,i=void 0===o?{}:o,a=i.note,s=void 0===a?"":a,l=i.color,c={note:s,color:this.getBookmarkColor(l)?l:this.defaultColor.id},u=t.formatPage(this.bookreader.book.getPageNum(r)),d=this.bookreader.book.getPageURI("".concat(r).replace(/\D/g,""),32);return Gr(Gr({},c),{},{id:r,leafNum:r,page:u,thumbnail:d})}},{key:"fetchBookmarks",value:(n=Qr(Jr().mark((function e(){var t,n,r,o,i,a,s,l,c,u,d=this;return Jr().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.getAll().then((function(e){return e.text()}));case 2:t=e.sent;try{n=JSON.parse(t)}catch(e){n={error:e.message}}return o=(r=n).success,i=r.error,a=void 0===i?"Something happened while fetching bookmarks.":i,s=r.value,l=void 0===s?[]:s,o||null===(c=console)||void 0===c||c.warn("Error fetching bookmarks",a),u={},Object.keys(l).forEach((function(e){var t=l[e],n=parseInt(e,10),r=d.formatBookmark(Gr(Gr({},t),{},{leafNum:n}));u[e]=r})),this.bookmarks=u,e.abrupt("return",u);case 10:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"emitBookmarksChanged",value:function(){this.dispatchEvent(new CustomEvent("bookmarksChanged",{bubbles:!0,composed:!0,detail:{bookmarks:this.bookmarks}}))}},{key:"emitBookmarkButtonClicked",value:function(){this.dispatchEvent(new CustomEvent("bookmarkButtonClicked",{bubbles:!0,composed:!0,detail:{editedBookmark:this.editedBookmark}}))}},{key:"bookmarkButtonClicked",value:function(e){this.getBookmark(e)?this.confirmDeletion(e):this.createBookmark(e)}},{key:"renderBookmarkButtons",value:function(){var e=this;this.bookreader.$(".BRpagecontainer").not(".BRemptypage").get().forEach((function(t){var n=t.querySelector(".bookmark-button");n&&n.remove();var o=+t.classList.value.match(/pagediv\d+/)[0].replace(/\D/g,""),i=e.getBookmark(o),a=i?"filled":"hollow";if(e.bookreader.book.getPage(o).isViewable){var s=document.createElement("div");["mousedown","mouseup"].forEach((function(e){s.addEventListener(e,(function(e){return e.stopPropagation()}))})),s.classList.add("bookmark-button",a),i&&s.classList.add(e.getBookmarkColor(i.color));var l="L"===t.getAttribute("data-side")&&e.bookreader.mode===e.bookreader.constMode2up?"left":"right";(0,r.XX)((0,r.qy)(Tr||(Tr=Ur(["\n        <bookmark-button\n          @bookmarkButtonClicked=","\n          state=","\n          side=","\n        ></bookmark-button>"])),(function(){return e.bookmarkButtonClicked(o)}),a,l),s),t.appendChild(s)}}))}},{key:"markActiveBookmark",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.bookreader,n=t.mode,r=t.constMode2up,o=t.constModeThumb,i=this.bookreader.currentIndex();if(n!==o){if(n===r&&this.bookreader.displayedIndices.includes(+this.activeBookmarkID))return;this.bookmarks[i]?this.activeBookmarkID=i:this.activeBookmarkID=""}else{var a=this.bookmarks[i];e&&a&&(this.activeBookmarkID=i)}}},{key:"bookmarkEdited",value:function(e){var t=e.detail,n=t.bookmark.id===this.editedBookmark.id;this.editedBookmark=n?{}:t.bookmark}},{key:"getBookmark",value:function(e){return this.bookmarks[e]}},{key:"getBookmarkColor",value:function(e){var t;return null===(t=this.bookmarkColors.find((function(t){return t.id===e})))||void 0===t?void 0:t.className}},{key:"addBookmark",value:function(){var e=this.bookreader.currentIndex();if(this.bookreader.mode===this.bookreader.constMode2up){var t=this.bookreader.displayedIndices;e=t[t.length-1]}this.createBookmark(e)}},{key:"createBookmark",value:function(e){var t=this.getBookmark(e);if(t)return this.bookmarkEdited({detail:{bookmark:t}}),void this.emitBookmarkButtonClicked();this.editedBookmark=this.formatBookmark({leafNum:e}),this.api.post(this.editedBookmark),this.bookmarks[e]=this.editedBookmark,this.activeBookmarkID=e,this.disableAddBookmarkButton=!0,this.renderBookmarkButtons(),this.emitBookmarkButtonClicked()}},{key:"bookmarkSelected",value:function(e){var t=e.detail.bookmark.leafNum;this.bookreader.jumpToPage("".concat(this.bookreader.book.getPageNum("".concat(t).replace(/\D/g,"")))),this.activeBookmarkID=t}},{key:"saveBookmark",value:function(e){var t=e.detail,n=this.bookmarks[t.bookmark.id];Object.assign(n,t.bookmark),this.api.put(n),this.editedBookmark={},this.renderBookmarkButtons()}},{key:"confirmDeletion",value:function(e){this.getBookmark(e).note?this.displayDeletionModal(e):this.deleteBookmark({detail:{id:"".concat(e)}})}},{key:"displayDeletionModal",value:function(e){var t=this,n=(0,r.qy)(Dr||(Dr=Ur(["\n      <delete-modal-actions\n        .deleteAction=","\n        .cancelAction=","\n        .pageID=","\n      ></delete-modal-actions>\n    "])),(function(){return t.deleteBookmark({detail:{id:"".concat(e)}})}),(function(){return t.modal.closeModal()}),e);this.modal.showModal({config:this.deleteModalConfig,customModalContent:n})}},{key:"deleteBookmark",value:function(e){var t=e.detail,n=t.id,r=this.bookmarks;delete r[n],this.bookmarks=Gr({},r),this.api.delete(t.id),this.editedBookmark={},this.modal.closeModal(),this.renderBookmarkButtons()}},{key:"shouldEnableAddBookmarkButton",get:function(){var e=this.bookreader.mode===this.bookreader.constMode2up?this.bookreader.displayedIndices[this.bookreader.displayedIndices.length-1]:this.bookreader.currentIndex();return!!this.getBookmark(e)}},{key:"allowAddingBookmark",get:function(){return this.bookreader.mode!==this.bookreader.constModeThumb}},{key:"addBookmarkButton",get:function(){return(0,r.qy)(_r||(_r=Ur(['\n      <button\n        class="ia-button primary"\n        tabindex="-1"\n        ?disabled=',"\n        @click=",">\n        Add bookmark\n      </button>\n    "])),this.shouldEnableAddBookmarkButton,this.addBookmark)}},{key:"bookmarksList",get:function(){return(0,r.qy)($r||($r=Ur(["\n      <ia-bookmarks-list\n        @bookmarkEdited=","\n        @bookmarkSelected=","\n        @saveBookmark=","\n        @deleteBookmark=","\n        .editedBookmark=","\n        .bookmarks=","\n        .activeBookmarkID=","\n        .bookmarkColors=","\n        .defaultBookmarkColor=",">\n      </ia-bookmarks-list>\n    "])),this.bookmarkEdited,this.bookmarkSelected,this.saveBookmark,this.deleteBookmark,this.editedBookmark,Gr({},this.bookmarks),this.activeBookmarkID,this.bookmarkColors,this.defaultColor)}},{key:"bookmarkHelperMessage",get:function(){return(0,r.qy)(Hr||(Hr=Ur(["<p>Please use 1up or 2up view modes to add bookmark.</p>"])))}},{key:"render",value:function(){var e=this,t=(0,r.qy)(qr||(qr=Ur(["\n      ","\n      ","\n    "])),this.bookmarksList,this.allowAddingBookmark?this.addBookmarkButton:this.bookmarkHelperMessage);return(0,r.qy)(Rr||(Rr=Ur(['\n      <section class="bookmarks">\n      ',"\n      </section>\n    "])),"login"===this.displayMode?(0,r.qy)(Fr||(Fr=Ur(["<bookmarks-login\n        @click=","\n        .url=","></bookmarks-login>"])),(function(){return e.loginOptions.loginClicked()}),this.loginOptions.loginUrl):t)}}],[{key:"properties",get:function(){return{activeBookmarkID:{type:String},bookmarks:{type:Array},bookreader:{type:Object},displayMode:{type:String},editedBookmark:{type:Object},deleteModalConfig:{type:Object},modal:{attribute:!1},loginOptions:{type:Object,attribute:!1}}}},{key:"styles",get:function(){var e=(0,r.AH)(Nr||(Nr=Ur(["\n      .bookmarks {\n        height: 100%;\n        overflow: hidden;\n        padding-bottom: 20px;\n      }\n\n      .list ia-bookmark-edit {\n        display: none;\n      }\n\n      .edit ia-bookmarks-list {\n        display: none;\n      }\n    "])));return[Ot,e]}},{key:"formatPage",value:function(e){return isNaN(+e)?"(".concat(e.replace(/\D/g,""),")"):e}}]);var n,o}(r.WF);customElements.define("ia-bookmarks",so);var lo,co,uo,ho,po,fo=(0,r.AH)(io||(io=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  .blue {\n    --iconFillColor: var(--blueBookmarkColor, #0023f5);\n  }\n\n  .red {\n    --iconFillColor: var(--redBookmarkColor, #eb3223);\n  }\n\n  .green {\n    --iconFillColor: var(--greenBookmarkColor, #75ef4c);\n  }\n"])));function mo(e){return mo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mo(e)}function vo(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function yo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,bo(r.key),r)}}function bo(e){var t=function(e,t){if("object"!=mo(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=mo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==mo(t)?t:t+""}function go(e,t,n){return t=wo(t),function(e,t){if(t&&("object"==mo(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,ko()?Reflect.construct(t,n||[],wo(e).constructor):t.apply(e,n))}function ko(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ko=function(){return!!e})()}function wo(e){return wo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},wo(e)}function So(e,t){return So=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},So(e,t)}var Co=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=go(this,t)).bookmark={},e.bookmarkColors=[],e.renderHeader=!1,e.showBookmark=!0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&So(e,t)}(t,e),function(e,t,n){return t&&yo(e.prototype,t),n&&yo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"emitSaveEvent",value:function(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("saveBookmark",{detail:{bookmark:this.bookmark}}))}},{key:"emitDeleteEvent",value:function(){this.dispatchEvent(new CustomEvent("deleteBookmark",{detail:{id:this.bookmark.id}}))}},{key:"emitColorChangedEvent",value:function(e){this.dispatchEvent(new CustomEvent("bookmarkColorChanged",{detail:{bookmarkId:this.bookmark.id,colorId:e}}))}},{key:"changeColorTo",value:function(e){this.bookmark.color=e,this.emitColorChangedEvent(e)}},{key:"updateNote",value:function(e){this.bookmark.note=e.currentTarget.value}},{key:"bookmarkColor",value:function(e){var t=this;return(0,r.qy)(lo||(lo=vo(['\n      <li>\n        <input type="radio" name="color" id="color_','" .value='," @change="," ?checked=",'>\n        <label for="color_','">\n          <icon-bookmark class=',"></icon-bookmark>\n        </label>\n      </li>\n    "])),e.id,e.id,(function(){return t.changeColorTo(e.id)}),this.bookmark.color===e.id,e.id,e.className)}},{key:"bookmarkTemplate",get:function(){return(0,r.qy)(co||(co=vo(['\n      <div class="bookmark">\n        <img src='," />\n        <h4>Page ","</h4>\n      </div>\n    "])),this.bookmark.thumbnail,this.bookmark.page)}},{key:"render",value:function(){return(0,r.qy)(uo||(uo=vo(["\n      ","\n      ",'\n      <form action="" method="put" @submit=','>\n        <fieldset>\n          <label for="note">Note <small>(optional)</small></label>\n          <textarea rows="4" cols="80" name="note" id="note" @change=',">",'</textarea>\n          <label for="color">Bookmark color</label>\n          <ul>\n            ','\n          </ul>\n          <div class="actions">\n            <button type="button" class="ia-button cancel" @click=','>Delete</button>\n            <input class="ia-button" type="submit" value="Save">\n          </div>\n        </fieldset>\n      </form>\n    '])),this.renderHeader?t.headerSection:r.s6,this.showBookmark?this.bookmarkTemplate:r.s6,this.emitSaveEvent,this.updateNote,this.bookmark.note,Ee(this.bookmarkColors,(function(e){return e.id}),this.bookmarkColor.bind(this)),this.emitDeleteEvent)}}],[{key:"properties",get:function(){return{bookmark:{type:Object},bookmarkColors:{type:Array},renderHeader:{type:Boolean},showBookmark:{type:Boolean}}}},{key:"headerSection",get:function(){return(0,r.qy)(ho||(ho=vo(["<header>\n      <h3>Edit Bookmark</h3>\n    </header>"])))}},{key:"styles",get:function(){var e=(0,r.AH)(po||(po=vo(['\n    :host {\n      display: block;\n      padding: 0 1rem 2rem 1rem;\n      color: var(--primaryTextColor);\n    }\n\n    small {\n      font-style: italic;\n    }\n\n    .bookmark {\n      display: grid;\n      grid-template-columns: 37px 1fr;\n      grid-gap: 0 1rem;\n      align-items: center;\n    }\n\n    h4 {\n      margin: 0;\n      font-size: 1.4rem;\n    }\n\n    fieldset {\n      padding: 2rem 0 0 0;\n      border: none;\n    }\n\n    label {\n      display: block;\n      font-weight: bold;\n    }\n\n    p {\n      padding: 0;\n      margin: .5rem 0;\n      font-size: 1.2rem;\n      line-height: 120%;\n    }\n\n    textarea {\n      width: 100%;\n      margin-bottom: 2rem;\n      box-sizing: border-box;\n      font: normal 1.4rem "Helvetica Neue", Helvetica, Arial, sans-serif;\n      resize: vertical;\n    }\n\n    ul {\n      display: grid;\n      grid-template-columns: repeat(3, auto);\n      grid-gap: 0 2rem;\n      justify-content: start;\n      padding: 1rem 0 0 0;\n      margin: 0 0 2rem 0;\n      list-style: none;\n    }\n\n    li input {\n      display: none;\n    }\n\n    li label {\n      display: block;\n      min-width: 50px;\n      padding-top: .4rem;\n      text-align: center;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n\n    li input:checked + label {\n      border-color: var(--primaryTextColor);\n    }\n\n    input[type="submit"] {\n      background: var(--primaryCTAFill);\n      border-color: var(--primaryCTABorder);\n    }\n\n    button {\n      background: var(--primaryErrorCTAFill);\n      border-color: var(--primaryErrorCTABorder);\n    }\n\n    .button {\n      -webkit-appearance: none;\n      appearance: none;\n      padding: .5rem 1rem;\n      box-sizing: border-box;\n      color: var(--primaryTextColor);\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n\n    .actions {\n      display: grid;\n      grid-template-columns: auto auto;\n      grid-gap: 0 1rem;\n      justify-items: stretch;\n    }\n    '])));return[Ot,fo,e]}}])}(r.WF);customElements.define("ia-bookmark-edit",Co),n(6910);var xo,Oo,jo,Bo,Lo,Eo,Po,Mo,Io=r.qy`
<svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" aria-labelledby="editPencilTitleID editPencilDescID"><title id="editPencilTitleID">Pencil icon</title><desc id="editPencilDescID">An illustration of a pencil, used to represent an edit action</desc><path class="fill-color" d="m15.6111048 9.3708338-9.52237183 9.5222966-5.14363353 1.0897111c-.42296707.0896082-.83849202-.1806298-.92810097-.6035935-.02266463-.1069795-.02266463-.2175207 0-.3245001l1.08971974-5.1435929 9.52237189-9.52229656zm-10.89310224 5.9110366-2.78094924-.5403869-.67567462 3.166657.83033407.8303275 3.16668096-.6756703zm14.82724244-12.05935921c.6114418.61143705.6055516 1.6086709-.0131615 2.22737904l-2.2405581 2.24054036-4.9820147-4.98197536 2.2405581-2.24054036c.618713-.61870814 1.6159506-.62460252 2.2273925-.01316547z" fill-rule="evenodd"/></svg>
`;class Ao extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Io}}function zo(e){return zo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zo(e)}function To(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Do(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_o(r.key),r)}}function _o(e){var t=function(e,t){if("object"!=zo(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=zo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==zo(t)?t:t+""}function $o(e,t,n){return t=qo(t),function(e,t){if(t&&("object"==zo(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Ho()?Reflect.construct(t,n||[],qo(e).constructor):t.apply(e,n))}function Ho(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Ho=function(){return!!e})()}function qo(e){return qo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},qo(e)}function Ro(e,t){return Ro=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ro(e,t)}customElements.define("ia-icon-edit-pencil",Ao);var Fo,No=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=$o(this,t)).activeBookmarkID=void 0,e.bookmarkColors=[],e.defaultBookmarkColor={},e.bookmarks={},e.editedBookmark={},e.renderHeader=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ro(e,t)}(t,e),function(e,t,n){return t&&Do(e.prototype,t),n&&Do(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"emitEditEvent",value:function(e,t){this.dispatchEvent(new CustomEvent("bookmarkEdited",{detail:{bookmark:t}}))}},{key:"emitSelectedEvent",value:function(e){this.activeBookmarkID=e.id,this.dispatchEvent(new CustomEvent("bookmarkSelected",{detail:{bookmark:e}}))}},{key:"emitSaveBookmark",value:function(e){this.dispatchEvent(new CustomEvent("saveBookmark",{detail:{bookmark:e}}))}},{key:"emitDeleteBookmark",value:function(e){this.dispatchEvent(new CustomEvent("deleteBookmark",{detail:{id:e}}))}},{key:"emitBookmarkColorChanged",value:function(e){var t=e.detail,n=t.bookmarkId,r=t.colorId;this.dispatchEvent(new CustomEvent("bookmarkColorChanged",{detail:{bookmarkId:n,colorId:r}}))}},{key:"emitAddBookmark",value:function(){this.dispatchEvent(new CustomEvent("addBookmark"))}},{key:"editBookmark",value:function(e,t){this.emitEditEvent(e,t),this.editedBookmark=this.editedBookmark===t?{}:t}},{key:"saveBookmark",value:function(e){var t=e.detail.bookmark;this.editedBookmark={},this.emitSaveBookmark(t)}},{key:"deleteBookmark",value:function(e){var t=e.detail.id;this.editedBookmark={},this.emitDeleteBookmark(t)}},{key:"bookmarkColorInfo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.bookmarkColors.find((function(t){return(null==t?void 0:t.id)===e}))}},{key:"bookmarkItem",value:function(e){var t=this,n=this.editedBookmark.id===e.id,o=this.bookmarkColorInfo(e.color).className,i=e.id===this.activeBookmarkID?"active":"";return(0,r.qy)(xo||(xo=To(["\n      <li\n        @click=",'\n        tabindex="0"\n        data-pageIndex=','\n      >\n        <div class="separator"></div>\n        <div class="content ','">\n          <button\n            class="edit"\n            @click=','\n            title="Edit this bookmark"\n          >\n            <ia-icon-edit-pencil></ia-icon-edit-pencil>\n          </button>\n          <h4>\n            <icon-bookmark class=',"></icon-bookmark>\n            <span> Page ","</span>\n          </h4>\n          ","\n          ","\n        </div>\n      </li>\n    "])),(function(){return t.emitSelectedEvent(e)}),e.id,i,(function(n){return t.editBookmark(n,e)}),o,e.page,!n&&e.note?(0,r.qy)(Oo||(Oo=To(["<p>","</p>"])),e.note):r.s6,n?this.editBookmarkComponent:r.s6)}},{key:"editBookmarkComponent",get:function(){return(0,r.qy)(jo||(jo=To(["\n      <ia-bookmark-edit\n        .bookmark=","\n        .bookmarkColors=","\n        .defaultBookmarkColor=","\n        .showBookmark=","\n        @saveBookmark=","\n        @deleteBookmark=","\n        @bookmarkColorChanged=","\n      ></ia-bookmark-edit>\n    "])),this.editedBookmark,this.bookmarkColors,this.defaultBookmarkColor,!1,this.saveBookmark,this.deleteBookmark,this.emitBookmarkColorChanged)}},{key:"sortBookmarks",value:function(){var e=this;return Object.keys(this.bookmarks).sort((function(e,t){return+e>+t?1:+e<+t?-1:0})).map((function(t){return e.bookmarks[t]}))}},{key:"bookmarksCount",get:function(){var e=this.bookmarks.length;return(0,r.qy)(Bo||(Bo=To(["<small>(",")</small>"])),e)}},{key:"headerSection",get:function(){return(0,r.qy)(Lo||(Lo=To(["<header>\n      <h3>\n        Bookmarks\n        ","\n      </h3>\n    </header>"])),this.bookmarks.length?this.bookmarksCount:r.s6)}},{key:"bookmarkslist",get:function(){var e=this.sortBookmarks(),t=Ee(e,(function(e){return null==e?void 0:e.id}),this.bookmarkItem.bind(this));return(0,r.qy)(Eo||(Eo=To(["\n      <ul>\n        ",'\n        <div class="separator"></div>\n      </ul>\n    '])),t)}},{key:"render",value:function(){return(0,r.qy)(Po||(Po=To(["\n      ","\n      ","\n    "])),this.renderHeader?this.headerSection:r.s6,Object.keys(this.bookmarks).length?this.bookmarkslist:r.s6)}}],[{key:"properties",get:function(){return{activeBookmarkID:{type:Number},bookmarkColors:{type:Array},defaultBookmarkColor:{type:Object},bookmarks:{type:Object},editedBookmark:{type:Object},renderHeader:{type:Boolean}}}},{key:"styles",get:function(){return[(0,r.AH)(Mo||(Mo=To(["\n      :host {\n        display: block;\n        overflow-y: auto;\n        box-sizing: border-box;\n        color: var(--primaryTextColor);\n        margin-bottom: 2rem;\n        --activeBorderWidth: 2px;\n      }\n\n      icon-bookmark {\n        width: 16px;\n        height: 24px;\n      }\n\n      .separator {\n        background-color: var(--secondaryBGColor);\n        width: 98%;\n        margin: 1px auto;\n        height: 1px;\n      }\n\n      small {\n        font-style: italic;\n      }\n\n      h4 {\n        margin: 0;\n        font-size: 1.4rem;\n      }\n      h4 * {\n        display: inline-block;\n      }\n      h4 icon-bookmark {\n        vertical-align: bottom;\n      }\n      h4 span {\n        vertical-align: top;\n        padding-top: 1%;\n      }\n\n      p {\n        padding: 0;\n        margin: 5px 0 0 0;\n        width: 98%;\n        overflow-wrap: break-word;\n      }\n\n      ia-bookmark-edit {\n        margin: 5px 5px 3px 6px;\n      }\n\n      ul {\n        padding: 0;\n        list-style: none;\n        margin: var(--activeBorderWidth) 0.5rem 1rem 0;\n      }\n      ul > li:first-child .separator {\n        display: none;\n      }\n      li {\n        cursor: pointer;\n        outline: none;\n        position: relative;\n      }\n      li .content {\n        padding: 2px 0 4px 2px;\n        border: var(--activeBorderWidth) solid transparent;\n        padding: .2rem 0 .4rem .2rem;\n      }\n      li .content.active {\n        border: var(--activeBorderWidth) solid #538bc5;\n      }\n      li button.edit {\n        padding: 5px 2px 0 0;\n        background: transparent;\n        cursor: pointer;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        right: 2px;\n        top: 2px;\n        text-align: right;\n        -webkit-appearance: none;\n        appearance: none;\n        outline: none;\n        box-sizing: border-box;\n        border: none;\n      }\n      li button.edit > * {\n        display: block;\n        height: 100%;\n        width: 100%;\n      }\n    "]))),fo]}}])}(r.WF);customElements.define("ia-bookmarks-list",No);class Zo extends r.WF{static get styles(){return r.AH`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      #hollow,
      #plus,
      #minus {
        display: none;
      }

      .hollow #filled,
      .plus #filled,
      .minus #filled {
        display: none;
      }

      .hollow #hollow,
      .plus #hollow,
      .minus #hollow {
        display: block;
      }

      .plus #plus {
        display: block;
      }

      .minus #minus {
        display: block;
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}static get properties(){return{state:{type:String}}}render(){return r.qy`
      <div class=${this.state}>
        <svg
          height="24"
          viewBox="0 0 16 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="bookmarkTitleID bookmarDescID"
        >
          <title id="bookmarkTitleID">Bookmark icon</title>
          <desc id="bookmarkDescID">An outline of the shape of a bookmark</desc>
          <path
            id="filled"
            d="m1 0h14c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1z"
            class="fill-color"
            fill-rule="evenodd"
          />
          <g class="fill-color" fill-rule="evenodd">
            <path
              id="hollow"
              d="m15 0c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1zm-2 2h-10c-.51283584 0-.93550716.38604019-.99327227.88337887l-.00672773.11662113v18l6-4.3181818 6 4.3181818v-18c0-.51283584-.3860402-.93550716-.8833789-.99327227z"
            />
            <path
              id="plus"
              d="m8.75 6v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z"
              fill-rule="nonzero"
            />
            <path id="minus" d="m11 8.25v1.5h-6v-1.5z" fill-rule="nonzero" />
          </g>
        </svg>
      </div>
    `}}function Wo(e){return Wo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wo(e)}function Uo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Vo(r.key),r)}}function Vo(e){var t=function(e,t){if("object"!=Wo(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Wo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Wo(t)?t:t+""}window.customElements.define("icon-bookmark",Zo);var Go,Yo,Jo=function(){return function(e,t,n){return t&&Uo(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.baseHost,o=t.signedIn,i=t.bookreader,a=t.modal,s=t.onProviderChange,l="referer=".concat(encodeURIComponent(location.href)),c="https://".concat(n,"/account/login?").concat(l);this.component=document.createElement("ia-bookmarks"),this.component.bookreader=i,this.component.displayMode=o?"bookmarks":"login",this.component.modal=a,this.component.loginOptions={loginClicked:this.bookmarksLoginClicked,loginUrl:c},this.bindEvents(),this.icon=(0,r.qy)(Fo||(Fo=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['<icon-bookmark state="hollow" style="--iconWidth: 16px; --iconHeight: 24px;"></icon-bookmark>']))),this.label="Bookmarks",this.id="bookmarks",this.onProviderChange=s,this.component.setup(),this.updateMenu(this.component.bookmarks.length)}),[{key:"updateMenu",value:function(e){this.menuDetails="(".concat(e,")")}},{key:"bindEvents",value:function(){this.component.addEventListener("bookmarksChanged",this.bookmarksChanged.bind(this))}},{key:"bookmarksChanged",value:function(e){var t=e.detail,n=Object.keys(t.bookmarks).length;this.updateMenu(n),this.onProviderChange(t.bookmarks,t.showSidePanel)}},{key:"bookmarksLoginClicked",value:function(){var e;null===(e=window.archive_analytics)||void 0===e||e.send_event_no_sampling("BookReader","BookmarksLogin",window.location.path)}}])}();function Xo(e){return Xo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xo(e)}function Qo(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ko(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ti(r.key),r)}}function ei(e,t,n){return t&&Ko(e.prototype,t),n&&Ko(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ti(e){var t=function(e,t){if("object"!=Xo(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=Xo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Xo(t)?t:t+""}var ni,ri=ei((function e(t){var n=t.item,o=t.baseHost,i=t.bookreader;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=null==n?void 0:n.metadata,s=a.identifier,l=a.creator,c=a.title,u=Array.isArray(l)?l[0]:l,d=i.subPrefix||"";this.icon=(0,r.qy)(Go||(Go=Qo(["",""])),le),this.label="Share this book",this.id="share",this.component=(0,r.qy)(Yo||(Yo=Qo(["<iaux-in-share-panel\n      .identifier=","\n      .type=","\n      .creator=","\n      .description=","\n      .baseHost=","\n      .fileSubPrefix=","\n    ></iaux-in-share-panel>"])),s,"book",u,c,o,d)}));function oi(e){return oi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oi(e)}function ii(){ii=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),s=new P(r||[]);return o(a,"_invoke",{value:j(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",m="completed",v={};function y(){}function b(){}function g(){}var k={};c(k,a,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(M([])));S&&S!==n&&r.call(S,a)&&(k=S);var C=g.prototype=y.prototype=Object.create(k);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,a,s){var l=d(e[o],e,i);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==oi(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function j(t,n,r){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var l=B(s,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var c=d(t,n,r);if("normal"===c.type){if(o=r.done?m:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=m,r.method="throw",r.arg=c.arg)}}}function B(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,B(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(oi(t)+" is not iterable")}return b.prototype=g,o(C,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=c(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,l,"GeneratorFunction")),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},x(O.prototype),c(O.prototype,s,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new O(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(C),c(C,l,"Generator"),c(C,a,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=M,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}function ai(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function si(e){return function(e){if(Array.isArray(e))return li(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return li(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?li(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function li(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ci(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ui(r.key),r)}}function ui(e){var t=function(e,t){if("object"!=oi(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=oi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==oi(t)?t:t+""}var di,hi,pi,fi,mi,vi,yi,bi="default",gi=function(){return function(e,t,n){return t&&ci(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t){var n=this,o=t.baseHost,i=t.bookreader,a=t.onProviderChange;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bookreader=i,this.onProviderChange=a,this.baseHost=o;var s=i.options.multipleBooksList.by_subprefix;if(this.viewableFiles=Object.keys(s).map((function(e){return s[e]})),this.volumeCount=Object.keys(s).length,this.id="volumes",this.label="Viewable files (".concat(this.volumeCount,")"),this.icon=(0,r.qy)(ni||(ni=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["",""])),Ae),this.sortOrderBy=bi,this.component=document.createElement("iaux-in-viewable-files-panel"),this.component.addSortToUrl=!0,this.component.subPrefix=i.options.subPrefix||"",this.component.baseHost=o,this.component.fileList=si(this.viewableFiles),this.sortFilesComponent=document.createElement("iaux-in-sort-files-button"),this.sortFilesComponent.fileListRaw=this.viewableFiles,this.sortFilesComponent.addEventListener("fileListSorted",(function(e){return n.handleFileListSorted(e)})),this.actionButton=this.sortFilesComponent,this.bookreader.urlPlugin){this.bookreader.urlPlugin.pullFromAddressBar();var l=this.bookreader.urlPlugin.getUrlParam("sort");"title_asc"!==l&&"title_desc"!==l||(this.sortOrderBy=l)}this.sortFilesComponent.sortVolumes(this.sortOrderBy),this.onProviderChange(this.bookreader)}),[{key:"handleFileListSorted",value:(e=ii().mark((function e(t){var n,r,o;return ii().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.detail,r=n.sortType,o=n.sortedFiles,this.viewableFiles=o,this.sortOrderBy=r,this.component.fileList=si(this.viewableFiles),e.next=6,this.component.updateComplete;case 6:this.bookreader.urlPlugin&&(this.bookreader.urlPlugin.pullFromAddressBar(),this.sortOrderBy!==bi?this.bookreader.urlPlugin.setUrlParam("sort",this.sortOrderBy):this.bookreader.urlPlugin.removeUrlParam("sort")),this.onProviderChange(this.bookreader),this.multipleFilesClicked(this.sortOrderBy);case 9:case"end":return e.stop()}}),e,this)})),t=function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){ai(i,r,o,a,s,"next",e)}function s(e){ai(i,r,o,a,s,"throw",e)}a(void 0)}))},function(e){return t.apply(this,arguments)})},{key:"multipleFilesClicked",value:function(e){var t;null===(t=window.archive_analytics)||void 0===t||t.send_event("BookReader","VolumesSort|".concat(e),window.location.path)}}]);var e,t}(),ki=(0,r.JW)(di||(di=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  <svg class="ia-logo" width="27" height="30" viewBox="0 0 27 30" xmlns="http://www.w3.org/2000/svg" aria-labelledby="logoTitleID logoDescID">\n    <title id="logoTitleID">Internet Archive logo</title>\n    <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <mask id="mask-2" fill="white">\n        <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>\n      </mask>\n      <use fill="#FFFFFF" xlink:href="#path-1"></use>\n      <g mask="url(#mask-2)" fill="#FFFFFF">\n        <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>\n      </g>\n    </g>\n  </svg>\n'])));function wi(e){return wi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wi(e)}function Si(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ci(Object(n),!0).forEach((function(t){Oi(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Oi(e,t,n){return(t=Bi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Bi(r.key),r)}}function Bi(e){var t=function(e,t){if("object"!=wi(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=wi(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==wi(t)?t:t+""}function Li(e,t,n){return t=Pi(t),function(e,t){if(t&&("object"==wi(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Ei()?Reflect.construct(t,n||[],Pi(e).constructor):t.apply(e,n))}function Ei(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Ei=function(){return!!e})()}function Pi(e){return Pi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Pi(e)}function Mi(e,t){return Mi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Mi(e,t)}var Ii,Ai,zi="updateSideMenu",Ti=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Li(this,t)).itemMD=void 0,e.loaded=!1,e.bookReaderCannotLoad=!1,e.bookReaderLoaded=!1,e.bookreader=null,e.bookIsRestricted=!1,e.downloadableTypes=[],e.isAdmin=!1,e.lendingInitialized=!1,e.lendingStatus={},e.menuProviders={},e.menuShortcuts=[],e.signedIn=!1,e.modal=void 0,e.sharedObserver=void 0,e.fullscreenBranding=ki,e.sharedObserverHandler=void 0,e.brWidth=0,e.brHeight=0,e.shortcutOrder=["fullscreen","volumes","chapters","search","bookmarks"],e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Mi(e,t)}(t,e),function(e,t,n){return t&&ji(e.prototype,t),n&&ji(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"disconnectedCallback",value:function(){this.sharedObserver.removeObserver({target:this.mainBRContainer,handler:this.sharedObserverHandler})}},{key:"firstUpdated",value:function(){this.bindEventListeners(),this.emitPostInit(),this.loaded=!0}},{key:"updated",value:function(e){this.bookreader&&this.itemMD&&this.bookReaderLoaded&&((e.has("loaded")&&this.loaded||e.has("itemMD")||e.has("bookreader")||e.has("signedIn")||e.has("isAdmin")||e.has("modal"))&&this.initializeBookSubmenus(),e.has("sharedObserver")&&this.bookreader&&(this.loadSharedObserver(),this.initializeBookSubmenus()),e.has("downloadableTypes")&&this.initializeBookSubmenus())}},{key:"emitPostInit",value:function(){var e;this.dispatchEvent(new CustomEvent("BrBookNav:".concat("PostInit"),{detail:{brSelector:null===(e=this.bookreader)||void 0===e?void 0:e.el},bubbles:!0,composed:!0}))}},{key:"baseProviderConfig",get:function(){return{baseHost:this.baseHost,modal:this.modal,sharedObserver:this.sharedObserver,bookreader:this.bookreader,item:this.itemMD,signedIn:this.signedIn,isAdmin:this.isAdmin,onProviderChange:function(){}}}},{key:"isWideEnoughToOpenMenu",get:function(){return this.brWidth>=640}},{key:"initializeBookSubmenus",value:function(){var e,t=this,n={visualAdjustments:new ar(xi(xi({},this.baseProviderConfig),{},{onProviderChange:function(){t.updateMenuContents()}}))};this.baseProviderConfig.item&&(n.share=new ri(this.baseProviderConfig)),this.shouldShowDownloadsMenu()&&(n.downloads=new Cn(this.baseProviderConfig)),null!==(e=this.bookreader.options.plugins)&&void 0!==e&&null!==(e=e.search)&&void 0!==e&&e.enabled&&(n.search=new tn(xi(xi({},this.baseProviderConfig),{},{onProviderChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e&&(t.bookreader=e),t.updateMenuContents(),!1!==n.openMenu&&(!t.isWideEnoughToOpenMenu||null!=n&&n.searchCanceled||setTimeout((function(){t.updateSideMenu("search","open")}),0))}}))),this.bookreader.options.enableBookmarks&&(n.bookmarks=new Jo(xi(xi({},this.baseProviderConfig),{},{onProviderChange:function(e){var n=Object.keys(e).length?"add":"remove";t["".concat(n,"MenuShortcut")]("bookmarks"),t.updateMenuContents()}}))),this.bookreader.options.enableMultipleBooks&&(n.volumes=new gi(xi(xi({},this.baseProviderConfig),{},{onProviderChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(t.bookreader=e),t.updateMenuContents(),t.isWideEnoughToOpenMenu&&setTimeout((function(){t.updateSideMenu("volumes","open")}))}}))),Object.assign(this.menuProviders,n),this.addMenuShortcut("search"),this.addMenuShortcut("volumes"),this.updateMenuContents()}},{key:"mainBRContainer",get:function(){var e;return document.querySelector(null===(e=this.bookreader)||void 0===e?void 0:e.el)}},{key:"addFullscreenShortcut",value:function(){var e={icon:this.fullscreenShortcut,id:"fullscreen"};this.menuShortcuts.push(e),this.sortMenuShortcuts(),this.emitMenuShortcutsUpdated()}},{key:"deleteFullscreenShortcut",value:function(){var e=this.menuShortcuts.filter((function(e){return"fullscreen"!==e.id}));this.menuShortcuts=e,this.sortMenuShortcuts(),this.emitMenuShortcutsUpdated()}},{key:"closeFullscreen",value:function(){this.bookreader.exitFullScreen()}},{key:"fullscreenShortcut",get:function(){var e=this;return(0,r.qy)(hi||(hi=Si(["\n      <button\n        @click=",'\n        title="Exit fullscreen view"\n      >',"</button>\n    "])),(function(){return e.closeFullscreen()}),this.fullscreenBranding)}},{key:"updateSideMenu",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t=new CustomEvent(zi,{detail:{menuId:e,action:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"open"}});this.dispatchEvent(t)}}},{key:"updateMenuContents",value:function(){var e=this.menuProviders,t=e.search,n=e.downloads,r=e.visualAdjustments,o=e.share,i=e.bookmarks,a=[e.volumes,e.chapters,t,i,r,o].filter((function(e){return!!e}));this.shouldShowDownloadsMenu()&&(null==n||n.update(this.downloadableTypes),a.splice(-2,0,n));var s=new CustomEvent("menuUpdated",{detail:a});this.dispatchEvent(s)}},{key:"shouldShowDownloadsMenu",value:function(){if(!this.downloadableTypes.length)return!1;if(!1===this.bookIsRestricted)return!0;if(this.isAdmin)return!0;var e=this.lendingStatus.user_loan_record,t=void 0===e?{}:e;return!Array.isArray(t)&&t.type&&"SESSION_LOAN"!==t.type}},{key:"addMenuShortcut",value:function(e){this.menuShortcuts.find((function(t){return t.id===e}))||this.menuProviders[e]&&(this.menuShortcuts.push(this.menuProviders[e]),this.sortMenuShortcuts(),this.emitMenuShortcutsUpdated())}},{key:"removeMenuShortcut",value:function(e){this.menuShortcuts=this.menuShortcuts.filter((function(t){return t.id!==e})),this.emitMenuShortcutsUpdated()}},{key:"sortMenuShortcuts",value:function(){var e=this;this.menuShortcuts=this.shortcutOrder.reduce((function(t,n){var r=e.menuShortcuts.find((function(e){return e.id===n}));return r&&t.push(r),t}),[])}},{key:"emitMenuShortcutsUpdated",value:function(){var e=new CustomEvent("menuShortcutsUpdated",{detail:this.menuShortcuts});this.dispatchEvent(e)}},{key:"emitLoadingStatusUpdate",value:function(e){var t=new CustomEvent("loadingStateUpdated",{detail:{loaded:e}});this.dispatchEvent(t)}},{key:"bindEventListeners",value:function(){var e=this;window.addEventListener("BookReader:PostInit",(function(t){e.bookreader=t.detail.props,e.bookreader.shell=e,e.bookReaderLoaded=!0,e.bookReaderCannotLoad=!1,e.emitLoadingStatusUpdate(!0),e.loadSharedObserver(),setTimeout((function(){e.bookreader.resize()}),0)})),window.addEventListener("BookReader:fullscreenToggled",(function(t){var n=t.detail.props,r=void 0===n?null:n;r&&(e.bookreader=r),e.manageFullScreenBehavior()}),{passive:!0}),window.addEventListener("BookReader:ToggleSearchMenu",(function(t){e.dispatchEvent(new CustomEvent(zi,{detail:{menuId:"search",action:"toggle"}}))})),window.addEventListener("LendingFlow:PostInit",(function(t){var n=t.detail,r=n.downloadTypesAvailable,o=n.lendingStatus,i=n.isAdmin,a=n.previewType;e.lendingInitialized=!0,e.downloadableTypes=r,e.lendingStatus=o,e.isAdmin=i,e.bookReaderCannotLoad="singlePagePreview"===a,e.emitLoadingStatusUpdate(!0)})),window.addEventListener("BRJSIA:PostInit",(function(t){var n=t.detail,r=n.isRestricted,o=n.downloadURLs;e.bookReaderLoaded=!0,e.downloadableTypes=o,e.bookIsRestricted=r})),window.addEventListener("contextmenu",(function(t){return e.manageContextMenuVisibility(t)}),{capture:!0})}},{key:"manageContextMenuVisibility",value:function(e){var t,n;if(null===(t=window.archive_analytics)||void 0===t||t.send_event("BookReader","contextmenu-".concat(this.bookIsRestricted?"restricted":"unrestricted"),null===(n=e.target)||void 0===n||null===(n=n.classList)||void 0===n?void 0:n.value),this.bookIsRestricted&&e.target.classList.value.match(/BRscreen|BRpageimage/g))return e.preventDefault(),!1}},{key:"loadSharedObserver",value:function(){var e;this.sharedObserverHandler={handleResize:this.handleResize.bind(this)},null===(e=this.sharedObserver)||void 0===e||e.addObserver({target:this.mainBRContainer,handler:this.sharedObserverHandler})}},{key:"handleResize",value:function(e){var t=e.contentRect,n=e.target,r=this.brWidth,o=this.brHeight,i=this.bookreader.animating;n===this.mainBRContainer&&(this.brWidth=t.width,this.brHeight=t.height),!r&&this.brWidth&&this.initializeBookSubmenus();var a,s=r!==this.brWidth,l=o!==this.brHeight;i||!s&&!l||null===(a=this.bookreader)||void 0===a||a.resize()}},{key:"manageFullScreenBehavior",value:function(){this.emitFullScreenState(),this.bookreader.options.enableFSLogoShortcut&&(this.bookreader.isFullscreen()?this.addFullscreenShortcut():this.deleteFullscreenShortcut())}},{key:"emitFullScreenState",value:function(){var e=this.bookreader.isFullscreen(),t=new CustomEvent("ViewportInFullScreen",{detail:{isFullScreen:e}});this.dispatchEvent(t)}},{key:"itemImage",get:function(){var e,t=null===(e=this.itemMD)||void 0===e?void 0:e.metadata.identifier,n="https://".concat(this.baseHost,"/services/img/").concat(t);return(0,r.qy)(pi||(pi=Si(['<img class="cover-img" src=',' alt="cover image for ','">'])),n,t)}},{key:"placeholder",get:function(){return(0,r.qy)(fi||(fi=Si(['<div class="placeholder">',"</div>"])),this.itemImage)}},{key:"render",value:function(){return(0,r.qy)(mi||(mi=Si(['<div id="book-navigator__root">\n      ',"\n      ","\n    </div>\n  "])),this.bookReaderCannotLoad?this.placeholder:r.s6,this.bookReaderCannotLoad?r.s6:(0,r.qy)(vi||(vi=Si(['<slot name="main"></slot>']))))}}],[{key:"properties",get:function(){return{itemMD:{type:Object},bookReaderLoaded:{type:Boolean},bookreader:{type:Object},bookIsRestricted:{type:Boolean},downloadableTypes:{type:Array},isAdmin:{type:Boolean},lendingInitialized:{type:Boolean},lendingStatus:{type:Object},menuProviders:{type:Object},menuShortcuts:{type:Array},signedIn:{type:Boolean},loaded:{type:Boolean},sharedObserver:{type:Object,attribute:!1},modal:{type:Object,attribute:!1},fullscreenBranding:{type:Object}}}},{key:"styles",get:function(){return(0,r.AH)(yi||(yi=Si(["\n    :host,\n    #book-navigator__root,\n    slot,\n    slot > * {\n      display: block;\n      height: inherit;\n      width: inherit;\n    }\n    .placeholder {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      margin: 5%;\n    }\n    .cover-img {\n      max-height: 300px;\n    }\n  "])))}}])}(r.WF);customElements.define("book-navigator",Ti);class Di{constructor(){this.resizeObserver=new ResizeObserver((e=>{window.requestAnimationFrame((()=>{for(const t of e){const e=this.resizeHandlers.get(t.target);null==e||e.forEach((e=>{e.handleResize(t)}))}}))})),this.resizeHandlers=new Map}shutdown(){this.resizeHandlers.forEach(((e,t)=>{this.resizeObserver.unobserve(t)})),this.resizeHandlers.clear()}addObserver(e){var t;const n=null!==(t=this.resizeHandlers.get(e.target))&&void 0!==t?t:new Set;n.add(e.handler),this.resizeHandlers.set(e.target,n),this.resizeObserver.observe(e.target,e.options)}removeObserver(e){const t=this.resizeHandlers.get(e.target);t&&(t.delete(e.handler),0===t.size&&(this.resizeObserver.unobserve(e.target),this.resizeHandlers.delete(e.target)))}}function _i(e){return _i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_i(e)}function $i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Hi(e){return function(e){if(Array.isArray(e))return qi(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return qi(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qi(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qi(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Fi(r.key),r)}}function Fi(e){var t=function(e,t){if("object"!=_i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=_i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_i(t)?t:t+""}function Ni(e,t,n){return t=Wi(t),function(e,t){if(t&&("object"==_i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Zi()?Reflect.construct(t,n||[],Wi(e).constructor):t.apply(e,n))}function Zi(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Zi=function(){return!!e})()}function Wi(e){return Wi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Wi(e)}function Ui(e,t){return Ui=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ui(e,t)}var Vi=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Ni(this,t)).item=void 0,e.bookreader=void 0,e.baseHost="archive.org",e.fullscreen=!1,e.signedIn=!1,e.modal=void 0,e.sharedObserver=void 0,e.loaded=!1,e.menuShortcuts=[],e.menuContents=[],e.openMenuName="",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ui(e,t)}(t,e),function(e,t,n){return t&&Ri(e.prototype,t),n&&Ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"updated",value:function(){this.modal||this.setModalManager(),this.sharedObserver||(this.sharedObserver=new Di)}},{key:"itemNav",get:function(){return this.shadowRoot.querySelector("iaux-item-navigator")}},{key:"setModalManager",value:function(){var e=document.querySelector("modal-manager");e||(e=document.createElement("modal-manager"),document.body.appendChild(e)),this.modal=e}},{key:"manageFullscreen",value:function(e){var t=!!e.detail.isFullScreen;this.fullscreen=t,this.dispatchEvent(new CustomEvent("fullscreenStateUpdated",{detail:{fullscreen:t}}))}},{key:"loadingStateUpdated",value:function(e){var t=e.detail.loaded;this.loaded=t||null,this.dispatchEvent(new CustomEvent("loadingStateUpdated",{detail:{loaded:t}}))}},{key:"setMenuShortcuts",value:function(e){this.menuShortcuts=Hi(e.detail)}},{key:"setMenuContents",value:function(e){var t=Hi(e.detail);this.menuContents=t}},{key:"manageSideMenuEvents",value:function(e){var t,n=e.detail,r=n.menuId,o=n.action;if(r)if(this.openMenuName=r,"open"===o)null===(t=this.itemNav)||void 0===t||t.openShortcut(r);else if("toggle"===o){var i;null===(i=this.itemNav)||void 0===i||i.toggleMenu()}}},{key:"render",value:function(){return(0,r.qy)(Ii||(Ii=$i(['\n      <div class="main-component">\n        <iaux-item-navigator\n          ?viewportInFullscreen=',"\n          .basehost=","\n          .item=","\n          .modal=","\n          .loaded=","\n          .sharedObserver=","\n          ?signedIn=","\n          .menuShortcuts=","\n          .menuContents=","\n          .openMenu=",'\n        >\n          <div slot="header">\n            <slot name="header"></slot>\n          </div>\n          <div slot="main">\n            <book-navigator\n              .modal=',"\n              .baseHost=","\n              .itemMD=","\n              ?signedIn=","\n              ?sideMenuOpen=","\n              .sharedObserver=","\n              @ViewportInFullScreen=","\n              @loadingStateUpdated=","\n              @updateSideMenu=","\n              @menuUpdated=","\n              @menuShortcutsUpdated=",'\n            >\n              <div slot="main">\n                <slot name="main"></slot>\n              </div>\n            </book-navigator>\n          </div>\n        </iaux-item-navigator>\n      </div>\n    '])),this.fullscreen,this.baseHost,this.item,this.modal,this.loaded,this.sharedObserver,this.signedIn,this.menuShortcuts,this.menuContents,this.openMenuName,this.modal,this.baseHost,this.item,this.signedIn,this.menuOpened,this.sharedObserver,this.manageFullscreen,this.loadingStateUpdated,this.manageSideMenuEvents,this.setMenuContents,this.setMenuShortcuts)}}],[{key:"properties",get:function(){return{item:{type:Object},baseHost:{type:String},signedIn:{type:Boolean},fullscreen:{type:Boolean,reflect:!0,attribute:!0},sharedObserver:{type:Object,attribute:!1},modal:{type:Object,attribute:!1},loaded:{type:Boolean},menuShortcuts:{type:Array},menuContents:{type:Array}}}},{key:"styles",get:function(){return(0,r.AH)(Ai||(Ai=$i(['\n      :host {\n        display: block;\n        --primaryBGColor: var(--black, #000);\n        --secondaryBGColor: #222;\n        --tertiaryBGColor: #333;\n        --primaryTextColor: var(--white, #fff);\n        --primaryCTAFill: #194880;\n        --primaryCTABorder: #c5d1df;\n        --secondaryCTAFill: #333;\n        --secondaryCTABorder: #999;\n        --primaryErrorCTAFill: #e51c26;\n        --primaryErrorCTABorder: #f8c6c8;\n        background-color: var(--primaryBGColor);\n        position: relative;\n      }\n\n      :host([fullscreen]),\n      iaux-item-navigator[viewportinfullscreen] {\n        position: fixed;\n        inset: 0;\n        height: 100%;\n        min-height: unset;\n      }\n\n      .main-component {\n        height: 100%;\n        width: 100%;\n        min-height: inherit;\n      }\n\n      div[slot="header"],\n      div[slot="main"] {\n        display: flex;\n        width: 100%;\n      }\n\n      slot {\n        display: block;\n        flex: 1;\n      }\n\n      iaux-item-navigator {\n        min-height: var(--br-height, inherit);\n        height: var(--br-height, inherit);\n        display: block;\n        width: 100%;\n        color: var(--primaryTextColor);\n        --menuButtonLabelDisplay: block;\n        --menuWidth: 320px;\n        --menuSliderBg: var(--secondaryBGColor);\n        --activeButtonBg: var(--tertiaryBGColor);\n        --subpanelRightBorderColor: var(--secondaryCTABorder);\n        --animationTiming: 100ms;\n        --iconFillColor: var(--primaryTextColor);\n        --iconStrokeColor: var(--primaryTextColor);\n        --menuSliderHeaderIconHeight: 2rem;\n        --menuSliderHeaderIconWidth: 2rem;\n        --iconWidth: 2.4rem;\n        --iconHeight: 2.4rem;\n        --shareLinkColor: var(--primaryTextColor);\n        --shareIconBorder: var(--primaryTextColor);\n        --shareIconBg: var(--secondaryBGColor);\n        --activityIndicatorLoadingDotColor: var(--primaryTextColor);\n        --activityIndicatorLoadingRingColor: var(--primaryTextColor);\n      }\n    '])))}}])}(r.WF);window.customElements.define("ia-bookreader",Vi)}},function(e){e(e.s=4497)}]);
//# sourceMappingURL=ia-bookreader-bundle.js.map