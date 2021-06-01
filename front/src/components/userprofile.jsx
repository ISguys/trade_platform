import React, { useState } from 'react';
import Footer from '../components/Footer';
import Modal from "../components/Modal";


const UserProfile = () => {
    const [modalActive, setModalActive] = useState(true)
   return (
   <>
    <div type="text/javascript" id="hde-kb-widget" data-host="hatterkeys.helpdeskeddy.com" data-lang="ru"></div>
        <div id="gamepage">

            <div id="frame2">
                <div id="avatar"></div>
            </div>

            <div id="profilename">★†SNIPĖR CÆT†★</div>
            <div id="Alloffers1"> Ссылка на обмен:</div>
            <div id="lookinsteam1"><input size="40"/></div>
            <div id="lookinsteam2"><input type="submit" value="Cохранить" id="searchblank1"/></div>
            <div id="genres1"> Ваши игры на продажу:</div>
            <div id="description1" ><button type="submit" id="addblank" onClick ={() => setModalActive(true)}>Добавить игру</button></div>

        </div>
        <Modal active={modalActive} setActive={setModalActive} />
        <Footer/>
</>
);
   }
export default UserProfile;
