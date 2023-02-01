export default function Calendar() {
  return (
    <div  id="agenda" className=" p-6 " >
     
      <iframe
        src="https://embed.styledcalendar.com/#eARt4nhDSG6ZeXWzpcGF"
        title="Calendário AFEUP"
        className=" styled-calendar-container w-full "
        data-cy="calendar-embed-iframe"

      ></iframe>
      <script
        async
        type="module"
        src="https://embed.styledcalendar.com/assets/parent-window.js"
    
      ></script>
    </div>
  );
}
