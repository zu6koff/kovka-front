import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className='service-conteiner'>
                <div className='service-block1'>
                    <div className="img-service">
                        <img src={"https://omamedia.ru/upload/iblock/a08/kj2dmjcx6cpl0k6tdk5mfu4p5j983fng.jpg"} alt=''></img>
                    </div>
                    <div className='texth'><h1>Услуги нашей студии</h1></div>
                        <div className='textpp'>
                        <p>Мы гордимся тем, что превращаем металл в настоящие произведения искусства, 
                            которые украшают дома и сады наших клиентов. Наша команда опытных мастеров 
                            создает уникальные изделия, которые отличаются высокой прочностью, 
                            изысканным дизайном и безупречным качеством.</p>
                        </div>
                </div>
                <div className='service-block2'>
                    <div class="service-list1">
                        <h2>Доставка</h2>
                        <ul>
                            <li><span>При покупке свыше 50000 р., доставка по городу бесплатная.</span></li>
                            <li><span>Доставка по области и межгород рассчитывается индивидуально.</span></li>
                        </ul>
                    </div>
                    <div class="service-list1">
                        <h2>Установка и замер</h2>
                        <ul>
                            <li><span>Выезд на замер по г.Тула</span><span>1000 руб.</span></li>
                            <li><span>Выезд и замер за город рассчитывается индивидуально.</span></li>
                            <li><span>Ворота распашные</span><span>от 7000 руб.</span></li>
                            <li><span>Калитка</span><span> от 4000 руб.</span></li>
                            <li><span>Ворота со встроенной калиткой</span><span>от 9000 руб.</span></li>
                            <li><span>Забор</span><span>от 1000 руб./п.м.</span></li>
                            <li><span>Перила</span><span>от 3000 руб./п.м.</span></li>
                            <li><span>Решётки</span><span>от 3000 руб./кв.м.</span></li>
                            <li><span>Ограды </span><span>от 650руб./столб</span></li>
                            <li><span>Козырек</span><span>от 5000 руб.</span></li>
                            <li><span>Беседка</span><span>от 5500руб./столб</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;