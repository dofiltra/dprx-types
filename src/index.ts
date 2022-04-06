/* tslint:disable:max-classes-per-file */
import _ from 'lodash'
export { GoogleParserLocation } from './google'

export const NEWLINE = '▶'

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export type TAppDprxSettings = {
  serverName?: string
  token?: string
  email?: string
  restartMinutes?: number
  maxOpenBrowsers?: number
}

export type TgBotInfo = {
  token: string
  chatIds: number[] | string[]
  name?: string
}

export type TYoomoney = {
  token?: string
  client_id?: string
  site_url?: string
}

export type TQiwi = {
  token?: string
  phone?: string
  themeCode?: string
  publicKey?: string
  secretKey?: string
}

export class TDomainData {
  public port!: number
  public token!: string
  public host!: string
  public donors!: TDonor[]

  security?: {
    token?: string
    log?: boolean
  }

  overrides?: {
    urls?: TOverrideItem[]
  }

  removers?: TRemovers
  replacers?: TReplacers
  ads?: TAds
  customs?: TCustoms

  payments?: {
    qiwi?: TQiwi[]
    yoomoney?: TYoomoney[]
  }
  emails?: {
    gmail?: string[]
  }
  telegram?: {
    bots?: TgBotInfo[]
  }
  rewrite?: {
    enable: boolean
    opts?: TRewriteOpts
  }
}

export type TDomainsData = {
  [key: string]: TDomainData
}

export type TRewriteOpts = {
  coefWtn?: number
  selectors?: string[]
}

export type TCustoms = {
  sections?: TCustomSections
}

export type TCustomSections = {
  head?: TCustomSectionHead
  footer?: TCustomSectionFooter
}

export type TCustomSectionHead = {
  googleSiteVerification?: string
  gtagCode?: string
  code?: string
}

export type TCustomSectionFooter = {
  code?: string
}

export type TAcceptorInfo = {
  protocol: string
  host: string
  hostKey: string
  domainData: TDomainData
  domain: string
}

export type TCacheOpts = {
  html?: TCacheItem
  css?: TCacheItem
  js?: TCacheItem
}

export type TInvisibleOpts = {
  sitemap: {
    path?: string
    hide?: boolean
  }
}

export type TCacheItem = {
  enable?: boolean
  expired?: TCacheExpired[]
}

export type TCacheExpired = {
  filepathRegex: string
  seconds: number
}

export type TCleanOpts = {
  disableReplaceHtml?: boolean
  disableCleanHtml?: boolean
}

export type TNreadOpts = {
  include?: string[]
  minLinkLevel?: number
}

export type TReplacers = {
  html?: TReplacerElem[]
}

export type TReplacerElem = {
  newValue: string
  textValue?: string
  regex?: string
  flags?: string
}

export type TRemovers = {
  html?: TRemoverEl[]
  scripts?: TRemoverEl[]
}

export type TRemoverEl = {
  selectorItem?: { selector: string; count?: number }
  inner?: { text: string; count?: number }
}

export type TSiteOpts = {
  locale?: string
  sitename?: string
}

export type TDefaultPageOpts = {
  title?: string
  h1?: string
  description?: string
  backgroundUrl?: string
  subheading?: string
  keyValues?: { [key: string]: string }
}

export type TObserverOpts = {
  yt?: {
    sources?: TObserverSource[]
    homepageUrlTemplate?: string
  }
  lastpages?: {
    sources?: TObserverSource[]
  }
}

export type TObserverSource = {
  url: string
  updateEverySec?: number
  count?: number
  extractors?: TObserverExtractor[]

  // TODO: remove. use extractors instead
  selector?: string
  attrsExtract?: string[]

  subLevels?: TObserverSource[]
}

export type TObserverExtractor = {
  name: string
  value: string
  selector: string
}

