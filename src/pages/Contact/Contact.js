import React, { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        ymaps.ready(init);

        function init() {
            // eslint-disable-next-line no-undef
            const map = new ymaps.Map('map', {
                center: [54.126362, 37.545536], // Координаты центра карты
                zoom: 16 
            });
             // eslint-disable-next-line no-undef
            const placemark = new ymaps.Placemark(
                [54.126362, 37.545536], // Координаты маркера
                { hintContent: 'Москва!', balloonContent: 'Столица России' }
            );

            map.geoObjects.add(placemark);
        }
    }, []);

    return(
        <div className="contact">
            <div className="title">
                <h1>Мы всегда на связи</h1>
            </div>
            <div className="contact-block">
                <div className="contact-info-main">
                    <div className="contact-info">
                        <div className="title-contacts"><h3>Контакты</h3></div>
                        <div className="phone">
                            <img className="imgcon1" src="https://img.icons8.com/?size=24&id=85164&format=png&color=FD7E14" alt=""></img>
                            <p>+7 (495) 777-77-77</p>
                        </div>
                        <div className="email">
                            <img className="imgcon1" src="https://img.icons8.com/?size=48&id=i3XElI5CmcBP&format=png&color=FD7E14" alt=""></img>
                            <p>alenhelena730@gmail.com</p>
                        </div>
                        <div className="adress">
                            <img className="imgcon1" src="https://img.icons8.com/?size=50&id=53430&format=png&color=FD7E14" alt=""></img>
                            <p>г. Тула, мкр. Косая гора, ул. Победы 31</p>
                        </div>
                    </div>
                    <div className="publics">
                            <h3>Соцсети и мессенджеры</h3>
                            <div className="img-social">
                                <img className="imgcon2" src="https://img.icons8.com/?size=80&id=7xE9VDBMDtZ0&format=png" alt=""></img>
                                <img className="imgcon" src="https://img.icons8.com/?size=48&id=13977&format=png" alt=""></img>
                                <img className="imgcon" src="https://img.icons8.com/?size=48&id=19622&format=png" alt=""></img>
                            </div>
                        </div>
                </div>
                <div className="map">
                    <div className="maps" id="map"></div>
                </div>
            </div>
        </div>
    )
}
export default Contact;