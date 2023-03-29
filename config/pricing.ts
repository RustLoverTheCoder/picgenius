import { PricingCardProps } from "@/components/pricing/Card";

export const list: PricingCardProps[] = [
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