export type TDonor = {
  domain: string
  virtualPath?: string

  siteOpts?: TSiteOpts
  defaultPageOpts?: TDefaultPageOpts
  cleanOpts?: TCleanOpts
  nReadOpts?: TNreadOpts
  cacheOpts?: TCacheOpts
  invisibleOpts?: TInvisibleOpts

  observerOpts?: TObserverOpts
}

export type TOverrideItem = {
  acceptorPath: string
  donorPath: string
}

export type TAds = {
  beforeH1?: TAdsItem[]
  afterH1?: TAdsItem[]
  afterContent?: TAdsItem[]
  afterNextPrev?: TAdsItem[]
  bubble?: TAdsItem[]
  everyN?: TAdsItem[]
}

export type TAdsItem = {
  html: string
  selectors?: string[]
  repeatN?: number
}

export class RewritePage {
  public pageId!: string
  public sendResultTo!: string
  public url!: string

  public token!: string
  public host!: string
  public donorDomain!: string
}

export class RewriteText {
  public token!: string
  public targetLang!: LangCode
  public status!: TaskStatus
  public blocks?: BlockContent[]
  public charsCount?: number
  public power?: number
  public expand?: RewriteMode.Longer | RewriteMode.Shorter
  public tone?: RewriteMode.Formal | RewriteMode.Casual
  public dataset?: Dataset
}

export class BlockContent {
  public id!: string
  public type!: string
  public data!: BlockData
  public rewriteDataSuggestions?: BlockData[]
  public results?: { [langCode: string]: BlockData }
}

export class BlockData {
  public text?: string
  public level?: number
  public caption?: string
  public items?: any[]
  public link?: string
  public url?: string
  public meta?: any
  public title?: string
  public message?: string
  public alignment?: 'left' | 'right' | 'center'
  public style?: 'unordered' | 'ordered'
  public html?: string
  public content?: any[]
  public withHeadings?: boolean
  public data?: any
  public withBackground?: boolean
  public withBorder?: boolean
  public stretched?: boolean
  public file?: { url?: string }
}
export enum TaskStatus {
  NotStarted = 0,
  InProgress = 3,
  Completed = 9
}
export enum LangCode {
  English = 'EN',
  Russian = 'RU',
  Bulgarian = 'BG',
  Chinese = 'ZH',
  Czech = 'CS',
  Danish = 'DA',
  Dutch = 'NL',
  Estonian = 'ET',
  Finnish = 'FI',
  French = 'FR',
  German = 'DE',
  Greek = 'EL',
  Hungarian = 'HU',
  Italian = 'IT',
  Japanese = 'JA',
  Latvian = 'LV',
  Lithuanian = 'LT',
  Polish = 'PL',
  Portuguese = 'PT',
  Romanian = 'RO',
  Slovak = 'SK',
  Slovenian = 'SL',
  Spanish = 'ES',
  Swedish = 'SV'
}
export enum Dataset {
  Auto = 0,
  News = 1,
  Crypto = 2,
  Finance = 3,
  Medicine = 4
}

export enum RewriteMode {
  Rewrite = 'REWRITE',
  Longer = 'LONGER',
  Shorter = 'SHORTER',
  Formal = 'FORMAL',
  Casual = 'CASUAL'
}

export enum BlockType {
  Unknown = 'unknow',
  Paragraph = 'paragraph',
  Image = 'image',
  Header = 'header',
  List = 'list',
  Embed = 'embed',
  Table = 'table',
  Marker = 'marker',
  Warning = 'warning',
  LinkTool = 'linkTool',
  Raw = 'raw',
  Quote = 'quote',
  CheckList = 'checklist',
  Delimiter = 'delimiter',
  InlineCode = 'inlineCode',
  SimpleImage = 'simpleImage',
  Code = 'code'
}

