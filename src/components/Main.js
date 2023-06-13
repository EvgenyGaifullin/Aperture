/* Компонент main - содержит в себе все содержимое страницы */

import Lead from './Lead';
import Clothes from './Clothes';
import About from './About';
import Clients from './Clients';
import '../styles/Main.css';

/*Main включает в себя компоненты Lead, Clothes, About и Clients, 
которые отображают информацию о компании, предоставляемых услугах, описании компании и клиентах.
Функция также использует компоненты handleOpenPopup и setType, которые передаются в Clothes для открытия всплывающего окна с формой заказа.*/

export default function Main(props) {
  return(
    <main className="content">
           <>
        <Lead />
        <Clothes  handleOpenPopup={props.handleOpenPopup} setType={props.setType}/>
        <About />
        <Clients />
      </>
    </main>

  )
}
