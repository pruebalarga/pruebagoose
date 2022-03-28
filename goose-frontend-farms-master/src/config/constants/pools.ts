import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
     sousId: 5,
     tokenName: 'CAKE',
     stakingTokenName: QuoteToken.CAKE,
     stakingTokenAddress: '0x2C3A91137DF0B911f2e0Da344aC32fA7bDcb1db4',
     contractAddress: {
       97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      250: '0xF70dd54B26A937362b06479A964A41d04ddE5C4b',
     },
     poolCategory: PoolCategory.CORE,
     projectLink: 'https://pancakeswap.finance/',
     harvest: true,
     tokenPerBlock: '10',
     sortOrder: 1,
     isFinished: false,
     tokenDecimals: 18,
  },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
