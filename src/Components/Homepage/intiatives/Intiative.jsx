import inticss from './intiative.module.css'
import jvmlogo from './images/JVM.jpg'
import lightlogo from './images/light a.jpg'
import covidlogo from './images/Covid 19 a.jpg'

export default function intiative() {
    return (
        <>
            <div className={inticss.container}>
                <div className={inticss.heading} id={inticss.area0}>
                    <h1>OUT INTIATIVES</h1>
                </div>
                <div className={inticss.box} id={inticss.area1}>
                    <div className={inticss.name}><b style={{ color: "#05A1C7" }}> Jagriti Vidya Mandir </b></div>
                    <div className={inticss.mainbox} id={inticss.first}>
                        <div id={inticss.image}>
                            <img src={jvmlogo} alt="" />
                        </div>
                        <div className={inticss.discr}> To educate each and every child for a better tomorrow</div>
                        <div id={inticss.number} >500+</div>
                        <div className={inticss.discr}>Student's life got changed, being provided with free of cost education
                        </div>
                        <button style={{
                            backgroundColor: '#F16A36',
                            borderColor: '#F16A36',
                    
                        }}><b><a style={{textDecoration: 'none', color: 'black'}} href="https://www.gyws.org/initiatives.html">Read More </a> </b></button>
                    </div>
                </div>
                <div className={inticss.box} id={inticss.area2}>
                    <div className={inticss.name}><b style={{ color: "#F9EE34 " }}>LiGHT </b></div>
                    <div className={inticss.mainbox} id={inticss.middle}>
                        <div id={inticss.image}>
                            <img src={lightlogo} alt="" />
                        </div>
                        <div className={inticss.discr}>"Expansion Initiative
                            - forming a PAN India network of socially motivated youth."</div>
                        <div id={inticss.number} >12+</div>
                        <div className={inticss.discr}>Student run centers
                        </div>
                        <button style={{
                            backgroundColor: '#F16A36',
                            borderColor: '#F16A36'
                        }}><b><a style={{textDecoration: 'none', color: 'black'}} href="https://light.org.in/">Read More </a> </b></button>
                    </div>
                </div>

                <div className={inticss.box} id={inticss.area3}>
                    <div className={inticss.name}><b style={{ color: "#F16A36" }}> Covid-19 </b></div>
                    <div className={inticss.mainbox} id={inticss.third}>
                        <div id={inticss.image}>
                            <img src={covidlogo} alt="" />
                        </div>
                        <div className={inticss.discr}>Door to door distribution of basic amenities to the rural households</div>
                        <div id={inticss.number} >5000+</div>
                        <div className={inticss.discr}> masks were distributed
                        </div>
                        <div id={inticss.number} >2000+</div>
                        <div className={inticss.discr}>needy families got food kits
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
