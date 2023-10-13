import React from 'react'
import impcss from './impact.module.css'
import childlogo from './images/child.jpg'
import mapimg from './images/map.png'

function Impact() {
  return (
    <div>
     
      <div className="impcss.container">
      <div className={impcss.heading} id={impcss.area0}>
                    <h1>IMPACT- 2022</h1>
                </div>
                <div className={impcss.mycontainer}>
                <div className={impcss.mainbox} id={impcss.first}>
                 
                        <div>
                            <img src={childlogo} alt=""  />
                        </div>
                        <h2>500+</h2>
                        <div className={impcss.discr}>Student's life got changed, being provided with free of cost education </div>
                       
                    </div>
                    <div className={impcss.mainbox} id={impcss.second}>
                     
                        <div>
                            <img src={mapimg} alt=""  />
                        </div>
                        <h2>16</h2>
                        <div className={impcss.discr}> Student run Light centers
                                 in diffrent paer of india</div>
                       
                    </div><div className={impcss.mainbox} id={impcss.third}>
                     
                        <div>
                            <img src={childlogo} alt=""  />
                        </div>
                        <h2>5000+</h2>
                        <div className={impcss.discr}> - masks were distributed </div>
                       
                    </div><div className={impcss.mainbox} id={impcss.fourth}>
                     
                        <div>
                            <img src={childlogo} alt=""  />
                        </div>
                        <h2>2000+</h2>
                        <div className={impcss.discr}> NEEDY FAMILIES GOT FOOD   KITS </div>
                       
                    </div>

                </div>
                    
                </div>
      </div>
    
  )
}

export default Impact
