import { useEffect } from 'react';
import lightDonateData from './lightDonateData';
import './LightDonate.css';

export default function LightDonate() {

    useEffect(() => {
        window.scrollTo(0, 0);
        // document.title = "Light Donate | GYWS";

    }, [])

    return (
        <>
            <div className="light-donate-container">
                {
                    lightDonateData.map((data, index) => {
                        return (
                            <div className="light-donate-card" key={index}>
                                <div className='light-donate-card-title'>{data.title}</div>
                                <div className='light-donate-card-description'>{data.description}</div>
                                <div class="text-center">
                                    <form>
                                        <script src="https://checkout.razorpay.com/v1/payment-button.js"
                                            data-payment_button_id="pl_LSjrB60pFvlrpl" async> </script>
                                    </form>
                                </div>

                            </div>
                        )
                    }
                    )
                }
            </div>
        </>
    );
}