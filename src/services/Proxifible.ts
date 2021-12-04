import _ from 'lodash'
import { getFetchHap } from '../fetcher'
import { ProxyItem } from '../types'

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
      await this.incProxy(selectedProxy.url())
      if (selectedProxy.changeUrl) {
        if ((selectedProxy.useCount || 0) >= this.limitPerProxy) {
          await this.changeProxyIp(selectedProxy.changeUrl, selectedProxy.url())
        }
      }
      return selectedProxy
    }

    return
  }

  static async incProxy(proxyUrl?: string, inc = 1) {
    if (!proxyUrl) {
      return
    }

    const index = this.proxies.findIndex((p) => p.url() === proxyUrl)
    if (index > -1) {
      this.proxies[index]!.useCount! = (this.proxies[index]!.useCount || 0) + inc
    }
  }

  static async changeProxyIp(url: string, proxyUrl: string) {
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

      const index = this.proxies.findIndex((p) => p.url() === proxyUrl)
      if (index > -1) {
        this.proxies[index]!.useCount = 0
      }

      return { result: await resp.json() }
    } catch (error: any) {
      return { error }
    }
  }
}
