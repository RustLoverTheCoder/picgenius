import { CheckCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Style from './index.module.css'

export interface PricingCardProps {
  title: string
  subTitle: string
  price: string
  btnText: string
  features: string[]
  active: boolean
}

const PricingCard = (item: PricingCardProps) => {
  return (
    <div className={clsx('overflow-hidden rounded-lg border bg-base-200 border-[#3F3F46]', !item.active && 'md:scale-90')}>
      <div className={clsx('p-8', item.active && Style['gradient-bg'])}>
        <h5 className="mb-2 text-3xl font-bold capitalize text-white">{item.title}</h5>
        <h6 className="mb-2 capitalize text-white">{item.subTitle}</h6>
        <p className="font-bold">{item.price}</p>
      </div>
      <div className="border-t border-[#3F3F46] p-6">
        <button className="btn block w-full text-center bg-primary-100">
          <span>{item.btnText}</span>
        </button>
      </div>
      <div className="tgbc border-t border-[#3F3F46] p-6">
        <ul>
          <li className="mb-4 font-bold">计划包含内容</li>
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
}

export default PricingCard
