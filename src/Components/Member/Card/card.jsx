import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
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
                    <br />
                    <div className="members_card_button">
                        <a href={props.facebookLink} className="" target='_blank' rel="noreferrer"><BiLogoFacebook/></a>
                        &nbsp;&nbsp;
                        <a href={props.linkedinLink} className="" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default card