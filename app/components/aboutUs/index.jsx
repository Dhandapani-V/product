'use client'

import { Button , Link } from '@nextui-org/react'

export default function AboutQBL() {
  return (
    <section className="py-7 bg-[#edeff3] text-center ">
      <h2 className="text-2xl font-bold text-[#1A2348] mb-6">
        Why Choose Quality Bearings Online?
      </h2>

      <div className="max-w-6xl mx-auto px-2     text-[#1A2348] space-y-6">
        <p className='text-md text-[#131313]'>
          At Quality Bearings Online, we are a leading bearings supplier with over 75 years of industry experience.
          We are a multi award winning company, supplying bearings and engineering spares to customers in over 110 countries worldwide.
          We pride ourselves on offering trusted brands, expert knowledge, excellent customer service and rapid delivery anywhere in the world.
          What’s more, we ensure that our products are distributed globally within 1–3 working days.
        </p>
        <p className='text-md text-[#131313]'>
          Our products are used in sectors as diverse as Food Manufacturing, Aerospace, Oil and Gas, and Precision Engineering.
          Whether you are a large multi-national or a single-site company, we delight in exceeding your expectations.
          Trust us as your industry bearings supplier.
        </p>

        <div className="pt-4">
            <Button
              color="#ca9618"
              className="text-white font-semibold bg-[#ca9618] px-6 py-2 rounded-[4px] border-[1px] border-[#ca9618]"
              radius="full"
            >
              Read More
            </Button>
        </div>
      </div>
    </section>
  )
}
