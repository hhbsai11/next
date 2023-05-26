import React from 'react'

export const FlexLayout = () => {
  return (
    <div className="flex-container">
      <div className='row '>
      <div className="flex-item p-8">
      <h2 className= "text-lg font-semibold leading-snug tracking-tighter my-2 text-center">
        Consulting
      </h2>
      <p className='text-center  text-sm font-normal leading-snug tracking-tighter'>
      Diverse range of our service offerings, 
      domain expertise, experience of partners and 
      engagement team make us ideally suited to provide 
      you with enriching consulting experience

      </p>
      </div>
      <div className="flex-item p-8">
      <h2 className= "text-lg font-semibold leading-snug tracking-tighter my-2 text-center">
        Accounting
      </h2>
      <p className='text-center  text-sm font-normal leading-snug tracking-tighter'>
      Accounting is essential for management & statutory purposes. 
      Know more about  our scalable and flexible accounting model 
      to generate business critical periodic financial statements

      </p>
      </div>
      <div className="flex-item p-8">
      <h2 className= "text-lg font-semibold leading-snug tracking-tighter my-2 text-center">
        Assurance
      </h2>
      <p className='text-center  text-sm font-normal leading-snug tracking-tighter'>
      With more than a decade of proven expertise in providing assurance services to clients from various industries, 
      stake holders can be assured of reliable & trustworthy opinion on the financial statements.

      </p>
      </div>
      <div className="flex-item p-8">
      <h2 className= "text-lg font-semibold leading-snug tracking-tighter my-2 text-center">
        Tax
      </h2>
      <p className='text-center  text-sm font-normal leading-snug tracking-tighter'>
      Prudent tax planning and strategy is often the key to successfully & legally reducing your tax liability. 
      We go beyond tax compliance & proactively recommend tax strategies to optimise your tax.
      </p>
      </div>
      </div>
    </div>
  )
}
