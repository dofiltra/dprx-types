import _ from 'lodash'
import { getFetchHap } from '../fetcher'
import { ProxyItem } from '../models/dprx'

export type TFilterProxyOpts = {
  filterTypes?: ('http' | 'https' | 'socks5')[]
  sortBy?: ('useCount' | 'changeUrl')[]
}

export class Proxifible {
  static proxies: ProxyItem[] = []
  static limitPerProxy = 1000

  static async getProxy(opts?: TFilterProxyOpts) {
    const { filterTypes, sortBy = ['useCount'] } = { ...opts }
    const sortProxies = _.sortBy(Proxifible.proxies, sortBy).filter(
      (p) => !filterTypes?.length || filterTypes.includes(p.type)
    )

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
