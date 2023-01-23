export default function Calendar() {
  return (
    <div id="agenda">
      <h2>Calendário de eventos</h2>
      <iframe
        src="https://embed.styledcalendar.com/#rqh6A0DP4tUlDoyASTQO"
        title="Styled Calendar"
        className="styled-calendar-container w-[1000px] "
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
