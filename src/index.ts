/* tslint:disable:max-classes-per-file */
import _ from 'lodash'
import fetchHap, { FetchOptions } from 'make-fetch-happen'
import { DoProxyApi } from 'dofiltra_api'

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
  public targetLang!: string
  public status!: RewriteTextStatus
  public blocks?: RewriteTextBlock[]
  public charsCount?: number
  public power?: number
}
export class RewriteTextBlock {
  public id!: string
  public type!: string
  public data!: RewriteTextBlockData
  public rewriteDataSuggestions?: RewriteTextBlockData[]
}

export class RewriteTextBlockData {
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
  public html?: string
  public content?: any[]
  public withHeadings?: boolean
  public data?: any
  public withBackground?: boolean
  public withBorder?: boolean
  public stretched?: boolean
}
export enum RewriteTextStatus {
  NotStarted = 0,
  InProgress = 3,
  Completed = 9
}
// export enum RewriteTextTargetLang {
//   EN = 'EN',
//   RU = 'RU'
// }
export enum RewriteTextDataset {
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

export enum RewriteTextBlockType {
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
  constructor({ type, ip, port, user, pass, dateEnd, version, changeUrl, useCount }: ProxyItem) {
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
  rewriteDataSuggestions: any[]
}

export type TFilterProxyOpts = {
  filterTypes?: ('http' | 'https' | 'socks5')[]
  filterVersions?: (4 | 6 | undefined)[]
  sortBy?: ('useCount' | 'changeUrl')[]
}

export class Proxifible {
  static proxies: ProxyItem[] = []
  static limitPerProxy = 1000

  static async loadProxies() {
    const { items: proxyItems4 } = await DoProxyApi.get(5e3, 4)
    const { data: proxy4 = [] } = { ...proxyItems4 }

    const { items: proxyItems6 } = await DoProxyApi.get(5e3, 6)
    const { data: proxy6 = [] } = { ...proxyItems6 }

    if (proxy4.length) {
      this.proxies.push(...proxy4.map((p: ProxyItem) => new ProxyItem(p)))
    }
    if (proxy6.length) {
      this.proxies.push(...proxy6.map((p: ProxyItem) => new ProxyItem(p)))
    }
  }

  static async getProxy(opts?: TFilterProxyOpts) {
    if (!this.proxies?.length) {
      await this.loadProxies()
    }

    const { filterTypes, filterVersions, sortBy = ['useCount'] } = { ...opts }
    const sortProxies = _.sortBy(this.proxies, sortBy)
      .filter((p) => !filterTypes?.length || filterTypes.includes(p.type))
      .filter((p) => !filterVersions?.length || filterVersions.includes(p.version))

    const selectedProxy = sortProxies[0]
    if (selectedProxy) {
      await this.changeUseCountProxy(selectedProxy.url())
      if (selectedProxy.changeUrl) {
        if ((selectedProxy.useCount || 0) >= this.limitPerProxy) {
          await this.changeIp(selectedProxy.changeUrl, selectedProxy.url())
        }
      }
      return selectedProxy
    }

    return
  }

  static async changeUseCountProxy(proxyUrl?: string, inc = 1) {
    if (!proxyUrl) {
      return
    }

    try {
      const index = this.proxies.findIndex((p) => p.url() === proxyUrl)
      if (index > -1) {
        if (inc === -this.limitPerProxy) {
          this.proxies[index].useCount = 0
        } else {
          this.proxies[index]!.useCount = (this.proxies[index]!.useCount || 0) + inc
        }
      }
    } catch (error: any) {
      //
    }
  }

  static async changeIp(url: string, proxyUrl: string) {
    try {
      if (!url.startsWith('http')) {
        url = `http://${url}`
      }
      const fh = await getFetchHap()
      const resp = await fh(url, {
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        method: 'GET',
        timeout: 60e3
      })
      this.changeUseCountProxy(proxyUrl, -this.limitPerProxy)

      return { result: await resp.json() }
    } catch (error: any) {
      return { error }
    }
  }
}

export const getFetchHap = async (opts?: FetchOptions) => {
  const {
    headers = {
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3'
    },
    compress = true
  } = { ...opts }

  return fetchHap.defaults({
    // cachePath: './node_modules/.fetch-cache',
    timeout: 30e3,
    ...opts,
    compress,
    headers
  })
}

export const NEWLINE = '▶' //
