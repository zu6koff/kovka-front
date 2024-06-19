import React from 'react';
import pngwing from 'assets/image/pngwing.com.png';
import icon1 from 'assets/image/icon1.png';
import icon2 from 'assets/image/icon2.png';
import icon3 from 'assets/image/icon3.png';
import icon4 from 'assets/image/icon4.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);
    const [currentBlock, setCurrentBlock] = useState(0);
    const nextBlock = () => {
      setCurrentBlock((prevBlock) => (prevBlock + 1) % products.length);
    };
    const prevBlock = () => {
      setCurrentBlock((prevBlock) => (prevBlock - 1 + products.length) % products.length);
    };
    const products = [
        {
          title: "Кованые ворота",
          description: "Ворота создают первое впечатление о доме и его обитателях, подчеркивая статус и вкус хозяев. Кованые ворота могут быть различной формы, с узорами и орнаментами, выполненными вручную мастерами. Такие ворота не только являются элементом безопасности и защиты, но и становятся украшением, придающим изысканность и индивидуальность вашему дому.",
          image: "https://www.leforgeron.fr/ressources/images/65c4110f1e50.JPG"
        },
        {
          title: "Кованые ограждения",
          description: "Кованые ограждения - это превосходное решение для создания уникального облика вашего участка или дома. Они могут быть выполнены в различных стилях - от классического до современного, и украшены различными узорами и элементами, созданными с помощью художественной ковки. Кованые ограждения  являются выразительным элементом дизайна, добавляющим изысканности и роскоши вашему пространству.",
          image: "https://get.pxhere.com/photo/table-wood-window-home-balcony-railing-metal-facade-living-room-furniture-room-ornament-flowers-interior-design-design-iron-wrought-iron-dining-room-home-front-blacksmithing-housewife-curlicue-metal-decorating-oberdollendorf-window-covering-685820.jpg"
        },
        {
          title: "Кованые навесы",
          description: "Кованые навесы - это изысканные конструкции, которые не только защищают от погодных условий, но и украшают ваш двор или сад. Они могут быть выполнены в различных формах и стилях, с использованием кованых элементов и узоров. Кованые навесы придают уют и атмосферу роскоши вашему ландшафту, создавая уютное место для отдыха и общения с близкими.",
          image: "https://ogon-kovka.ru/wp-content/uploads/2018/04/kozirkyjpg-7.jpg"
        },
        {
            title: "Кованые лестницы",
            description: "Кованые лестницы представляют собой не только функциональные элементы, но и искусство, которое добавляет изысканности и стиля любому интерьеру или экстерьеру. Они изготавливаются из высококачественных материалов с использованием кованых элементов и узоров, что придает каждой лестнице уникальный и индивидуальный характер.",
            image: "https://aristmet.ru/assets/lib/2021/07/02/4%2023.jpg"
        },
        {
            title: "Кованые мангалы",
            description: "Кованые мангалы — это идеальное сочетание функциональности и эстетики для отдыха на природе. Они предлагают надежную конструкцию для приготовления пищи на открытом воздухе, выполненную из прочного металла с использованием технологии ковки. Кованые мангалы не только служат практической цели, обеспечивая идеальные условия для готовки, но и украшают обстановку своим уникальным дизайном и роскошным внешним видом.",
            image: "https://mirkovki.by/sites/default/files/photos/catalog/logo/kovanyy_mangal-05.jpg"
        }
      ];
    
      return (
        <div className="home">
            <div className='home-block1' >
                <div className='h1-block1' data-aos="fade-up" data-aos-delay='100'><h1>Невероятные шедевры из металла</h1></div>
                <div className='p-block1' data-aos="fade-up" data-aos-delay='300'><p>Наши изделия ручной ковки поражают своей изысканной красотой и долголетием.</p></div>
            </div>
            <div className="home-block2">
                <div className="img-home-block2">
                    <img data-aos="fade-up" data-aos-delay='300' src={pngwing} alt='' />
                </div>
                <div className="txt-home-block2">
                    <div className="h-block2" data-aos="fade-up" data-aos-delay='400'>
                        <h2>Искусство ковки в каждой детали: знакомьтесь со студией <span>«Heart of Forge»</span></h2>
                    </div>
                    <div className="p-block2" data-aos="fade-up" data-aos-delay='500'>
                        <p>Мастерская художественной ковки «Heart of the Forge» готова воплотить
                            ваши мечты и идеи в реальность. Мы также предлагаем услуги индивидуального заказа,
                            чтобы создать уникальное изделие, полностью соответствующее вашим потребностям и предпочтениям.
                            <br /><br /> Наша команда готова принять любой вызов и сделать все возможное, 
                            чтобы удовлетворить ваши самые смелые ожидания.</p>
                    </div>
                    <div className="btn-on-home1">
                        <button className='in-catalog' data-aos="fade-up" data-aos-delay='500'><a href="/about">Подробнее</a></button>
                    </div>
                </div>
            </div>
            <div className="home-block3">
                <div className="icons-card" data-aos="fade-up" data-aos-delay='100'>
                    <div className="icon"><img src={icon1} alt=''></img></div>
                    <div className="h-icon-card"><h3>Уникальный дизайн</h3></div>
                    <div className="p-icon-card"><p>Создание индивидуальных и оригинальных дизайнов</p></div>
                </div>
                <div className="icons-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><img className='imgcr' src={icon2} alt=''></img></div>
                    <div className="h-icon-card"><h3>Мастерство и опыт</h3></div>
                    <div className="p-icon-card"><p>Работы выполняются наивысшим уровнем мастерства</p></div>
                </div>
                <div className="icons-card" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><img src={icon3} alt=''></img></div>
                    <div className="h-icon-card"><h3>Качественные материалы</h3></div>
                    <div className="p-icon-card"><p>Используются только самые лучшие материалы</p></div>
                </div>
                <div className="icons-card" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><img src={icon4} alt=''></img></div>
                    <div className="h-icon-card"><h3>Индивидуальный подход</h3></div>
                    <div className="p-icon-card"><p>Каждый заказчик получает индивидуальное внимание</p></div>
                </div>
            </div>
            <div className="home-block4">
                <div className="h-home-block4">
                    <h2 data-aos="fade-up" data-aos-delay='200'>Наши работы</h2>
                </div>
                <div className="carousel-wrapper"  style={{ transform: `translateX(-${currentBlock * 100}%)` }}>
                    {products.map((product, index) => (
                        <div key={index} className="izdelie" data-aos="fade-up" data-aos-delay='200'>
                            <div className="izdelie-item">
                                <img src={product.image} alt='' />
                                <div className='p-izdelie'>
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={prevBlock} data-aos="fade-up" data-aos-delay='200'>
                    &#10094;
                </button>
                <button className="next" onClick={nextBlock} data-aos="fade-up" data-aos-delay='200'>
                    &#10095;
                </button>
                <div className="btn-on-home">
                        <button className='in-catalog' data-aos="fade-up" data-aos-delay='100'><a href="/shop">В каталог</a></button>
                    </div>
            </div>
            <div className="home-block5">
                <div className="textblock" data-aos="fade-up" data-aos-delay='100'>Остались вопросы?</div>
                <div className="textb"data-aos="fade-up" data-aos-delay='200'>Заполните форму ниже, мы свяжемся с Вами, чтобы ответить на все вопросы</div>
                <iframe className='iframe'
                    data-aos="fade-up" data-aos-delay='300'
                    src="https://forms.yandex.ru/u/665432f643f74f01f73b8173/?iframe=1"
                    frameBorder="0"
                    name="ya-form-665432f643f74f01f73b8173"
                    title="Форма обратной связи">
                </iframe>
            </div>
        </div>
    );
}
export default Home;