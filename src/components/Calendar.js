export default function Calendar() {
    return (
        <div  id="agenda">
            <h2>
                Calendário de eventos
            </h2>
            <iframe className="w-full h-96 mx-auto my-4 lg:px-20" src="https://calendar.google.com/calendar/embed?src=kevelinmmattos%40gmail.com&ctz=America%2FSao_Paulo" frameborder="1" scrolling="no"></iframe>
        </div>
       
    );
  }
  
