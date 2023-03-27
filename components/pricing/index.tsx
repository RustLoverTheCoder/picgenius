import PricingHeader from '@/components/pricing/header'
import PricingCard, { PricingCardProps } from './Card'

const PricingPage = () => {
  const list: PricingCardProps[] = [
    {
      title: '免费版',
      subTitle: '尝试一下',
      price: '免费开始',
      btnText: '开始使用',
      features: ['1位使用者', '50积分/天', '5次请求/小时', '充值增加积分'],
      active: false,
    },
    {
      title: '个人版',
      subTitle: '个人用户，1杯咖啡',
      price: '29.9元/月',
      btnText: '选择个人版',
      features: ['1位使用者', '500积分/天', '20次请求/小时', '解锁高级功能', 'AI支持'],
      active: false,
    },
    {
      title: '专业版',
      subTitle: '专业用户',
      price: '99.9元/月',
      btnText: '选择专业版',
      features: ['2位使用者', '不限次数/天', '不限次数请求/小时', '解锁专业版控制台', 'AI支持', '邮箱支持'],
      active: true,
    },
    {
      title: '企业版',
      subTitle: '企业用户',
      price: '299元/月',
      btnText: '选择企业版',
      features: ['团队不限使用者', '不限次数/天', '不限次数请求/小时', '解锁专业版控制台', 'AI支持', '高级支持'],
      active: false,
    },
  ]
  return (
    <>
      <PricingHeader />
      <div className="container mx-auto pt-8">
        <h2 className="text-xl font-bold md:mt-8 md:text-4xl">选择适合您的计划</h2>
        <div className="mt-10 grid gap-4 text-left xl:grid-cols-4">
          {list.map((item, index) => {
            return <PricingCard key={index} {...item} />
          })}
        </div>
        <h2 className="my-8 text-xl font-bold md:mt-16 md:text-4xl">API 积分</h2>
        <div className="mb-10">
          PicGenius的使用计费采用API积分模式。每个积分的价格为0.01元。基本请求的计费为每个请求1积分。高级API的计费高于基本费率，具体请参考下面的价格。超出免费额度的任何请求都将从账户余额中扣除。如果账户中没有积分（即余额为零）且已经超出额度，所有请求将被阻止。
        </div>
      </div>
    </>
  )
}

export default PricingPage
