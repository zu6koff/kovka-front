import React from 'react';
import pngwing from 'assets/image/pngwing.com.png';
import icon1 from 'assets/image/icon1.png';
import icon2 from 'assets/image/icon2.png';
import icon3 from 'assets/image/icon3.png';
import icon4 from 'assets/image/icon4.png';



const Home = () => {
    return(
        <div className="home">
            <div className='home-block1'>
                <div className='h1-block1'><h1>Невероятные шедевры из металла</h1></div>
                <div className='p-block1'><p>Наши изделия ручной ковки поражают своей изысканной красотой и долголетием.</p></div>
            </div>
            <div className="home-block2">
                <div className="img-home-block2">
                    <img src={pngwing} alt=''></img>
                </div>
                <div className="txt-home-block2">
                    <div className="h-block2">
                        <h2>Искусство ковки в каждой детали: знакомьтесь со студией <span>«Heart of Forge»</span></h2>
                    </div>
                    <div className="p-block2">
                        <p>Мастерская художественной ковки «Heart of the Forge» готова воплотить ваши мечты и идеи в реальность. 
                        Мы также предлагаем услуги индивидуального заказа, чтобы создать уникальное изделие, полностью соответствующее вашим потребностям и предпочтениям.
                        <br/><br/> Наша команда готова принять любой вызов и сделать все возможное, чтобы удовлетворить ваши самые смелые ожидания.</p>
                    </div>
                </div>
            </div>
            <div className="home-block3">
                <div className="icons-card">
                   <div className="icon"><img src={icon1} alt=''></img></div>
                   <div className="h-icon-card"><h3>Уникальный дизайн</h3></div>
                   <div className="p-icon-card"><p>Создание индивидуальных и оригинальных дизайнов</p></div>
                </div>
                <div className="icons-card">
                    <div className="icon"><img className='imgcr' src={icon2} alt=''></img></div>
                   <div className="h-icon-card"><h3>Мастерство и опыт</h3></div>
                   <div className="p-icon-card"><p>Работы выполняются наивысшим уровнем мастерства</p></div>
                </div>
                <div className="icons-card">
                    <div className="icon"><img src={icon3} alt=''></img></div>
                   <div className="h-icon-card"><h3>Качественные материалы</h3></div>
                   <div className="p-icon-card"><p>Используются только самые лучшие материалы</p></div>
                </div>
                <div className="icons-card">
                    <div className="icon"><img src={icon4} alt=''></img></div>
                   <div className="h-icon-card"><h3>Индивидуальный подход</h3></div>
                   <div className="p-icon-card"><p>Каждый заказчик получает индивидуальное внимание</p></div>
                </div>
            </div>
            <div className="home-block4">
                <div className="h-home-block4"><h1>Наши работы</h1></div>
                <div className="izdelie">
                    <img src={"https://www.leforgeron.fr/ressources/images/65c4110f1e50.JPG"} alt=''></img>
                    <div className='p-izdelie'>
                        <h1>Кованые ворота</h1>
                        <p>Ворота создают первое впечатление о доме и его обитателях, подчеркивая статус и вкус хозяев.
                            Кованые ворота могут быть различной формы, с узорами и орнаментами, выполненными вручную мастерами. Такие ворота не 
                            только являются элементом безопасности и защиты, но и становятся украшением, 
                            придающим изысканность и индивидуальность вашему дому.</p>
                    </div>
                </div>
                <div className="izdelie2">
                    <div className='p-izdelie2'>
                        <h1>Кованые ограждения</h1>
                        <p>Кованые ограждения - это превосходное решение для создания уникального облика вашего участка или дома. 
                            Они могут быть выполнены в различных стилях - от классического до современного, и украшены различными
                            узорами и элементами, созданными с помощью художественной ковки. Кованые ограждения  являются выразительным элементом дизайна, добавляющим изысканности и роскоши вашему пространству.</p>
                    </div>
                    <img src={"https://get.pxhere.com/photo/table-wood-window-home-balcony-railing-metal-facade-living-room-furniture-room-ornament-flowers-interior-design-design-iron-wrought-iron-dining-room-home-front-blacksmithing-housewife-curlicue-metal-decorating-oberdollendorf-window-covering-685820.jpg"} alt=''></img>
                </div>
                <div className="izdelie">
                    <img src={"https://ogon-kovka.ru/wp-content/uploads/2018/04/kozirkyjpg-7.jpg"} alt=''></img>
                    <div className='p-izdelie'>
                        <h1>Кованые навесы</h1>
                        <p>Кованые навесы - это изысканные конструкции, которые не только защищают от погодных условий,
                             но и украшают ваш двор или сад. Они могут быть выполнены в различных формах и стилях, с 
                             использованием кованых элементов и узоров. Кованые навесы придают уют и атмосферу роскоши 
                             вашему ландшафту, создавая уютное место для отдыха и общения с близкими.</p>
                    </div>
                </div>
            </div>
            <div className="home-block5">
            <div className="textblock">Остались вопросы?</div>
                <div className="textb">Заполните форму ниже, мы свяжемся с Вами, чтобы ответить на все вопросы</div>
                <iframe 
                    src="https://forms.yandex.ru/u/665432f643f74f01f73b8173/?iframe=1" 
                    frameBorder="0" 
                    name="ya-form-665432f643f74f01f73b8173" 
                    width="650" 
                    height="400"
                    title="Форма обратной связи">
                </iframe>
            </div>
        </div>
    )  
}
export default Home;