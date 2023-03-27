import React from 'react'
import PricingHeader from '@/components/pricing/header'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const PricingPage = () => {
  const list = [
    {
      title: '免费版',
      subTitle: '尝试一下',
      price: '免费开始',
      btnText: '开始使用',
      features: ['Unlimited users', 'Basic reports', 'Basic security'],
    },
    {
      title: '个人版',
      subTitle: '个人用户',
      price: '29.9元/月',
      btnText: '选择个人版',
      features: ['Unlimited users', 'Basic reports', 'Basic security'],
    },
    {
      title: '专业版',
      subTitle: '专业用户',
      price: '99.9元/月',
      btnText: '选择专业版',
      features: ['Unlimited users', 'Basic reports', 'Basic security'],
    },
    {
      title: '企业版',
      subTitle: '企业用户',
      price: '299元/月',
      btnText: '选择企业版',
      features: ['Unlimited users', 'Basic reports', 'Basic security'],
    },
  ]
  return (
    <>
      <PricingHeader />
      <div className="container mx-auto pt-8">
        <h2 className="text-xl font-bold md:mt-8 md:text-4xl">选择适合您的计划</h2>
        <div className="mt-10 grid gap-4 text-left xl:grid-cols-4">
          {list.map((item, index) => {
            return (
              <div className="overflow-hidden rounded-lg border bg-zinc-800 md:scale-90" key={index}>
                <div className="p-8">
                  <h5 className="mb-2 text-3xl font-bold capitalize text-white">{item.title}</h5>
                  <h6 className="mb-2 capitalize text-white">{item.subTitle}</h6>
                  <p className="font-bold">{item.price}</p>
                </div>
                <div className="border-t border-zinc-700 p-6">
                  <button className="btn block w-full text-center">
                    <span>{item.btnText}</span>
                  </button>
                </div>
                <div className="tgbc border-t border-zinc-700 p-6">
                  <ul>
                    <li className="mb-4 font-bold">Plan Includes</li>
                    {item.features.map((feature, index) => {
                      return (
                        <li className="mb-4 grid grid-cols-7 items-center last:mb-0" key={index}>
                          <CheckCircleIcon className="h-6 w-6" />
                          <span className="col-span-6">{feature}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        <h2 className="my-8 text-xl font-bold md:mt-16 md:text-4xl">API Credits</h2>
        <div className="mb-10">
          PicGenius的使用计费采用API积分模式。每个积分的价格为0.01元。基本请求的计费为每个请求1积分。高级API的计费高于基本费率，具体请参考下面的价格。超出免费额度的任何请求都将从账户余额中扣除。如果账户中没有积分（即余额为零）且已经超出额度，所有请求将被阻止。
        </div>
      </div>
    </>
  )
}

export default PricingPage
