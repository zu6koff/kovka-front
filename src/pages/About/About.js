import React from 'react';
import masterimg from "assets/image/master.webp";
import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from 'react';


const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);
    return (
        <div className="about">
            <div className="about-block1">
                <div className='block1'>
                    <div className='imgmast' data-aos="fade-up" data-aos-delay='100'><img src={masterimg} alt=''/></div>
                    <div className='texth' data-aos="fade-up" data-aos-delay='200'><h1>Мастерская «Heart of Forge»</h1></div>
                    <div className='textp' data-aos="fade-up" data-aos-delay='300'>
                        <p>Мы - мастерская Heart of Forge, специализирующаяся на высококачественной художественной ковке.
                             Наша команда талантливых мастеров обладает многолетним опытом и профессиональными навыками в 
                             создании уникальных металлических изделий. Мы гордимся своим мастерством и страстью к работе, 
                             что отражается в каждом изделии, которое мы создаем.</p>
                        
                    </div>
                    <div className="btn-block">
                    <button className="in_catalog" data-aos="fade-up" data-aos-delay='100'><a href="/shop">В каталог</a></button>
                </div>
                </div>
            </div>
            <div className="about-block2">
                <div className="stats">
                    <div className="stat" >
                        <div className="stat-number" data-aos="fade-up" data-aos-delay='100'>3000</div>
                        <div className="stat-text" data-aos="fade-up" data-aos-delay='200'>выполненных изделий за прошлый год</div>
                    </div>
                    <div className="stat" >
                        <div className="stat-number" data-aos="fade-up" data-aos-delay='300'>21</div>
                        <div className="stat-text" data-aos="fade-up" data-aos-delay='400'>поставщик работает с нами на территории России</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number" data-aos="fade-up" data-aos-delay='500'>20</div>
                        <div className="stat-text" data-aos="fade-up" data-aos-delay='600'>человек в нашем стате сотрудников</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number" data-aos="fade-up" data-aos-delay='700'>10+</div>
                        <div className="stat-text" data-aos="fade-up" data-aos-delay='800'>заказов поступает в нашу базу ежедневно</div>
                    </div>
                </div>
               </div>
               <div className="about-block3">
                <div className="masters-block">
                    <div className='texth2' data-aos="fade-up" data-aos-delay='100'>
                        <h2>Наши мастера</h2>
                    </div>
                    <div className="masters-card">
                        <div className='card' data-aos="fade-up" data-aos-delay='100'>
                            <div className='imgcard'><img src={"https://belitt.ru/wp-content/uploads/2016/09/%D0%A1%D0%B2%D0%B0%D1%80%D1%8C%D1%88%D0%B8%D0%BA.jpg"} alt=''/></div>
                            <div className='textcard'>
                                <h2>Анатолий</h2>
                                <p> Опытный и профессиональный сотрудник мастерской, специализирующийся на сварочных работах. 
                                    Он обладает широким опытом в сварке различных металлических конструкций и деталей. 
                                    Его навыки и опыт позволяют ему качественно выполнять сложные задачи по сварке, 
                                    обеспечивая высокий уровень качества и точности работ.</p>
                            </div>
                        </div>
                        <div className='card' data-aos="fade-up" data-aos-delay='200'>
                            <div className='imgcard'><img src={"https://img.freepik.com/free-photo/side-view-man-spraying-powder-paint-from-a-gun_23-2149878746.jpg"} alt=''/></div>
                            <div className='textcard'>
                                <h2>Алексей</h2>
                                <p>Опытный профессиональный маляр по железу с богатым опытом работы. Его талант и мастерство 
                                    проявляются в каждой краске, которую он наносит на металлические поверхности.
                                    В работе он обладает тонким вкусом и вниманием к деталям, что позволяет ему 
                                    достигать идеальных результатов.</p>
                            </div>
                        </div>
                        <div className='card' data-aos="fade-up" data-aos-delay='300'>
                            <div className='imgcard'><img src={"https://img.freepik.com/free-photo/medium-shot-architect-with-plans_23-2148815564.jpg?t=st=1714042772~exp=1714046372~hmac=ea6c212d56a8a5b951f96163e1dca53dd8718f50fab71446e7526404dc037c32&w=740"} alt=''/></div>
                            <div className='textcard'>
                                <h2>Мария</h2>
                                <p>Специализируется на создании уникальных чертежей.
                                    Ее работы отличаются изысканным стилем и вдохновляющей креативностью. Благодаря внимательному 
                                    отношению к деталям и умению передавать атмосферу идеи через рисунок, Мария создает эскизы, 
                                    которые становятся основой для наших металлических изделий.</p>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
        </div>
    );
};

export default About;