export class ProxyItem {
  constructor({ _id, type, ip, port, user, pass, dateEnd, version, changeUrl, useCount }: ProxyItem) {
    this._id = _id
    this.type = type
    this.ip = ip
    this.port = port
    this.user = user
    this.pass = pass
    this.dateEnd = dateEnd
    this.version = version
    this.changeUrl = changeUrl
    this.useCount = useCount || 0
  }
  public _id?: string
  public type!: 'http' | 'https' | 'socks5'
  public ip!: string
  public port?: string
  public user?: string
  public pass?: string
  public changeUrl?: string
  public dateEnd?: Date
  public version?: 4 | 6
  public useCount?: number

  public url() {
    const userpass = (this.user && this.pass && `${this.user}:${this.pass}@`) || ''
    return `${this.type}://${userpass}${this.ip}:${this.port || ''}`
  }

  public toPwrt() {
    return {
      server: `${this.type}://${this.ip}:${this.port}`,
      username: this.user,
      password: this.pass
    }
  }
}

export class Balance {
  public token!: string
  public coins!: number
}

export type TBatchBlock = {
  blockId: string
  rewriteDataSuggestions?: BlockData[]
  results?: { [langCode: string]: BlockData }
}

export type TFilterProxyOpts = {
  filterTypes?: ('http' | 'https' | 'socks5')[]
  filterVersions?: (4 | 6 | undefined)[]
  sortBy?: ('useCount' | 'changeUrl')[]
  sortOrder?: ('asc' | 'desc')[]
  forceChangeIp?: boolean
  maxUseCount?: number
}

export class Dotranslate {
  public token!: string
  public status!: TaskStatus

  public langs!: LangCode[]
  public blocks!: BlockContent[]
  public charsCount!: number
  public tone?: RewriteMode.Formal | RewriteMode.Casual
}

export type TExtrDuplicateOpts = {
  coefRemoveHeading?: number
  coefRemoveContent?: number
}

export type TExtrContentOpts = {
  limitContent?: number
  coefShuffleBlocks?: number
}

export type TExtrVideosOpts = {}

export type TExtrTypographOpts = {
  replaceTags?: { [tagName: string]: string } // { 'a': 'span' }

  removeSelectors?: string[] // ['blockquote', 'script']
  removeAttrs?: { [selector: string]: string[] } // { 'a[href]': ['href', 'onload'] }
}

export type TExtrRewriteOpts = {
  power?: number
  expand?: RewriteMode.Longer | RewriteMode.Shorter
  tone?: RewriteMode.Formal | RewriteMode.Casual
  selectors?: string[] // ['p']
}

export type TExtrTranslateOpts = {
  lang?: LangCode
  selectors?: string[] // ['p']
}

export class Doextractor {
  public token!: string
  public status!: TaskStatus
  public urlsOrKeys!: string[]

  public duplicateOpts?: TExtrDuplicateOpts
  public contentOpts?: TExtrContentOpts
  public videosOpts?: TExtrVideosOpts
  public typographOpts?: TExtrTypographOpts
  public rewriteOpts?: TExtrRewriteOpts
  public translateOpts?: TExtrTranslateOpts

  public googleParserOpts?: GoogleParserOpts
  public yandexParserOpts?: YandexParserOpts

  public results?: DoreadData[]
  public union?: DoreadData
}

export class GoogleParserOpts {
  public enable!: boolean
  public loc?: number
  public country?: number
  public lr?: string
  public domain?: number
  public device?: 'desktop' | 'tablet' | 'mobile'
}

