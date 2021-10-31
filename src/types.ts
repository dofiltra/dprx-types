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
