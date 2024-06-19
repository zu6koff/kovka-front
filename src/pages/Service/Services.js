import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className='service-conteiner'>
                <div className='service-block1'>
                    <div className="img-service" data-aos="fade-up" data-aos-delay='100'>
                        <img src={"https://omamedia.ru/upload/iblock/a08/kj2dmjcx6cpl0k6tdk5mfu4p5j983fng.jpg"} alt=''></img>
                    </div>
                    <div className='texth' data-aos="fade-up" data-aos-delay='200'><h1>Услуги нашей студии</h1></div>
                        <div className='textpp' data-aos="fade-up" data-aos-delay='300'>
                        <p>Мы гордимся тем, что превращаем металл в настоящие произведения искусства, 
                            которые украшают дома и сады наших клиентов. Наша команда опытных мастеров 
                            создает уникальные изделия, которые отличаются высокой прочностью, 
                            изысканным дизайном и безупречным качеством.</p>
                        </div>
                </div>
                <div className='service-block2'>
                    <div class="service-list1" data-aos="fade-up" data-aos-delay='100'>
                        <h2>Доставка</h2>
                        <ul>
                            <li><span>При покупке свыше 50000 р., доставка по городу бесплатная.</span></li>
                            <li><span>Доставка по области и межгород рассчитывается индивидуально.</span></li>
                        </ul>
                    </div>
                    <div class="service-list1">
                        <h2 data-aos="fade-up" data-aos-delay='100'>Установка и замер</h2>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Выезд на замер по г.Тула</span><span>1000 руб.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Выезд и замер за город рассчитывается индивидуально.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Ворота распашные</span><span>от 7000 руб.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Калитка</span><span> от 4000 руб.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Ворота со встроенной калиткой</span><span>от 9000 руб.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Забор</span><span>от 1000 руб./п.м.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Перила</span><span>от 3000 руб./п.м.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Решётки</span><span>от 3000 руб./кв.м.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Ограды </span><span>от 650руб./столб</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Козырек</span><span>от 5000 руб.</span></li>
                            <li data-aos="fade-up" data-aos-delay='100'><span>Беседка</span><span>от 5500руб./столб</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;