export enum GoogleParserDomain {
  ac = 128,
  ad = 9,
  ae = 126,
  al = 4,
  am = 12,
  as = 6,
  at = 2,
  az = 3,
  ba = 23,
  be = 19,
  bf = 28,
  bg = 21,
  bi = 29,
  bj = 20,
  bs = 14,
  by = 18,
  ca = 77,
  cat = 78,
  cc = 86,
  cd = 57,
  cf = 182,
  cg = 141,
  ch = 187,
  ci = 89,
  cl = 186,
  cm = 76,
  cn = 85,
  'co.ao' = 8,
  'co.bw' = 24,
  'co.ck' = 131,
  'co.cr' = 88,
  'co.id' = 67,
  'co.il' = 65,
  'co.in' = 66,
  'co.jp' = 195,
  'co.ke' = 80,
  'co.kr' = 142,
  'co.ls' = 94,
  'co.ma' = 108,
  'co.mz' = 111,
  'co.nz' = 124,
  'co.th' = 163,
  'co.tz' = 164,
  'co.ug' = 172,
  'co.uk' = 31,
  'co.uz' = 173,
  'co.ve' = 33,
  'co.vi' = 35,
  'co.za' = 193,
  'co.zm' = 63,
  'co.zw' = 64,
  'com' = 37,
  'com.af' = 13,
  'com.ag' = 10,
  'com.ai' = 7,
  'com.ar' = 11,
  'com.au' = 1,
  'com.bd' = 15,
  'com.bh' = 16,
  'com.bn' = 27,
  'com.bo' = 22,
  'com.br' = 25,
  'com.bz' = 17,
  'com.co' = 87,
  'com.cu' = 90,
  'com.cy' = 81,
  'com.do' = 61,
  'com.ec' = 190,
  'com.eg' = 62,
  'com.et' = 192,
  'com.fj' = 176,
  'com.gh' = 43,
  'com.gi' = 49,
  'com.gt' = 45,
  'com.hk' = 51,
  'com.jm' = 194,
  'com.kh' = 75,
  'com.kw' = 91,
  'com.lb' = 95,
  'com.lc' = 153,
  'com.ly' = 96,
  'com.mm' = 115,
  'com.mt' = 107,
  'com.mx' = 109,
  'com.my' = 104,
  'com.na' = 116,
  'com.nf' = 130,
  'com.ng' = 120,
  'com.ni' = 122,
  'com.np' = 118,
  'com.om' = 127,
  'com.pa' = 134,
  'com.pe' = 137,
  'com.pg' = 135,
  'com.ph' = 177,
  'com.pk' = 133,
  'com.pr' = 140,
  'com.py' = 136,
  'com.qa' = 79,
  'com.sa' = 149,
  'com.sb' = 158,
  'com.sg' = 155,
  'com.sl' = 161,
  'com.sv' = 146,
  'com.tj' = 162,
  'com.tn' = 169,
  'com.tr' = 171,
  'com.tw' = 84,
  'com.ua' = 174,
  'com.uy' = 175,
  'com.vc' = 152,
  'com.vn' = 38,
  cv = 73,
  cz = 185,
  de = 47,
  dj = 59,
  dk = 56,
  dm = 60,
  dz = 5,
  ee = 191,
  es = 71,
  fi = 178,
  fm = 110,
  fr = 180,
  ga = 39,
  ge = 55,
  gf = 46,
  gg = 48,
  gl = 53,
  gm = 42,
  gp = 44,
  gr = 54,
  gy = 41,
  hn = 50,
  hr = 181,
  ht = 40,
  hu = 32,
  ie = 179,
  im = 129,
  io = 26,
  iq = 69,
  is = 70,
  it = 72,
  je = 58,
  jo = 68,
  kg = 82,
  ki = 83,
  kz = 74,
  la = 92,
  li = 98,
  lk = 189,
  lt = 97,
  lu = 99,
  lv = 93,
  md = 112,
  me = 184,
  mg = 101,
  mk = 102,
  ml = 105,
  mn = 113,
  ms = 114,
  mu = 100,
  mv = 106,
  mw = 103,
  ne = 119,
  nl = 121,
  no = 125,
  nr = 117,
  nu = 123,
  pl = 138,
  pn = 132,
  ps = 52,
  pt = 139,
  ro = 145,
  rs = 154,
  ru = 143,
  rw = 144,
  sc = 150,
  se = 188,
  si = 157,
  sk = 156,
  sn = 151,
  so = 159,
  st = 148,
  td = 183,
  tg = 165,
  tk = 166,
  tl = 36,
  tm = 170,
  to = 167,
  tt = 168,
  us = 160,
  vg = 34,
  vu = 30,
  ws = 147
}

