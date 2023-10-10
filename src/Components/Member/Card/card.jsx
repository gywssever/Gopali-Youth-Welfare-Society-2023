import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import './card.css'
function card(props) {
    return (
        <>
            <div className="members_card">
                <div className="members_card_image">
                    <img src={props.imageUrl} alt="imae" srcset="" />
                </div>
                <div className="members_card_info">
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                    <div className="members_card_button">
                        <a href={props.facebookLink} className="" target='_blank' rel="noreferrer"><BiLogoFacebook/></a>
                        &nbsp;&nbsp;
                        <a href={props.linkedinLink} className="" target='_blank' rel="noreferrer"><AiOutlineLinkedin/></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default card