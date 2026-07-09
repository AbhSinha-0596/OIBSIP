import { useState } from 'react'
import img1 from 'C:/Users/hp/Desktop/tribute_page/tribute-page/img1.png'
import img2 from 'C:/Users/hp/Desktop/tribute_page/tribute-page/img2.png'
import img3 from 'C:/Users/hp/Desktop/tribute_page/tribute-page/img3.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-sky-950 h-1vh py-6 gap-2 font-bold font-sans text-1xl flex justify-center">
        Honorary Tribute To<u className="italic"> Sir Ratan Naval Tata</u>(1973-2024)
    </div>
      <div className=" bg-[url(C:\Users\hp\Desktop\tribute_page\tribute-page\Ratan-Tata.jpg)] bg-cover bg-no-repeat bg-top flex gap-4 justify-left align-bottom py-40 px-10 text-white  w-100vw h-50vh">
        <div className=" bg-amber-600  text-2xl w-4vw max-w-100 h-1vh p-6 rounded-lg justify-left">
          <p>"I don't believe in taking right decisions.I take decisions and then make them right"</p>
          <p>-Shri Ratan Tata</p>
        </div>
        <div className="bg-sky-900 font-bold h-1vh w-5">
        </div>
      </div>
      
      <div className="bg-sky-950 p-10 h-full w-full flex justify-center gap-10 wrap-normal ">
        <div className="flex w-1vw justify-center rounded-2xl p-5 bg-slate-600 hover:ease-in" >
        <p>
          <b>Sir Ratan Naval Tata</b> was a visionary Indian industrialist and philanthropist. He is reknowed for his
          welfare-oriented leadership and prioritizing empathy over profit. He was the former chairperson of Tata Group and the Tata Sons and 
          is widely revered for his ethical leadership and compassion. Under his leadership, he transformed Tata industries from an India-
          centric business into a global organization.
          <br></br>
          <br></br> 
          Important events include:
          <br></br>
          <br></br>
          <p className="font-bold underline">From 1991-2012:Reforms and Global Scaling</p>
          After undertaking chairmanship in the year 1991, Sir Ratan N Tata implemented a number of policies designed to consolidate power,
          including the implementation of a retirement age, having subsidiaries report directly to the group office, and requiring 
          subsidiaries to contribute their profit to building the Tata group brand.Under his leadership, overlapping operations between 
          subsidiaries were streamlined into company-wide operations, with the group exiting unrelated businesses to take on globalization.
          During his 21 years of leading the Tata Group, he took several reforms to scale the Tata Group including Tata Steel,
          Tata Motors, Tata Green Energy etc. He expanded the Tata Group to a global-scale with his discipline and vision. Under
          his chairmanship, the Tata industries expanded globally thorugh successful acquisition of industries like Tetley, 
          Corus Steel and Jaguar Land Rover(JLR).
          <br></br>
          <br></br>
          <p className="font-bold underline">Post-Chairmanship: Innovation, Philantropy and EV Vision</p>
          He prioritized innovation and delegated many responsibilities to young talents. He invested in around 50 startups and supported their growth and establishment.
          Under his visionary leadership, he promoted the launch of the Tata Nano - aimed to provide an affordable and safe vehicle for Indian families.
          He also envisioned the focus of improving the environmental-status of India which was then carried forward by the <b>Tata Motors</b> with the production of <b>Tigor EV</b> and later electric vehicles.
          <br></br>
          <br></br>
          Sir Ratan N Tata kept empathy and human-welfare as his priority and led the establishment of <b>Sir Dorabji Tata Trust</b>, transforming his father's 
          dream into reality. He donated around 60-65% of his profits to the trusts. The <b>Sir Dorabji Tata Trust</b> and <b>Sir Ratan Tata Trust</b> are the 
          largest private-sector philanthropic trusts in India. He notably expanded the provision of cancer care in India and donated heavily during 
          the COVID-19 pandemic to support lives. 
          <br></br>
          </p>
          </div>
      </div>
      <div className="bg-sky-800 p-6 flex h-100 justify-center px-10 gap-10 w-full">
            <div className="bg-amber-700 h-50% w-50%">
              <img src={img1}
              alt="Sir Ratan N Tata"
              className="h-full w-full object-cover" />
            </div>
            <div className="bg-sky-900 h-50% w-50%">
              <img src={img2}
              alt="Sir Ratan N Tata during launch of Tata Nano(2008)"
              className="h-full w-full object-cover"
               />
            </div>
          </div>
      <div className="bg-sky-950 justify-center py-10 px-20">
        <p>
          Sir Ratan N Tata is remembered throughout the world with his principles and empowering visions. He established the India's industrial power
          across the world with his discipline and priority to innovation and welfare of people. He inspires the world till today with his values 
          and industrial reforms. He was a compassionate leader ready for strong and future-driven decisions. He kept empathy over profit and 
          set the foundations of the Tata Group globally.
          <br></br>
          <br></br>
        </p>
        <p className="bg-slate-500 p-4 rounded-lg justify-center wrap-normal ">
          "If you want to run fast, run alone. But if you want to run far, run together"
          <br></br>
          -Sir Ratan N Tata
          <br></br>
          <br></br>
          "Apart from the values and ethics which I have lived by, the legacy I would like to leave behind is a very simple one-
          that I have always stood up for what I consider to be the right thing, and I have tried to be as fair and equitable as I could be."
          <br></br>
          -Sir Ratan N Tata
        </p>
      </div>
      <div className="bg-sky-700 flex h-1vh justify-center w-full p-6">
      <div className="h-50% w-50%">
        <img src={img3} 
        alt="Remebering Shri Ratan N Tata"
        className="h-50% w-50% object-cover"/>
      </div>
      </div>
    </>
  )
}
export default App;