export class YandexParserOpts {
  public enable!: boolean
}

export class DoreadData {
  public url?: string
  public title?: string
  public description?: string
  public content?: string
  public thumb?: string

  public pageType?: string
  public locale?: string
  public byline?: string
  public dir?: string
  public textContent?: string
  public length?: number
  public siteName?: string
  public tags?: string

  public originalHtml?: string
  public blocks?: BlockContent[]
  public sources?: string[]
}

export enum AnalType {
  Title = 'TITLE',
  H1 = 'H1',
  H2 = 'H2',
  Descr = 'DESCR',
  Keywords = 'KEYWORDS'
}

export class AnalSuggestImprove {
  public value!: string

  public rate!: number
}

export class AnalItem {
  public type!: AnalType

  public value!: string

  public suggestImproves?: AnalSuggestImprove[]

  public url?: string
}

export enum SocketEvent {
  Connect = 'connect',
  Connection = 'connection',
  Disconnect = 'disconnect',
  Join = 'join',

  AnalCreateBulk = 'anal.createBulk',
  SocketsData = 'odm.stats',
  SendQueue = 'web.sendQueue',
  ProxiesData = 'web.proxiesData',

  AibackLoadSettings = 'aiback.loadSettings',
  AibackSetData = 'aiback.setData',
  AibackUpdate = 'aiback.update',
  AibackUpdateBatch = 'aiback.updateBatch',
  AibackExecute = 'execute',
  AibackRestartApp = 'aiback.restartApp',
  AibackReloadProxies = 'aiback.reloadProxies',
  AibackLoadProxies = 'loadProxies',
  AibackLoadedProxies = 'loadedProxies',
  AibackSyncContainer = 'aiback.syncContainer',
  AibackStopContainer = 'aiback.stopContainer',
  AibackState = 'aiback.state',
  AibackRefresh = 'aiback.refresh',
  AibackChangeThreads = 'aiback.changeThreads',
  AibackRegLiveinternet = 'aiback.regLiveinternet',

  RewritePrefix = 'rewritetext_',
  TranslatePrefix = 'translate_',
  ExtractorPrefix = 'extractor_',

  P2PUpdate = 'p2p.update',
  GetP2PData = 'p2p.getData'
}

export enum SocketRoom {
  Aiback = 'aiback',
  Exchange = 'exchange'
}

export enum ModuleName {
  Rewriter = 'rewriter',
  Translator = 'translator',
  Extractor = 'extractor'
}

export enum AppState {
  Active = 'active',
  Pause = 'pause',
  SoftPause = 'softpause'
}

export class AibackSettings {
  public serverName!: string
  public threadsCount!: number
  public headless!: boolean

  public xmluser!: string
  public xmlkey!: string

  public xmlriveruser!: string
  public xmlriverkey!: string

  public ruCaptchaKey?: string

  public wtntoken!: string

  public limitCpu!: number
  public limitRam!: number
}

export enum ExchangeName {
  Binance = 'BINANCE',
  Okx = 'OKX'
}

export enum P2PCurrency {
  RUB = 'RUB',
  TRY = 'TRY',
  UAH = 'UAH',
  KZT = 'KZT',
  MDL = 'MDL'
}

export enum P2PBaseCurrency {
  USDT = 'USDT',
  USDC = 'USDC'
}

export enum TradeType {
  Sell = 'SELL',
  Buy = 'BUY'
}

export class P2PMarketData {
  public exchangeName!: ExchangeName
  public currency!: P2PCurrency
  public buy!: P2POrder[]
  public sell!: P2POrder[]
}

