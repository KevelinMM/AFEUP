export default function Calendar() {
  return (
    <div  id="agenda" className=" flex flex-col items-center justify-center relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-6 mt-8 md:mt-20 bg-[#d7e3f06c]" >
     <h2 className="page-title">Calendário de eventos</h2>
      <iframe
        src="https://embed.styledcalendar.com/#eARt4nhDSG6ZeXWzpcGF"
        title="Calendário AFEUP"
        className=" styled-calendar-container w-full mb-8 md:mb-20"
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
