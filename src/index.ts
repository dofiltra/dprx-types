/* tslint:disable:max-classes-per-file */
import _ from 'lodash'

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


export class GoogleParserLocation {
  static getAll() {
    return locations
  }

  static getCountries() {
    return locations.filter((loc) => loc.targetType === 'Country')
  }
}

// Criteria ID,Name,Canonical Name,Parent ID,Country Code,Target Type,Status
const locations = [
  {
    id: 2004,
    parentId: null,
    countryCode: 'AF',
    name: 'Afghanistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2008,
    parentId: null,
    countryCode: 'AL',
    name: 'Albania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2010,
    parentId: null,
    countryCode: 'AQ',
    name: 'Antarctica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2012,
    parentId: null,
    countryCode: 'DZ',
    name: 'Algeria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2016,
    parentId: null,
    countryCode: 'AS',
    name: 'American Samoa',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2020,
    parentId: null,
    countryCode: 'AD',
    name: 'Andorra',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2024,
    parentId: null,
    countryCode: 'AO',
    name: 'Angola',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2028,
    parentId: null,
    countryCode: 'AG',
    name: 'Antigua and Barbuda',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2031,
    parentId: null,
    countryCode: 'AZ',
    name: 'Azerbaijan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2032,
    parentId: null,
    countryCode: 'AR',
    name: 'Argentina',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2036,
    parentId: null,
    countryCode: 'AU',
    name: 'Australia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2040,
    parentId: null,
    countryCode: 'AT',
    name: 'Austria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2044,
    parentId: null,
    countryCode: 'BS',
    name: 'The Bahamas',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2048,
    parentId: null,
    countryCode: 'BH',
    name: 'Bahrain',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2050,
    parentId: null,
    countryCode: 'BD',
    name: 'Bangladesh',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2051,
    parentId: null,
    countryCode: 'AM',
    name: 'Armenia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2052,
    parentId: null,
    countryCode: 'BB',
    name: 'Barbados',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2056,
    parentId: null,
    countryCode: 'BE',
    name: 'Belgium',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2064,
    parentId: null,
    countryCode: 'BT',
    name: 'Bhutan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2068,
    parentId: null,
    countryCode: 'BO',
    name: 'Bolivia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2070,
    parentId: null,
    countryCode: 'BA',
    name: 'Bosnia and Herzegovina',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2072,
    parentId: null,
    countryCode: 'BW',
    name: 'Botswana',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2076,
    parentId: null,
    countryCode: 'BR',
    name: 'Brazil',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2084,
    parentId: null,
    countryCode: 'BZ',
    name: 'Belize',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2090,
    parentId: null,
    countryCode: 'SB',
    name: 'Solomon Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2096,
    parentId: null,
    countryCode: 'BN',
    name: 'Brunei',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2100,
    parentId: null,
    countryCode: 'BG',
    name: 'Bulgaria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2104,
    parentId: null,
    countryCode: 'MM',
    name: 'Myanmar (Burma)',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2108,
    parentId: null,
    countryCode: 'BI',
    name: 'Burundi',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2112,
    parentId: null,
    countryCode: 'BY',
    name: 'Belarus',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2116,
    parentId: null,
    countryCode: 'KH',
    name: 'Cambodia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2120,
    parentId: null,
    countryCode: 'CM',
    name: 'Cameroon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2124,
    parentId: null,
    countryCode: 'CA',
    name: 'Canada',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2132,
    parentId: null,
    countryCode: 'CV',
    name: 'Cape Verde',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2140,
    parentId: null,
    countryCode: 'CF',
    name: 'Central African Republic',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2144,
    parentId: null,
    countryCode: 'LK',
    name: 'Sri Lanka',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2148,
    parentId: null,
    countryCode: 'TD',
    name: 'Chad',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2152,
    parentId: null,
    countryCode: 'CL',
    name: 'Chile',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2156,
    parentId: null,
    countryCode: 'CN',
    name: 'China',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2162,
    parentId: null,
    countryCode: 'CX',
    name: 'Christmas Island',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2166,
    parentId: null,
    countryCode: 'CC',
    name: 'Cocos (Keeling) Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2170,
    parentId: null,
    countryCode: 'CO',
    name: 'Colombia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2174,
    parentId: null,
    countryCode: 'KM',
    name: 'Comoros',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2178,
    parentId: null,
    countryCode: 'CG',
    name: 'Republic of the Congo',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2180,
    parentId: null,
    countryCode: 'CD',
    name: 'Democratic Republic of the Congo',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2184,
    parentId: null,
    countryCode: 'CK',
    name: 'Cook Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2188,
    parentId: null,
    countryCode: 'CR',
    name: 'Costa Rica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2191,
    parentId: null,
    countryCode: 'HR',
    name: 'Croatia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2196,
    parentId: null,
    countryCode: 'CY',
    name: 'Cyprus',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2203,
    parentId: null,
    countryCode: 'CZ',
    name: 'Czechia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2204,
    parentId: null,
    countryCode: 'BJ',
    name: 'Benin',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2208,
    parentId: null,
    countryCode: 'DK',
    name: 'Denmark',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2212,
    parentId: null,
    countryCode: 'DM',
    name: 'Dominica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2214,
    parentId: null,
    countryCode: 'DO',
    name: 'Dominican Republic',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2218,
    parentId: null,
    countryCode: 'EC',
    name: 'Ecuador',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2222,
    parentId: null,
    countryCode: 'SV',
    name: 'El Salvador',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2226,
    parentId: null,
    countryCode: 'GQ',
    name: 'Equatorial Guinea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2231,
    parentId: null,
    countryCode: 'ET',
    name: 'Ethiopia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2232,
    parentId: null,
    countryCode: 'ER',
    name: 'Eritrea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2233,
    parentId: null,
    countryCode: 'EE',
    name: 'Estonia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2239,
    parentId: null,
    countryCode: 'GS',
    name: 'South Georgia and the South Sandwich Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2242,
    parentId: null,
    countryCode: 'FJ',
    name: 'Fiji',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2246,
    parentId: null,
    countryCode: 'FI',
    name: 'Finland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2250,
    parentId: null,
    countryCode: 'FR',
    name: 'France',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2258,
    parentId: null,
    countryCode: 'PF',
    name: 'French Polynesia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2260,
    parentId: null,
    countryCode: 'TF',
    name: 'French Southern and Antarctic Lands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2262,
    parentId: null,
    countryCode: 'DJ',
    name: 'Djibouti',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2266,
    parentId: null,
    countryCode: 'GA',
    name: 'Gabon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2268,
    parentId: null,
    countryCode: 'GE',
    name: 'Georgia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2270,
    parentId: null,
    countryCode: 'GM',
    name: 'The Gambia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2276,
    parentId: null,
    countryCode: 'DE',
    name: 'Germany',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2288,
    parentId: null,
    countryCode: 'GH',
    name: 'Ghana',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2296,
    parentId: null,
    countryCode: 'KI',
    name: 'Kiribati',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2300,
    parentId: null,
    countryCode: 'GR',
    name: 'Greece',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2308,
    parentId: null,
    countryCode: 'GD',
    name: 'Grenada',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2316,
    parentId: null,
    countryCode: 'GU',
    name: 'Guam',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2320,
    parentId: null,
    countryCode: 'GT',
    name: 'Guatemala',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2324,
    parentId: null,
    countryCode: 'GN',
    name: 'Guinea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2328,
    parentId: null,
    countryCode: 'GY',
    name: 'Guyana',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2332,
    parentId: null,
    countryCode: 'HT',
    name: 'Haiti',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2334,
    parentId: null,
    countryCode: 'HM',
    name: 'Heard Island and McDonald Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2336,
    parentId: null,
    countryCode: 'VA',
    name: 'Vatican City',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2340,
    parentId: null,
    countryCode: 'HN',
    name: 'Honduras',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2348,
    parentId: null,
    countryCode: 'HU',
    name: 'Hungary',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2352,
    parentId: null,
    countryCode: 'IS',
    name: 'Iceland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2356,
    parentId: null,
    countryCode: 'IN',
    name: 'India',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2360,
    parentId: null,
    countryCode: 'ID',
    name: 'Indonesia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2368,
    parentId: null,
    countryCode: 'IQ',
    name: 'Iraq',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2372,
    parentId: null,
    countryCode: 'IE',
    name: 'Ireland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2376,
    parentId: null,
    countryCode: 'IL',
    name: 'Israel',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2380,
    parentId: null,
    countryCode: 'IT',
    name: 'Italy',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2384,
    parentId: null,
    countryCode: 'CI',
    name: "Cote d'Ivoire",
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2388,
    parentId: null,
    countryCode: 'JM',
    name: 'Jamaica',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2392,
    parentId: null,
    countryCode: 'JP',
    name: 'Japan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2398,
    parentId: null,
    countryCode: 'KZ',
    name: 'Kazakhstan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2400,
    parentId: null,
    countryCode: 'JO',
    name: 'Jordan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2404,
    parentId: null,
    countryCode: 'KE',
    name: 'Kenya',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2410,
    parentId: null,
    countryCode: 'KR',
    name: 'South Korea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2414,
    parentId: null,
    countryCode: 'KW',
    name: 'Kuwait',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2417,
    parentId: null,
    countryCode: 'KG',
    name: 'Kyrgyzstan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2418,
    parentId: null,
    countryCode: 'LA',
    name: 'Laos',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2422,
    parentId: null,
    countryCode: 'LB',
    name: 'Lebanon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2426,
    parentId: null,
    countryCode: 'LS',
    name: 'Lesotho',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2428,
    parentId: null,
    countryCode: 'LV',
    name: 'Latvia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2430,
    parentId: null,
    countryCode: 'LR',
    name: 'Liberia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2434,
    parentId: null,
    countryCode: 'LY',
    name: 'Libya',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2438,
    parentId: null,
    countryCode: 'LI',
    name: 'Liechtenstein',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2440,
    parentId: null,
    countryCode: 'LT',
    name: 'Lithuania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2442,
    parentId: null,
    countryCode: 'LU',
    name: 'Luxembourg',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2450,
    parentId: null,
    countryCode: 'MG',
    name: 'Madagascar',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2454,
    parentId: null,
    countryCode: 'MW',
    name: 'Malawi',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2458,
    parentId: null,
    countryCode: 'MY',
    name: 'Malaysia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2462,
    parentId: null,
    countryCode: 'MV',
    name: 'Maldives',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2466,
    parentId: null,
    countryCode: 'ML',
    name: 'Mali',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2470,
    parentId: null,
    countryCode: 'MT',
    name: 'Malta',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2478,
    parentId: null,
    countryCode: 'MR',
    name: 'Mauritania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2480,
    parentId: null,
    countryCode: 'MU',
    name: 'Mauritius',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2484,
    parentId: null,
    countryCode: 'MX',
    name: 'Mexico',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2492,
    parentId: null,
    countryCode: 'MC',
    name: 'Monaco',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2496,
    parentId: null,
    countryCode: 'MN',
    name: 'Mongolia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2498,
    parentId: null,
    countryCode: 'MD',
    name: 'Moldova',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2499,
    parentId: null,
    countryCode: 'ME',
    name: 'Montenegro',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2504,
    parentId: null,
    countryCode: 'MA',
    name: 'Morocco',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2508,
    parentId: null,
    countryCode: 'MZ',
    name: 'Mozambique',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2512,
    parentId: null,
    countryCode: 'OM',
    name: 'Oman',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2516,
    parentId: null,
    countryCode: 'NA',
    name: 'Namibia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2520,
    parentId: null,
    countryCode: 'NR',
    name: 'Nauru',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2524,
    parentId: null,
    countryCode: 'NP',
    name: 'Nepal',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2528,
    parentId: null,
    countryCode: 'NL',
    name: 'Netherlands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2531,
    parentId: null,
    countryCode: 'CW',
    name: 'Curacao',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2534,
    parentId: null,
    countryCode: 'SX',
    name: 'Sint Maarten',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2535,
    parentId: null,
    countryCode: 'BQ',
    name: 'Caribbean Netherlands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2540,
    parentId: null,
    countryCode: 'NC',
    name: 'New Caledonia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2548,
    parentId: null,
    countryCode: 'VU',
    name: 'Vanuatu',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2554,
    parentId: null,
    countryCode: 'NZ',
    name: 'New Zealand',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2558,
    parentId: null,
    countryCode: 'NI',
    name: 'Nicaragua',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2562,
    parentId: null,
    countryCode: 'NE',
    name: 'Niger',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2566,
    parentId: null,
    countryCode: 'NG',
    name: 'Nigeria',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2570,
    parentId: null,
    countryCode: 'NU',
    name: 'Niue',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2574,
    parentId: null,
    countryCode: 'NF',
    name: 'Norfolk Island',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2578,
    parentId: null,
    countryCode: 'NO',
    name: 'Norway',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2580,
    parentId: null,
    countryCode: 'MP',
    name: 'Northern Mariana Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2581,
    parentId: null,
    countryCode: 'UM',
    name: 'United States Minor Outlying Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2583,
    parentId: null,
    countryCode: 'FM',
    name: 'Federated States of Micronesia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2584,
    parentId: null,
    countryCode: 'MH',
    name: 'Marshall Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2585,
    parentId: null,
    countryCode: 'PW',
    name: 'Palau',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2586,
    parentId: null,
    countryCode: 'PK',
    name: 'Pakistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2591,
    parentId: null,
    countryCode: 'PA',
    name: 'Panama',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2598,
    parentId: null,
    countryCode: 'PG',
    name: 'Papua New Guinea',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2600,
    parentId: null,
    countryCode: 'PY',
    name: 'Paraguay',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2604,
    parentId: null,
    countryCode: 'PE',
    name: 'Peru',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2608,
    parentId: null,
    countryCode: 'PH',
    name: 'Philippines',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2612,
    parentId: null,
    countryCode: 'PN',
    name: 'Pitcairn Islands',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2616,
    parentId: null,
    countryCode: 'PL',
    name: 'Poland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2620,
    parentId: null,
    countryCode: 'PT',
    name: 'Portugal',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2624,
    parentId: null,
    countryCode: 'GW',
    name: 'Guinea-Bissau',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2626,
    parentId: null,
    countryCode: 'TL',
    name: 'Timor-Leste',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2634,
    parentId: null,
    countryCode: 'QA',
    name: 'Qatar',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2642,
    parentId: null,
    countryCode: 'RO',
    name: 'Romania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2643,
    parentId: null,
    countryCode: 'RU',
    name: 'Russia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2646,
    parentId: null,
    countryCode: 'RW',
    name: 'Rwanda',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2654,
    parentId: null,
    countryCode: 'SH',
    name: '"Saint Helena',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2659,
    parentId: null,
    countryCode: 'KN',
    name: 'Saint Kitts and Nevis',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2662,
    parentId: null,
    countryCode: 'LC',
    name: 'Saint Lucia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2666,
    parentId: null,
    countryCode: 'PM',
    name: 'Saint Pierre and Miquelon',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2670,
    parentId: null,
    countryCode: 'VC',
    name: 'Saint Vincent and the Grenadines',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2674,
    parentId: null,
    countryCode: 'SM',
    name: 'San Marino',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2678,
    parentId: null,
    countryCode: 'ST',
    name: 'Sao Tome and Principe',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2682,
    parentId: null,
    countryCode: 'SA',
    name: 'Saudi Arabia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2686,
    parentId: null,
    countryCode: 'SN',
    name: 'Senegal',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2688,
    parentId: null,
    countryCode: 'RS',
    name: 'Serbia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2690,
    parentId: null,
    countryCode: 'SC',
    name: 'Seychelles',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2694,
    parentId: null,
    countryCode: 'SL',
    name: 'Sierra Leone',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2702,
    parentId: null,
    countryCode: 'SG',
    name: 'Singapore',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2703,
    parentId: null,
    countryCode: 'SK',
    name: 'Slovakia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2704,
    parentId: null,
    countryCode: 'VN',
    name: 'Vietnam',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2705,
    parentId: null,
    countryCode: 'SI',
    name: 'Slovenia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2706,
    parentId: null,
    countryCode: 'SO',
    name: 'Somalia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2710,
    parentId: null,
    countryCode: 'ZA',
    name: 'South Africa',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2716,
    parentId: null,
    countryCode: 'ZW',
    name: 'Zimbabwe',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2724,
    parentId: null,
    countryCode: 'ES',
    name: 'Spain',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2740,
    parentId: null,
    countryCode: 'SR',
    name: 'Suriname',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2748,
    parentId: null,
    countryCode: 'SZ',
    name: 'Swaziland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2752,
    parentId: null,
    countryCode: 'SE',
    name: 'Sweden',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2756,
    parentId: null,
    countryCode: 'CH',
    name: 'Switzerland',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2762,
    parentId: null,
    countryCode: 'TJ',
    name: 'Tajikistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2764,
    parentId: null,
    countryCode: 'TH',
    name: 'Thailand',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2768,
    parentId: null,
    countryCode: 'TG',
    name: 'Togo',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2772,
    parentId: null,
    countryCode: 'TK',
    name: 'Tokelau',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2776,
    parentId: null,
    countryCode: 'TO',
    name: 'Tonga',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2780,
    parentId: null,
    countryCode: 'TT',
    name: 'Trinidad and Tobago',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2784,
    parentId: null,
    countryCode: 'AE',
    name: 'United Arab Emirates',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2788,
    parentId: null,
    countryCode: 'TN',
    name: 'Tunisia',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2792,
    parentId: null,
    countryCode: 'TR',
    name: 'Turkey',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2795,
    parentId: null,
    countryCode: 'TM',
    name: 'Turkmenistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2798,
    parentId: null,
    countryCode: 'TV',
    name: 'Tuvalu',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2800,
    parentId: null,
    countryCode: 'UG',
    name: 'Uganda',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2804,
    parentId: null,
    countryCode: 'UA',
    name: 'Ukraine',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2807,
    parentId: null,
    countryCode: 'MK',
    name: 'Macedonia (FYROM)',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2818,
    parentId: null,
    countryCode: 'EG',
    name: 'Egypt',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2826,
    parentId: null,
    countryCode: 'GB',
    name: 'United Kingdom',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2831,
    parentId: null,
    countryCode: 'GG',
    name: 'Guernsey',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2832,
    parentId: null,
    countryCode: 'JE',
    name: 'Jersey',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2834,
    parentId: null,
    countryCode: 'TZ',
    name: 'Tanzania',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2840,
    parentId: null,
    countryCode: 'US',
    name: 'United States',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2854,
    parentId: null,
    countryCode: 'BF',
    name: 'Burkina Faso',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2858,
    parentId: null,
    countryCode: 'UY',
    name: 'Uruguay',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2860,
    parentId: null,
    countryCode: 'UZ',
    name: 'Uzbekistan',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2862,
    parentId: null,
    countryCode: 'VE',
    name: 'Venezuela',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2876,
    parentId: null,
    countryCode: 'WF',
    name: 'Wallis and Futuna',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2882,
    parentId: null,
    countryCode: 'WS',
    name: 'Samoa',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2887,
    parentId: null,
    countryCode: 'YE',
    name: 'Yemen',
    status: 'Active',
    targetType: 'Country'
  },
  {
    id: 2894,
    parentId: null,
    countryCode: 'ZM',
    name: 'Zambia',
    status: 'Active',
    targetType: 'Country'
  }
]