export class P2POrder {
  public exchangeName!: ExchangeName
  public id!: string
  public price!: string

  public tradeType!: TradeType
  public paymentMethods!: string[]
  public baseCurrency!: P2PCurrency
  public currency!: P2PCurrency
  public maxAmountPerOrder!: string
  public minAmountPerOrder!: string
  public scale!: number
  public symbol!: string
}

export type TP2POkxOrder = {
  price: string
  quoteMinAmountPerOrder: string
  quoteMaxAmountPerOrder: string
  paymentMethods: string[]

  alreadyTraded: boolean
  availableAmount: string
  baseCurrency: string
  black: boolean
  cancelledOrderQuantity: number
  completedOrderQuantity: number
  completedRate: string
  creatorType: string
  guideUpgradeKyc: boolean
  id: string
  intention: boolean
  maxCompletedOrderQuantity: number
  maxUserCreatedDate: number
  merchantId: string
  minCompletedOrderQuantity: number
  minCompletionRate: string
  minKycLevel: number
  minSellOrders: number
  mine: false
  nickName: string

  publicUserId: string
  quoteCurrency: string
  quoteScale: number
  quoteSymbol: string
  receivingAds: boolean
  safetyLimit: boolean
  side: string
  userType: string
}

export type TP2PBinanceOrder = {
  adv: {
    advNo: string
    classify: string
    tradeType: TradeType
    asset: P2PCurrency
    fiatUnit: P2PCurrency
    advStatus: null
    priceType: null
    priceFloatingRatio: null
    rateFloatingRatio: null
    currencyRate: null
    price: string
    initAmount: string
    surplusAmount: string
    amountAfterEditing: null
    maxSingleTransAmount: string
    minSingleTransAmount: string
    buyerKycLimit: null
    buyerRegDaysLimit: null
    buyerBtcPositionLimit: null
    remarks: null
    autoReplyMsg: string
    payTimeLimit: number
    tradeMethods: {
      payId: null
      payMethodId: string
      payType: string
      payAccount: null
      payBank: null
      paySubBank: null
      identifier: string
      iconUrlColor: string
      tradeMethodName: string
      tradeMethodShortName: string
      tradeMethodBgColor: string
    }[]
    userTradeCountFilterTime: null
    userBuyTradeCountMin: null
    userBuyTradeCountMax: null
    userSellTradeCountMin: null
    userSellTradeCountMax: null
    userAllTradeCountMin: null
    userAllTradeCountMax: null
    userTradeCompleteRateFilterTime: null
    userTradeCompleteCountMin: null
    userTradeCompleteRateMin: null
    userTradeVolumeFilterTime: null
    userTradeType: null
    userTradeVolumeMin: null
    userTradeVolumeMax: null
    userTradeVolumeAsset: null
    createTime: null
    advUpdateTime: null
    fiatVo: null
    assetVo: null
    advVisibleRet: null
    assetLogo: null
    assetScale: number
    fiatScale: number
    priceScale: number
    fiatSymbol: string
    isTradable: boolean
    dynamicMaxSingleTransAmount: string
    minSingleTransQuantity: string
    maxSingleTransQuantity: string
    dynamicMaxSingleTransQuantity: string
    tradableQuantity: string
    commissionRate: string
    tradeMethodCommissionRates: any[]
    launchCountry: null
  }
  advertiser: {
    userNo: string
    realName: null
    nickName: string
    margin: null
    marginUnit: null
    orderCount: null
    monthOrderCount: number
    monthFinishRate: number
    advConfirmTime: 0
    email: null
    registrationTime: null
    mobile: null
    userType: string
    tagIconUrls: []
    userGrade: number
    userIdentity: string
    proMerchant: null
    isBlocked: null
  }
}

export class AiSite {
  public host!: string
  public token!: string
}

export type TLiveinternetOpts = {
  host: string
  email: string
  password: string
}
